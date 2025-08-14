import React from 'react';
import { useTranslations } from 'next-intl';

const Section2 = () => {
  const t = useTranslations('ServicesPage');
  return (
    <div className='flex flex-col justify-center items-center lg:mb-[36px]'>
       <div className='flex flex-col w-[90%] gap-[6px] lg:gap-5 items-start lg:items-center justify-center text-start lg:text-center '>
      <p className="text-[#140f25] text-[24px] lg:text-5xl font-bold font-inter leading-[130%] lg:leading-[57.60px] -tracking-[0.42px]">{t("servicespage_s2_header1")} <span className="text-[#a754cf] text-[24px] lg:text-5xl  font-bold font-['Inter'] leading-[130%] lg:leading-[57.60px] -tracking-[0.42px]">{t("servicespage_s2_span1")}</span> </p>
       <p className=" lg:w-[716px] text-[#140f25] text-[14px] lg:text-lg font-normal font-inter leading-8130%] lg:leading-[25.20px] -tracking-[0.42px]">{t("servicespage_s2_text1")}</p>
       </div>
    </div>
  );
};

export default Section2;