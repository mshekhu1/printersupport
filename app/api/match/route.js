import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const { userId } = await req.json();

  const { data: waiting } = await supabase
    .from("online_users")
    .select("*")
    .eq("status", "searching")
    .neq("id", userId)
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  if (!waiting) {
    return Response.json({ role: "host" });
  }

  await supabase
    .from("online_users")
    .update({ status: "matched" })
    .in("id", [userId, waiting.id]);

  return Response.json({
    role: "guest",
    matchId: waiting.id,
  });
}
