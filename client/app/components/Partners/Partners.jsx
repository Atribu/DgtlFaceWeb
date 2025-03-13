import React from 'react'
import EmblaCarousel from './EmblaCarousel/EmblaCarousel'
import GooglePartner from "./EmblaCarousel/Images/GooglePartner.png"
import YandexPartner from "./EmblaCarousel/Images/YandexPartner.png"
import JollyTourPartner from "./EmblaCarousel/Images/JollyTourPartner.png"
import MetaBusinessPartner from "./EmblaCarousel/Images/MetaBusinessPartner.png"
import ConnexasePartner from "./EmblaCarousel/Images/ConnexeasePartner.png"
import ElektrawebPartner from "./EmblaCarousel/Images/ElektrawebPartner.png"

const Partners = () => {
  
  const slides = [
    GooglePartner,         
    YandexPartner,
    JollyTourPartner,
    MetaBusinessPartner,
    ConnexasePartner,
    ElektrawebPartner
  ]

  return (
    <div className="flex flex-col w-screen mt-[5%] items-center justify-center overflow-x-hidden">
      <div className="flex flex-col w-[90%] items-start lg:items-center text-start lg:text-center justify-center gap-1 lg:gap-5 text-darkBlue">
        <h2 className="font-inter28 text-[24px] lg:text-[48px] font-bold leading-[120%] lg:leading-[57.6px] -tracking-[0.48px]">
          Our Partners 
        </h2>
        <p className="font-inter28 text-[14px] lg:text-[18px] font-normal leading-[130%] lg:leading-[25.2px] -tracking-[0.28px]">
          DGTLFACE is proud to collaborate with industry leaders and innovators to provide 
          the best services and solutions. <br /> Our esteemed partners include:
        </p>
      </div>
      <div className="flex w-full h-[30vh] overflow-hidden ml-[40%] items-center justify-center">
        <EmblaCarousel slides={slides}/>
      </div>
    </div>
  )
}

export default Partners
