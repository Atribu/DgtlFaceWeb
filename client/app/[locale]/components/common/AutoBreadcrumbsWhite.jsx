"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

// URL segment → Header.json key map
const SEGMENT_TO_HEADER_KEY = {
  // top level
  Services: "services",

  // ana departmanlar
  creative: "creative",
  callcenter: "call_center",
  pms: "pms_ota_management",
  sem: "search_engine_marketing",
  seo: "search_engine_optimization",
  smm: "social_media_marketing",
  software: "information_technology_software",
  digitalAnalysis: "digital_analysis_reporting",
  hotel: "hotel",

  // ---- SEO (TR & EN slug örnekleri) ----
  "teknik-seo": "seo_technical",
  "technical-seo": "seo_technical",

  "icerik-seo": "seo_content",
  "content-seo": "seo_content",

  "yerel-seo": "seo_local",
  "local-seo": "seo_local",

  "backlink-yonetimi": "seo_backlink",
  "backlink-management": "seo_backlink",

  "seo-raporlama": "seo_reporting",
  "seo-reporting": "seo_reporting",

  // ---- PMS (TR slug örnekleri) ----
  "pms-ota": "pms_ota_management",
  "pms-kurulum": "pms_installation",
  "ota-entegrasyonu": "pms_ota_contract",
  "rezervasyon-yonetimi": "pms_reservation",
  "kanal-yonetimi": "pms_channel",
  "online-satis": "pms_web_payment",

  // ---- Call Center ----
  "cagri-merkezi": "call_center",
  "4-dilli-cagri-merkezi": "callcenter_multilang",
  "mesaj-yonetimi": "callcenter_message",
  "satis-sonrasi-destek": "callcenter_aftersales",

  // ---- Creative ----
  "creative": "creative",
  "kurumsal-hediye": "creative_corporate_gift",
  "ui-ux-hizmeti": "creative_uiux",
  "video-produksiyon": "creative_video",

  // ---- Digital Analysis ----
  raporlama: "digital_analysis_reporting",
  "looker-studio": "digital_ads_reporting",
  "kvkk-veri-guvenligi": "digital_call_reporting",
  "satis-donusum": "digital_sales_analysis",
  "benchmark-analizi": "digital_market_research",

  // ---- SEM ----
  sem: "search_engine_marketing",
  "google-ads-yonetimi": "sem_google_ads",
  "youtube-reklam-yonetimi": "sem_youtube",
  "remarketing-ve-display": "sem_remarketing",
  "donusum-takibi-tag-manager": "sem_tag_manager",
  "reklam-raporlama": "sem_reporting",

  // ---- SMM ----
  smm: "social_media_marketing",
  "reels-video": "smm_reels",
  "sosyal-medya-reklamlari": "smm_ads",
  "icerik-uretimi": "smm_content",
  "planlama-strateji": "smm_planning",
  "analiz-raporlama": "smm_reporting",

  // ---- Software ----
  yazilim: "information_technology_software",
  "web-sitesi-gelistirme": "software_website",
  "bakim-ve-destek": "software_maintenance",
  "sunucu-guvenlik": "software_server",
  "cms-entegrasyonu": "software_cms",
  "kvkk-uyum-hizmeti": "software_kvkk",

  // ---- Hotel ----
  otel: "hotel",
  "otel/seo": "hotel_seo",
  "otel/sosyal-medya": "hotel_social",
  "otel/reklam-yonetimi": "hotel_ads",
  "otel/ota-yonetimi": "hotel_ota",
  "otel/pms-entegrasyonu": "hotel_pms",
  "otel/cagri-merkezi": "hotel_callcenter",
};

// Hizmet kök segmentleri (ana departmanlar ve TR karşılıkları)
const SERVICE_ROOT_SEGMENTS = new Set([
  "sem",
  "seo",
  "smm",
  "software",
  "creative",
  "callcenter",
  "pms",
  "digitalAnalysis",
  "yazilim",
  "otel",
  "cagri-merkezi",
  "raporlama",
  "pms-ota",
]);

// slug → okunabilir metin fallback'i
function slugToLabel(slug) {
  return slug
    .split("/")
    .pop()
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const AutoBreadcrumbsWhite = ({ className = "" }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const tHeader = useTranslations("Header");

  if (!pathname) return null;

  const segments = pathname.split("/").filter(Boolean);
  if (!segments.length) return null;

  // ilk segment locale, onu at
  const [, ...rest] = segments;

  const items = [];

  // 1) Home
  items.push({
    href: `/${locale}`,
    label: tHeader("home"),
  });

  // 2) Gerekirse "Hizmetlerimiz" crumb'ını en başta enjekte et
  const hasServicesSegment = rest.includes("Services");
  const firstServiceIndex = rest.findIndex((seg) =>
    SERVICE_ROOT_SEGMENTS.has(seg)
  );

  if (!hasServicesSegment && firstServiceIndex !== -1) {
    items.push({
      href: `/${locale}/Services`,
      label: tHeader("services"), // Header.json → "Hizmetlerimiz"
    });
  }

  // 3) Diğer segmentler
  rest.forEach((segment, index) => {
    const isLast = index === rest.length - 1;

    const href = `/${[locale, ...rest.slice(0, index + 1)].join("/")}`;

    // "otel/seo" gibi birleşik key de deneyelim
    const joinedKey = rest.slice(0, index + 1).join("/");
    const mapKey =
      SEGMENT_TO_HEADER_KEY[joinedKey] ??
      SEGMENT_TO_HEADER_KEY[segment] ??
      null;

    let label;
    if (mapKey) {
      try {
        label = tHeader(mapKey);
      } catch {
        label = slugToLabel(segment);
      }
    } else {
      label = slugToLabel(segment);
    }

    items.push({
      href: isLast ? undefined : href,
      label,
    });
  });

  if (!items.length) return null;

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={`w-[100%] md:w-[94%] lg:w-[88%] flex justify-start rounded-2xl bg-[#29194f]  ${className}`}
      >
        <div className="gradient-border-nav inline-flex w-full min-w-[370px]">
          <ol className="flex flex-wrap items-center gap-[2px] lg:gap-1 px-2 md:px-3 py-1.5 text-[12px] lg:text-[14px] font-medium text-white bg-transparent w-full font-inter24">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li
                  key={`${item.href ?? "current"}-${index}`}
                  className="flex items-center gap-[2px] lg:gap-1"
                >
                  {index !== 0 && (
                    <span className="text-white/80 mx-1 font-semibold text-[18px] lg:text-[20px]">›</span>
                  )}

                  {isLast || !item.href ? (
                    <span className="px-[6px] lg:px-2 py-0.5 rounded-full bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] text-[12px] lg:text-[14px] text-white shadow-sm">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-[4px] lg:px-2 py-0.5 rounded-full bg-white/5 text-white/90 text-[12px] lg:text-[14px]  hover:bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>

      <style jsx>{`
        .gradient-border-nav {
          width: 80vw;
          border-radius: 999px;
          position: relative;
       
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .gradient-border-nav::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 999px;
          padding: 0.5px;
         
          background-size: 100%;
          background-position: 50% 50%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default AutoBreadcrumbsWhite;
