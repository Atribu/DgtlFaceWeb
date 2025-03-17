"use client";

import React from "react";
import Partner from "./SliderImage/Partner";

const Section4 = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-5">
      <div className="flex flex-col justify-center items-center gap-[3px] lg:gap-8">
        <h3 className="flex font-inter28 font-bold text-2xl lg:text-5xl leading-[57.60px]">
          Our Collaborators
        </h3>
        <p className="flex text-lg font-normal font-inter28 leading-[25.20px]">
          How can we help you?
        </p>
      </div>
      <div className="w-4/6 flex h-30vh justify-center items-center mt-6">
        <Partner />
      </div>
    </div>
  );
};

export default Section4;
