-- Polyglotyping — user progress sync
-- Run this once in the Supabase dashboard: SQL Editor → New query → paste → Run.
--
-- One row per user. All practice progress (the localStorage bundle) is stored
-- as a single JSON document. Row Level Security guarantees each user can only
-- read and write their own row.

create table if not exists public.user_progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_progress enable row level security;

-- A user may read their own progress.
drop policy if exists "read own progress" on public.user_progress;
create policy "read own progress"
  on public.user_progress
  for select
  using (auth.uid() = user_id);

-- A user may insert their own progress row.
drop policy if exists "insert own progress" on public.user_progress;
create policy "insert own progress"
  on public.user_progress
  for insert
  with check (auth.uid() = user_id);

-- A user may update their own progress row.
drop policy if exists "update own progress" on public.user_progress;
create policy "update own progress"
  on public.user_progress
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
