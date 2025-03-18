"use client";
import React, { useEffect, useState } from "react";
import Services from '../serviceblocks/Services'
import ServiceBlocks from '../serviceblocks/ServiceBlocks'

const VerticalSlider = () => {
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
    <div className='flex items-center justify-center bg-cover bg-center h-screen w-screen '  style={{ background:
        "linear-gradient(to right, #140C29 0%, #140C29 25%, #1d2342 30%, #1d2342 38%, #140C29 45%, #140C29 100%)",}}>
      <div className='flex w-[80%] h-full gap-[64px] items-center justify-center text-white'>
        <div className='flex flex-col gap-[100px] w-[49%] items-start justify-center text-start mt-[70px]'>
            <h2 className='text-[56px] font-bold leading-[110%] -tracking-[1.12px]'>Our <br></br> <span className='bg-gradient-to-r from-[#54b9cf] to-[#a754cf] bg-clip-text text-transparent'>Services</span></h2>
            {/* slider */}
            <div></div>
        </div>

        <div className='flex h-full w-[49%] items-center justify-start overflow-hidden'>
           <ServiceBlocks blocksOrder={blocksOrder} rotate={false}
          blockPositions={blockPositions}/>
        </div>
      </div>
    </div>
  )
}

export default VerticalSlider
