"use client";

import { useEffect, useRef } from "react";

const REQUIRED_VISIBLE_MS = 5000;

function pushQualifiedBlogView(payload) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "qualified_blog_view",
    ...payload,
  });
}

export default function QualifiedBlogViewTracker({
  blogSlug,
  blogKey,
  department,
  locale,
  author,
  publishedAt,
  readingTime,
}) {
  const sentRef = useRef(false);
  const timeoutRef = useRef(null);
  const visibleStartRef = useRef(null);
  const visibleMsRef = useRef(0);

  useEffect(() => {
    if (!blogSlug || !blogKey) return;

    const clearPendingTimer = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const pauseVisibleTimer = () => {
      if (visibleStartRef.current !== null) {
        visibleMsRef.current += performance.now() - visibleStartRef.current;
        visibleStartRef.current = null;
      }
      clearPendingTimer();
    };

    const sendEvent = () => {
      if (sentRef.current) return;
      sentRef.current = true;

      pushQualifiedBlogView({
        blog_slug: blogSlug,
        blog_key: blogKey,
        department,
        locale,
        author,
        published_at: publishedAt,
        reading_time: readingTime,
        page_path: window.location.pathname,
        page_title: document.title,
      });
    };

    const scheduleIfNeeded = () => {
      if (sentRef.current) return;
      if (document.visibilityState !== "visible") return;

      const remainingMs = REQUIRED_VISIBLE_MS - visibleMsRef.current;
      if (remainingMs <= 0) {
        sendEvent();
        return;
      }

      visibleStartRef.current = performance.now();
      timeoutRef.current = window.setTimeout(() => {
        pauseVisibleTimer();
        visibleMsRef.current = REQUIRED_VISIBLE_MS;
        sendEvent();
      }, remainingMs);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        scheduleIfNeeded();
      } else {
        pauseVisibleTimer();
      }
    };

    scheduleIfNeeded();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      pauseVisibleTimer();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [author, blogKey, blogSlug, department, locale, publishedAt, readingTime]);

  return null;
}
