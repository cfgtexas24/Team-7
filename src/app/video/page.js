"use client";

import { useEffect, useRef, useState } from 'react';

export default function Video () {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const websocketRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  useEffect(() => {
    // Set up the RTCPeerConnection when the component mounts
    peerConnectionRef.current = new RTCPeerConnection();

    websocketRef.current = new WebSocket('ws://localhost:3000');

    websocketRef.current.onmessage = async (message) => {
        const data = JSON.parse(message.data);

        // Handle different types of signaling data
        if (data.type === 'offer') {
            await handleOffer(data.offer);
        } else if (data.type === 'answer') {
            await handleAnswer(data.answer);
        } else if (data.type === 'ice-candidate') {
            await handleNewICECandidate(data.candidate);
        }
    };

    // Get the user's video/audio stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        localVideoRef.current.srcObject = stream;
        setLocalStream(stream);

        // Add the local stream to the peer connection
        stream.getTracks().forEach(track => {
          peerConnectionRef.current.addTrack(track, stream);
        });
      })
      .catch(error => console.error('Error accessing media devices.', error));

    // Handle incoming remote stream
    peerConnectionRef.current.ontrack = event => {
      const [stream] = event.streams;
      remoteVideoRef.current.srcObject = stream;
      setRemoteStream(stream);
    };

    // Handle ICE candidates
    peerConnectionRef.current.onicecandidate = event => {
        if (event.candidate) {
            // Send candidate to signaling server via WebSocket
            websocketRef.current.send(JSON.stringify({
            type: 'ice-candidate',
            candidate: event.candidate,
            }));
        }
    };

    return () => {
      // Clean up when the component is unmounted
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
      peerConnectionRef.current.close();
      websocketRef.current.close();
    };
  }, [localStream]);

    // Function to create an offer
    const createOffer = async () => {
        const offer = await peerConnectionRef.current.createOffer();
        await peerConnectionRef.current.setLocalDescription(offer);

        // Send offer to the signaling server
        websocketRef.current.send(JSON.stringify({
            type: 'offer',
            offer: offer,
        }));
    };

    // Function to handle an incoming offer
    const handleOffer = async (offer) => {
        await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await peerConnectionRef.current.createAnswer();
        await peerConnectionRef.current.setLocalDescription(answer);

        // Send answer to the signaling server
        websocketRef.current.send(JSON.stringify({
        type: 'answer',
        answer: answer,
        }));
    };

    // Function to handle an incoming answer
    const handleAnswer = async (answer) => {
        const remoteDesc = new RTCSessionDescription(answer);
        await peerConnectionRef.current.setRemoteDescription(remoteDesc);
    };

    // Function to handle incoming ICE candidates
    const handleNewICECandidate = async (candidate) => {
        await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate));
        console.log('ICE candidate added:', candidate);
    };

    return (
        <div>
            <div>
            <h2>Local Video</h2>
            <video ref={localVideoRef} autoPlay playsInline style={{ width: '300px', height: '200px' }} />
            </div>
            <div>
            <h2>Remote Video</h2>
            <video ref={remoteVideoRef} autoPlay playsInline style={{ width: '300px', height: '200px' }} />
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={createOffer}>Create Offer</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAnswer}>Answer</button>
        </div>
    );
};
