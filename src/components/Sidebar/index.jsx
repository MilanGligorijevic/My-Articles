import React from "react";
import { Link, useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <SimpleBar
      forceVisible="y"
      autoHide={false}
      style={{ height: "80vh", position: "sticky", top: 85 }}
      className="min-w-72 mr-10"
    >
      <div className="flex flex-col gap-1">
        <Link to="/">
          <h1
            className={`text-xl ${
              pathname === "/" ? "text-custom-yellow1" : "text-custom-white"
            }`}
          >
            Introduction
          </h1>
        </Link>
        <div className="text-custom-white">
          <h1 className="text-xl mb-1">Articles</h1>
          <div className="pl-2">
            <Link to="/hoverEffectRedesign">
              <h2
                className={`${
                  pathname === "/hoverEffectRedesign"
                    ? "text-custom-yellow1"
                    : "text-custom-white"
                }`}
              >
                Hover effect redesign
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </SimpleBar>
  );
}

export default Sidebar;
