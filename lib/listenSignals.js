import { supabase } from "@/lib/supabaseClient";

export function listenSignals(userId, onSignal) {
  return supabase
    .channel(`signals-${userId}`)
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "signals",
        filter: `to_id=eq.${userId}`
      },
      (payload) => onSignal(payload.new)
    )
    .subscribe();
}
