import React from 'react';
import Image from "next/image";
import Block from "../Image/services.png";
import Gradyan from "../Image/gradyan.png";
import { useTranslations } from 'next-intl';

const Section1 = () => {
  const t = useTranslations('ServicesPage');
  return (
    <div className="w-full h-[55vh] min-h-[450px] lg:min-h-screen bg-[#140f25] flex flex-col md:flex-row items-center justify-center p-5 relative overflow-hidden">
      {/* Gradyan Resmi Eklendi */}
      <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden">
        <Image 
          src={Gradyan} 
          alt="Gradyan" 
          className="w-full"
          layout="responsive"
          width={1920} // Resmin orijinal genişliği
          height={200} // Resmin orijinal yüksekliği
        />
      </div>

      {/* Image Section */}
      <div className='flex w-[50%] h-auto md:w-1/2 items-center justify-center mt-[-20px] md:mt-[-80px] ml-8 md:ml-28 z-10'>
        <Image 
          src={Block} 
          alt="Background" 
          className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
      
      {/* Text Section */}
      <div className='flex flex-col w-full md:w-1/2 items-center justify-center md:items-start text-center md:text-start gap-5 mt-[-30px] md:mt-[-50px] pl-8 md:pl-12 z-10'>
        <h1 className="relative">
          <span className="text-white text-[24px] lg:text-[26px]  font-semibold font-inter28 capitalize leading-">{t("servicespage_s1_text1")}<br/></span>
          <span className="text-[#a754cf] text-[24px] lg:text-[26px] font-semibold font-inter28 capitalize leading-[140%]">{t("servicespage_s1_span1")}</span>
        </h1>
        <p className="hidden lg:flex w-full max-w-md md:max-w-lg text-white text-[12px] lg:text-[14px] font-normal font-['Inter'] leading-6 md:leading-[130%]">
          {t("servicespage_s1_text2")}
        </p>
        <button className="px-4 md:px-6 py-1 md:py-2 rounded-lg md:rounded-[14px] border-2 border-[#54b9cf] inline-flex justify-center items-center gap-2.5 text-white text-[12px] md:text-[14px] font-bold font-['Inter'] leading-[16.80px] hover:bg-[#54b9cf] transition duration-300">
          {t("servicespage_s1_button1")}
        </button>
      </div>
    </div>
  );
};

export default Section1;