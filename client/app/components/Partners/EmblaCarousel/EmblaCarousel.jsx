"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel({ slides }) {
  const autoplayOptions = { delay: 3000, stopOnInteraction: false };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

  return (
    <section className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        {/* gap-4 => her slide arası 16px boşluk, px-4 => soldan/sağdan 16px padding */}
        <div className="embla__container flex gap-4 px-4">
          {slides.map((imgObj, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_20%]"
            >
              <div className="bg-white rounded-md shadow flex items-center justify-center p-2">
                <img
                  src={imgObj.src}
                  alt={`Partner ${index + 1}`}
                  className="max-h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
