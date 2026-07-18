"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-TM2KPGV9";
const COOKIE_PREFERENCES_EVENT = "cookiePreferencesChanged";

function getCookiePreferences() {
  try {
    const cookie = document.cookie
      .split(";")
      .map((item) => item.trim())
      .find((item) => item.startsWith("cookiePreferences="));

    if (!cookie) return null;

    const value = cookie.slice("cookiePreferences=".length);
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return null;
  }
}

function hasAnalyticsConsent(preferences) {
  return Boolean(preferences?.performance || preferences?.targeting);
}

export default function GtmDeferred() {
  useEffect(() => {
    let idleId = null;
    let timeoutId = null;

    const cancelScheduledLoad = () => {
      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
        idleId = null;
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    const injectGtm = () => {
      idleId = null;
      timeoutId = null;

      if (window.__gtmLoaded) return;

      window.__gtmLoaded = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "gtm.start": Date.now(),
        event: "gtm.js",
      });

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    };

    const scheduleGtm = (preferences) => {
      if (!hasAnalyticsConsent(preferences)) {
        cancelScheduledLoad();
        return;
      }

      if (window.__gtmLoaded || idleId !== null || timeoutId !== null) return;

      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(injectGtm, { timeout: 4000 });
      } else {
        timeoutId = window.setTimeout(injectGtm, 1200);
      }
    };

    const handlePreferencesChanged = (event) => {
      scheduleGtm(event.detail);
    };

    scheduleGtm(getCookiePreferences());
    window.addEventListener(COOKIE_PREFERENCES_EVENT, handlePreferencesChanged);

    return () => {
      cancelScheduledLoad();
      window.removeEventListener(COOKIE_PREFERENCES_EVENT, handlePreferencesChanged);
    };
  }, []);

  return null;
}
