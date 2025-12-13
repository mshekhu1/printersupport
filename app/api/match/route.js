import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const { userId, gender, lookingFor } = await req.json();

  // Find someone already waiting
  const { data: waitingUser } = await supabase
    .from("online_users")
    .select("*")
    .eq("status", "searching")
    .neq("id", userId)
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  // ❌ No one waiting → YOU become HOST
  if (!waitingUser) {
    return Response.json({
      role: "host",
      matchId: null
    });
  }

  // ✅ Someone found → YOU become GUEST
  await supabase
    .from("online_users")
    .update({ status: "matched" })
    .in("id", [userId, waitingUser.id]);

  return Response.json({
    role: "guest",
    matchId: waitingUser.id
  });
}
