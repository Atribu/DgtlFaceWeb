// app/[locale]/(faq)/utils/faqI18nRoutes.js

// 1) Dept segment çevirisi (URL'de görünen kısım)
export const DEPT_SEGMENT_I18N = {
  yazilim: { tr: "yazilim", en: "software-development" },
  // ileride ekle: seo, sem, smm, pms-ota, cagri-merkezi, raporlama, creative, otel...
};

// 2) FAQ slug çevirisi (URL'de görünen faq sayfası slug'ı)
// "kanonik" anahtar: TR slug (senin sistemindeki tek gerçek id)
export const FAQ_SLUG_I18N = {
  "yazilim-sss": { tr: "yazilim-sss", en: "software-development-faq" },
  "cms-entegrasyonu-sss": { tr: "cms-entegrasyonu-sss", en: "cms-integration-faq" },
  "web-sitesi-gelistirme-sss": { tr: "web-sitesi-gelistirme-sss", en: "website-development-faq" },
  "kvkk-uyum-hizmeti-sss": { tr: "kvkk-uyum-hizmeti-sss", en: "kvkk-compliance-faq" },
  "sunucu-guvenlik-sss": { tr: "sunucu-guvenlik-sss", en: "server-security-faq" },
  "bakim-destek-sss": { tr: "bakim-destek-sss", en: "maintenance-support-faq" },

  // rootlar
  "sss": { tr: "sss", en: "faq" },
  "hizmetlerimiz-sss": { tr: "hizmetlerimiz-sss", en: "services-faq" },
};

// --- reverse map'ler (EN slug -> TR slug) ---
const REVERSE_FAQ = Object.entries(FAQ_SLUG_I18N).reduce((acc, [trSlug, obj]) => {
  Object.entries(obj).forEach(([loc, locSlug]) => {
    acc[loc] ??= {};
    acc[loc][locSlug] = trSlug;
  });
  return acc;
}, {});

const REVERSE_DEPT = Object.entries(DEPT_SEGMENT_I18N).reduce((acc, [canon, obj]) => {
  Object.entries(obj).forEach(([loc, locSeg]) => {
    acc[loc] ??= {};
    acc[loc][locSeg] = canon;
  });
  return acc;
}, {});

// URL'den gelen slug'ı kanoniğe çevir
export function toCanonicalFaqSlug(routeSlug, locale = "tr") {
  if (!routeSlug) return null;
  return REVERSE_FAQ?.[locale]?.[routeSlug] || routeSlug; // TR zaten aynı
}

// kanonik slug -> locale slug
export function toLocaleFaqSlug(canonicalSlug, locale = "tr") {
  if (!canonicalSlug) return null;
  return FAQ_SLUG_I18N?.[canonicalSlug]?.[locale] || canonicalSlug;
}

// URL'den gelen dept segment -> kanonik dept
export function toCanonicalDeptSegment(routeDept, locale = "tr") {
  if (!routeDept) return null;
  return REVERSE_DEPT?.[locale]?.[routeDept] || routeDept; // TR zaten aynı
}

// kanonik dept -> locale dept segment
export function toLocaleDeptSegment(canonicalDept, locale = "tr") {
  if (!canonicalDept) return null;
  return DEPT_SEGMENT_I18N?.[canonicalDept]?.[locale] || canonicalDept;
}

// /{locale}/{dept}/{faq} üret (alt sayfa)
export function buildFaqChildHref({ locale, canonicalDept, canonicalFaqSlug }) {
  const dept = toLocaleDeptSegment(canonicalDept, locale);
  const slug = toLocaleFaqSlug(canonicalFaqSlug, locale);
  return `/${locale}/${dept}/${slug}`;
}

// /{locale}/{faq} üret (root FAQ sayfası)
export function buildFaqRootHref({ locale, canonicalFaqSlug }) {
  const slug = toLocaleFaqSlug(canonicalFaqSlug, locale);
  return `/${locale}/${slug}`;
}
