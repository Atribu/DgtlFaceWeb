// components/common/RichTextSpan.jsx

import { useTranslations } from "next-intl";
import NextLink from "next/link";
import { Link as LocalizedLink } from "@/i18n/navigation";

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
          <NextLink
            href={chunks?.props?.href || "#"}
            className="underline font-semibold !text-[#58b5cf] hover:!text-black"
          >
            {chunks}
          </NextLink>
        ),

        callPerformance: (chunks) => (
          <LocalizedLink
            href="/Services/callcenter/callPerformance"
            className="underline font-semibold !text-[#58b5cf] hover:!text-black"
          >
            {chunks}
          </LocalizedLink>
        ),
        lookerStudio: (chunks) => (
          <LocalizedLink
            href="/Services/digitalAnalysis/lookerStudio"
            className="underline font-semibold !text-[#58b5cf] hover:!text-black"
          >
            {chunks}
          </LocalizedLink>
        ),
      })}
    </span>
  );
}
