// app/[locale]/(faq)/[faq]/page.js
import React from "react";
import Script from "next/script";
import { notFound } from "next/navigation";
import { FAQ_MAP } from "../faqMap";
import { FAQ_JSONLD_MAP } from "../faqJsonLdMap";
import SearchBanner from "../../sss/components/SearchBanner";
import FaqMain from "../../sss/components/FaqMain";

function metaFromJsonLd(jsonLd) {
  if (!jsonLd) return null;
  return {
    title: jsonLd.dgTitle || jsonLd.name || "",
    description: jsonLd.dgMetaDescription || jsonLd.description || "",
    canonical: jsonLd.url || "",
  };
}

// Google'a "standart" şekilde yansıtma katmanı
function buildEnhancedJsonLd(baseJsonLd) {
  if (!baseJsonLd || typeof baseJsonLd !== "object") return null;

  const url = baseJsonLd.url || baseJsonLd["@id"]?.split("#")[0] || "";
  const inLanguage = baseJsonLd.inLanguage || "tr";

  const nodes = [];

  // 1) Asıl FAQPage (orijinal schema)
  nodes.push(baseJsonLd);

  // 2) WebPage speakable (AI capsule + voice summary + voice queries)
  // Not: Google speakable'ı resmi olarak daha çok news için kullandı ama
  // burada "sayfada şu bloklar var" sinyalini standart ve temiz şekilde veriyoruz.
  nodes.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    inLanguage,
    name: baseJsonLd.name,
    description: baseJsonLd.description,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".dg-ai-capsule", ".dg-voice-summary", ".dg-voice-queries"],
    },
  });

  // 3) Voice queries'i ayrıca ItemList olarak da ver (standart, anlaşılır)
  // Kaynak: JSON-LD içindeki dgVoiceQueryExamples alanı
  const voiceQueries = Array.isArray(baseJsonLd.dgVoiceQueryExamples)
    ? baseJsonLd.dgVoiceQueryExamples
    : [];

  if (voiceQueries.length) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${url}#voice-queries`,
      name: "Voice query examples",
      itemListElement: voiceQueries.map((q, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: q,
      })),
    });
  }

  // 4) AI Capsule / Voice Summary'yi "standard" şekilde ayrıca WebPage mainEntityOfPage gibi vermek istersen:
  // (opsiyonel) Burada sadece aynı WebPage node'una name/description üzerinden zaten bağlıyız.
  // İstersen ayrıca "about" olarak ekleyebilirsin ama şart değil.

  return nodes;
}


export async function generateMetadata({ params }) {
  const slug = params?.faq;
  const jsonLd = FAQ_JSONLD_MAP?.[slug];
  const meta = metaFromJsonLd(jsonLd);
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    alternates: meta.canonical ? { canonical: meta.canonical } : undefined,
  };
}

export default function Page({ params }) {
   const slug = params?.faq;
  const pageNs = FAQ_MAP?.[slug];
  const baseJsonLd = FAQ_JSONLD_MAP?.[slug];

  if (!pageNs) notFound();

  const jsonLdNodes = buildEnhancedJsonLd(baseJsonLd);

  return (
    <div className="flex flex-col max-w-full">
      {/* JSON-LD */}
      {jsonLdNodes ? (
        <Script
          id={`jsonld-faq-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNodes) }}
        />
      ) : null}

      <SearchBanner faqSlug={slug} />
      <FaqMain pageNs={pageNs} />
    </div>
  );
}

