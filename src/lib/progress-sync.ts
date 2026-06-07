import type { SupabaseClient, User } from '@supabase/supabase-js';

// localStorage keys that hold practice progress. Preference-only keys
// (UI language, target language) are intentionally left out of the sync.
export const PROGRESS_KEYS = [
  'typingProgress',
  'typingSiteExpressionStatus',
  'expressionProgress',
  'expressionQuizStats',
  'typingSelfAssessment',
  'typingPinnedTexts',
  'typingPinnedPracticeTargets',
  'typingMode',
] as const;

const SYNCED_AT_KEY = 'typingSiteProgressSyncedAt';
const LOCAL_BACKUP_KEY = 'typingSiteProgressLocalBackup';

type ProgressBundle = Record<string, string>;

function readBundle(): ProgressBundle {
  const bundle: ProgressBundle = {};
  for (const key of PROGRESS_KEYS) {
    try {
      const value = localStorage.getItem(key);
      if (value !== null) bundle[key] = value;
    } catch {}
  }
  return bundle;
}

function writeBundle(bundle: ProgressBundle): boolean {
  let changed = false;
  for (const key of PROGRESS_KEYS) {
    try {
      const next = bundle[key];
      const current = localStorage.getItem(key);
      if (typeof next === 'string') {
        if (current !== next) {
          localStorage.setItem(key, next);
          changed = true;
        }
      }
    } catch {}
  }
  return changed;
}

function bundleHasData(bundle: ProgressBundle): boolean {
  return Object.keys(bundle).length > 0;
}

async function pushProgress(client: SupabaseClient, userId: string): Promise<void> {
  const bundle = readBundle();
  const { error } = await client.from('user_progress').upsert(
    {
      user_id: userId,
      data: bundle,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' }
  );
  if (error) {
    console.warn('[progress-sync] push failed:', error.message);
    return;
  }
  try {
    localStorage.setItem(SYNCED_AT_KEY, new Date().toISOString());
  } catch {}
}

async function pullProgress(
  client: SupabaseClient,
  userId: string
): Promise<ProgressBundle | null> {
  const { data, error } = await client
    .from('user_progress')
    .select('data')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) {
    console.warn('[progress-sync] pull failed:', error.message);
    return null;
  }
  return (data?.data as ProgressBundle) ?? null;
}

/**
 * Reconcile local and cloud progress at sign-in.
 *
 * - Cloud empty  → push the local progress up (first time on this account).
 * - Cloud has data → the cloud is the source of truth: load it into
 *   localStorage. If the device had un-synced local progress, stash a
 *   one-time backup first so nothing is silently lost, then reload so the
 *   UI reflects the restored data.
 */
export async function syncOnSignIn(client: SupabaseClient, user: User): Promise<void> {
  const remote = await pullProgress(client, user.id);
  const local = readBundle();
  const hasSyncedBefore = (() => {
    try {
      return localStorage.getItem(SYNCED_AT_KEY) !== null;
    } catch {
      return false;
    }
  })();

  if (!remote || !bundleHasData(remote)) {
    await pushProgress(client, user.id);
    return;
  }

  // Cloud wins. Back up un-synced local data once, just in case.
  if (!hasSyncedBefore && bundleHasData(local)) {
    try {
      localStorage.setItem(LOCAL_BACKUP_KEY, JSON.stringify(local));
    } catch {}
  }

  const changed = writeBundle(remote);
  try {
    localStorage.setItem(SYNCED_AT_KEY, new Date().toISOString());
  } catch {}

  if (changed) {
    window.location.reload();
  }
}

/** Push the current local progress to the cloud (best effort). */
export async function flushProgress(client: SupabaseClient, user: User): Promise<void> {
  await pushProgress(client, user.id);
}

function snapshot(): string {
  return JSON.stringify(readBundle());
}

/**
 * Watch local progress and push changes to the cloud almost immediately.
 *
 * Same-tab localStorage writes don't fire `storage` events, so we poll a
 * lightweight serialized snapshot. When it changes (and a user is signed in)
 * we push — but no more often than `minIntervalMs`, so a burst of rapid
 * changes (typing a card, finishing a session) collapses into one upload.
 *
 * Returns a function that stops the watcher.
 */
export function startAutoSync(
  client: SupabaseClient,
  getUser: () => User | null,
  options: { pollMs?: number; minIntervalMs?: number } = {}
): () => void {
  const pollMs = options.pollMs ?? 1500;
  const minIntervalMs = options.minIntervalMs ?? 2000;

  let lastSnapshot = snapshot();
  let lastPushAt = 0;
  let pending = false;
  let pushing = false;

  async function maybePush() {
    if (pushing) return;
    const user = getUser();
    if (!user) return;
    const now = Date.now();
    if (now - lastPushAt < minIntervalMs) {
      pending = true;
      return;
    }
    pushing = true;
    pending = false;
    lastPushAt = now;
    try {
      await pushProgress(client, user.id);
    } finally {
      pushing = false;
    }
  }

  const id = window.setInterval(() => {
    const current = snapshot();
    if (current !== lastSnapshot) {
      lastSnapshot = current;
      maybePush();
    } else if (pending) {
      maybePush();
    }
  }, pollMs);

  return () => window.clearInterval(id);
}
