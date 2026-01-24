"use client";

import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const H2Section = () => {
  const t = useTranslations("Homepage.h2Section");

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 w-[98%] lg:w-[95%] mt-1 lg:mt-10 items-center justify-center">
        <div className="flex flex-col items-center justify-start gap-2 lg:gap-[2px] lg:w-[50%] text-start">
          <button className="gradient-darktext-header relative flex border w-[90%] py-[12px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black ">
            <h2 className="font-inter28">{t("block1.title")}</h2>
          </button>

          <div className="text-[12px] lg:mt-6 w-[94%] lg:w-[80%] lg:ml-10 md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black mt-0 text-center lg:text-start">
            {t("block1.text1")}
            <span className="font-bold">{t("block1.bold1")}</span>
            {t("block1.text2")}

            <p className="text-[12px] md:text-[14px] lg:text-[16px] text-start mt-2">
              {t("block1.subtitle")}
            </p>

            <ul className=" grid grid-cols-2 text-[12px] md:text-[14px] lg:text-[16px] ml-2 lg:ml-4 list-disc text-start font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black">
              <li>{t("block1.li1")}</li>
              <li>{t("block1.li2")}</li>
              <li>{t("block1.li3")}</li>
              <li>{t("block1.li4")}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-2 lg:gap-[2px] lg:w-[50%] text-start ">
          <button className="gradient-darktext-header relative flex border w-[90%] py-[12px] px-auto items-center justify-center lg:px-[1px] lg:py-[23px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
            <h2>{t("block2.title")}</h2>
          </button>

          <div className="text-[12px] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[94%] lg:w-[80%] lg:mt-6 lg:ml-10 text-center lg:text-start">
            {t("block2.text1")}
            <span className="font-bold">{t("block2.bold1")}</span>
            {t("block2.text2")}
            <br />
            {t("block2.text3")}

            <ul className="grid grid-cols-2 gap-[6px] text-[12px] md:text-[14px] lg:text-[16px] mt-3 ml-10 list-disc text-start font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-[#000000]">
              <li>
                <Link
                  href="/Services/seo"
                  className="text-[#000000] hover:text-[#58b5cf] underline font-semibold"
                >
                  {t("block2.link_seo")}
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/sem"
                  className="text-[#000000] font-semibold hover:text-[#58b5cf] underline"
                >
                  {t("block2.link_sem")}
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/smm"
                  className="text-[#000000] hover:text-[#58b5cf] underline font-semibold"
                >
                  {t("block2.link_smm")}
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/pms"
                  className="text-[#000000] hover:text-[#58b5cf] underline font-semibold"
                >
                  {t("block2.link_pms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/callcenter"
                  className="text-[#000000] hover:text-[#58b5cf] underline font-semibold"
                >
                  {t("block2.link_callcenter")}
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/digitalAnalysis"
                  className="text-[#000000] hover:text-[#58b5cf] underline font-semibold"
                >
                  {t("block2.link_analysis")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 w-[98%] lg:w-[95%] lg:mb-20 ">
        <div className="flex flex-col items-center justify-start gap-2 lg:gap-[2px] lg:w-[50%] text-start">
          <button className="gradient-darktext-header relative flex border w-[90%] py-[12px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
            <h2>{t("block3.title")}</h2>
          </button>

          <div className="text-[12px] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[94%] lg:w-[80%] lg:ml-10 mt-0 lg:mt-6 text-center lg:text-start">
            {t("block3.intro")}
            <ul className=" grid grid-cols-2 text-[12px] md:text-[14px] lg:text-[16px] ml-4 list-disc text-start font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black mt-2">
              <li>{t("block3.li1")}</li>
              <li>{t("block3.li2")}</li>
              <li>{t("block3.li3")}</li>
              <li>{t("block3.li4")}</li>
            </ul>

            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[100%] mt-0 lg:mt-2">
              {t("block3.text1")}
              <br />
              {t("block3.text2")}
              <br />
              {t("block3.text3")}
              <span className="font-bold">{t("block3.bold1")}</span>
              {t("block3.text4")}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:justify-start gap-2 lg:gap-[32px] lg:w-[50%] text-start">
          <button className="gradient-darktext-header relative flex border w-[90%] py-[12px] px-auto items-center justify-center lg:px-[1px] lg:py-[24px] text-[20px] lg:text-[24px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px] text-black">
            <h2>{t("block4.title")}</h2>
          </button>

          <div className="text-[12px] md:text-[14px] lg:text-[16px] font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black w-[94%] lg:w-[80%] lg:ml-10 mt-0 text-center lg:text-start justify-center items-center lg:items-start lg:justify-start">
            {t("block4.text1")}
            <br />
            {t("block4.text2")}
            <span className="font-bold">{t("block4.bold1")}</span>
            {t("block4.text3")}

            <ul className="flex flex-col  text-[12px] md:text-[14px] lg:text-[16px] gap-[6px] list-disc  list-inside list-block ml-[50%] -translate-x-1/2 lg:-translate-x-0 lg:ml-4 text-start lg:text-start font-inter28 font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-black mt-2">
              <li>
                <Link
                  href="/Services/digitalAnalysis"
                  className="text-[#000000] hover:text-[#58b5cf] font-semibold underline "
                >
                  {t("block4.li1")}
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/sem"
                  className="text-[#000000] hover:text-[#58b5cf] font-semibold underline"
                >
                  {t("block4.li2")}
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/seo"
                  className="text-[#000000] hover:text-[#58b5cf] font-semibold underline"
                >
                  {t("block4.li3")}
                </Link>
              </li>
              <li>{t("block4.li4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H2Section;
