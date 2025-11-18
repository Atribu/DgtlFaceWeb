import React from 'react'
import EmblaCarousel from './EmblaCarousel/EmblaCarousel'
import GooglePartner from "./EmblaCarousel/Images/GooglePartner.png"
import YandexPartner from "./EmblaCarousel/Images/YandexPartner.png"
import JollyTourPartner from "./EmblaCarousel/Images/JollyTourPartner.png"
import MetaBusinessPartner from "./EmblaCarousel/Images/MetaBusinessPartner.png"
import ConnexasePartner from "./EmblaCarousel/Images/ConnexeasePartner.png"
import ElektrawebPartner from "./EmblaCarousel/Images/ElektrawebPartner.png"
import { useTranslations } from 'next-intl';

const Partners = () => {
  const t = useTranslations("Homepage.partners")
  
  const slides = [
    GooglePartner,         
    YandexPartner,
    JollyTourPartner,
    MetaBusinessPartner,
    ConnexasePartner,
    ElektrawebPartner
  ]

  return (
    <div id='main' className="flex flex-col w-screen items-center justify-center overflow-x-hidden gap-[30px]">
      <div className="flex flex-col w-[90%] items-start lg:items-center text-start lg:text-center justify-center gap-1 lg:gap-5 text-darkBlue">
        <h2 className="font-inter28 text-[24px] lg:text-[24px] font-bold leading-[120%] lg:leading-[57.6px] -tracking-[0.48px]">
         {t("title")} 
        </h2>
      <div>
          <p className="font-inter28 text-[14px] lg:text-[16px] font-normal leading-[130%] lg:leading-[25.2px] -tracking-[0.28px]">
          {t("description")} 
        </p>
         <p className="font-inter28 text-[14px] lg:text-[16px] font-normal leading-[130%] lg:leading-[25.2px] -tracking-[0.28px]">
          {t("list_intro")} 
        </p>
      </div>
      </div>
      <div className="flex w-full  overflow-hidden lg:ml-[40%] items-start justify-center">
        <EmblaCarousel slides={slides}/>
      </div>
    </div>
  )
}

export default Partners
