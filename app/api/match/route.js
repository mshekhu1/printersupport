import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const { userId } = await req.json();

  // Find someone already waiting
  const { data: waitingUser } = await supabase
    .from("online_users")
    .select("*")
    .eq("status", "searching")
    .neq("id", userId)
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  // ❌ Nobody waiting → you wait (callee)
  if (!waitingUser) {
    return Response.json({
      role: "callee",
      matchId: null,
    });
  }

  // ✅ Someone waiting → you are caller
  await supabase
    .from("online_users")
    .update({ status: "matched" })
    .in("id", [userId, waitingUser.id]);

  return Response.json({
    role: "caller",
    matchId: waitingUser.id,
  });
}
