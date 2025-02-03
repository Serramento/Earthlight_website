import React, { useRef, useEffect } from "react";

export default function AutoPlaySilentVideo(props) {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <video
      className="absolute inset-0 w-full h-full"
      style={{ height: "100%", width: "100%", objectFit: "cover" }}
      ref={videoRef}
      loop
      autoPlay
      muted
      playsInline
    >
      <source src={props.video} type="video/mp4" />
    </video>
  );
}
