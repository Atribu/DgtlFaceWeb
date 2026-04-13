// app/sitemap.js
export const revalidate = 86400;
export const runtime = "nodejs";

import { routing } from "@/i18n/routing";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import { BLOG_MAP } from "@/app/[locale]/(blog)/[segment]/blog/blogMap";
import { buildFaqHrefBySlug } from "@/app/lib/faq-url";
import {
  buildLocalizedBlogDetailPath,
  buildLocalizedBlogListingPath,
} from "@/app/lib/blog-route-segments";
import { getBlogPostKeySet, getBlogPostSummaries } from "@/app/lib/get-blog-posts";
import { getSiteUrl } from "@/app/lib/site-url";

const BASE_URL = getSiteUrl();

const TURKISH_MONTHS = {
  ocak: 0,
  subat: 1,
  "şubat": 1,
  mart: 2,
  nisan: 3,
  mayis: 4,
  mayıs: 4,
  haziran: 5,
  temmuz: 6,
  agustos: 7,
  ağustos: 7,
  eylul: 8,
  eylül: 8,
  ekim: 9,
  kasim: 10,
  kasım: 10,
  aralik: 11,
  aralık: 11,
};

function toEntry(url, { freq = "weekly", priority = 0.6, lastModified } = {}) {
  const entry = {
    url,
    changeFrequency: freq,
    priority,
  };

  if (lastModified instanceof Date && !Number.isNaN(lastModified.getTime())) {
    entry.lastModified = lastModified;
  }

  return entry;
}

function isDynamicPath(path) {
  return path.includes("[") || path.includes("]");
}

function normalizePath(path) {
  return path.startsWith("/") ? path : `/${path}`;
}

function buildLocalizedUrl(locale, localizedPath) {
  const normalizedPath = normalizePath(localizedPath);
  return normalizedPath === "/"
    ? `${BASE_URL}/${locale}`
    : `${BASE_URL}/${locale}${normalizedPath}`;
}

// Türkçe yorum: Şimdilik pratik çözüm olarak -faq ile biten slug'ları EN kabul ediyoruz.
function isEnglishFaqSlug(slug) {
  return slug.endsWith("-faq");
}

function buildBlogSlugLookup(summaries = []) {
  return summaries.reduce((acc, summary) => {
    if (summary?.id && summary?.dept && summary?.slug) {
      acc.set(`${summary.dept}:${summary.id}`, summary.slug);
    }

    return acc;
  }, new Map());
}

function parseSitemapDate(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }

  if (typeof value !== "string") {
    return null;
  }

  const normalizedValue = value.trim();

  if (!normalizedValue || normalizedValue === "—" || normalizedValue === "-") {
    return null;
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(normalizedValue)) {
    return new Date(`${normalizedValue}T00:00:00.000Z`);
  }

  const turkishDateMatch = normalizedValue.match(
    /^(\d{1,2})\s+([A-Za-zÇĞİIÖŞÜçğıiöşü]+)\s+(\d{4})$/
  );

  if (turkishDateMatch) {
    const [, dayString, monthString, yearString] = turkishDateMatch;
    const monthIndex = TURKISH_MONTHS[monthString.toLocaleLowerCase("tr-TR")];

    if (monthIndex !== undefined) {
      return new Date(Date.UTC(Number(yearString), monthIndex, Number(dayString)));
    }
  }

  const parsed = new Date(normalizedValue);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function getSummaryLastModified(summary) {
  return parseSitemapDate(summary?.updatedAt) || parseSitemapDate(summary?.publishedAt);
}

function buildBlogSummaryLookup(summaries = []) {
  return summaries.reduce((acc, summary) => {
    if (summary?.dept && summary?.id) {
      acc.set(`${summary.dept}:${summary.id}`, summary);
    }

    return acc;
  }, new Map());
}

function buildLatestDateBySegment(summaries = []) {
  return summaries.reduce((acc, summary) => {
    const lastModified = getSummaryLastModified(summary);
    if (!summary?.dept || !lastModified) {
      return acc;
    }

    const current = acc.get(summary.dept);
    if (!current || current < lastModified) {
      acc.set(summary.dept, lastModified);
    }

    return acc;
  }, new Map());
}

export default async function sitemap() {
  const pathnames = routing?.pathnames || {};
  const keys = Object.keys(pathnames);
  const [trBlogPostKeys, enBlogPostKeys, trBlogSummaries, enBlogSummaries] = await Promise.all([
    getBlogPostKeySet("tr"),
    getBlogPostKeySet("en"),
    getBlogPostSummaries("tr"),
    getBlogPostSummaries("en"),
  ]);
  const trBlogSummaryLookup = buildBlogSummaryLookup(trBlogSummaries);
  const enBlogSummaryLookup = buildBlogSummaryLookup(enBlogSummaries);
  const trLatestDateBySegment = buildLatestDateBySegment(trBlogSummaries);
  const enLatestDateBySegment = buildLatestDateBySegment(enBlogSummaries);
  const enBlogSlugLookup = buildBlogSlugLookup(enBlogSummaries);

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

        return toEntry(buildLocalizedUrl(locale, localizedPath), {
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
      const trListingPath = buildLocalizedBlogListingPath({
        locale: "tr",
        segment: department,
      });
      if (trListingPath) {
        entries.push(
          toEntry(`${BASE_URL}${trListingPath}`, {
            freq: "weekly",
            priority: 0.6,
            lastModified: trLatestDateBySegment.get(department),
          })
        );
      }
    }

    if (hasEnPosts) {
      const enListingPath = buildLocalizedBlogListingPath({
        locale: "en",
        segment: department,
      });
      if (enListingPath) {
        entries.push(
          toEntry(`${BASE_URL}${enListingPath}`, {
            freq: "weekly",
            priority: 0.6,
            lastModified: enLatestDateBySegment.get(department),
          })
        );
      }
    }

    for (const [slug, postKey] of Object.entries(slugsObj)) {
      if (trBlogPostKeys.has(postKey)) {
        const trDetailPath = buildLocalizedBlogDetailPath({
          locale: "tr",
          segment: department,
          slug,
        });
        if (!trDetailPath) continue;

        entries.push(
          toEntry(`${BASE_URL}${trDetailPath}`, {
            freq: "monthly",
            priority: 0.6,
            lastModified: getSummaryLastModified(
              trBlogSummaryLookup.get(`${department}:${postKey}`)
            ),
          })
        );
      }

      if (enBlogPostKeys.has(postKey)) {
        const localizedEnSlug = enBlogSlugLookup.get(`${department}:${postKey}`);
        if (!localizedEnSlug) continue;
        const enDetailPath = buildLocalizedBlogDetailPath({
          locale: "en",
          segment: department,
          slug: localizedEnSlug,
        });
        if (!enDetailPath) continue;

        entries.push(
          toEntry(`${BASE_URL}${enDetailPath}`, {
            freq: "monthly",
            priority: 0.6,
            lastModified: getSummaryLastModified(
              enBlogSummaryLookup.get(`${department}:${postKey}`)
            ),
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
