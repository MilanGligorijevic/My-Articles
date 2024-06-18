import React from "react";

function VideoBox({ videoFile }) {
  return (
    <div>
      <video autoPlay loop muted playsInline className="rounded-lg">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBox;