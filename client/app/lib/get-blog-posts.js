import "server-only";

import { BLOG_MAP } from "@/app/[locale]/(blog)/[segment]/blog/blogMap";
import { toCanonicalBlogSegment } from "@/app/lib/blog-route-segments";
import { getMediaBySlot } from "@/app/lib/blogMediaMap";

const BLOG_SEGMENTS = Object.freeze(Object.keys(BLOG_MAP));

const BLOG_IMPORTERS = {
  tr: {
    sem: () => import("@/messages/blog/tr/sem.json"),
    seo: () => import("@/messages/blog/tr/seo.json"),
    smm: () => import("@/messages/blog/tr/smm.json"),
    yazilim: () => import("@/messages/blog/tr/yazilim.json"),
    creative: () => import("@/messages/blog/tr/creative.json"),
    "cagri-merkezi": () => import("@/messages/blog/tr/cagri-merkezi.json"),
    "pms-ota": () => import("@/messages/blog/tr/pms-ota.json"),
    raporlama: () => import("@/messages/blog/tr/raporlama.json"),
    otel: () => import("@/messages/blog/tr/otel.json"),
  },
  en: {
    sem: () => import("@/messages/blog/en/sem.json"),
    seo: () => import("@/messages/blog/en/seo.json"),
    smm: () => import("@/messages/blog/en/smm.json"),
    yazilim: () => import("@/messages/blog/en/yazilim.json"),
    creative: () => import("@/messages/blog/en/creative.json"),
    "cagri-merkezi": () => import("@/messages/blog/en/cagri-merkezi.json"),
    "pms-ota": () => import("@/messages/blog/en/pms-ota.json"),
    raporlama: () => import("@/messages/blog/en/raporlama.json"),
    otel: () => import("@/messages/blog/en/otel.json"),
  },
};

const LEGACY_LOCALIZED_SLUG_ALIASES = {
  en: {
    "cagri-merkezi": {
      "4-language-call-center-what-is-how-it-works":
        "Blog4DilliCagriMerkeziNedirNasilCalisir",
      "tr-en-de-ru-cagri-script-design":
        "BlogTrEnDeRuCagriScriptTasarimi",
      "4-lingual-agent-selection-training-and-coaching":
        "Blog4DilliAgentSecimiEgitimVeKochluk",
      "hotel-reservation-call-center-what-is-akis":
        "BlogOtelRezervasyonCagriMerkeziNedirAkis",
    },
    creative: {
      "practical-guide-for-brands-for-color-and-typography-selection":
        "BlogRenkVeTipografiSecimiMarkalarIcinPratikRehber",
    },
    otel: {
      "cok-dilli-otel-seo-tr-en-de-ru-yapi":
        "BlogCokDilliOtelSeoTrEnDeRuYapi",
      "technical-hotel-seo-site-architecture-against-data-competition":
        "BlogOTARakabetineKarsiTeknikOtelSeoSiteMimarisi",
    },
    raporlama: {
      "looker-studio-architecture in multi-hotel-buildings":
        "BlogCokOtelliYapilardaLookerStudioMimarisi",
    },
    sem: {
      "youtube-advertising-tours-for-hotels":
        "BlogOtellerIcinYouTubeReklamTurleri",
    },
    seo: {
      "review-management-and-rating-hotel-local-seo-strategy":
        "BlogYorumYonetimiVePuanlamaOtelYerelSeoStratejisi",
    },
    smm: {
      "20-in-1-month-content-model-for-hotel-and-tourism-brands":
        "BlogOtelVeTurizmMarkalariIcin1Ayda20IcerikModeli",
      "social-media-strategy-how-to-write-framework":
        "BlogSosyalMedyaStratejisiNasilYazilirFramework",
    },
    yazilim: {
      "multi-lingual-corporate-web-site-planning-tr-en-de-ru":
        "BlogCokDilliKurumsalWebSitesiPlanlamaTrEnDeRu",
      "multi-lingual-cms-design-tr-en-de-ru-contents-managing-from-single-panel":
        "BlogCokDilliCmsTasarimiTrEnDeRuIcerikleriTekPaneldenYonetmek",
    },
  },
};

const TR_SLUG_BY_POST_KEY = Object.values(BLOG_MAP).reduce((acc, slugMap) => {
  for (const [slug, postKey] of Object.entries(slugMap || {})) {
    acc[postKey] = slug;
  }

  return acc;
}, {});

const segmentPostsCache = new Map();
const mergedPostsCache = new Map();
const summariesCache = new Map();
const postKeySetCache = new Map();
const localizedSlugMapCache = new Map();

function normalizeLocale(locale) {
  return locale === "en" ? "en" : "tr";
}

function normalizeSegment(segment) {
  const canonicalSegment = toCanonicalBlogSegment(segment);
  return canonicalSegment && BLOG_SEGMENTS.includes(canonicalSegment)
    ? canonicalSegment
    : null;
}

async function loadBlogSegment(locale, segment) {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedSegment = normalizeSegment(segment);

  if (!normalizedSegment) {
    return {};
  }

  const cacheKey = `${normalizedLocale}:${normalizedSegment}`;
  if (segmentPostsCache.has(cacheKey)) {
    return segmentPostsCache.get(cacheKey);
  }

  const importer = BLOG_IMPORTERS?.[normalizedLocale]?.[normalizedSegment];
  if (!importer) {
    segmentPostsCache.set(cacheKey, {});
    return {};
  }

  try {
    const mod = await importer();
    const posts = mod?.default || mod || {};
    segmentPostsCache.set(cacheKey, posts);
    return posts;
  } catch {
    segmentPostsCache.set(cacheKey, {});
    return {};
  }
}

async function getLocalizedSlugMap(locale, segment) {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedSegment = normalizeSegment(segment);

  if (!normalizedSegment) {
    return new Map();
  }

  const cacheKey = `${normalizedLocale}:${normalizedSegment}:slug-map`;
  if (localizedSlugMapCache.has(cacheKey)) {
    return localizedSlugMapCache.get(cacheKey);
  }

  const posts = await loadBlogSegment(normalizedLocale, normalizedSegment);
  const slugMap = new Map();

  for (const [postKey, post] of Object.entries(posts || {})) {
    const localizedSlug =
      typeof post?.slug === "string" ? post.slug.trim() : "";

    if (localizedSlug) {
      slugMap.set(localizedSlug, postKey);
    }
  }

  localizedSlugMapCache.set(cacheKey, slugMap);
  return slugMap;
}

function buildBlogSummary(postKey, post, segment) {
  const slug = post?.slug || "";
  const trSlug = TR_SLUG_BY_POST_KEY[postKey];
  const banner = getMediaBySlot(slug, "banner") || (trSlug ? getMediaBySlot(trSlug, "banner") : null);

  return {
    id: postKey,
    dept: segment || post?.department || "",
    subDept: post?.subDepartman || post?.subDepartment || "",
    slug,
    title: post?.title || "",
    excerpt: post?.h1?.intro || post?.excerpt || post?.h1Intro || "",
    publishedAt: post?.publishedAt || post?.byline?.publishedAt || "",
    updatedAt:
      post?.byline?.updatedAt ||
      post?.updatedAt ||
      post?.byline?.publishedAt ||
      post?.publishedAt ||
      "",
    readingTime: post?.byline?.readingTime || post?.readingTime || "",
    banner,
  };
}

export async function getBlogPosts(locale, options = {}) {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedSegment = normalizeSegment(options?.segment);

  if (normalizedSegment) {
    return loadBlogSegment(normalizedLocale, normalizedSegment);
  }

  const cacheKey = `${normalizedLocale}:all`;
  if (mergedPostsCache.has(cacheKey)) {
    return mergedPostsCache.get(cacheKey);
  }

  const chunks = await Promise.all(
    BLOG_SEGMENTS.map((segment) => loadBlogSegment(normalizedLocale, segment))
  );

  const merged = chunks.reduce(
    (acc, posts) => Object.assign(acc, posts || {}),
    {}
  );

  mergedPostsCache.set(cacheKey, merged);
  return merged;
}

export async function getBlogPostSummaries(locale, options = {}) {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedSegment = normalizeSegment(options?.segment);
  const cacheKey = `${normalizedLocale}:${normalizedSegment || "all"}`;

  if (summariesCache.has(cacheKey)) {
    return summariesCache.get(cacheKey);
  }

  const summaries = normalizedSegment
    ? Object.entries(await loadBlogSegment(normalizedLocale, normalizedSegment)).map(
        ([postKey, post]) => buildBlogSummary(postKey, post, normalizedSegment)
      )
    : (
        await Promise.all(
          BLOG_SEGMENTS.map(async (segment) => {
            const posts = await loadBlogSegment(normalizedLocale, segment);
            return Object.entries(posts).map(([postKey, post]) =>
              buildBlogSummary(postKey, post, segment)
            );
          })
        )
      ).flat();

  summariesCache.set(cacheKey, summaries);
  return summaries;
}

export async function getBlogPostByKey(locale, segment, postKey) {
  if (!postKey) return null;

  const posts = await loadBlogSegment(locale, segment);
  return posts?.[postKey] || null;
}

export async function getBlogPostByRoute(locale, segment, slug) {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedSegment = normalizeSegment(segment);
  const normalizedSlug = typeof slug === "string" ? slug.trim() : "";

  if (!normalizedSegment || !normalizedSlug) {
    return { postKey: null, post: null };
  }

  // Mevcut davranisi koru: once kalici TR route map'i denensin.
  let postKey = BLOG_MAP?.[normalizedSegment]?.[normalizedSlug] || null;

  // Eslestirme bulunamazsa locale'in kendi icerigindeki slug alanina bak.
  if (!postKey) {
    const localizedSlugMap = await getLocalizedSlugMap(
      normalizedLocale,
      normalizedSegment
    );
    postKey = localizedSlugMap.get(normalizedSlug) || null;
  }

  if (!postKey) {
    postKey =
      LEGACY_LOCALIZED_SLUG_ALIASES?.[normalizedLocale]?.[normalizedSegment]?.[
        normalizedSlug
      ] || null;
  }

  if (!postKey) {
    return { postKey: null, post: null };
  }

  const post = await getBlogPostByKey(normalizedLocale, normalizedSegment, postKey);
  return { postKey, post };
}

export async function getBlogPostKeySet(locale, options = {}) {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedSegment = normalizeSegment(options?.segment);
  const cacheKey = `${normalizedLocale}:${normalizedSegment || "all"}`;

  if (postKeySetCache.has(cacheKey)) {
    return postKeySetCache.get(cacheKey);
  }

  const posts = await getBlogPosts(normalizedLocale, {
    segment: normalizedSegment,
  });
  const keySet = new Set(Object.keys(posts));

  postKeySetCache.set(cacheKey, keySet);
  return keySet;
}
