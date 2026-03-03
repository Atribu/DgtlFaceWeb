import { existsSync } from "node:fs";
import path from "node:path";

const TR_SLUG_FILE_ALIAS = {
  "kurumsal-hediye-tasarimi-sss": "kurumsal-hediye-sss",
  "ui-ux-tasarim-sss": "ui-ux-hizmeti-sss",
  "video-produksiyon-sss": "video-ve-produksiyon-sss",
  "otel-ota-sss": "otel-ota-sss (1)",
};

const EN_SLUG_FILE_ALIAS = {
  "ads-reporting-faq": "performance-analysis-faq",
};

const DEFAULT_OG_VERSION = "20260303";

function getBaseDir(locale) {
  return locale === "en" ? "/og/sss/en" : "/og/sss";
}

function getLocalBaseDir(locale) {
  return locale === "en"
    ? path.join(process.cwd(), "public", "og", "sss", "en")
    : path.join(process.cwd(), "public", "og", "sss");
}

function normalizeSlug(locale, slug) {
  const raw = slug || (locale === "en" ? "faq" : "sss");
  if (locale === "tr") return TR_SLUG_FILE_ALIAS[raw] || raw;
  return EN_SLUG_FILE_ALIAS[raw] || raw;
}

function toFileName({ locale, segment, slug }) {
  const hasNestedSegment =
    locale === "en" &&
    segment &&
    segment !== slug &&
    !["faq", "services-faq"].includes(slug);

  return hasNestedSegment
    ? `dgtlface.com_${locale}_${segment}_${slug}.jpg`
    : `dgtlface.com_${locale}_${slug}.jpg`;
}

function toAbsoluteImageUrl(siteUrl, publicPath) {
  return `${siteUrl}${encodeURI(publicPath)}`;
}

function toOptimizedImageUrl({ siteUrl, publicPath, version }) {
  const encodedPath = encodeURIComponent(publicPath);
  const encodedVersion = encodeURIComponent(version || DEFAULT_OG_VERSION);
  // Türkçe yorum: OG görselini botlara daha hafif göndermek için Next image optimizer.
  return `${siteUrl}/_next/image?url=${encodedPath}&w=1200&q=70&v=${encodedVersion}`;
}

// FAQ sayfaları için og görsel URL'ini slug + locale (+segment) ile üretir.
// Dosya mevcut değilse locale'e göre default FAQ görseline düşer.
export function getFaqOgImageUrl({
  slug,
  locale,
  segment,
  siteUrl = "https://dgtlface.com",
  optimized = true,
  version = DEFAULT_OG_VERSION,
}) {
  const safeLocale = locale === "en" ? "en" : "tr";
  const normalizedSlug = normalizeSlug(safeLocale, slug);
  const baseDir = getBaseDir(safeLocale);

  const fileName = toFileName({
    locale: safeLocale,
    segment,
    slug: normalizedSlug,
  });

  const localFilePath = path.join(getLocalBaseDir(safeLocale), fileName);
  const resolvedFileName = existsSync(localFilePath)
    ? fileName
    : safeLocale === "en"
      ? "dgtlface.com_en_faq.jpg"
      : "dgtlface.com_tr_sss.jpg";

  const publicPath = `${baseDir}/${resolvedFileName}`;
  const absoluteImageUrl = toAbsoluteImageUrl(siteUrl, publicPath);

  if (!optimized) return absoluteImageUrl;

  return toOptimizedImageUrl({
    siteUrl,
    publicPath,
    version,
  });
}
