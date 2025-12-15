'use client';

import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import type { Socket as ClientSocket } from 'socket.io-client';

type ServerToClientEvents = {
  waiting: () => void;
  matched: (data: { room: string; peerId: string; initiator: boolean }) => void;
  offer: (data: { offer: RTCSessionDescriptionInit }) => void;
  answer: (data: { answer: RTCSessionDescriptionInit }) => void;
  'ice-candidate': (data: { candidate: RTCIceCandidateInit | null }) => void;
  'partner-disconnected': () => void;
  // socket.io client lifecycle events
  connect: () => void;
  connect_error: (err: any) => void;
};

type ClientToServerEvents = {
  join: () => void;
  next: () => void;
  offer: (data: { offer: RTCSessionDescriptionInit; room: string }) => void;
  answer: (data: { answer: RTCSessionDescriptionInit; room: string }) => void;
  'ice-candidate': (data: { candidate: RTCIceCandidateInit; room: string }) => void;
};

// A lightweight typed socket interface that maps the event names to handler signatures.
type TypedSocket = {
  on: <K extends keyof ServerToClientEvents>(event: K, listener: ServerToClientEvents[K]) => void;
  off: <K extends keyof ServerToClientEvents>(event: K, listener?: ServerToClientEvents[K]) => void;
  emit: <K extends keyof ClientToServerEvents>(event: K, ...args: Parameters<ClientToServerEvents[K]>) => void;
  removeAllListeners: () => void;
  close: () => void;
  id?: string;
};

// Prefer an env var if provided, fall back to the same host as the page in dev
const SOCKET_SERVER =
  (process.env.NEXT_PUBLIC_SOCKET_SERVER as string) ||
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://chat-gray-nine.vercel.app');

export default function Home() {
  const [socket, setSocket] = useState<TypedSocket | null>(null);
  const [status, setStatus] = useState<'disconnected' | 'waiting' | 'chatting'>('disconnected');
  const [room, setRoom] = useState<string>('');
  
  const localVideo = useRef<HTMLVideoElement>(null);
  const remoteVideo = useRef<HTMLVideoElement>(null);
  const pc = useRef<RTCPeerConnection | null>(null);

  // === HERE IS THE KEY PART: Updated iceServers with working STUN + TURN (Dec 2025) ===
  const iceServers: RTCConfiguration = {
    iceServers: [
      // Google STUN - unlimited & reliable
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' },
      { urls: 'stun:stun3.l.google.com:19302' },
      { urls: 'stun:stun4.l.google.com:19302' },

      // Open Relay Project TURN - Best free TURN (20GB/month relay, public keys)
      {
        urls: [

          'stun:stun.relay.metered.ca:80',
          'turn:global.relay.metered.ca:80',
          'turn:global.relay.metered.ca:80?transport=tcp',
          'turn:global.relay.metered.ca:443',         // Secure TLS
          'turns:global.relay.metered.ca:443?transport=tcp'
        ],
        username: '5d1cc9e7022866ed81e75497',
        credential: '0ddbd1ccaeca0d4bc67a6d266e20767b44f2',
      },
    ],
  };
  // === End of key part ===

  // Hold pending remote ICE candidates until remote description is set
  const pendingCandidates = useRef<RTCIceCandidateInit[]>([]);

  useEffect(() => {
  const newSocket = io(SOCKET_SERVER, { transports: ['websocket'] }) as unknown as TypedSocket;
  setSocket(newSocket);

    newSocket.on('connect', () => console.log('socket connected', newSocket.id));
    newSocket.on('connect_error', (err: any) => console.error('socket connect_error', err));

    // Get user media
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideo.current) {
          localVideo.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Media access denied:", err);
      }
    };
    getMedia();

    newSocket.on('waiting', () => setStatus('waiting'));
    newSocket.on('matched', ({ room: r, peerId, initiator }: { room: string; peerId: string; initiator: boolean }) => {
      console.log('matched', { room: r, peerId, initiator });
      setRoom(r);
      setStatus('chatting');
      createPeerConnection(initiator); // initiator determined by server
    });

  newSocket.on('offer', async ({ offer }: { offer: RTCSessionDescriptionInit }) => {
      console.log('received offer');
      // If a PC already exists, reuse it. Otherwise create as non-initiator.
      if (!pc.current) await awaitCreatePeer(false);
      await pc.current?.setRemoteDescription(new RTCSessionDescription(offer));
      // Drain any queued remote candidates now that remote description is set
      if (pendingCandidates.current.length && pc.current) {
        for (const c of pendingCandidates.current) {
          try { await pc.current.addIceCandidate(new RTCIceCandidate(c)); } catch (e) { console.warn('addIceCandidate after offer failed', e); }
        }
        pendingCandidates.current = [];
      }
      const answer = await pc.current?.createAnswer();
      if (answer) {
        await pc.current?.setLocalDescription(answer);
        newSocket.emit('answer', { answer, room });
      }
    });

  newSocket.on('answer', async ({ answer }: { answer: RTCSessionDescriptionInit }) => {
      await pc.current?.setRemoteDescription(new RTCSessionDescription(answer));
      // Drain candidates queued before answer
      if (pendingCandidates.current.length && pc.current) {
        for (const c of pendingCandidates.current) {
          try { await pc.current.addIceCandidate(new RTCIceCandidate(c)); } catch (e) { console.warn('addIceCandidate after answer failed', e); }
        }
        pendingCandidates.current = [];
      }
    });

  newSocket.on('ice-candidate', ({ candidate }: { candidate: RTCIceCandidateInit | null }) => {
      if (!candidate) return;
      // If remote description isn't set yet, queue the candidate
      if (!pc.current || !pc.current.remoteDescription || !pc.current.remoteDescription.type) {
        pendingCandidates.current.push(candidate);
      } else {
        pc.current.addIceCandidate(new RTCIceCandidate(candidate)).catch(e => console.warn('addIceCandidate failed', e));
      }
    });

    newSocket.on('partner-disconnected', () => {
      console.log('partner-disconnected');
      setStatus('waiting');
      if (pc.current) {
        pc.current.close();
        pc.current = null;
      }
      if (remoteVideo.current) remoteVideo.current.srcObject = null;
    });

    return () => {
      console.log('cleaning up socket');
      newSocket.removeAllListeners();
      newSocket.close();
      setSocket(null);
    };
  }, []);

  // Helper to create peer connection when called from async handlers
  const awaitCreatePeer = async (isInitiator: boolean) => {
    // ensure any previous pc is closed
    if (pc.current) {
      pc.current.close();
      pc.current = null;
    }
    await createPeerConnection(isInitiator);
  };

  const createPeerConnection = async (isInitiator: boolean) => {
    if (pc.current) {
      console.log('createPeerConnection called but existing PC found - closing it');
      pc.current.close();
      pc.current = null;
    }
    console.log('creating peer connection, initiator=', isInitiator);
    pc.current = new RTCPeerConnection(iceServers);

    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    stream.getTracks().forEach(track => pc.current?.addTrack(track, stream));
    if (localVideo.current) localVideo.current.srcObject = stream;

    pc.current.ontrack = (event) => {
      if (remoteVideo.current) remoteVideo.current.srcObject = event.streams[0];
    };

    pc.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket?.emit('ice-candidate', { candidate: event.candidate, room });
      }
    };

    pc.current.onconnectionstatechange = () => {
      console.log('ICE connection state:', pc.current?.connectionState);
      const state = pc.current?.connectionState;
      if (state === 'failed' || state === 'disconnected' || state === 'closed') {
        console.warn('ICE state indicates closed/failed:', state);
        if (pc.current) {
          pc.current.close();
          pc.current = null;
        }
        setStatus('waiting');
      }
    };

    if (isInitiator) {
      pc.current.createOffer().then(offer => {
        pc.current?.setLocalDescription(offer);
        socket?.emit('offer', { offer, room });
      });
    }
  };

  const startChat = () => socket?.emit('join');
  // Immediate UI feedback when the user starts chatting
  const startChatWithUi = () => {
    setStatus('waiting');
    socket?.emit('join');
  };
  const nextStranger = () => {
    socket?.emit('next');
    if (pc.current) pc.current.close();
    if (remoteVideo.current) remoteVideo.current.srcObject = null;
    setStatus('waiting');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-10">Omegle Clone</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="relative">
          <video ref={localVideo} autoPlay muted playsInline className="w-full max-w-lg h-80 bg-black rounded-lg shadow-lg" />
          <p className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded">You</p>
        </div>
        <div className="relative">
          <video ref={remoteVideo} autoPlay playsInline className="w-full max-w-lg h-80 bg-black rounded-lg shadow-lg" />
          <p className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded">Stranger</p>
        </div>
      </div>

      {status === 'disconnected' && (
        <button onClick={startChatWithUi} className="px-10 py-5 text-xl bg-green-600 hover:bg-green-700 rounded-lg">
          Start Chatting
        </button>
      )}

      {status === 'waiting' && (
        <div className="text-center">
          <p className="text-2xl mb-4">Looking for a stranger...</p>
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mx-auto"></div>
        </div>
      )}

      {status === 'chatting' && (
        <div className="text-center">
          <p className="text-2xl mb-6">Connected! Say hi 👋</p>
          <button onClick={nextStranger} className="px-10 py-5 text-xl bg-red-600 hover:bg-red-700 rounded-lg">
            Next Stranger
          </button>
        </div>
      )}
    </div>
  );
}