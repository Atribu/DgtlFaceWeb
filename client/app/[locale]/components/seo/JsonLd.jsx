// app/[locale]/components/seo/JsonLd.jsx
import React from "react";

//  JSON-LD içindeki "<" karakterlerini HTML script bağlamında güvenli kaçır.
function safeJsonLdStringify(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function JsonLd({ data, id = "jsonld" }) {
  if (!data) return null;

  return (
    <script
      id={id}
      type="application/ld+json"
      //  JSON-LD HTML içine SSR basılır
      dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(data) }}
    />
  );
}
