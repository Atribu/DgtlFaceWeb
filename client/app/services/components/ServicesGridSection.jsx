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

const serviceItems = [
  { icon: CreativeSvg, width: 35, height: 25, link:"/services/creative",title:"Creative" },
  { icon: CallCenterSvg, width: 33, height: 33,link:"/services/callcenter",title:"Call Center" },
  { icon: PmsSvg, width: 31, height: 33, link:"/services/pms",title:"PMS & OTA" },
  { icon: SeoSvg, width: 31, height: 33, link:"/services/seo",title:"SEO" },
  { icon: SemSvg, width: 33, height: 33 ,link:"/services/sem",title:"SEM" },
  { icon: SmmSvg, width: 33, height: 33 , link:"/services/smm",title:"SMM"},
  { icon: ItSvg, width: 31, height: 33, link:"/services/software",title:"IT & Software" },
  { icon: AnalysisSvg, width: 35, height: 33, link:"/services/digitalAnalysis",title:"Analysis" },
];

const ServicesGridSection = () => {
  return (
    <div className='flex md:hidden w-screen font-inter items-center justify-center'>
      <div className='grid grid-cols-2 w-[94%] items-center justify-center gap-[10px]'>
        {serviceItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
            href={item.link} 
              key={index} 
              className='flex !bg-[#140015] border text-white p-[15px] gap-[15px] items-center justify-center rounded-[10px] gradient-border-button'
            >
              <Icon className="flex" width={item.width} height={item.height} />
              <div className='w-[60%] flex flex-col gap-[5px] items-start justify-center text-start'>
                <p className='text-[15px] font-bold leading-[150%] -tracking-[0.3px] whitespace-nowrap'>{item.title}</p>
                <span className='text-[13px] font-bold leading-[130%] -tracking-[0.26px] bg-gradient-to-r from-[#54B9CF] via-[#547CCF] to-[#A754CF] bg-clip-text text-transparent'>
                  Services
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
