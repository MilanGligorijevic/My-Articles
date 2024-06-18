import React from "react";
import CopyToClipboard from "../../assets/svg/copyToClipboard";

function CodeContainer({ code, componentName }) {
  const codeText = code.split("\n");

  function copyToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <div className="border border-custom-grey rounded-lg">
      <div className="border-b border-custom-grey h-10 px-5 flex justify-between items-center">
        <h1 className="text-lg text-custom-white">{componentName}</h1>
        <button onClick={copyToClipboard}>
          <CopyToClipboard />
        </button>
      </div>
      <div className="my-3">
        {codeText.map((codeLine, index) => {
          return (
            <div className="hover:bg-custom-grey px-3 whitespace-pre-wrap">
              <span className="mr-5 select-none">{index + 1}</span> {codeLine}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CodeContainer;
