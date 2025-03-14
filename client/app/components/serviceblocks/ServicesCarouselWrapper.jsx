
"use client";
import  Link  from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import React, { useCallback, useEffect, useState } from "react";
import VBlock from "./VBlock";
// import noiseFull from "@/public/noisefull.png";
import Image from "next/image";
import makeGradientTitle from "@/lib/makeGradientTitle";

function ServicesCarouselWrapper() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const [status, setStatus] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleHoverStart = (index) => {
    // console.log("hover start");
    setStatus(index);
  };

  const handleHoverEnd = (index) => {
    // console.log("hover end");
    setStatus(false);
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    // console.log(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Add the select event listener
    emblaApi.on("select", onSelect);
    // Remove event listeners on cleanup
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className=" py-8" ref={emblaRef}>
      <div className="embla__container mx-8  px-4 md:px-10 lg:px-0 w-full max-w-[calc(100vw-16px)] ">
      

            <div
              className=" golge group relative   
                  mr-6 h-[180px] max-w-[300px] flex-shrink-0 flex-grow-0 basis-[90%] cursor-pointer overflow-hidden rounded-11 bg-darkBlue shadow-xl lg:h-[320px]
                 lg:max-w-[625px] "
            //   key={index}
            //   onMouseEnter={() => handleHoverStart(index)}
            //   onMouseLeave={() => handleHoverEnd(index)}
            >
              <div className="flex  h-full flex-col items-start justify-between pb-[25px]  pl-[40px] pt-[25px] text-white transition-all duration-300 ease-in-out lg:pb-[75px] lg:pr-[175px] lg:pt-[100px]   lg:group-hover:pb-[40px] lg:group-hover:pt-[50px] ">
                <div className="flex  flex-col items-start justify-start gap-5 lg:group-hover:gap-3">
                  <span className="z-[160] hidden font-semibold w-full text-3xl text-white lg:block">
                    div header
                  </span>
                  <span className="z-[160] w-[70%] text-xl font-semibold text-white lg:hidden">
                  hrstjsy
                  </span>

                  <ul className="!marker:text-white ps-2 z-[160] hidden list-inside !list-disc gap-3 opacity-60 lg:flex lg:flex-col">
                    <p>div içi text</p>
                  </ul>
                </div>

                <Link
                  href="/"
                  className="btn-border z-[170]  !rounded-11 px-6 py-2 lg:px-6  lg:py-3 text-xs text-white transition-all duration-300
                  ease-in-out lg:translate-y-[100px] lg:text-sm lg:group-hover:translate-y-0 "
                >
                 hrtsjr
                </Link>
              </div>

              <VBlock
                status={true}
                // status={true}
                className="absolute bottom-[-135px] right-[40px] h-[180px] w-[100px] lg:bottom-[-260px] lg:right-[75px] lg:h-[360px]  lg:w-[200px]"
                selectedC={2}
                // currentIndex={selectedIndex === index  ? true : false}
              />
              <div className="serviceCardLight absolute inset-0 z-[0] "></div>
              <div className="serviceCardShadow absolute inset-0 z-[0] "></div>
              {/* <Image
                src={noiseFull}
                fill
                alt="Noise Image"
                className="absolute inset-0 z-[150] hidden h-full mix-blend-multiply lg:block"
              /> */}
            </div>
      
      </div>
    </div>
  );
}

export default ServicesCarouselWrapper;
