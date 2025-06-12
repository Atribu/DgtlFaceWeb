"use client";
import React from "react";
import FireballExplosion from "./Animation/FireballExplosion";
import { useTranslations } from 'next-intl';

const Section = () => {
  const t = useTranslations("Homepage.partners")

  return (
    <section className="flex flex-col md:flex-row w-[90%] xl:w-8/12 items-start justify-center gap-[42px] lg:gap-0">
      {/* Sol Kısım: Metin */}
      <div className="flex flex-col w-full md:w-1/2 lg:p-6 text-start text-darkBlue gap-[8px] font-inter">
        <h2 className="text-[24px] lg:text-5xl font-bold mb-[7px] lg:mb-4 font-inter28 leading-[120%] lg:leading-[57.60px] -tracking-[0.48px]">
         {t("tagline_main")}
        </h2>
        <h3 className="text-2xl font-inter28 font-bold mb-3 leading-[28.80px]">
          DGTLFACE  <span className="text-[16px] lg:text-lg font-inter28 font-bold lg:font-normal leading-[120%] lg:leading-[25.20px] -tracking-[0.32px]"> –   {t("tagline_subtitle")}</span>
        </h3>
        <p className="text-[14px] leading-[130%] -tracking-[0.42px] lg:text-base font-normal">
         {t("tagline_description")}
        </p>
      </div>

      {/* Sağ Kısım: Three.js Sahnesi */}
      <div className="flex relative lg:p-6 items-center justify-center h-[400px] md:h-auto">
        <div className="w-full max-w-[500px] h-[500px] relative overflow-hidden mt-4 ">
        <FireballExplosion />
        </div>
      </div>
    </section>
  );
};

export default Section;
