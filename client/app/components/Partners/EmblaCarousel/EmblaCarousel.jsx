"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel(props) {
  const { slides } = props;

  // Autoplay ayarları
  const autoplayOptions = { delay: 3000, stopOnInteraction: false };

  // Embla ayarları: loop = true (sonsuz döngü), autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true, // Sonsuz döngü
    },
    [Autoplay(autoplayOptions)]
  );

  return (
    /**
     * "embla w-full" => slider tam genişlik
     * "lg:ml-[28.8125rem]" => büyük ekranda soldan ~460px
     * "overflow-x-hidden" => yatay taşmayı gizlemek
     */
    <section className="embla w-full lg:ml-[28.8125rem] overflow-hidden">
      <div 
        className="embla__viewport overflow-hidden" 
        ref={emblaRef}
      >
        <div
          className="
            embla__container
            flex
            [backface-visibility:hidden]
            [touch-action:pan-y_pinch-zoom]
            -ml-4
            md:-ml-6
            xl:-ml-8
          "
        >
          {slides.map((imgObj, index) => (
            <div
              key={index}
              className="
                embla__slide
                min-w-0
                flex-[0_0_100%]
                pl-4
                md:flex-[0_0_50%]
                md:pl-6
                xl:[flex:0_0_calc(100%/5)]
                xl:pl-8
              "
            >
              <div
                className="
                  m-4
                  w-[244px]
                  h-[68px]
                  flex
                  items-center
                  justify-center
                  p-[47px]
                  border-[20px]
                  border-white
                  rounded-[1.8rem]
                  [box-shadow:0_0_15px_rgba(0,0,0,0.3)]
                "
              >
                <img
                  src={imgObj.src}
                  alt={`Partner ${index + 1}`}
                  className="
                    w-[152px]
                    h-[68px]
                    object-contain
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opsiyonel kontroller (Prev/Next, Dots) */}
      <div className="mt-8">
        {/* Butonlar veya DotIndicators eklersen */}
      </div>
    </section>
  );
}
