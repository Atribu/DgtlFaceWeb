"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { useMessages, useLocale } from "next-intl";
import { FAQ_BANNER_MAP, MAIN_SERVICES_CHIPS, FAQ_BANNER_ASSET_MAP } from "@/app/lib/faqBannerConfig";
import { usePathname, useRouter } from "next/navigation";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import imgSem from "./images/sem/Sem.webp"

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

  const bannerImg =
  FAQ_BANNER_ASSET_MAP[resolvedSlug] || FAQ_BANNER_ASSET_MAP["sss"];


  return (
    <div className="flex w-full items-center lg:items-end justify-center bg-[#547CCF]/10 min-h-[55vh] pt-[100px] lg:min-h-[64vh] xl:min-h-[68vh] lg:pt-[3vh] xl:pt-0 bg-cover bg-center"   style={{ backgroundImage: `url(${bannerImg.src})` }}>
      <div className="flex flex-col items-center w-[97%] lg:w-[98%] xl:w-[92%] gap-5 lg:gap-10 lg:mb-10 xl:mb-16 2xl:mb-[11vh] 3xl:mb-[14vh] 4xl:mb-[200px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent font-semibold lg:font-bold">
          Sorularınızı Cevaplayalım
        </h2>

        {/* search */}
      {/* search */}
<div className="relative max-w-[650px] w-full md:w-[48%] lg:w-[55%] xl:w-[70%] z-[60]">
  <div className="rounded-2xl bg-[#547CCF]/10 border border-[#140f25]/10 px-4 py-1 lg:py-2 xl:py-3 flex items-center gap-3">
    <span className="opacity-70">🔎</span>

    <input
      value={q}
      onChange={(e) => setQ(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const first = results[0];
          if (!first) return;
          router.push(`/${locale}${first.href}`);
          setQ(""); // opsiyonel: aramayı temizle
        }
      }}
      placeholder="Ara: başlıklar…"
      className="w-full bg-transparent outline-none text-[#ffffff] placeholder:text-[#547CCF]"
    />
  </div>

  {/* ✅ Dropdown artık akışı bozmayacak */}
  {q.trim().length >= 3 && (
    <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-[#140f25]/10 bg-[#0b0716]/90 backdrop-blur p-2 shadow-2xl">
      {results.length > 0 ? (
        results.map((item) => (
          <Link
            key={item.key}
            href={`/${locale}${item.href}`}
            onClick={() => setQ("")} // ✅ tıklayınca kapanır
            className="block px-3 py-2 rounded-xl hover:bg-white/10"
          >
            <div className="text-white font-semibold text-sm">{item.text}</div>
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
        {/* chips */}
{(() => {
  const isRoot = resolvedSlug === "sss";

  // children modunda title var: "SEO", "SEM" vs.
  const groupTitle = chipConf?.title || "";

  // children listesinde genelde ilk chip "SEO (Genel)" gibi oluyor
  // Onu “üst seviye / parent” gibi ayrı göstereceğiz
  const parentChip = !isRoot && chips?.length ? chips[0] : null;
  const childChips = !isRoot && chips?.length ? chips.slice(1) : chips;

  return (
    <div className={` mt-3 sm:mt-3 lg:mt-4 items-center justify-center ${
    resolvedSlug === "sss" ? " w-[90%] md:w-[57%] lg:w-[90%] xl:w-[82%] 2xl:w-[82%] max-w-[1240px]" : "w-full md:w-[57%] lg:w-[90%] xl:w-[82%] 2xl:w-[82%] max-w-[900px]"
  }`}>
      {/* ✅ ALT SAYFALARDA ÜST BAR: SSS’ye dön + grup etiketi */}
      {!isRoot && (
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 ">
          {/* SSS’ye dön */}
          <Link
            href={`/${locale}/sss`}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] sm:text-[13px]
                       bg-white/15 text-white backdrop-blur border border-white/20 xl:text-[15px]
                       hover:bg-white/20 transition"
            aria-label="SSS sayfasına dön"
          >
            <span className="text-[14px] leading-none">←</span>
            <span className="font-semibold">SSS</span>
          </Link>

          {/* Grup etiketi (SEO/SEM...) — sadece görsel hiyerarşi */}
          {/* {groupTitle ? (
            <span
              className="inline-flex items-center rounded-full px-3 py-1.5 text-[12px] sm:text-[13px]
                         bg-[#140f25]/35 text-white/90 border border-white/10"
            >
              <span className="font-semibold tracking-wide">{groupTitle}</span>
            </span>
          ) : null} */}

           {!isRoot && parentChip ? (
        <div className="flex justify-center">
          <Link
            href={`/${locale}${parentChip.href}`}
            className="inline-flex items-center justify-center text-center
                       text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px]
                       font-semibold px-3 py-1.5 rounded-full
                       bg-[#7b69cd]
                       shadow-[0_18px_45px_rgba(0,0,0,0.25)]
                       hover:opacity-95 transition whitespace-nowrap"
          >
            {parentChip.label}
          </Link>
        </div>
      ) : null}
        </div>
      )}

      {/* ✅ “Parent / Genel” chip’i (alt sayfalarda büyük göster) */}
     

      {/* ✅ GRID: root’ta büyük, alt sayfalarda daha sık ve küçük */}
      <div
        className={[
          "grid gap-1 md:gap-2",
          isRoot
            ? // /sss: ana departmanlar
              "grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 "
            : 
              "grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 ",
        ].join(" ")}
      >
        {(isRoot ? chips : childChips).map((c) => {
          const isActive = resolvedSlug === c.href.replace("/", ""); 
          // Not: resolvedSlug = "seo-sss" gibi; href="/seo-sss"
          // İstersen daha net: isActive = `/${resolvedSlug}` === c.href

          return (
            <Link
              key={c.href}
              href={`/${locale}${c.href}`}
              className={[
                "flex items-center justify-center text-center rounded-full",
                "border border-white/10 backdrop-blur",
                "transition-all duration-300 ease-in-out whitespace-nowrap mt-[10px] lg:mt-5",
                isRoot
                  ? // root: biraz daha büyük
                    "px-4 py-[6px] md:py-2 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] font-semibold bg-[#7b69cd]/80 hover:scale-[1.04]"
                  : // alt: daha küçük
                    "px-3 py-[6px] md:py-2 text-[11px] sm:text-[12px] md:text-[14px] xl:text-[15px] font-semibold bg-white/10 hover:bg-white/15",
                // aktif chip vurgusu
                isActive
                  ? "ring-1 ring-white/25 bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]"
                  : "bg-[#5592ce]/80",
                "hover:bg-gradient-to-r hover:from-[#A754CF] hover:via-[#547CCF] hover:to-[#54B9CF]",
              ].join(" ")}
            >
              {c.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
})()}

       {/* <div
  className={`grid w-full md:w-[57%] lg:w-[80%] xl:w-full lg:grid-cols-5 2xl:flex text-white gap-2 md:gap-3 lg:gap-4 xl:gap-5 items-center justify-center mt-2 sm:mt-4 md:pt-10 lg:pt-0 lg:mt-5 xl:mt-10 sm:grid-cols-3 ${
    resolvedSlug === "sss" ? "grid-cols-3" : "grid-cols-2"
  }`}
>

          {chips.map((c) => (
            <Link
              key={c.href}
              href={`/${locale}${c.href}`}
              className="flex items-center justify-center text-center text-[12px] font-semibold lg:font-medium sm:text-[14px] xl:text-[16px] lg:py-2 lg:px-6 py-[9px] xl:py-3 px-4 xl:px-8 rounded-full bg-[#7b69cd] shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out whitespace-nowrap hover:bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]"
            >
              {c.label}
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
}
