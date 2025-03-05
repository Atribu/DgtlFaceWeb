"use client"; // Next.js 13 veya benzer RSC ortamlarda gerekebilir

import React, { useEffect, useState } from "react";
import BlockDeneme from "./Blocks1/BlockDeneme"; // Sizin alt bileşeniniz

// İkonlar (örnek path'ler)
import SeoIcon from "./blockIcons/SeoIcon";
import CallIcon from "./blockIcons/CallIcon";
import CreativeIcon from "./blockIcons/CreativeIcon";
import AnalysisIcon from "./blockIcons/AnalysisIcon";
import ItIcon from "./blockIcons/ItIcon";
import PmsIcon from "./blockIcons/PmsIcon";
import OtaIcon from "./blockIcons/OtaIcon";
import WebIcon from "./blockIcons/WebIcon";
import DgtlfaceIcon from "./blockIcons/DgtlfaceIcon";

// Başlangıç dizimiz. Bazıları döndürülebilir, biri sabit (id:9).
// Not: positionClass'lardaki -translate-x-[xxxxpx] ve translate-y-[xxxxpx] 
// safelist'e girdiği sürece Tailwind bunları oluşturacaktır.
const initialBlocks = [
  {
    id: 1,
    IconComponent: CallIcon,
    gradientId: "gradient-call",
    positionClass: "-translate-x-[1200px] translate-y-[-20px]",
    zIndex: 70,
  },
  {
    id: 8,
    IconComponent: SeoIcon,
    gradientId: "gradient-seo",
    positionClass: "-translate-x-[1248px] translate-y-[45px]",
    zIndex: 80,
  },
  {
    id: 7,
    IconComponent: AnalysisIcon,
    gradientId: "gradient-analysis",
    positionClass: "-translate-x-[1296px] translate-y-[110px]",
    zIndex: 90,
  },
  {
    id: 2,
    IconComponent: ItIcon,
    gradientId: "gradient-it",
    positionClass: "-translate-x-[1158px] translate-y-[45px]",
    zIndex: 40,
  },
  {
    id: 6,
    IconComponent: OtaIcon,
    gradientId: "gradient-ota",
    positionClass: "-translate-x-[1254px] translate-y-[175px]",
    zIndex: 60,
  },
  {
    id: 3,
    IconComponent: CreativeIcon,
    gradientId: "gradient-creative",
    positionClass: "-translate-x-[1115px] translate-y-[113px]",
    zIndex: 10,
  },
  {
    id: 4,
    IconComponent: WebIcon,
    gradientId: "gradient-web",
    positionClass: "-translate-x-[1163px] translate-y-[175px]",
    zIndex: 20,
  },
  {
    id: 5,
    IconComponent: PmsIcon,
    gradientId: "gradient-dgtlface",
    positionClass: "-translate-x-[1211px] translate-y-[240px]",
    zIndex: 30,
  },
  // Sabit blok (id:9). Her zaman aynı konumda kalacak.
  {
    id: 9,
    IconComponent: DgtlfaceIcon,
    gradientId: "gradient-pms",
    positionClass: "-translate-x-[1206px] translate-y-[110px]",
    zIndex: 50,
  },
];

const fixedBlockId = 9;
const rotationOffset = 1;

const BlocVertical = () => {
  // Ekrana basacağımız bloklar (hem sabit hem swappable)
  const [blocks, setBlocks] = useState(initialBlocks);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlocks((prevBlocks) => {
        // 1) Sabit blok hariç diğerlerini al
        const swappable = prevBlocks.filter((b) => b.id !== fixedBlockId);

        // 2) ID'ye göre sırala (ör: [1,2,3,4,5,6,7,8])
        const sortedById = [...swappable].sort((a, b) => a.id - b.id);

        // 3) soldan kaydır ([1,2,3,4,5,6,7,8] => [2,3,4,5,6,7,8,1])
        const rotated = sortedById
          .slice(rotationOffset)
          .concat(sortedById.slice(0, rotationOffset));

        // 4) positionClass dizisini de aynı şekilde kaydır
        const oldPositions = sortedById.map((b) => b.positionClass);
        const rotatedPositions = oldPositions
          .slice(rotationOffset)
          .concat(oldPositions.slice(0, rotationOffset));

        // 5) Yeni konumları atayarak final diziyi elde et
        const finalSwappable = rotated.map((block, i) => ({
          ...block,
          positionClass: rotatedPositions[i],
        }));

        // 6) Sabit bloğu geri ekle
        const fixedBlock = prevBlocks.find((b) => b.id === fixedBlockId);
        return [...finalSwappable, fixedBlock];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group overflow-visible">
      <div className="absolute left-[1000px] top-0">
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`absolute transition-transform duration-500 ${block.positionClass}`}
            style={{ zIndex: block.zIndex }}
          >
            <BlockDeneme
              IconComponent={block.IconComponent}
              svgGradientId={block.gradientId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlocVertical;
