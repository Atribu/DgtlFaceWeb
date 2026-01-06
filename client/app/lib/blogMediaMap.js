// app/lib/blogMediaMap.js

// Türkçe yorum: Slot bazlı görsel atamaları (slug → slot → media objesi)
export const BLOG_MEDIA_MAP = {
  "core-web-vitals-otel-ve-nextjs-rehberi": {
      banner: {
      src: "/images/blog/seo/SEO1-1/SEO1-1-banner.jpeg",
      alt: "Core Web Vitals rehberi banner",
      caption: ""
    },

    "cwv-psi-crux-screen": {
      src: "/images/blog/seo/SEO1-1/SEO1-1-1.jpeg",
      alt: "PageSpeed ve CrUX örnek ekranı",
      caption:
        "CWV metrikleri için PageSpeed/Lighthouse (lab) ve CrUX/RUM (field) farkını gösteren örnek ekran.",
    },
    "hotel-hero-reservation-schema": {
      src: "/images/blog/seo/SEO1-1/SEO1-1-2.jpeg",
      alt: "Otel hero + rezervasyon kutusu şeması",
      caption: "Hero görsel + rezervasyon modülü kombinasyonu CWV’de en sık kök neden setidir.",
    },
    "before-after-lcp-table": {
      src: "/images/blog/seo/SEO1-1/SEO1-1-3.jpeg",
      alt: "Öncesi/Sonrası LCP karşılaştırma",
      caption: "Şablon bazlı LCP iyileştirmesi öncesi/sonrası tablo örneği.",
    },
    "inp-problem": {
      src: "/images/blog/seo/SEO1-1/SEO1-1-4.jpeg",
      alt: "INP sorunu örneği",
      caption: "Mobil menü / etkileşim gecikmesi gibi INP sorunlarına örnek.",
    },
    "after-uygulama-plani": {
      src: "/images/blog/seo/SEO1-1/SEO1-1-5.jpeg",
      alt: "Uygulama planı sonrası",
      caption: "Uygulama planı / sprint sonrası örnek görünüm.",
    },
    "after-delivery-list": {
      src: "/images/blog/seo/SEO1-1/SEO1-1-6.jpeg",
      alt: "Deliverables listesi",
      caption: "Teslimatlar / yapılacaklar listesi örneği.",
    },
    "media-snippet": {
      src: "/images/blog/seo/SEO1-1/SEO1-1-7.jpeg",
      alt: "Snippet / medya örneği",
      caption: "Snippet hedefli medya örneği.",
    },
  },
};

export function getMediaBySlot(slug, slot) {
  return BLOG_MEDIA_MAP?.[slug]?.[slot] || null;
}
