// /Users/ece/Documents/GitHub/DgtlFaceWeb/client/app/[locale]/components/analytics/GtmDeferred.jsx
"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const GTM_ID = "GTM-TM2KPGV9";

export default function GtmDeferred() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Consent kontrolü (senin cookiePreferences yapına göre)
    let allowed = false;
    try {
      const raw = localStorage.getItem("cookiePreferences");
      const prefs = raw ? JSON.parse(raw) : null;
      allowed = !!prefs?.performance || !!prefs?.targeting;
    } catch {}

    if (!allowed) return;

    // Önce sayfa etkileşimi bitsin, sonra yükle
    let timerId;
    if ("requestIdleCallback" in window) {
      timerId = window.requestIdleCallback(() => setEnabled(true), { timeout: 3000 });
    } else {
      timerId = window.setTimeout(() => setEnabled(true), 2500);
    }

    return () => {
      if (typeof timerId === "number") clearTimeout(timerId);
      else if ("cancelIdleCallback" in window) window.cancelIdleCallback(timerId);
    };
  }, []);

  if (!enabled) return null;
  return <GoogleTagManager gtmId={GTM_ID} />;
}
