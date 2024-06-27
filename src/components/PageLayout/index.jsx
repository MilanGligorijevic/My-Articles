import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex pl-[10%] pr-[23%] mb-14 2xl:pr-[13%] sm:pl-[8%]">
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default PageLayout;
