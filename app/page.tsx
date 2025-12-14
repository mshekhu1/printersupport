'use client';

import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const SOCKET_SERVER = 'https://chat-gray-nine.vercel.app'; // Change if deployed

export default function Home() {
  const [socket, setSocket] = useState<any>(null);
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

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER);
    setSocket(newSocket);

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
    newSocket.on('matched', ({ room: r, peerId }: { room: string; peerId: string }) => {
      setRoom(r);
      setStatus('chatting');
      createPeerConnection(true); // true = initiator
    });

    newSocket.on('offer', ({ offer }: { offer: RTCSessionDescriptionInit }) => {
      createPeerConnection(false);
      pc.current?.setRemoteDescription(new RTCSessionDescription(offer));
      pc.current?.createAnswer().then(answer => {
        pc.current?.setLocalDescription(answer);
        newSocket.emit('answer', { answer, room });
      });
    });

    newSocket.on('answer', ({ answer }: { answer: RTCSessionDescriptionInit }) => {
      pc.current?.setRemoteDescription(new RTCSessionDescription(answer));
    });

    newSocket.on('ice-candidate', ({ candidate }: { candidate: RTCIceCandidateInit }) => {
      pc.current?.addIceCandidate(new RTCIceCandidate(candidate));
    });

    newSocket.on('partner-disconnected', () => {
      setStatus('waiting');
      if (pc.current) pc.current.close();
      if (remoteVideo.current) remoteVideo.current.srcObject = null;
    });

    return () => { newSocket.close(); };
  }, []);

  const createPeerConnection = async (isInitiator: boolean) => {
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
    };

    if (isInitiator) {
      pc.current.createOffer().then(offer => {
        pc.current?.setLocalDescription(offer);
        socket?.emit('offer', { offer, room });
      });
    }
  };

  const startChat = () => socket?.emit('join');
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
        <button onClick={startChat} className="px-10 py-5 text-xl bg-green-600 hover:bg-green-700 rounded-lg">
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