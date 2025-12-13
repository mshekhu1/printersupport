import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const { userId, gender, lookingFor } = await req.json();

  // register or update yourself as searching
  await supabase.from("online_users").upsert({
    id: userId,
    gender,
    looking_for: lookingFor,
    status: "searching"
  });

  const { data: waitingUser } = await supabase
    .from("online_users")
    .select("*")
    .eq("status", "searching")
    .neq("id", userId)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (!waitingUser) {
    return Response.json({ role: "host", matchId: null });
  }

  await supabase
    .from("online_users")
    .update({ status: "matched" })
    .in("id", [userId, waitingUser.id]);

  return Response.json({
    role: "guest",
    matchId: waitingUser.id
  });
}
