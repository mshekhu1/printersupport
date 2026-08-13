-- Run ALL of this in Supabase → SQL Editor
-- Makes the /contact form work even when table RLS is messy

-- 1) Columns the website form uses
alter table public.contact_inquiries
  add column if not exists phone text;
alter table public.contact_inquiries
  add column if not exists service text;
alter table public.contact_inquiries
  add column if not exists message text;
alter table public.contact_inquiries
  add column if not exists created_at timestamptz default now();

-- 2) Grants + insert policy (best effort)
grant usage on schema public to anon, authenticated;
grant insert on table public.contact_inquiries to anon, authenticated;

alter table public.contact_inquiries enable row level security;

drop policy if exists "Anyone can submit contact inquiries" on public.contact_inquiries;
create policy "Anyone can submit contact inquiries"
  on public.contact_inquiries
  for insert
  to anon, authenticated
  with check (true);

-- 3) Reliable path: SECURITY DEFINER RPC (what the website will call)
create or replace function public.submit_contact_inquiry(
  p_phone text,
  p_service text,
  p_message text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  new_id uuid;
begin
  if p_phone is null or length(trim(p_phone)) < 7 then
    raise exception 'Valid phone is required';
  end if;

  insert into public.contact_inquiries (phone, service, message)
  values (trim(p_phone), nullif(trim(p_service), ''), nullif(trim(p_message), ''))
  returning id into new_id;

  return new_id;
end;
$$;

revoke all on function public.submit_contact_inquiry(text, text, text) from public;
grant execute on function public.submit_contact_inquiry(text, text, text) to anon, authenticated;

-- 4) Quick check — should return a uuid
-- select public.submit_contact_inquiry('+18885550123', 'Printer Offline', 'Brand: HP | test rpc');
