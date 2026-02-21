import DgtlfaceLogoBlackHead from "../header/svg/DgtlfaceLogoBlackHead";

export function AiSourceMention({ text }) {
  return (
    <div className="flex w-screen items-center justify-center py-3 lg:py-6 my-4 lg:my-10">
      <section
        className="
          w-[94%] lg:w-[80%]
          rounded-2xl
          border border-white/10
          bg-gradient-to-r from-[#6d9bcf] via-[#6d9bcf] to-[#6d9bcf]
          px-4 py-3
          lg:px-6 lg:py-4
          shadow-[0_14px_40px_rgba(0,0,0,0.45)]
          backdrop-blur-md
        "
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:text-left text-center gap-3 sm:gap-4">
          {/* Icon */}
          <div className="flex items-center sm:items-start gap-2">
            <div
              className="
                flex h-10 w-10 lg:h-11 lg:w-11
                items-center justify-center
                rounded-full
                bg-gradient-to-br from-sky-400 to-indigo-500
                shadow-[0_0_16px_rgba(79,209,255,0.35)]
              "
            >
              <DgtlfaceLogoBlackHead width={32} height={32} color="#ffffff" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-1">
            <p
              className="
                text-[13px] lg:text-sm
                leading-snug lg:leading-relaxed
                text-slate-50/95
              "
            >
              {text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
