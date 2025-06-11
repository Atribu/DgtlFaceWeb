"use client";
import  Link  from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import React, { useCallback, useEffect, useState } from "react";
import ServicesCarouselWrapper from '@/app/components/serviceblocks/ServicesCarouselWrapper';


const Section3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start", loop:true,
  });

  const [status, setStatus] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleHoverStart = (index) => {
    // console.log("hover start");
    setStatus(index);
  };

  const handleHoverEnd = (index) => {
    // console.log("hover end");
    setStatus(false);
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    // console.log(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Add the select event listener
    emblaApi.on("select", onSelect);
    // Remove event listeners on cleanup
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const servicesData = [
    {
      id:1,
      title: "Creative Services",
      items: [
        "Graphic & Motion Graphic Design Services",
        "Videography & Production Services",
        "UI/UX Design Services",
      ],
      link:"/Services/creative"
    },
    {
      id:2,
      title: "Call Center Services",
      items: [
        "Call 4 Languages Services",
        "Reservation Support Service",
        "Multiple Channels Tracking Service",
      ],
       link:"/Services/callcenter"
    },
    {
      id:3,
      title: "Search Engine Optimization (SEO) Services",
      items: [
        "Call 4 Languages Services",
        "Reservation Support Service",
        "Multiple Channels Tracking Service",
      ],
       link:"/Services/seo"
    },
    {
      id:4,
      title: "Search Engine Marketing ( SEM ) Services",
      items: [
        "Call 4 Languages Services",
        "Reservation Support Service",
        "Multiple Channels Tracking Service",
      ],
       link:"/Services/sem"
    },

    {
      id:5,
      title: "Digital Marketing",
      items: [
        "SEO & Content Marketing",
        "Social Media Management",
        "PPC Advertising",
      ],
       link:"/Services/smm"
    },
    {
        id:6,
        title: "Creative Services",
        items: [
          "Graphic & Motion Graphic Design Services",
          "Videography & Production Services",
          "UI/UX Design Services",
        ],
         link:"/Services/creative"
      },
      {
        id:7,
        title: "Web Development",
        items: [
          "Frontend Development",
          "Backend Development",
          "Full Stack Development",
        ],
         link:"/Services/software"
      },
      {
        id:8,
        title: "Digital Marketing",
        items: [
          "SEO & Content Marketing",
          "Social Media Management",
          "PPC Advertising",
        ],
        link:"/Services/smm"
      },
      {
        id:9,
        title: "Information Technologies & Software Services",
        items: [
          "Website and Software Service",
          "Server Management Service",
          "PDPA Compliance Service",
        ],
        link:"/Services/software"
      },
  ];

  return (
    <div className="flex justify-end items-end w-screen">
      <div className='flex justify-start items-center overflow-x-hidden w-[98%] lg:w-[90%]' ref={emblaRef}>
      <div className='flex '>
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="flex flex-[0_0_80%] lg:flex-[0_0_28%] mr-[6px] lg:mr-[1%] h-[270px] lg:h-[300px] bg-[#140f25] max-w-[350px] lg:max-w-[700px] rounded-[22px] group shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] overflow-hidden p-4 lg:p-8 text-start relative"   onMouseEnter={() => setActiveIndex(index)} // Mouse üzerine gelindiğinde aktif index'i güncelle
            onMouseLeave={() => setActiveIndex(null)} // Mouse ayrıldığında aktif index'i sıfırla
          >
            <div className='flex flex-col mt-4 transition-all duration-500 group-hover:translate-y-[-10px] '>
              <div className="text-white text-[20px] lg:text-2xl font-bold mb-2 lg:mb-4 transition-opacity duration-500 group-hover:opacity-100 opacity-75">
                {service.title}
              </div>
              {service.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="justify-start text-white text-sm font-normal font-inter leading-tight mb-2 transition-opacity duration-500 group-hover:opacity-100 opacity-25"
                >
                  • {item}
                </div>
              ))}
              
            </div>

          <div className='absolute -right-4 -bottom-10 lg:-right-6 lg:-bottom-[75px]'>
          <ServicesCarouselWrapper selected={index} isActive={activeIndex === index}/>
          </div>

            {/* Explore Butonu */}
            <Link href={service.link}
              className="gradient-explore-button flex text-[12px] lg:text-[14px] text-white  w-[114px] h-[42px] justify-center items-center font-inter leading-[16.8px] tracking-[-0.28px] left-10 absolute bottom-[34px] transform opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              Explore
            </Link>

            {/* Stil */}
           
            
          </div>
          
        ))}
      </div>
    </div>
    </div>
  );
};

export default Section3;