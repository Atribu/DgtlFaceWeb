"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Mevcut logolar - Before
import bookToHolidays from "./Before/booktoholidays.svg";
import miramare from "./Before/miramare.svg";
import portnature from "./Before/portnature.svg";
import evtatilim from "./Before/evtatilim.svg";
import azuraDeluxe from "./Before/azuradeluxe.svg";
import lago from "./Before/lago.svg";
import irenic from "./Before/irenic.svg";
import syhotel from "./Before/sy-logo.svg";
import mihotel from "./Before/mi-hotel.png";
import sietehotel from "./Before/sietelogo.avif";

// Mevcut logolar - After
import bookToHolidaysHover from "./After/booktoholidays.svg";
import miramareHover from "./After/miramare.svg";
import portnatureHover from "./After/portnature.svg";
import evtatilimHover from "./After/evtatilim.svg";
import azuraDeluxHover from "./After/azuradeluxe.svg";
import lagoHover from "./After/lago.svg";
import irenicHover from "./After/irenic.svg";

// Yeni logoları buraya import et
// import newLogo1 from "./Before/new-logo-1.svg";
// import newLogo2 from "./Before/new-logo-2.svg";
// import newLogo3 from "./Before/new-logo-3.svg";

const partnerLogos = [
  {
    src: bookToHolidays,
    hoverSrc: bookToHolidaysHover,
    alt: "Book To Holidays",
    width: 175,
    height: 100,
  },
  {
    src: miramare,
    hoverSrc: miramareHover,
    alt: "Miramare",
    width: 175,
    height: 175,
  },
  {
    src: portnature,
    hoverSrc: portnatureHover,
    alt: "Port Nature",
    width: 190,
    height: 110,
  },
  {
    src: azuraDeluxe,
    hoverSrc: azuraDeluxHover,
    alt: "Azura Deluxe",
    width: 150,
    height: 100,
  },
  {
    src: lago,
    hoverSrc: lagoHover,
    alt: "LAGO",
    width: 100,
    height: 100,
  },
  {
    src: irenic,
    hoverSrc: irenicHover,
    alt: "Irenic",
    width: 150,
    height: 100,
  },
  {
    src: evtatilim,
    hoverSrc: evtatilimHover,
    alt: "Ev Tatilim",
    width: 170,
    height: 120,
  },
  {
    src: syhotel,
    alt: "SY Hotels",
    gradient: true,
    width: 130,
    height: 100,
  },
  {
    src: mihotel,
    alt: "MI Hotel",
    gradient: true,
    width: 155,
    height: 90,
  },
  {
    src: sietehotel,
    alt: "Siete Hotel",
    gradient: true,
    width: 110,
    height: 75,
  },
];

export default function Partner() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      playDirection: "forward",
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      containScroll: false,
      skipSnaps: false,
    },
    [autoplayRef.current],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const viewportRef = useRef(null);

  // Embla viewport referansı
  const setEmblaViewportRef = useCallback(
    (node) => {
      viewportRef.current = node;
      emblaRef(node);
    },
    [emblaRef],
  );

  // Aktif logoyu belirle
  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Carousel ekranda mı?
  useEffect(() => {
    const node = viewportRef.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "120px 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Ekran görünürlüğüne göre autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay;

    if (!autoplay) return;

    if (isInView) {
      autoplay.play();
    } else {
      autoplay.stop();
    }
  }, [emblaApi, isInView]);

  // Carousel seçim değişikliği
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full overflow-hidden mt-2 lg:mt-4">
      {/* Carousel viewport */}
      <div ref={setEmblaViewportRef} className="w-full overflow-hidden">
        {/* Carousel container */}
        <div className="flex items-center">
          {partnerLogos.map((logo, index) => {
            const isCenter = index === currentIndex;
            const logoWidth = logo.width || 150;
            const logoHeight = logo.height || 100;

            // Yeni logolara CSS gradient uygulanacak
            const useGradient = logo.gradient === true;

            // SVG dosyasının URL adresi
            const logoUrl =
              typeof logo.src === "string" ? logo.src : logo.src.src;

            // SVG şeklini CSS mask olarak kullan
            const maskStyle = {
              WebkitMaskImage: `url("${logoUrl}")`,
              maskImage: `url("${logoUrl}")`,

              WebkitMaskSize: "contain",
              maskSize: "contain",

              WebkitMaskPosition: "center",
              maskPosition: "center",

              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            };

            return (
              <div
                key={`${logo.alt}-${index}`}
                className="
                  relative
                  flex
                  min-w-0
                  shrink-0
                  items-center
                  justify-center

                  h-[150px]
                  flex-[0_0_50%]
                  px-4

                  sm:h-[165px]
                  sm:flex-[0_0_33.333%]

                  lg:h-[220px]
                  lg:flex-[0_0_20%]
                "
              >
                {/* Logo büyüme animasyonu */}
                <div
                  className={`
                    relative
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center

                    transition-[transform,opacity]
                    duration-[900ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      isCenter
                        ? "scale-[1.15] opacity-100"
                        : "scale-[0.92] opacity-70"
                    }
                  `}
                >
                  {useGradient ? (
                    /* YENİ LOGOLAR - CSS GRADIENT */
                    <div
                      role="img"
                      aria-label={logo.alt}
                      className="relative shrink-0"
                      style={{
                        width: logoWidth,
                        height: logoHeight,
                        maxWidth: "100%",
                      }}
                    >
                      {/* Normal siyah logo */}
                      <div
                        className={`
      absolute inset-0 bg-black
      transition-opacity duration-[900ms] ease-in-out
      ${isCenter ? "opacity-0" : "opacity-100"}
    `}
                        style={maskStyle}
                      />

                      {/* Mor-mavi gradient logo */}
                      <div
                        className={`
      absolute inset-0
      bg-gradient-to-b
      from-[#AC63D5]
      via-[#7775D7]
      to-[#27B8CE]
      transition-opacity duration-[900ms] ease-in-out
      ${isCenter ? "opacity-100" : "opacity-0"}
    `}
                        style={maskStyle}
                      />
                    </div>
                  ) : (
                    /* MEVCUT LOGOLAR - BEFORE / AFTER */
                    <div
                      className="relative shrink-0"
                      style={{
                        width: logoWidth,
                        height: logoHeight,
                        maxWidth: "100%",
                      }}
                    >
                      {/* Before */}
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes={`${logoWidth}px`}
                        className={`
      object-contain
      transition-opacity duration-[900ms] ease-in-out
      ${isCenter ? "opacity-0" : "opacity-100"}
    `}
                      />

                      {/* After */}
                      <Image
                        src={logo.hoverSrc}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes={`${logoWidth}px`}
                        className={`
      object-contain
      transition-opacity duration-[900ms] ease-in-out
      ${isCenter ? "opacity-100" : "opacity-0"}
    `}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
