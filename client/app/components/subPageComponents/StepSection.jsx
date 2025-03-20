"use client";
import React, { useCallback, useEffect, useState } from "react";
import ServicesCarouselWrapper from "../serviceblocks/ServicesCarouselWrapper";
import Link from "next/link";

const StepSection = ({header,header2,text,servicesData=[]}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [status, setStatus] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex w-screen h-auto items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[90%] xl:w-[85%] 2xl:w-[65%] gap-[34px] lg:gap-[68px] font-inter">
        <div className="flex flex-col items-center justify-center text-center w-full lg:w-[70%] gap-[6px] lg:gap-[16px] text-[#140F25] ">
          <h2 className=" text-[24px] lg:text-[48px] font-bold leading-[120%]  -tracking-[0.48px] lg:-tracking-[0.96px] text-[#140F25] w-full lg:w-[55%]">
            {header}{" "}
            <span className="bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent">
              {header2}
            </span>
          </h2>
          <p className="text-[14px] lg:text-[18px] font-normal leading-[130%] lg:leading-[140%] w-full lg:w-[68%]">
            Every pixel, every word has been meticulously woven into a perfect
            texture. Join the innovation symphony where dreams turn into design.
            Your vision, our craft.
          </p>
        </div>

        <div className="flex flex-col md:grid grid-cols-2 gap-[16px] lg:gap-[32px] w-[100%]">
          {servicesData.map((card, index) => (
            <div
              key={card.id}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              data-property-1="Default"
              className={` group h-[83px] md:h-72 relative bg-[#130b29] rounded-3xl shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] overflow-hidden text-white ${
                card.id === 3 ? "col-span-2 w-[98%]" : "lg:w-[582px]"
              }`}
            >
              <div className="w-[90%] lg:w-[582px] h-80 opacity-50 bg-[radial-gradient(ellipse_10.32%_6.01%_at_75.86%_80.09%,_#54B9CF_0%,_#547CCF_50%,_rgba(20,_12,_41,_0)_100%)]" />
              <div className="w-[90%] lg:w-[600px] h-48 left-[-4px] top-[114px] absolute bg-gradient-to-b from-gray-900/0 to-gray-900" />
              <img
                className="w-[300px] lg:w-[619px] min-h-80 left-[-4px] top-[-9px] absolute mix-blend-overlay"
                alt=""
              />
              <div className="px-8 py-4 left-[50px] top-[306px] absolute rounded-2xl outline outline-2 outline-offset-[-2px] outline-blue-400 inline-flex justify-center items-center gap-2.5">
                <div className="text-white text-sm font-bold font-inter leading-none">
                  Explore
                </div>
              </div>
              <div className="left-[29px] top-1/2 -translate-y-1/2 absolute text-Main-White text-[35px] lg:text-8xl -tracking-[0.7px] lg:tracking-[2px] font-bold font-inter leading-[120%] lg:leading-[120px]  text-white transform opacity-100 group-hover:opacity-0 group-hover:-translate-y-full transition-all duration-700">
                {card.id}
              </div>

              <div className="left-[60px] lg:left-[130px] top-4 lg:top-[110px] absolute text-Main-White text-[15px] lg:text-2xl font-bold font-inter leading-loose [text-shadow:_0px_0px_100px_rgb(221_254_254_/_0.50)] transform opacity-100 group-hover:opacity-100 group-hover:-translate-x-20 group-hover:-translate-y-16 transition-all duration-500">
                {card.title}
              </div>
              <div className="left-[60px] hidden md:flex lg:left-[130px] top-[150px] absolute text-Main-White text-[13px] lg:text-xl font-bold font-inter -tracking-[0.3px] lg:-tracking-[0.4px] leading-normal [text-shadow:_0px_0px_100px_rgb(221_254_254_/_0.50)] transform opacity-100 group-hover:opacity-100 group-hover:-translate-x-20 group-hover:-translate-y-16  transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#54b9cf] group-hover:to-[#a754cf] group-hover:text-2xl group-hover:bg-clip-text group-hover:text-transparent">
                {card.subTitle}
              </div>
              <div className="left-[60px] flex md:hidden lg:left-[130px] top-10  md:top-[150px] absolute text-Main-White text-[13px] lg:text-xl font-bold font-inter -tracking-[0.3px] lg:-tracking-[0.4px] leading-normal [text-shadow:_0px_0px_100px_rgb(221_254_254_/_0.50)] transform opacity-100   ">
                {card.subTitle}
              </div>
              <div className="hiddden md:flex left-[50px] top-[330px] absolute opacity-100 inline-flex flex-col gap-2 transform group-hover:opacity-100 group-hover:-translate-y-48 transition-all duration-500 text-white">
                {card.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="text-Main-White text-[10px] font-normal font-['Inter'] leading-3 items-start text-start"
                  >
                    {feature}
                  </div>
                ))}
                <Link
                  href={card.buttonLink}
                  className="gradient-explore-button flex text-[12px] lg:text-[14px] text-white w-[114px] h-[42px] justify-center items-center font-inter leading-[16.8px] tracking-[-0.28px] left-0 absolute bottom-[34px] transform opacity-0  group-hover:opacity-100 group-hover:translate-y-24 transition-all duration-500"
                >
                  Explore
                </Link>
              </div>
              <div
                className={`absolute -right-4 -bottom-[56px] lg:-bottom-[75px] ${
                  card.id === 3 ? "lg:right-36" : "lg:-right-6"
                }`}
              >
                <ServicesCarouselWrapper
                  selected={index}
                  isActive={activeIndex === index}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepSection;
