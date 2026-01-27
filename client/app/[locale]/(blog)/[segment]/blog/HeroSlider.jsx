"use client";

import { useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSlider({ posts, locale, t, query, setQuery, inputRef, GRADIENT, noResults }) {
  const [active, setActive] = useState(0);

  // Türkçe yorum: 5 saniyede bir sonraki slide
  useEffect(() => {
    if (!posts?.length) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % posts.length);
    }, 5000);
    return () => clearInterval(id);
  }, [posts]);

  if (!posts?.length) return null;

  const p = posts[active];

  return (
    <section className="relative h-[75vh] w-[92%] overflow-hidden bg-black items-center justify-center">
      {/* Türkçe yorum: arka plan görsel */}
      {p.banner?.src ? (
        <Image
          src={p.banner.src}
          alt={p.banner.alt || p.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0">
          <div className={`absolute -top-28 left-1/2 h-[520px] w-[90%] -translate-x-1/2 rounded-full ${GRADIENT} opacity-60 blur-3xl`} />
        </div>
      )}

      {/* Türkçe yorum: Netflix benzeri karartma (okunabilirlik) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/0" />
      <div className="absolute inset-0 bg-black/0" />

      <div className="relative z-10 mx-auto flex h-full w-full xl:w-[96%] max-w-[1900px] px-4">
        <div className="flex w-full items-center">
          <div className="max-w-2xl text-left">
            <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-white/80">
              <span className={`h-2 w-2 rounded-full ${GRADIENT}`} />
              <span className="capitalize">{p.dept.replace("-", " ")}</span>
            </div>

            <h1 className="text-2xl md:text-3xl xl:text-[38px] 4xl:text-5xl lg:leading-[120%] font-semibold tracking-tight text-white">
              {p.title}
            </h1>

            <p className="mt-4 max-w-xl text-sm md:text-base lg:text-lg lg:leading-[130%] text-white/80 line-clamp-3 ">
              {p.excerpt}
            </p>

            <div className="mt-6 flex flex-col lg:flex-row items-start gap-3">
              <Link
                href={`/${locale}/${p.dept}/blog/${p.slug}`}
                className={`inline-flex items-center gap-2 rounded-2xl px-4 4xl:px-5 py-2 4xl:py-3 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
              >
                {t("readMore")} <span className="transition group-hover:translate-x-0.5">→</span>
              </Link>
       

            </div>

            {/* Türkçe yorum: alt mini progress/dots */}
            <div className="mt-10 flex items-center gap-2">
              {posts.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={[
                    "h-1.5 rounded-full transition",
                    i === active ? "w-10 bg-white/90" : "w-5 bg-white/30 hover:bg-white/50",
                  ].join(" ")}
                />
              ))}
            </div>
            <div className="flex flex-row items-start justify-start gap-2 mt-8 lg:mt-16">
               <div className="flex items-center justify-end">
          <div className="w-full max-w-[720px]">
            <div className="relative">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full lg:min-w-[300px] rounded-2xl border border-white/30 bg-black/50 px-4 4xl:px-5 py-2 4xl:py-3 text-sm text-white outline-none backdrop-blur
                           focus:border-white/40 focus:bg-black/50"
              />
              {query.length > 0 && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl px-4 4xl:px-5 py-2 4xl:py-3 text-xs text-white/80 transition hover:text-white"
                >
                  {t("clear")}
                </button>
              )}
            </div>
            {noResults && (
  <p className="mt-2 text-xs text-white/70">
    “{query}” için sonuç bulunamadı. Yazımı kontrol edin ya da daha genel arayın.
  </p>
)}
          </div>
        </div>
              <button
                type="button"
                onClick={() => inputRef.current?.focus()}
                className="rounded-2xl border border-white/20 bg-white/5 px-4 4xl:px-5 py-1.5 4xl:py-3 text-sm text-white/90 backdrop-blur transition hover:bg-white/10 "
              >
                {t("searchButton")} <span className="ml-2 text-[12px]">🔍</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}