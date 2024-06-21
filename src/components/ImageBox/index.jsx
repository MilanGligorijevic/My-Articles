import React from "react";

function ImageBox({ src, alt }) {
  return (
    <div className="w-full mb-3">
      <img
        src={src}
        alt={alt}
        className="rounded-lg w-full h-full object-cover"
      />
    </div>
  );
}

export default ImageBox;
