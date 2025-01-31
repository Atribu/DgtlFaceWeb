"use client";

import React from "react";
import Image from "next/image";
// Yerel resimleri doğrudan import ediyorsunuz
import Gorsel from "./Images/Bubble.png";
import Rectangle from "./Images/Rectangle.png";

const Section = () => {
  return (
    <div className="flex flex-row">
      {/* Sol kısım */}
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-2">Right Choice for Your Digital Success!</h2>
        <h3 className="text-lg font-semibold mb-2">DGTLFACE – Digital Technology Partner</h3>
        <p>
          With expertise in customer relationships. We upgrade your businesses with
          creativity. DGTLFACE produces stunning visual content, advertisement concepts,
          and effective digital sales strategies for you.
        </p>
      </div>

      {/* Sağ kısım */}
      <div className="flex-1 p-4 flex flex-col items-center">
        {/* Bubble resmi */}
        <div className="relative w-48 h-auto mb-4">
          <Image
            src={Gorsel}
            alt="Bubble"
            width={192}   // Görselin gerçek boyutuna göre güncelleyebilirsiniz
            height={192}
            className="object-contain"
            priority      // İsteğe bağlı: sayfa yüklenince önce bu resmi getirir
          />
        </div>

        {/* Rectangle resmi */}
        <div className="relative w-48 h-auto">
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={192}   // Görselin gerçek boyutuna göre güncelleyebilirsiniz
            height={192}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
