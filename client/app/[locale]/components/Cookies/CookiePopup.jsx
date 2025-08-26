"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IoIosArrowForward } from "react-icons/io";
import Logosvg from "./components/DgtlfaceLogoSvg";
import { RxCross2 } from "react-icons/rx";
import LineSvg from "./components/LineSvg";
import LineSvg2 from "./components/LineSvg2";
import { useTranslations } from 'next-intl';

// ModalPortal Componenti: Modal içeriği body içerisine taşır.
const ModalPortal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 h-screen w-screen z-[9999] flex items-center justify-center "
      onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-screen h-screen lg:w-[715px] lg:h-[651px] rounded-none lg:rounded-[22px]  bg-[rgba(20,15,37,0.5)] backdrop-blur-[50px]"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

const CookiePopup = () => {
   const t = useTranslations("CookiePopup")

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const buttonsData = [
    { id: 0, label: t("cookie_policy_title") },
    { id: 1, label: t("cookie_clarification_title")  },
    { id: 2, label: t("what_are_cookies_title")  },
  ];

  const [selectedContent, setSelectedContent] = React.useState(0);

  // Aktif butonu listenin başına alacak şekilde yeniden sıralama
  const orderedButtons = [
    buttonsData.find((btn) => btn.id === selectedContent),
    ...buttonsData.filter((btn) => btn.id !== selectedContent),
  ];

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

  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);

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

//--------

  const contents = [
    // third button
    <div className="flex flex-col h-full w-[96%] text-start font-inter items-center justify-start  gap-[7.5px] overflow-y-scroll thin-scrollbar max-h-[500px] overflow-x-hidden">
    <div className="flex w-full py-[10px] items-center justify-between gap-[14px] lg:max-w-[430px]">
  <div
    onClick={() => setIsDropdown1Open(!isDropdown1Open)}
    className="flex items-center justify-start gap-[13px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[90%]"
  >
    <div className="flex items-center cursor-pointer transition-transform duration-300">
      <IoIosArrowForward
        className={`w-[21px] h-[22px] transform transition-transform duration-300 ${
          isDropdown1Open ? "rotate-90" : "rotate-0"
        }`}
      />
    </div>

    <h4 className="text-[15px] font-medium leading-normal -tracking-[0.3px]">
      {t("strictly_necessary_title")}
    </h4>
  </div>

  {/* Toggle butonu yerine her zaman aktif olduğunu belirten bir gösterge */}
  <div
    className="w-[32px] h-[20px] flex items-center justify-end rounded-full gradient1"
  >
    <div className={`w-[14px] h-[14px] bg-white rounded-full transition-transform duration-300 ${
              cookies.performance ? "-translate-x-1" : "-translate-x-1"
            }`} />
  </div>
</div>
      <LineSvg className="flex" width={415} height={2} />
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown1Open
            ? "max-h-[200px] min-h-[140px] opacity-100 py-[10px] ml-[5%] lg:max-w-[430px]"
            : "max-h-0 opacity-0 ml-[5%] lg:max-w-[430px]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-inter leading-[150%] w-[98%] h-auto -tracking-[0.26px] font-light">
          {t("mandatory_cookies_text")}
        </p>
      </div>

      {/* 2.toggle */}
      <div className="flex w-full py-[10px] items-center justify-between gap-[14px] ">
        <div
          onClick={() => setIsDropdown2Open(!isDropdown2Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[80%] lg:max-w-[430px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowForward
              className={`w-[21px] h-[22px] transform transition-transform duration-300 ${
                isDropdown2Open ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>

          <h4 className="text-[15px] font-medium leading-normal -tracking-[0.3px] w-[73%] sm:w-[84%] md:w-[71vw] lg:w-[498px]">
            {t("performance_title")}
          </h4>
        </div>
        <div
          className={`w-[32px] h-[20px] flex items-center cursor-pointer rounded-full transition-colors duration-300 ${
            cookies.performance ? "gradient1" : "bg-[#676766]"
          }`}
          onClick={() => handleToggle("performance")}
        >
          <div
            className={`w-[14px] h-[14px] bg-white rounded-full transition-transform duration-300 ${
              cookies.performance ? "translate-x-[14px]" : "translate-x-1"
            }`}
          />
        </div>
      </div>
      <LineSvg className="flex" width={415} height={2} />
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown2Open
            ? "max-h-[200px] min-h-[140px] opacity-100 py-[10px] ml-[5%] lg:max-w-[430px]"
            : "max-h-0 opacity-0  ml-[5%] lg:max-w-[430px]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-inter leading-[150%] w-[98%] h-auto -tracking-[0.26px] font-light">
           {t("mandatory_cookies_text")}
        </p>
      </div>

      {/* 3.toggle */}
      <div className="flex w-full py-[10px] items-center justify-between gap-[14px] ">
        <div
          onClick={() => setIsDropdown3Open(!isDropdown3Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[80%] lg:max-w-[430px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowForward
              className={`w-[21px] h-[22px] transform transition-transform duration-300 ${
                isDropdown3Open ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>

          <h4 className="text-[15px] font-medium leading-normal -tracking-[0.3px] w-[73%] sm:w-[84%] md:w-[71vw] lg:w-[498px]">
            {t("functional_title")}
          </h4>
        </div>
        <div
          className={`w-[32px] h-[20px] flex items-center cursor-pointer rounded-full transition-colors duration-300 ${
            cookies.functional ? "gradient1" : "bg-[#676766]"
          }`}
          onClick={() => handleToggle("functional")}
        >
          <div
            className={`w-[14px] h-[14px] bg-white rounded-full transition-transform duration-300 ${
              cookies.functional ? "translate-x-[14px]" : "translate-x-1"
            }`}
          />
        </div>
      </div>
      <LineSvg className="flex" width={415} height={2} />
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown3Open
            ? "max-h-[200px] min-h-[140px] opacity-100 py-[10px] ml-[5%] lg:max-w-[430px]"
            : "max-h-0 opacity-0  ml-[5%] lg:max-w-[430px]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-inter leading-[150%] w-[98%] h-auto -tracking-[0.26px] font-light">
          {t("mandatory_cookies_text")}
        </p>
      </div>

      {/* 4.toggle */}
      <div className="flex w-full py-[10px] items-center justify-between gap-[14px]">
        <div
          onClick={() => setIsDropdown4Open(!isDropdown4Open)}
          className="flex items-center justify-start gap-[14px] w-[82%] sm:w-[90%] md:w-[76vw] lg:w-[80%] lg:max-w-[430px]"
        >
          <div className="flex items-center cursor-pointer transition-transform duration-300">
            <IoIosArrowForward
              className={`w-[21px] h-[22px] transform transition-transform duration-300 ${
                isDropdown4Open ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>

          <h4 className="text-[15px] font-medium leading-normal -tracking-[0.3px] w-[73%] sm:w-[84%] md:w-[71vw] lg:w-[498px]">
            {t("targeting_title")}
          </h4>
        </div>
        <div
          className={`w-[32px] h-[20px] flex items-center cursor-pointer rounded-full transition-colors duration-300 ${
            cookies.targeting ? "gradient1" : "bg-[#676766]"
          }`}
          onClick={() => handleToggle("targeting")}
        >
          <div
            className={`w-[14px] h-[14px] bg-white rounded-full transition-transform duration-300 ${
              cookies.targeting ? "translate-x-[14px]" : "translate-x-1"
            }`}
          />
        </div>
      </div>
      <LineSvg className="flex" width={415} height={2} />
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown4Open
            ? "max-h-[200px] min-h-[140px] opacity-100 py-[10px] ml-[5%] lg:max-w-[430px]"
            : "max-h-0 opacity-0  ml-[5%] lg:max-w-[430px]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-inter leading-[150%] w-[98%] h-auto -tracking-[0.26px] font-light">
           {t("mandatory_cookies_text")}
        </p>
      </div>
    </div>,

    <div className="flex flex-col h-full w-[96%] ml-[2%] sm:w-[95%] lg:w-[99%] text-start text-[#FBFBFB] overflow-y-scroll overflow-x-hidden z-[9999] font-inter thin-scrollbar items-center justify-start">
      <p className="text-[13px] font-normal leading-[19.5px] pr-[3.5%] lg:pr-[7.5%] w-[82%]">
        6698 sayılı Kişisel Verilerin Korunması Kanunu'na (“Kanun”) göre ARAS
        İNŞAAT TİCARET TURİZM ANONİM ŞİRKETİ (“Bundan sonra ‘PORT NATURE’ olarak
        anılacaktır.”) sizinle ilgili kişisel verileri işlemesi sebebiyle veri
        sorumlusu olarak tanımlanmaktadır. Kanunun "Aydınlatma Yükümlülüğü"
        başlıklı 10'ncu maddesine göre veri sorumluları, kişisel verilerini
        işledikleri gerçek kişileri bazı konularda bilgilendirmekle yükümlüdür.
        İlgili Kişi: [https://portnature.com.tr/] alan adlı web sitemizi ziyaret
        ettiğiniz için çerezler ve farklı tanımlayıcılarla bazı kişisel
        verilerini işlediğimiz siz, Kanun tarafından ilgili kişi olarak
        tanımlanmaktasınız. Veri Sorumlusu: Sizinle ilgili kişisel veriler
        konusunda kişisel verilerin işleme amaçlarını ve vasıtalarını
        belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden
        sorumlu olan [PORT NATURE] veri sorumlusudur. ÇEREZLER HAKKINDA
        BİLGİLENDİRME; Bununla birlikte sitemizde çerezler vasıtasıyla birtakım
        kişisel verilerinizi işliyoruz. Çerezler (cookies), reklam kimlikleri ve
        web tanımlayıcıları gibi teknolojileri (bu teknolojilerin tamamı “Çerez”
        olarak ifade edilecektir) ifade etmektedir. Çerez (Cookie) Nedir?
        Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar
        aracılığıyla bilgisayarınıza (ya da akıllı telefon veya tablet gibi
        diğer cihazlarınıza) kaydedilen ve genelde harf ve rakamlardan oluşan
        çok küçük metin dosyalarıdır. Çerezler kullanıcının ve cihazının
        tanınmasına, kullanıcının tercihleri ve geçmiş işlemleriyle ilgili bazı
        bilgilerin depolanmasını sağlar. Çerezler, ziyaret ettiğiniz web
        sitesini yöneten sunucular tarafından oluşturulurlar. Böylelikle
        ziyaretçi aynı siteyi ziyaret ettiğinde sunucu bunu anlayabilir.
        Çerezler, web sitesi sahiplerine aynı ziyaretçinin siteyi yeniden
        ziyaret ettiğini gösteren kimlik kartlarına benzetilebilir. Çerezler
        konusunda daha detaylı bilgi için https://www.aboutcookies.org/ ve
        https://www.allaboutcookies.org/ adreslerini ziyaret edebilirisiniz.
        Çerezler Vasıtasıyla Kişisel Verilerin Elde Edilmesi Web sitemizi ilk
        ziyaret edişinizde size çerez tercihlerinize ilişkin bir ekran sunulur.
        Bu ekranda kullanımına izin verdiğiniz çerezler uyarınca ilgili çerezler
        tarayıcınıza/cihazınıza depolanır. Çerezlerin her biri genellikle
        aşağıdaki unsurları içerir: • Çerezin gönderildiği sunucu, • Çerezin
        önceden belirlenmiş olan kullanım ömrü, • Genellikle rastgele
        oluşturulmuş benzersiz bir tanımlayıcı değer/numara (çerezi gönderen web
        sitesi sunucusu, sayfalar arasında gezindiğinizde sizi tanımak için bu
        değeri kullanır). Çerezler vasıtasıyla veriler tamamen otomatik
        yöntemlerle toplanmaktadır. Çerezler, sahipleri, kullanım ömürleri ve
        kullanım amaçları bakımından sınıflandırılabilir: • Sahibine göre
        çerezler, ziyaret ettiğiniz web sitesi tarafından cihazınıza
        yerleştirilen birinci taraf çerezleri ve üçüncü taraflarca sunulan
        üçüncü taraf çerezleri kullanılmaktadır. Birinci çerezleri, PORT NATURE
        tarafından sunulurken, üçüncü taraf çerezleri hizmet alınan veya iş
        ortağı olan farklı firmalarca sunulmaktadır. • Kullanım ömrüne göre,
        oturum çerezleri ve kalıcı çerezler kullanılmaktadır. Oturum çerezleri
        ziyaretçinin web sitesini terk etmesiyle birlikte silinirken, kalıcı
        çerezler önceden belirlenen kullanım ömürleri boyunca ziyaretçilerin
        cihazlarında saklanmakta ve bir sonraki ziyaretinde ziyaretçiyi ve
        ziyaretçinin tercihlerini hatırlamak amacıyla kullanılır. • Kullanım
        amaçlarına göre, sitede kesinlikle gerekli olan çerezler, analitik
        çerezler ve hedefleme/reklam çerezleri kullanılmaktadır. Çerezler
        Vasıtasıyla Toplanan Veriler, Kullanım Amaçları Ve Hukuki Sebepleri
        Çerezler aracılığıyla, kullandığınız tarayıcı ve işletim sistemi, IP
        adresi, kullanıcı ID, ziyaretinizin tarihi ve saati, erişim durumu, web
        sitesindeki özelliklerin kullanımı, girdiğiniz arama ifadeleri, web
        sitemizi ne sıklıkta ziyaret ettiğiniz, dil tercihleriniz, sayfalarda
        gerçekleştirdiğiniz işlemler dahil kullanıcı işlem kayıtlarına ilişkin
        veriler toplanmakta ve işlenmektedir. Çerezler, web sitemizi
        ziyaretinizin ve buradaki deneyiminizin stabil bir şekilde
        gerçekleştirilmesinin ve bir sonraki kullanımınızda bilgilerinizin
        hatırlanmasının sağlanması, sitenin işleyişinin ve içeriğinin
        geliştirilmesi, site kullanımlarının istatistiksel olarak
        değerlendirilmesi, sitede yer alan içeriğin sizin ve cihazınız için en
        etkili şekilde sunulması ile kullanıcılara tercih ve kullanım
        alışkanlıkları doğrultusunda özelleştirilmiş hizmetler ve reklamlar
        sunulması amaçlarıyla kullanılmaktadır. Çerezler kullanım amaçları ve
        fonksiyonlarına göre çeşitli kategorilere ayrılmaktadır. Aşağıda
        kategorilerine göre web sitemizde kullanılan çerezler ile ilgili
        çerezleri sağlayanlar, çerezler ile kişisel veri aktarılabilecek yabancı
        ülkeler ve her bir çerez özelinde kullanım amaçlarına ve hukuki
        sebeplerine yer verilmiştir: 1. Zorunlu Çerezler Web sitesinin kullanımı
        ve işlerliği için gerekli olan çerezlerdir. Zorunlu çerezler devre dışı
        bırakıldığı takdirde sitenin bir kısmına veya tümüne erişim mümkün
        olmayabilir. Zorunlu çerezler vasıtasıyla işlenen kişisel veriler, ürün
        ve hizmetlerin sunulabilmesi ve faaliyetlerin mevzuata uygun yürütülmesi
        amaçlarıyla, KVKK Md.5/2e’de öngörülen bir hakkın tesisi, kullanılması
        veya korunması için veri işlemenin zorunlu olması sebebiyle
        işlenmektedir.
      </p>
    </div>,

    // second text
    <div className="flex flex-col h-full text-start items-center justify-between w-[96%]">
      <p className="text-[13px] font-light leading-[150%] -tracking-[0.26px] font-inter w-[80%]">
        {t("what_are_cookies_text_1")}
      </p>
      <p className="text-[13px] font-light leading-[150%] -tracking-[0.26px] font-inter w-[80%]">
       {t("what_are_cookies_text_2")}{" "}
        <span className="text-[#0079D0] underline">{t("click")}</span>
      </p>
    </div>,
  ];

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed flex z-[9999] bottom-0  right-0 left-0 w-screen  items-center justify-center">
        <div className="flex items-center justify-center w-screen lg:w-[85%] max-w-[1232px] border relative gradient-cookie-button !bg-[rgba(20,15,37,0.5)] !backdrop-blur-[5px] rounded-none lg:rounded-[22px]">
          <div className="flex flex-col md:flex-row w-[94%] md:w-[99%] lg:w-[94%] xl:w-[90%] py-[22px] gap-[20px] font-montserrat text-center items-center justify-center text-[#FBFBFB] font-inter">
            <p className="md:hidden text-[13px] leading-[130%] text-[#FBFBFB] font-normal font-inter text-center md:min-w-[39%]">
              <span className="font-bold text-[15px]">{t("banner_heading")}</span> {t("banner_text")}
              <br />
              <Link href="/" className="font-medium underline">
                {t("read_more")}
              </Link>
              {t("about_cookies_suffix")}
            </p>

            <div className="md:flex hidden text-[13px] leading-[130%] text-[#FBFBFB] font-normal font-inter text-center xl:text-start sm:w-[45%] md:min-w-[38%] ml-[2%] ">
              <p>
                <span className="font-bold text-[15px]">{t("banner_heading")}</span>{" "}
               {t("banner_text")}
                <Link href="/" className="font-medium underline">
                  {t("read_more")}
                </Link>
                 {t("about_cookies_suffix")}
              </p>
            </div>
            <div className="grid grid-cols-2 lg:flex lg:flex-row md:gap-[20px] xl:gap-[30px] w-full items-center justify-center gap-[13px] lg:gap-[1vw] mr-[2%]  ">
              <button
                className="gradient-border-button text-[13px] h-[42px] lg:text-[14px] leading-normal font-medium items-center justify-center text-center border-[#FFFFFF] border-[0.867px] whitespace-nowrap py-[10px] px-[28px] cursor-pointer rounded-[14px] min-w-[176px] "
                onClick={handleDenyAll}
              >
                 {t("deny_all")}
              </button>
              <button
                onClick={handleAcceptAll}
                className="gradient-border-button flex lg:hidden h-[42px] text-[13px] lg:text-[14px] leading-normal font-medium items-center justify-center text-center border-[#FFFFFF] border-[0.867px] whitespace-nowrap py-[16px] md:px-[28px] cursor-pointer rounded-[14px] w-[189px] -tracking-[0.28px]"
              >
                  {t("accept_all")}
              </button>

              <button
                onClick={handleModalToggle}
                className="gradient-border-button text-[13px] h-[42px] lg:text-[14px] leading-normal font-medium items-center justify-center text-center border-[#FFFFFF] border-[0.867px] whitespace-nowrap  px-[32px] cursor-pointer col-span-2 rounded-[14px] lg:w-[250px]"
              >
                  {t("manage_prefs")}
              </button>

              <button
                onClick={handleAcceptAll}
                className="gradient-border-button hidden h-[42px] lg:flex text-[13px] lg:text-[14px] leading-normal font-medium items-center justify-center text-center border-[#FFFFFF] border-[0.867px] whitespace-nowrap py-[16px] md:px-[32px] cursor-pointer rounded-[14px] w-[189px]"
              >
                {t("accept_all")}
              </button>

              {isModalOpen && (
                <ModalPortal onClose={handleModalToggle}>
                  <div className="flex flex-col  items-center justify-center gap-[15px] lg:gap-[39px]">
                    <div className="flex w-[95%] items-end justify-between lg:mt-[42px] lg:gap-[23px] mt-[10%] md:mt-[83px] lg:h-[39px] xl:h-auto h-[52px]">
                      <Logosvg
                        className="flex items-center justify-center"
                        width={56}
                        height={49}
                        color="#fff"
                      />
                      <div className="hidden lg:flex flex-row w-[98%] md:w-[90%] lg:w-auto text-center items-center text-[16px] font-bold ml-[11%] lg:ml-0 gap-[23px] h-[29px]">
                        {[
                          t("cookie_policy_title"),
                          t("cookie_clarification_title"),
                          t("what_are_cookies_title"),
                        ].map((buttonLabel, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedContent(index)}
                            className={
                              selectedContent === index
                                ? "text-white text-[16px] font-inter leading-normal font-medium w-[60%] max-w-[191px] cursor-pointer p-[10px] border-b  whitespace-nowrap  items-start justify-start text-start underline] h-[48px] lg:h-[37px]"
                                : " text-[16px] font-inter leading-normal font-medium text-[#A6A6A6] whitespace-nowrap cursor-pointer p-[10px] border-none items-start justify-start text-start h-[48px] lg:h-[37px]"
                            }
                          >
                            {buttonLabel}
                          </button>
                        ))}
                      </div>
                      <button
                        className="flex text-[40px] text-stoneLight text-white items-center justify-center h-full"
                        onClick={handleModalToggle}
                      >
                        <RxCross2 size={24} color="#fff" />
                      </button>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center pb-2 lg:pb-0 md:h-[100%] text-[#FBFBFB] max-w-screen  h-auto">
                      <div className="flex flex-col w-[82%] sm:w-[90%] lg:w-[100%] justify-center items-center lg:items-center lg:justify-start gap-[14.5px] lg:gap-[15px] ">
                        <div className="flex flex-row lg:hidden text-start text-[16px] ml-0 lg:-ml-[4%] font-bold gap-[10px] w-[99%] lg:w-[100%] lg:mb-[36px] items-center justify-start overflow-x-scroll scrollbar-thin">
                          {orderedButtons.map((button) => (
                            <button
                              key={button.id}
                              onClick={() => setSelectedContent(button.id)}
                              className={
                                selectedContent === button.id
                                  ? " text-[14px] lg:text-[16px] font-inter leading-normal font-medium w-fit cursor-pointer pt-[10px] px-[5px] border-b whitespace-nowrap items-start justify-start text-start h-[48px] lg:h-[37px] bg-gradient-to-r from-[#54B9CF] via-[#547CCF] to-[#A754CF] bg-clip-text text-transparent"
                                  : "text-[12px] lg:text-[16px] font-inter leading-normal font-medium text-[#fff] whitespace-nowrap cursor-pointer pt-[10px] px-[5px] border-none items-start justify-start text-start h-[48px] lg:h-[37px] w-fit"
                              }
                            >
                              {button.label}
                            </button>
                          ))}
                        </div>

                        <div className="flex flex-col w-[88%] h-[54vh] md:h-[55vh] lg:h-[376px] lg:w-[85%] ml-[2%] lg:ml-[7%] mt-[2vw] lg:mt-0 items-start justify-start text-start ">
                          {/* Dinamik Başlık */}
                          {/* İçerik */}
                          {contents[selectedContent]}
                        </div>
                        <LineSvg2 className="hidden lg:flex" />
                        <div className="hidden lg:flex items-center justify-center w-[100%] gap-[13px] lg:gap-[37px] lg:mt-[22px] font-inter">
                          <button  onClick={handleConfirm} className="flex gradient-border-button text-[15px] font-medium leading-normal text-[#fff] px-[32px] py-[16px] border whitespace-nowrap max-w-[208px] items-center justify-center h-[42px] w-[44vw]">
                            {t("confirm_choices")}
                          </button>
                          <button className="flex gradient-border-button text-[15px] font-medium leading-normal text-[#fff]  px-[32px] py-[16px] border whitespace-nowrap max-w-[208px] items-center justify-center w-[44vw] h-[42px]">
                           {t("accept_all")}
                          </button>
                        </div>

                        <div className=" absolute bottom-[8vh] sm:bottom-[12%] flex lg:hidden items-center justify-center w-[100%] gap-[13px] font-inter">
                          <button  onClick={handleConfirm} className="relative gradient-cookie-button flex text-[12px] items-center justify-center font-medium leading-normal text-[#FBFBFB] px-[32px] py-[10px] border border-[#FBFBFB] whitespace-nowrap max-w-[208px] w-[44vw] h-[42px]">
                           {t("confirm_choices")}
                          </button>
                          <button className="text-[12px] gradient-cookie-button relative font-medium flex items-center justify-center leading-normal text-[#FBFBFB] px-[32px] py-[16px] border border-[#FBFBFB] whitespace-nowrap max-w-[208px] w-[44vw]  h-[42px]">
                            {t("accept_all")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalPortal>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
