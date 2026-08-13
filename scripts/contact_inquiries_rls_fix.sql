-- RLS + RPC only — matches table: id, name, email, phone, service, message, created_at

grant usage on schema public to anon, authenticated;
grant insert on table public.contact_inquiries to anon, authenticated;

alter table public.contact_inquiries enable row level security;

drop policy if exists "Anyone can submit contact inquiries" on public.contact_inquiries;
create policy "Anyone can submit contact inquiries"
  on public.contact_inquiries
  for insert
  to anon, authenticated
  with check (true);

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
