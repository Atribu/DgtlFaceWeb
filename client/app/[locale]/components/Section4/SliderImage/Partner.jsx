"use client"
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import bookToHolidays from './Before/booktoholidays.svg';
import miramare from './Before/miramare.svg';
import portnature from './Before/portnature.svg';
import evtatilim from './Before/evtatilim.svg';
import azuraDeluxe from './Before/azuradeluxe.svg';
import lago from './Before/lago.svg';
import irenic from './Before/irenic.svg';

import bookToHolidaysHover from './After/booktoholidays.svg';
import miramareHover from './After/miramare.svg';
import portnatureHover from './After/portnature.svg';
import evtatilimHover from './After/evtatilim.svg';
import azuraDeluxHover from './After/azuradeluxe.svg';
import lagoHover from './After/lago.svg';
import irenicHover from './After/irenic.svg';

const Partner = () => {
  const images = [
    { src: bookToHolidays, hoverSrc: bookToHolidaysHover, alt: 'Slide 1' },
    { src: miramare, hoverSrc: miramareHover, alt: 'Slide 2' },
    { src: portnature, hoverSrc: portnatureHover, alt: 'Slide 3' },
    { src: azuraDeluxe, hoverSrc: azuraDeluxHover, alt: 'Slide 4' },
    { src: lago, hoverSrc: lagoHover, alt: 'Slide 5' },
    { src: irenic, hoverSrc: irenicHover, alt: 'Slide 6' },
     { src: evtatilim, hoverSrc: evtatilimHover, alt: 'Slide 7' },
         { src: bookToHolidays, hoverSrc: bookToHolidaysHover, alt: 'Slide 1' },
    { src: miramare, hoverSrc: miramareHover, alt: 'Slide 2' },
    { src: portnature, hoverSrc: portnatureHover, alt: 'Slide 3' },
    { src: azuraDeluxe, hoverSrc: azuraDeluxHover, alt: 'Slide 4' },
    { src: lago, hoverSrc: lagoHover, alt: 'Slide 5' },
    { src: irenic, hoverSrc: irenicHover, alt: 'Slide 6' },
     { src: evtatilim, hoverSrc: evtatilimHover, alt: 'Slide 7' },
  ];

  const autoplayOptions = { delay: 4000, stopOnInteraction: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1,   containScroll: false,
      skipSnaps: false, },
    [ Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playDirection: "forward",
      }),]
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex items-center gap-[20px]">
        {images.map((image, index) => {
          const isCenter = index === currentIndex;
          return (
            <div className={`relative shrink-0 flex justify-center items-center mr-4  flex-[0_0_auto]
         lg:min-h-[230px]
         lg:w-[240px]
         md:w-[270px] md:h-[165px]
         h-[266px] w-[177.3px]" ${isCenter ? 'slide--hover transform' : ''}`} key={index}>
             <Image
                src={isCenter ? image.hoverSrc : image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className='max-w-[90px] lg:max-w-[150px] min-w-[88px]'
                style={{ objectFit: 'cover', cursor: isCenter ? 'pointer' : 'default' }}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .embla {
          overflow: hidden;
          width: 100%;
        }

        .embla__container {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .embla__slide {
          position: relative;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s;
        }

        .slide--hover {
          transform: scale(1.1);
        }

        @media (min-width: 769px) {
          .embla__slide {
            width: calc((100% - 80px) / 5);
            height: 150px;
          }
        }

        @media (max-width: 768px) {
          .embla__slide {
            width: calc((100% - 40px) / 3);
            height: 100px;
          }
        }

        @media (max-width: 480px) {
          .embla__slide {
            width: calc((100% - 1px) / 2);
            height: 110px;
          }
        }
      `}</style>
    </div>
  );
};

export default Partner;