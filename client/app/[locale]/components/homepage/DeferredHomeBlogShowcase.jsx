"use client";

import dynamic from "next/dynamic";

const HomeBlogShowcase = dynamic(() => import("./HomeBlogShowcase"), {
  ssr: false,
  loading: () => <div className="min-h-[340px] w-full" aria-hidden="true" />,
});

export default HomeBlogShowcase;
