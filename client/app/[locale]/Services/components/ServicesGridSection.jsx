import React from 'react'
import CreativeSvg from './CreativeSvg'
import CallCenterSvg from './CallCenterSvg'
import PmsSvg from './PmsSvg'
import SeoSvg from './SeoSvg'
import SemSvg from './SemSvg'
import SmmSvg from './SmmSvg'
import ItSvg from './ItSvg'
import AnalysisSvg from './AnalysisSvg'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

const ServicesGridSection = () => {
   const t = useTranslations('ServicesPage');


const serviceItems = [
  { icon: CreativeSvg, width: 35, height: 25, link:"/Services/creative",title:t("servicespage_s3_item1_title") },
  { icon: CallCenterSvg, width: 33, height: 33,link:"/Services/callcenter",title:t("servicespage_s3_item2_title") },
  { icon: PmsSvg, width: 31, height: 33, link:"/Services/pms",title:t("servicespage_s3_item3_title") },
  { icon: SeoSvg, width: 31, height: 33, link:"/Services/seo",title:t("servicespage_s3_item4_title") },
  { icon: SemSvg, width: 33, height: 33 ,link:"/Services/sem",title:t("servicespage_s3_item5_title") },
  { icon: SmmSvg, width: 33, height: 33 , link:"/Services/smm",title:t("servicespage_s3_item6_title")},
  { icon: ItSvg, width: 31, height: 33, link:"/Services/software",title:t("servicespage_s3_item7_title") },
  { icon: AnalysisSvg, width: 35, height: 33, link:"/Services/digitalAnalysis",title:t("servicespage_s3_item8_title") },
];
   
  return (
    <div className='flex md:hidden w-screen font-inter items-center justify-center'>
      <div className='grid grid-cols-2 w-[98%] items-center justify-center gap-[10px]'>
        {serviceItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
            href={item.link} 
              key={index} 
              className='flex !bg-[#140015] border text-white py-[15px]  w-full items-center gap-2 justify-start rounded-[10px] gradient-border-button'
            >
              <Icon className="flex ml-[10px]" width={25} height={25} />
              <div className='w-[60%] flex flex-col gap-[5px] items-start justify-center text-start'>
                <p className='text-[12px] font-bold leading-[150%] -tracking-[0.3px] whitespace-nowrap'>{item.title}</p>
                <span className='text-[13px] font-bold leading-[130%] -tracking-[0.26px] bg-gradient-to-r from-[#54B9CF] via-[#547CCF] to-[#A754CF] bg-clip-text text-transparent'>
                  {t("servicespage_s3_span1")}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default ServicesGridSection;
