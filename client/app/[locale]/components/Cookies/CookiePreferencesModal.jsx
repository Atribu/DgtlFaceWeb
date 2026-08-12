"use client";

import { useState } from "react";
import ReactDOM from "react-dom";
import { useTranslations } from "next-intl";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Logosvg from "./components/DgtlfaceLogoSvg";
import LineSvg from "./components/LineSvg";
import LineSvg2 from "./components/LineSvg2";

export default function CookiePreferencesModal({
  cookies,
  onToggle,
  onConfirm,
  onClose,
}) {
  const t = useTranslations("CookiePopup");
  const [selectedContent, setSelectedContent] = useState(0);
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);

  const buttonsData = [
    { id: 0, label: t("cookie_policy_title") },
    { id: 1, label: t("cookie_clarification_title") },
    { id: 2, label: t("what_are_cookies_title") },
  ];

  const orderedButtons = [
    buttonsData.find((button) => button.id === selectedContent),
    ...buttonsData.filter((button) => button.id !== selectedContent),
  ];

  const contents = [
    <div
      key="preferences"
      className="flex flex-col h-full w-[96%] text-start font-inter items-center justify-start gap-[7.5px] overflow-y-scroll thin-scrollbar max-h-[500px] overflow-x-hidden"
    >
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

        <div className="w-[32px] h-[20px] flex items-center justify-end rounded-full gradient1">
          <div className="w-[14px] h-[14px] bg-white rounded-full transition-transform duration-300 -translate-x-1" />
        </div>
      </div>
      <LineSvg className="flex" width={415} height={2} />
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isDropdown1Open
            ? "max-h-[240px] min-h-[140px] opacity-100 py-[10px] ml-[5%] lg:max-w-[430px]"
            : "max-h-0 opacity-0 ml-[5%] lg:max-w-[430px]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-inter leading-[150%] w-[98%] h-auto -tracking-[0.26px] font-light">
          {t("mandatory_cookies_text")}
        </p>
      </div>

      <div className="flex w-full py-[10px] items-center justify-between gap-[14px]">
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
          onClick={() => onToggle("performance")}
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
            : "max-h-0 opacity-0 ml-[5%] lg:max-w-[430px]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-inter leading-[150%] w-[98%] h-auto -tracking-[0.26px] font-light">
          {t("mandatory_cookies_text")}
        </p>
      </div>

      <div className="flex w-full py-[10px] items-center justify-between gap-[14px]">
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
          onClick={() => onToggle("functional")}
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
            : "max-h-0 opacity-0 ml-[5%] lg:max-w-[430px]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-inter leading-[150%] w-[98%] h-auto -tracking-[0.26px] font-light">
          {t("mandatory_cookies_text")}
        </p>
      </div>

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
          onClick={() => onToggle("targeting")}
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
            : "max-h-0 opacity-0 ml-[5%] lg:max-w-[430px]"
        }`}
      >
        <p className="text-[#FFF] text-[13px] font-inter leading-[150%] w-[98%] h-auto -tracking-[0.26px] font-light">
          {t("mandatory_cookies_text")}
        </p>
      </div>
    </div>,

    <div
      key="clarification"
      className="flex flex-col h-full w-[96%] ml-[2%] sm:w-[95%] lg:w-[99%] text-start text-[#FBFBFB] overflow-y-scroll overflow-x-hidden z-[9999] font-inter thin-scrollbar items-center justify-start"
    >
      <p className="text-[13px] font-normal leading-[19.5px] pr-[3.5%] lg:pr-[7.5%] w-[82%]">
        6698 sayılı Kişisel Verilerin Korunması Kanunu'na (“Kanun”) göre
        DGTLFACE (“Bundan sonra ‘DGTLFACE’ olarak anılacaktır.”) sizinle ilgili
        kişisel verileri işlemesi sebebiyle veri sorumlusu olarak
        tanımlanmaktadır. Kanunun "Aydınlatma Yükümlülüğü" başlıklı 10'ncu
        maddesine göre veri sorumluları, kişisel verilerini işledikleri gerçek
        kişileri bazı konularda bilgilendirmekle yükümlüdür. İlgili Kişi:
        [https://dgtlface.com.tr/] alan adlı web sitemizi ziyaret ettiğiniz için
        çerezler ve farklı tanımlayıcılarla bazı kişisel verilerini işlediğimiz
        siz, Kanun tarafından ilgili kişi olarak tanımlanmaktasınız. Veri
        Sorumlusu: Sizinle ilgili kişisel veriler konusunda kişisel verilerin
        işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin
        kurulmasından ve yönetilmesinden sorumlu olan [DGTLFACE] veri
        sorumlusudur. ÇEREZLER HAKKINDA BİLGİLENDİRME; Bununla birlikte sitemizde
        çerezler vasıtasıyla birtakım kişisel verilerinizi işliyoruz. Çerezler
        (cookies), reklam kimlikleri ve web tanımlayıcıları gibi teknolojileri
        (bu teknolojilerin tamamı “Çerez” olarak ifade edilecektir) ifade
        etmektedir. Çerez (Cookie) Nedir? Çerezler, ziyaret ettiğiniz internet
        siteleri tarafından tarayıcılar aracılığıyla bilgisayarınıza (ya da
        akıllı telefon veya tablet gibi diğer cihazlarınıza) kaydedilen ve
        genelde harf ve rakamlardan oluşan çok küçük metin dosyalarıdır. Çerezler
        kullanıcının ve cihazının tanınmasına, kullanıcının tercihleri ve geçmiş
        işlemleriyle ilgili bazı bilgilerin depolanmasını sağlar. Çerezler,
        ziyaret ettiğiniz web sitesini yöneten sunucular tarafından
        oluşturulurlar. Böylelikle ziyaretçi aynı siteyi ziyaret ettiğinde
        sunucu bunu anlayabilir. Çerezler, web sitesi sahiplerine aynı
        ziyaretçinin siteyi yeniden ziyaret ettiğini gösteren kimlik kartlarına
        benzetilebilir. Çerezler konusunda daha detaylı bilgi için
        https://www.aboutcookies.org/ ve https://www.allaboutcookies.org/
        adreslerini ziyaret edebilirisiniz. Çerezler Vasıtasıyla Kişisel
        Verilerin Elde Edilmesi Web sitemizi ilk ziyaret edişinizde size çerez
        tercihlerinize ilişkin bir ekran sunulur. Bu ekranda kullanımına izin
        verdiğiniz çerezler uyarınca ilgili çerezler tarayıcınıza/cihazınıza
        depolanır. Çerezlerin her biri genellikle aşağıdaki unsurları içerir: •
        Çerezin gönderildiği sunucu, • Çerezin önceden belirlenmiş olan kullanım
        ömrü, • Genellikle rastgele oluşturulmuş benzersiz bir tanımlayıcı
        değer/numara (çerezi gönderen web sitesi sunucusu, sayfalar arasında
        gezindiğinizde sizi tanımak için bu değeri kullanır). Çerezler
        vasıtasıyla veriler tamamen otomatik yöntemlerle toplanmaktadır.
        Çerezler, sahipleri, kullanım ömürleri ve kullanım amaçları bakımından
        sınıflandırılabilir: • Sahibine göre çerezler, ziyaret ettiğiniz web
        sitesi tarafından cihazınıza yerleştirilen birinci taraf çerezleri ve
        üçüncü taraflarca sunulan üçüncü taraf çerezleri kullanılmaktadır.
        Birinci çerezleri, DGTLFACE tarafından sunulurken, üçüncü taraf çerezleri
        hizmet alınan veya iş ortağı olan farklı firmalarca sunulmaktadır. •
        Kullanım ömrüne göre, oturum çerezleri ve kalıcı çerezler
        kullanılmaktadır. Oturum çerezleri ziyaretçinin web sitesini terk
        etmesiyle birlikte silinirken, kalıcı çerezler önceden belirlenen
        kullanım ömürleri boyunca ziyaretçilerin cihazlarında saklanmakta ve bir
        sonraki ziyaretinde ziyaretçiyi ve ziyaretçinin tercihlerini hatırlamak
        amacıyla kullanılır. • Kullanım amaçlarına göre, sitede kesinlikle
        gerekli olan çerezler, analitik çerezler ve hedefleme/reklam çerezleri
        kullanılmaktadır. Çerezler Vasıtasıyla Toplanan Veriler, Kullanım
        Amaçları Ve Hukuki Sebepleri Çerezler aracılığıyla, kullandığınız
        tarayıcı ve işletim sistemi, IP adresi, kullanıcı ID, ziyaretinizin
        tarihi ve saati, erişim durumu, web sitesindeki özelliklerin kullanımı,
        girdiğiniz arama ifadeleri, web sitemizi ne sıklıkta ziyaret ettiğiniz,
        dil tercihleriniz, sayfalarda gerçekleştirdiğiniz işlemler dahil
        kullanıcı işlem kayıtlarına ilişkin veriler toplanmakta ve
        işlenmektedir. Çerezler, web sitemizi ziyaretinizin ve buradaki
        deneyiminizin stabil bir şekilde gerçekleştirilmesinin ve bir sonraki
        kullanımınızda bilgilerinizin hatırlanmasının sağlanması, sitenin
        işleyişinin ve içeriğinin geliştirilmesi, site kullanımlarının
        istatistiksel olarak değerlendirilmesi, sitede yer alan içeriğin sizin
        ve cihazınız için en etkili şekilde sunulması ile kullanıcılara tercih
        ve kullanım alışkanlıkları doğrultusunda özelleştirilmiş hizmetler ve
        reklamlar sunulması amaçlarıyla kullanılmaktadır. Çerezler kullanım
        amaçları ve fonksiyonlarına göre çeşitli kategorilere ayrılmaktadır.
        Aşağıda kategorilerine göre web sitemizde kullanılan çerezler ile ilgili
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

    <div
      key="about-cookies"
      className="flex flex-col h-full text-start items-center justify-between w-[96%]"
    >
      <p className="text-[13px] font-light leading-[150%] -tracking-[0.26px] font-inter w-[80%]">
        {t("what_are_cookies_text_1")}
      </p>
      <p className="text-[13px] font-light leading-[150%] -tracking-[0.26px] font-inter w-[80%]">
        {t("what_are_cookies_text_2")}{" "}
        <span className="text-[#0079D0] underline">{t("click")}</span>
      </p>
    </div>,
  ];

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 h-screen w-screen z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-screen h-screen lg:w-[715px] lg:h-[651px] rounded-none lg:rounded-[22px] bg-[rgba(20,15,37,0.5)] backdrop-blur-[50px]"
      >
        <div className="flex flex-col items-center justify-center gap-[15px] lg:gap-[39px]">
          <div className="flex w-[95%] items-end justify-between lg:mt-[42px] lg:gap-[23px] mt-[10%] md:mt-[83px] lg:h-[39px] xl:h-auto h-[52px]">
            <Logosvg
              className="flex items-center justify-center"
              width={56}
              height={49}
              color="#fff"
            />
            <div className="hidden lg:flex flex-row w-[98%] md:w-[90%] lg:w-auto text-center items-center text-[16px] font-bold ml-[11%] lg:ml-0 gap-[23px] h-[29px]">
              {buttonsData.map((button) => (
                <button
                  key={button.id}
                  onClick={() => setSelectedContent(button.id)}
                  className={
                    selectedContent === button.id
                      ? "text-white text-[16px] font-inter leading-normal font-medium w-[60%] max-w-[191px] cursor-pointer p-[10px] border-b whitespace-nowrap items-start justify-start text-start underline] h-[48px] lg:h-[37px]"
                      : "text-[16px] font-inter leading-normal font-medium text-[#A6A6A6] whitespace-nowrap cursor-pointer p-[10px] border-none items-start justify-start text-start h-[48px] lg:h-[37px]"
                  }
                >
                  {button.label}
                </button>
              ))}
            </div>
            <button
              className="flex text-[40px] text-stoneLight text-white items-center justify-center h-full"
              onClick={onClose}
            >
              <RxCross2 size={24} color="#fff" />
            </button>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center pb-2 lg:pb-0 md:h-[100%] text-[#FBFBFB] max-w-screen h-auto">
            <div className="flex flex-col w-[84%] sm:w-[90%] lg:w-[100%] justify-center items-center lg:items-center lg:justify-start gap-[14.5px] lg:gap-[15px]">
              <div className="flex flex-row lg:hidden text-start text-[16px] ml-0 lg:-ml-[4%] font-bold gap-[10px] w-[99%] lg:w-[100%] lg:mb-[36px] items-center justify-start overflow-x-scroll scrollbar-thin">
                {orderedButtons.map((button) => (
                  <button
                    key={button.id}
                    onClick={() => setSelectedContent(button.id)}
                    className={
                      selectedContent === button.id
                        ? "text-[14px] lg:text-[16px] font-inter leading-normal font-medium w-fit cursor-pointer pt-[10px] px-[5px] border-b whitespace-nowrap items-start justify-start text-start h-[48px] lg:h-[37px] bg-gradient-to-r from-[#54B9CF] via-[#547CCF] to-[#A754CF] bg-clip-text text-transparent"
                        : "text-[12px] lg:text-[16px] font-inter leading-normal font-medium text-[#fff] whitespace-nowrap cursor-pointer pt-[10px] px-[5px] border-none items-start justify-start text-start h-[48px] lg:h-[37px] w-fit"
                    }
                  >
                    {button.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col w-[89%] h-[54vh] md:h-[55vh] lg:h-[376px] lg:w-[85%] ml-[1%] lg:ml-[7%] mt-[2vw] lg:mt-0 items-start justify-start text-start">
                {contents[selectedContent]}
              </div>
              <LineSvg2 className="hidden lg:flex" />
              <div className="hidden lg:flex items-center justify-center w-[100%] gap-[13px] lg:gap-[37px] lg:mt-[22px] font-inter">
                <button
                  onClick={onConfirm}
                  className="flex gradient-border-button text-[15px] font-medium leading-normal text-[#fff] px-[32px] py-[16px] border whitespace-nowrap max-w-[208px] items-center justify-center h-[42px] w-[44vw]"
                >
                  {t("confirm_choices")}
                </button>
                <button className="flex gradient-border-button text-[15px] font-medium leading-normal text-[#fff] px-[32px] py-[16px] border whitespace-nowrap max-w-[208px] items-center justify-center w-[44vw] h-[42px]">
                  {t("accept_all")}
                </button>
              </div>

              <div className="absolute bottom-[8vh] sm:bottom-[12%] flex lg:hidden items-center justify-center w-[100%] gap-[13px] font-inter">
                <button
                  onClick={onConfirm}
                  className="relative gradient-cookie-button flex !text-[12px] items-center justify-center font-medium leading-normal text-[#FBFBFB] px-[32px] py-[10px] border border-[#FBFBFB] whitespace-nowrap max-w-[208px] w-[44vw] h-[42px]"
                >
                  {t("confirm_choices")}
                </button>
                <button className="!text-[12px] gradient-cookie-button relative font-medium flex items-center justify-center leading-normal text-[#FBFBFB] px-[32px] py-[16px] border border-[#FBFBFB] whitespace-nowrap max-w-[208px] w-[44vw] h-[42px]">
                  {t("accept_all")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
