import { useTransition, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
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
  return (
    s === "sss" ||
    s === "faq" ||
    s === "services-faq" ||
    s.endsWith("-sss") ||
    s.endsWith("-faq")
  );
}

export default function LocaleSwitcherSelect({ children, defaultValue, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  // Türkçe yorum: Sayfa yüklendiğinde scroll konumunu sessionStorage'dan oku
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("scrollPosition");
    if (savedScroll) {
      window.scrollTo(0, Number(savedScroll));
      sessionStorage.removeItem("scrollPosition");
    }
  }, [pathname]);

  const pathSegments = pathname.split("/");

  // Türkçe yorum: Blog detay sayfası kontrolü
  // Örnek:
  // /tr/otel/blog/slug
  // /tr/sem/blog/slug
  // /en/hotel/blog/slug
  const isBlogDetailPage =
    pathSegments.length >= 5 &&
    (pathSegments[1] === "tr" || pathSegments[1] === "en") &&
    pathSegments[3] === "blog" &&
    Boolean(pathSegments[4]);

  function handleLangChange(newLang) {
    // Türkçe yorum: Blog detay sayfasında dil değiştirmeyi tamamen engelliyoruz.
    if (isBlogDetailPage) {
      setIsOpen(false);
      return;
    }

    // Türkçe yorum: Mevcut scroll pozisyonunu sessionStorage'da sakla
    sessionStorage.setItem("scrollPosition", window.scrollY);

    setIsOpen(false);

    startTransition(() => {
      void (async () => {
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

        // -------------------------
        // FAQ özel case
        // -------------------------
        const lastSeg = cleanSlug(pathSegments[pathSegments.length - 1]);
        const maybeSeg = cleanSlug(pathSegments[2] || "");

        if (isFaqSlugLike(lastSeg) || isFaqSlugLike(maybeSeg)) {
          // Türkçe yorum: Root FAQ
          if (lastSeg === "sss" || lastSeg === "faq") {
            router.replace(`/${newLang}/${newLang === "en" ? "faq" : "sss"}`);
            return;
          }

          // Türkçe yorum: Services FAQ root
          if (lastSeg === "hizmetlerimiz-sss" || lastSeg === "services-faq") {
            router.replace(
              `/${newLang}/${newLang === "en" ? "services-faq" : "hizmetlerimiz-sss"}`
            );
            return;
          }

          // Türkçe yorum: Normal FAQ alt sayfası
          const currentSlug = lastSeg;
          const ns = FAQ_MAP?.[currentSlug];

          // Türkçe yorum: Namespace bulunamazsa patlamasın diye fallback
          if (!ns) {
            const newPathname = pathname.replace(`/${currentLocale}`, `/${newLang}`);
            router.replace(newPathname);
            return;
          }

          // Türkçe yorum: Yeni dilin slug'ını bul
          const newSlug = findSlugByNs(ns, newLang);

          if (!newSlug) {
            const newPathname = pathname.replace(`/${currentLocale}`, `/${newLang}`);
            router.replace(newPathname);
            return;
          }

          // Türkçe yorum: Yeni dilde segment
          const deptSegment = FAQ_SLUG_DEPT_SEGMENT_MAP?.[newLang]?.[newSlug];

          const target = deptSegment
            ? `/${newLang}/${deptSegment}/${newSlug}`
            : `/${newLang}/${newSlug}`;

          router.replace(target);
          return;
        }

        // Türkçe yorum: Diğer tüm sayfalar için normal dil değiştirme
        const newPathname = pathname.replace(`/${currentLocale}`, `/${newLang}`);
        router.replace(newPathname);
      })();
    });
  }

  return (
    <div className="relative">
      <button
        onClick={() => {
          // Türkçe yorum: Blog detay sayfasında dropdown açılmasın.
          if (isBlogDetailPage) return;
          setIsOpen(!isOpen);
        }}
        className="flex flex-row items-center justify-center gap-[2px] lg:gap-1 rounded-md ml-1 px-[2px] py-[10px] lg:py-4 font-medium mix-blend-difference bg-transparent text-white uppercase w-full text-[15px] lg:text-[16px] text-center"
      >
        {defaultValue}
        {!isBlogDetailPage && <IoMdArrowDropdown />}
      </button>

      {isOpen && !isBlogDetailPage && (
        <div className="absolute z-50 mt-0 shadow-lg w-full rounded-md">
          <ul className="py-0">
            {React.Children.map(children, (child) => {
              // Türkçe yorum: Blog detay sayfasında zaten hiç açılmayacak ama ekstra güvenlik.
              if (isBlogDetailPage) return null;

              if (child.props.value === defaultValue) return null;

              return (
                <li
                  key={child.props.value}
                  className="cursor-pointer px-[1px] bg-white uppercase py-[8px] mt-0 hover:bg-[#140F25] hover:text-white text-[#140F25] text-center items-center justify-center"
                  onClick={() => handleLangChange(child.props.value)}
                >
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