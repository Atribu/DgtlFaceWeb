"use client";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import ServicesCarouselWrapper from "@/app/[locale]/components/serviceblocks/ServicesCarouselWrapper";
import { useTranslations } from "next-intl";

const Section3 = () => {
  const t = useTranslations("Homepage.servicesData");
  const t2 = useTranslations("Homepage.ourservices");

  // 9 service kartını çeken mevcut data yapın
  const servicesData = Array.from({ length: 9 }, (_, i) => {
    const id = i + 1;
    return {
      title: t(`title${id}`),
      items: [1, 2, 3].map((j) => t(`item${id}_${j}`)),
      link: t(`link${id}`),
    };
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(servicesData.length);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Toplam slide sayısını al
    setSlideCount(emblaApi.scrollSnapList().length);

    // İlk seçimi set et
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSlideCount(emblaApi.scrollSnapList().length);
      onSelect();
    });

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="flex justify-end items-end w-screen">
      {/* embla viewport + kontrol barını saran relative container */}
      <div className="relative flex justify-start items-center w-[98%] lg:w-[90%]">
        {/* Embla viewport */}
        <div
          className="flex justify-start items-center overflow-x-hidden w-full"
          ref={emblaRef}
        >
          <div className="flex">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="flex flex-[0_0_80%] lg:flex-[0_0_45%] mr-[6px] lg:mr-[1%] h-[270px] lg:h-[290px] bg-[#140f25] max-w-[350px] lg:max-w-[900px] rounded-[22px] group shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] overflow-hidden p-4 lg:px-8 lg:py-3 text-start relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="flex flex-col mt-4 transition-all duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-white text-[16px] lg:text-[18px] font-bold mb-2 lg:mb-4 transition-opacity duration-500 group-hover:opacity-100 opacity-75">
                    {service.title}
                  </h3>
                  {service.items.map((item, itemIndex) => (
                    <p
                      key={itemIndex}
                      className="justify-start text-white text-sm font-normal font-inter leading-tight mb-2 transition-opacity duration-500 group-hover:opacity-100 opacity-25 w-[70%]"
                    >
                      {item}
                    </p>
                  ))}
                </div>

                {/* Sağ alttaki VBlock bileşeni */}
                <div className="absolute -right-4 -bottom-10 lg:-right-12 lg:-bottom-[75px]">
                  <ServicesCarouselWrapper
                    selected={index}
                    isActive={activeIndex === index}
                  />
                </div>

                {/* Explore Butonu */}
                <Link
                  href={service.link}
                  className="gradient-explore-button flex text-[12px] lg:text-[14px] text-white  w-[90px] h-[38px] justify-center items-center font-inter leading-[16.8px] tracking-[-0.28px] left-10 absolute bottom-[34px] transform opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  {t2("services_button")}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 🔽 Carousel index + yön tuşları (hemen dışına, sağ alta) */}
        {slideCount > 0 && (
          <div className="absolute right-2 -bottom-8 lg:right-4 lg:-bottom-12 flex items-center gap-2 text-white/70 text-xs lg:text-[18px]">
            <button
              type="button"
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full rounded-full border border-white/40 bg-[#140f25]/20 backdrop-blur-sm 
                 hover:border-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
               
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 5L9 12L15 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <span className="font-mono tracking-[0.2em] text-black">
              {String(selectedIndex + 1).padStart(2,)} /{" "}
              {String(slideCount).padStart(2,)}
            </span>

            <button
              type="button"
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#140f25] backdrop-blur-sm 
                 hover:border-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
                              <span className="pointer-events-none absolute inset-[-4px] -z-10 rounded-full btn-pulse-dual" />
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 5L15 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section3;
