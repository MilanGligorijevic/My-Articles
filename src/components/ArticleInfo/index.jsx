import React from "react";

function ArticleInfo({ title, shortDescription }) {
  return (
    <div>
      <h1 className="text-4xl mb-1 text-custom-white">{title}</h1>
      <h2 className="text-base mb-7 text-gray-300">{shortDescription}</h2>
    </div>
  );
}

export default ArticleInfo;
