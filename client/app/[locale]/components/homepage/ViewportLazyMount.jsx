"use client";

import { useEffect, useRef, useState } from "react";

export default function ViewportLazyMount({
  children,
  rootMargin = "500px 0px",
  threshold = 0.01,
  minHeight = 0,
  className = "",
}) {
  const containerRef = useRef(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (shouldMount) return;

    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldMount(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldMount(true);
        observer.disconnect();
      },
      { rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldMount, threshold]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={minHeight ? { minHeight } : undefined}
    >
      {shouldMount ? children : null}
    </div>
  );
}
