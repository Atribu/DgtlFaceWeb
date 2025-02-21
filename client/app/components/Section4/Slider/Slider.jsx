"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// SVG bileşenlerini import edelim
import EvTatilim from "../svg/EvTatilim";
import FreshFruit from "../svg/FreshFruit";
import Hyundai from "../svg/Hyundai";
import PortNature from "../svg/PortNature";
import Tolerance from "../svg/Tolerance";

export default function Slider() {
  const autoplayOptions = { speed: 1, stopOnInteraction: false };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay(autoplayOptions)]
  );

  // Ortadaki slide'ın indeksini tutuyoruz
  const [centerIndex, setCenterIndex] = useState(0);

  // SVG bileşenlerini slidesData dizisinde tutuyoruz
  const slidesData = [
    <EvTatilim width={129} height={30} className="custom-class" />,
    <FreshFruit width={129} height={30} className="custom-class" />,
    <Hyundai width={129} height={30} className="custom-class" />,
    <PortNature width={129} height={30} className="custom-class" />,
    <Tolerance width={129} height={30} className="custom-class" />,
  ];

  // Sonsuz geçiş için kopyalıyoruz
  const extendedSlides = [
    ...slidesData,
    ...slidesData,
    ...slidesData,
    ...slidesData,
    ...slidesData,
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      // Görünen slide indekslerini al
      const inView = emblaApi.slidesInView(true);
      if (inView && inView.length) {
        // Ortadaki slide indeksini bul
        const center = inView[Math.floor(inView.length / 2)];
        setCenterIndex(center);
      }
    };

    emblaApi.on("select", onSelect);
    onSelect(); // ilk seferde de çalışsın

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="embla w-11/12 h-[30vh] overflow-hidden flex justify-center items-center">
      <div className="embla__viewport w-4/6" ref={emblaRef}>
        <div className="embla__container flex gap-12">
          {extendedSlides.map((slideElement, index) => {
            // centerIndex ile eşleşiyorsa degrade, değilse düz renk
            const isCenter = index === centerIndex;

            // Orijinal elemana (EvTatilim, FreshFruit vb.) isCenter prop'unu ekliyoruz
            const slideWithProps = React.cloneElement(slideElement, { isCenter });

            return (
              <div
                key={index}
                className={`embla__slide flex-[0_0_20%] transition-transform duration-300
                  ${isCenter ? "scale-[1.5]" : "scale-100"}
                `}
              >
                {slideWithProps}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
