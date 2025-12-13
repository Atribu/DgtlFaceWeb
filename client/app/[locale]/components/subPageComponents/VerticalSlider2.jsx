"use client";
import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ServiceBlocks from "../serviceblocks/ServiceBlocks";
import { useTranslations } from "next-intl";
import PlainRichText from "../common/PlainRichText"; 

const VerticalSlider2 = ({ page, itemCount = 3 }) => {
  const t = useTranslations(`${page}.verticalSlider`);

  const [blocksOrder, setBlocksOrder] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlocksOrder((prev) => {
        const newOrder = [...prev];
        newOrder.unshift(newOrder.pop());
        return newOrder;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const blockPositions = {
    0: "-translate-y-1/2 z-[5] translate-x-[43px]",
    1: "-translate-y-[calc(50%-80px)] z-[10] -translate-x-[18px]",
    2: "-translate-y-[calc(50%-160px)] z-[50] -translate-x-[82px]",
    3: "-translate-y-[calc(50%-80px)] z-[70] -translate-x-[146px]",
    4: "-translate-y-1/2 z-[80] -translate-x-[210px]",
    5: "-translate-y-[calc(50%+80px)] z-[60]  -translate-x-[146px]",
    6: "-translate-y-[calc(50%+160px)] z-[40] -translate-x-[82px]",
    7: "-translate-y-[calc(50%+80px)] z-[20]  -translate-x-[18px]",
  };

  // ✅ Güvenli raw text helper'ı
  const getTextHtml = (key) => {
    // next-intl v3: t.raw mevcut
    if (typeof t.raw === "function") {
      try {
        return t.raw(key);
      } catch (e) {
        return t(key);
      }
    }
    // Eski versiyon olursa fallback
    return t(key);
  };

  const items = Array.from({ length: itemCount }, (_, idx) => {
    const i = idx + 1;
    const textKey = `text${i}`;
    return {
      header: t(`title${i}`),
      span: t(`span${i}`),
      textKey,
      textHtml: getTextHtml(textKey), // ✅ HTML string burada
      button: t(`button${i}`),
    };
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const wheelTimeout = useRef(null);

  const ITEM_HEIGHT = 180;
  const GAP = 0;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setPrevTranslate(currentTranslate);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentY = e.clientY;
    const diff = currentY - startY;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (Math.abs(movedBy) > 50) {
      if (movedBy > 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      } else if (movedBy < 0 && activeIndex < items.length - 1) {
        setActiveIndex((prev) => prev + 1);
      }
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setPrevTranslate(currentTranslate);
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleTouchEnd = () => {
    const movedBy = currentTranslate - prevTranslate;

    if (Math.abs(movedBy) > 50) {
      if (movedBy > 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      } else if (movedBy < 0 && activeIndex < items.length - 1) {
        setActiveIndex((prev) => prev + 1);
      }
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  const handleWheel = (e) => {
    e.preventDefault();

    if (wheelTimeout.current) return;

    if (e.deltaY > 0 && activeIndex < items.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }

    wheelTimeout.current = setTimeout(() => {
      wheelTimeout.current = null;
    }, 500);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
  };

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center min-h-[670px] lg:min-h-[800px] w-full z-[99]"
      style={{
        background: `linear-gradient(
          to bottom,
          #ffffff 0%,
          #f2edf9 8%,
          #2a1a4f 25%,
          #1c153b 38%,
          #140C29 50%,
          #1c153b 68%,
          #2a1a4f 75%,
          #f2edf9 88%,
          #ffffff 100%
        )`,
      }}
    >
      <div className="flex w-full max-w-[1400px] h-full gap-0 items-center justify-center text-white px-4">
        {/* Sol: slider */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 items-center lg:items-start relative">
          <h2 className="text-[22px] lg:text-[24px] font-bold leading-tight text-center lg:text-left">
            {t("header")}{" "}
            <span className="bg-gradient-to-r from-[#54b9cf] to-[#a754cf] bg-clip-text text-transparent">
              {t("header2")}
            </span>
          </h2>

          <div className="relative w-full ">
            {/* Navigation Buttons */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 -translate-x-16 hidden lg:flex flex-col gap-4 z-50">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="p-4 text-white hover:bg-white/10 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <IoIosArrowUp size={48} />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === items.length - 1}
                className="p-4 text-white hover:bg-white/10 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <IoIosArrowDown size={48} />
              </button>
            </div>

            {/* Index Display */}
          <div className="absolute -left-16 lg:-left-[190px] xl:-left-[220px] top-1/2 -translate-y-1/2 z-10 pointer-events-none"> <span className="text-5xl lg:text-8xl xl:text-9xl font-bold text-white/70 lg:text-white/90"> {String(activeIndex + 1).padStart(2,)} </span> </div>
            {/* Carousel */}
            <div
              ref={containerRef}
              className="relative overflow-hidden h-[260px] lg:h-[320px] cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
            >
              <div
                className="absolute w-full transition-transform duration-700 ease-out"
                style={{
                  top: 0,
                  transform: `translateY(${
                    -activeIndex * (ITEM_HEIGHT + GAP) + currentTranslate
                  }px)`,
                }}
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-start items-start gap-2 transition-all duration-700 text-start"
                    style={{
                      height: `${ITEM_HEIGHT}px`,
                      maxHeight: `${ITEM_HEIGHT}px`,
                      marginBottom:
                        index < items.length - 1 ? `${GAP}px` : "0",
                      opacity: activeIndex === index ? 1 : 0.3,
                      transform:
                        activeIndex === index ? "scale(1)" : "scale(0.9)",
                      pointerEvents:
                        activeIndex === index ? "auto" : "none",
                    }}
                  >
                    <div className="flex flex-col gap-2 text-start">
                      <h5 className="text-[16px] lg:text-[18px]">
                        <span className="text-white font-bold font-inter leading-tight">
                          {item.header}{" "}
                        </span>
                        <span className="text-purple-500 font-bold font-inter leading-tight">
                          {item.span}
                        </span>
                      </h5>
                    </div>

                    <div className="flex flex-col gap-4">
                      {/* ✅ RICH TEXT BURADA */}
                      {item.textHtml && (
                        <PlainRichText
                          html={item.textHtml}
                          as="p"
                          className="
                            text-white text-[12px] lg:text-[14px]
                            font-normal leading-relaxed opacity-90
                            line-clamp-6
                            space-y-1
                            [&_ul]:list-disc
                            [&_ul]:list-inside
                            [&_ul]:mt-2
                            [&_li]:mb-1
                            [&_a]:underline
                            [&_a]:underline-offset-2
                            [&_a]:font-semibold
                            [&_a]:text-[#0f9bcf]
                            hover:[&_a]:text-white
                          "
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="p-2 text-white bg-white/10 rounded-full disabled:opacity-30"
              >
                <IoIosArrowUp size={32} />
              </button>

                <div className="flex"> <span className="text-4xl lg:text-8xl xl:text-9xl font-bold text-[#ffffff] lg:text-[#ffffff]"> {String(activeIndex + 1).padStart(2,)} </span> </div>

              <button
                onClick={handleNext}
                disabled={activeIndex === items.length - 1}
                className="p-2 text-white bg-white/10 rounded-full disabled:opacity-30"
              >
                <IoIosArrowDown size={32} />
              </button>
            </div>
          </div>
        </div>

        {/* Sağ taraf */}
        <div className="hidden lg:flex w-[40%] items-end justify-end scale-75 -mr-[240px]">
          <ServiceBlocks
            blocksOrder={blocksOrder}
            rotate={false}
            blockPositions={blockPositions}
            rotateDegree={180}
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalSlider2;
