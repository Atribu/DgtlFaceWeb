// app/[locale]/components/faq/FaqMainServer.jsx
import Link from "next/link";
import { getMessages, getTranslations } from "next-intl/server";
import FaqTocClient from "./FaqTocClient";

// ✅ Server'da çalışacak saf helper: rich text parse
function renderRichText(text) {
  if (typeof text !== "string") return text;
  if (!text.includes("<")) return text;

  const TAG_RE =
    /<(services|seo|smm|software|reporting|a|b|ul|li)(\s+href="([^"]+)")?>(.*?)<\/\1>/gs;

  const richMap = {
    services: { href: "/Services" },
    seo: { href: "/Services/seo" },
    smm: { href: "/Services/smm" },
    software: { href: "/Services/software" },
    reporting: { href: "/Services/digitalAnalysis" },
  };

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
    else if (tag === "ul") {
      out.push(
        <ul key={`ul-${k++}`} className="mt-2 list-disc list-inside space-y-1 text-left leading-relaxed">
          {children}
        </ul>
      );
    } else if (tag === "li") {
      out.push(
        <li key={`li-${k++}`} className="flex items-start justify-center lg:justify-start gap-2">
          <span className="mt-[0.35em] leading-none">•</span>
          <div className="text-center lg:text-left">{children}</div>
        </li>
      );
    } else if (tag === "a") {
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
        <Link
          key={`x-${tag}-${k++}`}
          href={href}
          className="font-semibold underline underline-offset-4 hover:opacity-80 text-purple-700"
        >
          {children}
        </Link>
      );
    }

    lastIndex = start + full.length;
  }

  if (lastIndex < text.length) out.push(text.slice(lastIndex));
  return out;
}

function collectDynamicSections(ns) {
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
    (a, b) => Number(a.id.replace("section", "")) - Number(b.id.replace("section", ""))
  );
}

export default async function FaqMainServer({ pageNs = "FaqGeneral" }) {
  const t = await getTranslations(pageNs);
  const messages = await getMessages();

  const ns = messages?.[pageNs] || {};
  const generalItems = ns?.sections?.generalQuestions?.items || [];
  const quickItems = ns?.sections?.quickAnswers?.items || [];
  const dynamicSections = collectDynamicSections(ns);

  // ✅ TOC datası (Client'a gidecek)
  const sections = [
    { id: "intro", label: t("toc.intro") },
    { id: "ai", label: t("toc.aiCapsule") },
    { id: "voice", label: t("toc.voiceSummary") },
    { id: "queries", label: t("toc.voiceQueries") },
    { id: "general", label: ns?.sections?.generalQuestions?.title || "Genel Sorular" },
    { id: "quick", label: ns?.sections?.quickAnswers?.title || "Kısa Yanıtlar" },
    ...dynamicSections.map((s) => ({ id: s.id, label: s.title })),
  ].filter((x) => x?.id && x?.label);

  return (
    <section className="max-w-screen flex justify-center bg-white">
      <div className="w-[95%] lg:w-[98%] py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-4 xl:gap-6 lg:items-start">

          {/* ✅ Client TOC */}
          <FaqTocClient sections={sections} />

          {/* ✅ Server Content */}
          <div className="lg:col-span-8 mr-[1%]">
            <div className="rounded-2xl border border-black/5 bg-white py-3 px-2 md:p-5 xl:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)] ">
              <h1 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold leading-[120%] text-[#140f25]">
                {t("h1")}
              </h1>

              {/* Intro */}
              <div
                id="intro"
                className="scroll-mt-[120px] mt-4 space-y-3 text-[#140f25]/90 leading-[135%] lg:leading-relaxed text-[14px] lg:text-[16px] [&_li]:text-start [&_li]:ml-[30%]"
              >
                {["p1", "p2", "p3"].map((k) => {
                  const raw = ns?.intro?.[k];
                  if (!raw || !raw.trim()) return null;
                  const hasBlock = raw.includes("<ul") || raw.includes("<li");
                  const Wrapper = hasBlock ? "div" : "p";
                  return <Wrapper key={k}>{renderRichText(raw)}</Wrapper>;
                })}
              </div>

              {/* AI */}
              <div id="ai" className="scroll-mt-[120px] mt-8 rounded-2xl bg-[#140f25] text-white p-5 lg:p-6">
                <p className="text-[12px] uppercase tracking-[0.18em] text-white/60 mb-2">
                  {ns?.aiCapsule?.title || t("aiCapsule.title")}
                </p>
                <p className="dg-ai-capsule text-[14px] lg:text-[16px] leading-[135%] lg:leading-relaxed text-white/90">
                  {renderRichText(ns?.aiCapsule?.text || "")}
                </p>
              </div>

              {/* Voice */}
              <div id="voice" className="scroll-mt-[120px] mt-6 rounded-2xl bg-[#f2edf9] p-5 lg:p-6">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#140f25]/60 mb-2">
                  {ns?.voiceSummary?.title || t("voiceSummary.title")}
                </p>
                <p className="dg-voice-summary text-[14px] lg:text-[16px] leading-[135%] lg:leading-relaxed text-[#140f25]/90">
                  {renderRichText(ns?.voiceSummary?.text || "")}
                </p>
              </div>

              {/* Queries */}
              <div id="queries" className="scroll-mt-[120px] mt-6 text-center items-center justify-center flex flex-col">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#140f25]/60 mb-3">
                  {t("voiceQueries.title")}
                </p>
                <ul className="dg-voice-queries grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5 text-[14px] lg:text-[16px] text-[#140f25]/90 text-start w-[90%] ml-[10%]">
                  {Object.keys(ns?.voiceQueries || {})
                    .filter((k) => /^q\d+$/.test(k))
                    .sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)))
                    .map((k) => (
                      <li key={k}>{renderRichText(ns.voiceQueries[k])}</li>
                    ))}
                </ul>
              </div>

              {/* Genel Sorular */}
              <div id="general" className="scroll-mt-[120px] mt-10">
                <h2 className="text-[18px] lg:text-[22px] font-bold text-[#140f25]">
                  {ns?.sections?.generalQuestions?.title}
                </h2>

                <div className="mt-4 space-y-3 text-start">
                  {generalItems.map((it, idx) => (
                    <details
                      key={`${it.q}-${idx}`}
                      id={`generalQuestions-q-${idx}`}
                      className="group rounded-2xl border border-black/5 bg-white p-4 lg:p-5 scroll-mt-[100px]"
                    >
                      <summary className="cursor-pointer list-none font-semibold text-[#140f25] flex items-start justify-between gap-3">
                        <span>{it.q}</span>
                        <span className="mt-1 text-[#140f25]/40 group-open:rotate-180 transition">⌄</span>
                      </summary>
                      <div className="mt-3 text-[14px] lg:text-[16px] leading-[135%] lg:leading-relaxed text-[#140f25]/85 text-start">
                        {renderRichText(it.a)}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Quick */}
              <div id="quick" className="scroll-mt-[120px] mt-10">
                <h2 className="text-[18px] lg:text-[22px] font-bold text-[#140f25]">
                  {ns?.sections?.quickAnswers?.title}
                </h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {quickItems.map((it, idx) => (
                    <div
                      key={`${it.q}-${idx}`}
                      id={`quickAnswers-q-${idx}`}
                      className="rounded-2xl bg-[#f2edf9] p-4 lg:p-5 border border-black/5 scroll-mt-[100px]"
                    >
                      <p className="font-semibold text-[#140f25]">{it.q}</p>
                      <div className="mt-2 text-[14px] lg:text-[16px] text-[#140f25]/85 leading-[135%] lg:leading-relaxed">
                        {renderRichText(it.a)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic sections */}
              {dynamicSections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-[120px] mt-10">
                  <h2 className="text-[18px] lg:text-[22px] font-semibold text-[#140f25] mb-4">
                    {section.title}
                  </h2>

                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <details
                        key={`${section.id}-${item.q}-${idx}`}
                        id={`${section.id}-q-${idx}`}
                        className="group rounded-xl border border-black/5 bg-white p-4 transition hover:shadow-md scroll-mt-[100px]"
                      >
                        <summary className="cursor-pointer list-none font-medium text-[#140f25] flex items-start justify-between gap-3">
                          <span>{item.q}</span>
                          <span className="mt-1 text-[#547DCF] group-open:rotate-45 transition">+</span>
                        </summary>

                        <div className="mt-3 text-[14px] lg:text-[15px] leading-[135%] lg:leading-relaxed text-[#140f25]/90 text-start">
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
