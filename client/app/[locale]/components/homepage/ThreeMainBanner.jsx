import React from "react";
import Image from "next/image";
import imgBanner from "./images/herobanner2.webp";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ThreeMainBanner() {
  const t = useTranslations("Homepage.Hero");

  return (
    <div
      className="relative w-screen overflow-hidden bg-black "
      style={{
        height: "91vh",
        minHeight: "690px",
        aspectRatio: "16/9",
      }}
    >
 
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Image
          src={imgBanner}
          alt="DGTLFACE - Dijital Pazarlama ve Web Tasarım"
          fill
          priority
          fetchPriority="high"
          quality={75}
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
        />
      </div>

      {/* Okunurluk için overlay (layout bozmaz) */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
        
        }}
        aria-hidden="true"
      />

      {/* İçerik */}
      <div
        className="absolute w-full md:w-[63%] lg:w-[64%] xl:w-[55%] left-[2%] lg:left-[6%] xl:left-[8%] 2xl:left-[10%] top-[15%] sm:top-[20%] md:top-[21%] lg:top-[24%] xl:top-[28%] flex flex-col gap-4 text-start p-4 lg:p-0 will-change-transform"
        style={{
          zIndex: 50,
          color: "#fff",
        }}
      >
        <h1
          className="w-full text-2xl lg:text-[26px] font-bold leading-tight xl:w-[88%]"
          style={{
            zIndex: 50,
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          {t("title")}
        </h1>

        <p
          className="w-[98%] md:w-[90%] lg:w-[80%] xl:w-[76%] text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]"
          style={{
            zIndex: 50,
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          {t.rich("subtitle", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <p
          className="w-[98%] md:w-[90%] lg:w-[80%] xl:w-[76%] text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]"
          style={{
            zIndex: 50,
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.4)",

          }}
        >
          {t.rich("subtitle2", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        <ul
          className="lg:w-[40%] text-sm lg:text-base font-medium list-disc ml-8 leading-[130%] lg:leading-[25.2px] -tracking-[0.28px]"
          style={{
            zIndex: 50,
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.4)",

          }}
        >
          <li>Otel & turizm odaklı 360° dijital pazarlama</li>
          <li>Next.js & React tabanlı, hızlı ve SEO uyumlu web siteleri</li>
          <li>TR–EN–DE–RU çok dilli çağrı merkezi ve mesaj yönetimi</li>
          <li>Looker Studio ile şeffaf, gerçek zamanlı performans raporlama</li>
        </ul>

        <div
          className="flex gap-4 lg:w-[40%]"
          style={{
            zIndex: 50,
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.4)",

          }}
        >
          <Link
            href="/Services"
            className="flex items-center gradient-border-button w-[184px] h-[42px] text-sm font-bold justify-center"
            aria-label="Hizmetlerimizi İnceleyin"
          >
            {t("button")}
          </Link>
          <Link
            href="/contact"
            className="flex items-center gradient-border-button w-[130px] h-[42px] text-sm font-bold justify-center"
            aria-label="İletişime Geçin"
          >
            {t("button2")}
          </Link>
        </div>
      </div>
    </div>
  );
}


// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import imgBanner from "./images/homepagebanner.jpg";
// import { useTranslations } from "next-intl";
// import Link from "next/link";

// const INTRO_SRC = "/videos/intro-banner.webm";
// const LOOP_SRC = "/videos/loop-banner-optimized.webm";
// const INTRO_FALLBACK_MS = 3900;

// export default function ThreeMainBanner() {
//   const t = useTranslations("Homepage.Hero");

//   const introRef = useRef(null);
//   const loopRef = useRef(null);
//   const loopStartedRef = useRef(false);
//   const switchedRef = useRef(false);
//   const fallbackTimerRef = useRef(null);

//   const [posterHidden, setPosterHidden] = useState(false);
//   const [showLoop, setShowLoop] = useState(false);
//   const [hideIntro, setHideIntro] = useState(false);

//   useEffect(() => {
//     const intro = introRef.current;
//     const loop = loopRef.current;
//     if (!intro || !loop) return;

//     const safePlay = async (v) => {
//       try {
//         await v.play();
//         return true;
//       } catch {
//         return false;
//       }
//     };

//     const switchToLoop = () => {
//       if (switchedRef.current) return;
//       switchedRef.current = true;
//       setShowLoop(true);
//       setTimeout(() => {
//         setHideIntro(true);
//         intro.pause();
//       }, 250);
//     };

//     // Video ayarları
//     intro.muted = true;
//     intro.playsInline = true;
//     intro.loop = false;
//     intro.preload = "none";

//     loop.muted = true;
//     loop.playsInline = true;
//     loop.loop = true;
//     loop.preload = "none";

//     const onIntroLoadedData = async () => {
//       setPosterHidden(true);
//       await safePlay(intro);

//       if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
//       fallbackTimerRef.current = setTimeout(async () => {
//         if (!loopStartedRef.current) {
//           loopStartedRef.current = true;
//           loop.currentTime = 0;
//           loop.load();
//           await safePlay(loop);
//         }
//         switchToLoop();
//       }, INTRO_FALLBACK_MS);
//     };

//     const onIntroTimeUpdate = async () => {
//       if (!Number.isFinite(intro.duration) || intro.duration <= 0) return;

//       const remain = intro.duration - intro.currentTime;

//       if (remain <= 1.2 && !loopStartedRef.current) {
//         loopStartedRef.current = true;
//         loop.currentTime = 0;
//         loop.load();
//         await safePlay(loop);
//       }
//     };

//     const onIntroEnded = () => {
//       switchToLoop();
//     };

//     intro.addEventListener("loadeddata", onIntroLoadedData, { once: true });
//     intro.addEventListener("timeupdate", onIntroTimeUpdate);
//     intro.addEventListener("ended", onIntroEnded, { once: true });

//     // requestIdleCallback ile lazy loading
//     if ("requestIdleCallback" in window) {
//       requestIdleCallback(() => intro.load(), { timeout: 1000 });
//     } else {
//       setTimeout(() => intro.load(), 100);
//     }

//     return () => {
//       intro.removeEventListener("loadeddata", onIntroLoadedData);
//       intro.removeEventListener("timeupdate", onIntroTimeUpdate);
//       intro.removeEventListener("ended", onIntroEnded);

//       if (fallbackTimerRef.current) {
//         clearTimeout(fallbackTimerRef.current);
//         fallbackTimerRef.current = null;
//       }

//       intro.pause();
//       loop.pause();
//     };
//   }, []);

//   return (
//     <div 
//       className="relative w-screen overflow-hidden bg-black"
//       style={{ 
//         height: '91vh',
//         minHeight: '690px',
//         aspectRatio: '16/9'
//       }}
//     >
//       {/* Poster Image - LCP için kritik */}
//       <div
//         className="absolute inset-0"
//         style={{ zIndex: 0 }}
//       >
//         <Image
//           src={imgBanner}
//           alt="DGTLFACE - Dijital Pazarlama ve Web Tasarım"
//           fill
//           priority={true}
//           fetchPriority="high"
//           quality={75}
//           className="object-cover"
//           sizes="100vw"
//           placeholder="blur"
//           style={{ 
//             transition: posterHidden ? 'opacity 300ms' : 'none',
//             opacity: posterHidden ? 0 : 1 
//           }}
//         />
//       </div>

//       {/* Loop Video */}
//       <video
//         ref={loopRef}
//         className="absolute inset-0 w-full h-full object-cover"
//         style={{ 
//           zIndex: 1,
//           transition: showLoop ? 'opacity 300ms' : 'none',
//           opacity: showLoop ? 1 : 0
//         }}
//         src={LOOP_SRC}
//         muted
//         playsInline
//         loop
//         preload="none"
//         aria-hidden="true"
//       />

//       {/* Intro Video */}
//       <video
//         ref={introRef}
//         className="absolute inset-0 w-full h-full object-cover"
//         style={{ 
//           zIndex: 2,
//           transition: hideIntro ? 'opacity 300ms' : 'none',
//           opacity: hideIntro ? 0 : 1
//         }}
//         src={INTRO_SRC}
//         muted
//         playsInline
//         preload="none"
//         aria-hidden="true"
//       />

//       {/* İçerik */}
//       <div
//         className="absolute w-full md:w-[63%] lg:w-[64%] xl:w-[55%] left-[2%] lg:left-[6%] xl:left-[8%] 2xl:left-[10%] top-[15%] sm:top-[20%] md:top-[21%] lg:top-[24%] xl:top-[28%] flex flex-col gap-4 text-start p-4 lg:p-0 will-change-transform"
//         style={{ 
//           zIndex: 50, 
//           color: "#fff",

//         }}
//       >
//         <h1 className="w-full  text-2xl lg:text-[26px] font-bold leading-tight xl:w-[88%]"         
//         style={{ 
//           zIndex: 50, 
//           color: "#fff",
//           backgroundColor: 'rgba(0, 0, 0, 0.4)',
//           backdropFilter: 'blur(1px)'
//         }}>
//           {t("title")}
//         </h1>

//         <p className="w-[98%] md:w-[90%] lg:w-[80%] xl:w-[76%]  text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]"         
//         style={{ 
//           zIndex: 50, 
//           color: "#fff",
//           backgroundColor: 'rgba(0, 0, 0, 0.4)',
//           backdropFilter: 'blur(1px)'
//         }}>
//           {t.rich("subtitle", {
//             strong: (chunks) => <strong>{chunks}</strong>,
//           })}
//         </p>

//         <p className="w-[98%] md:w-[90%] lg:w-[80%] xl:w-[76%] text-[14px] lg:text-[16px] font-medium leading-[115%] lg:leading-[120%] -tracking-[0.28px]" 
//         style={{ 
//           zIndex: 50, 
//           color: "#fff",
//           backgroundColor: 'rgba(0, 0, 0, 0.4)',
//           backdropFilter: 'blur(1px)'
//         }}>
//           {t.rich("subtitle2", {
//             strong: (chunks) => <strong>{chunks}</strong>,
//           })}
//         </p>

//         <ul className="lg:w-[40%] text-sm lg:text-base font-medium list-disc ml-8 leading-[130%] lg:leading-[25.2px] -tracking-[0.28px]" 
//         style={{ 
//           zIndex: 50, 
//           color: "#fff",
//           backgroundColor: 'rgba(0, 0, 0, 0.4)',
//           backdropFilter: 'blur(1px)'
//         }}>
//           <li>Otel & turizm odaklı 360° dijital pazarlama</li>
//           <li>Next.js & React tabanlı, hızlı ve SEO uyumlu web siteleri</li>
//           <li>TR–EN–DE–RU çok dilli çağrı merkezi ve mesaj yönetimi</li>
//           <li>Looker Studio ile şeffaf, gerçek zamanlı performans raporlama</li>
//         </ul>

//         <div className="flex gap-4 lg:w-[40%]" 
//         style={{ 
//           zIndex: 50, 
//           color: "#fff",
//           backgroundColor: 'rgba(0, 0, 0, 0.4)',
//           backdropFilter: 'blur(1px)'
//         }}>
//           <Link
//             href="/Services"
//             className="flex items-center gradient-border-button w-[184px] h-[42px] text-sm font-bold justify-center"
//             aria-label="Hizmetlerimizi İnceleyin"
//           >
//             {t("button")}
//           </Link>
//           <Link
//             href="/contact"
//             className="flex items-center gradient-border-button w-[130px] h-[42px] text-sm font-bold justify-center"
//             aria-label="İletişime Geçin"
//           >
//             {t("button2")}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }