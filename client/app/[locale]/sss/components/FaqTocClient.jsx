"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function FaqTocClient({ sections = [] }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id);
  const activeIdRef = useRef(activeId);
  const sectionRefs = useRef({});

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    if (!sections.length) return;
    const currentIsValid = sections.some((s) => s.id === activeIdRef.current);
    if (currentIsValid) return;

    const firstId = sections[0]?.id;
    if (!firstId) return;
    activeIdRef.current = firstId;
    setActiveId(firstId);
  }, [sections]);

  const activeIndex = useMemo(() => {
    const idx = sections.findIndex((s) => s.id === activeId);
    return idx >= 0 ? idx : 0;
  }, [sections, activeId]);

  const totalSections = sections.length;

  useEffect(() => {
    if (!sections.length) return;

    const map = {};
    const els = sections
      .map((s) => {
        const el = document.getElementById(s.id);
        if (el) map[s.id] = el;
        return el;
      })
      .filter(Boolean);

    sectionRefs.current = map;
    if (!els.length) return;

    let rafId = null;
    const io = new IntersectionObserver(
      (entries) => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          let bestId = null;
          let bestRatio = -1;

          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const ratio = entry.intersectionRatio ?? 0;
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = entry.target?.id || null;
            }
          }

          if (!bestId || bestId === activeIdRef.current) return;
          activeIdRef.current = bestId;
          setActiveId(bestId);
        });
      },
      { threshold: [0.25, 0.4, 0.6], rootMargin: "-20% 0px -55% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [sections]);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id] || document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ✅ Mobil: sticky numara şeridi */}
      <div className="md:hidden sticky top-[72px] z-[60]">
        <div className="mx-auto w-full rounded-2xl bg-[#140f25] text-white px-3 py-2 shadow-[0_18px_45px_rgba(0,0,0,0.18)] border border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {sections.map((s, idx) => {
              const active = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className={[
                    "shrink-0 h-8 w-8 rounded-full grid place-items-center text-[12px] font-semibold",
                    "border transition",
                    active
                      ? "bg-white text-[#140f25] border-white"
                      : "bg-white/10 text-white/85 border-white/15",
                  ].join(" ")}
                  aria-label={`${idx + 1}. bölüme git`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </button>
              );
            })}
          </div>

          <div className="mt-2 h-[6px] w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-white/70 transition-[width] duration-300"
              style={{
                width: `${((activeIndex + 1) / Math.max(totalSections, 1)) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* ✅ Desktop TOC */}
      <aside className="hidden md:block lg:col-span-2 lg:sticky lg:top-[10%] lg:self-start">
        <div className="rounded-2xl bg-[#140f25] text-white p-2 lg:p-3 xl:p-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
          <div className="grid grid-cols-2 md:flex md:flex-col gap-[6px]">
            {sections.map((s, idx) => {
              const active = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className={[
                    "text-left rounded-xl px-3 py-[6px] transition font-semibold text-[12px] md:text-[14px] xl:text-[14px]",
                    active ? "bg-white/10 ring-1 ring-white/20" : "hover:bg-white/5",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={[
                        "mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-semibold",
                        active ? "bg-white text-[#140f25]" : "bg-white/10 text-white/80",
                      ].join(" ")}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className={active ? "text-white" : "text-white/80"}>{s.label}</p>
                      {active && (
                        <div className="mt-1 h-[2px] w-full rounded-full bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF]" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
