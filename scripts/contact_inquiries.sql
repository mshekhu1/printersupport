-- ZamZam Print — contact / callback leads
-- Run in Supabase → SQL Editor → New query → Run
-- Matches app/components/ContactFormClient.js

-- 1) Table
create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- Used by the live contact form today
  phone text not null,
  service text,          -- printer issue (e.g. Printer Offline)
  message text,          -- freeform / brand + urgency summary

  -- Extra columns (form will fill these when present)
  printer_brand text,
  urgency text,
  status text not null default 'new',

  -- Optional extras for future forms
  name text,
  email text,
  source text default 'website_contact'
);

-- Helpful indexes
create index if not exists contact_inquiries_created_at_idx
  on public.contact_inquiries (created_at desc);

create index if not exists contact_inquiries_status_idx
  on public.contact_inquiries (status);

-- 2) If the table already existed with fewer columns, add missing ones
alter table public.contact_inquiries
  add column if not exists created_at timestamptz not null default now();

alter table public.contact_inquiries
  add column if not exists phone text;

alter table public.contact_inquiries
  add column if not exists service text;

alter table public.contact_inquiries
  add column if not exists message text;

alter table public.contact_inquiries
  add column if not exists printer_brand text;

alter table public.contact_inquiries
  add column if not exists urgency text;

alter table public.contact_inquiries
  add column if not exists status text not null default 'new';

alter table public.contact_inquiries
  add column if not exists name text;

alter table public.contact_inquiries
  add column if not exists email text;

alter table public.contact_inquiries
  add column if not exists source text default 'website_contact';

-- 3) RLS — public site can INSERT leads; nobody public can READ them
alter table public.contact_inquiries enable row level security;

-- Drop old policies if re-running this script
drop policy if exists "Anyone can submit contact inquiries" on public.contact_inquiries;
drop policy if exists "Authenticated users can read contact inquiries" on public.contact_inquiries;
drop policy if exists "Authenticated users can update contact inquiries" on public.contact_inquiries;

-- Anon + authenticated browsers may insert (the website form uses the anon key)
create policy "Anyone can submit contact inquiries"
  on public.contact_inquiries
  for insert
  to anon, authenticated
  with check (true);

-- Only logged-in Supabase users (dashboard / your admin) can read rows
create policy "Authenticated users can read contact inquiries"
  on public.contact_inquiries
  for select
  to authenticated
  using (true);

create policy "Authenticated users can update contact inquiries"
  on public.contact_inquiries
  for update
  to authenticated
  using (true)
  with check (true);

-- 4) Quick sanity check (optional)
-- insert into public.contact_inquiries (phone, service, message, printer_brand, urgency)
-- values ('+18885551212', 'Printer Offline', 'Brand: HP | Urgency: ASAP', 'HP', 'ASAP — Need to print today');
-- select * from public.contact_inquiries order by created_at desc limit 5;
