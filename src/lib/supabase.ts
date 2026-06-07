import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY as string | undefined;

// Astro is static (SSG), so all auth runs in the browser using the public
// publishable key. The session is persisted to localStorage automatically.
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured) {
    return null;
  }
  if (!client) {
    client = createClient(supabaseUrl as string, supabaseKey as string, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        storageKey: 'polyglotyping-auth',
      },
    });
  }
  return client;
}
