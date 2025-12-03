"use client";

import React from "react";

/**
 * Re-usable rich text renderer for next-intl.
 *
 * Props:
 *  - t: useTranslations(...)'dan gelen t fonksiyonu
 *  - messageKey: JSON içindeki key (ör: "services_text1" | "endText2" | "whyUs_text1")
 *  - as: hangi HTML tag ile sarsın? (p, span, div...) varsayılan: "span"
 *  - className: Tailwind / className string
 *  - components: ekstra rich component mapping (seo, sem, vs.)
 */
export default function RichText({
  t,
  messageKey,
  as: Tag = "p",
  className = "",
  components = {},
}) {
  // Ortak, her yerde kullanacağımız formatlayıcılar
  const baseComponents = {
    // <b> ve <strong> → kalın
    b: (chunks) => <strong className="font-semibold">{chunks}</strong>,
    strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,

    // <br> → satır kır
    br: () => <br />,

    // <ul> / <li> → liste
    ul: (chunks) => (
      <ul className="list-disc list-inside space-y-1 mt-1">{chunks}</ul>
    ),
    li: (chunks) => <li>{chunks}</li>,
  };

  // Dışarıdan gelenlerle birleştir (Link vs.)
  const mergedComponents = { ...baseComponents, ...components };

  return (
    <Tag className={className}>
      {t.rich(messageKey, mergedComponents)}
    </Tag>
  );
}
