"use client";

import React from "react";
import DgtlfaceLogoBlackHead from "../header/svg/DgtlfaceLogoBlackHead";

const H2LogoSection = ({ items = [] }) => {
  if (!items.length) return null;

  const isOdd = items.length % 2 === 1;
  const lastItem = isOdd ? items[items.length - 1] : null;
  const gridItems = isOdd ? items.slice(0, -1) : items;

  return (
    <section className="w-screen bg-[#080612] flex justify-center">
      <div className="max-w-[1600px] w-full px-4 py-6 lg:py-10">
        <div className="relative">
          <div className="relative z-10 grid gap-10 lg:gap-14 md:grid-cols-2 items-center justify-center">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-start lg:text-start text-white gap-3 w-[95%]"
              >
                <h2 className="text-[22px] lg:text-[24px] leading-[130%] font-semibold">
                  {item.title}
                </h2>

                <div
                  className="text-[12px] lg:text-[14px] leading-[120%] space-y-1 [&_ul]:list-disc
      [&_ul]:pl-[5%] [&_ul]:text-start
      [&_li]:mb-1"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center mr-[2%]">
            <DgtlfaceLogoBlackHead
              width={100}
              height={100}
              color="#ffffff"
              className="opacity-40"
            />
          </div>
        </div>

        {isOdd && lastItem && (
          <div className="mt-12 lg:mt-16 flex flex-col items-center text-start text-white gap-3 mx-auto w-[95%] lg:w-[70%] max-w-[800px]">
            <h2 className="text-[22px] lg:text-[24px] leading-[130%] font-semibold">
              {lastItem.title}
            </h2>

            <div
              className="text-[12px] lg:text-[14px] leading-[120%] space-y-1 [&_ul]:list-disc
      [&_ul]:pl-[5%] [&_ul]:text-start
      [&_li]:mb-1"
              dangerouslySetInnerHTML={{ __html: lastItem.text }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default H2LogoSection;
