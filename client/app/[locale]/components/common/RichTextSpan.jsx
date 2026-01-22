// components/common/RichTextSpan.jsx
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

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

        a: (chunks) => (
          <Link
            href={chunks?.props?.href || "#"}
            className="underline font-semibold hover:text-[#58b5cf]"
          >
            {chunks}
          </Link>
        ),

          callPerformance: (chunks) => (
          <Link
            href="/Services/callcenter/callPerformance"
            className="underline font-semibold hover:text-[#58b5cf]"
          >
            {chunks}
          </Link>
        ),
        lookerStudio: (chunks) => (
          <Link
            href="/Services/digitalAnalysis/lookerStudio"
            className="underline font-semibold hover:text-[#58b5cf]"
          >
            {chunks}
          </Link>
        ),
      })}
    </span>
  );
}
