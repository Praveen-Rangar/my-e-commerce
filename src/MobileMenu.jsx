import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const MobileMenu = () => {
  const [nav, setNav] = useState(false);
  const handleMenu = () => setNav(!nav);

  return (
    <div className="border-b border-gray-100 md:hidden fixed w-full h-[80px] flex items-center justify-between px-4 bg-white text-gray-300">
      <div className="w-28">
        <img
          src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
          alt="logo image"
        />
      </div>

      {/* hamburger */}

      <div onClick={handleMenu} className="z-10 md:hidden">
        {!nav ? (
          <FaBars className="text-2xl" />
        ) : (
          <FaTimes className="text-2xl" />
        )}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-[#0a192f]"
        }
      >
        <li className="py-4 text-4xl">Home</li>
        <li className="py-4 text-4xl">About</li>
        <li className="py-4 text-4xl">Skill</li>
        <li className="py-4 text-4xl">Work</li>
        <li className="py-4 text-4xl">Contact</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
