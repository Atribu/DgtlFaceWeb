// app/[locale]/sitemap.xml/route.js
import { NextResponse } from "next/server";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap"; // <- path'i projene göre düzelt
import { routing } from "@/i18n/routing"; // <- senin routing.js nerede ise ona göre düzelt

const SITE_URL = "https://www.dgtlface.com";

// routing.js içindeki pathnames'ten TR yolları çıkarır
function getTrPathsFromRouting() {
  const pathnames = routing?.pathnames || {};
  const out = [];

  for (const key of Object.keys(pathnames)) {
    const conf = pathnames[key];
    const trPath = typeof conf === "string" ? conf : conf?.tr;
    if (!trPath) continue;

    // trPath zaten "/anasayfa" gibi gelir; locale prefixini biz ekleyeceğiz
    out.push(trPath.startsWith("/") ? trPath : `/${trPath}`);
  }

  return out;
}

// FAQ slug'larını /tr/{slug} şeklinde üretir
function getTrFaqSlugPaths() {
  return Object.keys(FAQ_MAP || {}).map((slug) => `/tr/${slug}`);
}

function escapeXml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildXml(urls) {
  const now = new Date().toISOString();

  const items = urls
    .map((path) => {
      const loc = `${SITE_URL}${path}`;
      return `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${now}</lastmod>
  </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

export async function GET(_req, { params }) {
  const locale = params?.locale;

  // Sadece TR sitemap istiyorsan:
  if (locale !== "tr") {
    return new NextResponse("Not Found", { status: 404 });
  }

  // 1) routing.js'ten TR pathleri
  const routingTr = getTrPathsFromRouting(); // "/anasayfa", "/seo", "/yazilim/..." vs

  // 2) FAQ slug'larından TR pathleri
  const faqSlugTr = getTrFaqSlugPaths(); // "/tr/smm-sss", "/tr/yazilim-sss" vs

  // routingTr'yi /tr prefix'li hale getir
  const routingTrWithPrefix = routingTr.map((p) =>
    p.startsWith("/tr/") ? p : `/tr${p === "/" ? "" : p}`
  );

  // birleşim + uniq
  const unique = Array.from(
    new Set([
      ...routingTrWithPrefix,
      ...faqSlugTr,
      // istersen ekstra manuel ekle:
      // "/tr/sss",
    ])
  );

  const xml = buildXml(unique);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
