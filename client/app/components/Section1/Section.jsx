"use client";
import React from "react";
import Image from "next/image";
import Gorsel from "./Images/Bubble.png";
import Rectangle from "./Images/Rectangle.png";
import FireballExplosion from "./Animation/FireballExplosion";

const Section = () => {
  return (
    <section className="flex md:flex-row w-8/12 items-start justify-center">
      {/* Sol Kısım: Metin */}
      <div className="flex flex-col w-full md:w-1/2 p-6 text-start mt-20">
        <h2 className="text-5xl font-bold mb-4 font-inter28 leading-[57.60px]">
          Right Choice for Your <br/> Digital Success!
        </h2>
        <h3 className="text-2xl font-inter28 font-bold mb-3 leading-[28.80px]">
          DGTLFACE  <span className="text-lg font-inter28 font-normal leading-[25.20px]"> – Digital Technology Partner</span>
        </h3>
        <p className="text-base">
          With expertise in customer relationships, we upgrade your <br/> businesses with creativity.
          DGTLFACE produces stunning visual <br/> content, advertisement concepts, and effective digital sales <br/> strategies for you.
        </p>
      </div>

      {/* Sağ Kısım: Three.js Sahnesi */}
      <div className="flex relative p-6 items-center justify-center h-[400px] md:h-auto">
        <div className="w-full max-w-[500px] h-[500px] relative overflow-hidden mt-4">
          <FireballExplosion />
        </div>
      </div>
    </section>
  );
};

export default Section;
