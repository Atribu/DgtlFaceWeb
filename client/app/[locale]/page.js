import HomepageClient from "./components/homepage/HomepageClient";
import ThreeMainBanner from "./components/homepage/ThreeMainBanner";
import JsonLd from "./components/seo/JsonLd";
import RouteIntlProvider, {
  loadHomeClientMessages,
} from "./components/common/RouteIntlProvider";

import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import { getOgImageByPathnameKey } from "@/app/lib/og-map";

// The localized homepage is public and does not depend on request-specific data.
// Keep it in Next.js' full-route cache and refresh it periodically as a safety net.
export const dynamic = "force-static";
export const revalidate = 3600;

const HOME_SEO = {
  tr: {
    title: "DGTLFACE | Dijital Dönüşüm Partneriniz",
    schemaName: "DGTLFACE – Dijital Pazarlama & Teknoloji Partneri",
    description:
      "DGTLFACE; SEO, SEM, sosyal medya yönetimi, yazılım, creative, çok dilli çağrı merkezi ve otel teknolojileri alanlarında profesyonel dijital pazarlama çözümleri sunan teknoloji partneridir.",
  },
  en: {
    title: "Digital Marketing, SEO, SEM, Creative, Software & Hotel Tech Partner | DGTLFACE",
    schemaName: "DGTLFACE – Digital Marketing & Technology Partner",
    description:
      "DGTLFACE is a digital marketing & technology partner offering SEO, SEM, social media, software, creative production, multilingual call center and hotel technology solutions.",
  },
};

function getHomeSeo(locale) {
  return HOME_SEO[locale] || HOME_SEO.en;
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const pathnameKey = "/";
  const base = getBaseUrl();
  const canonical = getCanonicalUrl(pathnameKey, locale);

  const trUrl = getCanonicalUrl(pathnameKey, "tr");
  const enUrl = getCanonicalUrl(pathnameKey, "en");

  // OG: locale'e göre map'ten al
  const ogPath = getOgImageByPathnameKey(pathnameKey, locale);
  // OG url absolute olsun (garanti)
  const ogImageAbs = new URL(ogPath, base).toString();

  const { title, description } = getHomeSeo(locale);

  return {
    metadataBase: new URL(base),
    title,
    description,

    alternates: {
      canonical,
      languages: {
        tr: trUrl,
        en: enUrl,
        "x-default": trUrl,
      },
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: "DGTLFACE",
      title,
      description,
      images: [{ url: ogImageAbs, width: 1200, height: 630, alt: title }],
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageAbs],
    },
  };
}
export default async function HomePage({ params }) {
  const { locale } = await params;
  const messages = await loadHomeClientMessages(locale);

  const baseUrl = getBaseUrl();
  const pathnameKey = "/";
  const canonicalUrl = getCanonicalUrl(pathnameKey, locale);
  const organizationId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const breadcrumbId = `${canonicalUrl}#breadcrumb`;
  const { schemaName, description } = getHomeSeo(locale);
  const homeLabel = locale === "tr" ? "Ana Sayfa" : "Home";

  // Home JSON-LD: site-wide entity'ler @id ile referanslanır.
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: schemaName,
        description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
        publisher: { "@id": organizationId },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: homeLabel,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd id="homepage-jsonld" data={homeJsonLd} />

      <RouteIntlProvider locale={locale} messages={messages}>
        <main className="flex flex-col gap-[10px] lg:gap-[20px] max-w-screen overflow-x-hidden">
          <ThreeMainBanner />
          <HomepageClient />
        </main>
      </RouteIntlProvider>
    </>
  );
}
