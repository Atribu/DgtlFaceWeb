import React from 'react';
import Office2 from "./Image/Office2.png";
import Office3 from "./Image/Ofiice3.png";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Section2 = () => {
    const t = useTranslations("AboutPage");
    
  return (
    <div className='flex flex-col items-center justify-center w-screen gap-[40px] lg:gap-[75px]'>
        {/* İlk Bölüm */}
        <div className="w-[90%] xl:w-[1200px] h-[403px] lg:h-[350px] rounded-[22px] bg-[#140F25]">
            <div
                className="w-full lg:max-w-[1200px] h-full lg:h-[390px] rounded-[22px] bg-cover bg-center bg-no-repeat items-end pb-8 justify-center lg:items-center lg:justify-start flex relative"
                style={{ backgroundImage: `url(${Office2.src})` }}
            >
                <div className="absolute inset-0 bg-darkBlue/50 z-[1] rounded-[22px]"></div>
              
                <div className="text-white text-center flex flex-col items-center lg:items-start justify-end lg:justify-center w-[90%] z-[20]"> 
                    <h2 className="text-[#FFF] text-justify font-inter text-[20px] lg:text-[32px] font-bold leading-[120%] ml-0 lg:ml-16 tracking-[-0.64px]">
                       {t("aboutpage_s2_header1")} <span className="bg-gradient-to-r from-[#54B9CF] via-[#547CCF] to-[#A754CF] bg-clip-text text-transparent"> {t("aboutpage_s2_span1")}</span>
                    </h2>
                    <p className="lg:w-[365px] text-[#FFF] text-start font-inter text-[14px] font-normal leading-[130%] lg:leading-[140%] tracking-[-0.28px] ml-0 lg:ml-16 mt-4"> 
                         {t("aboutpage_s2_text1")} 
                    </p>
                    <button className="mt-6 inline-flex ml-0 lg:ml-16  px-[32px] py-[16px] justify-center items-center gap-[10px] rounded-[22px] bg-[#FFF] shadow-[0px_0px_50px_0px_rgba(221,254,254,0.5),0px_0px_4px_0px_#FFF] h-[45px] w-[171px]"> 
                        <p className="text-black font-inter text-[18px] font-bold leading-[120%] tracking-[-0.36px] leading-trim">{t("aboutpage_s2_button1")}</p>
                    </button>
                </div>
            </div>
        </div>

        {/* İkinci Bölüm */}
        <div className='flex flex-row items-center justify-center gap-10 w-[90%] xl:w-[1200px]'>
            <div className="inline-flex text-center lg:text-start flex-col items-center lg:gap-[55px] lg:w-[60%]">
                <div className="w-full md:w-[440px] lg:w-full h-[290px] lg:h-auto flex flex-col gap-3 lg:gap-5 lg:mt-20 items-center justify-center lg:items-start lg:justify-start"> 
                    <div className="text-main-dark-blue lg:text-justify font-inter text-[20px] lg:text-[28px] font-bold leading-[120%] tracking-[-0.4px] lg:tracking-[-0.64px]">
                        {t("aboutpage_s2_header2")}  <span className="bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] bg-clip-text text-transparent"> {t("aboutpage_s2_span2")}</span> {t("aboutpage_s2_header3")}
                    </div>
                    <div className="text-main-dark-blue font-inter text-[14px] lg:text-[16px] font-normal leading-[130%] lg:leading-[140%] tracking-[-0.28px] lg:tracking-[-0.32px]">
                     {t("aboutpage_s2_text2")} 
                    </div>
                    <button className="flex px-8 w-[158px] whitespace-nowrap lg:w-[35%] py-4 justify-center items-center gap-[10px] rounded-[10px] border-2 mt-[6px] h-[42px] gradient-border-button " style={{ borderColor: "var(--1, #54B9CF)" }}>
                        <p className="text-main-dark-blue font-inter text-[14px] lg:text-[16px] font-bold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.36px] leading-trim !text-darkBlue"> {t("aboutpage_s2_button2")}</p>
                    </button>
                </div>
            </div>
            <div className='hidden lg:flex items-start justify-start'> 
                <Image src={Office3} alt='office3' className="rounded-[22px]" />
            </div>
        </div>
    </div>
  );
};

export default Section2;