"use client";
import React, { useEffect, useState } from "react";
import ServicesCarouselWrapper from "./ServicesCarouselWrapper";

function  Services() {
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
      
      <div className="flex w-full items-center justify-end">
        <div className="lg:w-[80%] lg:mr-[100px]">
            <ServicesCarouselWrapper  />
        </div>
      </div>
    </section>
  );
}

export default Services;