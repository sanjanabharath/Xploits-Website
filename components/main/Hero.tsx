import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-row h-full w-full z-[-10]" id="home">
      <HeroContent />
    </div>
  );
};

export default Hero;
