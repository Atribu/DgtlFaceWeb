"use client";

import Link from "next/link";

export default function MegaMenuContent({
  servicesConfig,
  activeService,
  setActiveService,
  openMega,
  closeMega,
}) {
  return (
    <div
      className="hidden lg:block absolute top-[calc(100%+8px)] 4xl:top-[calc(100%+10px)] left-[50%] -translate-x-[38%] xl:left-[50%] xl:-translate-x-[40.8%] 2xl:-translate-x-[41.3%] 3xl:-translate-x-[43.2%] 4xl:-translate-x-[44.8%] w-[98.8vw] z-10"
      onMouseEnter={openMega}
      onMouseLeave={closeMega}
    >
      <div className="w-[100%] py-[10px] px-0 rounded-[16px] shadow-lg border gradient-subTitle-div backdrop-blur-2xl !bg-[#080612]/90">
        <div className="flex justify-between lg:grid lg:grid-cols-5 gap-2 xl:flex xl:flex-row">
          {servicesConfig.map((service) => {
            const isActive = activeService === service.key;

            return (
              <div
                key={service.key}
                className="group flex flex-col items-center text-center gap-2 3xl:min-w-[170px]"
                onMouseEnter={() => setActiveService(service.key)}
              >
                <Link href={service.href} prefetch={false} className="...">
                  {service.label}
                </Link>

                {/* ✅ Sadece aktif olanın subLinks'i render */}
                {isActive && service.subLinks?.length > 0 && (
                  <div className="relative overflow-hidden w-full mt-2 rounded-xl p-0 bg-white/[0.04]">
                    <ul className="relative z-10 flex flex-col gap-2 text-[12px] text-white/80">
                      {service.subLinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            prefetch={false}
                            className="inline-flex px-3 py-[6px] rounded-xl hover:bg-gradient-to-r from-purple-500/70 via-indigo-500/70 to-blue-400/70 hover:text-white transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
