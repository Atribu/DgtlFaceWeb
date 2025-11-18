"use client"
import React, { useState, useEffect } from "react";
import LineSvg from './LineSvg'
import PlusSvg from './PlusSvg '
import { useTranslations } from 'next-intl';

const QuestionsSection2 = ({color}) => {
    const t = useTranslations("AboutPage");

    const [isDropdown1Open, setIsDropdown1Open] = useState(false);
    const [isDropdown2Open, setIsDropdown2Open] = useState(false);
    const [isDropdown3Open, setIsDropdown3Open] = useState(false);
    const [isDropdown4Open, setIsDropdown4Open] = useState(false);
    const [isDropdown5Open, setIsDropdown5Open] = useState(false);
    const [isDropdown6Open, setIsDropdown6Open] = useState(false);

  return (
    <div className='flex flex-col w-full items-center justify-center gap-[70px] lg:gap-[168px] font-inter'>
      

      <div className={`flex flex-col w-[100%] lg:w-[50%] items-center justify-center text-center gap-[10px] lg:gap-[16px] text-[${color}]`}>
  <h4 className={`text-[24px] text-[${color}] lg:text-[32px] font-bold leading-[120%]-tracking-[0.48px]  lg:-tracking-[0.64px] mb-[14px] lg:mb-[16px]`}>
    DGTLFACE Hakkında {" "}
    <span className="bg-gradient-to-r from-[#547DCF] to-[#A754CF] bg-clip-text text-transparent">
      {t("aboutpage_s4_faq_span1")}
    </span>
  </h4>

  <div
    onClick={() => setIsDropdown1Open(!isDropdown1Open)}
    className={`
        flex flex-col overflow-hidden 
        transition-[max-height,transform] duration-700 ease-in-out 
        px-[20px] lg:px-[32px] py-[14.5px] w-[90%] md:w-[600px]
        border gradient-border-button rounded-[20px]
        !text-[10px] lg:!text-[16px] !font-normal leading-[140%] -tracking-[0.32px] text-[${color}]
        ${isDropdown1Open 
          ? "max-h-[200px] translate-y-0 " 
          : "max-h-[51px] translate-y-[-10px] "
        }
      `}
  >
    <div className={`flex w-full justify-between items-start text-[${color}]`}>
      <p className="flex whitespace-nowrap">DGTLFACE hangi alanlarda hizmet veren bir dijital pazarlama ajansıdır?</p>
      <PlusSvg
        className={`transition-transform duration-500 ${
          isDropdown1Open ? "rotate-180" : "rotate-0"
        }`}
        width={19}
        height={18}
      />
    </div>

    <div className="flex items-start text-start justify-center mt-4">
      <p className={`w-[98%]  text-[${color}]`}>
       DGTLFACE; SEO, SEM, sosyal medya yönetimi, web & yazılım geliştirme, creative & prodüksiyon, çağrı merkezi hizmetleri, PMS & OTA yönetimi ve veri analizi & raporlama alanlarında çalışan, özellikle oteller ve turizm markalarına odaklanmış bir dijital pazarlama ve teknoloji partneridir.
      </p>
    </div>
  </div>

  <div
    onClick={() => setIsDropdown2Open(!isDropdown2Open)}
    className={`
        flex flex-col overflow-hidden 
        transition-[max-height,transform] duration-700 ease-in-out 
        px-[20px] lg:px-[32px] py-[14.5px] w-[90%] md:w-[600px]
        border gradient-border-button rounded-[20px]
        !text-[10px] lg:!text-[16px] !font-normal leading-[140%] -tracking-[0.32px] text-[${color}]
        ${isDropdown2Open 
          ? "max-h-[200px] translate-y-0 " 
          : "max-h-[51px] translate-y-[-10px] "
        }
      `}
  >
    <div className={`flex w-full justify-between items-start text-[${color}]`}>
      <p className="flex whitespace-nowrap">
       Sadece otellerle mi çalışıyorsunuz, yoksa farklı sektörlerle de çalışıyor musunuz?
      </p>
      <PlusSvg
        className={`transition-transform duration-500 ${
          isDropdown2Open ? "rotate-180" : "rotate-0"
        }`}
        width={19}
        height={18}
      />
    </div>

    <div className="flex items-start text-start justify-center mt-4">
    <p className={`w-[98%]  text-[${color}]`}>
      Odak noktamız oteller ve turizm markaları olsa da hizmet, sağlık, gayrimenkul ve B2B alanlarında faaliyet gösteren farklı markalarla da çalışıyoruz. Ancak tüm projelerde, performans odaklı, veri bazlı ve uzun vadeli büyüme yaklaşımını koruyoruz.
      </p>
    </div>
  </div>

  <div
    onClick={() => setIsDropdown3Open(!isDropdown3Open)}
    className={`
        flex flex-col overflow-hidden 
        transition-[max-height,transform] duration-700 ease-in-out 
         px-[20px] lg:px-[32px] py-[14.5px] w-[90%] md:w-[600px]
        border gradient-border-button rounded-[20px]
        !text-[10px] lg:!text-[16px] !font-normal leading-[140%] -tracking-[0.32px] !text-[${color}]
        ${isDropdown3Open 
          ? "max-h-[200px] translate-y-0 " 
          : "max-h-[51px] translate-y-[-10px] "
        }
      `}
  >
     <div className={`flex w-full justify-between items-start text-[${color}]`}>
      <p className="flex whitespace-nowrap">
       DGTLFACE ile çalışmaya nasıl başlıyoruz?
      </p>
      <PlusSvg
        className={`transition-transform duration-500 ${
          isDropdown3Open ? "rotate-180" : "rotate-0"
        }`}
        width={19}
        height={18}
      />
    </div>

    <div className="flex items-start text-start justify-center mt-4">
    <p className={`w-[98%]  text-[${color}]`}>
     Önce kısa bir dijital durum analizi ve hedef toplantısı yapıyoruz. Ardından SEO, rek lam, sosyal medya, web ve operasyon tarafında öncelikli ihtiyaçlarınızı netleştiriyor, size özel bir yol haritası ve teklif hazırlıyoruz. Onayınızın ardından 30–60 günlük ilk aksiyon planını devreye alıyor, düzenli raporlama döngüsüyle süreci şeffaf şekilde yönetiyoruz.
      </p>
    </div>
  </div>

  <div
    onClick={() => setIsDropdown4Open(!isDropdown4Open)}
    className={`
        flex flex-col overflow-hidden 
        transition-[max-height,transform] duration-700 ease-in-out 
        px-[20px] lg:px-[32px] py-[14.5px] w-[90%] md:w-[600px]
        border gradient-border-button rounded-[20px]
        !text-[10px] lg:!text-[16px] !font-normal leading-[140%] -tracking-[0.32px] !text-[${color}]
        ${isDropdown4Open 
          ? "max-h-[200px] translate-y-0 " 
          : "max-h-[51px] translate-y-[-10px] "
        }
      `}
  >
     <div className={`flex w-full justify-between items-start text-[${color}]`}>
      <p className="flex whitespace-nowrap"> Otel dijital pazarlama sürecinde hangi metriklere odaklanıyorsunuz?</p>
      <PlusSvg
        className={`transition-transform duration-500 ${
          isDropdown4Open ? "rotate-180" : "rotate-0"
        }`}
        width={19}
        height={18}
      />
    </div>

    <div className="flex items-start text-start justify-center mt-4">
    <p className={`w-[98%]  text-[${color}]`}>
     Oteller için; doluluk oranı, direkt rezervasyon oranı, oda başı gelir (RevPAR), kanal bazlı satış dağılımı, web sitesi dönüşüm oranı, çağrı merkezi performansı, OTA görünürlüğü ve misafir memnuniyeti gibi metrikleri takip ediyoruz. Bu verileri Looker Studio panelleriyle birleştirerek yönetim ekibinizin hızlı ve doğru kararlar almasını sağlıyoruz.
      </p>
    </div>
  </div>

  <div
    onClick={() => setIsDropdown5Open(!isDropdown5Open)}
    className={`
        flex flex-col overflow-hidden 
        transition-[max-height,transform] duration-700 ease-in-out 
        px-[20px] lg:px-[32px] py-[14.5px] w-[90%] md:w-[600px]
        border gradient-border-button rounded-[20px]
        !text-[10px] lg:!text-[16px] !font-normal leading-[140%] -tracking-[0.32px] !text-[${color}]
        ${isDropdown5Open 
          ? "max-h-[200px] translate-y-0 " 
          : "max-h-[51px] translate-y-[-10px] "
        }
      `}
  >
     <div className={`flex w-full justify-between items-start text-[${color}]`}>
      <p className="flex whitespace-nowrap">DGTLFACE ile çalışmak için minimum bütçe veya sözleşme süresi var mı?</p>
      <PlusSvg
        className={`transition-transform duration-500 ${
          isDropdown5Open ? "rotate-180" : "rotate-0"
        }`}
        width={19}
        height={18}
      />
    </div>

    <div className="flex items-start text-start justify-center mt-4">
    <p className={`w-[98%]  text-[${color}]`}>
   Bütçe ve süreler markanın hedeflerine, hacmine ve ihtiyaç duyduğu hizmet kapsamına göre değişiyor. Bazı müşterilerimizle kampanya bazlı kısa dönem projeler, bazılarıyla ise 12 ay ve üzeri iş ortaklıkları yürütüyoruz. Temel hedefimiz, ayırdığınız bütçeyi gider değil, ölçülebilir yatırım haline getirmek.
      </p>
    </div>
  </div>

  <div
    onClick={() => setIsDropdown6Open(!isDropdown6Open)}
    className={`
        flex flex-col overflow-hidden 
        transition-[max-height,transform] duration-700 ease-in-out 
        px-[20px] lg:px-[32px] py-[14.5px] w-[90%] md:w-[600px]
        border gradient-border-button rounded-[20px]
        !text-[10px] lg:!text-[16px] !font-normal leading-[140%] -tracking-[0.32px] !text-[${color}]
        ${isDropdown6Open 
          ? "max-h-[200px] translate-y-0 " 
          : "max-h-[51px] translate-y-[-10px] "
        }
      `}
  >
     <div className={`flex w-full justify-between items-start text-[${color}]`}>
      <p className="flex whitespace-nowrap"> Hangi dillerde hizmet veriyorsunuz?</p>
      <PlusSvg
        className={`transition-transform duration-500 ${
          isDropdown6Open ? "rotate-180" : "rotate-0"
        }`}
        width={19}
        height={18}
      />
    </div>

    <div className="flex items-start text-start justify-center mt-4">
    <p className={`w-[98%]  text-[${color}]`}>
  Dijital pazarlama, SEO, SEM ve yazılım tarafında ağırlıklı olarak Türkçe ve İngilizce çalışıyoruz. Otel ve çağrı merkezi projelerinde ise Türkçe, İngilizce, Almanca ve Rusça dillerinde misafir ve müşteri iletişimi yönetiyoruz.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default QuestionsSection2
