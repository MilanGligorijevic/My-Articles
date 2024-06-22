import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex pl-[10%] pr-[23%] mb-14">
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default PageLayout;
