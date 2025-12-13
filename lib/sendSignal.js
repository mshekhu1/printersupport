import { supabase } from "@/lib/supabaseClient";

export async function sendSignal(fromId, toId, type, data) {
  await supabase.from("signals").insert({
    id: crypto.randomUUID(),
    from_id: fromId,
    to_id: toId,
    type,
    data
  });
}
