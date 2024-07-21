import React, { useState } from "react";
import NavLinkAnimation from "./NavLinkAnimation";
import { MdOutlineMenu } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
const Navbar = () => {
  const [opennav, setopenNav] = useState(false);
  return (
    <>
      <div className="w-full text-white h-[12vh] fixed flex items-center justify-between max-md:px-5 px-20 top-0 z-[99] ">
        <img
          className="max-md:p-5 max-sm:h-[7vh] max-sm:p-0"
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
        <RiMenu4Line
          onClick={() => {
            setopenNav((prev) => !prev);
          }}
          className="text-3xl md:hidden"
        />
      </div>
      <FullScreenNav opennav={opennav} setopenNav={setopenNav} />
    </>
  );
  z;
};

export default Navbar;

const FullScreenNav = ({ opennav, setopenNav }) => {
  return (
    <div
      className={`${
        opennav ? "w-full" : "w-0"
      } fixed top-0 right-0 z-[99] transition-all duration-1000 h-screen bg-red-500`}
    >
      
    </div>
  );
};
