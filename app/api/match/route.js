import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const { userId, gender, lookingFor } = await req.json();

  const { data: match } = await supabase
    .from("online_users")
    .select("*")
    .eq("status", "searching")
    .neq("id", userId)
    .limit(1)
    .single();

  if (match) {
    await supabase
      .from("online_users")
      .update({ status: "matched" })
      .in("id", [userId, match.id]);

    return Response.json({ matchId: match.id });
  }

  return Response.json({ matchId: null });
}
