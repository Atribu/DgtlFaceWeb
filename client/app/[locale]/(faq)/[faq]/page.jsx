//app/[locale]/(faq)/[faq]/page.js
import React from "react";
import { notFound } from "next/navigation";
import { FAQ_MAP } from "../faqMap";
import SearchBanner from "../../sss/components/SearchBanner";
import FaqMain from "../../sss/components/FaqMain";

export default function Page({ params }) {
  const slug = params?.faq;
  const pageNs = FAQ_MAP[slug];

  if (!pageNs) notFound();

  return (
    <div className="flex flex-col max-w-full overflow-x-hidden">
      <SearchBanner faqSlug={slug}/>
      <FaqMain pageNs={pageNs} />
    </div>
  );
}
