// app/sitemap.js
import { routing } from "@/i18n/routing";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import { BLOG_MAP } from "@/app/[locale]/(blog)/[segment]/blog/blogMap";
import { FAQ_SLUG_DEPT_SEGMENT_MAP } from "@/app/[locale]/faqRouteMap";

const BASE_URL = "https://www.dgtlface.com";

function toEntry(url, { freq = "weekly", priority = 0.6 } = {}) {
  return {
    url,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  };
}

export default function sitemap() {
  const pathnames = routing?.pathnames || {};
  const keys = Object.keys(pathnames);

  // 1) routing.js -> TR static sayfalar (dynamic pattern'leri at)
  const trStatic = keys
    .map((key) => {
      const item = pathnames[key];
      const trPath = typeof item === "string" ? item : item?.tr;
      if (!trPath) return null;

      // /[x] pattern'leri sitemap'e basma
      if (trPath.includes("[") || trPath.includes("]")) return null;

      // ✅ "antalya-" linkleri sitemap'e alma
      if (trPath.includes("/antalya-")) return null;

      const normalized = trPath.startsWith("/") ? trPath : `/${trPath}`;
      return toEntry(`${BASE_URL}/tr${normalized}`);
    })
    .filter(Boolean);

  // 2) SSS index
  const faqIndex = toEntry(`${BASE_URL}/tr/sss`, { freq: "weekly", priority: 0.6 });

  // 3) SSS sayfaları (dept’li/dept’siz doğru URL)
  const faqPages = Object.keys(FAQ_MAP).map((slug) => {
    const dept = FAQ_SLUG_DEPT_SEGMENT_MAP?.[slug];
    if (dept) return toEntry(`${BASE_URL}/tr/${dept}/${slug}`, { freq: "weekly", priority: 0.6 });
    return toEntry(`${BASE_URL}/tr/${slug}`, { freq: "weekly", priority: 0.6 });
  });

  // 4) Blog sayfaları
  const blogPages = Object.entries(BLOG_MAP).flatMap(([department, slugsObj]) =>
    Object.keys(slugsObj).map((slug) =>
      toEntry(`${BASE_URL}/tr/${department}/blog/${slug}`, { freq: "monthly", priority: 0.6 })
    )
  );

  // 5) Birleştir + dupe temizle
  const all = [faqIndex, ...trStatic, ...faqPages, ...blogPages];
  const uniq = new Map();
  for (const item of all) uniq.set(item.url, item);

  // 6) Özel ayarlar
  return Array.from(uniq.values()).map((x) => {
    if (x.url.endsWith("/tr")) return { ...x, changeFrequency: "daily", priority: 0.9 };
    if (x.url.endsWith("/tr/bloglar")) return { ...x, changeFrequency: "daily", priority: 0.7 };
    if (x.url.endsWith("/tr/hizmetlerimiz")) return { ...x, changeFrequency: "weekly", priority: 0.8 };
    return x;
  });
}
