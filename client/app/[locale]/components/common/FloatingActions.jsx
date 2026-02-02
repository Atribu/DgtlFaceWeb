"use client";

import { useEffect, useRef, useState } from "react";

async function copyToClipboard(text) {
  // Türkçe yorum: Modern Clipboard API
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) {}

  // Türkçe yorum: Safari/legacy fallback
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch (e) {
    return false;
  }
}

export default function FloatingActions({ shareTitle }) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const wrapRef = useRef(null);

  const url = typeof window !== "undefined" ? window.location.href : "";
  const title = shareTitle || (typeof document !== "undefined" ? document.title : "");

  // Türkçe yorum: Dışarı tıkla kapat
  useEffect(() => {
    const onDown = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 1400);
  };

  const onCopy = async () => {
    const ok = await copyToClipboard(url);
    if (ok) showToast("Link kopyalandı ✅");
    else showToast("Kopyalanamadı (izin?)");
    setOpen(false);
  };

  const onNativeShare = async () => {
    try {
      if (!navigator.share) return;
      await navigator.share({
        title,
        text: title,
        url,
      });
    } catch (e) {
      // Türkçe yorum: Kullanıcı share sheet'i kapatabilir
      console.log(e);
    } finally {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapRef} className="fixed bottom-5 left-5 z-[60] flex flex-col gap-2">
      {/* Share button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Paylaş"
        className="group relative h-12 w-12 rounded-full transition active:scale-[0.98]"
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
            backdrop-blur-md text-white shadow-lg transition
            group-hover:bg-black/65
          "
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition group-hover:-translate-y-[1px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

          <span
            className="
              pointer-events-none absolute inset-0 rounded-full opacity-0
              group-hover:opacity-100 transition
              shadow-[0_0_35px_rgba(84,185,207,0.25)]
            "
          />
        </span>
      </button>

      {/* Menü */}
      {open && (
        <div
          className="
            w-56 overflow-hidden rounded-2xl border border-white/10
            bg-black/80 backdrop-blur-md shadow-2xl
          "
        >
          <div className="px-4 py-3 text-xs text-white/70">
            Paylaşım seçenekleri
          </div>

          <button
            type="button"
            onClick={onCopy}
            className="
              w-full px-4 py-3 text-left text-sm text-white
              hover:bg-white/10 transition
            "
          >
            Bağlantıyı kopyala
          </button>

          <button
            type="button"
            onClick={onNativeShare}
            disabled={!navigator.share}
            className={`
              w-full px-4 py-3 text-left text-sm transition
              ${navigator.share ? "text-white hover:bg-white/10" : "text-white/40 cursor-not-allowed"}
            `}
          >
            Paylaş…
          </button>

          {/* Türkçe yorum: İstersen buraya WhatsApp/Telegram linkleri de ekleriz */}
        </div>
      )}

      {/* Mini toast */}
      {toast && (
        <div className="rounded-lg bg-black/80 px-3 py-2 text-xs text-white backdrop-blur-md shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}
