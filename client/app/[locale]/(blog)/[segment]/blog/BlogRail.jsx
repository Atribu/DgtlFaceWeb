"use client";

import { useState, useRef, useEffect} from "react";
import BlogCard from "./BlogCard"

export default function BlogRail({ title, posts, locale, t, GRADIENT }) {
  const railRef = useRef(null);

  // Türkçe yorum: Rail içinde aktif görünen kartın index'i (1-based)
  const [activeIndex, setActiveIndex] = useState(1);

  // Türkçe yorum: Kart genişliği + gap = 1 adımda kaç px ilerliyoruz
  const stepPxRef = useRef(1);
  const rafRef = useRef(null);

  const measureStep = () => {
    const el = railRef.current;
    if (!el) return;

    const first = el.children?.[0];
    if (!first) return;

    // Türkçe yorum: İlk kartın genişliği
    const cardW = first.getBoundingClientRect().width;

    // Türkçe yorum: gap değerini yakala (Tailwind gap-1/gap-2 vs.)
    const styles = window.getComputedStyle(el);
    // modern browser'larda columnGap var
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

    // Türkçe yorum: Kaydırma adımı = kart genişliği + gap
    stepPxRef.current = Math.max(1, cardW + gap);

    // Türkçe yorum: Mevcut scrollLeft'e göre index'i güncelle
    updateIndex();
  };

  const updateIndex = () => {
    const el = railRef.current;
    if (!el) return;

    const step = stepPxRef.current || 1;

    // Türkçe yorum: Snap + scrollLeft yüzünden küsurat çıkabilir, en yakını alıyoruz
    const idx0 = Math.round(el.scrollLeft / step);
    const idx1 = Math.min(posts.length, Math.max(1, idx0 + 1));

    setActiveIndex(idx1);
  };

  const onScroll = () => {
    // Türkçe yorum: Scroll event’i çok sık çalışır -> rAF ile throttle
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateIndex();
    });
  };

  const scrollByAmount = (dir = 1) => {
    const el = railRef.current;
    if (!el) return;

    // Türkçe yorum: Step'e göre kaydır (daha tutarlı index)
    const step = stepPxRef.current || Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  useEffect(() => {
    // Türkçe yorum: İlk render + posts değişince ölç
    measureStep();

    // Türkçe yorum: Resize olursa yeniden ölç
    const onResize = () => measureStep();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // posts.length yeterli; kart boyutu responsive olduğundan resize handler da var
  }, [posts.length]);

  if (!posts?.length) return null;

  return (
    <section className="mt-4 mb-10">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base lg:text-lg font-semibold text-white/90">
          {title}
        </h2>

        {/* Türkçe yorum: sağ üst küçük oklar + scroll index */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Sola kaydır"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-[#140f25] backdrop-blur-sm 
                       hover:border-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span className="pointer-events-none absolute inset-[-4px] -z-10 rounded-full btn-pulse-dual" />
            <span className="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M15 5L9 12L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* ✅ Scroll index: 2 / 9 */}
          <span className="min-w-[52px] text-center text-xs text-white/60 tabular-nums">
            {activeIndex} / {posts.length}
          </span>

          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Sağa kaydır"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-[#140f25] backdrop-blur-sm 
                       hover:border-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span className="pointer-events-none absolute inset-[-4px] -z-10 rounded-full btn-pulse-dual" />
            <span className="sr-only">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={railRef}
          onScroll={onScroll}
          className="flex gap-1 lg:gap-2 overflow-x-auto pb-2 pr-2 snap-x snap-mandatory scroll-smooth
                     [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent]"
        >
          {posts.map((p) => (
            <BlogCard key={p.id} p={p} locale={locale} t={t} GRADIENT={GRADIENT} />
          ))}
        </div>
      </div>
    </section>
  );
}