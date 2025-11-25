"use client";
import React from "react";
import DgtlfaceLogoBlackHead from "../header/svg/DgtlfaceLogoBlackHead";
import FireballExplosion from "../Section1/Animation/FireballExplosion";

const LogoListSection = ({
  introTitle,
  introSubtitlePrefix = "DGTLFACE",
  cards,
  
}) => {
  return (
    <section className="flex flex-col w-screen items-center justify-start -mb-10 min-h-[700px] bg-white ">
      <div className="flex flex-col w-[80%] items-center justify-center ">
        {/* ÜST KISIM — METİN + ANİMASYON */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[42px] lg:gap-0">
        {/* SOL METİN */}
        <div className="flex flex-col w-full md:w-[60%]  text-start text-darkBlue font-inter">
          <h2 className="text-[22px] lg:text-[24px] font-semibold font-inter28 leading-[120%] -tracking-[0.48px]">
            {introTitle}
          </h2>


          {/* <p className="text-[14px] leading-[130%] -tracking-[0.42px] lg:text-[16px] font-normal w-full">
            {introDescription}
          </p> */}
        </div>

        {/* SAĞ — ANİMASYON */}
        <div className="flex relative lg:p-6 items-center justify-center h-[400px] md:h-auto">
          <div className="w-full max-w-[500px] h-auto relative overflow-hidden mt-0">
            <FireballExplosion />
          </div>
        </div>
      </div>

      {/* ALT KARTLAR */}
      <div className="flex flex-col relative z-[90] items-end justify-end w-full gap-10">
        {cards?.map((card, index) => (
          <div
            key={index}
            className={`${card.widthClass || "w-[80%]"} px-[3%] xl:px-[20px] py-4 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3 opacity-80`}
          >
            <h4 className="w-full relative justify-start text-[#140f25] text-[20px] font-semibold font-inter leading-[120%] lg:leading-[28.80px]">
              {card.title}
            </h4>

            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <div className="relative text-justify justify-start text-[#140f25] lg:text-[16px] font-normal lg:leading-[120%] text-[12px] -tracking-[0.28px] leading-[130%]">
                {card.description}
              </div>
            </div>
          </div>
        ))}

        {/* ARKA PLAN LOGO */}
        <DgtlfaceLogoBlackHead
          width={720}
          height={720}
          className="-scale-x-100 absolute z-1 opacity-20 right-[63%] -top-[6%]"
          color="#5dafcf"
        />
      </div>
      </div>
    </section>
  );
};

export default LogoListSection;
