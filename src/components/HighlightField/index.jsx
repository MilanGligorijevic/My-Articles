import React from "react";

function HighlightField({ children }) {
  return (
    <div className="flex flex-col justify-center gap-1 bg-custom-grey text-custom-white rounded-lg p-3 my-3 w-[80%]">
      {children}
    </div>
  );
}

export default HighlightField;
