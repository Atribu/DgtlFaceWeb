"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import ServicesCarouselWrapper from "@/app/[locale]/components/serviceblocks/ServicesCarouselWrapper";
import { useTranslations, useMessages } from "next-intl";

const Section3 = ({ page }) => {
  const t = useTranslations(`${page}.servicesData`);
  const t2 = useTranslations(`${page}.ourservices`);
  const messages = useMessages();

  const nsMessages = messages?.[page]?.servicesData || {};

  const linkClass =
    "font-normal underline underline-offset-2  items-center";

  const richComponents = {
    // Bold
    b: (chunks) => <span className="font-bold">{chunks}</span>,

    // --- SEM ---
    remarketing: (chunks) => (
      <Link href="/sem/remarketing-ve-display" className={linkClass}>
        {chunks}
      </Link>
    ),
    tagmanager: (chunks) => (
      <Link href="/sem/donusum-takibi-tag-manager" className={linkClass}>
        {chunks}
      </Link>
    ),
    adreport: (chunks) => (
      <Link href="/sem/reklam-raporlama" className={linkClass}>
        {chunks}
      </Link>
    ),

    // --- SEO ---
    backlink: (chunks) => (
      <Link href="/seo/backlink-yonetimi" className={linkClass}>
        {chunks}
      </Link>
    ),
    seoreport: (chunks) => (
      <Link href="/seo/seo-raporlama" className={linkClass}>
        {chunks}
      </Link>
    ),
    seoservice: (chunks) => (
      <Link href="/seo-hizmetleri" className={linkClass}>
        {chunks}
      </Link>
    ),

    // --- SMM ---
    content: (chunks) => (
      <Link href="/smm/icerik-uretimi" className={linkClass}>
        {chunks}
      </Link>
    ),
    reels: (chunks) => (
      <Link href="/smm/reels-video" className={linkClass}>
        {chunks}
      </Link>
    ),
    ads: (chunks) => (
      <Link href="/smm" className={linkClass}>
        {chunks}
      </Link>
    ),
    plan: (chunks) => (
      <Link href="/smm/planlama-strateji" className={linkClass}>
        {chunks}
      </Link>
    ),
    smmreport: (chunks) => (
      <Link href="/smm/analiz-raporlama" className={linkClass}>
        {chunks}
      </Link>
    ),

    // --- Web & Yazılım ---
    webdev: (chunks) => (
      <Link href="/yazilim" className={linkClass}>
        {chunks}
      </Link>
    ),
    cms: (chunks) => (
      <Link href="/yazilim/cms-entegrasyonu" className={linkClass}>
        {chunks}
      </Link>
    ),
    kvkk: (chunks) => (
      <Link href="/yazilim/kvkk-uyum-hizmeti" className={linkClass}>
        {chunks}
      </Link>
    ),
    server: (chunks) => (
      <Link href="/yazilim/sunucu-guvenlik" className={linkClass}>
        {chunks}
      </Link>
    ),
    support: (chunks) => (
      <Link href="/yazilim/bakim-ve-destek" className={linkClass}>
        {chunks}
      </Link>
    ),

    // --- Creative ---
    uiux: (chunks) => (
      <Link href="/creative/ui-ux-tasarim" className={linkClass}>
        {chunks}
      </Link>
    ),
    video: (chunks) => (
      <Link href="/Services/creative/videoProduction" className={linkClass}>
        {chunks}
      </Link>
    ),
    event: (chunks) => (
      <Link href="/Services/creative/eventProduction" className={linkClass}>
        {chunks}
      </Link>
    ),
    gift: (chunks) => (
      <Link href="/Services/creative/corporateGift" className={linkClass}>
        {chunks}
      </Link>
    ),

    // --- Call Center ---
    call4lang: (chunks) => (
      <Link href="/cagri-merkezi/4-dilli-cagri-merkezi" className={linkClass}>
        {chunks}
      </Link>
    ),
    rezsupport: (chunks) => (
      <Link href="/Services/callcenter/reservationSupport" className={linkClass}>
        {chunks}
      </Link>
    ),
    socialmsg: (chunks) => (
      <Link href="/Services/callcenter/messageManagement" className={linkClass}>
        {chunks}
      </Link>
    ),
    aftersales: (chunks) => (
      <Link href="/Services/callcenter/aftersalesSupport" className={linkClass}>
        {chunks}
      </Link>
    ),
    callreport: (chunks) => (
      <Link href="/Services/callcenter/callPerformance" className={linkClass}>
        {chunks}
      </Link>
    ),

    // --- PMS & OTA ---
    pms: (chunks) => (
      <Link href="/pms-ota/pms-kurulum" className={linkClass}>
        {chunks}
      </Link>
    ),
    ota: (chunks) => (
      <Link href="/pms-ota/ota-entegrasyonu" className={linkClass}>
        {chunks}
      </Link>
    ),
    channel: (chunks) => (
      <Link href="/pms-ota/kanal-yonetimi" className={linkClass}>
        {chunks}
      </Link>
    ),
    online: (chunks) => (
      <Link href="/pms-ota/online-satis" className={linkClass}>
        {chunks}
      </Link>
    ),
    rez: (chunks) => (
      <Link href="/pms-ota/rezervasyon-yonetimi" className={linkClass}>
        {chunks}
      </Link>
    ),

    // --- Analytics ---
    looker: (chunks) => (
      <Link href="/Services/digitalAnalysis/lookerStudio" className={linkClass}>
        {chunks}
      </Link>
    ),
    benchmark: (chunks) => (
      <Link href="/raporlama/benchmark-analizi" className={linkClass}>
        {chunks}
      </Link>
    ),
    salesreport: (chunks) => (
      <Link href="/raporlama/satis-donusum" className={linkClass}>
        {chunks}
      </Link>
    ),
    kvkkreport: (chunks) => (
      <Link href="/Services/digitalAnalysis/kvkkDataSecurity" className={linkClass}>
        {chunks}
      </Link>
    ),

    // --- Hotel Digital ---
    hotelseo: (chunks) => (
      <Link href="/otel/seo" className={linkClass}>
        {chunks}
      </Link>
    ),
    hotelsmm: (chunks) => (
      <Link href="/otel/sosyal-medya" className={linkClass}>
        {chunks}
      </Link>
    ),
    hotelads: (chunks) => (
      <Link href="/otel/reklam-yonetimi" className={linkClass}>
        {chunks}
      </Link>
    ),
    hotelota: (chunks) => (
      <Link href="/otel/ota-yonetimi" className={linkClass}>
        {chunks}
      </Link>
    ),
    hotelpms: (chunks) => (
      <Link href="/otel/pms-entegrasyonu" className={linkClass}>
        {chunks}
      </Link>
    ),
    hotelcall: (chunks) => (
      <Link href="/otel/cagri-merkezi" className={linkClass}>
        {chunks}
      </Link>
    ),
  };

  const CARD_COUNT = 9;
  const MAX_ITEMS = 6;

  const servicesData = Array.from({ length: CARD_COUNT }, (_, i) => {
    const id = i + 1;

    // title için yine t kullanabiliriz (bunlar zaten var)
    const title = t(`title${id}`);

    // --- textX ve endTextX: direkt messages'tan kontrol ---
    const rawText = nsMessages[`text${id}`];
    const textKey =
      typeof rawText === "string" && rawText.trim() ? `text${id}` : null;

    const rawEndText = nsMessages[`endText${id}`];
    const endTextKey =
      typeof rawEndText === "string" && rawEndText.trim()
        ? `endText${id}`
        : null;

    // --- itemX_Y listesi: sadece gerçekten JSON'da olanları al ---
    const items = [];
    for (let j = 1; j <= MAX_ITEMS; j++) {
      const key = `item${id}_${j}`;
      const val = nsMessages[key];

      // JSON'da yoksa veya string değilse/boşsa → SKIP
      if (typeof val !== "string" || !val.trim()) continue;

      items.push(key);
    }

    return {
      title,
      textKey,
      endTextKey,
      items,
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

    setSlideCount(emblaApi.scrollSnapList().length);
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
      <div className="relative flex justify-start items-center w-[99%] lg:w-[90%]">
        <div
          className="flex justify-start items-center overflow-x-hidden w-full"
          ref={emblaRef}
        >
          <div className="flex">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="flex flex-[0_0_100%] md:flex-[0_0_90%] lg:flex-[0_0_45%] mr-[6px] lg:mr-[1%] h-[310px] lg:h-[290px] bg-[#140f25] max-w-[354px] lg:max-w-[900px] rounded-[22px] group shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] overflow-hidden p-4 lg:px-8 lg:py-3 text-start relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* index */}
                <span
                  className={`
                    absolute top-3 right-4 
                    font-mono tracking-[0.25em]
                    ${
                      activeIndex === index
                        ? "text-white/90 text-[40px] lg:text-[60px]"
                        : "  bg-gradient-to-r bg-clip-text text-transparent from-[#6598d6] via-[#8d72cf] to-[#a358ce] md:text-white/75 text-[30px] lg:text-[36px]"
                    }
                  `}
                >
                  {String(index + 1).padStart(2)}
                </span>

                <div className="flex flex-col mt-2 lg:mt-4 transition-all duration-500 group-hover:translate-y-[-10px]">
                  {/* Başlık */}
                  <h3 className="w-[90%] lg:w-full text-white text-[16px] lg:text-[18px] font-bold mb-1 lg:mb-2 transition-opacity duration-500 group-hover:opacity-100 opacity-75">
                    {service.title}
                  </h3>

                  {/* Üst açıklama */}
                  {service.textKey && (
                    <div className="mb-2 text-[12px] lg:text-[14px] leading-[140%] transition-opacity duration-500 group-hover:opacity-100 opacity-50 text-white">
                      {t.rich(service.textKey, richComponents)}
                    </div>
                  )}

                  {/* Maddeler */}
                  {service.items.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-y-1 gap-x-0 lg:gap-x-4 mt-1">
                      {service.items.map((itemKey, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="justify-start text-white text-[12px] md:text-[14px] lg:text-[14px] font-normal leading-[125%] lg:leading-[140%] mb-1 lg:transition-opacity duration-500 lg:group-hover:opacity-100 lg:opacity-25"
                        >
                          •{t.rich(itemKey, richComponents)}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Alt açıklama */}
                  {service.endTextKey && (
                    <div className="mt-2 lg:mt-3 text-[12px] lg:text-[14px] leading-[140%] group-hover:opacity-100 opacity-50 text-white w-[90%]">
                      {t.rich(service.endTextKey, richComponents)}
                    </div>
                  )}
                </div>

                {/* Sağ alttaki VBlock */}
                <div className="flex absolute -right-4 -bottom-10 lg:-right-12 lg:-bottom-[75px]">
                  <ServicesCarouselWrapper
                    selected={index}
                    isActive={activeIndex === index}
                  />
                </div>

                {/* Explore butonu */}
                <Link
                  href={service.link}
                  className="gradient-explore-button hidden lg:flex text-[12px] lg:text-[14px] text-white w-[90px] h-[38px] justify-center items-center font-inter leading-[16.8px] tracking-[-0.28px] left-10 absolute bottom-[34px] transform opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-500"
                >
                  {t2("services_button")}
                </Link>

                 <Link
                  href={service.link}
                  className="gradient-explore-button flex lg:hidden text-[12px] lg:text-[14px] text-white w-[90px] h-[38px] justify-center items-center font-inter leading-[16.8px] tracking-[-0.28px] left-4 absolute bottom-[34px] opacity-100 translate-y-4 transition-all duration-500"
                >
                  {t2("services_button")}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* index + oklar */}
        {slideCount > 0 && (
          <div className="absolute right-3 -bottom-9 lg:right-4 lg:-bottom-12 flex items-center gap-2 text-white/70 text-xs lg:text-[18px]">
            <button
              type="button"
              onClick={scrollPrev}
              className="flex h-7 w-7 lg:h-10 lg:w-10 items-center justify-center rounded-full border border-white/40 bg-[#140f25]/20 backdrop-blur-sm 
                       hover:border-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-8 lg:w-8"
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
              {String(selectedIndex + 1).padStart(2)} /{" "}
              {String(slideCount).padStart(2)}
            </span>

            <button
              type="button"
              onClick={scrollNext}
              className="flex h-7 w-7 lg:h-10 lg:w-10 items-center justify-center rounded-full border border-white/40 bg-[#140f25] backdrop-blur-sm 
                       hover:border-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <span className="pointer-events-none absolute inset-[-4px] -z-10 rounded-full btn-pulse-dual" />
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-8 lg:w-8"
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
