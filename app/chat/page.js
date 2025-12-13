"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useSearchParams } from "next/navigation";

export default function ChatPage() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const pcRef = useRef(null);
  const userId = useRef(crypto.randomUUID());
  const matchId = useRef(null);

  const params = useSearchParams();
  const gender = params.get("gender");

  // STEP 1: Setup WebRTC
  useEffect(() => {
    pcRef.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    });

    pcRef.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    pcRef.current.onicecandidate = async (event) => {
      if (event.candidate && matchId.current) {
        await supabase.from("signals").insert({
          from_id: userId.current,
          to_id: matchId.current,
          type: "ice",
          data: event.candidate
        });
      }
    };
  }, []);

  // STEP 2: Get camera & mic
  useEffect(() => {
    async function startMedia() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      localVideoRef.current.srcObject = stream;

      stream.getTracks().forEach(track => {
        pcRef.current.addTrack(track, stream);
      });
    }

    startMedia();
  }, []);

  // STEP 3: Join online_users & find match
  useEffect(() => {
    async function join() {
      await supabase.from("online_users").insert({
        id: userId.current,
        gender,
        looking_for: "both",
        status: "searching"
      });

      const res = await fetch("/api/match", {
        method: "POST",
        body: JSON.stringify({
          userId: userId.current,
          gender,
          lookingFor: "both"
        })
      });

      const data = await res.json();
      if (data.matchId) {
        matchId.current = data.matchId;
        createOffer();
      }
    }

    join();
  }, [gender]);

  // STEP 4: Create offer
  async function createOffer() {
    const offer = await pcRef.current.createOffer();
    await pcRef.current.setLocalDescription(offer);

    await supabase.from("signals").insert({
      from_id: userId.current,
      to_id: matchId.current,
      type: "offer",
      data: offer
    });
  }

  // STEP 5: Listen for signals
  useEffect(() => {
    const channel = supabase
      .channel("signals")
      .on(
        "postgres_changes",
        { event: "INSERT", table: "signals" },
        async ({ new: signal }) => {
          if (signal.to_id !== userId.current) return;

          if (signal.type === "offer") {
            await pcRef.current.setRemoteDescription(signal.data);

            const answer = await pcRef.current.createAnswer();
            await pcRef.current.setLocalDescription(answer);

            await supabase.from("signals").insert({
              from_id: userId.current,
              to_id: signal.from_id,
              type: "answer",
              data: answer
            });

            matchId.current = signal.from_id;
          }

          if (signal.type === "answer") {
            await pcRef.current.setRemoteDescription(signal.data);
          }

          if (signal.type === "ice") {
            await pcRef.current.addIceCandidate(signal.data);
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
