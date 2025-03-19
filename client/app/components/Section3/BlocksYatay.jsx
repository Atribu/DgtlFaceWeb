"use client";
import React, { useEffect, useState } from "react";
import ServiceBlocks from "../serviceblocks/ServiceBlocks";
import Link from "next/link";

const Section3 = () => {
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
    const interval = setInterval(() => {
      // setGradientIndex((prev) => (prev === 7 ? 0 : prev + 1));
      // set blocks order
      // after one full cyle stop the interval

      setBlocksOrder((prev) => {
        // if (prev[0] == 1) {
        //   clearInterval(interval);
        //   return prev;
        // }
        const newOrder = [...prev];
        newOrder.unshift(newOrder.pop());
        return newOrder;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const blockPositions = {
    0: "-translate-y-1/2 z-[5] translate-x-[43px]",
    1: "-translate-y-[calc(50%-80px)] z-[10] -translate-x-[18px]",
    2: "-translate-y-[calc(50%-160px)] z-[50] -translate-x-[82px]",
    3: "-translate-y-[calc(50%-80px)] z-[70] -translate-x-[146px]",
    4: "-translate-y-1/2 z-[80] -translate-x-[210px]",
    5: "-translate-y-[calc(50%+80px)] z-[60]  -translate-x-[146px]",
    6: "-translate-y-[calc(50%+160px)] z-[40] -translate-x-[82px]",
    7: "-translate-y-[calc(50%+80px)] z-[20]  -translate-x-[18px]",
  };

  return (
    <div
      className="flex flex-row w-full h-auto justify-center items-center  font-inter"
      style={{
        background:
          "linear-gradient(to right, #140C29 0%, #140C29 25%, #1d2342 30%, #1d2342 38%, #140C29 45%, #140C29 100%)",
      }}
    >
      <div className="w-[90%] md:w-[85%] lg:w-[100%] relative flex flex-col-reverse lg:grid lg:grid-cols-2  bg-darkBlue  py-8  md:py-12 text-black lg:min-h-[680px] lg:px-0 lg:py-24 lg:bg-transparent items-center justify-center">
 
          {/* <BlocVertical /> */}
         <div className="hidden lg:flex">
         <ServiceBlocks    blocksOrder={blocksOrder} rotate={true}
          blockPositions={blockPositions}/>
         </div>
       
        <div className="flex flex-col text-start items-start justify-center h-full ">
          <h3 className=" flex flex-row lg:flex-col gap-2 text-[24px] leading-[120%] lg:text-5xl font-inter28 font-bold lg:leading-[57.60px] pb-1 -tracking-[0.48px]">
            <span className="text-white">Our</span>
            <span className="bg-gradient-to-r from-[#54b9cf] to-[#a754cf] bg-clip-text text-transparent text-[24px] lg:text-5xl font-inter28 font-bold lg:leading-[57.60px] pb-1 -tracking-[0.48px] leading-[120%]">
              Services
            </span>
          </h3>

          <div className="flex flex-col gap-2">
            <p className="flex flex-col lg:hidden font-inter28 text-sm text-white font-normal leading-tight "> 
              Dive into the world of digital excellence with DGTLFACE. We are
              not just an agency; we are the architects of online
              success. Transform your brand with our  innovative
              strategies, captivating visuals and resonant digital presence.
              Unleash excellence; Choose us as your digital partner.
              <br></br>
              <span className="opacity-50 line-clamp-2">
              Clicks are just the beginning; conversions are our destination. At
              DGTLFACE, we navigate the digital landscape with precision,
              turning every interaction into a conversion. Join us on the
              journey where your brand not only gets noticed but {" "}
              remembered.
              </span>
            </p>

            <p className="font-inter28 text-[14px] lg:text-[18px] text-white font-normal leading-[130%] -tracking-[0.28px] hidden lg:flex">
              Dive into the world of digital excellence with DGTLFACE. We are
              not just an <br /> agency; we are the architects of online
              success. Transform your brand with our <br /> innovative
              strategies, captivating visuals and resonant digital presence.
              Unleash <br /> excellence; Choose us as your digital partner.
            </p>
            <p className="font-inter28 text-sm lg:text-[18px] text-white font-normal leading-tight hidden lg:flex">
              Clicks are just the beginning; conversions are our destination. At
              DGTLFACE, we <br /> navigate the digital landscape with precision,
              turning every interaction into a <br /> conversion. Join us on the
              journey where your brand not only gets noticed but <br />{" "}
              remembered.
            </p>
          </div>

          <Link href="/services" className="mt-3 gradient-border-button flex items-center w-full lg:w-[114px] h-[42px] justify-center font-inter leading-[16.8px] tracking-[-0.28px] text-[14px]">
            Explore
          </Link>
          <style jsx>{`
            .gradient-border-button {
              position: relative;
              padding: 3px 0px;
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
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
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
    </div>
  );
};

export default Section3;
