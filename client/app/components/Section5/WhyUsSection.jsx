"use client";
import React, {useCallback} from 'react';
import Dgtlface from "../Section5/Images/dgtlfaceoffice.png";
import Image from 'next/image';
import RightArrowSvg from '../common/RightArrowSvg';
import useEmblaCarousel from "embla-carousel-react";

export default function WhyUsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Kartların içeriği
  // Kartların içeriği
  const cards = [
    {
      title: "Innovative Solutions",
      description:
        "At DGTLFACE, we offer innovative and customized solutions in the ever-changing world of technology. By deeply understanding our clients' unique needs, we develop digital solutions that give them a competitive edge. Utilizing the latest technologies like artificial intelligence, machine learning, and cloud computing, we optimize business processes and boost efficiency.",
      bgColor: "bg-white", // Beyaz arka plan
      textColor: "text-[#140f25]", // Koyu metin rengi
      buttonColor: "text-[#140f25]", // Koyu buton rengi
      arrowColor: "#140F25", // Koyu ok rengi
      image: null, // Resim yok
    },
    {
      title: "Expert Team",
      description:
        "Our team, comprised of experts and experienced professionals, is the key to achieving success in your projects. The DGTLFACE team consists of individuals with profound knowledge and experience in their respective fields. We apply innovative technologies to your projects without compromising on quality and excellence.",
      bgColor: "bg-transparent", // Gradient arka plan
      textColor: "text-white", // Beyaz metin rengi
      buttonColor: "text-white", // Beyaz buton rengi
      arrowColor: "#ffffff", // Beyaz ok rengi
      image: Dgtlface, // Arka plan resmi
    },
    {
      title: "Business Partner Oriented Approach",
      description:
        "DGTLFACE puts your satisfaction above all else and treats each project as unique and special. As DGTLFACE, we aim to establish long-term relationships with your customers. We listen to your needs, understand your expectations and inform you at every step. We build trust by prioritising transparency in our project processes.",
      bgColor: "bg-transparent", // Gradient arka plan
      textColor: "text-white", // Beyaz metin rengi
      buttonColor: "text-white", // Beyaz buton rengi
      arrowColor: "#ffffff", // Beyaz ok rengi
      image: Dgtlface, // Arka plan resmi
    },
    {
      title: "Continuous Support and Counselling",
      description:
        "As your technology partner, we are with you at every stage of the project. Even after project delivery, we ensure that your business runs smoothly by providing continuous support and consultancy services. With DGTLFACE, you can closely follow technological developments and continuously improve your business.",
      bgColor: "bg-white", // Beyaz arka plan
      textColor: "text-[#140f25]", // Koyu metin rengi
      buttonColor: "text-[#140f25]", // Koyu buton rengi
      arrowColor: "#140F25", // Koyu ok rengi
      image: null, // Resim yok
    },
  ];
  
  return (
    <div className="flex flex-col gap-12 w-screen items-center justify-center bg-[#F4F4F4] py-[18px]">
      <div>
        <div className="xl:w-[1264px] w-[90%] px-0 lg:px-12 pt-[18px] lg:pt-7 pb-12 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-center gap-3.5">
          <h3 className="relative text-center justify-start text-[#140f25] text-[24px] lg:text-5xl font-bold font-inter leaidng-[120%] lg:leading-[57.60px] -tracking-[0.48px]">
            Why Us?
          </h3>
          <p className="lg:w-[718px] w-[94%] relative text-center justify-start text-[#140f25] text-[14px] lg:text-base font-normal font-inter leading-[130%] lg:leading-snug -tracking-[0.28px]">
            We create a complex mosaic of carefully designed strategies to develop a harmonious relationship between the brand and its customer base, ensuring that a symphony of satisfaction resonates in the digital environment. A digital marketing agency targeting customer satisfaction, we offer an in-depth solution to the delicate rhythm between return on sales and increasing sales conversion.
          </p>
        </div>
      </div>

      <div className="flex lg:hidden flex-col lg:flex-row gap-12 font-inter items-center justify-center">
      {/* Desktop için mevcut yapı */}
      <div className="hidden lg:flex flex-col gap-12 w-[90%]">
        {/* Kartlar burada */}
      </div>

      {/* Mobil ve tablet için Embla Carousel */}
      <div className="lg:hidden w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cards.map((card, index) => (
            <div key={index} className="flex-[0_0_60%] min-w-0 mx-1 pl-0 lg:pl-4 h-auto">
              <div
                className={`w-[100%] mx-auto lg:px-[59px] py-12 rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3 relative bg-center bg-cover ${card.bgColor}`}  style={
                  card.image
                    ? {
                        background: `linear-gradient(180deg, rgba(20, 15, 37, 0.00) 0%, rgba(20, 15, 37, 0.91) 38.9%, #140F25 60.27%), url(${card.image.src}) lightgray 50% / cover no-repeat`,
                      }
                    : undefined
                }
              >
                
                <h4 className={`w-full lg:w-[502px] relative justify-start ${card.textColor} text-[20px] text-xl lg:text-2xl font-bold font-inter leading-[120%] lg:leading-[28.80px]`}>
                  {card.title}
                </h4>
                <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
                  <p className={`lg:w-[502px] w-[94%] relative text-justify justify-start ${card.textColor} lg:text-base font-normal lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%]`}>
                    {card.description}
                  </p>
                  <button
                    type="button"
                    className={`px-8 py-4 rounded-[14px] lg:border-2 lg:border-[#54b9cf] inline-flex justify-center items-center gap-2.5 ${card.buttonColor}`}
                  >
                    <RightArrowSvg
                      className="flex lg:hidden"
                      width={11}
                      height={10}
                      color={card.arrowColor}
                    />
                    <span className="relative text-sm font-bold leading-[16.80px]">
                      Explore
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>


      <div className="hidden lg:flex flex-col lg:flex-row gap-12 font-inter items-center justify-center">
        <div className="flex flex-col gap-12 w-[90%]">
          {/* Card: Innovative Solutions */}
          <div className="w-[100%] lg:px-[59px] py-12 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3">
            <h4 className="w-full lg:w-[502px] relative justify-start text-[#140f25] text-[20px] text-2xl font-bold font-inter leading-[120%] lg:leading-[28.80px]">
              Innovative Solutions
            </h4>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className="lg:w-[502px] w-[94%] relative text-justify justify-start text-[#140f25] lg:text-base font-normal  lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%] ">
                At DGTLFACE, we offer innovative and customized solutions in the ever-changing world of technology. By deeply understanding our clients' unique needs, we develop digital solutions that give them a competitive edge. Utilizing the latest technologies like artificial intelligence, machine learning, and cloud computing, we optimize business processes and boost efficiency.
              </p>
              <button
                type="button"
                className="px-8 py-4 rounded-[14px] lg:border-2 lg:border-[#54b9cf] inline-flex justify-center items-center gap-2.5"
              >
                <RightArrowSvg className="flex lg:hidden" width={11} height={10} color="#140F25"/>
                <span className="relative text-[#140f25] text-[14px] lg:text-sm font-bold leading-[120%] lg:leading-[16.80px] -tracking-[0.28px]">
                  Explore
                </span>
              </button>
            </div>
          </div>
          {/* Card: Expert Team */}
          <div className="w-[100%] lg:w-full lg:px-[59px] py-12 rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-start gap-3 overflow-hidden relative">
            {/* Arka plan resmi */}
            <Image 
              src={Dgtlface}
              alt="Background"
              width={Dgtlface.width}
              height={Dgtlface.height}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#140f25]/0 via-[#140f25]/90 to-[#140f25]"></div>
            <div className="w-full lg:w-[502px] lg:h-[230px] relative justify-end text-white text-[20px] lg:text-2xl font-bold  leading-[120%] lg:leading-[28.80px] -tracking-[0.4px]">
              Expert Team
            </div>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className="w-[94%] lg:w-[502px] relative text-justify justify-start text-white lg:text-base font-normal lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%]">
                Our team, comprised of experts and experienced professionals, is the key to achieving success in your projects. The DGTLFACE team consists of individuals with profound knowledge and experience in their respective fields. We apply innovative technologies to your projects without compromising on quality and excellence.
              </p>
              <button
                type="button"
                className="px-8 py-4 rounded-[14px] lg:border-2 lg:border-[#54b9cf] inline-flex justify-center items-center gap-2.5 relative z-10"
              >
                    <RightArrowSvg className="flex lg:hidden" width={11} height={10} color="#ffffff"/>
                <span className="relative text-white text-sm font-bold font-['Inter'] leading-[16.80px]">
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 w-[90%]">
          {/* Card: Business Partner Oriented Approach */}
          <div className="w-[100%] lg:w-full lg:px-[59px] py-12 rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-start gap-3 overflow-hidden relative">
            {/* Arka plan resmi */}
            <Image 
              src={Dgtlface}
              width={Dgtlface.width}
              height={Dgtlface.height}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#140f25]/0 via-[#140f25]/90 to-[#140f25]"></div>
            {/* İçerikler */}
            <div className="w-full lg:w-[502px] lg:h-[252px] relative z-10 text-white text-[20px] lg:text-2xl font-bold leading-[120%] lg:leading-[28.80px] -tracking-[0.4px]">
              Business Partner Oriented Approach
            </div>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px] relative z-10">
              <p className="w-[94%] lg:w-[502px] relative text-justify text-white lg:text-base font-normal font-['Inter'] lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%]">
                DGTLFACE puts your satisfaction above all else and treats each project as unique and special. As DGTLFACE, we aim to establish long-term relationships with your customers. We listen to your needs, understand your expectations and inform you at every step. We build trust by prioritising transparency in our project processes.
              </p>
              <button
                type="button"
                className="px-8 py-4 rounded-[14px] lg:border-2 lg:border-[#54b9cf] inline-flex justify-center items-center gap-2.5 relative z-10"
              >
                    <RightArrowSvg className="flex lg:hidden" width={11} height={10} color="#ffffff"/>
                <span className="relative text-white text-sm font-bold font-['Inter'] leading-[16.80px]">
                  Explore
                </span>
              </button>
            </div>
          </div>
          {/* Card: Continuous Support and Counselling */}
          <div className="w-[100%] lg:px-[59px] py-12 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col lg:justify-start lg:items-start justify-center items-center gap-3">
            <div className="w-full lg:w-[502px] relative  justify-center lg:justify-start text-[#140f25] lg:text-2xl font-bold text-[20px] leading-[120%] lg:leading-[28.80px] -tracking-[0.4px]">
              Continuous Support and Counselling
            </div>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px]">
              <p className="w-[94%] lg:w-[502px] relative text-justify justify-start text-[#140f25] lg:text-base font-normal lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%]">
                As your technology partner, we are with you at every stage of the project. Even after project delivery, we ensure that your business runs smoothly by providing continuous support and consultancy services. With DGTLFACE, you can closely follow technological developments and continuously improve your business.
              </p>
              <button
                type="button"
                className="px-8 py-4 rounded-[14px] lg:border-2 lg:border-[#54b9cf] inline-flex justify-center items-center gap-2.5"
              >
                    <RightArrowSvg className="flex lg:hidden" width={11} height={10} color="#140F25"/>
                <span className="relative text-[#140f25] text-sm font-bold font-['Inter'] leading-[16.80px]">
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
