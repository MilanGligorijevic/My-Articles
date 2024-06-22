import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import TagBox from "../TagBox";

function ArticlePreview({ img, title, description, articleLink, tags }) {
  const videoRef = useRef(null);

  const handleMouseOver = () => {
    videoRef.current.play();
  };

  const handleMouseOut = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="w-96"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="h-60 rounded-lg">
        <Link to={articleLink}>
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="rounded-lg h-full object-cover"
          >
            <source src={img} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Link>
      </div>
      <TagBox text={tags} />
      <Link to={articleLink}>
        <h3 className="text-xl text-custom-white mb-1">{title}</h3>
      </Link>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default ArticlePreview;
