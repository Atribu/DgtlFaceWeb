"use client";

import dynamic from "next/dynamic";

const CookiePopupClient = dynamic(
  () => import("../Cookies/CookiePopup"),
  {
    ssr: false,
    loading: () => null,
  }
);

const FloatingFaqButtonClient = dynamic(
  () => import("./FloatingFaqButton"),
  {
    ssr: false,
    loading: () => null,
  }
);

const FloatingActionsClient = dynamic(
  () => import("./FloatingActions"),
  {
    ssr: false,
    loading: () => null,
  }
);

export function CookiePopupDeferred() {
  return <CookiePopupClient />;
}

export function FloatingFaqButtonDeferred() {
  return <FloatingFaqButtonClient />;
}

export function FloatingActionsDeferred() {
  return <FloatingActionsClient />;
}
