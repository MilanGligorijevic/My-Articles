import React from "react";
import Logo from "../../assets/svg/logo";
import MenuButton from "../../assets/svg/menuButton";

function Navbar() {
  return (
    <div className="h-14 pt-1 flex justify-between items-center px-[10%] mb-10 sticky top-0 bg-custom-full-black">
      <Logo />
      <MenuButton toggleMenu={false} />
    </div>
  );
}

export default Navbar;
