import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { BLOG_MAP } from "../blogMap";

const GRADIENT =
  "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]";

function formatDateTR(dateStr) {
  // Türkçe yorum: Basit tarih formatı (2026-01-05 -> 5 Ocak 2026)
  // dateStr yoksa boş döner
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogDetailPage({ params }) {
  const { locale, faq, slug } = params; // ✅ folder adı [faq]
  const department = faq;

  setRequestLocale(locale);

  const messageKey = BLOG_MAP?.[department]?.[slug];
  if (!messageKey) notFound();

  const messages = await getMessages();
  const post = messages?.[messageKey];
  if (!post) notFound();

  if (post.department !== department) notFound();

  // Türkçe yorum: JSON daha gelmediği için örnek içerik üretelim
  const sections =
    post.sections?.length > 0
      ? post.sections
      : [
          {
            id: "overview",
            title: "Genel Bakış",
            body: [
              "Bu yazıda SEO teknik kontrol listesi ile site sağlığını nasıl güvence altına alabileceğinizi anlatıyoruz.",
              "Amaç: indekslenebilirlik, performans, teknik hatalar ve ölçümleme tarafında temel bir standart oluşturmak.",
            ],
          },
          {
            id: "crawl-index",
            title: "Crawl ve Index Kontrolleri",
            body: [
              "Robots.txt ve sitemap.xml kontrolü ile başlayın. Ardından canonical, noindex ve yönlendirme zincirlerini tarayın.",
              "Search Console ve log analizi birlikte kullanılırsa gerçek crawl davranışı çok daha net görülür.",
            ],
          },
          {
            id: "performance",
            title: "Performans ve Core Web Vitals",
            body: [
              "LCP, CLS ve INP metriklerini sayfa türlerine göre inceleyin. Görsel optimizasyonu ve kritik CSS iyileştirmeleri hızlı sonuç verir.",
              "Özellikle mobilde TTFB ve JS yükü kontrol edilmelidir.",
            ],
          },
          {
            id: "structured-data",
            title: "Structured Data ve Teknik SEO Detayları",
            body: [
              "Schema yapılandırmaları (Organization, FAQ, Breadcrumb vb.) hatasız olmalı. Rich Result hataları düzenli takip edilmeli.",
              "Hreflang, pagination ve faceted navigation gibi konular projeye göre kritik hale gelebilir.",
            ],
          },
          {
            id: "reporting",
            title: "Raporlama ve Süreklilik",
            body: [
              "Tek seferlik kontrol yerine düzenli bir kontrol ritmi oluşturun. Haftalık/aylık checklist ile geriye dönük kıyas mümkün olur.",
              "Raporlarda sadece sorun listesi değil, etki ve önceliklendirme de olmalı.",
            ],
          },
        ];

  // Türkçe yorum: Meta alanları JSON’dan gelmezse default verelim
  const publishedAt = post.publishedAt || "2026-01-05";
  const author = post.author || "DGTLFACE Editorial";
  const readingTime = post.readingTime || "6 dk";

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Banner (50vh) */}
      <header className="relative h-[50vh] overflow-hidden">
        {/* gradient glow */}
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div
            className={`absolute -top-28 left-1/2 h-[420px] w-[950px] -translate-x-1/2 rounded-full ${GRADIENT}`}
          />
        </div>

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto flex h-full w-full max-w-[1100px] flex-col justify-end px-4 pb-10">
          <p className="text-sm text-white/60">
            {(department || "").toUpperCase()}
          </p>

          <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            {post.title}
          </h1>

          {/* meta row */}
          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-white/70">
            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1">
              {formatDateTR(publishedAt)}
            </span>

            <span className="text-white/30">•</span>

            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1">
              {author}
            </span>

            <span className="text-white/30">•</span>

            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1">
              {readingTime} okuma
            </span>
          </div>

          {post.excerpt ? (
            <p className="mt-5 max-w-3xl text-base text-white/70 md:text-lg">
              {post.excerpt}
            </p>
          ) : null}
        </div>
      </header>

      {/* Content + Sticky TOC */}
      <section className="mx-auto w-full max-w-[1100px] px-4 pb-16 pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <article className="min-w-0">
            {/* Mobil TOC */}
            <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-5 lg:hidden">
              <p className="text-sm font-medium text-white">İçindekiler</p>
              <div className="mt-4 flex flex-col gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24"
                >
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h2>

                  <div className="mt-4 space-y-4 text-base leading-7 text-white/80">
                    {Array.isArray(s.body) ? (
                      s.body.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))
                    ) : (
                      <p>{s.body}</p>
                    )}
                  </div>

                  {/* küçük ayraç */}
                  <div className="mt-8 h-px w-full bg-white/10" />
                </section>
              ))}
            </div>
          </article>

          {/* Desktop Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-white">İçindekiler</p>
                <span className={`h-2 w-14 rounded-full ${GRADIENT}`} />
              </div>

              <nav className="mt-4 flex flex-col gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-white/20 transition group-hover:bg-white/60" />
                      {s.title}
                    </span>
                  </a>
                ))}
              </nav>

              {/* CTA/mini bilgi (opsiyonel) */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-white/60">
                Bu sayfa yapısı, JSON’dan section bazlı içerik geldiğinde otomatik oluşacak şekilde hazır.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
