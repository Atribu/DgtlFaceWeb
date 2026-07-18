"use client";

import dynamic from "next/dynamic";

const SectionFireballExplosion = dynamic(() => import("./FireballExplosion"), {
  ssr: false,
  loading: () => (
    <div className="h-[380px] w-[380px] max-w-full" aria-hidden="true" />
  ),
});

export default SectionFireballExplosion;
