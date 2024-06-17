import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-blue-500 h-screen w-1/4 ml-[10%] py-5">
      <h1 className="text-xl">Articles</h1>
      <div className="pl-2">
        <Link to="/example1">
          <h2>Example 1</h2>
        </Link>
        <Link to="/example2">
          <h2>Example 2</h2>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
