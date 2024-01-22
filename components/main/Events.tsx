"use client";
import React, { useRef } from "react";
import EventCard from "../sub/EventCard";
import hover3d from "../../utils/hover";

const Events = () => {
  const hero = useRef<HTMLDivElement>(null);
  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });
  return (
    <div
      className="flex flex-col items-center justify-center py-20  z-[20]"
      id="events"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Events
      </h1>
      <div className=" flex flex-col gap-10 md:flex-row px-10">
        <div className="cursor-pointer">
          <EventCard src="/1.png" title="Paper Presentation" />
        </div>
        <div>
          <EventCard src="/2.png" title="Mysticode" />
        </div>
        <div>
          <EventCard src="/3.png" title="Res-Q Venture" />
        </div>
        <div>
          <EventCard src="/4.png" title="Sherlock" />
        </div>
        <div>
          <EventCard src="/5.png" title="Box Cricket" />
        </div>
      </div>
    </div>
  );
};

export default Events;
