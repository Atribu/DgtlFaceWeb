import { useTransition, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import trData from "@/messages/tr.json";
import enData from "@/messages/en.json";
import { FAQ_MAP } from "@/app/[locale]/(faq)/faqMap";
import { FAQ_SLUG_DEPT_SEGMENT_MAP } from "@/app/[locale]/faqRouteMap";


// Türkçe yorum: "/seo-sss" gibi değerler gelirse baştaki "/" kaldır
function cleanSlug(input) {
  return String(input || "").replace(/^\/+/, "");
}

// Türkçe yorum: Aynı namespace'in locale'e göre doğru slug'ını bul
function findSlugByNs(ns, locale) {
  if (!ns) return null;

  const suffix = locale === "en" ? "-faq" : "-sss";

  const match = Object.keys(FAQ_MAP || {}).find(
    (slug) => FAQ_MAP[slug] === ns && slug.endsWith(suffix)
  );

  return match || null;
}

function isFaqSlugLike(slug) {
  const s = cleanSlug(slug);
  return s === "sss" || s === "faq" || s === "services-faq" || s.endsWith("-sss") || s.endsWith("-faq");
}


// locale'a göre JSON'u döndüren yardımcı fonksiyon
function getLocaleData(locale) {
  switch (locale) {
    case "en":
      return enData;
    default:
      return trData;
  }
}

export default function LocaleSwitcherSelect({ children, defaultValue, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  // Sayfa yüklendiğinde scroll konumunu sessionStorage'dan oku
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("scrollPosition");
    if (savedScroll) {
      window.scrollTo(0, Number(savedScroll));
      sessionStorage.removeItem("scrollPosition");
    }
  }, [pathname]);

  function handleLangChange(newLang) {
    // Mevcut scroll pozisyonunu sessionStorage'da sakla
    sessionStorage.setItem("scrollPosition", window.scrollY);
    
    setIsOpen(false);
    startTransition(() => {
      const pathSegments = pathname.split('/');
      const currentLocale = pathSegments[1];

       // ✅ 1) /sss <-> /faq fix (index)
    // /tr/sss  -> /en/faq
    // /en/faq  -> /tr/sss
    if (pathSegments.length === 3) {
      const last = pathSegments[2];

      if (last === "sss" && newLang === "en") {
        router.replace(`/${newLang}/faq`);
        return;
      }
      if (last === "faq" && newLang === "tr") {
        router.replace(`/${newLang}/sss`);
        return;
      }

      // ✅ 2) /hizmetlerimiz-sss <-> /services-faq fix (services faq index)
      if (last === "hizmetlerimiz-sss" && newLang === "en") {
        router.replace(`/${newLang}/services-faq`);
        return;
      }
      if (last === "services-faq" && newLang === "tr") {
        router.replace(`/${newLang}/hizmetlerimiz-sss`);
        return;
      }
    }
      
      // Blog detay sayfası kontrolü
      if (pathSegments[2] === 'blog' && pathSegments[3]) {
        const currentSlug = pathSegments[3];
        
        // Mevcut dildeki tüm blog postlarını kontrol et
        const currentData = getLocaleData(currentLocale);
        const matchedKey = Object.keys(currentData).find(
          (key) => currentData[key].slug === currentSlug
        );
        
        if (matchedKey) {
          // Yeni dildeki aynı blog postunun slug'ını al
          const newData = getLocaleData(newLang);
          const newSlug = newData[matchedKey]?.slug;
          
          if (newSlug) {
            // Blog detay sayfası için özel yönlendirme
            router.replace(`/${newLang}/blog/${newSlug}`);
            return;
          }
        }
        
        // Eşleşen blog bulunamazsa ana blog sayfasına yönlendir
        router.replace(`/${newLang}/blog`);
        return;
      }

          // -------------------------
    // 2) FAQ özel case (EKLENECEK KISIM)
    // -------------------------
    // Örn: /tr/hizmetlerimiz-sss  -> /en/services-faq
    // Örn: /tr/raporlama/satis-donusumu-sss -> /en/digital-analysis/<...>-faq
    const lastSeg = cleanSlug(pathSegments[pathSegments.length - 1]); // slug gibi
    const maybeSeg = cleanSlug(pathSegments[2] || "");               // segment gibi

    if (isFaqSlugLike(lastSeg) || isFaqSlugLike(maybeSeg)) {
      // Root FAQ
      if (lastSeg === "sss" || lastSeg === "faq") {
        router.replace(`/${newLang}/${newLang === "en" ? "faq" : "sss"}`);
        return;
      }

      // Services FAQ root
      if (lastSeg === "hizmetlerimiz-sss" || lastSeg === "services-faq") {
        router.replace(`/${newLang}/${newLang === "en" ? "services-faq" : "hizmetlerimiz-sss"}`);
        return;
      }

      // Normal FAQ page (alt sayfa)
      const currentSlug = lastSeg; // satis-donusumu-sss gibi
      const ns = FAQ_MAP?.[currentSlug];

      // Eğer ns bulamazsa fallback (yine de patlamasın)
      if (!ns) {
        const newPathname = pathname.replace(`/${currentLocale}`, `/${newLang}`);
        router.replace(newPathname);
        return;
      }

      // Yeni dilin slug'ı
      const newSlug = findSlugByNs(ns, newLang);
      if (!newSlug) {
        // bulunamazsa yine fallback
        const newPathname = pathname.replace(`/${currentLocale}`, `/${newLang}`);
        router.replace(newPathname);
        return;
      }

      // Yeni dilde segment
      const deptSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[newLang]?.[newSlug];

      // Bazı FAQ sayfaları root altında olabilir
      const target =
        deptSegment
          ? `/${newLang}/${deptSegment}/${newSlug}`
          : `/${newLang}/${newSlug}`;

      router.replace(target);
      return;
    }
      
      // Diğer tüm sayfalar için normal dil değiştirme
      const newPathname = pathname.replace(`/${currentLocale}`, `/${newLang}`);
      router.replace(newPathname);
    });
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center justify-center gap-[2px] lg:gap-1 rounded-md ml-1 px-[2px] py-[10px] lg:py-4 font-medium mix-blend-difference bg-transparent text-white uppercase w-full text-[15px] lg:text-[16px] text-center">
        {defaultValue}
        <IoMdArrowDropdown />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-0 shadow-lg w-full rounded-md">
          <ul className="py-0">
            {React.Children.map(children, (child) => {
              if (child.props.value === defaultValue) return null;
              return (
                <li
                  key={child.props.value}
                  className="cursor-pointer px-[1px] bg-white uppercase py-[8px] mt-0 hover:bg-[#140F25] hover:text-white text-[#140F25] text-center items-center justify-center"
                  onClick={() => handleLangChange(child.props.value)}>
                  {child.props.value}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}