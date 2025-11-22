import DgtlFaceLogo from "../header/svg/DgtlFaceLogo";
import DgtlfaceLogoBlackHead from "../header/svg/DgtlfaceLogoBlackHead";
import DgtlfaceHeadBlack from "../serviceblocks/Icons/BlockIcons/BlockVerticalIcons/DgtlfaceHeadBlack";

export function AiAnswerBlock({text}) {
  return (
    <section className="mt-0 w-[84%] rounded-2xl border border-white/5 bg-[#443666] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-xl">
          <DgtlfaceLogoBlackHead width={50} height={50} color="#ffffff"/>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Kısa Özet
          </p>
          <p className="text-sm leading-relaxed text-slate-100">
         {text}
          </p>
        </div>
      </div>
    </section>
  );
}