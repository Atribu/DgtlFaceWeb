import React from 'react'
import { useTranslations } from 'next-intl';

const AltSection = () => {
  const t = useTranslations("ContactPage");

  return (
    <div className='flex flex-col justify-center items-center w-screen lg:items-center lg:mt-32 lg:mb-12 my-[48px] lg:my-0'>
        <div className='w-[90%] flex flex-col items-start lg:items-center text-start justify-center gap-[6px] lg:gap-5'>
        <div className="relative text-start lg:text-center justify-start lg:justify-center text-[#140f25] text-[16px] lg:text-2xl font-medium font-inter leading-[120%] lg:leading-[28.80px] -tracking-[0.32px] w-[90%]">{t("contactpage_s2_text1")}</div>
        <div className="relative text-center justify-center"><span className="text-[#140f25] text-[24px] lg:text-[56px] font-semibold font-inter leading-[120%] lg:leading-[61.60px] -tracking-[0.48px]">{t("contactpage_s2_header1")} </span><span className="text-[#54b9cf] text-[24px] lg:text-[56px] font-semibold font-inter leading-[120%] lg:leading-[61.60px] -tracking-[0.48px]">{t("contactpage_s2_span1")}</span><span className="text-[#140f25] text-[24px] lg:text-[56px] font-semibold font-inter leading-[120%] lg:leading-[61.60px] -tracking-[0.48px]"> {t("contactpage_s2_header2")}<br/>{t("contactpage_s2_header3")}</span><span className="text-[#a754cf] text-[24px] lg:text-[56px] font-semibold font-inter leading-[120%] lg:leading-[61.60px] -tracking-[0.48px]">{t("contactpage_s2_span2")}</span></div>
        <div className="w-[90%] lg:w-[690px] relative text-start lg:text-center justify-start text-[#140f25] text-sm font-normal font-inter leading-[130%] lg:leading-tight -tracking-[0.42px]">{t("contactpage_s2_text2")}</div>
        </div>
    </div>
  )
}

export default AltSection