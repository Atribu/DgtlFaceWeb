"use client";

import dynamic from "next/dynamic";

export const PartnersDeferred = dynamic(
  () => import("../Partners/Partners"),
  { ssr: false }
);

export const StatsDeferred = dynamic(
  () => import("../Section2/Section2"),
  { ssr: false }
);

export const WhyUsDeferred = dynamic(
  () => import("../Section5/WhyUsSection"),
  { ssr: false }
);
