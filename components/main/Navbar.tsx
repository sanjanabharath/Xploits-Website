import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            #XploITs2024
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-0 bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#home" className="cursor-pointer">
              Home
            </a>
            <a href="#events" className="cursor-pointer">
              Events
            </a>
            <a href="#team" className="cursor-pointer">
              Team
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
