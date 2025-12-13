"use client";

import { useEffect, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useSearchParams } from "next/navigation";

export default function ChatClient() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const pcRef = useRef(null);
  const matchId = useRef(null);

  // ✅ persistent user id
  const userId = useRef(
    typeof window !== "undefined"
      ? localStorage.getItem("user_id") ||
          (() => {
            const id = crypto.randomUUID();
            localStorage.setItem("user_id", id);
            return id;
          })()
      : null
  );

  const params = useSearchParams();
  const gender = params.get("gender");

  /* ------------------ PEER CONNECTION ------------------ */
  useEffect(() => {
    pcRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            "stun:stun.relay.metered.ca:80",
            "turn:global.relay.metered.ca:443",
            "turns:global.relay.metered.ca:443?transport=tcp",
          ],
          username: process.env.NEXT_PUBLIC_TURN_USERNAME,
          credential: process.env.NEXT_PUBLIC_TURN_CREDENTIAL,
        },
      ],
    });

    pcRef.current.ontrack = (e) => {
      remoteVideoRef.current.srcObject = e.streams[0];
    };

    pcRef.current.onicecandidate = async (e) => {
      if (e.candidate && matchId.current) {
        await supabase.from("signals").insert({
          from_id: userId.current,
          to_id: matchId.current,
          type: "ice",
          data: e.candidate,
        });
      }
    };

    pcRef.current.onconnectionstatechange = () => {
      console.log("PC STATE:", pcRef.current.connectionState);
    };
  }, []);

  /* ------------------ MEDIA ------------------ */
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        stream.getTracks().forEach((track) =>
          pcRef.current.addTrack(track, stream)
        );
      });
  }, []);

  /* ------------------ JOIN + MATCH ------------------ */
  useEffect(() => {
    async function join() {
      await supabase.from("online_users").insert({
        id: userId.current,
        gender,
        looking_for: "both",
        status: "searching",
      });

      const res = await fetch("/api/match", {
        method: "POST",
        body: JSON.stringify({ userId: userId.current }),
      });

      const data = await res.json();
      console.log("MATCH:", data);

      if (data.role === "caller") {
        matchId.current = data.matchId;
        await createOffer();
      }
    }

    join();
  }, [gender]);

  /* ------------------ OFFER ------------------ */
  async function createOffer() {
    const offer = await pcRef.current.createOffer();
    await pcRef.current.setLocalDescription(offer);

    await supabase.from("signals").insert({
      from_id: userId.current,
      to_id: matchId.current,
      type: "offer",
      data: offer,
    });
  }

  /* ------------------ SIGNALING ------------------ */
  useEffect(() => {
    const channel = supabase
      .channel(`signals-${userId.current}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          table: "signals",
          filter: `to_id=eq.${userId.current}`,
        },
        async ({ new: signal }) => {
          console.log("SIGNAL:", signal.type);

          // OFFER → ANSWER
          if (signal.type === "offer") {
            matchId.current = signal.from_id;

            await pcRef.current.setRemoteDescription(signal.data);

            const answer = await pcRef.current.createAnswer();
            await pcRef.current.setLocalDescription(answer);

            await supabase.from("signals").insert({
              from_id: userId.current,
              to_id: matchId.current,
              type: "answer",
              data: answer,
            });
          }

          // ANSWER
          if (signal.type === "answer") {
            await pcRef.current.setRemoteDescription(signal.data);
          }

          // ICE
          if (signal.type === "ice") {
            if (pcRef.current.remoteDescription) {
              await pcRef.current.addIceCandidate(signal.data);
            }
          }
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <video ref={localVideoRef} autoPlay muted playsInline width="300" />
      <video ref={remoteVideoRef} autoPlay playsInline width="300" />
    </div>
  );
}
