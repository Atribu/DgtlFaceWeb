"use client";

import dynamic from "next/dynamic";

const Partner = dynamic(() => import("./Partner"), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden="true" />,
});

export default Partner;
