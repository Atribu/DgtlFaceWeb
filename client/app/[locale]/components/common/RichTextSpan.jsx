// components/common/RichTextSpan.jsx
"use client";

import { useTranslations } from "next-intl";

export default function RichTextSpan({ ns, id, className = "" }) {
  const t = useTranslations(ns);

  return (
    <span className={className}>
      {t.rich(id, {
        b: (chunks) => <span className="font-semibold">{chunks}</span>,
        strong: (chunks) => <span className="font-semibold">{chunks}</span>,
        br: () => <br />,
        ul: (chunks) => (
          <ul className="list-disc list-inside space-y-1 mt-2">
            {chunks}
          </ul>
        ),
        li: (chunks) => <li>{chunks}</li>,
      })}
    </span>
  );
}
