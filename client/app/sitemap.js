// app/sitemap.js
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

import { routing } from "@/i18n/routing";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import { BLOG_MAP } from "@/app/[locale]/(blog)/[segment]/blog/blogMap";
import { buildFaqHrefBySlug } from "@/app/lib/faq-url";

const BASE_URL = "https://www.dgtlface.com";

function toEntry(url, { freq = "weekly", priority = 0.6 } = {}) {
  return {
    url,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  };
}

function isDynamicPath(path) {
  return path.includes("[") || path.includes("]");
}

function normalizePath(path) {
  return path.startsWith("/") ? path : `/${path}`;
}

// Türkçe yorum: Şimdilik pratik çözüm olarak -faq ile biten slug'ları EN kabul ediyoruz.
function isEnglishFaqSlug(slug) {
  return slug.endsWith("-faq");
}

export default function sitemap() {
  const pathnames = routing?.pathnames || {};
  const keys = Object.keys(pathnames);

  // 1) TR static sayfalar
  const trStatic = keys
    .map((key) => {
      const item = pathnames[key];
      const trPath = typeof item === "string" ? item : item?.tr;
      if (!trPath) return null;

      if (isDynamicPath(trPath)) return null;
      if (trPath.includes("/antalya-")) return null;

      return toEntry(`${BASE_URL}/tr${normalizePath(trPath)}`);
    })
    .filter(Boolean);

  // 2) EN service sayfaları
  const enServiceStatic = keys
    .filter((key) => key === "/Services" || key.startsWith("/Services/"))
    .map((key) => {
      const item = pathnames[key];
      const enPath = typeof item === "string" ? item : item?.en;
      if (!enPath) return null;

      if (isDynamicPath(enPath)) return null;

      return toEntry(`${BASE_URL}/en${normalizePath(enPath)}`, {
        freq: "weekly",
        priority: key === "/Services" ? 0.8 : 0.7,
      });
    })
    .filter(Boolean);

  // 3) FAQ index sayfaları
  const faqIndexes = [
    toEntry(`${BASE_URL}/tr/sss`, { freq: "weekly", priority: 0.6 }),
    toEntry(`${BASE_URL}/en/faq`, { freq: "weekly", priority: 0.6 }),
  ];

  // 4) FAQ detail sayfaları
  const faqPages = Object.keys(FAQ_MAP).map((slug) => {
    const isEn = isEnglishFaqSlug(slug);
    const locale = isEn ? "en" : "tr";

    return toEntry(`${BASE_URL}${buildFaqHrefBySlug(slug, locale)}`, {
      freq: "weekly",
      priority: 0.6,
    });
  });

  // 5) Blog sayfaları
  const blogPages = Object.entries(BLOG_MAP).flatMap(([department, slugsObj]) =>
    Object.keys(slugsObj).map((slug) =>
      toEntry(`${BASE_URL}/tr/${department}/blog/${slug}`, {
        freq: "monthly",
        priority: 0.6,
      })
    )
  );

  // 6) Birleştir + dupe temizle
  const all = [...faqIndexes, ...trStatic, ...enServiceStatic, ...faqPages, ...blogPages];
  const uniq = new Map();

  for (const item of all) {
    uniq.set(item.url, item);
  }

  // 7) Özel ayarlar
  return Array.from(uniq.values()).map((x) => {
    if (x.url.endsWith("/tr")) {
      return { ...x, changeFrequency: "daily", priority: 0.9 };
    }
    if (x.url.endsWith("/tr/bloglar")) {
      return { ...x, changeFrequency: "daily", priority: 0.7 };
    }
    if (x.url.endsWith("/tr/hizmetlerimiz")) {
      return { ...x, changeFrequency: "weekly", priority: 0.8 };
    }
    if (x.url.endsWith("/en/services")) {
      return { ...x, changeFrequency: "weekly", priority: 0.8 };
    }
    if (x.url.endsWith("/tr/sss") || x.url.endsWith("/en/faq")) {
      return { ...x, changeFrequency: "weekly", priority: 0.6 };
    }
    return x;
  });
}
