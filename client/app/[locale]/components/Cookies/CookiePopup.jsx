"use client";
import {Link} from "@/i18n/navigation";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from 'next-intl';

const CookiePreferencesModal = dynamic(
  () => import("./CookiePreferencesModal"),
  { ssr: false, loading: () => null }
);

const CookiePopup = () => {
   const t = useTranslations("CookiePopup")

  const [isModalOpen, setIsModalOpen] = useState(false);
  // Tercih kontrolü tamamlanmadan banner'ı çizme. Böylece kayıtlı tercihi
  // bulunan kullanıcılarda hydration sırasında kısa süreli popup parlaması olmaz.
  const [isVisible, setIsVisible] = useState(false);

  const [cookies, setCookies] = useState({
    necessary: true, // Zorunlu çerezler her zaman aktiftir.
    performance: false,
    functional: false,
    targeting: false,
  });

    // Sayfa yüklendiğinde tercihleri yükle
    useEffect(() => {
      const savedPreferences = loadPreferences();
      if (savedPreferences) {
        // Tercihler kaydedilmişse popup'ı gösterme
        setIsVisible(false);
      } else {
        // Tercihler kaydedilmemişse popup'ı göster
        setIsVisible(true);
      }
    }, []);
  
    // Tercihleri kaydet ve popup'ı kapat
    const handleConfirm = () => {
      savePreferences(cookies);
      console.log("Kullanıcı Tercihleri Onaylandı:", cookies);
      setIsVisible(false);
    };
  
    // Tüm çerezleri kabul et ve popup'ı kapat
    const handleAcceptAll = () => {
      const allAccepted = {
        necessary: true,
        performance: true,
        functional: true,
        targeting: true,
      };
      setCookies(allAccepted);
      savePreferences(allAccepted);
      console.log("Tüm Çerezler Kabul Edildi:", allAccepted);
      setIsVisible(false);
    };
  
    // Tüm çerezleri reddet ve popup'ı kapat
    const handleDenyAll = () => {
      const allDenied = {
        necessary: true, // Zorunlu çerezler her zaman aktiftir
        performance: false,
        functional: false,
        targeting: false,
      };
      setCookies(allDenied);
      savePreferences(allDenied);
      console.log("Tüm Çerezler Reddedildi:", allDenied);
      setIsVisible(false);
    }

  const handleToggle = (type) => {
    setCookies((prevCookies) => ({
      ...prevCookies,
      [type]: !prevCookies[type],
    }));
  };

  // cookie function
  // Çerez kaydetme fonksiyonu
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

// Çerez silme fonksiyonu
const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

// Çerez yükleme fonksiyonu
const getCookie = (name) => {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
};

// --------
const savePreferences = (preferences) => {
  // Tercihleri çerez olarak kaydet
  setCookie("cookiePreferences", JSON.stringify(preferences), 365);

  // Konsola kaydedilen tercihleri yazdır
  console.log("Çerez Tercihleri Kaydedildi:", preferences);

  // Tercihlere göre çerezleri ayarla
  if (preferences.performance) {
    setCookie("performanceCookie", "active", 365);
    console.log("Performance Çerezi Aktif Edildi.");
  } else {
    deleteCookie("performanceCookie");
    console.log("Performance Çerezi Silindi.");
  }

  if (preferences.functional) {
    setCookie("functionalCookie", "active", 365);
    console.log("Functional Çerezi Aktif Edildi.");
  } else {
    deleteCookie("functionalCookie");
    console.log("Functional Çerezi Silindi.");
  }

  if (preferences.targeting) {
    setCookie("targetingCookie", "active", 365);
    console.log("Targeting Çerezi Aktif Edildi.");
  } else {
    deleteCookie("targetingCookie");
    console.log("Targeting Çerezi Silindi.");
  }

  window.dispatchEvent(
    new CustomEvent("cookiePreferencesChanged", { detail: preferences })
  );
};

// --------
const loadPreferences = () => {
  const preferences = getCookie("cookiePreferences");
  if (preferences) {
    console.log("Kaydedilmiş Çerez Tercihleri Yüklendi:", JSON.parse(preferences));
    return JSON.parse(preferences);
  }
  console.log("Kaydedilmiş Çerez Tercihi Bulunamadı. Varsayılan Tercihler Kullanılıyor.");
  return null
};

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed flex z-[9999] bottom-0  right-0 left-0 w-screen  items-center justify-center">
        <div className="flex items-center justify-center w-screen lg:w-[99%] max-w-[1232px] border relative gradient-cookie-button !bg-[rgba(20,15,37,0.5)] !backdrop-blur-[5px] rounded-none lg:rounded-[22px]">
          <div className="flex flex-col md:flex-row w-[94%] md:w-[99%] lg:w-[94%] xl:w-[90%] py-[22px] gap-[20px] font-montserrat text-center items-center justify-center text-[#FBFBFB] font-inter">
            <p className="md:hidden text-[13px] leading-[130%] text-[#FBFBFB] font-normal font-inter text-center md:min-w-[39%]">
              <span className="font-bold text-[15px]">{t("banner_heading")}</span> {t("banner_text")}
              <br />
              <Link href="/" className="font-medium underline">
                {t("read_more")} {" "}
              </Link>
              {t("about_cookies_suffix")}
            </p>

            <div className="md:flex hidden text-[13px] leading-[130%] text-[#FBFBFB] font-normal font-inter text-center xl:text-start sm:w-[45%] md:min-w-[38%] ml-[2%] ">
              <p>
                <span className="font-bold text-[15px]">{t("banner_heading")}</span>{" "}
               {t("banner_text")}
                <Link href="/" className="font-medium underline">
                  {t("read_more")} {" "}
                </Link>
                 {t("about_cookies_suffix")}
              </p>
            </div>
            <div className="grid grid-cols-2 lg:flex lg:flex-row md:gap-[20px] xl:gap-[30px] w-full items-center justify-center gap-[8px] lg:gap-[1vw] mr-[2%]  ">
              <button
                className="gradient-border-button !text-[12px] h-[42px] lg:!text-[14px] leading-normal font-medium items-center justify-center text-center border-[#FFFFFF] border-[0.867px] whitespace-nowrap py-[10px] md:px-[28px] cursor-pointer rounded-[14px] min-w-[176px] "
                onClick={handleDenyAll}
              >
                 {t("deny_all")}
              </button>
              <button
                onClick={handleAcceptAll}
                className="gradient-border-button lg:hidden h-[42px] !text-[12px] lg:!text-[14px] leading-normal font-medium items-center justify-center text-center border-[#FFFFFF] border-[0.867px] whitespace-nowrap py-[12px] md:px-[28px] cursor-pointer rounded-[14px] min-w-[189px] "
              >
                  {t("accept_all")}
              </button>

              <button
                onClick={handleModalToggle}
                className="gradient-border-button !text-[12px] h-[42px] lg:!text-[14px] leading-normal font-medium items-center justify-center text-center border-[#FFFFFF] border-[0.867px] whitespace-nowrap px-[32px] cursor-pointer col-span-2 rounded-[14px] lg:w-[250px]"
              >
                  {t("manage_prefs")}
              </button>

              <button
                onClick={handleAcceptAll}
                className="gradient-border-button hidden h-[42px] lg:flex !text-[12px] lg:!text-[14px] leading-normal font-medium items-center justify-center text-center border-[#FFFFFF] border-[0.867px] whitespace-nowrap py-[16px] md:px-[32px] cursor-pointer rounded-[14px] w-[189px]"
              >
                {t("accept_all")}
              </button>

              {isModalOpen && (
                <CookiePreferencesModal
                  cookies={cookies}
                  onToggle={handleToggle}
                  onConfirm={handleConfirm}
                  onClose={handleModalToggle}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
