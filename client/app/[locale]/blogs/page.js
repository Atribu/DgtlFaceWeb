"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const GRADIENT =
  "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]";

/**
 * V2 Departmanlar
 */
const BLOG_DEPARTMENTS_V2 = [
  { id: "all", label: "Tümü" },
  { id: "sem", label: "SEM", href: "/Services/sem" },
  { id: "creative", label: "Creative", href: "/Services/creative" },
  { id: "pms-ota", label: "PMS & OTA Yönetimi", href: "/Services/pms" },
  { id: "call-center", label: "Çağrı Merkezi", href: "/Services/callcenter" },
  { id: "smm", label: "SMM", href: "/Services/smm" },
  { id: "software", label: "Web & Yazılım Hizmetleri", href: "/Services/software" },
  { id: "seo", label: "SEO", href: "/Services/seo" },
  { id: "data-analytics", label: "Veri Analizi & Raporlama", href: "/Services/digitalAnalysis" },
  { id: "hotel-digital", label: "Otel Dijital Dönüşüm", href: "/Services/hotel" },
];

// Şimdilik mock data
// ✅ ÖNEMLİ: slug ekledik (URL üretmek için şart)
const MOCK_POSTS = [
  {
    id: 1,
    title: "SEM’de 2026 Trendleri",
    slug: "semde-2026-trendleri",
    dept: "sem",
    excerpt: "Kampanya verimliliğini artıran temel noktalar...",
  },
  {
    id: 2,
    title: "SEO Teknik Kontrol Listesi",
    slug: "seo-teknik-kontrol-listesi",
    dept: "seo",
    excerpt: "Site sağlığı için kontrol edilmesi gerekenler...",
  },
  {
    id: 3,
    title: "Otel Dijital Dönüşüm Yol Haritası",
    slug: "otel-dijital-donusum-yol-haritasi",
    dept: "hotel-digital",
    excerpt: "Operasyon ve pazarlama birlikte nasıl büyür?",
  },
  {
    id: 4,
    title: "SMM: İçerik Planlama ve Ölçüm",
    slug: "smm-icerik-planlama-ve-olcum",
    dept: "smm",
    excerpt: "KPI’lar, raporlama ve sürdürülebilir içerik...",
  },
  {
    id: 5,
    title: "Creative: Marka Dili & Görsel Sistem",
    slug: "creative-marka-dili-ve-gorsel-sistem",
    dept: "creative",
    excerpt: "Tasarım dilini standardize etmenin avantajları...",
  },
  {
    id: 6,
    title: "Veri Analizi ile Karar Alma",
    slug: "veri-analizi-ile-karar-alma",
    dept: "data-analytics",
    excerpt: "Raporlama düzeni kurarken yapılan hatalar...",
  },
  {
    id: 7,
    title: "Next.js 15 Tips",
    slug: "nextjs-15-tips",
    dept: "software",
    excerpt: "Performans ve DX için pratik öneriler...",
  },
  {
    id: 8,
    title: "Pms-ota blog örnek",
    slug: "pms-ota-blog-ornek",
    dept: "pms-ota",
    excerpt: "OTA kanallarını verimli yönetmenin kısa yolu...",
  },
  {
    id: 9,
    title: "Call center blog örnek",
    slug: "call-center-blog-ornek",
    dept: "call-center",
    excerpt: "Çağrı merkezi operasyonlarında kalite metrikleri...",
  },
];

function DepartmentChips({ items, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((d) => {
        const active = d.id === value;

        return (
          <button
            key={d.id}
            type="button"
            onClick={() => onChange(d.id)}
            className={[
              "relative rounded-2xl px-4 py-2 text-sm transition",
              "border border-white/10 bg-white/5 hover:bg-white/10",
              "active:scale-[0.99]",
              active
                ? "text-black border-transparent shadow-[0_10px_40px_rgba(84,185,207,0.15)]"
                : "text-white/80 hover:text-white",
            ].join(" ")}
          >
            {active && (
              <span className={`absolute inset-0 -z-10 rounded-2xl ${GRADIENT}`} />
            )}

            <span className="flex items-center gap-2">
              <span className={active ? "opacity-100" : "opacity-70"}>
                {d.label}
              </span>

              {d.href && (
                <span
                  className={[
                    "text-xs",
                    active ? "text-black/70" : "text-white/40",
                  ].join(" ")}
                  title="Servis sayfası mevcut"
                >
                  ↗
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function BlogPageV2() {
  const t = useTranslations("Blog");
  const locale = useLocale(); // ✅ Link için burada kullanacağız
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("all");

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();

    return MOCK_POSTS.filter((p) => {
      const deptOk = dept === "all" ? true : p.dept === dept;
      const qOk = q
        ? p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
        : true;

      return deptOk && qOk;
    });
  }, [query, dept]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div
            className={`absolute -top-28 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full ${GRADIENT}`}
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto flex h-full w-full max-w-[1500px] flex-col justify-center items-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-4 text-base text-white/70 md:text-lg">
              {t("subtitle")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="relative w-full">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("searchPlaceholder")}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition
                             focus:border-white/20 focus:bg-white/10"
                />

                {query.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-xs text-white/70 transition hover:text-white"
                  >
                    {t("clear")}
                  </button>
                )}
              </div>

              <button
                type="button"
                className={`rounded-2xl px-5 py-3 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
              >
                {t("searchButton")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="mx-auto w-full max-w-[1500px] px-4">
        <div className="-mt-8 rounded-3xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <DepartmentChips
              items={BLOG_DEPARTMENTS_V2}
              value={dept}
              onChange={setDept}
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <p className="text-sm text-white/60">
            {t("results", { count: filteredPosts.length })}
          </p>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/70">
            {t("empty")}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((p) => (
              <article
                key={p.id}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
                  <span className={`h-2 w-2 rounded-full ${GRADIENT}`} />
                  <span className="capitalize">{p.dept.replace("-", " ")}</span>
                </div>

                <h2 className="text-lg font-semibold tracking-tight">
                  {p.title}
                </h2>

                <p className="mt-2 text-sm text-white/60">
                  {p.excerpt}
                </p>

                {/* ✅ BUTON YERİNE LINK */}
                <div className="mt-5">
                  <Link
                    href={`/${locale}/${p.dept}/blog/${p.slug}`}
                    className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
                  >
                    {t("readMore")}
                    <span className="transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
