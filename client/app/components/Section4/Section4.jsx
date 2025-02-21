"use client";

import React from "react";
import Slider from "./Slider/Slider.jsx";
import EvTatilim from "./svg/EvTatilim";
import FreshFruit from "./svg/FreshFruit";
import Hyundai from "./svg/Hyundai";
import PortNature from "./svg/PortNature";
import Tolerance from "./svg/Tolerance";

const slidesData = [
  <EvTatilim width={129} height={50} className="custom-class" />,
  <FreshFruit width={129} height={50} className="custom-class" />,
  <Hyundai width={129} height={50} className="custom-class" />,
  <PortNature width={129} height={50} className="custom-class" />,
  <Tolerance width={129} height={50} className="custom-class" />,
];

const Section4 = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-32">
      <div className="flex flex-col justify-center items-center gap-3">
        <h3 className="flex font-inter28 font-bold text-5xl leading-[57.60px]">
          Our Collaborators
        </h3>
        <p className="flex text-lg font-normal font-inter28 leading-[25.20px]">
          How can we help you?
        </p>
      </div>
      <div className="w-4/6 flex h-30vh justify-center items-center">
        <Slider slides={slidesData} />
      </div>
    </div>
  );
};

export default Section4;
