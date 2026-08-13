-- REQUIRED for the website contact form (anon key insert)
-- Supabase → SQL Editor → Run this now

-- Ensure base columns the form uses
alter table public.contact_inquiries
  add column if not exists phone text;

alter table public.contact_inquiries
  add column if not exists service text;

alter table public.contact_inquiries
  add column if not exists message text;

alter table public.contact_inquiries
  add column if not exists created_at timestamptz default now();

-- Phone should be required for new rows (skip if you already have null phones)
do $$
begin
  alter table public.contact_inquiries alter column phone set not null;
exception when others then
  null;
end $$;

alter table public.contact_inquiries enable row level security;

drop policy if exists "Anyone can submit contact inquiries" on public.contact_inquiries;
drop policy if exists "anon_insert_contact_inquiries" on public.contact_inquiries;
drop policy if exists "public_insert_contact_inquiries" on public.contact_inquiries;

-- Allow the public website (anon key) to insert leads
create policy "Anyone can submit contact inquiries"
  on public.contact_inquiries
  for insert
  to anon, authenticated
  with check (true);

-- Optional: let logged-in dashboard users read leads
drop policy if exists "Authenticated users can read contact inquiries" on public.contact_inquiries;
create policy "Authenticated users can read contact inquiries"
  on public.contact_inquiries
  for select
  to authenticated
  using (true);

-- Smoke test (should succeed as postgres / table owner in SQL editor):
-- insert into public.contact_inquiries (phone, service, message)
-- values ('+18885550123', 'Printer Offline', 'Brand: HP | Urgency: ASAP | test');
