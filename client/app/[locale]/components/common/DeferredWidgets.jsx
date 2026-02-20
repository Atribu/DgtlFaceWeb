"use client";

import { useEffect, useState } from "react";
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

function useDeferredMount(delay = 0, idleTimeout = 2000) {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setShouldMount(true);
      return;
    }

    let cancelled = false;
    let delayTimer = null;
    let idleHandle = null;

    const mount = () => {
      if (!cancelled) setShouldMount(true);
    };

    const scheduleIdle = () => {
      if ("requestIdleCallback" in window) {
        idleHandle = window.requestIdleCallback(mount, { timeout: idleTimeout });
      } else {
        idleHandle = window.setTimeout(mount, 120);
      }
    };

    if (delay > 0) {
      delayTimer = window.setTimeout(scheduleIdle, delay);
    } else {
      scheduleIdle();
    }

    return () => {
      cancelled = true;

      if (delayTimer) window.clearTimeout(delayTimer);

      if (idleHandle) {
        if ("cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleHandle);
        } else {
          window.clearTimeout(idleHandle);
        }
      }
    };
  }, [delay, idleTimeout]);

  return shouldMount;
}

export function CookiePopupDeferred() {
  const shouldMount = useDeferredMount(1200, 2500);
  return shouldMount ? <CookiePopupClient /> : null;
}

export function FloatingFaqButtonDeferred() {
  const shouldMount = useDeferredMount(1600, 2500);
  return shouldMount ? <FloatingFaqButtonClient /> : null;
}

export function FloatingActionsDeferred() {
  const shouldMount = useDeferredMount(1800, 3000);
  return shouldMount ? <FloatingActionsClient /> : null;
}
