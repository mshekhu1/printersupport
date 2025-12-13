"use client";

import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import SimplePeer, { Instance as SimplePeerInstance } from 'simple-peer';

const SIGNALING_URL = process.env.NEXT_PUBLIC_SIGNALING_URL || 'http://localhost:4000';

export default function VideoChat() {
  const localRef = useRef<HTMLVideoElement | null>(null);
  const remoteRef = useRef<HTMLVideoElement | null>(null);
  const socketRef = useRef<Socket | null>(null);
  const peerRef = useRef<SimplePeerInstance | null>(null);
  const [status, setStatus] = useState<'idle' | 'waiting' | 'connected' | 'no-media' | 'disconnected'>('idle');
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [partnerId, setPartnerId] = useState<string | null>(null);
  const [muted, setMuted] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [socketStatus, setSocketStatus] = useState<'idle' | 'connecting' | 'connected' | 'disconnected' | 'error'>('idle');
  const [socketId, setSocketId] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [showDebug, setShowDebug] = useState(false);

  function cleanupPeer() {
    if (peerRef.current) {
      try {
        peerRef.current.destroy();
      } catch {
        // ignore
      }
      peerRef.current = null;
    }
    if (remoteRef.current) remoteRef.current.srcObject = null;
    setPartnerId(null);
  }

  const cleanup = React.useCallback(() => {
    cleanupPeer();
    if (socketRef.current) {
      try {
        socketRef.current.emit('leave');
        socketRef.current.disconnect();
      } catch {
        /* ignore */
      }
      socketRef.current = null;
    }
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
      setStream(null);
      if (localRef.current) localRef.current.srcObject = null;
    }
    setStatus('disconnected');
  }, [stream]);

  useEffect(() => {
    // cleanup on unmount / page close
    const onBeforeUnload = () => cleanup();
    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      cleanup();
    };
  }, [cleanup]);

  async function start() {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(s);
      if (localRef.current) {
        localRef.current.srcObject = s;
      }

      // connect socket
      if (!socketRef.current) {
        socketRef.current = io(SIGNALING_URL);
        setupSocket(socketRef.current);
      }

      // join matchmaking
      socketRef.current.emit('find');
      setStatus('waiting');
    } catch (err) {
      console.error('media error', err);
      setStatus('no-media');
    }
  }

  function toggleMute() {
    if (!stream) return;
    stream.getAudioTracks().forEach((t) => (t.enabled = !t.enabled));
    setMuted((m) => !m);
  }

  function toggleCamera() {
    if (!stream) return;
    stream.getVideoTracks().forEach((t) => (t.enabled = !t.enabled));
    setCameraOn((c) => !c);
  }

  function setupSocket(socket: Socket) {
    setSocketStatus('connecting');
    addLog(`Attempting to connect to ${SIGNALING_URL}`);

    socket.on('connect', () => {
      setSocketStatus('connected');
      setSocketId(socket.id ?? null);
      addLog(`socket connected ${socket.id}`);
    });

    socket.on('connect_error', (err: unknown) => {
      setSocketStatus('error');
      const msg = formatError(err);
      addLog(`connect_error ${msg}`);
    });

    socket.on('disconnect', (reason) => {
      setSocketStatus('disconnected');
      addLog(`socket disconnected (${String(reason)})`);
      setSocketId(null);
    });
    socket.on('waiting', () => {
      setStatus('waiting');
    });

    socket.on('matched', ({ partner, initiator }: { partner: string; initiator: boolean }) => {
      setPartnerId(partner);
      setStatus('connected');
      createPeer(initiator, partner);
      addLog(`matched with ${partner} (initiator: ${initiator})`);
    });

    socket.on('signal', ({ signal }: { signal: unknown }) => {
      if (peerRef.current) peerRef.current.signal(signal as unknown as Parameters<SimplePeerInstance['signal']>[0]);
      addLog('received signal');
    });

    socket.on('partner-left', () => {
      // partner left, cleanup peer and re-enter queue
      cleanupPeer();
      setStatus('waiting');
      socket.emit('find');
      addLog('partner left');
    });

    socket.on('pong', () => addLog('pong received from server'));
  }

  function formatError(e: unknown) {
    if (!e) return String(e);
    if (typeof e === 'string') return e;
    if (e instanceof Error) return e.message;
    if (typeof e === 'object' && e !== null && 'message' in e) {
      return (e as { message?: unknown }).message ? String((e as { message?: unknown }).message) : String(e);
    }
    try {
      return JSON.stringify(e);
    } catch {
      return String(e);
    }
  }

  function addLog(entry: string) {
    setLogs((l) => {
      const next = [`${new Date().toLocaleTimeString()}: ${entry}`, ...l];
      return next.slice(0, 40);
    });
  }

  function createPeer(initiator: boolean, partner: string) {
    if (!stream) {
      console.warn('no local stream yet');
      return;
    }

    cleanupPeer();

    const peer = new SimplePeer({ initiator, trickle: false, stream, config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] } });
    peerRef.current = peer;

    type SignalData = Parameters<SimplePeerInstance['signal']>[0];
    peer.on('signal', (signal: SignalData) => {
      // send to partner via signaling server
      socketRef.current?.emit('signal', { to: partner, signal });
    });

    peer.on('stream', (remoteStream: MediaStream) => {
      if (remoteRef.current) remoteRef.current.srcObject = remoteStream;
    });

    peer.on('close', () => {
      cleanupPeer();
      setStatus('waiting');
      socketRef.current?.emit('find');
    });

    peer.on('error', (err: unknown) => {
      console.error('peer error', err);
      cleanupPeer();
      setStatus('waiting');
      socketRef.current?.emit('find');
    });
  }

  function next() {
    // disconnect current partner and find new
    cleanupPeer();
    socketRef.current?.emit('next');
    setStatus('waiting');
  }
  

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Free P2P Video Chat</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-600">Status:</span>
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${status === 'connected' ? 'bg-green-100 text-green-800' : status === 'waiting' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
            <span className={`h-2 w-2 rounded-full ${status === 'connected' ? 'bg-green-600' : status === 'waiting' ? 'bg-yellow-500' : 'bg-gray-400'}`} />
            {status}{partnerId ? ` • ${partnerId.slice(0,6)}` : ''}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-black/90 rounded-lg overflow-hidden shadow-md">
          <div className="p-2 text-xs bg-black/70 text-white">Local</div>
          <div className="aspect-video bg-black">
            <video ref={localRef} autoPlay playsInline muted className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="bg-black/90 rounded-lg overflow-hidden shadow-md">
          <div className="p-2 text-xs bg-black/70 text-white">Remote</div>
          <div className="aspect-video bg-black flex items-center justify-center text-zinc-400">
            <video ref={remoteRef} autoPlay playsInline className="w-full h-full object-cover" />
            {status === 'waiting' && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/70 text-black px-4 py-2 rounded-full">Looking for a stranger…</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button onClick={start} disabled={status === 'waiting' || status === 'connected'} className="bg-blue-600 disabled:bg-blue-300 text-white px-4 py-2 rounded-md">Start</button>
        <button onClick={next} disabled={status !== 'connected'} className="bg-indigo-600 disabled:bg-indigo-300 text-white px-4 py-2 rounded-md">Next</button>
        <button onClick={cleanup} className="bg-gray-600 text-white px-4 py-2 rounded-md">Stop</button>

        <div className="ml-auto flex items-center gap-2">
          <button onClick={toggleMute} className="bg-white/6 border border-gray-200 px-3 py-2 rounded-md text-sm">{muted ? 'Unmute' : 'Mute'}</button>
          <button onClick={toggleCamera} className="bg-white/6 border border-gray-200 px-3 py-2 rounded-md text-sm">{cameraOn ? 'Camera Off' : 'Camera On'}</button>
        </div>
      </div>

      <div className="mt-4 border rounded-md p-3 bg-white/5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <strong className="text-sm">Signaling</strong>
            <span className="text-xs text-zinc-500">{SIGNALING_URL}</span>
            <span className={`ml-2 inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs ${socketStatus === 'connected' ? 'bg-green-100 text-green-800' : socketStatus === 'connecting' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
              <span className={`h-2 w-2 rounded-full ${socketStatus === 'connected' ? 'bg-green-600' : socketStatus === 'connecting' ? 'bg-yellow-500' : 'bg-gray-400'}`} />
              {socketStatus}{socketId ? ` • ${socketId.slice(0,6)}` : ''}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => { socketRef.current?.emit('ping'); addLog('ping sent'); }} className="text-sm px-3 py-1 bg-slate-100 rounded-md">Ping</button>
            <button onClick={() => setShowDebug((s) => !s)} className="text-sm px-3 py-1 bg-slate-100 rounded-md">{showDebug ? 'Hide' : 'Show'} Debug</button>
          </div>
        </div>

        {showDebug && (
          <div className="mt-2 max-h-44 overflow-auto text-xs font-mono bg-black/80 text-white p-2 rounded">
            {logs.length === 0 ? <div className="text-zinc-400">No logs yet</div> : logs.map((l, i) => <div key={i} className="py-0.5">{l}</div>)}
          </div>
        )}
      </div>

      <p className="mt-3 text-sm text-zinc-600">This demo uses STUN servers only; some networks may require a TURN server for P2P connectivity.</p>
    </div>
  );
}
