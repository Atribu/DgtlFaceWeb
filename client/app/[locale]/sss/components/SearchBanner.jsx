"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { useMessages, useLocale } from "next-intl";
import { FAQ_BANNER_MAP, MAIN_SERVICES_CHIPS } from "@/app/lib/faqBannerConfig";
import { usePathname } from "next/navigation";

const HEADING_KEY_RE =
  /(^|\.)(h\d+|title\d+|heading\d+|header\d+|services_title)$/i;

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

export default function SearchBanner({ faqSlug }) {
  const pathname = usePathname();

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
      .map((x) => ({ key: x.key, text: x.text, href: ROUTE_MAP[x.key], locale }))
      .filter((x) => Boolean(x.href));
  }, [messages, locale]);

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
    if (!query) return [];
    return fuse.search(query).slice(0, 8).map((r) => r.item);
  }, [q, fuse]);

  return (
    <div className="flex w-full items-center justify-center bg-[#547CCF]/10 min-h-[60vh] pt-[8vh]">
      <div className="flex flex-col items-center w-[90%] lg:w-[70%] max-w-[1990px] gap-5 lg:gap-10">
        <h2 className="text-[30px] lg:text-[56px] bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent font-semibold lg:font-bold">
          Sorularınızı Cevaplayalım
        </h2>

        {/* search */}
        <div className="w-full max-w-[820px]">
          <div className="rounded-2xl bg-[#547CCF]/10 border border-[#140f25]/10 px-4 py-3 flex items-center gap-3">
            <span className="opacity-70">🔎</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ara: başlıklar…"
              className="w-full bg-transparent outline-none text-[#140f25 placeholder:text-[#547CCF]"
            />
          </div>

          {results.length > 0 && (
            <div className="mt-3 rounded-2xl border border-[#140f25]/10 bg-[#0b0716]/80 backdrop-blur p-2">
              {results.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className="block px-3 py-2 rounded-xl hover:bg-white/10"
                >
                  <div className="text-white font-semibold text-sm">{item.text}</div>
                  <div className="text-white/60 text-xs">{item.key}</div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* chips */}
        <div className="grid grid-cols-2 w-full md:grid-cols-4 lg:flex text-white gap-2 md:gap-3 lg:gap-5 items-center justify-center">
          {chips.map((c) => (
            <Link
              key={c.href}
              href={`/${locale}${c.href}`}
              className="flex items-center justify-center text-center text-[16px] py-2 lg:py-3 px-4 lg:px-8 rounded-full bg-[#7b69cd] shadow-2xl hover:scale-110 transition-all duration-300 ease-in-out whitespace-nowrap hover:bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
