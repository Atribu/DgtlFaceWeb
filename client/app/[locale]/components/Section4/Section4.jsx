"use client";

import React from "react";
import Partner from "./SliderImage/Partner";
import { useTranslations } from 'next-intl';

const Section4 = () => {
   const t = useTranslations("AboutPage")

  return (
    <div className="flex flex-col w-full justify-center items-center mt-5">
      <div className="flex flex-col justify-center items-center gap-[3px] lg:gap-2">
        <span className="flex font-inter28 font-semibold text-[20px] lg:text-[24px] leading-[120%]">
       {t("aboutpage_s3_footer_header1")}
        </span>
        <p className="flex text-[14px] font-normal font-inter28 leading-[25.20px]">
         {t("aboutpage_s3_footer_text1")}
        </p>
      </div>
      <div className="w-[90%] lg:w-4/6 flex h-[10vh] lg:h-30vh justify-center items-center mt-6">
        <Partner />
      </div>
    </div>
  );
};

export default Section4;
