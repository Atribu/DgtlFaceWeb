"use client";

import React, { useEffect, useRef, useState } from "react";
import imgBanner from "./images/homepagebanner.jpg";
import { useTranslations } from "next-intl";
import Link from "next/link";

const INTRO_SRC = "/videos/three-canvas3.webm";
const LOOP_SRC = "/videos/three-canvas4.webm";

export default function ThreeMainBanner() {
  const t = useTranslations("Homepage.Hero");

  const videoRef = useRef(null);
  const loopPreloadRef = useRef(null);

  const [videoReady, setVideoReady] = useState(false);
  const [phase, setPhase] = useState("intro"); // "intro" | "loop"

  useEffect(() => {
    const v = videoRef.current;
    const lp = loopPreloadRef.current;
    if (!v) return;

    // Loop videoyu arka planda hazırlayalım (daha pürüzsüz geçiş)
    if (lp) {
      lp.src = LOOP_SRC;
      lp.load();
    }

    const onFirstFrame = async () => {
      setVideoReady(true);
      try {
        await v.play();
      } catch (e) {}
    };

    const onIntroEnded = async () => {
      // intro bitti -> loop’a geç
      setPhase("loop");

      // src değiştir + loop aç
      v.pause();
      v.src = LOOP_SRC;
      v.loop = true;
      v.currentTime = 0;
      v.load();

      try {
        await v.play();
      } catch (e) {}
    };

    v.addEventListener("loadeddata", onFirstFrame, { once: true });
    v.addEventListener("ended", onIntroEnded);

    return () => {
      v.removeEventListener("ended", onIntroEnded);
    };
  }, []);

  return (
    <div className="relative aspect-[16/9] w-screen h-[90vh] md:h-[80vh] min-h-[670px] md:min-h-[850px] xl:min-h-[780px]">
      {/* Poster (LCP için) */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-500 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${imgBanner.src})` }}
      />

      {/* Ana video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        src={INTRO_SRC}
        poster={imgBanner.src}
        muted
        playsInline
        autoPlay
        // intro’da loop istemiyoruz, loop’a geçince v.loop = true yapıyoruz
        preload="metadata"
      />

      {/* Loop videoyu önceden ısıtmak için görünmez video */}
      <video
        ref={loopPreloadRef}
        className="hidden"
        muted
        playsInline
        preload="auto"
      />

      {/* Yazılar + Button (senin mevcut içerik) */}
      <div
        className="absolute left-[4%] lg:left-[6%] xl:left-[12%] top-[18%] sm:top-[20%] md:top-[21%] lg:top-[24%] xl:top-[32%]
                   flex flex-col gap-4 justify-center text-start bg-black/40 lg:bg-transparent"
        style={{ color: "#fff", zIndex: 50 }}
      >
        <h1 className="w-full md:w-[63%] lg:w-[64%] xl:w-[55%] font-inter28 -tracking-[0.48px] lg:tracking-[-1.12px] leading-[120%] lg:leading-[130%] text-[24px] lg:text-[26px] font-bold">
          {t("title")}
        </h1>
<p className="w-[95%] md:w-[62%] lg:w-[50%] xl:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]"> {t.rich("subtitle", { strong: (chunks) => ( <span className="font-extrabold"> {chunks} </span> ), })} </p> <p className="w-[95%] md:w-[62%] lg:w-[50%] xl:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]"> {t.rich("subtitle2", { strong: (chunks) => ( <span className="font-extrabold"> {chunks} </span> ), })} </p> <ul className="lg:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[130%] lg:leading-[25.2px] -tracking-[0.28px] list-disc ml-8"> <li > Otel & turizm odaklı 360° dijital pazarlama</li> <li>Next.js & React tabanlı, hızlı ve SEO uyumlu web siteleri</li> <li>TR–EN–DE–RU çok dilli çağrı merkezi ve mesaj yönetimi</li> <li>Looker Studio ile şeffaf, gerçek zamanlı performans raporlama</li> </ul>
        {/* ... diğer içerikler aynı ... */}
        <div className="flex gap-4">
          <Link href="/Services" className="flex items-center gradient-border-button w-[184px] h-[42px] text-[14px] ml-3 font-bold justify-center font-inter leading-[16.8px] tracking-[-0.28px]">
            {t("button")}
          </Link>
          <Link href="/contact" className="flex items-center gradient-border-button w-[130px] h-[42px] text-[14px] ml-3 font-bold justify-center font-inter leading-[16.8px] tracking-[-0.28px]">
            {t("button2")}
          </Link>
        </div>
      </div>
    </div>
  );
}
