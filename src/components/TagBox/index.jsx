import React from "react";

function TagBox({ text }) {
  return (
    <div className="w-14 rounded-lg border border-custom-grey text-center text-sm p-0.5 my-2">
      {text}
    </div>
  );
}

export default TagBox;
