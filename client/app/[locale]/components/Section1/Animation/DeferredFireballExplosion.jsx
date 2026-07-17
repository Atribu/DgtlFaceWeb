"use client";

import dynamic from "next/dynamic";

const FireballExplosion = dynamic(() => import("./FireballExplosion"), {
  ssr: false,
  loading: () => (
    <div className="h-[200px] w-[200px] max-w-full lg:h-[380px] lg:w-[380px]" aria-hidden="true" />
  ),
});

export default FireballExplosion;
