"use client";

import React from "react";
import Partner from "./SliderImage/Partner";
import { useTranslations } from 'next-intl';

const Section4 = () => {
   const t = useTranslations("AboutPage")

  return (
    <div className="flex flex-col w-full justify-center items-center mt-5">
      <div className="flex flex-col justify-center items-center gap-[3px] lg:gap-8">
        <h3 className="flex font-inter28 font-bold text-2xl lg:text-5xl leading-[57.60px]">
       {t("aboutpage_s3_footer_header1")}
        </h3>
        <p className="flex text-lg font-normal font-inter28 leading-[25.20px]">
         {t("aboutpage_s3_footer_text1")}
        </p>
      </div>
      <div className="w-[90%] lg:w-4/6 flex h-[18vh] lg:h-30vh justify-center items-center mt-6">
        <Partner />
      </div>
    </div>
  );
};

export default Section4;
