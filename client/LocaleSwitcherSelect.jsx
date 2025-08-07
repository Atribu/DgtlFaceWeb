import { useTransition, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import trData from "@/messages/tr.json";
import enData from "@/messages/en.json";
import ruData from "@/messages/ru.json";

// locale'a göre JSON'u döndüren yardımcı fonksiyon
function getLocaleData(locale) {
  switch (locale) {
    case "en":
      return enData;
    case "ru":
      return ruData;
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