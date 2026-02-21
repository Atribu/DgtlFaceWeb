import DgtlfaceLogoBlackHead from "../header/svg/DgtlfaceLogoBlackHead";
import { useTranslations } from "next-intl";

export function AiAnswerBlock({ text }) {
  const t = useTranslations("Homepage");
  return (
    <section
      className="
        mt-4 lg:mt-10 mb-8
        w-[94%] lg:w-[88%]
        rounded-2xl
        border border-white/10
        bg-[#706fd1]
        px-4 py-3
        lg:px-6 lg:py-4
        shadow-[0_14px_40px_rgba(0,0,0,0.45)]
        backdrop-blur-md mx-auto
      "
    >
      <div className="flex flex-col md:flex-row md:items-start md:gap-4 gap-3">
        {/* Logo / Icon */}
        <div className="flex items-center md:items-start gap-2">
          <div
            className="
              flex h-10 w-10 lg:h-12 lg:w-12
              items-center justify-center
              rounded-full
              bg-gradient-to-br from-sky-400 to-indigo-600
              shadow-[0_0_18px_rgba(79,209,255,0.35)]
            "
          >
            <DgtlfaceLogoBlackHead width={34} height={34} color="#ffffff" />
          </div>

          {/* Etiket sadece mobile’da ikonun yanında dursun */}
          <div className="md:hidden flex flex-col">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-indigo-200">
               {t("shortSummaryLabel")}
            </span>
          </div>
        </div>

        {/* Metin Bloğu */}
        <div className="flex-1 space-y-[2px] lg:space-y-1">
          {/* Desktop / tablet label */}
          <p className="hidden md:block text-[11px] lg:text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
             {t("shortSummaryLabel")}
          </p>

          <p
            className="
              text-[12px] lg:text-sm
              leading-tight lg:leading-relaxed
              text-slate-50/95
            "
          >
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
