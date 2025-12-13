"use client";

import { useEffect, useRef, useState } from "react";
import { createPeer } from "@/lib/webrtc";
import { sendSignal } from "@/lib/sendSignal";
import { listenSignals } from "@/lib/listenSignals";

export default function VideoPage() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const pcRef = useRef(null);
  const localStreamRef = useRef(null);

  const [userId] = useState(crypto.randomUUID());
  const [matchId, setMatchId] = useState(null);
  const [role, setRole] = useState(null);

  // 1️⃣ GET CAMERA
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        localStreamRef.current = stream;
        localVideoRef.current.srcObject = stream;
      });
  }, []);

  // 2️⃣ MATCH USER
  useEffect(() => {
    fetch("/api/match", {
      method: "POST",
      body: JSON.stringify({
        userId,
        gender: "male",
        lookingFor: "both"
      })
    })
      .then(res => res.json())
      .then(({ role, matchId }) => {
        setRole(role);
        setMatchId(matchId);
      });
  }, [userId]);

  // 3️⃣ CREATE PEER CONNECTION
  useEffect(() => {
    if (!localStreamRef.current) return;

    pcRef.current = createPeer({
      localStream: localStreamRef.current,
      userId,
      matchId,
      onRemoteStream: (stream) => {
        remoteVideoRef.current.srcObject = stream;
      }
    });
  }, [matchId, userId]);

  // 4️⃣ LISTEN SIGNALS (5,6,7,8 LIVE HERE)
  useEffect(() => {
    if (!matchId || !pcRef.current) return;

    const pc = pcRef.current;

    const unsubscribe = listenSignals(userId, async (signal) => {

      // 5️⃣ HOST: RECEIVE ANSWER
      if (signal.type === "answer") {
        await pc.setRemoteDescription(
          new RTCSessionDescription(signal.data)
        );
      }

      // 6️⃣ GUEST: RECEIVE OFFER
      if (signal.type === "offer") {
        await pc.setRemoteDescription(
          new RTCSessionDescription(signal.data)
        );

        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        await sendSignal(userId, signal.from_id, "answer", answer);
      }

      // 7️⃣ BOTH: RECEIVE ICE
      if (signal.type === "ice") {
        await pc.addIceCandidate(
          new RTCIceCandidate(signal.data)
        );
      }
    });

    return () => unsubscribe.unsubscribe();
  }, [matchId, userId]);

  // 8️⃣ HOST: SEND OFFER
  useEffect(() => {
    if (role !== "host" || !matchId || !pcRef.current) return;

    (async () => {
      const pc = pcRef.current;
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      await sendSignal(userId, matchId, "offer", offer);
    })();
  }, [role, matchId, userId]);

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <video ref={localVideoRef} autoPlay muted playsInline />
      <video ref={remoteVideoRef} autoPlay playsInline />
    </div>
  );
}
