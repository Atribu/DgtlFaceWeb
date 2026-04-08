"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { RxQuestionMark } from "react-icons/rx";

export default function HomeFaqPrompt() {
  const t = useTranslations("Homepage.faqPrompt");

  return (
    <section className="flex w-full justify-center px-4 lg:px-0">
      <div className="relative isolate w-[95%] max-w-[1180px] overflow-hidden rounded-[28px] border border-[#221742] bg-[linear-gradient(135deg,#140F25_0%,#1B1433_55%,#211844_100%)] px-6 py-6 shadow-[0_18px_60px_rgba(20,15,37,0.18)] lg:w-[90%] lg:px-10 lg:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(84,185,207,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(167,84,207,0.16),transparent_34%)]" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1.12fr)_330px] xl:grid-cols-[minmax(0,1.18fr)_390px]">
          <div className="flex flex-col items-start gap-4 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#54B9CF]/35 bg-[#54B9CF]/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8EC5D6]">
                {t("eyebrow")}
              </span>
              <span className="rounded-full border border-[#a555cf] bg-white/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a555cf]">
                FAQ
              </span>
            </div>

            <h2 className="max-w-[640px] text-[20px] font-semibold leading-[120%] text-white lg:text-[25px]">
              {t("title")}
            </h2>

            <p className="max-w-[720px] text-[13px] leading-[160%] text-white lg:text-[15px]">
              {t("text.before")}
              <Link
                href="/sss"
                className="mx-1 inline-flex items-center rounded-full border border-white/14 bg-white/10 px-4 py-1.5 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:border-[#54B9CF]/45 hover:bg-white/14 hover:text-[#DFF9FF]"
              >
                {t("text.link")}
              </Link>
              {t("text.after")}
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

              <RxQuestionMark size={200} color="white" className="hidden md:flex"/>
              <RxQuestionMark size={120} color="white" className="flex md:hidden"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
