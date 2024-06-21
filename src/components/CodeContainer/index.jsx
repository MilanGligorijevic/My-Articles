import React, { useState } from "react";
import CopyToClipboard from "../../assets/svg/copyToClipboard";

function CodeContainer({ code, componentName, showMoreButton }) {
  const codeText = code.split("\n");
  const [showMore, setShowMore] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(code);
  }

  function handleShowMore() {
    setShowMore((prevState) => !prevState);
  }

  return (
    <div className="mb-5 border border-custom-grey rounded-lg">
      <div className="border-b border-custom-grey h-11 px-5 flex justify-between items-center">
        <h1 className="text-lg text-custom-white">{componentName}</h1>
        <button onClick={copyToClipboard}>
          <CopyToClipboard />
        </button>
      </div>
      {showMore ? (
        <div className="mt-3">
          {codeText.map((codeLine, index) => {
            return (
              <div className="hover:bg-custom-grey px-3 whitespace-pre-wrap">
                <span className="mr-5 select-none">{index + 1}</span> {codeLine}
              </div>
            );
          })}
          {showMoreButton && (
            <button
              className="w-full mt-3 p-2.5 border-t border-custom-grey text-custom-white"
              onClick={handleShowMore}
            >
              <span className="hover:bg-custom-grey rounded-lg p-2">
                Show less
              </span>
            </button>
          )}
        </div>
      ) : (
        <div className="mt-3">
          {codeText.slice(0, 10).map((codeLine, index) => {
            return (
              <div className="hover:bg-custom-grey px-3 whitespace-pre-wrap">
                <span className="mr-5 select-none">{index + 1}</span> {codeLine}
              </div>
            );
          })}
          {showMoreButton && (
            <button
              className="w-full mt-3 p-2.5 border-t border-custom-grey text-custom-white"
              onClick={handleShowMore}
            >
              <span className="hover:bg-custom-grey rounded-lg p-2">
                Show more
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default CodeContainer;
