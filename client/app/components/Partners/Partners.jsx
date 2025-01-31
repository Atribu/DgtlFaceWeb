import React from 'react'
import EmblaCarousel from './EmblaCarousel/EmblaCarousel'
import GooglePartner from "./EmblaCarousel/Images/GooglePartner.png"
import YandexPartner from "./EmblaCarousel/Images/YandexPartner.png"
import JollyTourPartner from "./EmblaCarousel/Images/JollyTourPartner.png"
import MetaBusinessPartner from "./EmblaCarousel/Images/MetaBusinessPartner.png"
import ConnexasePartner from "./EmblaCarousel/Images/ConnexeasePartner.png"
import ElektrawebPartner from "./EmblaCarousel/Images/ElektrawebPartner.png"

const Partners = () => {
  // Dikkat: Bu import'lar nesne döndürüyor, "GooglePartner.src" gibi
  // Aşağıda 'slides' dizisine SIRF o "nesne"yi ekliyoruz
  const slides = [
    GooglePartner,         // { src: "...", width:..., height:... }
    YandexPartner,
    JollyTourPartner,
    MetaBusinessPartner,
    ConnexasePartner,
    ElektrawebPartner
  ]

  return (
    <div className="flex flex-col w-full mt-[5%] items-center justify-center overflow-x-hidden">
      <div className="flex flex-col w-screen items-center justify-center gap-5">
        <h2 className="font-inter28 text-[48px] font-bold leading-[57.6px] tracking-[-0.96px] text-center">
          Our Partners
        </h2>
        <p className="text-center font-inter28 text-[18px] font-normal leading-[25.2px]">
          DGTLFACE is proud to collaborate with industry leaders and innovators to provide 
          the best services and solutions. <br /> Our esteemed partners include:
        </p>
      </div>
      <div className="w-full mt-16">
        <EmblaCarousel slides={slides}/>
      </div>
    </div>
  )
}

export default Partners
