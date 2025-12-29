"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLocale, useTranslations } from "next-intl";
import { FAQ_ROUTE_MAP } from "../../faqRouteMap";

function stripLocale(pathname, locale) {
  // ör: /tr/yazilim -> /yazilim
  if (!pathname) return "/";
  const prefix = `/${locale}`;
  return pathname.startsWith(prefix) ? pathname.slice(prefix.length) || "/" : pathname;
}

function findFaqTarget(pathNoLocale) {
  return FAQ_ROUTE_MAP.find((r) => r.match.test(pathNoLocale)) || null;
}

export default function FloatingFaqButton() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations(); // h1'leri göstermek istersen
  const pathNoLocale = stripLocale(pathname, locale);

  const target = useMemo(() => findFaqTarget(pathNoLocale), [pathNoLocale]);

  // Bu sayfanın SSS eşleşmesi yoksa butonu hiç göstermeyebilirsin
  if (!target?.slug) return null;

  const href = `/${locale}/${target.slug}`;
  const label = target.labelKey ? t(target.labelKey) : "SSS";

  return (
    <div className="fixed z-[999] right-4 bottom-4 md:right-6 md:bottom-6">
      <Link
        href={href}
        aria-label={`${label} sayfasına git`}
        className="group relative flex items-center gap-2 rounded-full px-[10px] py-[6px] shadow-[0_18px_45px_rgba(0,0,0,0.22)] bg-[#130116] border border-white/10 hover:opacity-95 transition"
      >
        {/* ikon baloncuk */}
        {/* yazı (mobilde kapatmak istersen hidden md:block yap) */}
        <span className="hidden md:block">
          <span className="block text-[12px] capitalize tracking-[0.07em] leading-none font-semibold font-inter bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-white">
            Sık Sorulan Sorular
          </span>
          {/* <span className="block text-[14px] font-semibold text-white leading-tight max-w-[220px] truncate">
            {label}
          </span> */}
        </span>

             <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-white/15">
          <span className="text-[22px] font-black bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent">
            ?
          </span>
        </span>

        {/* hover underline */}
        <span className="absolute left-2 right-2 -bottom-[6px] h-[2px] rounded-full bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] opacity-0 group-hover:opacity-80 transition" />
      </Link>
    </div>
  );
}
