"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Countdown from "../main/Countdown";
import EventStarts from "../main/EventStarts";
import mainLogo from "../assets/main.png";
import DailogBox from "../sub/DailogBox";
import Image from "next/image";
import { useRouter } from "next/router";

const HeroContent = () => {
  const launchDate = new Date("2024-02-17T00:00:00Z");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center mt-20 w-full z-[20]"
    >
      <div className="flex flex-row items-center text-center">
        <motion.div
          variants={slideInFromLeft(1)}
          className="w-full h-full flex justify-items-start items-center"
        >
          <Image src={mainLogo} alt="work icons" height={650} width={650} />
        </motion.div>

        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="gap-6 mt-3 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span style={{ font: "" }}>
              Xplo
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                IT
              </span>
              s 2024
            </span>
          </motion.div>

          <Countdown />
          <motion.div
            variants={slideInFromLeft(0.5)}
            className=" mt-3 font-bold text-white w-auto h-auto"
          >
            <DailogBox />
            <motion.a
              variants={slideInFromLeft(1)}
              className="p-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[400px] mx-3"
              href="#events"
            >
              Explore More!
            </motion.a>
          </motion.div>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroContent;
