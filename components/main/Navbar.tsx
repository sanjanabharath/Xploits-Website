import React from "react";
import college from "../assets/veclogo.png";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0  backdrop-blur-md z-[50] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[5px]">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <span className="flex justify-center">
            <img
              src="/veclogo.png"
              alt="college logo"
              className="w-[700px] mt-20"
            />
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
