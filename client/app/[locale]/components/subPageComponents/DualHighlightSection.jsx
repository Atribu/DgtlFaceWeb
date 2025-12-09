"use client";

import React from "react";

const DualHighlightSection = ({ items }) => {
  // items: [{ title: string, text: string }, ...]
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 w-[95%] mt-[0px]">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-start lg:gap-[16px] lg:w-[100%] text-center lg:text-start"
        >
          <button className="gradient-darktext-header relative flex border w-[90%] py-[16px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px]  text-black">
            <h2 className="font-inter28">
              {item.title}
            </h2>
          </button>
          <p className="text-[12px] w-[90%] lg:w-[80%] lg:text-[14px] lg:ml-10 font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black mt-[18px] lg:mt-0 ">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DualHighlightSection;
