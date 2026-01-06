import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { BLOG_MAP, BLOG_IMAGE_MAP } from "../blogMap";
import SectionRenderer from "../SectionRenderer";
import BlogToc from "../BlogToc";
import Image from "next/image";
import { getMediaBySlot } from "@/app/lib/blogMediaMap";

const GRADIENT = "bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF]";

// Helper: Tarih formatlama
function formatDateTR(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Helper: Her türlü veriyi string'e çevir
function asText(v) {
  if (v == null) return "";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (Array.isArray(v)) return v.map(asText).filter(Boolean).join("\n");
  if (typeof v === "object") {
    if (typeof v.text === "string" || typeof v.text === "number") return String(v.text);
    if (typeof v.content === "string" || typeof v.content === "number") return String(v.content);
    return "";
  }
  return "";
}

// Helper: Liste formatına çevir
function asList(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v.map(asText).filter(Boolean);
  const t = asText(v);
  return t ? [t] : [];
}

// Helper: FAQ normalize et
function asFaqItems(v) {
  if (!v) return [];
  if (!Array.isArray(v)) return [];
  
  return v
    .map((it) => {
      // Farklı property isimleri dene
      const q = it?.q ?? it?.question ?? it?.title ?? it?.Q ?? "";
      const a = it?.a ?? it?.answer ?? it?.text ?? it?.A ?? it?.content ?? "";
      
      const qText = asText(q);
      const aText = asText(a);
      
      if (!qText || !aText) return null;
      return { q: qText, a: aText };
    })
    .filter(Boolean);
}

// Helper: Department label
function deptLabel(dept) {
  const map = {
    seo: "SEO",
    sem: "SEM",
    smm: "SMM",
    creative: "Creative",
    "pms-ota": "PMS & OTA",
    "call-center": "Çağrı Merkezi",
    "data-analytics": "Veri Analizi",
    "hotel-digital": "Otel Dijital Dönüşüm",
    software: "Web & Yazılım",
  };
  return map[dept] || (dept || "").toUpperCase();
}

// Component: Badge
function Badge({ children }) {
  return (
    <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

// Component: Accordion (FAQ için)
function Accordion({ items }) {
  return (
    <div className="space-y-2">
      {items.map((it, idx) => (
        <details
          key={`faq-${idx}`}
          className="group rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <summary className="cursor-pointer list-none text-sm font-medium text-white">
            <span className="flex items-center justify-between gap-4">
              {it.q}
              <span className="text-white/40 transition group-open:rotate-180">
                ▾
              </span>
            </span>
          </summary>
          <div className="mt-3 text-sm leading-6 text-white/70">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

export default async function BlogDetailPage({ params }) {
  const { locale, faq, slug } = params;
  const department = faq;

const bannerMedia = getMediaBySlot(slug, "banner");

  setRequestLocale(locale);

  // Blog post'u bul
  const postKey = BLOG_MAP?.[department]?.[slug];
  if (!postKey) notFound();

  const messages = await getMessages();
  const post = messages?.BlogPosts?.[postKey];
  if (!post) notFound();

  if (post.department !== department) notFound();

  // Meta bilgileri
  const updatedAt = post.updatedAt || post.publishedAt || "";
  const author = post.author || "DGTLFACE Editorial";
  const readingTime = post.readingTime || "5 dk okuma";
  const excerpt = asText(post.h1?.intro) || asText(post.excerpt) || asText(post.modules?.answerBlock);

  // Department label
  const deptName = deptLabel(department);

  // Sections
  const sections = Array.isArray(post.sections) ? post.sections : [];

  // Modül içerikleri
  const answerBlock = asText(post.modules?.answerBlock);
  const sgeSummary = asText(post.modules?.sgeSummary);
  const voiceAnswer = asText(post.modules?.voiceAnswer);
  const factSheet = Array.isArray(post.modules?.aiFactSheet)
    ? post.modules.aiFactSheet.map(asText).filter(Boolean)
    : [];

  // H1 içerikleri
  const h1Title = asText(post.h1?.title) || post.title;
  const h1Intro = asText(post.h1?.intro);
  const quickSummary = asList(post.h1?.quickSummary);
  const primaryCta = post.h1?.ctaPrimary;

  // FAQ - tüm olası yolları dene
  const faqRaw =
    post.faq ??
    post.faqItems ??
    post.modules?.faq ??
    post.modules?.faqItems ??
    post.paa ??
    post.paaItems ??
    [];
  
  console.log("FAQ Raw Data:", faqRaw); // Debug için
  const faqItems = asFaqItems(faqRaw);
  console.log("FAQ Items:", faqItems); // Debug için
  const faqTitle = asText(post.faqTitle) || "Sık Sorulan Sorular";

  // CTA modülleri (sayfa sonu)
  const ctaPrimary = post.ctaModule?.primary || post.ctaEnd?.primary;
  const ctaSecondary = post.ctaModule?.secondary || post.ctaEnd?.secondary;

  // Related posts
  const relatedPosts = Array.isArray(post.relatedPosts) ? post.relatedPosts : [];

  // Internal links
  const internalLinks = Array.isArray(post.internalLinks) ? post.internalLinks : [];

  return (
    <main className="min-h-screen bg-[#120014] text-white">
      {/* Top spacing */}
      <div className="mx-auto w-full max-w-[1400px] px-4 pt-24">
        {/* Breadcrumbs */}
        <nav className="text-sm text-white/60">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href={`/${locale}/${department}`} className="hover:text-white">
                {deptName}
              </Link>
            </li>
            <li className="text-white/30">›</li>
            <li>
              <Link href={`/${locale}/bloglar`} className="hover:text-white">
                Blog
              </Link>
            </li>
            <li className="text-white/30">›</li>
            <li className="text-white/80">{post.title}</li>
          </ol>
        </nav>
      </div>

      {/* HERO */}
      <header className="relative h-[50vh] w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
             <div className="relative h-full w-full">
      {bannerMedia?.src ? (
        <Image
          src={bannerMedia.src}
          alt={bannerMedia.alt || ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : null}
    </div>
          <div className="absolute inset-0 opacity-30 blur-3xl">
            <div
              className={`absolute -top-28 left-1/2 h-[420px] w-[950px] -translate-x-1/2 rounded-full ${GRADIENT}`}
            />
          </div>
          <div className="absolute inset-0 bg-[#120014]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex h-full w-full max-w-[1400px] flex-col items-center justify-center px-4 text-center ">
          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
            {h1Title}
          </h1>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70 md:text-sm">
            <Badge>{formatDateTR(updatedAt)}</Badge>
            <span className="text-white/30">•</span>
            <Badge>{author}</Badge>
            <span className="text-white/30">•</span>
            <Badge>{readingTime}</Badge>
          </div>
        </div>
      </header>

      {/* Excerpt */}
      {h1Intro && (
        <section className="mx-auto w-full max-w-[1400px] px-4">
          <p className="mt-8 text-base leading-7 text-white/70 md:text-lg whitespace-pre-line">
            {h1Intro}
          </p>
        </section>
      )}

      {/* MAIN + ASIDE */}
      <section className="mx-auto w-full max-w-[1700px] px-4 pb-16 pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* MAIN CONTENT */}
          <article className="min-w-0 space-y-8">
            {/* Answer Block */}
            {answerBlock && (
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-white/60">
                  Öne Çıkan Cevap
                </p>
                <div className="mt-3 text-sm leading-7 text-white/80 whitespace-pre-line">
                  {answerBlock}
                </div>
              </div>
            )}

            {/* SGE + Fact Sheet */}
            <div className="grid gap-4 md:grid-cols-2">
              {sgeSummary && (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-white">SGE Summary</p>
                  <p className="mt-3 text-sm leading-6 text-white/75 whitespace-pre-line">
                    {sgeSummary}
                  </p>
                </div>
              )}

              {factSheet.length > 0 && (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-white">AI Fact Sheet</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {factSheet.map((x, i) => (
                      <li key={i}>• {x}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Voice Answer */}
            {voiceAnswer && (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium text-white">🎙️ Voice Answer</p>
                <p className="mt-2 text-sm text-white/75 whitespace-pre-line">
                  {voiceAnswer}
                </p>
              </div>
            )}

            {/* Hızlı Özet */}
            {quickSummary.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium text-white">Hızlı Özet</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {quickSummary.map((x, i) => (
                    <li key={i}>• {x}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Primary CTA (H1 altında) */}
            {primaryCta?.label && (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium text-white">{primaryCta.label}</p>
                {primaryCta.text && (
                  <p className="mt-2 text-sm text-white/70 whitespace-pre-line">
                    {asText(primaryCta.text)}
                  </p>
                )}
                {primaryCta.href && (
                  <Link
                    href={`/${locale}${primaryCta.href}`}
                    className={`mt-4 inline-flex w-full items-center justify-center lg:items-left lg:justify-left gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 ${GRADIENT}`}
                  >
                    {primaryCta.label} <span>→</span>
                  </Link>
                )}
              </div>
            )}

            {/* Sections */}
            <div className="space-y-10 text-center lg:text-left">
              {sections.map((s, idx) => (
                <SectionRenderer key={s.id || idx} section={s} index={idx} locale={locale}  slug={slug}/>
              ))}
            </div>

            {/* CTA Module (sayfa sonu) */}
            {(ctaPrimary?.label || ctaSecondary?.label) && (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium text-white">
                  {asText(ctaPrimary?.title) || "Bir Sonraki Adım"}
                </p>
                {ctaPrimary?.text && (
                  <p className="mt-2 text-sm text-white/70 whitespace-pre-line">
                    {asText(ctaPrimary.text)}
                  </p>
                )}

                <div className="mt-5 flex flex-col gap-3 sm:flex-row items-center justify-center  lg:items-left lg:justify-left">
                  {ctaPrimary?.href && ctaPrimary?.label && (
                    <Link
                      href={`/${locale}${ctaPrimary.href}`}
                      className={`inline-flex items-center justify-center  lg:items-left lg:justify-left gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 ${GRADIENT}`}
                    >
                      {asText(ctaPrimary.label)} <span>→</span>
                    </Link>
                  )}

                  {ctaSecondary?.label && (
                    <Link
                      href={ctaSecondary.href ? `/${locale}${ctaSecondary.href}` : "#"}
                      className="inline-flex items-center justify-center  lg:items-left lg:justify-left rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
                    >
                      {asText(ctaSecondary.label)}
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* FAQ */}
            {faqItems.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">{faqTitle}</h2>
                <Accordion items={faqItems} />
              </div>
            )}
            
            {/* Debug: FAQ yoksa mesaj göster */}
            {faqItems.length === 0 && (
              <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">
                <p className="text-sm text-yellow-500/80">
                  ⚠️ FAQ verisi bulunamadı. JSON'da "faq" alanını kontrol edin.
                </p>
                <pre className="mt-2 text-xs text-white/50 overflow-auto">
                  {JSON.stringify(post.faq, null, 2)}
                </pre>
              </div>
            )}

            {/* Internal Links */}
            {internalLinks.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium text-white">İlgili İçerikler</p>
                <ul className="mt-4 space-y-2">
                  {internalLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={`/${locale}${link.href}`}
                        className="text-sm text-white/75 hover:text-white transition"
                      >
                        → {asText(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium text-white">İlgili Yazılar</p>
                <ul className="mt-4 space-y-2">
                  {relatedPosts.map((rp, i) => (
                    <li key={i}>
                      <Link
                        href={rp.href ? `/${locale}${rp.href}` : "#"}
                        className="text-sm text-white/75 hover:text-white transition"
                      >
                        → {asText(rp.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          {/* ASIDE (TOC) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-3">
              <BlogToc sections={sections} />
              {/* Sticky mini CTA */}
              <div className="rounded-3xl border border-white/10 bg-white/5 xl:p-3 4xl:p-5">
                <p className="text-sm font-medium text-white">Mini CTA</p>
                <p className="mt-2 text-sm text-white/70">
                   Başlangıç Analizi Talep Et
                </p>

                <div className="mt-2 flex flex-col gap-2">
                  <Link
                    href={`/${locale}/iletisim`}
                    className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.99] ${GRADIENT}`}
                  >
                    Audit iste
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
                  >
                    Checklist
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}