"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const cardData = [
  {
    id: 1,
    value: "4",
    title: "Times",
    description: "International Sales Increase",
    gradientFrom: "#a754cf",
    gradientTo: "#54b9cf",
  },
  {
    id: 2,
    value: "10",
    title: "Years",
    description: "Successful Brand Projects",
    gradientFrom: "#54b9cf",
    gradientTo: "#a754cf",
  },
  {
    id: 3,
    value: "6",
    title: "Month",
    description: "for Improvement in project indicators",
    gradientFrom: "#a754cf",
    gradientTo: "#54b9cf",
  },
  {
    id: 4,
    value: "8",
    title: "Department",
    description: "Professional team consisting of 8 departments",
    gradientFrom: "#54b9cf",
    gradientTo: "#a754cf",
  },
];

const Section2 = () => {
  // Embla Carousel ayarlarımız: loop ve kaydırma ayarı
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-auto w-screen">
      {/* Header alanı isteğe bağlı */}
      <div className="flex justify-center items-center gap-8 text-center w-[80%] max-w-[968px]">
        {/* Buraya header içeriklerinizi ekleyebilirsiniz */}
   
      {/* Carousel Container */}
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex ">
          {cardData.map((card) => (
            <div
              key={card.id}
              className=" flex-[0_0_40%] mr-[14px] lg:mr-auto lg:flex-[0_0_23%] h-auto"
            >
              <div
                style={{
                  background: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,
                }}
                className="p-1 rounded-lg"
              >
                <div className="bg-white flex flex-col text-center items-center justify-center w-full text-darkBlue gap-[7px] h-[150px] lg:h-[243px]">
                  <h2 className="text-[40px] lg:text-7xl font-bold font-inter28 leading-[110%] lg:leading-[77px] -tracking-[0.8px]">
                    {card.value}
                  </h2>
                  <p className="text-[18px] lg:text-2xl font-inter28 font-semibold leading-[120%] lg:leading-none -tracking-[0.36px] ">
                    {card.title}
                    <br />
                    <span className="block mt-4 font-inter28 text-[10px] lg:text-sm leading-[140%] lg:leading-tight -tracking-[0.2px] font-normal">
                      {card.id === 4 ? (
                        <>
                          Professional team
                          <br />
                          consisting of 8 departments
                        </>
                      ) : (
                        card.description
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Section2;
