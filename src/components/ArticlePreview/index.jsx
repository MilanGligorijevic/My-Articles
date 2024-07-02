import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TagBox from "../TagBox";
import { useMediaQuery } from "react-responsive";
import { useInView } from "framer-motion";

function ArticlePreview({ img, title, description, articleLink, tags }) {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef);

  const isMobile = useMediaQuery({
    query: "(max-width: 750px)",
  });

  useEffect(() => {
    if (isMobile) {
      handleMouseOver();
    }
  }, [isInView]);

  const handleMouseOver = () => {
    videoRef.current.play();
  };

  const handleMouseOut = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div className="w-96 xl:w-80">
      <div className="h-60 rounded-lg xl:h-52">
        <Link
          to={articleLink}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
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
      <div className="flex gap-2">
        {tags.map((tag) => {
          return <TagBox text={tag} />;
        })}
      </div>

      <Link to={articleLink}>
        <h3 className="text-xl text-custom-white mb-1">{title}</h3>
      </Link>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default ArticlePreview;
