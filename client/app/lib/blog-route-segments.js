const BLOG_ROUTE_SEGMENTS = {
  sem: { tr: "sem", en: "sem" },
  seo: { tr: "seo", en: "seo" },
  smm: { tr: "smm", en: "smm" },
  yazilim: { tr: "yazilim", en: "software" },
  creative: { tr: "creative", en: "creative" },
  "cagri-merkezi": { tr: "cagri-merkezi", en: "call-center" },
  "pms-ota": { tr: "pms-ota", en: "pms-ota" },
  raporlama: { tr: "raporlama", en: "digital-analysis" },
  otel: { tr: "otel", en: "hotel" },
};

const BLOG_SEGMENT_SERVICE_PATHS = {
  sem: "/Services/sem",
  seo: "/Services/seo",
  smm: "/Services/smm",
  yazilim: "/Services/software",
  creative: "/Services/creative",
  "cagri-merkezi": "/Services/callcenter",
  "pms-ota": "/Services/pms",
  raporlama: "/Services/digitalAnalysis",
  otel: "/Services/hotel",
};

const EXTERNAL_TO_CANONICAL_SEGMENT = Object.entries(BLOG_ROUTE_SEGMENTS).reduce(
  (acc, [canonicalSegment, localizedSegments]) => {
    acc.set(canonicalSegment, canonicalSegment);

    for (const localizedSegment of Object.values(localizedSegments || {})) {
      if (localizedSegment) {
        acc.set(localizedSegment, canonicalSegment);
      }
    }

    return acc;
  },
  new Map()
);

function normalizeBlogLocale(locale) {
  return locale === "en" ? "en" : "tr";
}

export function toCanonicalBlogSegment(segment) {
  if (typeof segment !== "string" || !segment.trim()) return null;
  return EXTERNAL_TO_CANONICAL_SEGMENT.get(segment.trim()) || null;
}

export function toLocalizedBlogSegment(segment, locale = "tr") {
  const canonicalSegment = toCanonicalBlogSegment(segment);
  if (!canonicalSegment) return null;

  return (
    BLOG_ROUTE_SEGMENTS?.[canonicalSegment]?.[normalizeBlogLocale(locale)] ||
    canonicalSegment
  );
}

export function buildLocalizedBlogDetailPath({ locale, segment, slug }) {
  const localizedSegment = toLocalizedBlogSegment(segment, locale);
  if (!localizedSegment || !slug) return null;
  return `/${normalizeBlogLocale(locale)}/${localizedSegment}/blog/${slug}`;
}

export function buildLocalizedBlogListingPath({ locale, segment }) {
  const localizedSegment = toLocalizedBlogSegment(segment, locale);
  if (!localizedSegment) return null;
  return `/${normalizeBlogLocale(locale)}/${localizedSegment}/bloglar`;
}

export function getBlogServiceInternalPath(segment) {
  const canonicalSegment = toCanonicalBlogSegment(segment);
  if (!canonicalSegment) return null;
  return BLOG_SEGMENT_SERVICE_PATHS[canonicalSegment] || null;
}

export { BLOG_ROUTE_SEGMENTS };
