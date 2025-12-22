"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { useMessages, useLocale } from "next-intl";
import { FAQ_BANNER_MAP, MAIN_SERVICES_CHIPS } from "@/app/lib/faqBannerConfig";
import { usePathname, useRouter } from "next/navigation";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import imgSem from "./images/sem/Sem.webp"
import imgGoogleAds from "./images/sem/Googleads.webp"
import imgAdsReport from "./images/sem/Reklamraporlama.webp"
import imgRemarketing from "./images/sem/RemarketingDisplay.webp"
import imgTagmanager from "./images/sem/tagmanager.webp"
import imgYoutubeads from "./images/sem/Youtubeads.webp"

const HEADING_KEY_RE =
  /(^|\.)(h\d+|title|title\d+|heading|heading\d+|header|header\d+|services_title)$/i;


const ROUTE_MAP = {
  // sen dolduruyorsun
};

function flattenMessages(obj, prefix = "", out = []) {
  for (const [k, v] of Object.entries(obj || {})) {
    const nextKey = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") out.push({ key: nextKey, text: v });
    else if (v && typeof v === "object") flattenMessages(v, nextKey, out);
  }
  return out;
}

function keyToAnchor(key) {
  // sections.generalQuestions.items.0.q  -> sections-generalQuestions-items-0-q
  return key.replace(/\./g, "-");
}

function keyToHref(key, nsToSlug) {
  // örn: "FaqCorporateGift.h1"
  // örn: "FaqCorporateGift.sections.generalQuestions.title"
  const parts = key.split(".");
  const ns = parts[0];
  const slug = nsToSlug[ns];
  if (!slug) return null;

  // sadece sayfaya gitsin
  if (parts[1] === "h1") return `/${slug}`;

  // sections.*.title ise anchor üretelim
  // "FaqCorporateGift.sections.generalQuestions.title" -> "#generalQuestions"
  if (parts[1] === "sections" && parts[3] === "title") {
    const sectionKey = parts[2];
    return `/${slug}#${sectionKey}`;
  }

  // toc/aiCapsule/voiceSummary vs istersen:
  // "FaqCorporateGift.aiCapsule.title" -> "#aiCapsule" gibi
  if (parts[1] === "aiCapsule") return `/${slug}#aiCapsule`;
  if (parts[1] === "voiceSummary") return `/${slug}#voiceSummary`;
  if (parts[1] === "voiceQueries") return `/${slug}#voiceQueries`;
  if (parts[1] === "intro") return `/${slug}#intro`;

  return `/${slug}`;
}


export default function SearchBanner({ faqSlug }) {
  const pathname = usePathname();
  const router = useRouter();

  const NS_TO_SLUG = useMemo(() => {
  const inv = {};
  for (const [slug, ns] of Object.entries(FAQ_MAP || {})) {
    inv[ns] = slug;
  }
  return inv;
}, []);

  const resolvedSlug = useMemo(() => {
    if (faqSlug) return faqSlug;
    const parts = pathname.split("/").filter(Boolean);
    return parts[parts.length - 1];
  }, [faqSlug, pathname]);

  const chipConf = FAQ_BANNER_MAP[resolvedSlug] || { mode: "main" };
  const chips =
    chipConf.mode === "children" ? chipConf.chips : MAIN_SERVICES_CHIPS;

  const locale = useLocale();
  const messages = useMessages();
  const [q, setQ] = useState("");

const headingIndex = useMemo(() => {
  const flat = flattenMessages(messages);

  return flat
    .filter((x) => HEADING_KEY_RE.test(x.key))
    .map((x) => {
      const href = keyToHref(x.key, NS_TO_SLUG);
      return { key: x.key, text: x.text, href, locale };
    })
    .filter((x) => Boolean(x.href));
}, [messages, locale, NS_TO_SLUG]);


  const fuse = useMemo(
    () =>
      new Fuse(headingIndex, {
        keys: ["text"],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [headingIndex]
  );

const results = useMemo(() => {
  const query = q.trim();
  if (query.length < 3) return []; // ✅ 3 harften önce liste yok
  return fuse.search(query).slice(0, 8).map((r) => r.item);
}, [q, fuse]);


  return (
    <div className="flex w-full items-center justify-center bg-[#547CCF]/10 min-h-[55vh] pt-[100px] lg:min-h-[64vh] xl:min-h-[68vh] lg:pt-[10vh] xl:pt-[15vh] bg-cover bg-center"   style={{ backgroundImage: `url(${imgGoogleAds.src})` }}>
      <div className="flex flex-col items-center w-[94%] lg:w-[85%] xl:w-[70%] max-w-[1990px] gap-5 lg:gap-10">
        <h2 className="text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent font-semibold lg:font-bold">
          Sorularınızı Cevaplayalım
        </h2>

        {/* search */}
        <div className="max-w-[650px] w-full md:w-[48%] lg:w-[55%] xl:w-[70%]">
          <div className="rounded-2xl bg-[#547CCF]/10 border border-[#140f25]/10 px-4 py-1 lg:py-2 xl:py-3 flex items-center gap-3">
            <span className="opacity-70">🔎</span>
    <input
  value={q}
  onChange={(e) => setQ(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      const first = results[0];
      if (!first) return;
      router.push(`/${locale}${pathname}${first.href}`);
    }
  }}
  placeholder="Ara: başlıklar…"
  className="w-full bg-transparent outline-none text-[#140f25] placeholder:text-[#547CCF]"
/>

          </div>

           {q.trim().length >= 3 && (
    <div className="mt-3 rounded-2xl border border-[#140f25]/10 bg-[#0b0716]/80 backdrop-blur p-2">
      {results.length > 0 ? (
        results.map((item) => (
          <Link
            key={item.key}
          href={`/${locale}${item.href}`}
            className="block px-3 py-2 rounded-xl hover:bg-white/10"
          >
            <div className="text-white font-semibold text-sm">{item.text}</div>
            {/* <div className="text-white/60 text-xs">{item.key}</div> */}
          </Link>
        ))
      ) : (
        <div className="px-3 py-2 text-white/70 text-sm">Sonuç bulunamadı</div>
      )}
    </div>
  )}
        </div>
{/* #5490cf */}
        {/* chips */}
        <div className="grid grid-cols-3 w-full md:w-[57%] lg:w-[80%] xl:w-full lg:grid-cols-5 xl:flex text-white gap-2 md:gap-3 lg:gap-4 xl:gap-5 items-center justify-center mt-2 sm:mt-4 md:pt-10 lg:pt-0 lg:mt-5 xl:mt-10">
          {chips.map((c) => (
            <Link
              key={c.href}
              href={`/${locale}${c.href}`}
              className="flex items-center justify-center text-center text-[12px] font-semibold lg:font-medium sm:text-[14px] xl:text-[16px] lg:py-2 lg:px-6 py-[9px] xl:py-3 px-4 xl:px-8 rounded-full bg-[#7b69cd] shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out whitespace-nowrap hover:bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
