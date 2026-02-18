"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel({ slides }) {
  // Sürekli akış için Autoplay speed değeri (px/ms) kullanıyoruz.
  const autoplayOptions = { speed: 1, stopOnInteraction: false };
  const autoplayRef = useRef(Autoplay(autoplayOptions));
  const viewportRef = useRef(null);
  const [isInView, setIsInView] = useState(true);
  // dragFree ekleyerek kaydırma modunu serbest hale getiriyoruz.
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align:"start" },
    [autoplayRef.current]
  );
  const setEmblaViewportRef = useCallback(
    (node) => {
      viewportRef.current = node;
      emblaRef(node);
    },
    [emblaRef]
  );

  useEffect(() => {
    const node = viewportRef.current;
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
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    if (isInView) autoplay.play();
    else autoplay.stop();
  }, [emblaApi, isInView]);

  // Geçişin kesintisiz olması için slide'ları iki kere kopyalıyoruz.
  const extendedSlides = [...slides, ...slides, ...slides, ...slides, ...slides, ...slides];

  return (
    <section className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={setEmblaViewportRef}>
        {/*
          Responsive padding kullanıyoruz:
          - 'px-4' küçük ekranlarda,
          - 'md:px-8' orta ekranlarda,
          - 'lg:px-12' daha büyük ekranlarda.
          Bu sayede boşluklar çok artmaz.
        */}
        <div className="embla__container flex gap-1 px-12 md:px-8 lg:px-44 ">
          {extendedSlides.map((imgObj, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_70%] md:flex-[0_0_50%] xl:flex-[0_0_20%]"
            >
              <div className="flex bg-white w-64 rounded-md shadow-boxshadow h-[15vh] items-center justify-center p-2">
                <img
                  src={imgObj.src}
                  alt={`Partner ${index + 1}`}
                  className="max-h-17 object-contain"
                   loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
