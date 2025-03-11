"use client";

import React from 'react';

const Section3 = () => {
  const servicesData = [
    {
      title: "Creative Services",
      items: [
        "Graphic & Motion Graphic Design Services",
        "Videography & Production Services",
        "UI/UX Design Services",
      ],
    },
    {
      title: "Digital Marketing",
      items: [
        "SEO & Content Marketing",
        "Social Media Management",
        "PPC Advertising",
      ],
    },
    {
      title: "Web Development",
      items: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
      ],
    },
    {
        title: "Creative Services",
        items: [
          "Graphic & Motion Graphic Design Services",
          "Videography & Production Services",
          "UI/UX Design Services",
        ],
      },
      {
        title: "Digital Marketing",
        items: [
          "SEO & Content Marketing",
          "Social Media Management",
          "PPC Advertising",
        ],
      },
      {
        title: "Web Development",
        items: [
          "Frontend Development",
          "Backend Development",
          "Full Stack Development",
        ],
      },
  ];

  return (
    <div className='flex flex-wrap justify-center items-center min-h-screen w-full my-12'>
      <div className='flex flex-wrap justify-center gap-8 w-11/12'>
        {servicesData.map((service, index) => (
          <div
            key={index}
            data-property="Default"
            className="group w-[550px] h-[300px] bg-[#140f25] rounded-[22px] shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] overflow-hidden p-8 text-start relative"
          >
            <div className='flex flex-col mt-6 transition-all duration-500 group-hover:translate-y-[-10px]'>
              <div className="text-white text-2xl font-bold mb-4 transition-opacity duration-500 group-hover:opacity-100 opacity-75">
                {service.title}
              </div>
              {service.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="justify-start text-white text-sm font-normal font-['Inter'] leading-tight mb-2 transition-opacity duration-500 group-hover:opacity-100 opacity-25"
                >
                  • {item}
                </div>
              ))}
            </div>

            {/* Explore Butonu */}
            <button
              className="gradient-border-button w-[114px] h-[42px] justify-center font-inter leading-[16.8px] tracking-[-0.28px] absolute bottom-[-50px] left-16 transform -translate-x-1/2 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
            >
              Explore
            </button>

            {/* Stil */}
            <style jsx>{`
              .gradient-border-button {
                position: relative;
                padding: 3px 0px;
                font-size: 14px;
                font-weight: 700;
                background: transparent;
                color: #fff;
                border: none;
                border-radius: 14px;
                cursor: pointer;
                z-index: 1;
                overflow: hidden;
              }
              .gradient-border-button::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: inherit;
                padding: 3px;
                background: linear-gradient(
                  90deg,
                  #a754cf,
                  #54b9cf,
                  #547dcf,
                  #a754cf
                );
                background-size: 300%;
                -webkit-mask: linear-gradient(#fff 0 0) content-box,
                  linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                pointer-events: none;
                transition: background-position 0.1s;
              }

              .gradient-border-button:hover::before {
                animation: moveBorder 3s linear infinite;
              }

              @keyframes moveBorder {
                0% {
                  background-position: 0% 50%;
                }
                100% {
                  background-position: 100% 50%;
                }
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;