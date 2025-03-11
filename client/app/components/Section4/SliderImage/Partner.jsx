import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import bookToHolidays from '../SliderImage/Before/booktoholidays.svg';
import dgtlface from '../SliderImage/Before/dgtlface.svg';
import freshfruit from '../SliderImage/Before/freshfruitturkey.svg';
import miramare from '../SliderImage/Before/miramare.svg';
import portnature from '../SliderImage/Before/portnature.svg';
import evtatilim from '../SliderImage/Before/evtatilim.svg';

import bookToHolidaysHover from '../SliderImage/After/booktoholidays.svg';
import dgtlfaceHover from '../SliderImage/After/dgtlface.svg';
import freshfruitHover from '../SliderImage/After/freshfruitturkey.svg';
import miramareHover from '../SliderImage/After/miramare.svg';
import portnatureHover from '../SliderImage/After/portnature.svg';
import evtatilimHover from '../SliderImage/After/evtatilim.svg';

const Partner = () => {
  const images = [
    { src: bookToHolidays, hoverSrc: bookToHolidaysHover, alt: 'Slide 1' },
    { src: dgtlface, hoverSrc: dgtlfaceHover, alt: 'Slide 2' },
    { src: freshfruit, hoverSrc: freshfruitHover, alt: 'Slide 3' },
    { src: miramare, hoverSrc: miramareHover, alt: 'Slide 4' },
    { src: portnature, hoverSrc: portnatureHover, alt: 'Slide 5' },
    { src: evtatilim, hoverSrc: evtatilimHover, alt: 'Slide 6' },
    { src: evtatilim, hoverSrc: evtatilimHover, alt: 'Slide 7' },
    { src: evtatilim, hoverSrc: evtatilimHover, alt: 'Slide 8' },
  ];

  const autoplayOptions = { delay: 4500, stopOnInteraction: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, containScroll: 'trimSnaps' },
    [Autoplay(autoplayOptions)]
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
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => {
          const isCenter = index === currentIndex;
          return (
            <div className={`embla__slide ${isCenter ? 'slide--hover' : ''}`} key={index}>
              <Image
                src={isCenter ? image.hoverSrc : image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'contain', cursor: isCenter ? 'pointer' : 'default' }}
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
          transform: scale(1.3);
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
            width: calc((100% - 20px) / 2);
            height: 70px;
          }
        }
      `}</style>
    </div>
  );
};

export default Partner;