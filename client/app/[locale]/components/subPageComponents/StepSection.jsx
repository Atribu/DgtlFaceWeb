"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ServicesCarouselWrapper from "../serviceblocks/ServicesCarouselWrapper";
import Link from "next/link";
import { useTranslations } from "next-intl";

const StepSection = ({ header, header2, text, servicesData = [], buttonText, page }) => {
  // Embla setup - smooth scroll için optimize edilmiş ayarlar
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
    duration: 20, // Daha hızlı animasyon
    skipSnaps: false,
    inViewThreshold: 0, // Snap hassasiyeti
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onReInit = () => {
      setSlideCount(emblaApi.scrollSnapList().length);
      onSelect();
    };

    setSlideCount(emblaApi.scrollSnapList().length);
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const t =useTranslations(`${page}`)

  return (
    <div className="flex w-screen h-auto items-center justify-center z-[99]">
      <div className="flex flex-col items-center justify-center w-[90%] xl:w-[90%] gap-[34px] lg:gap-[68px] font-inter">
        {/* Başlık */}
        <div className="flex flex-col items-center justify-center text-center w-full lg:w-[70%] gap-[6px] lg:gap-[12px] text-[#140F25]">
          <h2 className="text-[22px] lg:text-[24px] font-semibold leading-[120%] -tracking-[0.48px] lg:-tracking-[0.96px] text-[#140F25] w-full lg:w-[55%]">
            {header}{" "}
            <span className="bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent">
              {header2}
            </span>
          </h2>
        </div>

        {/* Embla Slider */}
        <div className="w-full">
          {/* Smooth scroll için CSS optimizasyonları */}
          <div 
            ref={emblaRef} 
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
          >
            {/* Backface visibility ve will-change optimizasyonları */}
            <div 
              className="flex gap-[16px] lg:gap-[32px]"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'translate3d(0, 0, 0)',
              }}
            >
              {servicesData.map((card, index) => (
                <div
                  key={card.id ?? index}
                  className="flex-[0_0_100%] md:flex-[0_0_72%] w-full group min-w-0"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {/* Kart dizaynı */}
                  <div
                    data-property-1="Default"
                    className="h-[83px] md:h-[300px] relative bg-[#130b29] rounded-3xl shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] overflow-hidden text-white w-full"
                  >
                    {/* Gradient overlay - layerları optimize et */}
                    <div 
                      className="w-[90%] lg:w-[582px] h-80 opacity-50 pointer-events-none bg-[radial-gradient(ellipse_10.32%_6.01%_at_75.86%_80.09%,_#54B9CF_0%,_#547CCF_50%,_rgba(20,_12,_41,_0)_100%)]"
                      style={{ willChange: 'auto' }}
                    />
                    <div 
                      className="w-[90%] lg:w-[900px] h-48 left-[-4px] top-[114px] absolute bg-gradient-to-b pointer-events-none from-gray-900/0 to-gray-900"
                      style={{ willChange: 'auto' }}
                    />
                    <img
                      className="w-[300px] lg:w-[619px] min-h-80 left-[-4px] top-[-9px] absolute mix-blend-overlay pointer-events-none"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Numara - hardware acceleration */}
                    <div 
                      className="left-[29px] top-1/2 -translate-y-1/2 absolute text-Main-White text-[35px] lg:text-8xl -tracking-[0.7px] lg:tracking-[2px] font-semibold font-inter leading-[120%] lg:leading-[120px] text-white opacity-100 group-hover:opacity-0 group-hover:-translate-y-full transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{ 
                        transform: 'translate3d(0, -50%, 0)',
                        willChange: 'opacity, transform'
                      }}
                    >
                      {card.id}
                    </div>

                    {/* Başlık & alt başlık - cubic-bezier easing */}
                    <h3>
                      <span className="left-[60px] lg:left-[130px] top-4 lg:top-[110px] absolute text-Main-White text-[18px] lg:text-[22px] font-semibold font-inter leading-loose [text-shadow:_0px_0px_100px_rgb(221_254_254_/_0.50)] transform-gpu opacity-100 group-hover:opacity-100 group-hover:-translate-x-20 group-hover:-translate-y-20 transition-[transform] duration-500  ease-[cubic-bezier(0.4,0,0.2,1)]"    style={{ 
                          transform: 'translate3d(0, 0, 0)',
                          willChange: 'transform'
                        }}>
                        {card.title}
                      </span>
                      <span    style={{ 
                          transform: 'translate3d(0, 0, 0)',
                          willChange: 'transform'
                        }} className="left-[60px] hidden md:flex lg:left-[130px] top-[150px] absolute text-Main-White text-[13px] lg:text-xl font-semibold font-inter -tracking-[0.3px] lg:-tracking-[0.4px] leading-normal [text-shadow:_0px_0px_100px_rgb(221_254_254_/_0.50)] transform-gpu opacity-100 group-hover:opacity-100 group-hover:-translate-x-20 group-hover:-translate-y-20 transition-[transform,font-size,color] duration-500 ease-out group-hover:bg-gradient-to-r group-hover:from-[#54b9cf] group-hover:to-[#a754cf] group-hover:text-2xl group-hover:bg-clip-text group-hover:text-transparent">
                        {card.subTitle}
                      </span>
                    </h3>

                    {/* Subtitle - mobile */}
                    <div className="left-[60px] flex md:hidden lg:left-[130px] top-10 md:top-[150px] absolute text-Main-White text-[13px] lg:text-xl font-semibold font-inter -tracking-[0.3px] lg:-tracking-[0.4px] leading-normal [text-shadow:_0px_0px_100px_rgb(221_254_254_/_0.50)] transform-gpu opacity-100">
                      {card.subTitle}
                    </div>

                    {/* Default text - transition optimize edildi */}
                    <div    style={{ 
                          transform: 'translate3d(0, 0, 0)',
                          willChange: 'transform'
                        }} className="hidden md:flex left-[130px] top-[190px] absolute text-left text-[14px] leading-[110%] w-[66%] text-white/70 transform-gpu transition-[opacity,transform] duration-500 ease-out group-hover:opacity-100 group-hover:-translate-y-3">
                     {/* {t.rich(card.text, {
    b: (chunks) => <span className="font-semibold">{chunks}</span>,
    strong: (chunks) => <span className="font-semibold">{chunks}</span>,
    br: () => <br />,
    ul: (chunks) => (
      <ul className="list-disc list-inside space-y-1 mt-2">
        {chunks}
      </ul>
    ),
    li: (chunks) => <li>{chunks}</li>,
  })} */ card.text}
                    </div>

                    {/* Açıklama + buton - transition optimize edildi */}
                    <div    style={{ 
                          transform: 'translate3d(0, 0, 0)',
                          willChange: 'transform'
                        }} className="hidden md:flex left-[50px] text-left text-[14px] leading-[110%] top-[330px] absolute opacity-0 inline-flex flex-col gap-2 transform-gpu group-hover:opacity-100 group-hover:-translate-y-56 transition-[opacity,transform] duration-500 ease-out text-white w-[70%]">
                      {card.text}
                      <Link
                        href={card.buttonLink || "/"}
                        className="gradient-explore-button flex text-[12px] lg:text-[14px] text-white w-[114px] h-[42px] justify-center items-center font-inter leading-[16.8px] tracking-[-0.28px] left-0 absolute bottom-[34px] transform-gpu opacity-0 group-hover:opacity-100 group-hover:translate-y-24 transition-[opacity,transform] duration-500 ease-out"
                      >
                        {buttonText}
                      </Link>
                    </div>

                    {/* ServicesCarouselWrapper sağ altta */}
                    <div className="absolute -right-4 -bottom-[56px] lg:-bottom-[55px] lg:-right-6">
                      <ServicesCarouselWrapper
                        selected={index}
                        isActive={selectedIndex === index}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider navigation */}
          {slideCount > 1 && (
            <div className="mt-4 flex items-center justify-end gap-3 text-xs md:text-sm">
              <span className="rounded-full bg-black/60 px-3 py-1 text-white/90 backdrop-blur-sm">
                {selectedIndex + 1} / {slideCount}
              </span>
              <button
                type="button"
                onClick={scrollPrev}
                disabled={selectedIndex === 0}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white/90 shadow-md transition-colors hover:bg-black disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={selectedIndex === slideCount - 1}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white/90 shadow-md hover:bg-black backdrop-blur-sm hover:border-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 relative disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <span className="pointer-events-none absolute inset-[-4px] -z-10 rounded-full btn-pulse-dual" />
                →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepSection;