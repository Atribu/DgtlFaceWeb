"use client";
import React, { useEffect, useRef, useState } from "react";
import ServiceBlocks from "../serviceblocks/ServiceBlocks";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const Section3 = () => {
  const t = useTranslations("Homepage.ourservices")

    const bullets = Array.from({ length: 8 }, (_, i) =>
    t(`bullet${i + 1}`)
  );
  
  const [blocksOrder, setBlocksOrder] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(true);

  const servicesLink = [
    { href: "/Services/seo" },
    { href: "/Services/sem" },
    { href: "/Services/smm" },
    { href: "/Services/software" },
    { href: "/Services/creative" },
    { href: "/Services/callcenter"},
    { href: "/Services/pms" },
    { href: "/Services/digitalAnalysis" },
    { href: "/Services/hotel" },
 
  ];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "120px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      // setGradientIndex((prev) => (prev === 7 ? 0 : prev + 1));
      // set blocks order
      // after one full cyle stop the interval

      setBlocksOrder((prev) => {
        // if (prev[0] == 1) {
        //   clearInterval(interval);
        //   return prev;
        // }
        const newOrder = [...prev];
        newOrder.unshift(newOrder.pop());
        return newOrder;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [isInView]);

  const blockPositions = {
    0: "-translate-y-1/2 z-[5] translate-x-[43px]",
    1: "-translate-y-[calc(50%-80px)] z-[10] -translate-x-[18px]",
    2: "-translate-y-[calc(50%-160px)] z-[50] -translate-x-[82px]",
    3: "-translate-y-[calc(50%-80px)] z-[70] -translate-x-[146px]",
    4: "-translate-y-1/2 z-[80] -translate-x-[210px]",
    5: "-translate-y-[calc(50%+80px)] z-[60]  -translate-x-[146px]",
    6: "-translate-y-[calc(50%+160px)] z-[40] -translate-x-[82px]",
    7: "-translate-y-[calc(50%+80px)] z-[20]  -translate-x-[18px]",
  };

  return (
<div
  ref={sectionRef}
  className="flex flex-row w-[100%] h-auto max-h-[500px] justify-center items-center font-inter"
  style={{
    backgroundImage: `
      linear-gradient(
        to bottom,
        #ffffff 0%,
        #f2edf9 8%,
        #2a1a4f 25%,
        #1c153b 38%,
        #140C29 50%,
        #1c153b 68%,
        #2a1a4f 75%,
        #f2edf9 88%,
        #ffffff 100%
      )
    `,
  }}
>


      <div className="w-[95%] md:w-[89%] lg:w-[100%] relative flex flex-col-reverse lg:grid lg:grid-cols-2  bg-darkBlue  py-6 md:py-12 text-black lg:min-h-[680px] lg:px-0 lg:py-24 lg:bg-transparent items-center justify-center">
 
          {/* <BlocVertical /> */}
         <div className="hidden lg:flex -ml-[20%]">
         <ServiceBlocks    blocksOrder={blocksOrder} rotate={true} rotateDegree={0}
          blockPositions={blockPositions}/>
         </div>
       
        <div className="flex flex-col text-center items-center lg:text-start lg:items-start justify-center h-full lg:min-w-[600px] max-w-[800px] lg:-ml-20">
          <h2 className=" flex flex-row lg:flex-col gap-2 text-[18px] lg:text-[20px] leading-[120%]  font-semibold lg:leading-[57.60px] pb-1 -tracking-[0.48px]">
            
            <p className="bg-gradient-to-r from-[#54b9cf] to-[#a754cf] bg-clip-text text-transparent text-[22px] lg:text-[24px] font-semibold lg:leading-[57.60px] pb-1 -tracking-[0.48px] leading-[120%]">
              {t("services_title")}
            </p>
          </h2>

          <div className="flex flex-col gap-2 w-full">

             <p className="font-inter28 text-[12px] md:text-[14px] lg:text-[16px] text-white font-normal leading-[125%] lg:leading-[145%] -tracking-[0.20px] ">
            {t.rich("intro1", {
        strong: (chunks) => (
          <span className="font-bold">
            {chunks}
          </span>
        ),
      })}
    
    </p>

      <p className="font-inter28 text-[12px] md:text-[14px] lg:text-[16px] text-white font-normal leading-[125%] lg:leading-[145%] -tracking-[0.20px] ">
        {t("lead")}
      </p>

      {/* Liste */}
      <div className="flex flex-col lg:flex-row items-center">
        <ul className="w-[92%] lg:w-[70%] grid grid-cols-2 mt-1 md:mt-2 list-disc pl-4 text-start md:pl-6 space-y-1 md:space-y-1.5  font-inter28 text-[12px] md:text-[14px] lg:text-[16px] text-white font-normal leading-[125%] lg:leading-[145%] -tracking-[0.20px]">
        {bullets.map((item, idx) => (
          <Link prefetch={false} href={servicesLink[idx].href} key={idx} className="hover:underline z-[990]"><p >{item}</p></Link>
        ))}
      </ul>

         <Link prefetch={false} href="/Services" className="mt-3 gradient-border-button flex items-center w-[100px] lg:w-[114px] h-[36px] lg:h-[42px] justify-center font-inter leading-[16.8px] tracking-[-0.28px] text-[12px] lg:text-[14px] ">
             {t("services_button")}
          </Link>
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
              content: "";
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
