"use client";

// Türkçe yorum: Sol altta sabit play + paylaş butonu
import { useState } from "react";

export default function FloatingActions({ shareTitle }) {

  const onShare = async () => {
    // Türkçe yorum: Web Share API destekleniyorsa native share sheet açılır
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: shareTitle || document.title,
          text: shareTitle || document.title, // Türkçe yorum: bazı uygulamalar text'i gösterir, ama kartı OG belirler
          url,
        });
        return;
      }

      // Türkçe yorum: Fallback -> link kopyala
      await navigator.clipboard.writeText(url);
      alert("Link kopyalandı.");
    } catch (e) {
      // Türkçe yorum: Kullanıcı share sheet’i kapatırsa hata gibi düşebilir, sessiz geç
      console.log(e);
    }
  };



  return (
    <div className="fixed bottom-5 left-5 z-[60] flex flex-col gap-2">
      {/* Play */}
     

      {/* Share */}
     <button
  type="button"
  onClick={onShare}
  aria-label="Paylaş"
  className="
    group relative h-12 w-12 rounded-full
    transition active:scale-[0.98]
  "
>
  {/* Türkçe yorum: Gradient border */}
  <span
    className="
      absolute inset-0 rounded-full p-[1px]
      [background:linear-gradient(90deg,#A754CF,#547CCF,#54B9CF,#A754CF)]
      [background-size:300%_300%]
      [background-position:0%_50%]
      group-hover:[background-position:100%_50%]
      [transition:background-position_900ms_ease]
    "
  />

  {/* Türkçe yorum: İç yüzey (glass) */}
  <span
    className="
      relative flex h-full w-full items-center justify-center rounded-full
       backdrop-blur-md
      text-white shadow-lg
      transition
      group-hover:bg-black/65
    "
  >
    {/* Türkçe yorum: Share ikonu (daha net) */}
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 transition group-hover:-translate-y-[1px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 7l4-4 4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 14v4a3 3 0 003 3h8a3 3 0 003-3v-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>

    {/* Türkçe yorum: Hafif glow */}
    <span
      className="
        pointer-events-none absolute inset-0 rounded-full opacity-0
        group-hover:opacity-100
        transition
        shadow-[0_0_35px_rgba(84,185,207,0.25)]
      "
    />
  </span>
</button>

    </div>
  );
}
