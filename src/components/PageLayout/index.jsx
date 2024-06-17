import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Content from "../Content";

function PageLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
