import React from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

function Sidebar() {
  return (
    <SimpleBar
      forceVisible="y"
      autoHide={false}
      style={{ maxHeight: "80vh", position: "sticky", top: 85 }}
      className="min-w-72 mr-10"
    >
      <Link to="/introduction">
        <h1 className="text-xl text-custom-white">Introduction</h1>
      </Link>
      <h1 className="text-xl text-custom-white">Articles</h1>
      <div className="pl-2">
        <Link to="/hoverEffectRedesign">
          <h2>Hover effect redesign</h2>
        </Link>
        <Link to="/example2">
          <h2 className=" h-screen">Example 2</h2>
        </Link>
      </div>
    </SimpleBar>
  );
}

export default Sidebar;
