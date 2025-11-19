"use client";

import React from "react";

const DualHighlightSection = ({ items }) => {
  // items: [{ title: string, text: string }, ...]
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-2 w-[95%] mt-[0px]">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-[32px] lg:w-[100%] text-center"
        >
          <button className="gradient-darktext-header relative flex border w-[90%] py-[16px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
            <h2 className="font-inter28">
              {item.title}
            </h2>
          </button>
          <p className="text-[12px] w-[90%] lg:text-[14px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black mt-[18px] lg:mt-0">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DualHighlightSection;
