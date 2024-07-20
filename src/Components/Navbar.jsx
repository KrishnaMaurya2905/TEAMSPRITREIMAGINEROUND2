import React from "react";
import NavLinkAnimation from "./NavLinkAnimation";

const Navbar = () => {
  return (
    <div className="w-full h-[12vh] fixed flex items-center justify-between max-md:px-5 px-20 top-0 z-[99] ">
      <img
        className="max-md:p-5"
        src="https://www.monsterenergy.com/img/home/monster-logo.png"
        alt=""
      />
      <div className="max-sm:hidden w-fit h-full font-['Teko'] text-[1.6rem] max-md:text-[1rem] tracking-wider text-white flex items-center gap-10 max-md:gap-5 ">
        <NavLinkAnimation>UNLEASHED</NavLinkAnimation>
        <NavLinkAnimation>PRODUCTS</NavLinkAnimation>
        <NavLinkAnimation>PROMOTIONS</NavLinkAnimation>
        <NavLinkAnimation>ROSTERS</NavLinkAnimation>
        <NavLinkAnimation>WHERE TO BUY</NavLinkAnimation>
      </div>
    </div>
  );
};

export default Navbar;
