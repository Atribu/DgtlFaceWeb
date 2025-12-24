"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl"; 
import Link from "next/link";

const INTRO_SRC = "/videos/intro-banner.webm";
const LOOP_SRC  = "/videos/loop-banner.webm";

export default function ThreeMainBanner() {
  const t = useTranslations("Homepage.Hero");

  const introRef = useRef(null);
  const loopRef = useRef(null);
  const containerRef = useRef(null);

  const [showLoop, setShowLoop] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  useEffect(() => {
    const intro = introRef.current;
    const loop = loopRef.current;
    if (!intro || !loop) return;

    // Container'a siyah arka plan
    if (containerRef.current) {
      containerRef.current.style.backgroundColor = "#000";
    }

    // Intro video yüklenince otomatik başlat
    const handleIntroCanPlay = () => {
      intro.play().catch(err => {
        console.log("Intro autoplay blocked:", err);
      });
    };

    // Intro'nun zamanını kontrol et - son 1 saniye kalınca loop'u başlat
    const handleTimeUpdate = () => {
      const timeRemaining = intro.duration - intro.currentTime;
      
      // Son 1 saniye kalınca loop'u başlat (altta, görünmez olarak)
      if (timeRemaining <= 1 && timeRemaining > 0 && !showLoop) {
        console.log("Starting loop in background");
        loop.currentTime = 0;
        loop.play().catch(err => {
          console.log("Loop play error:", err);
        });
      }
    };

    // Intro bitince sadece görünürlük geçişini yap
    const handleIntroEnded = () => {
      console.log("Intro ended, showing loop");
      
      // Loop zaten oynuyor, sadece görünür yap
      setShowLoop(true);
      // 300ms sonra intro'yu gizle
      setTimeout(() => {
        setHideIntro(true);
        // Intro'yu durdur (kaynak tasarrufu)
        intro.pause();
      }, 300);
    };

    // Event listener'ları ekle
    intro.addEventListener("canplay", handleIntroCanPlay, { once: true });
    intro.addEventListener("timeupdate", handleTimeUpdate);
    intro.addEventListener("ended", handleIntroEnded, { once: true });

    // Videoları yükle
    intro.load();
    loop.load();

    return () => {
      intro.removeEventListener("canplay", handleIntroCanPlay);
      intro.removeEventListener("ended", handleIntroEnded);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-screen h-[90vh] md:h-[80vh] min-h-[670px] md:min-h-[850px] xl:min-h-[780px] overflow-hidden bg-black"
    >
      {/* LOOP video (altta) */}
      <video
        ref={loopRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
          showLoop ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: 1 }}
        src={LOOP_SRC}
        muted
        playsInline
        loop
        preload="none"
      />

      {/* INTRO video (üstte) */}
      <video
        ref={introRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
          hideIntro ? "opacity-0" : "opacity-100"
        }`}
        style={{ zIndex: 2 }}
        src={INTRO_SRC}
        muted
        playsInline
        preload="auto"
      />

      {/* İçerik katmanı */}
      <div
        className="absolute left-[4%] lg:left-[6%] xl:left-[12%] top-[18%] sm:top-[20%] md:top-[21%] lg:top-[24%] xl:top-[32%]
                   flex flex-col gap-4 justify-center text-start bg-black/40 lg:bg-transparent p-4 lg:p-0"
        style={{ color: "#fff", zIndex: 50 }}
      >
        <h1 className="w-full md:w-[63%] lg:w-[64%] xl:w-[55%] font-inter28 -tracking-[0.48px] lg:tracking-[-1.12px] leading-[120%] lg:leading-[130%] text-[24px] lg:text-[26px] font-bold">
          {t("title")}
        </h1>
        
        <p className="w-[95%] md:w-[62%] lg:w-[50%] xl:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]">
          {t.rich("subtitle", {
            strong: (chunks) => (
              <span className="font-extrabold">{chunks}</span>
            ),
          })}
        </p>
        
        <p className="w-[95%] md:w-[62%] lg:w-[50%] xl:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]">
          {t.rich("subtitle2", {
            strong: (chunks) => (
              <span className="font-extrabold">{chunks}</span>
            ),
          })}
        </p>
        
        <ul className="lg:w-[40%] font-inter28 text-[14px] lg:text-[16px] font-medium leading-[130%] lg:leading-[25.2px] -tracking-[0.28px] list-disc ml-8">
          <li>Otel & turizm odaklı 360° dijital pazarlama</li>
          <li>Next.js & React tabanlı, hızlı ve SEO uyumlu web siteleri</li>
          <li>TR–EN–DE–RU çok dilli çağrı merkezi ve mesaj yönetimi</li>
          <li>Looker Studio ile şeffaf, gerçek zamanlı performans raporlama</li>
        </ul>
        
        <div className="flex gap-4">
          <Link 
            href="/Services" 
            className="flex items-center gradient-border-button w-[184px] h-[42px] text-[14px] ml-3 font-bold justify-center font-inter leading-[16.8px] tracking-[-0.28px]"
          >
            {t("button")}
          </Link>
          <Link 
            href="/contact" 
            className="flex items-center gradient-border-button w-[130px] h-[42px] text-[14px] ml-3 font-bold justify-center font-inter leading-[16.8px] tracking-[-0.28px]"
          >
            {t("button2")}
          </Link>
        </div>
      </div>
    </div>
  );
}