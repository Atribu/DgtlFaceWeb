"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { useMessages, useLocale } from "next-intl";
import {
  FAQ_BANNER_MAP,
  MAIN_SERVICES_CHIPS,
  getFaqBannerAsset,
} from "@/app/lib/faqBannerConfig";
import { usePathname, useRouter } from "next/navigation";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import { FAQ_SLUG_DEPT_SEGMENT_MAP } from "@/app/[locale]/faqRouteMap";

function getMsgByPath(obj, path) {
  if (!obj || !path) return undefined;
  return path.split(".").reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
}


function getFaqIndexHref(locale) {
  return `/${locale}/${locale === "en" ? "faq" : "sss"}`;
}

// ✅ Senin yapın: EN = /en/services-faq (tek segment)
function getServicesFaqHref(locale) {
  return `/${locale}/${locale === "en" ? "services-faq" : "hizmetlerimiz-sss"}`;
}



// Türkçe yorum: "/seo-sss" gibi değerler gelirse baştaki "/" kaldır
function cleanSlug(input) {
  return String(input || "").replace(/^\/+/, "");
}

// Türkçe yorum: Aynı namespace'in locale'e göre doğru slug'ını bul
function findSlugByNs(ns, locale) {
  if (!ns) return null;

  // TR: -sss, EN: -faq
  const suffix = locale === "en" ? "-faq" : "-sss";

  // Türkçe yorum: Aynı ns'e ait slug'lar içinden locale suffix'li olanı seç
  const match = Object.keys(FAQ_MAP || {}).find(
    (slug) => FAQ_MAP[slug] === ns && slug.endsWith(suffix)
  );

  return match || null;
}


// Türkçe yorum: EN'de TR slug geldiyse EN slug'a çevir (yazılım altları vb.)
const FAQ_SLUG_ALIAS_MAP = {
  en: {
    "yazilim-sss": "software-development-sss",
    "web-sitesi-gelistirme-sss": "website-and-software-sss",
    "cms-entegrasyonu-sss": "cms-installation-sss",
    "kvkk-uyum-hizmeti-sss": "kvkk-compliance-service-sss",
    "sunucu-guvenlik-sss": "server-management-sss",
    "bakim-destek-sss": "website-maintenance-sss",
  },
};

// Türkçe yorum: EN slug -> TR slug (config lookup için)
const FAQ_SLUG_REVERSE_ALIAS_MAP = {
  en: Object.fromEntries(
    Object.entries(FAQ_SLUG_ALIAS_MAP.en || {}).map(([trSlug, enSlug]) => [enSlug, trSlug])
  ),
};

function canonicalSlugForConfig(slug, locale) {
  // Türkçe yorum: EN slug geldiyse TR karşılığını bul (bannerConfig TR slug kullanıyor)
  return FAQ_SLUG_REVERSE_ALIAS_MAP?.[locale]?.[slug] || slug;
}


function normalizeSlugByLocale(slug, locale) {
  return FAQ_SLUG_ALIAS_MAP?.[locale]?.[slug] || slug;
}

function buildFaqHrefBySlug(slug, locale) {
  const normalizedSlug = normalizeSlugByLocale(slug, locale);

   // Türkçe yorum: root sayfalar
  if (normalizedSlug === "sss" || normalizedSlug === "faq") {
    return `/${locale}/${locale === "en" ? "faq" : "sss"}`;
  }

  // Türkçe yorum: services root (senin özel kuralın)
  if (normalizedSlug === "hizmetlerimiz-sss" || normalizedSlug === "services-faq") {
    return `/${locale}/${locale === "en" ? "services-faq" : "hizmetlerimiz-sss"}`;
  }

  const deptSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[normalizedSlug];

  // ✅ KRİTİK: Ana departman slug'ı ise tekrar segment ekleme
  // Örn: deptSegment="social-media-management", slug="social-media-management-faq"
  const suffix = locale === "en" ? "-faq" : "-sss";
  const isDeptRootSlug = deptSegment && normalizedSlug === `${deptSegment}${suffix}`;

  // Türkçe yorum: ana departmanlar tek segment olmalı
  if (isDeptRootSlug) {
    return `/${locale}/${normalizedSlug}`;
  }


  // Türkçe yorum: dept segment varsa /en/<segment>/<slug>
  if (deptSegment) return `/${locale}/${deptSegment}/${normalizedSlug}`;

  // Türkçe yorum: root sayfalar
  if (normalizedSlug === "sss" || normalizedSlug === "faq") {
    return `/${locale}/${locale === "en" ? "faq" : "sss"}`;
  }
  if (normalizedSlug === "hizmetlerimiz-sss") {
    return `/${locale}/${locale === "en" ? "services/faq" : "hizmetlerimiz-sss"}`;

  }

  return `/${locale}/${normalizedSlug}`;
}



const HEADING_KEY_RE =
  /(^|\.)(h\d+|title|title\d+|heading|heading\d+|header|header\d+|services_title)$/i;

const QUESTION_KEY_RE =
  /(^|\.)sections\.[^.]+\.items\.\d+\.q$/i;

function flattenMessages(obj, prefix = "", out = []) {
  for (const [k, v] of Object.entries(obj || {})) {
    const nextKey = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") out.push({ key: nextKey, text: v });
    else if (v && typeof v === "object") flattenMessages(v, nextKey, out);
  }
  return out;
}

function keyToHref(key, nsToSlug, locale) {
  const parts = key.split(".");
  const ns = parts[0];
const rawSlug = nsToSlug[ns];
const slug = normalizeSlugByLocale(rawSlug, locale);
  if (!slug) return null;

  // Get department segment for this slug based on locale
 const deptSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[locale]?.[slug];

  // Build base href with proper segment
  let baseHref = "";
  if (deptSegment) {
   baseHref = deptSegment ? `/${deptSegment}/${slug}` : `/${slug}`;
  } else {
    baseHref = `/${slug}`;
  }

  if (parts[1] === "h1") return baseHref;

  if (parts[1] === "sections" && parts[3] === "title") {
    const sectionKey = parts[2];
    return `${baseHref}#${sectionKey}`;
  }

  // sections.*.items.N.q → #sectionKey-q-N
  if (parts[1] === "sections" && parts[3] === "items" && parts[5] === "q") {
    const sectionKey = parts[2];
    const idx = parts[4];
    return `${baseHref}#${sectionKey}-q-${idx}`;
  }

  if (parts[1] === "aiCapsule") return `${baseHref}#aiCapsule`;
  if (parts[1] === "voiceSummary") return `${baseHref}#voiceSummary`;
  if (parts[1] === "voiceQueries") return `${baseHref}#voiceQueries`;
  if (parts[1] === "intro") return `${baseHref}#intro`;

  return baseHref;
}

export default function SearchBanner({ faqSlug }) {
  const pathname = usePathname();
  const router = useRouter();

  const locale = useLocale();
  const messages = useMessages();
  const [q, setQ] = useState("");

  // ns -> slug map (FaqBacklink -> backlink-sss gibi)
  const NS_TO_SLUG = useMemo(() => {
  const inv = {};
  for (const [slug, ns] of Object.entries(FAQ_MAP || {})) {
    // Türkçe yorum: sadece o locale'e ait slug'ı ters map'e yaz
    if (locale === "en") {
      if (slug.endsWith("-faq")) inv[ns] = slug;
    } else {
      if (slug.endsWith("-sss")) inv[ns] = slug;
    }
  }
  return inv;
}, [locale]);


// pathname'den slug çek (son segment)
const resolvedSlug = useMemo(() => {
  if (faqSlug) return faqSlug;
  const parts = pathname.split("/").filter(Boolean);
  return parts[parts.length - 1];
}, [faqSlug, pathname]);

// Bu slug'ın namespace'i
const resolvedNs = useMemo(() => {
  return FAQ_MAP?.[resolvedSlug] || null;
}, [resolvedSlug]);

// ✅ Config (banner map / asset map) TR slug ile çalışıyor
const resolvedConfigSlugTR = useMemo(() => {
  // aynı ns'in TR slug'ını bul (mutlaka -sss olan)
  return findSlugByNs(resolvedNs, "tr") || "sss";
}, [resolvedNs]);


  // ✅ config’ler için canonical slug
const resolvedSlugKey = useMemo(() => {
  return canonicalSlugForConfig(resolvedSlug, locale);
}, [resolvedSlug, locale]);

const isFaqRoot = resolvedConfigSlugTR === "sss";
const isServicesRoot = resolvedConfigSlugTR === "hizmetlerimiz-sss" || resolvedSlug === "services-faq";
const isRootMode = isFaqRoot || isServicesRoot;


const chipConf = FAQ_BANNER_MAP[resolvedConfigSlugTR] || { mode: "main" };
const chips = chipConf.mode === "children" ? chipConf.chips : MAIN_SERVICES_CHIPS;


  // Search index with locale-aware hrefs
  const searchIndex = useMemo(() => {
    const flat = flattenMessages(messages);

    return flat
      .filter((x) => HEADING_KEY_RE.test(x.key) || QUESTION_KEY_RE.test(x.key))
      .map((x) => {
        const href = keyToHref(x.key, NS_TO_SLUG, locale);
        if (!href) return null;

        return {
          key: x.key,
          text: x.text,
          href,
          kind: QUESTION_KEY_RE.test(x.key) ? "q" : "heading",
        };
      })
      .filter(Boolean);
  }, [messages, NS_TO_SLUG, locale]);

  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: ["text"],
      threshold: 0.33,
      ignoreLocation: true,
      shouldSort: true,
      includeScore: true,
    });
  }, [searchIndex]);

  const results = useMemo(() => {
    const query = q.trim();
    if (query.length < 3) return [];

    return fuse
      .search(query)
      .map((r) => {
        const boost = r.item.kind === "q" ? 0.85 : 1.0;
        return { item: r.item, score: (r.score ?? 1) * boost };
      })
      .sort((a, b) => a.score - b.score)
      .slice(0, 10)
      .map((x) => x.item);
  }, [q, fuse]);

  const bannerImg = getFaqBannerAsset(locale, resolvedConfigSlugTR);


  // Locale-aware labels
  const labels = {
    tr: {
      title: "Sorularınızı Cevaplayalım",
      searchPlaceholder: "Ara: başlıklar ve sorular…",
      noResults: "Sonuç bulunamadı",
      faqGeneral: "SSS (Genel)",
      faqServices: "Hizmetlerimiz SSS",
      backToFaq: "SSS",
    },
    en: {
      title: "Let's Answer Your Questions",
      searchPlaceholder: "Search: titles and questions…",
      noResults: "No results found",
      faqGeneral: "FAQ (General)",
      faqServices: "Our Services FAQ",
      backToFaq: "FAQ",
    },
  };

  const t = labels[locale] || labels.tr;

  return (
    <div
      className="flex w-full items-center lg:items-end justify-center bg-[#547CCF]/10 min-h-[55vh] pt-[100px] lg:min-h-[64vh] xl:min-h-[68vh] lg:pt-[3vh] xl:pt-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg.src})` }}
    >
      <div className="flex flex-col items-center w-[97%] lg:w-[98%] xl:w-[82%] xl:max-w-[1120px] gap-5 lg:gap-8 lg:mb-10 xl:mb-16 2xl:mb-[11vh] 3xl:mb-[14vh] 4xl:mb-[200px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent font-semibold lg:font-bold">
          {t.title}
        </h2>

        {/* SEARCH */}
        <div className="relative max-w-[650px] w-full md:w-[48%] lg:w-[55%] xl:w-[70%] z-[60]">
          <div className="rounded-2xl bg-[#ffffff]/90 border border-[#140f25]/10 px-4 py-1 lg:py-2 xl:py-3 flex items-center gap-3">
            <span className="opacity-70">🔎</span>

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const first = results[0];
                  if (!first) return;
                  router.push(`/${locale}${first.href}`);
                  setQ("");
                }
              }}
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent outline-none text-[#547CCF] placeholder:text-[#547CCF] placeholder:font-medium lg:text-[15px]"
            />
          </div>

          {q.trim().length >= 3 && (
            <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-[#140f25]/10 bg-[#0b0716]/90 backdrop-blur p-2 shadow-2xl">
              {results.length > 0 ? (
                results.map((item) => (
                  <Link
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    onClick={() => setQ("")}
                    className="block px-3 py-2 rounded-xl hover:bg-white/10"
                  >
                    <div className="text-white font-semibold text-sm">{item.text}</div>
                  </Link>
                ))
              ) : (
                <div className="px-3 py-2 text-white/70 text-sm">{t.noResults}</div>
              )}
            </div>
          )}
        </div>

        {/* FAQ / Services toggle (only on root pages) */}
        {isRootMode && (
          <div className="mt-1 flex items-center justify-center gap-2">
            <Link
              href={getFaqIndexHref(locale)}
              className={[
                "px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition",
                isFaqRoot
                  ? "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] text-white"
                  : "bg-white/15 text-white border border-white/20 hover:bg-white/20",
              ].join(" ")}
            >
              {t.faqGeneral}
            </Link>

            <Link
             href={getServicesFaqHref(locale)}
              className={[
                "px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition",
                isServicesRoot
                  ? "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] text-white"
                  : "bg-white/15 text-white border border-white/20 hover:bg-white/20",
              ].join(" ")}
            >
              {t.faqServices}
            </Link>
          </div>
        )}

        {/* Chips */}
        {(() => {
          const isRoot = isRootMode;
          const parentChip = !isRoot && chips?.length ? chips[0] : null;
          const childChips = !isRoot && chips?.length ? chips.slice(1) : chips;

          // Helper function to build chip href based on locale and slug
       const buildChipHref = (chip) => {
  // Türkçe yorum: config'ten slug veya href gelebilir
  const raw = chip?.slug || chip?.href || "";
  const baseSlug = cleanSlug(raw);

  // Türkçe yorum: TR slug bile gelse ns üzerinden locale slug'ı bul
  const ns = FAQ_MAP?.[baseSlug];
  const localeSlug = findSlugByNs(ns, locale) || baseSlug;

  return buildFaqHrefBySlug(localeSlug, locale);
};


          return (
            <div
              className={`mt-0 sm:mt-0 lg:-mt-7 items-center justify-center ${
                isRootMode
                  ? "w-[90%] md:w-[57%] lg:w-[90%] xl:w-[82%] 2xl:w-[82%] max-w-[1240px]"
                  : "w-full md:w-[57%] lg:w-[90%] xl:w-[82%] 2xl:w-[86%] max-w-[1000px]"
              }`}
            >
              {/* Back to FAQ + parent chip on subpages */}
              {!isRoot && (
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 lg:mt-10">
                  <Link
                    href={getFaqIndexHref(locale)}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] sm:text-[13px]
                               bg-white/15 text-white backdrop-blur border border-white/20 xl:text-[15px]
                               hover:bg-white/20 transition"
                    aria-label={`${t.backToFaq} sayfasına dön`}
                  >
                    <span className="text-[14px] leading-none">←</span>
                    <span className="font-semibold">{t.backToFaq}</span>
                  </Link>

                  {!isRoot && parentChip ? (
                    <div className="flex justify-center">
                      <Link
                        href={buildChipHref(parentChip)}
                        className="inline-flex items-center justify-center text-center
                                   text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px]
                                   font-semibold px-3 py-1.5 rounded-full
                                   bg-[#7b69cd]
                                   shadow-[0_18px_45px_rgba(0,0,0,0.25)]
                                   hover:opacity-95 transition whitespace-nowrap"
                      >
                       {getMsgByPath(messages, parentChip.labelKey) || parentChip.label}

                      </Link>
                    </div>
                  ) : null}
                </div>
              )}

              {/* Chips grid */}
              {(() => {
                const list = isRoot ? chips : childChips;
                const subColsByCount = {
                  4: "grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4",
                  5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5",
                  6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6",
                };
                const subCols =
                  subColsByCount[list.length] ||
                  "grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5";

                return (
                  <div
                    className={[
                      "grid gap-1 md:gap-2 lg:gap-[5px]",
                      isRoot
                        ? "grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 items-center justify-center"
                        : subCols,
                    ].join(" ")}
                  >
                {(isRoot ? chips : childChips).map((c, idx) => {
                  const list = isRoot ? chips : childChips;

                  // Center last row for 9 items in 5-column XL layout
                  const shouldCenterLastRow = isRoot && list.length === 9 && idx === 5;


const raw = c?.slug || c?.href || "";
const chipSlug = cleanSlug(raw);

// Türkçe yorum: active kontrolü de locale slug üzerinden yapılmalı
const ns = FAQ_MAP?.[chipSlug];
const activeSlug = findSlugByNs(ns, locale) || chipSlug;
const isActive = resolvedSlug === activeSlug;


                  return (
                    <Link
                     key={raw}               // key artık undefined olmaz
  href={buildChipHref(c)}
                      className={[
                        "flex items-center justify-center text-center rounded-full",
                        "border border-white/10 backdrop-blur",
                        "transition-all duration-300 ease-in-out whitespace-nowrap mt-[10px] lg:mt-5",
                        isRoot ? "xl:col-span-2" : "",

                        shouldCenterLastRow ? "xl:col-start-2" : "",

                        isRoot
                          ? "px-4 py-[6px] md:py-2 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] font-semibold bg-[#7b69cd]/80 hover:scale-[1.04]"
                          : "px-3 py-[6px] md:py-2 text-[11px] sm:text-[12px] md:text-[14px] xl:text-[15px] font-semibold bg-[#5592ce]",

                        isActive
                          ? "ring-1 ring-white/25 bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]"
                          : "bg-[#5592ce]",

                        "hover:bg-gradient-to-r hover:from-[#A754CF] hover:via-[#547CCF] hover:to-[#54B9CF]",
                      ].join(" ")}
                    >
                     {getMsgByPath(messages, c.labelKey) || c.label}
                    </Link>
                  );
                })}
                  </div>
                );
              })()}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
