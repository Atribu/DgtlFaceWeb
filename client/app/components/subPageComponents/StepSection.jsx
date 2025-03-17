"use client"
import React, { useCallback, useEffect, useState } from "react";
import ServicesCarouselWrapper from '../serviceblocks/ServicesCarouselWrapper'

const StepSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const [status, setStatus] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const servicesData = [
        {
          id:1,
          title: "Graphic & Motion Graphic",
          subTitle:"Design Service",
          features: [
            "Logo Design",
            "Brand Guidelines",
            "Social Media Graphics",
            "Creating and Editing Motionography",
          ],
        },
        {
          id:2,
          title: "UI / UX",
           subTitle:"Design Service",
           features: [
            "Logo Design",
            "Brand Guidelines",
            "Social Media Graphics",
            "Creating and Editing Motionography",
          ],
        },
        {
          id:3,
          title: "Video & Production",
           subTitle:"Design Service",
           features: [
            "Logo Design",
            "Brand Guidelines",
            "Social Media Graphics",
            "Creating and Editing Motionography",
          ],
        },
        {
          id:4,
          title: "Event Production",
           subTitle:"Design Service",
           features: [
            "Logo Design",
            "Brand Guidelines",
            "Social Media Graphics",
            "Creating and Editing Motionography",
          ],
        },
    
        {
          id:5,
          title: "Corporate Gift",
          subTitle:"Design Service",
          features: [
            "Logo Design",
            "Brand Guidelines",
            "Social Media Graphics",
            "Creating and Editing Motionography",
          ],
        },
       
         
      ];

  return (
    <div className='flex w-screen h-auto items-center justify-center'>
      <div className='flex flex-col items-center justify-center w-[65%] gap-[34px] lg:gap-[68px] font-inter'>
        <div className='flex flex-col items-center justify-center text-center w-[70%] gap-[16px] text-[#140F25] '>
            <h2 className='text-[48px] font-bold leading-[120%] -tracking-[0.96px] text-[#140F25] w-[55%]'>Creativity & Beyond
            of <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>Design</span></h2>
            <p className='text-[18px] font-normal leading-[140%] w-[68%]'>Every pixel, every word has been meticulously woven into a perfect texture. Join the innovation symphony where dreams turn into design. Your vision, our craft.</p>
        </div>


        <div className="grid grid-cols-2 gap-[32px]">
      {servicesData.map((card,index) => (
        <div
          key={card.id}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          data-property-1="Default"
          className="w-[550px] h-72 relative bg-[#130b29] rounded-3xl shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] overflow-hidden text-white"
        >
          <div className="w-[582px] h-80 opacity-50 bg-[radial-gradient(ellipse_10.32%_6.01%_at_75.86%_80.09%,_#54B9CF_0%,_#547CCF_50%,_rgba(20,_12,_41,_0)_100%)]" />
          <div className="w-[600px] h-48 left-[-4px] top-[114px] absolute bg-gradient-to-b from-gray-900/0 to-gray-900" />
          <img
            className="w-[619px] h-80 left-[-4px] top-[-9px] absolute mix-blend-overlay"
            alt="background overlay"
          />
          <div className="px-8 py-4 left-[50px] top-[306px] absolute rounded-2xl outline outline-2 outline-offset-[-2px] outline-blue-400 inline-flex justify-center items-center gap-2.5">
            <div className="text-white text-sm font-bold font-['Inter'] leading-none">
              Explore
            </div>
          </div>
          <div className="left-[29px] top-[89px] absolute text-Main-White text-8xl font-bold font-['Inter'] leading-[120px] [text-shadow:_0px_0px_100px_rgb(221_254_254_/_0.50)]">
            {card.number}
          </div>
          <div className="left-[173px] top-[117px] absolute text-Main-White text-2xl font-bold font-['Inter'] leading-loose [text-shadow:_0px_0px_100px_rgb(221_254_254_/_0.50)]">
            {card.title}
          </div>
          <div className="left-[173px] top-[157px] absolute text-Main-White text-xl font-bold font-['Inter'] leading-normal [text-shadow:_0px_0px_100px_rgb(221_254_254_/_0.50)]">
            {card.subTitle}
          </div>
          <div className="left-[29px] top-[330px] absolute opacity-25 inline-flex flex-col gap-2">
            {card.features.map((feature, idx) => (
              <div
                key={idx}
                className="text-Main-White text-[10px] font-normal font-['Inter'] leading-3"
              >
                {feature}
              </div>
            ))}
          </div>
          <div className="absolute -right-4 -bottom-10 lg:-right-6 lg:-bottom-[75px]">
            <ServicesCarouselWrapper
              selected={index}
              isActive={activeIndex === index}
            />
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  )
}

export default StepSection
