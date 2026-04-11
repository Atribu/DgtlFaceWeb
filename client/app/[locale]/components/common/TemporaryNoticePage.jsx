import React from "react";
import { Link as LocalizedLink } from "@/i18n/navigation";

export default function TemporaryNoticePage({
  title,
  eyebrow,
  description,
  statusTitle,
  statusText,
  supportTitle,
  supportText,
  primaryCtaLabel,
  secondaryCtaLabel,
  homeLabel,
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#140F25] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(84,185,207,0.18),_transparent_30%),linear-gradient(180deg,_#20123d_0%,_#140F25_34%,_#140F25_100%)]" />
      <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#54B9CF]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-[#A754CF]/10 blur-3xl" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-24 md:px-6 lg:px-8">
        <div className="w-full">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/65">
            <LocalizedLink href="/" className="transition hover:text-white">
              {homeLabel}
            </LocalizedLink>
            <span>/</span>
            <span className="text-white/90">{title}</span>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_35px_140px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="border-b border-white/10 px-6 py-6 md:px-10 md:py-8 ">
              <span className="inline-flex rounded-full border border-[#54B9CF]/30 bg-[#54B9CF]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#AEEAF4]">
                {eyebrow}
              </span>

             <div className="flex flex-col items-center justify-center">
               <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-[115%] tracking-[-0.04em] md:text-5xl">
                <span className="bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-[165%] text-white/78 md:text-base">
                {description}
              </p>
             </div>
            </div>

            <div className="grid gap-5 px-6 py-6 md:grid-cols-2 md:px-10 md:py-8">
              <div className="rounded-[22px] border border-white/10 bg-[#120B23]/75 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#54B9CF]">
                  {statusTitle}
                </p>
                <p className="mt-3 text-sm leading-[170%] text-white/78 md:text-[15px]">
                  {statusText}
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-[#120B23]/75 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A9B7FF]">
                  {supportTitle}
                </p>
                <p className="mt-3 text-sm leading-[170%] text-white/78 md:text-[15px]">
                  {supportText}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-white/10 px-6 py-6 md:px-10 md:py-8 ">
              <LocalizedLink
                href="/contact"
                className="inline-flex items-center justify-center rounded-[18px] bg-white px-5 py-3 text-sm font-semibold !text-[#140F25] transition hover:opacity-90"
              >
                {primaryCtaLabel} 
              </LocalizedLink>

              <LocalizedLink
                href="/Services"
                className="inline-flex items-center justify-center rounded-[18px] border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
