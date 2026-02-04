// app/[locale]/components/seo/JsonLd.jsx
import React from "react";

// Türkçe yorum: </script> kırılmasını engelle (çok nadir ama güvenli)
function safeJsonLdStringify(data) {
  return JSON.stringify(data).replace(/<\/script/gi, "<\\/script");
}

export default function JsonLd({ data, id = "jsonld" }) {
  if (!data) return null;

  return (
    <script
      id={id}
      type="application/ld+json"
      // Türkçe yorum: JSON-LD HTML içine SSR basılır
      dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(data) }}
    />
  );
}
