"use client";

import { useEffect, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useSearchParams } from "next/navigation";

export default function ChatClient() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const pcRef = useRef(null);
  const userId = useRef(crypto.randomUUID());
  const matchId = useRef(null);

  const params = useSearchParams();
  const gender = params.get("gender");

  /* ---------------- PEER CONNECTION ---------------- */
  useEffect(() => {
    pcRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            "stun:stun.relay.metered.ca:80",
            "turn:global.relay.metered.ca:80",
            "turn:global.relay.metered.ca:80?transport=tcp",
            "turn:global.relay.metered.ca:443",
            "turns:global.relay.metered.ca:443?transport=tcp",
          ],
          username: process.env.NEXT_PUBLIC_TURN_USERNAME,
          credential: process.env.NEXT_PUBLIC_TURN_CREDENTIAL,
        },
      ],
    });

    pcRef.current.ontrack = (e) => {
      console.log("REMOTE TRACK RECEIVED");
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

    pcRef.current.oniceconnectionstatechange = () => {
      console.log(
        "ICE STATE:",
        pcRef.current.iceConnectionState
      );
    };
  }, []);

  /* ---------------- MEDIA ---------------- */
  useEffect(() => {
    async function startMedia() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      localVideoRef.current.srcObject = stream;
      stream.getTracks().forEach((track) =>
        pcRef.current.addTrack(track, stream)
      );
    }

    startMedia();
  }, []);

  /* ---------------- JOIN MATCH ---------------- */
  useEffect(() => {
    async function join() {
      console.log("JOINING AS:", userId.current);

      await supabase.from("online_users").insert({
        id: userId.current,
        gender,
        looking_for: "both",
        status: "searching",
      });

      const res = await fetch("/api/match", {
        method: "POST",
        body: JSON.stringify({
          userId: userId.current,
          gender,
          lookingFor: "both",
        }),
      });

      const data = await res.json();
      console.log("MATCH RESPONSE:", data);

      // ❗ ONLY GUEST CREATES OFFER
      if (data.role === "guest") {
        matchId.current = data.matchId;
        await createOffer();
      }
    }

    if (gender) join();
  }, [gender]);

  /* ---------------- CREATE OFFER (GUEST ONLY) ---------------- */
  async function createOffer() {
    console.log("CREATING OFFER TO:", matchId.current);

    const offer = await pcRef.current.createOffer();
    await pcRef.current.setLocalDescription(offer);

    await supabase.from("signals").insert({
      from_id: userId.current,
      to_id: matchId.current,
      type: "offer",
      data: offer,
    });
  }

  /* ---------------- SIGNAL LISTENER ---------------- */
  useEffect(() => {
    const channel = supabase
      .channel("signals")
      .on(
        "postgres_changes",
        { event: "INSERT", table: "signals" },
        async ({ new: signal }) => {
          if (signal.to_id !== userId.current) return;

          console.log("SIGNAL RECEIVED:", signal.type);

          // HOST RECEIVES OFFER
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

          // GUEST RECEIVES ANSWER
          if (signal.type === "answer") {
            await pcRef.current.setRemoteDescription(signal.data);
          }

          // ICE BOTH SIDES
          if (signal.type === "ice") {
            try {
              await pcRef.current.addIceCandidate(signal.data);
            } catch (err) {
              console.error("ICE ERROR:", err);
            }
          }
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  /* ---------------- UI ---------------- */
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <video
        ref={localVideoRef}
        autoPlay
        muted
        playsInline
        width="300"
      />
      <video
        ref={remoteVideoRef}
        autoPlay
        playsInline
        width="300"
      />
    </div>
  );
}
