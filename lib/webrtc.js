import { sendSignal } from "./sendSignal";

export function createPeer({
  localStream,
  onRemoteStream,
  userId,
  matchId
}) {
  const pc = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
  });

  // 🔴 REQUIRED
  localStream.getTracks().forEach(track =>
    pc.addTrack(track, localStream)
  );

  // 🔴 REQUIRED
  pc.ontrack = (event) => {
    onRemoteStream(event.streams[0]);
  };

  pc.onicecandidate = (event) => {
    if (event.candidate) {
      sendSignal(userId, matchId, "ice", event.candidate);
    }
  };

  return pc;
}
