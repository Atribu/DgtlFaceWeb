"use client";

import React, { useEffect, useState } from "react";
import ServiceBlocks from "../../components/serviceblocks/ServiceBlocks";
import ServicesCarouselWrapper from "../../components/serviceblocks/ServicesCarouselWrapper";

const ResponsiveServicesBanner = ({ header, text, span, buttonText, text2 }) => {
  const [blocksOrder, setBlocksOrder] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]);

  useEffect(() => {
    const desktopArtworkQuery = window.matchMedia("(min-width: 768px)");
    let interval;

    const stopAnimation = () => {
      if (interval) {
        clearInterval(interval);
        interval = undefined;
      }
    };

    const syncAnimation = () => {
      stopAnimation();

      if (!desktopArtworkQuery.matches) return;

      interval = setInterval(() => {
        setBlocksOrder((previousOrder) => {
          const nextOrder = [...previousOrder];
          nextOrder.unshift(nextOrder.pop());
          return nextOrder;
        });
      }, 1500);
    };

    syncAnimation();
    desktopArtworkQuery.addEventListener("change", syncAnimation);

    return () => {
      stopAnimation();
      desktopArtworkQuery.removeEventListener("change", syncAnimation);
    };
  }, []);

  const blockPositions = {
    0: "-translate-y-1/2 z-[5] translate-x-[43px]",
    1: "-translate-y-[calc(50%-80px)] z-[10] -translate-x-[18px]",
    2: "-translate-y-[calc(50%-160px)] z-[50] -translate-x-[82px]",
    3: "-translate-y-[calc(50%-80px)] z-[70] -translate-x-[146px]",
    4: "-translate-y-1/2 z-[80] -translate-x-[210px]",
    5: "-translate-y-[calc(50%+80px)] z-[60] -translate-x-[146px]",
    6: "-translate-y-[calc(50%+160px)] z-[40] -translate-x-[82px]",
    7: "-translate-y-[calc(50%+80px)] z-[20] -translate-x-[18px]",
  };

  return (
    <div className="relative flex h-[78vh] min-h-[500px] w-screen items-center justify-center bg-cover bg-center mt-[70px] md:h-[62vh] lg:h-[55vh] lg:mt-[160px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 lg:hidden"
        style={{
          background: `linear-gradient(
            to bottom,
            #140C29 0%,
            #140C29 5%,
            #1c153b 25%,
            #1c153b 38%,
            #140C29 50%,
            #1c153b 68%,
            #2a1a4f 75%,
            #2a1a4f 94%,
            #ffffff 100%
          )`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          background: `linear-gradient(
            to bottom,
            #ffffff 0%,
            #f2edf9 8%,
            #2a1a4f 25%,
            #1c153b 38%,
            #140C29 50%,
            #1c153b 68%,
            #2a1a4f 75%,
            #f2edf9 88%,
            #ffffff 100%
          )`,
        }}
      />

      <div className="relative z-10 flex w-[90%] flex-col items-center justify-center pb-6 text-black md:min-h-[680px] md:py-1 md:pb-0 lg:grid lg:w-full lg:grid-cols-2 lg:bg-transparent lg:px-0 lg:py-24">
        <div className="hidden -ml-[22%] md:flex md:-mt-[60%] lg:mt-0">
          <ServiceBlocks
            blocksOrder={blocksOrder}
            rotate={true}
            rotateDegree={90}
            blockPositions={blockPositions}
          />
        </div>

        <div className="mb-8 flex scale-150 items-center justify-center lg:hidden">
          <ServicesCarouselWrapper selected={1} isActive={true} />
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center text-center lg:-ml-10 lg:w-full lg:items-start lg:text-start xl:-ml-20 2xl:min-w-[870px]">
          <h1 className="flex flex-col items-center justify-center gap-2 pb-1 text-center font-inter28 text-[24px] font-semibold leading-[110%] lg:mb-2 lg:items-start lg:justify-start lg:text-start lg:text-[26px] lg:leading-[120%]">
            <span className="bg-gradient-to-r from-[#54b9cf] to-[#a754cf] bg-clip-text text-transparent">
              {header} {span}
            </span>
          </h1>

          <div className="flex flex-col gap-2">
            <p className="font-inter28 text-[12px] font-normal leading-tight text-white -tracking-[0.28px] md:text-[14px] lg:text-[16px] lg:leading-[130%]">
              {text}
            </p>

            <p className="font-inter28 text-[12px] font-normal leading-tight text-white -tracking-[0.28px] md:text-[14px] lg:text-[16px] lg:leading-[130%]">
              {text2}
            </p>
          </div>

          <button className="gradient-border-button mt-2 h-[42px] min-w-[124px] justify-center whitespace-nowrap font-inter text-[14px] leading-[16.8px] tracking-[-0.28px] md:mt-4 lg:hidden">
            {buttonText}
          </button>
        </div>

        <style jsx>{`
          .gradient-border-button {
            position: relative;
            padding: 3px 10px;
            font-size: 14px;
            font-weight: 700;
            background: transparent;
            color: #fff;
            border: none;
            border-radius: 14px;
            cursor: pointer;
            z-index: 1;
            overflow: hidden;
          }

          .gradient-border-button::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 3px;
            background: linear-gradient(
              90deg,
              #a754cf,
              #54b9cf,
              #547dcf,
              #a754cf
            );
            background-size: 300%;
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            transition: background-position 0.1s;
          }

          .gradient-border-button:hover::before {
            animation: moveBorder 3s linear infinite;
          }

          @keyframes moveBorder {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ResponsiveServicesBanner;
