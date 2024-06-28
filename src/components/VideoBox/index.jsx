import React from "react";

function VideoBox({ videoFile }) {
  return (
    <div className="mb-3 sm:h-56">
      <video autoPlay loop muted playsInline className="rounded-lg h-full">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBox;
