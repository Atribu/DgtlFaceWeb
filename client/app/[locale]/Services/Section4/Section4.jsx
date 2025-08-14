"use client";
import React from 'react';
import LineSvg from '@/app/[locale]/components/subPageComponents/LineSvg';
import { useTranslations } from 'next-intl';

const Section4 = () => {
  const t = useTranslations('ServicesPage');
  // Kartlar için veri dizisi
  const valuesData = [
    { id: 1, title: "Quality", number: "01" },
    { id: 2, title: "Reliability", number: "02" },
    { id: 3, title: "Creativity", number: "03" },
    { id: 4, title: "Ambition", number: "04" },
  ];

  return (
    <div className='lg:mb-12  lg:mt-36 flex flex-col w-screen items-center justify-center'>
       <h3 className='text-[24px] lg:text-[48px] mb-[24px] lg:mb-[48px] text-darkBlue font-bold leading-[120%] -tracking-[0.48px] lg:-tracking-[0.96px]'> {t("servicespage_s4_header1")} <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>{t("servicespage_s4_span1")}</span></h3>
      <div className='grid grid-cols-2 lg:flex items-center justify-center gap-[24px] text-white w-[90%]'>
            <div className='flex bg-darkBlue  px-[20px] py-[10px] lg:px-[24px] lg:py-[24px] items-center justify-center text-center rounded-[22px] text-[15px] lg:text-[24px] font-bold leading-[150%] lg:leading-[120%] -tracking-[0.3px] lg:-tracking-[0.48px] gap-[10px] lg:gap-[22px]'>
                <p>{t("servicespage_s4_chip1_header")}</p>
               <LineSvg className="flex" width={3} height={27}/>
                <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>01</span>
            </div>
            <div className='flex bg-darkBlue  px-[20px] py-[10px] lg:px-[24px] lg:py-[24px] items-center justify-center text-center rounded-[22px] text-[15px] lg:text-[24px] font-bold leading-[150%] lg:leading-[120%] -tracking-[0.3px] lg:-tracking-[0.48px] gap-[10px] lg:gap-[22px]'>
                <p>{t("servicespage_s4_chip2_header")}</p>
                <LineSvg className="flex"  width={3} height={27}/>
                <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>02</span>
            </div>
            <div className='flex bg-darkBlue  px-[20px] py-[10px] lg:px-[24px] lg:py-[24px] items-center justify-center text-center rounded-[22px] text-[15px] lg:text-[24px] font-bold leading-[150%] lg:leading-[120%] -tracking-[0.3px] lg:-tracking-[0.48px] gap-[10px] lg:gap-[22px]'>
                <p>{t("servicespage_s4_chip3_header")}</p>
                <LineSvg className="flex"  width={3} height={27}/>
                <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>03</span>
            </div>
            <div className='flex bg-darkBlue px-[20px] py-[10px] lg:px-[24px] lg:py-[24px] items-center justify-center text-center rounded-[22px] text-[15px] lg:text-[24px] font-bold leading-[150%] lg:leading-[120%] -tracking-[0.3px] lg:-tracking-[0.48px] gap-[10px] lg:gap-[22px]'>
                <p>{t("servicespage_s4_chip4_header")}</p>
                <LineSvg className="flex"  width={3} height={27}/>
                <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>04</span>
            </div>
        </div>

      {/* Tuşu Kartların Altına Yerleştir */}
      <div className="flex justify-center mt-8">
        <button
          className="gradient-border-button w-[114px] h-[42px] justify-center font-inter leading-[16.8px] tracking-[-0.28px]"
        >
         {t("servicespage_s4_button_explore")}
        </button>
      </div>

      {/* Pricing Section */}
      <div className='flex flex-col items-center justify-center gap-5 mt-[67px] lg:mt-32 w-[90%]'>
        <div className="text-center justify-center text-[#140f25] text-[24px] lg:text-[56px] font-bold font-['Inter'] capitalize leading-[120%] lg:leading-[61.60px]"> {t("servicespage_s4_pricing_header")}</div>
        <div className="w-[86%] md:w-[448px] text-center justify-start text-[#140f25] text-sm font-normal font-['Inter'] leading-[130%] lg:leading-tight -tracking-[0.42px] lg:tracking-[0.28px]">{t("servicespage_s4_pricing_text")}</div>
      </div>

      {/* Tuşu En Alta Yerleştir */}
      <div className="flex justify-center mt-[18px] lg:mt-8">
        <button
          className="gradient-border-button w-[114px] h-[42px] justify-center font-inter leading-[16.8px] tracking-[-0.28px]"
        >
          {t("servicespage_s4_button_callnow")}
        </button>
      </div>

      {/* Stil */}
      <style jsx>{`
        .gradient-border-button {
          position: relative;
          padding: 3px 0px;
          font-size: 14px;
          font-weight: 700;
          background: transparent;
          color: black;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          z-index: 1;
          overflow: hidden;
        }
        .gradient-border-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          padding: 3px;
          background: linear-gradient(
            90deg,
            #a754cf,
            #54b9cf,
            #547dcf,
            #a754cf
          );
          background-size: 300%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: background-position 0.1s;
        }

        .gradient-border-button:hover::before {
          animation: moveBorder 3s linear infinite;
        }

        @keyframes moveBorder {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Section4;