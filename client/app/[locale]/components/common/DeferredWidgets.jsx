"use client";

import dynamic from "next/dynamic";

export const CookiePopupDeferred = dynamic(
  () => import("../Cookies/CookiePopup"),
  {
    ssr: false,
    loading: () => null,
  }
);

export const FloatingFaqButtonDeferred = dynamic(
  () => import("./FloatingFaqButton"),
  {
    ssr: false,
    loading: () => null,
  }
);

export const FloatingActionsDeferred = dynamic(
  () => import("./FloatingActions"),
  {
    ssr: false,
    loading: () => null,
  }
);
