import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/svg/logo";
import MenuButton from "../../assets/svg/menuButton";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  const menuRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsToggled(false);
    }
  };

  useEffect(() => {
    if (isToggled) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isToggled]);

  function handleToggle() {
    setIsToggled(!isToggled);
    console.log(isToggled);
  }

  return (
    <div className="h-14 pt-4 flex justify-between items-center px-[10%] mb-20 sticky top-0 bg-custom-full-black z-10">
      <Logo />
      <div onClick={handleToggle} ref={menuRef}>
        <MenuButton toggleMenu={isToggled} />
      </div>
    </div>
  );
}

export default Navbar;
