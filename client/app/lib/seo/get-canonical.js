// lib/seo/get-canonical.js
import { routing } from "@/i18n/routing";

export function getBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  );
}

export function getLocalizedPath(pathnameKey, locale) {
  const mapped = routing?.pathnames?.[pathnameKey]?.[locale];
  // mapped varsa "/sem/..." gibi gelir. yoksa fallback: pathnameKey
  return mapped || pathnameKey;
}

export function getCanonicalUrl(pathnameKey, locale) {
  const base = getBaseUrl();
  const localizedPath = getLocalizedPath(pathnameKey, locale);
  // localePrefix always → "/tr" + localizedPath
  return `${base}/${locale}${localizedPath}`;
}
