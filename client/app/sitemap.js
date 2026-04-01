// app/sitemap.js
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

import { routing } from "@/i18n/routing";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import { BLOG_MAP } from "@/app/[locale]/(blog)/[segment]/blog/blogMap";
import { buildFaqHrefBySlug } from "@/app/lib/faq-url";
import { getBlogPostKeySet } from "@/app/lib/get-blog-posts";
import { getSiteUrl } from "@/app/lib/site-url";

const BASE_URL = getSiteUrl();

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

export default async function sitemap() {
  const pathnames = routing?.pathnames || {};
  const keys = Object.keys(pathnames);
  const [trBlogPostKeys, enBlogPostKeys] = await Promise.all([
    getBlogPostKeySet("tr"),
    getBlogPostKeySet("en"),
  ]);

  // 1) Static canonical sayfalar (TR + EN)
  const staticPages = ["tr", "en"].flatMap((locale) =>
    keys
      .map((key) => {
        const item = pathnames[key];
        const localizedPath = typeof item === "string" ? item : item?.[locale];
        if (!localizedPath) return null;
        if (isDynamicPath(localizedPath)) return null;

        const isServicesHub = key === "/Services";
        const isServiceDetail = key.startsWith("/Services/");

        return toEntry(`${BASE_URL}/${locale}${normalizePath(localizedPath)}`, {
          freq: isServicesHub || isServiceDetail ? "weekly" : "monthly",
          priority: isServicesHub ? 0.8 : isServiceDetail ? 0.7 : 0.6,
        });
      })
      .filter(Boolean)
  );

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

  // 5) Blog liste + detail sayfaları
  const blogPages = Object.entries(BLOG_MAP).flatMap(([department, slugsObj]) => {
    const entries = [];
    const postKeys = Object.values(slugsObj);
    const hasTrPosts = postKeys.some((postKey) => trBlogPostKeys.has(postKey));
    const hasEnPosts = postKeys.some((postKey) => enBlogPostKeys.has(postKey));

    if (hasTrPosts) {
      entries.push(
        toEntry(`${BASE_URL}/tr/${department}/bloglar`, {
          freq: "weekly",
          priority: 0.6,
        })
      );
    }

    if (hasEnPosts) {
      entries.push(
        toEntry(`${BASE_URL}/en/${department}/bloglar`, {
          freq: "weekly",
          priority: 0.6,
        })
      );
    }

    for (const [slug, postKey] of Object.entries(slugsObj)) {
      if (trBlogPostKeys.has(postKey)) {
        entries.push(
          toEntry(`${BASE_URL}/tr/${department}/blog/${slug}`, {
            freq: "monthly",
            priority: 0.6,
          })
        );
      }

      if (enBlogPostKeys.has(postKey)) {
        entries.push(
          toEntry(`${BASE_URL}/en/${department}/blog/${slug}`, {
            freq: "monthly",
            priority: 0.6,
          })
        );
      }
    }

    return entries;
  });

  // 6) Birleştir + dupe temizle
  const all = [...faqIndexes, ...staticPages, ...faqPages, ...blogPages];
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
