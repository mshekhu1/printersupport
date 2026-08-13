-- Use this when contact_inquiries ALREADY EXISTS with different columns.
-- Does NOT drop/recreate the table. Safe to re-run.

-- A) See what columns you already have
select column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_schema = 'public'
  and table_name = 'contact_inquiries'
order by ordinal_position;

-- B) Add only the columns the website form needs (keeps your old columns)
alter table public.contact_inquiries add column if not exists phone text;
alter table public.contact_inquiries add column if not exists service text;
alter table public.contact_inquiries add column if not exists message text;
alter table public.contact_inquiries add column if not exists name text;
alter table public.contact_inquiries add column if not exists email text;
alter table public.contact_inquiries add column if not exists created_at timestamptz default now();

-- C) Permissions for the public form
grant usage on schema public to anon, authenticated;
grant insert on table public.contact_inquiries to anon, authenticated;

alter table public.contact_inquiries enable row level security;

drop policy if exists "Anyone can submit contact inquiries" on public.contact_inquiries;
create policy "Anyone can submit contact inquiries"
  on public.contact_inquiries
  for insert
  to anon, authenticated
  with check (true);

-- D) RPC that only writes phone/service/message (works with old + new columns)
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

grant execute on function public.submit_contact_inquiry(text, text, text) to anon, authenticated;

-- E) Test (should return a uuid)
select public.submit_contact_inquiry(
  '+18885550123',
  'Printer Offline',
  'Brand: HP | Urgency: ASAP | Source: sql_test'
);
