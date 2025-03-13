"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import ServicesCarouselWrapper from "./ServicesCarouselWrapper";
import Link  from "next/link";

// import noiseFull from "@/public/noisefull.png";
import ServiceBlocks from "./ServiceBlocks";
import HeadingTag from "./HeadingTag";
import makeGradientTitle from "@/lib/makeGradientTitle";

function Services() {
  const [readMore, setReadMore] = useState(false);

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

  // useEffect(() => {
  //   console.log(blocksOrder);
  // }, [blocksOrder]);

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
    <section>
      <div className="relative grid lg:grid-cols-2 xl:grid-cols-2 bg-darkBlue px-12 py-8 md:px-20 md:py-12 lg:min-h-[680px] lg:px-0 lg:py-24 w-screen bg-black">
        <ServiceBlocks
          blocksOrder={blocksOrder}
          blockPositions={blockPositions}
          mobile={true}
        />
        <div className=" z-[1] col-span-1 flex  flex-col items-start  justify-center gap-5 opacity-100 lg:col-span-1">
          <HeadingTag tag="ferg" className="text-3xl w-fit font-semibold lg:text-[48px] lg:leading-[48px]">
            {makeGradientTitle("tfrwg")}
          </HeadingTag>

          <div
            className={clsx(
              "relative  overflow-hidden transition-all duration-700 lg:hidden",
              readMore ? "max-h-[1000px]" : "max-h-[100px]",
            )}
          >
            <p className=" whitespace-pre-line  text-sm font-normal lg:text-[18px]">
             hfjrstj
            </p>
            <div
              className={clsx(
                "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-darkBlue to-transparent",
                readMore ? "h-0" : "h-[100px]",
              )}
            ></div>
          </div>
          <p className="hidden text-sm 3xl:text-base w-[70%] whitespace-pre-line xl:pe-16 2xl:pe-[6rem] 3xl:pe-[25%] font-normal lg:flex">
            hsej
          </p>

          {readMore === false ? <button
            onClick={() => setReadMore(!readMore)}
            className="btn-border rounded-11 w-full gap-3 px-8 py-4 xl:py-2 lg:hidden"
          >
           ghestj
          </button> : <Link href="/" className="btn-border text-center rounded-11 w-full gap-3 px-8 py-4 xl:py-2 lg:hidden"> het</Link>}
          <Link
            href="/"
            className="btn-border !rounded-11 hidden gap-3 px-7 py-3 text-sm lg:flex"
          >
            ghetj
          </Link>
        </div>
        <div className="serviceBg absolute bottom-0 left-0 top-0 hidden h-full w-[500px]  lg:block xl:w-[680px]"></div>
        <div className="serviceShadow absolute left-0 z-[100] hidden h-full w-[400px] lg:block"></div>
        {/* <Image
          src={noiseFull}
          fill
          alt="Noise Image"
          className="absolute inset-0 z-[0] hidden h-full mix-blend-multiply lg:block"
        /> */}
      </div>
      <div className="flex w-full items-center justify-end">
        <div className="lg:w-[80%] lg:mr-[100px]">
          
            <ServicesCarouselWrapper  />
          
        </div>
      </div>
    </section>
  );
}

export default Services;