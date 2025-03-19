
"use client";
import React, {useCallback} from 'react';
import Partners from "../../components/Section4/SliderImage/Partner.jsx";
import useEmblaCarousel from "embla-carousel-react";

const Section3 = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


    const cardsData = [
        {
            id: 1,
            title: "Quality",
            number: "01",
            description: "In the world of digital marketing, DGTLFACE's quality principle is to carry out comprehensive & careful tasks with the highest quality teams & highest quality equipment. Quality is the most important the digital improvement.",
        },
        {
            id: 2,
            title: "Reliability",
            number: "02",
            description: "The avant garde initiatives adopted by DGTLFACE work to provide a reliable background. Trust and quality are two principles that support each other. Its principles and prepares a reliable digital world for our partners.",
        },
        {
            id: 3,
            title: "Creativity",
            number: "03",
            description: "Every member of the DGTLFACE has built their creative career on the principle that their work matters only if it is original and exciting; we are not interested in creating anything that is subpar, derivative, or dull.",
        },
        {
            id: 4,
            title: "Ambition",
            number: "04",
            description: "We are in the creative industry to push boundaries, discover new ways of and innovate at every stage of our process. If we are not constantly striving to surpass our previous work and motivating each other to improve.",
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center bg-[#FBFBFD] pt-[48px]'>
            <div className="flex text-center justify-center gap-[24px]">
            <h3 className='text-[24px] lg:text-[48px] text-darkBlue font-bold leading-[120%] -tracking-[0.48px] lg:-tracking-[0.96px]'> Dgtlface <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>Values</span></h3>
            </div>
            <div className='hidden lg:flex w-8/12 lg:flex-wrap justify-center gap-8 p-8 mb-[150px]'> {/* flex-wrap ve justify-center eklendi */}
                {cardsData.map((card) => (
                    <div key={card.id} className="p-12 bg-white rounded-3xl shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-center gap-4 w-[calc(50%-16px)]"> {/* w-[calc(50%-16px)] eklendi */}
                        <div className="lg:w-96 lg:h-9 relative">
                            <div className="left-0 top-0 absolute justify-center text-gray-900 text-[20px] lg:text-3xl font-bold font-inter leading-[120%] lg:leading-10">
                                {card.title}
                            </div>
                            <div className="w-0 h-7 left-[215px] top-[5.50px] absolute outline outline-2 outline-offset-[-1px] outline-black/20" />
                            <div className="left-[350px] top-0 absolute text-center justify-start text-[24px] lg:text-3xl font-bold font-inter leading-10 bg-gradient-to-r from-[#A754CF] to-[#54B9CF] bg-clip-text text-transparent">
                                {card.number}
                            </div>
                        </div>
                        <div className="w-[90%] lg:w-96 text-justify justify-start text-gray-900 text-[24px] lg:text-base font-normal font-inter leading-snug">
                            {card.description}
                        </div>
                    </div>
                ))}
            </div>

             {/* Mobil ve tablet için Embla Carousel */}
      <div className="lg:hidden w-full overflow-hidden mb-[48px]" ref={emblaRef}>
        <div className="flex">
          {cardsData.map((card, index) => (
            <div key={index} className="flex-[0_0_85%] min-w-0 mx-1 pl-0 lg:pl-4 h-auto">
              <div
                className={`w-[100%] mx-auto lg:px-[59px] py-12 rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col items-center justify-center lg:justify-start lg:items-start text-center lg:text-start gap-3 relative bg-center bg-cover `} >   
                <div className='flex items-center justify-between w-[90%]'>
                <h4 className="font-bold justify-center text-gray-900 text-[20px] lg:text-3xl font-inter leading-[120%] lg:leading-10">
                  {card.title}
                </h4>
                <div className="text-center justify-start text-[24px] lg:text-3xl font-bold font-inter leading-10 bg-gradient-to-r from-[#A754CF] to-[#54B9CF] bg-clip-text text-transparent">
                                {card.number}
                            </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start gap-[12px] lg:gap-[18px] w-[90%]">
                  <p className={`lg:w-[502px] w-[94%] relative text-justify justify-start ${card.textColor} lg:text-base font-normal lg:leading-snug text-[14px] -tracking-[0.28px] leading-[130%]`}>
                    {card.description}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

            <div className="flex flex-col w-[92%] xl:w-[1076px] h-[340px] lg:h-[500px] items-center justify-center rounded-3xl bg-[#140f25] lg:p-8 mb-12">
                <div className="flex flex-col items-center justify-center text-center lg:max-w-2xl h-[90%] gap-[18px]">
                <div className="text-center justify-center whitespace-nowrap text-white lg:mt-7"><span className="text-Main-White text-[24px] lg:text-5xl font-bold font-inter leading-[120%] lg:leading-[57.60px] -tracking-[0.48px]">Let's Forge Success </span><span className="text-blue-400 text-[24px] lg:text-5xl font-bold font-inter leading-[120%] lg:leading-[57.60px] -tracking-[0.48px]">Together</span></div>
                <div className="w-[90%] md:w-[597px] text-center justify-center text-Main-White text-sm font-normal font-inter leading-[130%] lg:leading-tight mt-0 lg:mt-5 lg:ml-12 text-white">We are ready to take the first steps in the next creative endeavour. All that separates this moment from the beginning of our collaborative journey is just a tap of the button below.</div>
                  <button className="px-8 py-3 bg-Main-White rounded-3xl bg-white  shadow-[0px_0px_50px_0px_rgba(221,254,254,0.50)] inline-flex justify-center items-center lg:mt-44">
                      <p className="justify-start text-Main-Dark-Blue text-lg font-bold font-inter leading-snug ">Get in Touch</p>
                  </button>
                </div>
            </div>
              <div className="w-full h-[250px] lg:mt-24"> {/* Burada width ve height değerlerini istediğin gibi ayarla */}
                <div className="text-center justify-center text-Main-Dark-Blue text-[24px] lg:text-5xl font-bold font-inter leading-[120%] lg:leading-[57.60px] -tracking-[0.48px]">Our Collaborators</div>
                <div className="text-center justify-center text-Main-Dark-Blue text-[14px] lg:text-lg font-normal font-inter leading-[130%] lg:leading-relaxed mb-8 -tracking-[0.28px]">How can we help you?</div>
                <Partners />
              </div>
        </div>
    );
};

export default Section3;