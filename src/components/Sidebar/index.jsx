import React from "react";
import { Link, useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { motion } from "framer-motion";

function Sidebar() {
  const { pathname } = useLocation();

  const textVariants = {
    hover: {
      x: "4%",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <SimpleBar
      forceVisible="y"
      autoHide={false}
      style={{ height: "80vh", position: "sticky", top: 85 }}
      className="min-w-[17rem] mr-10 lg:min-w-[14rem] ms:hidden"
    >
      <div className="flex flex-col gap-1">
        <Link to="/">
          <motion.h1
            className={`text-2xl ${
              pathname === "/" ? "text-custom-yellow1" : "text-custom-white"
            }`}
            variants={textVariants}
            whileHover="hover"
          >
            Introduction
          </motion.h1>
        </Link>
        <div className="text-custom-white">
          <h1 className="text-2xl mb-1">Articles</h1>
          <div className="pl-2 text-xl">
            <Link to="/hoverEffectRedesign">
              <motion.h2
                className={`${
                  pathname === "/hoverEffectRedesign"
                    ? "text-custom-yellow1"
                    : "text-custom-white"
                }`}
                variants={textVariants}
                whileHover="hover"
              >
                Hover effect redesign
              </motion.h2>
            </Link>
          </div>
          <div className="pl-2 text-xl">
            <Link to="/portfolioSectionRedesign">
              <motion.h2
                className={`${
                  pathname === "/portfolioSectionRedesign"
                    ? "text-custom-yellow1"
                    : "text-custom-white"
                }`}
                variants={textVariants}
                whileHover="hover"
              >
                Portfolio section redesign
              </motion.h2>
            </Link>
          </div>
          <div className="pl-2 text-xl">
            <Link to="/dropdownMenu">
              <motion.h2
                className={`${
                  pathname === "/dropdownMenu"
                    ? "text-custom-yellow1"
                    : "text-custom-white"
                }`}
                variants={textVariants}
                whileHover="hover"
              >
                Dropdown menu
              </motion.h2>
            </Link>
          </div>
          <div className="pl-2 text-xl">
            <Link to="/landingPageDesign">
              <motion.h2
                className={`${
                  pathname === "/landingPageDesign"
                    ? "text-custom-yellow1"
                    : "text-custom-white"
                }`}
                variants={textVariants}
                whileHover="hover"
              >
                Landing page design
              </motion.h2>
            </Link>
          </div>
        </div>
      </div>
    </SimpleBar>
  );
}

export default Sidebar;
