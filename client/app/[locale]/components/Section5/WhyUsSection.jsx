"use client";
import React from 'react';
import Dgtlface from "./Images/dgtlfaceoffice.png";
import DgtlfaceImg2 from "./Images/ofis1.webp";
import DgtlfaceImg3 from "./Images/ofis2.webp";
import Image from 'next/image';
import RightArrowSvg from '../common/RightArrowSvg';
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from 'next-intl';

export default function WhyUsSection() {
   const t = useTranslations("Homepage.whyussection")
   
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });


  const cards = [
  {
    id: 1,
    titleKey: "whyUs_header1",
    descriptionKey: "whyUs_text1",
    bgColor: "bg-white",
    textColor: "text-[#140f25]",
    buttonColor: "text-[#140f25]",
    arrowColor: "#140F25",
    image: null,
  },
  {
    id: 3,
    titleKey: "whyUs_header3",
    descriptionKey: "whyUs_text3",
    bgColor: "bg-transparent",
    textColor: "text-white",
    buttonColor: "text-white",
    arrowColor: "#ffffff",
    image: Dgtlface,
  },
  {
    id: 2,
    titleKey: "whyUs_header2",
    descriptionKey: "whyUs_text2",
    bgColor: "bg-transparent",
    textColor: "text-white",
    buttonColor: "text-white",
    arrowColor: "#ffffff",
    image: Dgtlface,
  },
  {
    id: 4,
    titleKey: "whyUs_header4",
    descriptionKey: "whyUs_text4",
    bgColor: "bg-white",
    textColor: "text-[#140f25]",
    buttonColor: "text-[#140f25]",
    arrowColor: "#140F25",
    image: null,
  },
  {
    id: 5,
    titleKey: "whyUs_header5",
    descriptionKey: "whyUs_text5",
    bgColor: "bg-white",
    textColor: "text-[#140f25]",
    buttonColor: "text-[#140f25]",
    arrowColor: "#140F25",
    image: null,
  },
  {
    id: 6,
    titleKey: "whyUs_header6",
    descriptionKey: "whyUs_text6",
    bgColor: "bg-white",
    textColor: "text-[#140f25]",
    buttonColor: "text-[#140f25]",
    arrowColor: "#140F25",
    image: null,
  },
  {
    id: 7,
    titleKey: "whyUs_header7",
    descriptionKey: "whyUs_text7",
    bgColor: "bg-white",
    textColor: "text-[#140f25]",
    buttonColor: "text-[#140f25]",
    arrowColor: "#140F25",
    image: null,
  },
];

const renderRichDescription = (key) => {
  // Güvenli kullanım: rich parse patlarsa düz t'ye düş
  try {
    return t.rich(key, {
      b: (chunks) => <span className="font-bold">{chunks}</span>,
      ul: (chunks) => (
        <ul className="list-disc list-inside space-y-1 mt-2">
          {chunks}
        </ul>
      ),
      li: (chunks) => <li>{chunks}</li>,
      br: () => <br />,
    });
  } catch (e) {
    // Her ihtimale karşı, en azından düz metin gelsin
    return t(key);
  }
};
  
  return (
    <div className="flex flex-col gap-12 w-screen max-w-[1400px] items-center justify-center bg-[#ffffff] lg:py-[18px]">

      {/* MOBILE CAROUSEL */}
      <div className="flex lg:hidden flex-col gap-8 font-inter items-center justify-center w-full">
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-4 items-center ">
            {cards.map((card) => {
              const title = t(card.titleKey);

              return (
                <div
                  key={card.id}
                  className="flex-[0_0_100%] px-4 min-w-0" // ✅ her slide tam ekran genişliğinde
                >
                  <div
                    className={`
                      w-full max-w-[480px] mx-auto
                      px-5 py-2          // ✅ mobilde padding biraz küçültüldü
                      rounded-[22px]
                      shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)]
                      inline-flex flex-col items-center justify-center
                      text-center gap-3 relative bg-center bg-cover
                      ${card.bgColor}
                    `}
                    style={
                      card.image
                        ? {
                            background: `linear-gradient(
                              180deg,
                              rgba(20, 15, 37, 0.00) 0%,
                              rgba(20, 15, 37, 0.91) 38.9%,
                              #140F25 60.27%
                            ), url(${card.image.src}) center/cover no-repeat`,
                          }
                        : undefined
                    }
                  >
                    <h4
                      className={`
                        w-full
                        ${card.textColor}
                        text-[18px]
                        font-semibold font-inter
                        leading-[120%]
                      `}
                    >
                      {title}
                    </h4>

                    <div className="flex flex-col items-center justify-center gap-3">
                      <div
                        className={`
                          w-[94%] mx-auto
                          ${card.textColor}
                          text-[14px]
                          font-normal leading-snug font-inter28
                          text-justify
                        `}
                      >
                        {renderRichDescription(card.descriptionKey)}
                      </div>

                      <button
                        type="button"
                        className={`
                          mt-1
                          px-6 py-3
                          rounded-[14px]
                          border border-[#54b9cf]/70
                          inline-flex justify-center items-center gap-2.5
                          ${card.buttonColor}
                        `}
                      >
                        <RightArrowSvg
                          className="flex"
                          width={11}
                          height={10}
                          color={card.arrowColor}
                        />
                        <span className="text-[13px] font-semibold leading-[16.8px]">
                          {t("services_button")}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      <div className="hidden lg:flex flex-col lg:flex-row gap-2 xl:gap-12 font-inter items-center justify-center">
        <div className="flex flex-col gap-12 w-[90%] items-end">
          {/* Card: Innovative Solutions */}
          <div className="lg:w-[90%] w-full px-[3%] xl:px-[40px] py-12 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3">
            <h5 className="w-full xl:w-[502px] relative justify-start text-[#140f25] text-[18px]  font-semibold font-inter leading-[120%] lg:leading-[28.80px]">
              {t("whyUs_header1")}
            </h5>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <div
  className="
    lg:w-[100%] w-[94%] relative text-justify justify-start
    text-[#140f25] lg:text-[14px] text-[14px]
    font-normal lg:leading-snug font-inter28
  "
>
  {t.rich("whyUs_text1", {
    // kalın metin için
    b: (chunks) => <span className="font-bold">{chunks}</span>,

    // JSON'da <ul> ... </ul> kullanırsan
    ul: (chunks) => (
      <ul className="list-disc list-inside space-y-1 mt-2">
        {chunks}
      </ul>
    ),

    // JSON'da <li> ... </li> kullanırsan
    li: (chunks) => <li>{chunks}</li>,
  })}
</div>

          
            </div>
          </div>
          {/* Card: Expert Team */}
          <div className="lg:w-[90%] w-full lg:px-[40px] py-12 rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-start gap-3 overflow-hidden relative">
            {/* Arka plan resmi */}
            <Image 
              src={Dgtlface}
              alt="DGTLFACE: Dijital Pazarlama, Teknoloji ve Otel Dijital Dönüşüm Partneriniz"
              width={Dgtlface.width}
              height={Dgtlface.height}
              className="absolute inset-0 w-full h-full object-cover"
               loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#140f25]/0 via-[#140f25]/50 to-[#140f25]"></div>
            <h5 className="w-full lg:w-[100%] lg:h-[230px] relative justify-end text-white text-[18px] font-semibold  leading-[120%] lg:leading-[28.80px] -tracking-[0.4px]">
              {t("whyUs_header3")}
            </h5>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className="w-[94%] lg:w-[100%] relative text-justify justify-start text-white lg:text-[14px] font-normal lg:leading-snug text-[14px] font-inter28">
                {t("whyUs_text3")}
              </p>
           
            </div>
          </div>

          <div className="lg:w-[90%] w-full px-[3%] xl:px-[40px] py-12 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3">
            <h5 className="w-full xl:w-[502px] relative justify-start text-[#140f25] text-[18px] font-semibold font-inter leading-[120%] lg:leading-[28.80px]">
              {t("whyUs_header5")}
            </h5>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className="lg:w-[100%] w-[94%] relative text-justify justify-start text-[#140f25] lg:text-[14px] font-normal  lg:leading-snug text-[14px] font-inter28">
               {t("whyUs_text5")}
              </p>
            
            </div>
          </div>

           <div className="lg:w-[90%] w-full lg:px-[40px] px-[3%] py-12 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3">
            <h5 className="w-full xl:w-[502px] relative justify-start text-[#140f25] text-[18px] font-semibold font-inter leading-[120%] lg:leading-[28.80px]">
              {t("whyUs_header7")}
            </h5>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className="lg:w-[100%] w-[94%] relative text-justify justify-start text-[#140f25] lg:text-[14px] font-normal  lg:leading-snug text-[14px] font-inter28">
               {t("whyUs_text7")}
              </p>
            
            </div>
          </div>

        </div>
        <div className="flex flex-col gap-12 w-[90%]">
          {/* Card: Business Partner Oriented Approach */}
          <div className="lg:w-[90%] w-full  lg:px-[40px] py-12 rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-start gap-3 overflow-hidden relative">
            {/* Arka plan resmi */}
            <Image 
              src={DgtlfaceImg2}
              width={DgtlfaceImg2.width}
              height={DgtlfaceImg2.height}
              alt="DGTLFACE: Dijital Pazarlama, Teknoloji ve Otel Dijital Dönüşüm Partneriniz"
              className="absolute inset-0 w-full h-full object-cover"
               loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#140f25]/0 via-[#140f25]/50 to-[#140f25]"></div>
            {/* İçerikler */}
            <h5 className="w-full lg:w-[502px] lg:h-[252px] relative z-10 text-white text-[18px] font-semibold leading-[120%] lg:leading-[28.80px] -tracking-[0.4px]">
              {t("whyUs_header2")}
            </h5>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px] relative z-10">
              <p className="w-[94%] lg:w-[100%] relative text-justify text-white lg:text-[14px] font-normal  lg:leading-snug text-[14px] font-inter28">
               {t("whyUs_text2")}
              </p>
         
            </div>
          </div>
          {/* Card: Continuous Support and Counselling */}
          <div className="w-[100%] lg:w-[90%] lg:px-[40px] py-12 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col lg:justify-start lg:items-start justify-center items-center gap-3">
            <h5 className="w-full lg:w-[100%] relative  justify-center lg:justify-start text-[#140f25] text-[18px] font-semibold leading-[120%] lg:leading-[28.80px] -tracking-[0.4px]">
              {t("whyUs_header4")}
            </h5>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className="w-[94%] lg:w-[100%] relative text-justify justify-start text-[#140f25] lg:text-[14px] font-normal lg:leading-snug text-[14px] font-inter28">
                {t("whyUs_text4")}
              </p>
            
            </div>
          </div>

          <div className=" lg:w-[90%] w-full lg:px-[40px] py-12 rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-start gap-3 overflow-hidden relative">
            {/* Arka plan resmi */}
            <Image 
              src={DgtlfaceImg3}
              width={DgtlfaceImg3.width}
              height={DgtlfaceImg3.height}
              alt="DGTLFACE: Dijital Pazarlama, Teknoloji ve Otel Dijital Dönüşüm Partneriniz"
              className="absolute inset-0 w-full h-full object-cover"
               loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#140f25]/0 via-[#140f25]/50 to-[#140f25]"></div>
            {/* İçerikler */}
            <h5 className="w-full  lg:h-[252px] relative z-10 text-white text-[18px] font-semibold leading-[120%] lg:leading-[28.80px] -tracking-[0.4px]">
              {t("whyUs_header6")}
            </h5>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px] relative z-10">
              <p className="w-[94%] lg:w-[100%] relative text-justify text-white lg:text-[14px] font-normal font-['Inter'] lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%]">
               {t("whyUs_text6")}
              </p>
             
            </div>
          </div>
        </div>

        
      </div>  
    </div>
  );
}
