"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { useMessages, useLocale } from "next-intl";
import {
  FAQ_BANNER_MAP,
  MAIN_SERVICES_CHIPS,
  FAQ_BANNER_ASSET_MAP,
} from "@/app/lib/faqBannerConfig";
import { usePathname, useRouter } from "next/navigation";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";

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

function keyToHref(key, nsToSlug) {
  const parts = key.split(".");
  const ns = parts[0];
  const slug = nsToSlug[ns];
  if (!slug) return null;

  if (parts[1] === "h1") return `/${slug}`;

  if (parts[1] === "sections" && parts[3] === "title") {
    const sectionKey = parts[2];
    return `/${slug}#${sectionKey}`;
  }

  // sections.*.items.N.q  →  #sectionKey-q-N
  if (parts[1] === "sections" && parts[3] === "items" && parts[5] === "q") {
    const sectionKey = parts[2];
    const idx = parts[4];
    return `/${slug}#${sectionKey}-q-${idx}`;
  }

  if (parts[1] === "aiCapsule") return `/${slug}#aiCapsule`;
  if (parts[1] === "voiceSummary") return `/${slug}#voiceSummary`;
  if (parts[1] === "voiceQueries") return `/${slug}#voiceQueries`;
  if (parts[1] === "intro") return `/${slug}#intro`;

  return `/${slug}`;
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
      inv[ns] = slug;
    }
    return inv;
  }, []);

  const resolvedSlug = useMemo(() => {
    if (faqSlug) return faqSlug;
    const parts = pathname.split("/").filter(Boolean);
    return parts[parts.length - 1];
  }, [faqSlug, pathname]);

  const isFaqRoot = resolvedSlug === "sss";
  const isServicesRoot = resolvedSlug === "hizmetlerimiz-sss";
  const isRootMode = isFaqRoot || isServicesRoot;

  const chipConf = FAQ_BANNER_MAP[resolvedSlug] || { mode: "main" };
  const chips = chipConf.mode === "children" ? chipConf.chips : MAIN_SERVICES_CHIPS;

  // ✅ Hem başlıklar hem soru q’ları index’e giriyor
  const searchIndex = useMemo(() => {
    const flat = flattenMessages(messages);

    return flat
      .filter((x) => HEADING_KEY_RE.test(x.key) || QUESTION_KEY_RE.test(x.key))
      .map((x) => {
        const href = keyToHref(x.key, NS_TO_SLUG);
        if (!href) return null;

        return {
          key: x.key,
          text: x.text,
          href,
          kind: QUESTION_KEY_RE.test(x.key) ? "q" : "heading",
        };
      })
      .filter(Boolean);
  }, [messages, NS_TO_SLUG]);

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

  const bannerImg = FAQ_BANNER_ASSET_MAP[resolvedSlug] || FAQ_BANNER_ASSET_MAP["sss"];

  return (
    <div
      className="flex w-full items-center lg:items-end justify-center bg-[#547CCF]/10 min-h-[55vh] pt-[100px] lg:min-h-[64vh] xl:min-h-[68vh] lg:pt-[3vh] xl:pt-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg.src})` }}
    >
      <div className="flex flex-col items-center w-[97%] lg:w-[98%] xl:w-[82%] xl:max-w-[1120px] gap-5 lg:gap-8 lg:mb-10 xl:mb-16 2xl:mb-[11vh] 3xl:mb-[14vh] 4xl:mb-[200px]">
        <h2 className="text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent font-semibold lg:font-bold">
          Sorularınızı Cevaplayalım
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
              placeholder="Ara: başlıklar ve sorular…"
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
                <div className="px-3 py-2 text-white/70 text-sm">Sonuç bulunamadı</div>
              )}
            </div>
          )}
        </div>

  {/* ✅ SSS / Hizmetlerimiz SSS toggle (sadece root sayfalarda göster) */}
{isRootMode && (
  <div className="mt-1 flex items-center justify-center gap-2">
    <Link
      href={`/${locale}/sss`}
      className={[
        "px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition",
        isFaqRoot
          ? "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] text-white"
          : "bg-white/15 text-white border border-white/20 hover:bg-white/20",
      ].join(" ")}
    >
      SSS (Genel)
    </Link>

    <Link
      href={`/${locale}/hizmetlerimiz-sss`}
      className={[
        "px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition",
        isServicesRoot
          ? "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] text-white"
          : "bg-white/15 text-white border border-white/20 hover:bg-white/20",
      ].join(" ")}
    >
      Hizmetlerimiz SSS
    </Link>
  </div>
)}



{/* #5490cf */}
        {/* chips */}
{(() => {
    const isRoot = isRootMode;
  const parentChip = !isRoot && chips?.length ? chips[0] : null;
  const childChips = !isRoot && chips?.length ? chips.slice(1) : chips;
  

  return (
    <div className={` mt-0 sm:mt-0 lg:-mt-7 items-center justify-center ${
    isRootMode ? " w-[90%] md:w-[57%] lg:w-[90%] xl:w-[82%] 2xl:w-[82%] max-w-[1240px]" : "w-full md:w-[57%] lg:w-[90%] xl:w-[82%] 2xl:w-[82%] max-w-[900px]"
  }`}>
      {/* ✅ ALT SAYFALARDA ÜST BAR: SSS’ye dön + grup etiketi */}
      {!isRoot && (
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 lg:mt-10">
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

           {!isRoot && parentChip ? (
        <div className="flex justify-center ">
          <Link
            href={`/${locale}${parentChip.href}`}
            className="inline-flex items-center justify-center text-center
                       text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px]
                       font-semibold px-3 py-1.5 rounded-full
                       bg-[#7b69cd]
                       shadow-[0_18px_45px_rgba(0,0,0,0.25)]
                       hover:opacity-95 transition whitespace-nowrap "
          >
            {parentChip.label}
          </Link>
        </div>
      ) : null}
        </div>
      )}

      {/* ✅ “Parent / Genel” chip’i (alt sayfalarda büyük göster) */}
     

      {/* ✅ GRID: root’ta büyük, alt sayfalarda daha sık ve küçük */}
      {/* ✅ GRID: root’ta büyük, alt sayfalarda daha sık ve küçük */}
<div
  className={[
    "grid gap-1 md:gap-2 lg:gap-[5px]",
    isRoot
      ? "grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 items-center justify-center"
      : "grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5",
  ].join(" ")}
>
  {(isRoot ? chips : childChips).map((c, idx) => {
    const list = isRoot ? chips : childChips;

    // ✅ XL’de 5 kolon varken 9 eleman (5+4) senaryosunda 2. satırı ortala
    // 6. elemanı (idx=5) 2. kolondan başlat → 2-5 arası yayılır, 4’lü blok ortalanır
    const shouldCenterLastRow =
      isRoot && list.length === 9 && idx === 5;

    const isActive = resolvedSlug === c.href.replace("/", "");

    return (
      <Link
        key={c.href}
        href={`/${locale}${c.href}`}
        className={[
          "flex items-center justify-center text-center rounded-full",
          "border border-white/10 backdrop-blur",
          "transition-all duration-300 ease-in-out whitespace-nowrap mt-[10px] lg:mt-5",
           isRoot ? "xl:col-span-2" : "",

          // ✅ sadece bu senaryoda devreye girsin
          shouldCenterLastRow ? "xl:col-start-2" : "",

          isRoot
            ? "px-4 py-[6px] md:py-2 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] font-semibold bg-[#7b69cd]/80 hover:scale-[1.04]"
            : "px-3 py-[6px] md:py-2 text-[11px] sm:text-[12px] md:text-[14px] xl:text-[15px] font-semibold bg-[#5592ce] ",

          isActive
            ? "ring-1 ring-white/25 bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]"
            : "bg-[#5592ce]",

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

      </div>
    </div>
  );
}
