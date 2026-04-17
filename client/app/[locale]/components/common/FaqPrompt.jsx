"use client";

import NextLink from "next/link";
import { buildFaqHrefBySlug } from "@/app/lib/faq-url";
import { useLocale, useTranslations } from "next-intl";
import { RxQuestionMark } from "react-icons/rx";

const decorativeQuestionMarks = [
  {
    id: 1,
    size: 40,
    className: "absolute left-[4%] top-[10%] rotate-[-18deg] text-white/60 lg:text-white/90",
  },
  {
    id: 2,
    size: 30,
    className: "absolute left-[10%] bottom-[12%] rotate-[16deg] text-white/60 lg:text-white/90",
  },
  {
    id: 3,
    size: 32,
    className: "absolute left-[22%] top-[6%] rotate-[22deg] text-white/60 lg:text-white/90",
  },
  {
    id: 4,
    size: 35,
    className: "absolute left-[34%] bottom-[14%] rotate-[-12deg] text-white/60 lg:text-white/90",
  },
  {
    id: 5,
    size: 34,
    className: "absolute left-[46%] top-[12%] rotate-[14deg] text-white/60 lg:text-white/90",
  },
  {
    id: 6,
    size: 30,
    className: "absolute right-[34%] bottom-[10%] rotate-[-20deg] text-white/60 lg:text-white/90",
  },
  {
    id: 7,
    size: 38,
    className: "absolute right-[24%] top-[8%] rotate-[12deg] text-white/60 lg:text-white/90",
  },
  {
    id: 8,
    size: 36,
    className: "absolute right-[16%] bottom-[4%] rotate-[-24deg] text-white/60 lg:text-white/90",
  },
  {
    id: 9,
    size: 40,
    className: "absolute right-[8%] top-[16%] rotate-[20deg] text-white/60 lg:text-white/90",
  },
  {
    id: 10,
    size: 28,
    className: "absolute right-[3%] bottom-[28%] rotate-[-10deg] text-white/60 lg:text-white/90",
  },
    {
    id: 11,
    size: 30,
    className: "absolute left-[1%] bottom-[56%] rotate-[16deg] text-white/60 lg:text-white/90",
  },
    {
    id: 12,
    size: 35,
    className: "absolute right-[30%] bottom-[44%] rotate-[12deg] text-white/60 lg:text-white/90",
  },
];

export default function FaqPrompt({
  namespace = "Homepage.faqPrompt",
  faqSlug = "sss",
}) {
  const faqSuffix = ".faqPrompt";
  const hasNestedFaqNamespace = namespace.endsWith(faqSuffix);
  const normalizedNamespace = hasNestedFaqNamespace
    ? namespace.slice(0, -faqSuffix.length)
    : namespace;
  const keyPrefix = hasNestedFaqNamespace ? "faqPrompt." : "";
  const t = useTranslations(normalizedNamespace);
  const locale = useLocale();
  const href = buildFaqHrefBySlug(faqSlug, locale);

  return (
    <section className="flex w-full justify-center px-4 lg:px-0">
      <div className="relative isolate w-[95%] max-w-[1180px] overflow-hidden rounded-[28px] border border-[#221742] bg-[linear-gradient(135deg,#140F25_0%,#1B1433_55%,#211844_100%)] px-6 py-6 shadow-[0_18px_60px_rgba(20,15,37,0.18)] lg:w-[90%] lg:px-10 lg:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(84,185,207,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(167,84,207,0.16),transparent_34%)]" />

        <div className="pointer-events-none absolute left-5 top-5 h-2.5 w-2.5 rounded-full bg-[#54B9CF]/80 shadow-[0_0_18px_rgba(84,185,207,0.45)]" />
        <div className="pointer-events-none absolute left-10 top-10 h-1.5 w-1.5 rounded-full bg-[#a555cf]/85 shadow-[0_0_14px_rgba(165,85,207,0.45)]" />
        <div className="pointer-events-none absolute right-8 top-7 h-2 w-2 rounded-full bg-[#a555cf]/75 shadow-[0_0_16px_rgba(165,85,207,0.42)]" />
        <div className="pointer-events-none absolute right-16 top-14 h-1.5 w-1.5 rounded-full bg-[#54B9CF]/75 shadow-[0_0_12px_rgba(84,185,207,0.42)]" />
        <div className="pointer-events-none absolute bottom-7 left-8 h-2 w-2 rounded-full bg-[#54B9CF]/75 shadow-[0_0_16px_rgba(84,185,207,0.42)]" />
        <div className="pointer-events-none absolute bottom-10 left-16 h-1.5 w-1.5 rounded-full bg-[#a555cf]/85 shadow-[0_0_14px_rgba(165,85,207,0.45)]" />
        <div className="pointer-events-none absolute bottom-6 right-9 h-2.5 w-2.5 rounded-full bg-[#a555cf]/72 shadow-[0_0_18px_rgba(165,85,207,0.4)]" />
        <div className="pointer-events-none absolute bottom-12 right-[4.5rem] h-1.5 w-1.5 rounded-full bg-[#54B9CF]/78 shadow-[0_0_12px_rgba(84,185,207,0.42)]" />

        {decorativeQuestionMarks.map((item) => (
          <div
            key={item.id}
            className={`pointer-events-none absolute z-[1] ${item.className}`}
            aria-hidden="true"
          >
            <RxQuestionMark
              size={item.size}
              className="drop-shadow-[0_8px_22px_rgba(255,255,255,0.2)]"
            />
          </div>
        ))}

        <div className="relative z-[2] grid items-center gap-8 lg:grid-cols-[minmax(0,1.12fr)_330px] xl:grid-cols-[minmax(0,1.18fr)_390px]">
          <div className="flex flex-col items-start gap-4 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#54B9CF]/35 bg-[#54B9CF]/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8EC5D6]">
                {t(`${keyPrefix}eyebrow`)}
              </span>
              <span className="rounded-full border border-[#a555cf] bg-white/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a555cf]">
                FAQ
              </span>
            </div>

            <h2 className="max-w-[640px] text-[20px] font-semibold leading-[120%] text-white lg:text-[24px]">
              {t(`${keyPrefix}title`)}
            </h2>

            <p className="max-w-[720px] text-[13px] leading-[160%] text-white lg:text-[15px]">
              {t(`${keyPrefix}text.before`)}
              <NextLink
                href={href}
                className="mx-1 mt-1 inline-flex items-center rounded-full border border-white/14 bg-white/10 px-3 py-0.5 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:border-[#54B9CF]/45 hover:bg-white/14 hover:text-[#DFF9FF]"
              >
                {t(`${keyPrefix}text.link`)}
              </NextLink>
              {t(`${keyPrefix}text.after`)}
            </p>
          </div>

          <div
            aria-hidden="true"
            className="relative flex min-h-[230px] items-center justify-center overflow-hidden sm:min-h-[270px] lg:min-h-[300px]"
          >
            <div className="absolute left-4 top-5 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#54B9CF] shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
              Q&A
            </div>

            <div className="absolute bottom-5 right-5 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a555cf] shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
              FAQ
            </div>

            <div className="relative translate-x-2 sm:translate-x-4 lg:translate-x-5">
              <div className="faq-icon">
                <RxQuestionMark
                  size={200}
                  color="white"
                  className="hidden drop-shadow-[0_18px_40px_rgba(0,0,0,0.1)] md:flex"
                />
                <RxQuestionMark
                  size={120}
                  color="white"
                  className="flex drop-shadow-[0_18px_40px_rgba(0,0,0,0.2)] md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-icon {
          animation: faqIconFloat 4.2s ease-in-out infinite;
          transform-origin: 50% 58%;
          will-change: transform;
        }

        @keyframes faqIconFloat {
          0%,
          68%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          74% {
            transform: translateY(-6px) rotate(-4deg);
          }

          80% {
            transform: translateY(2px) rotate(3deg);
          }

          86% {
            transform: translateY(-2px) rotate(-2deg);
          }

          92% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}
