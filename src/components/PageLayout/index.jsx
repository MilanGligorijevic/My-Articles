import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex px-[10%]">
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default PageLayout;
