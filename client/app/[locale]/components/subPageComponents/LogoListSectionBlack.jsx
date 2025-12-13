"use client";
import React from "react";
import DgtlfaceLogoBlackHead from "../header/svg/DgtlfaceLogoBlackHead";
import FireballExplosion from "../Section1/Animation/FireballExplosion";
import FireballExplosionBlack from "../Section1/Animation/FireballExplosionBlack";
import PlainRichText from "../common/PlainRichText";

const LogoListSectionBlack = ({
  introTitle,
  introSubtitlePrefix = "DGTLFACE",
  cards,
  
}) => {
  return (
    <section className="flex flex-col w-screen items-center justify-center  bg-[#080612] text-[#8d60ce] z-[20] lg:pb-[260px]"  
    // style={{ background:
    //       `
    //   linear-gradient(
    //     to bottom,
    //     #080612 30%,
    //     #140C29 82%,
    //     #1c153b 90%,
    //     #2a1a4f 90%,
    //     #f2edf9 95%,
    //     #ffffff 100%
    //   )
    // `,
    //   }}
    //#55a1ce
      >
      <div className="flex flex-col w-[96%] lg:w-[80%] items-center justify-center text-center">
        {/* ÜST KISIM — METİN + ANİMASYON */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[42px] lg:gap-0">
        {/* SOL METİN */}
        <div className="flex flex-col w-full md:w-[60%] text-center lg:text-start bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent font-inter">
          <h2 className="text-[22px] lg:text-[24px] font-semibold font-inter28 leading-[120%] -tracking-[0.48px]">
            {introTitle}
          </h2>


          {/* <p className="text-[14px] leading-[130%] -tracking-[0.42px] lg:text-[16px] font-normal w-full">
            {introDescription}
          </p> */}
        </div>

        {/* SAĞ — ANİMASYON */}
        <div className="flex relative lg:p-6 items-center justify-center lg:h-[400px] md:h-auto">
          <div className="w-full max-w-[500px] h-auto relative overflow-hidden mb-2">
            <FireballExplosionBlack />
          </div>
        </div>
      </div>

      {/* ALT KARTLAR */}
      <div className="flex flex-col relative z-[90] items-center justify-center lg:items-end lg:justify-end w-full gap-10 ">
        {cards?.map((card, index) => (
          <div
            key={index}
            className={`${card.widthClass || "w-[90%] lg:w-[80%]"} px-[3%] xl:px-[20px] py-4 bg-[white] z-[998] rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3 opacity-85`}
          >
            {/* 8978cf */}
            <h4 className="w-full relative justify-start  text-[20px] font-semibold font-inter leading-[120%] lg:leading-[28.80px]">
              {card.title}
            </h4>

            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px] ">
             {card.description && (
  <PlainRichText
    html={card.description}
    as="p"
    className="
      relative text-justify justify-start
      text-[12px] md:text-[14px] lg:text-[16px]
      font-normal leading-[130%] lg:leading-[120%]
      -tracking-[0.28px]
      space-y-1
      [&_ul]:list-disc
      [&_ul]:pl-[5%]
      [&_ul]:text-start
      [&_li]:mb-1
      [&_a]:underline
      [&_a]:underline-offset-2
      [&_a]:font-bold
      [&_a]:text-[#55a1ce] 
      hover:[&_a]:text-[#2f5972]
    "
  />
)}
            </div>
          </div>
        ))}

        {/* ARKA PLAN LOGO */}
        <DgtlfaceLogoBlackHead
          width={720}
          height={720}
          className="-scale-x-100 absolute z-1 opacity-80 right-[63%] top-[1%] z-[10]"
          color="#55a1ce"
        />
      </div>
      </div>
    </section>
  );
};

export default LogoListSectionBlack;
