import React from "react";
import Logo from "../../assets/svg/logo";
import MenuButton from "../../assets/svg/menuButton";

function Navbar() {
  return (
    <div className="h-14 pt-3 flex justify-between items-center px-[10%] mb-20 sticky top-0 bg-custom-full-black z-10">
      <Logo />
      <MenuButton toggleMenu={false} />
    </div>
  );
}

export default Navbar;
