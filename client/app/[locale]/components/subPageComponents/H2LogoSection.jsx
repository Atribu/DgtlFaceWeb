"use client";

import React from "react";
import DgtlfaceLogoBlackHead from "../header/svg/DgtlfaceLogoBlackHead";

const H2LogoSection = ({ items = [] }) => {
  if (!items.length) return null;

  // 5 eleman varsa:
  // - ilk 4'ü logo ile aynı blokta (2x2 grid)
  // - 5. eleman altta full width
  const hasExtra = items.length === 5;
  const mainItems = hasExtra ? items.slice(0, 4) : items;
  const extraItem = hasExtra ? items[4] : null;

  return (
    <section className="w-screen bg-[#080612] flex justify-center">
      <div className="max-w-[1600px] w-full px-4 py-6 lg:py-10">
        {/* LOGO'NUN ORTALANACAĞI ANA BLOK (İLK 4 ITEM) */}
        <div className="relative">
          {/* Başlık + metin blokları */}
          <div className="relative z-10 grid gap-10 lg:gap-14 md:grid-cols-2">
            {mainItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center text-white gap-3"
              >
                <h2 className="text-[22px] lg:text-[24px] leading-[130%] font-semibold">
                  {item.title}
                </h2>
                <p className="text-[12px] lg:text-[14px] leading-[120%]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Ortadaki tek logo – sadece mainItems alanına göre ortalanıyor */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center mt-4">
            <DgtlfaceLogoBlackHead
              width={100}
              height={100}
              color="#ffffff"
              className="opacity-40"
            />
          </div>
        </div>

        {/* 5. ELEMAN VARSA ALTA FULL WIDTH */}
        {extraItem && (
          <div className="mt-10 lg:mt-14 flex flex-col items-center text-center text-white gap-3  mx-auto">
            <h2 className="text-[22px] lg:text-[24px] leading-[130%] font-semibold">
              {extraItem.title}
            </h2>
            <p className="text-[12px] lg:text-[14px] leading-[120%]">
              {extraItem.text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default H2LogoSection;
