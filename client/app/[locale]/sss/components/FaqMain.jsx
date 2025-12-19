"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useMessages, useTranslations } from "next-intl";

export default function FaqMain({ pageNs = "FaqGeneral" }) {
  const t = useTranslations(pageNs);
  const messages = useMessages();

  const ns = messages?.[pageNs] || {};
  const generalItems = ns?.sections?.generalQuestions?.items || [];
  const quickItems = ns?.sections?.quickAnswers?.items || [];

  // ✅ 1) ÖNCE dynamicSections
  const dynamicSections = useMemo(() => {
    const sources = [ns, ns?.sections].filter(Boolean);
    const map = new Map();

    for (const src of sources) {
      for (const key of Object.keys(src)) {
        if (!/^section\d+$/.test(key)) continue;

        const val = src[key];
        const title = val?.title;
        const items = Array.isArray(val?.items) ? val.items : [];

        if (title && items.length) {
          map.set(key, { id: key, title, items });
        }
      }
    }

    return Array.from(map.values()).sort(
      (a, b) =>
        Number(a.id.replace("section", "")) - Number(b.id.replace("section", ""))
    );
  }, [ns]);

  // ✅ 2) SONRA sections (TOC)
  const sections = useMemo(() => {
    const base = [
      { id: "intro", label: t("toc.intro") },
      { id: "ai", label: t("toc.aiCapsule") },
      { id: "voice", label: t("toc.voiceSummary") },
      { id: "queries", label: t("toc.voiceQueries") },
      { id: "general", label: ns?.sections?.generalQuestions?.title || "Genel Sorular" },
      { id: "quick", label: ns?.sections?.quickAnswers?.title || "Kısa Yanıtlar" },
    ];

    const dyn = dynamicSections.map((s) => ({ id: s.id, label: s.title }));

    return [...base, ...dyn].filter((x) => x?.id && x?.label);
  }, [t, ns, dynamicSections]);

  const [activeId, setActiveId] = useState(sections[0]?.id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const els = sections.map((s) => sectionRefs.current[s.id]).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { threshold: [0.25, 0.4, 0.6], rootMargin: "-20% 0px -55% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const scrollTo = (id) => sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });

  // ✅ Rich tag → Link render (JSON’daki <services>...</services> için)
  const richMap = {
    services: { href: "/Services" },
    seo: { href: "/Services/seo" },
    smm: { href: "/Services/smm" },
    software: { href: "/Services/software" },
    reporting: { href: "/Services/digitalAnalysis" },
  };

function renderRichText(text) {
  if (typeof text !== "string") return text;

  // ⚡️ Performans: hiç tag yoksa direkt dön
  if (!text.includes("<")) return text;

  // ✅ Regex her çağrıda yeniden oluşur (lastIndex bug yok)
  const TAG_RE =
    /<(services|seo|smm|software|reporting|a|b|ul|li)(\s+href="([^"]+)")?>(.*?)<\/\1>/gs;

  const out = [];
  let lastIndex = 0;
  let match;
  let k = 0;

  while ((match = TAG_RE.exec(text)) !== null) {
    const [full, tag, _hrefPart, hrefAttr, inner] = match;
    const start = match.index;

    if (start > lastIndex) out.push(text.slice(lastIndex, start));

    const children = renderRichText(inner);

    if (tag === "b") out.push(<b key={`b-${k++}`} className="font-semibold">{children}</b>);
    else if (tag === "ul") out.push(<ul key={`ul-${k++}`} className="list-disc pl-5 space-y-1">{children}</ul>);
    else if (tag === "li") out.push(<li key={`li-${k++}`}>{children}</li>);
    else if (tag === "a") {
      out.push(
        <a
      key={`a-${k++}`}
      href={hrefAttr || "#"}
      className="font-semibold underline underline-offset-4 hover:opacity-80 text-purple-700"
     target={hrefAttr?.startsWith("http") ? "_blank" : undefined}
     rel={hrefAttr?.startsWith("http") ? "noreferrer noopener" : undefined}
    >
      {children}
    </a>
      );
    } else {
      const href = richMap[tag]?.href || "#";
      out.push(
        <Link key={`x-${tag}-${k++}`} href={href} className="font-semibold underline underline-offset-4 hover:opacity-80 text-purple-700">
          {children}
        </Link>
      );
    }

    lastIndex = start + full.length;
  }

  if (lastIndex < text.length) out.push(text.slice(lastIndex));
  return out;
}



const rich = {
  b: (chunks) => <b className="font-semibold">{chunks}</b>,
  strong: (chunks) => <b className="font-semibold">{chunks}</b>,
  ul: (chunks) => <ul className="list-disc pl-5 space-y-1">{chunks}</ul>,
  li: (chunks) => <li>{chunks}</li>,
  a: (chunks) => (
    <Link
      href={String(chunks)}
      className="font-semibold underline underline-offset-4 hover:opacity-80 text-purple-700"
    >
      {chunks}
    </Link>
  ),
};

  return (
    <section className="max-w-screen flex justify-center bg-white">
      <div className="w-[95%] lg:w-[98%] py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 lg:items-start">

          {/* SOL: TOC */}
         <aside className="lg:col-span-3 lg:sticky lg:top-[13.4%] lg:self-start">
            <div className=" rounded-2xl bg-[#140f25] text-white p-4 lg:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
              <p className="text-[12px] tracking-[0.18em] uppercase text-white/60 mb-3">
                {t("toc.title")}
              </p>

              <div className="flex flex-col gap-2">
                {sections.map((s, idx) => {
                  const active = s.id === activeId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => scrollTo(s.id)}
                      className={[
                        "text-left rounded-xl px-3 py-2 transition",
                        active ? "bg-white/10 ring-1 ring-white/20" : "hover:bg-white/5",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3">
                        <span className={[
                          "mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-semibold",
                          active ? "bg-white text-[#140f25]" : "bg-white/10 text-white/80",
                        ].join(" ")}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <p className={active ? "text-white" : "text-white/80"}>{s.label}</p>
                          {active && (
                            <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF]" />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="mt-4 text-[12px] text-white/55 leading-relaxed">
                {t("toc.note")}
              </p>
            </div>
          </aside>

          {/* SAĞ: CONTENT */}
          <div className="lg:col-span-9 mr-[1%]">
            <div className="rounded-2xl border border-black/5 bg-white p-5 lg:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)] ">
              <h1 className="text-[22px] lg:text-[34px] font-bold leading-[120%] text-[#140f25]">
                {t("h1")}
              </h1>

              {/* Intro */}
              <div
  id="intro"
  ref={(el) => (sectionRefs.current.intro = el)}
  className="scroll-mt-[120px] mt-4 space-y-3 text-[#140f25]/90 leading-relaxed text-[14px] lg:text-[16px] [&_li]:text-start [&_li]:ml-[30%]"
>
 {["p1","p2","p3"].map((k) => {
   const raw = ns?.intro?.[k];
   if (!raw || !raw.trim()) return null;
   // <ul>/<li> gibi bloklar gelebilir: <p> içine sokma
   const hasBlock = raw.includes("<ul") || raw.includes("<li");
   const Wrapper = hasBlock ? "div" : "p";
   return <Wrapper key={k}>{renderRichText(raw)}</Wrapper>;
 })}
</div>

              {/* AI */}
              <div id="ai" ref={(el) => (sectionRefs.current.ai = el)} className="scroll-mt-[120px] mt-8 rounded-2xl bg-[#140f25] text-white p-5 lg:p-6">
                <p className="text-[12px] uppercase tracking-[0.18em] text-white/60 mb-2">
                  {t.rich("aiCapsule.title",rich)}
                </p>
                <p className="text-[14px] lg:text-[16px] leading-relaxed text-white/90">
                  {t.rich("aiCapsule.text",rich)}
                </p>
              </div>

              {/* Voice */}
              <div id="voice" ref={(el) => (sectionRefs.current.voice = el)} className="scroll-mt-[120px] mt-6 rounded-2xl bg-[#f2edf9] p-5 lg:p-6">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#140f25]/60 mb-2">
                  {t.rich("voiceSummary.title",rich)}
                </p>
                <p className="text-[14px] lg:text-[16px] leading-relaxed text-[#140f25]/90">
                  {t.rich("voiceSummary.text",rich)}
                </p>
              </div>

              {/* Queries */}
              <div id="queries" ref={(el) => (sectionRefs.current.queries = el)} className="scroll-mt-[120px] mt-6 text-center items-center justify-center flex flex-col">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#140f25]/60 mb-3">
                  {t.rich("voiceQueries.title",rich)}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5 text-[14px] lg:text-[16px] text-[#140f25]/90 text-start w-[90%] ml-[10%]">
               {Object.keys(ns?.voiceQueries || {})
  .filter((k) => /^q\d+$/.test(k))
  .sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)))
  .map((k) => (
    <li key={k}>{renderRichText(ns.voiceQueries[k])}</li>
  ))}
                </ul>
              </div>

              {/* ✅ Genel Sorular */}
              <div id="general" ref={(el) => (sectionRefs.current.general = el)} className="scroll-mt-[120px] mt-10">
                <h2 className="text-[18px] lg:text-[22px] font-bold text-[#140f25]">
                  {ns?.sections?.generalQuestions?.title}
                </h2>

                <div className="mt-4 space-y-3 text-start">
                 {generalItems.map((it) => (
  <details key={it.q} className="group rounded-2xl border border-black/5 bg-white p-4 lg:p-5">
                      <summary className="cursor-pointer list-none font-semibold text-[#140f25] flex items-start justify-between gap-3">
                        <span>{it.q}</span>
                        <span className="mt-1 text-[#140f25]/40 group-open:rotate-180 transition">⌄</span>
                      </summary>
                      <div className="mt-3 text-[14px] lg:text-[16px] leading-relaxed text-[#140f25]/85 [&:a]:text-black text-start">
                        {renderRichText(it.a)}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* ✅ Kısa ve Hızlı Yanıtlar */}
              <div id="quick" ref={(el) => (sectionRefs.current.quick = el)} className="scroll-mt-[120px] mt-10">
                <h2 className="text-[18px] lg:text-[22px] font-bold text-[#140f25]">
                  {ns?.sections?.quickAnswers?.title}
                </h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                 {quickItems.map((it) => (
  <div key={it.q}  className="rounded-2xl bg-[#f2edf9] p-4 lg:p-5 border border-black/5">
                      <p className="font-semibold text-[#140f25]">{it.q}</p>
                      <p className="mt-2 text-[14px] lg:text-[16px] text-[#140f25]/85 leading-relaxed">
                        {renderRichText(it.a)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {dynamicSections.map((section) => (
  <div
    key={section.id}
    id={section.id}
    ref={(el) => (sectionRefs.current[section.id] = el)}
    className="scroll-mt-[120px] mt-10"
  >
    {/* Section başlığı */}
    <h2 className="text-[18px] lg:text-[22px] font-semibold text-[#140f25] mb-4">
      {section.title}
    </h2>

    {/* Q&A listesi */}
    <div className="space-y-3">
    {section.items.map((item) => (
  <details key={`${section.id}-${item.q}`}
          className="group rounded-xl border border-black/5 bg-white p-4 transition hover:shadow-md"
        >
          <summary className="cursor-pointer list-none font-medium text-[#140f25] flex items-start justify-between gap-3">
            <span>{item.q}</span>
            <span className="mt-1 text-[#547DCF] group-open:rotate-45 transition">
              +
            </span>
          </summary>

          <div className="mt-3 text-[14px] lg:text-[15px] leading-relaxed text-[#140f25]/90 text-start">
          {renderRichText(item.a)}
          </div>
        </details>
      ))}
    </div>
  </div>
))}
              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-3 items-center justify-center">
                <a href={t("cta.primaryHref")} className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-white font-semibold bg-[#140f25]">
                  {t("cta.primary")}
                </a>
                <a href={t("cta.secondaryHref")} className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold text-[#ffffff] bg-[#140f25]">
                  {t("cta.secondary")}
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
