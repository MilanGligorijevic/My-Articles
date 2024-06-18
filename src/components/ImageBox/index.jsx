import React from "react";

function ImageBox({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} className="h-96 rounded-lg object-contain" />
    </div>
  );
}

export default ImageBox;
