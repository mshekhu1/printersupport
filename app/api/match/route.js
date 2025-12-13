import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const { userId } = await req.json();

  const { data: waitingUser, error } = await supabase
    .from("online_users")
    .select("*")
    .eq("status", "searching")
    .neq("id", userId)
    .order("created_at", { ascending: true })
    .limit(1);

  // No waiting user → HOST
  if (!waitingUser || waitingUser.length === 0) {
    return Response.json({
      role: "host",
      matchId: null
    });
  }

  const match = waitingUser[0];

  // Match found → GUEST
  await supabase
    .from("online_users")
    .update({ status: "matched" })
    .in("id", [userId, match.id]);

  return Response.json({
    role: "guest",
    matchId: match.id
  });
}
