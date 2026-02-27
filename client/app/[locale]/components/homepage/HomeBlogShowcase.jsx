"use client";

import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { BLOG_MEDIA_MAP } from "@/app/lib/blogMediaMap";

const GRADIENT = "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]";

const blogPostsByLocaleCache = {};

function normalizeLocale(locale) {
  return locale === "en" ? "en" : "tr";
}

function getCachedBlogPosts(locale) {
  return blogPostsByLocaleCache[normalizeLocale(locale)] || null;
}

async function loadLocaleBlogPosts(locale) {
  const normalizedLocale = normalizeLocale(locale);
  const cached = getCachedBlogPosts(normalizedLocale);
  if (cached) return cached;

  const mod =
    normalizedLocale === "en"
      ? await import("@/messages/en.json")
      : await import("@/messages/tr.json");

  const messages = mod?.default || mod || {};
  const blogPosts = messages?.BlogPosts || {};
  blogPostsByLocaleCache[normalizedLocale] = blogPosts;
  return blogPosts;
}

function toTs(dateStr) {
  if (!dateStr) return 0;
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? 0 : d.getTime();
}

function BlogCard({ p, locale }) {
  const t = useTranslations("Homepage.blog");

  return (
    <Link
      href={`/${locale}/${p.dept}/blog/${p.slug}`}
      className="group relative w-[260px] sm:w-[280px] lg:w-[320px] xl:w-[420px] flex-none
                 border border-white/10 bg-white/5 transition hover:bg-[#547CCF]/30 snap-start overflow-hidden "
    >
      {p.banner?.src ? (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={p.banner.src}
            alt={p.banner.alt || p.title}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 420px"
            className="object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-black/0" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 ease-out group-hover:opacity-100 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />

          <div className="absolute inset-x-0 bottom-[54px] px-3 lg:px-4 translate-y-6 opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <div className="border border-white/10 bg-black/30 backdrop-blur-md p-3 ">
              <h3 className="text-[14px] lg:text-[15px] font-semibold leading-[130%] text-white line-clamp-2">
                {p.title}
              </h3>
              <p className="mt-1 text-[12px] text-white/75 leading-[125%] line-clamp-2">
                {p.excerpt}
              </p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 px-3 lg:px-4 pb-3 lg:pb-4">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 border border-white/10 bg-black/45 backdrop-blur-md px-3 py-1 text-[11px] text-white/85">
                <span className={`h-2 w-2 ${GRADIENT}`} />
                <span className="capitalize">{p.dept.replace("-", " ")}</span>
              </div>
              <span className="inline-flex items-center gap-2 px-2 py-1 text-xs md:text-sm font-medium text-white">
                {t("read")} <span className="transition group-hover:translate-x-0.5">→</span>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </Link>
  );
}

export default function HomeBlogShowcase({
  limit = 20,
  heroCount = 5,
  showHero = true,
}) {
  const t = useTranslations("Blog");
  const locale = useLocale();
  const [blogPosts, setBlogPosts] = useState(() => getCachedBlogPosts(locale) || {});

  useEffect(() => {
    let cancelled = false;
    const cached = getCachedBlogPosts(locale);
    if (cached) {
      setBlogPosts(cached);
      return () => {
        cancelled = true;
      };
    }

    loadLocaleBlogPosts(locale)
      .then((posts) => {
        if (!cancelled) setBlogPosts(posts);
      })
      .catch(() => {
        if (!cancelled) setBlogPosts({});
      });

    return () => {
      cancelled = true;
    };
  }, [locale]);

  const ALL_POSTS = useMemo(() => {
    return Object.entries(blogPosts)
      .map(([postKey, post]) => {
        const slug = post.slug || "";
        const banner = BLOG_MEDIA_MAP?.[slug]?.banner || null;

        return {
          id: postKey,
          dept: post.department || "",
          slug,
          title: post.title || "",
          excerpt: post.h1?.intro || post.excerpt || post.h1Intro || "",
          updatedAt:
            post.byline?.updatedAt ||
            post.byline?.publishedAt ||
            post.updatedAt ||
            post.publishedAt ||
            "",
          banner,
        };
      })
      .filter((p) => p.slug && p.dept);
  }, [blogPosts]);

  const sortedAll = useMemo(() => {
    return [...ALL_POSTS].sort((a, b) => toTs(b.updatedAt) - toTs(a.updatedAt));
  }, [ALL_POSTS]);

  const latest = useMemo(() => sortedAll.slice(0, limit), [sortedAll, limit]);

  // --- Rail kontrol (oklar + index) ---
  const railRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(1); // 1-based
  const stepPxRef = useRef(1);
  const rafRef = useRef(null);

  const updateIndex = useCallback(() => {
    const el = railRef.current;
    if (!el) return;

    const step = stepPxRef.current || 1;
    const idx0 = Math.round(el.scrollLeft / step);
    const idx1 = Math.min(latest.length, Math.max(1, idx0 + 1));
    setActiveIndex(idx1);
  }, [latest.length]);

  const measureStep = useCallback(() => {
    const el = railRef.current;
    if (!el) return;

    const first = el.children?.[0];
    if (!first) return;

    const cardW = first.getBoundingClientRect().width;
    const styles = window.getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

    stepPxRef.current = Math.max(1, cardW + gap);
    updateIndex();
  }, [updateIndex]);

  const onScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateIndex();
    });
  }, [updateIndex]);

  const scrollByAmount = useCallback((dir = 1) => {
    const el = railRef.current;
    if (!el) return;

    const step = stepPxRef.current || Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!latest.length) return;

    // Türkçe yorum: İlk ölçüm
    measureStep();

    // Türkçe yorum: Resize olursa yeniden ölç
    window.addEventListener("resize", measureStep);

    return () => {
      window.removeEventListener("resize", measureStep);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [latest.length, measureStep]);

  if (!sortedAll.length) return null;

  const canPrev = activeIndex > 1;
  const canNext = activeIndex < latest.length;

  return (
    <section className="mx-auto w-full xl:w-[98%] max-w-[1900px] px-4 py-3 lg:py-6">
      <div className="flex flex-row items-start md:items-end justify-between gap-4">
        <div>
          <h2 className="text-black text-[16px] md:text-[18px] lg:text-xl font-medium lg:font-semibold">
            {t("recentlyAdded")}
          </h2>
        </div>

        <div className="flex items-center gap-1 lg:gap-3">
          {/* index */}
          <span className="text-xs text-black/60 tabular-nums min-w-[64px] text-center">
            {Math.min(activeIndex, latest.length)} / {latest.length}
          </span>

          {/* oklar */}
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            disabled={!canPrev}
            aria-label="Previous"
            className="flex h-6 w-6 lg:h-8 lg:w-8 items-center justify-center rounded-full border border-black/20 bg-white/70 shadow-sm transition
                       hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            disabled={!canNext}
            aria-label="Next"
            className="flex h-6 w-6 lg:h-8 lg:w-8 items-center justify-center rounded-full border border-black/20 bg-white/70 shadow-sm transition
                       hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed relative"
          >
            <span className="pointer-events-none absolute inset-[-4px] -z-10 rounded-full btn-pulse-dual text-xs" />
            →
          </button>

          <Link
            href={`/${locale}/blogs`}
            className="!text-black hidden md:inline-flex text-sm font-medium items-center gap-2 ml-3"
          >
            {t("allBlogs")} <span>→</span>
          </Link>
        </div>
      </div>

      <div className="mt-3 md:mt-6">
        <div
          ref={railRef}
          onScroll={onScroll}
          className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 pr-2 snap-x snap-mandatory scroll-smooth
                     [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.25)_transparent]"
        >
          {latest.map((p) => (
            <BlogCard key={p.id} p={p} locale={locale} />
          ))}
        </div>
      </div>
       <Link
            href={`/${locale}/blogs`}
            className="!text-black flex md:hidden text-xs font-semibold items-end justify-end gap-2 mt-3 justify-items-end"
          >
            {t("allBlogs")} <span>→</span>
          </Link>
    </section>
  );
}
