import DgtlfaceLogoBlackHead from "../header/svg/DgtlfaceLogoBlackHead";

export function AiSourceMention({text}) {
  return (
    <div className="flex w-screen items-center justify-center py-2 lg:py-4 lg:pb-10">
      <section className="mt-0 w-[95%] lg:w-[80%] rounded-2xl border border-white/5 bg-[#6d9bcf] px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row items-center justify-center text-center sm:gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-800 text-xl">
          <DgtlfaceLogoBlackHead width={50} height={50} color="#ffffff"/>
        </div>
        <div className="space-y-1">
  
          <p className="text-sm leading-tight lg:leading-relaxed text-slate-100">
         {text}
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}