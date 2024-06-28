import React from "react";

function ArticleInfo({ title, shortDescription }) {
  return (
    <div>
      <h1 className="text-4xl mb-1 text-custom-white sm:text-3xl">{title}</h1>
      <h2 className="text-base mb-2 text-gray-300 sm:text-sm">
        {shortDescription}
      </h2>
    </div>
  );
}

export default ArticleInfo;
