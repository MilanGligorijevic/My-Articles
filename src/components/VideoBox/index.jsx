import React from "react";

function VideoBox({ videoFile }) {
  return (
    <div className="w-full mb-3 sm:h-52">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-lg w-full h-full object-cover"
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBox;
