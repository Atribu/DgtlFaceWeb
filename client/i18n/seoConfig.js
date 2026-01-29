/**
 * Next-Intl Pathnames anahtarlarına göre (Örn: "/Services/seo")
 * merkezi SEO Meta Title ve Description verilerini sağlayan dosya.
 */
export const seoConfig = {
  //---------------------------------------------------------
  // TEMEL SAYFALAR
  //---------------------------------------------------------
  "/": { // TR Slug: /anasayfa
    tr: {
      title: "Antalya Dijital Pazarlama Ajansı | Kapsamlı SEO & Yazılım Çözümleri",
      description: "Antalya merkezli, otel ve turizm odaklı dijital pazarlama ajansınız. SEO, SEM, SMM, Yazılım ve Çağrı Merkezi ile dijital varlığınızı güçlendirin.",
    },
    en: {
      title: "Antalya Digital Marketing Agency | Comprehensive SEO & Software Solutions",
      description: "Antalya-based digital marketing agency focused on hotel and tourism. Strengthen your digital presence with SEO, SEM, SMM, Software, and Call Center.",
    },
   
  },
  "/aboutus": { // TR Slug: /antalya-dijital-pazarlama-ajansi/hakkimizda
    tr: {
      title: "Antalya Dijital Pazarlama Ajansı Hakkımızda | DGTLFACE Ekibi",
      description: "Antalya'da dijital pazarlamayı yeniden tanımlayan DGTLFACE'in hikayesi, misyonu ve turizm odaklı uzman ekibi.",
    },
    en: {
      title: "About Us | Antalya Digital Marketing Agency Team - DGTLFACE",
      description: "The story, mission, and expert team of DGTLFACE, redefining digital marketing with a focus on tourism in Antalya.",
    },
  
  },
  "/blogs": { // TR Slug: /antalya-dijital-pazarlama-blog
    tr: {
      title: "Antalya Dijital Pazarlama Blog | SEO, Yazılım ve Turizm Trendleri",
      description: "Dijital pazarlama, SEO, yazılım ve turizm sektöründeki en güncel trendler ve uzman görüşleri için blogumuzu takip edin.",
    },
    en: {
      title: "Antalya Digital Marketing Blog | SEO, Software, and Tourism Trends",
      description: "Follow our blog for the latest trends and expert insights on digital marketing, SEO, software, and the tourism sector.",
    },
   
  },
  "/contact": { // TR Slug: /antalya-dijital-pazarlama-iletisim
    tr: {
      title: "Antalya Dijital Pazarlama Ajansı İletişim | Teklif Alın",
      description: "Antalya'da dijital pazarlama, yazılım veya çağrı merkezi hizmetleri için bizimle iletişime geçin ve projenizi konuşun.",
    },
    en: {
      title: "Contact Antalya Digital Marketing Agency | Get a Quote",
      description: "Contact us in Antalya to discuss your project and request a quote for digital marketing, software, or call center services.",
    },
  
  },

  //---------------------------------------------------------
  // HİZMETLER ANA KATEGORİLERİ
  //---------------------------------------------------------
  "/Services": { // TR Slug: /antalya-dijital-pazarlama-hizmetleri
    tr: {
      title: "DGTLFACE Hizmetlerimiz – Dijital Pazarlama, Teknoloji ve Otel Dijital Dönüşüm | DGTLFACE",
      description: "DGTLFACE; SEO, SEM, sosyal medya yönetimi, web & yazılım geliştirme, creative prodüksiyon, çok dilli çağrı merkezi ve PMS–OTA yönetimi ile markalar ve özellikle oteller için uçtan uca dijital pazarlama hizmetleri sunan bir teknoloji partneridir.",
    },
    en: {
      title: "Our Services – Digital Marketing, Technology & Hotel Digital Transformation | DGTLFACE",
      description: "DGTLFACE is a technology partner delivering end-to-end digital marketing solutions for brands and hotels, including SEO, SEM, social media management, web & software development, creative production, multilingual call center operations, and PMS–OTA management.",
    },
  
  },
  "/Services/sem": { // TR Slug: /antalya-dijital-pazarlama-sem-hizmetleri
    tr: {
      title: "Google Ads & Dijital Reklam Yönetimi – Dönüşüm Odaklı SEM Stratejileri | DGTLFACE",
      description: "DGTLFACE; Google Ads, YouTube Ads, remarketing ve display kampanyalarını satış ve rezervasyon odaklı bir SEM mimarisiyle yönetir. Anahtar kelime stratejisi, bütçe optimizasyonu, reklam metni testleri, hedef kitle ve dönüşüm takibi entegre ilerler.",
    },
    en: {
      title: "SEM – Google Ads & Digital Advertising Management | DGTLFACE",
      description: "DGTLFACE manages SEM with a conversion-focused structure across Google Ads, YouTube Ads, remarketing, and display—combining keyword strategy, budget optimization, ad copy testing, audience targeting, and conversion tracking into one integrated system.",
    },

  },
  "/Services/smm": { // TR Slug: /antalya-dijital-pazarlama-sosyal-medya-ajansi
    tr: {
      title: "Antalya Sosyal Medya Pazarlama Ajansı | SMM Yönetimi ve İçerik",
      description: "Markanızın Antalya'da ve sosyal medyada etkileşimini artırın. İçerik, planlama, analiz ve raporlama çözümleri.",
    },
    en: {
      title: "Antalya Social Media Marketing Agency | SMM Management & Content",
      description: "Increase your brand's engagement on social media in Antalya. Content, planning, analysis, and reporting solutions.",
    },

  },
  "/Services/creative": { 
    tr: {
      title: "Antalya Yaratıcılık ve Tasarım Ajansı | UI/UX, Grafik & Video Prodüksiyon",
      description: "Dijital projeleriniz için UI/UX, kurumsal kimlik, video prodüksiyonu ve etkinlik yaratıcılığı çözümleri.",
    },
    en: {
      title: "Antalya Creative & Design Agency | UI/UX, Graphic & Video Production",
      description: "Creative solutions for your digital projects: UI/UX, corporate identity, video production, and event creativity.",
    },
  
  },
  "/Services/software": { // TR Slug: /antalya-dijital-pazarlama-yazilim-hizmetleri
    tr: {
      title: "Antalya Yazılım Geliştirme Hizmetleri | Web Sitesi, CMS ve Sunucu Yönetimi",
      description: "Antalya otel ve turizm sektörüne özel web yazılım, sunucu yönetimi ve KVKK (PDPA) uyumluluğu çözümleri.",
    },
    en: {
      title: "Antalya Software Development Services | Website, CMS & Server Management",
      description: "Custom web software, server management, and PDPA (KVKK) compliance solutions for the hotel and tourism sector in Antalya.",
    },
  
  },
  "/Services/seo": { // TR Slug: /antalya-dijital-pazarlama-seo-hizmetleri
    tr: {
      title: "SEO Hizmetleri – Teknik, Yerel ve İçerik SEO Uzmanlığı | DGTLFACE",
      description: "DGTLFACE, teknik SEO, yerel SEO ve içerik optimizasyonuyla organik görünürlüğünüzü artırır. SEO ajansı olarak web sitenizi Google’da üst sıralara taşır.",
    },
    en: {
      title: "SEO Services – Technical, Local & Content SEO | DGTLFACE",
      description: "DGTLFACE improves your organic visibility with technical SEO, local SEO and content optimization, helping your website grow sustainably in search.",
    },
  
  },
  "/Services/digitalAnalysis": { // TR Slug: /antalya-dijital-pazarlama-analiz
    tr: {
      title: "Antalya Dijital Pazarlama Veri Analizi ve Raporlama Hizmetleri",
      description: "Pazarlama stratejilerinizi optimize etmek için reklam, çağrı ve web sitesi verilerinin detaylı analizi ve raporlanması.",
    },
    en: {
      title: "Antalya Digital Marketing Data Analysis and Reporting Services",
      description: "Detailed analysis and reporting of advertising, call, and website data to optimize your marketing strategies.",
    },
    
  },
  "/Services/analysis": {
  tr: {
    title: "Veri Analizi & Dijital Performans Raporlama – Looker Studio Uzmanlığı | DGTLFACE",
    description: "DGTLFACE, Looker Studio veri raporlaması, benchmark analizleri, satış ve dönüşüm raporlarıyla dijital performansınızı ölçer ve geliştirir."
  },
  en: {
    title: "Data Analytics & Performance Reporting – Looker Studio Dashboards | DGTLFACE",
    description: "DGTLFACE builds Looker Studio dashboards and performance reports, combining SEO/SEM/SMM and sales data to measure and improve digital performance."
  }
},


  "/Services/callcenter": { // TR Slug: /antalya-dijital-pazarlama-cagri-merkezi
    tr: {
      title: "Antalya Dijital Pazarlama Çağrı Merkezi Çözümleri | Çok Dilli Destek",
      description: "Antalya otel ve turizm işletmeleri için rezervasyon odaklı, çok dilli çağrı merkezi yönetimi ve performans analizi.",
    },
    en: {
      title: "Antalya Digital Marketing Call Center Solutions | Multilingual Support",
      description: "Reservation-focused, multilingual call center management and performance analysis for hotel and tourism businesses in Antalya.",
    },
  
  },
  "/Services/pms-ota": { // TR Slug: /antalya-pazarlama-sistem-kurulumu
    tr: {
      title: "Antalya Pazarlama Yönetim Sistemleri (PMS) Kurulumu ve Entegrasyonu",
      description: "Otel yönetim sistemleri (PMS), OTA entegrasyonu, rezervasyon modülü ve web ödeme sistemleri kurulum hizmetleri.",
    },
    en: {
      title: "Antalya Marketing Management System (PMS) Setup and Integration",
      description: "Hotel management systems (PMS), OTA integration, reservation module, and web payment system setup services.",
    },
  
  },

    "/Services/hotel": { // TR Slug: /antalya-pazarlama-sistem-kurulumu
    tr: {
      title: "Otel Dijital Pazarlama & Dönüşüm Hizmetleri – Turizm Teknolojilerinde Lider | DGTLFACE",
      description: "DGTLFACE, oteller için SEO, SEM, sosyal medya, PMS entegrasyonu, OTA yönetimi ve 4 dilli çağrı merkezi çözümleri sunar. Turizm sektörüne özel dijital dönüşüm sağlar.",
    },
    en: {
 title: "Otel Dijital Pazarlama & Dönüşüm Hizmetleri – Turizm Teknolojilerinde Lider | DGTLFACE",
      description: "DGTLFACE, oteller için SEO, SEM, sosyal medya, PMS entegrasyonu, OTA yönetimi ve 4 dilli çağrı merkezi çözümleri sunar. Turizm sektörüne özel dijital dönüşüm sağlar.",
    },
  
  },

  //---------------------------------------------------------
  // ALT HİZMETLER (SERVICES)
  //---------------------------------------------------------

  // SEM Alt Sayfaları
  "/Services/sem/remarketingDisplay": { // TR Slug: /antalya-sem/google-web-araclari
    tr: {
      title: "Remarketing & Display Reklam Yönetimi – Yeniden Hedefleme Uzmanlığı | DGTLFACE",
      description: "DGTLFACE, remarketing ve display kampanyalarınızla daha önce ilgi göstermiş kullanıcıları geri kazanır. Yeniden hedefleme stratejileriyle dönüşümlerinizi artırın.",
    },
    en: {
      title: "Remarketing & Display Ads Management – Conversion-Focused Retargeting | DGTLFACE",
      description: "DGTLFACE segments users who previously interacted with your site and builds conversion-focused retargeting across Google Display Network, YouTube and Meta to improve ROAS.",
    },
   
  },
  "/Services/sem/performanceAnalysis": { 
    tr: {
      title: "Reklam Performans Raporlama – Veri Odaklı SEM Analizi | DGTLFACE",
      description: "DGTLFACE, tüm reklam kampanyalarını Looker Studio ile analiz ederek dönüşümlerinizi artırır. Veri odaklı reklam raporlama ile doğru kararlar alın.",
    },
    en: {
      title: "Ad Performance Analysis & Reporting – Manage Campaigns with Data | DGTLFACE",
      description: "DGTLFACE consolidates your advertising data from Google Ads, YouTube, and Meta Ads into a single dashboard; helping you manage campaigns with conversions, costs, revenue, and ROAS metrics through data-driven reporting and performance analysis.",
    },

  },
  "/Services/sem/advertisingManagement": { // TR Slug: /antalya-sem/reklam-yonetimi
    tr: {
      title: "Antalya Dijital Reklam Yönetimi | Tüm Platformlarda Etkili Kampanyalar",
      description: "Google Ads, sosyal medya ve diğer platformlarda bütçe dostu, yüksek ROI odaklı reklam kampanyası yönetimi.",
    },
    en: {
      title: "Antalya Digital Advertising Management | Effective Campaigns Across All Platforms",
      description: "Budget-friendly, high ROI-focused advertising campaign management on Google Ads, social media, and other platforms.",
    },
  
  },
  "/Services/sem/tagManager": { // TR Slug: /antalya-sem/web-trafik-takibi
    tr: {
      title: "Dönüşüm Takibi & Google Tag Manager Kurulumu – GA4, Meta CAPI, Telefon & WhatsApp | DGTLFACE",
      description: "DGTLFACE, Google Tag Manager ve GA4 dönüşüm takibi, Meta Conversion API, WhatsApp–telefon ölçümü ve otel rezervasyon tracking kurulumlarıyla reklam verilerinin doğru ölçülmesini ve optimize edilmesini sağlar.",
    },
    en: {
      title: "Conversion Tracking & Google Tag Manager Setup – GA4, Meta CAPI, Phone & WhatsApp | DGTLFACE",
      description: "DGTLFACE provides advanced conversion tracking solutions using Google Tag Manager, GA4, Meta Conversion API, phone and WhatsApp tracking, and hotel reservation measurement to ensure accurate performance data.",
    },
   
  },
  "/Services/sem/googleAdsAdvertising": { // TR Slug: /antalya-sem/google-ads-reklamlari
    tr: {
      title: "Antalya Google Ads (Adwords) Reklam Yönetimi | Maksimum Dönüşüm",
      description: "Arama ağı, görüntülü reklam ve yeniden pazarlama kampanyaları ile Antalya'da en etkili Google Ads çözümleri.",
    },
    en: {
      title: "Antalya Google Ads (Adwords) Advertising Management | Maximum Conversion",
      description: "The most effective Google Ads solutions in Antalya with search network, display ads, and remarketing campaigns.",
    },
  
  },

  // SEO Alt Sayfaları
  "/Services/seo/technicalSeo": { // TR Slug: /antalya-seo/teknik-seo
    tr: {
      title: "Antalya Teknik SEO Hizmetleri | Site Hızı ve Core Web Vitals Optimizasyonu",
      description: "Kapsamlı teknik denetim, site hızı optimizasyonu ve Core Web Vitals iyileştirmeleri ile Google sıralamalarınızı kalıcı olarak artırın.",
    },
    en: {
      title: "Antalya Technical SEO Services | Site Speed and Core Web Vitals Optimization",
      description: "Permanently improve your Google rankings with comprehensive technical audits, site speed optimization, and Core Web Vitals improvements.",
    },
  
  },
  "/Services/seo/localSeo": { 
    tr: {
      title: "Yerel SEO Hizmetleri – Google Haritalar ve Lokal Aramalarda Üst Sıralar | DGTLFACE",
      description: "DGTLFACE, yerel SEO çalışmalarıyla işletmenizin Google Haritalar ve lokal aramalarda görünürlüğünü artırır. Yerel müşteri dönüşümlerinizi yükseltin.",
    },
    en: {
      title: "Local SEO Services – Top Rankings in Google Maps & Local Searches | DGTLFACE",
      description: "DGTLFACE increases your visibility in Google Maps and local searches with local SEO. Boost calls, route requests and local customer conversions.",
    },
  
  },
  "/Services/seo/contentSeo": { 
    tr: {
      title: "İçerik SEO – Anahtar Kelime Odaklı İçerik ve Blog Optimizasyonu | DGTLFACE",
      description: "DGTLFACE, SEO uyumlu blog ve içerik stratejileriyle organik trafik artışı sağlar. Arama niyetine uygun içeriklerle Google sıralamalarınızı güçlendirin.",
    },
    en: {
      title: "Content SEO – Keyword-Led Content & Blog Optimization | DGTLFACE",
      description: "DGTLFACE drives organic growth with SEO-friendly blog and content strategy. Strengthen rankings with intent-driven content planning.",
    },
   
  },
  "/Services/seo/seoReporting": { // TR Slug: /antalya-seo/raporlama-hizmetleri
    tr: {
      title: "Antalya SEO Raporlama Hizmetleri | Detaylı Performans Analizi",
      description: "Aylık detaylı SEO performansı raporları, trafik kaynakları ve anahtar kelime sıralama takibi hizmetleri.",
    },
    en: {
      title: "Antalya SEO Reporting Services | Detailed Performance Analysis",
      description: "Detailed monthly SEO performance reports, traffic sources, and keyword ranking tracking services.",
    },
  
  },
  "/Services/seo/backlinkSeo": { 
    tr: {
      title: "Backlink Yönetimi – Dijital Otorite ve Güven Sinyali Artırma | DGTLFACE",
      description: "DGTLFACE, güçlü backlink stratejileriyle sitenizin otoritesini artırır. Güvenilir ve etkili bağlantılarla Google sıralamalarınızı yükseltin.",
    },
    en: {
      title: "Backlink Management – Build Authority & Trust Signals | DGTLFACE",
      description: "DGTLFACE strengthens your website authority with a structured backlink strategy. Improve rankings with reliable, relevant, and high-quality links.",
    },
  
  },

  // YARATICILIK (CREATIVE) Alt Sayfaları
  "/Services/creative/eventProduction": { // TR Slug: /antalya-tasarim/etkinlik-produksiyonu
    tr: {
      title: "Etkinlik Prodüksiyonu – Lansman, Konser ve Kurumsal Organizasyonlar | DGTLFACE",
      description: "DGTLFACE, lansman, konser ve kurumsal organizasyonlar için profesyonel etkinlik prodüksiyonu ve video çekimi sunar. Planlama, çekim ve aftermovie süreçlerini uçtan uca yönetir.",
    },
    en: {
      title: "Event Production – Launches, Concerts & Corporate Events | DGTLFACE",
      description: "DGTLFACE provides professional event production and video coverage for launches, concerts, and corporate events. We manage planning, filming, and aftermovie delivery end-to-end.",
    },

  },
  "/Services/creative/corporateGift": { // TR Slug: /antalya-tasarim/kurumsal-hediye-tasarimi
    tr: {
      title: "Kurumsal Hediye Tasarımı – Markanıza Özel Premium Ürünler | DGTLFACE",
      description: "DGTLFACE, markanıza özel kurumsal hediye tasarımları, baskı ürünleri, promosyon çalışmaları ve kişisel tasarım ürünleri sunar.",
    },
    en: {
      title: "Corporate Gift Design – Premium Branded Gifts for Your Brand | DGTLFACE",
      description: "DGTLFACE provides custom corporate gift designs, branded print products, promotional materials, and premium personalized gift solutions tailored to your brand.",
    },
   
  },
  "/Services/creative/uiUxDesign": { // TR Slug: /antalya-tasarim/ui-ux-tasarim
    tr: {
      title: "UI & UX Tasarımı – Kullanıcı Odaklı Dijital Deneyimler | DGTLFACE",
      description: "DGTLFACE, kullanıcı deneyimi odaklı UI/UX tasarımıyla web sitelerinizi modern, hızlı ve dönüşüm odaklı hale getirir. Otel ve kurumsal projeler için profesyonel çözüm sunar.",
    },
    en: {
      title: "UI & UX Design – User-Centered Digital Experiences | DGTLFACE",
      description: "DGTLFACE delivers user-experience-driven UI/UX design to make your websites modern, fast, and conversion-focused. Professional solutions for hotel and corporate projects.",
    },
  
  },
  "/Services/creative/graphicDesign": { // TR Slug: /antalya-tasarim/grafik-motion-tasarim
    tr: {
      title: "Grafik & Motion Tasarım – Markanızı Güçlendiren Kreatif Çözümler | DGTLFACE",
      description: "DGTLFACE, grafik tasarım ve motion design hizmetleriyle markanız için etkileyici görsel içerikler üretir. Sosyal medya, web ve reklam için profesyonel tasarımlar sunar.",
    },
    en: {
      title: "Graphic & Motion Design – Creative Visual Solutions for Brands | DGTLFACE",
      description: "DGTLFACE creates impactful visual content through graphic design and motion design services. Professional visuals for social media, web, and advertising.",
    },
  
  },
  "/Services/creative/videoProduction": { // TR Slug: /antalya-tasarim/video-produksiyon
    tr: {
      title: "Video & Prodüksiyon Hizmetleri – Tanıtım, Reklam ve 360° Çekimler | DGTLFACE",
      description: "DGTLFACE, marka hikâyenizi etkili şekilde anlatan profesyonel tanıtım videoları, reklam filmleri ve 360° çekimler üretir. Oteller ve markalar için kreatif video prodüksiyon sunar.",
    },
    en: {
      title: "Video Production Services – Brand Films, Ads & 360° Shoots | DGTLFACE",
      description: "DGTLFACE produces professional brand videos, commercial films, and 360° shoots that tell your story effectively. Creative video production for hotels and brands.",
    },
 
  },

  // YAZILIM (SOFTWARE) Alt Sayfaları
  "/Services/software/websiteMaintanceService": { // TR Slug: /antalya-yazilim/web-sitesi-bakim
    tr: {
      title: "Web Sitesi Bakım & Teknik Destek – Sürekli Performans ve Güvenlik | DGTLFACE",
      description: "DGTLFACE, web sitesi bakım ve teknik destek hizmetleri sunar. Performans izleme, hata çözümü ve düzenli güncellemelerle sitenizi güçlendirir.",
    },
    en: {
      title: "Website Maintenance & Technical Support – Ongoing Performance and Security | DGTLFACE",
      description: "DGTLFACE provides website maintenance and technical support. We strengthen your site with performance monitoring, issue resolution, and regular updates.",
    },
  
  },
  "/Services/software/kvkk": { // TR Slug: /antalya-yazilim/kvkk-uyumlulugu
    tr: {
      title: "KVKK Uyumlu Web Çözümleri – Güvenli Veri Yönetimi | DGTLFACE",
      description: "DGTLFACE, KVKK uyumlu yazılım çözümleri geliştirir. Veri güvenliği, çerez yönetimi ve kullanıcı izin sistemleriyle web sitenizi daha güvenli ve denetlenebilir hâle getirir.",
    },
    en: {
      title: "KVKK-Aligned Web Solutions – Secure Data Management | DGTLFACE",
      description: "DGTLFACE builds KVKK-aligned software solutions. With data security, cookie management, and consent systems, we make your website safer and more auditable.",
    },

  },
  "/Services/software/websiteAndSoftware": { // TR Slug: /antalya-yazilim/web-sitesi-ve-yazilim
    tr: {
      title: "Kurumsal Web Sitesi Geliştirme – SEO Uyumlu & Yüksek Performanslı | DGTLFACE",
      description: "DGTLFACE, hızlı, güvenli ve SEO uyumlu kurumsal web siteleri geliştirir. Next.js altyapısıyla yüksek performans sunan profesyonel web çözümleri.",
    },
    en: {
      title: "Corporate Website Development – SEO-Friendly & High Performance | DGTLFACE",
      description: "DGTLFACE builds fast, secure, and SEO-friendly corporate websites. We deliver high performance web solutions with a modern Next.js architecture.",
    },
   
  },
  "/Services/software/serverManagementService": { // TR Slug: /antalya-yazilim/sunucu-yonetimi
    tr: {
      title: "Web Sitesi Bakım & Teknik Destek – Sürekli Performans ve Güvenlik | DGTLFACE",
      description: "DGTLFACE, web sitesi bakım ve teknik destek hizmetleri sunar. Performans izleme, hata çözümü ve düzenli güncellemelerle sitenizi güçlendirir.",
    },
    en: {
      title: "Website Maintenance & Technical Support – Ongoing Performance and Security | DGTLFACE",
      description: "SDGTLFACE provides website maintenance and technical support. We strengthen your site with performance monitoring, issue resolution, and regular updates.",
    },
 
  },
  "/Services/software/cmsInstallationService": { // TR Slug: /antalya-yazilim/cms-kurulumu
    tr: {
      title: "CMS Entegrasyonu – Kolay İçerik Yönetimi & Esnek Web Mimarisi | DGTLFACE",
      description: "DGTLFACE, kullanıcı dostu CMS ve yönetim paneli entegrasyonlarıyla çok dilli, hızlı ve SEO uyumlu içerik yönetimi sunar. Web sitenizi kolayca yönetin.",
    },
    en: {
      title: "CMS Integration – Easy Content Management & Flexible Web Architecture | DGTLFACE",
      description: "DGTLFACE provides user-friendly CMS and admin panel integrations for multilingual, fast, and SEO-ready content management. Manage your website with ease.",
    },

  },

  // SMM Alt Sayfaları
  "/Services/smm/socialMediaReporting": { 
    tr: {
      title: "Sosyal Medya Analiz & Raporlama – Etkileşim ve Performans Ölçümü | DGTLFACE",
      description: "DGTLFACE, sosyal medya performansınızı ölçerek detaylı raporlama sunar. Etkileşim, erişim ve kampanya verilerini analiz ederek stratejinizi güçlendirir.",
    },
    en: {
      title: "Social Media Analytics & Reporting – Engagement and Performance Measurement | DGTLFACE",
      description: "DGTLFACE measures your social media performance and provides detailed reporting. We analyze engagement, reach, and campaign data to strengthen your strategy.",
    },
 
  },
  "/Services/smm/socialMediaContent": { 
    tr: {
      title: "Sosyal Medya İçerik Üretimi – Kreatif ve Çekici İçerikler | DGTLFACE",
      description: "DGTLFACE, markanıza uygun sosyal medya içerikleri üretir. Kreatif tasarımlar, video içerikler ve Reels formatlarıyla etkileşiminizi artırın.",
    },
    en: {
      title: "Social Media Content Production – Creative & Engaging Content | DGTLFACE",
      description: "DGTLFACE produces social media content tailored to your brand. Boost engagement with creative designs, video assets, and Reels formats.",
    },

  },
  "/Services/smm/socialMediaPlanning": { 
    tr: {
      title: "Sosyal Medya Strateji ve İçerik Planlama – Profesyonel SMM Yönetimi | DGTLFACE",
      description: "DGTLFACE, markanız için sosyal medya stratejisi oluşturur; içerik takvimi, hedefleme ve KPI planlamasıyla etkileşim ve görünürlük sağlar.",
    },
    en: {
      title: "Social Media Strategy & Content Planning – Professional SMM Management | DGTLFACE",
      description: "DGTLFACE builds a social media strategy for your brand and improves visibility and engagement with content calendar, targeting, and KPI planning.",
    },
 
  },
  "/Services/smm/reelsVideo": { 
    tr: {
      title: "Reels & Kısa Video İçerik Üretimi – Viral Video Stratejileri | DGTLFACE",
      description: "DGTLFACE, Instagram Reels ve kısa video içerikleri üretir. Viral stratejiler, kreatif fikirler ve profesyonel prodüksiyonla görünürlüğünüzü artırın.",
    },
    en: {
      title: "Reels & Short-Form Video Production – Viral Video Strategies | DGTLFACE",
      description: "DGTLFACE produces Instagram Reels and short-form videos. Increase your visibility with viral strategies, creative concepts, and professional production.",
    },

  },
  "/Services/smm/socialMediaAds": { 
    tr: {
      title: "Sosyal Medya Reklam Yönetimi – Instagram & Facebook Reklam Uzmanlığı | DGTLFACE",
      description: "DGTLFACE, Instagram ve Facebook reklam kampanyalarını hedef kitlenize uygun şekilde optimize eder. Dönüşüm odaklı sosyal medya reklam stratejileriyle başarıya ulaşın.",
    },
    en: {
      title: "Social Media Advertising – Instagram & Facebook Ads Expertise | DGTLFACE",
      description: "DGTLFACE optimizes Instagram and Facebook ad campaigns for your target audience. Win with conversion-focused social media advertising strategies.",
    },

  },

  // PMS Alt Sayfaları
  "/Services/pms/otaContract": { // TR Slug: /antalya-pms/ota-sozlesme
    tr: {
      title: "Antalya OTA Sözleşme Yönetimi ve Komisyon Optimizasyonu",
      description: "Booking.com, Expedia ve diğer OTA'larla sözleşme süreçlerinin yönetimi ve en iyi komisyon oranlarının elde edilmesi.",
    },
    en: {
      title: "Antalya OTA Contract Management and Commission Optimization",
      description: "Management of contract processes with Booking.com, Expedia, and other OTAs and securing the best commission rates.",
    },

  },
  "/Services/pms/hotelIdentification": { // TR Slug: /antalya-pms/otel-tanimlama
    tr: {
      title: "Antalya Otel Tanımlama ve Veri Girişi Hizmetleri | PMS Entegrasyonu",
      description: "Yeni otellerin veya tesislerin PMS sistemine doğru ve eksiksiz bir şekilde tanımlanması ve veri girişi.",
    },
    en: {
      title: "Antalya Hotel Identification and Data Entry Services | PMS Integration",
      description: "Accurate and complete identification and data entry of new hotels or properties into the PMS system.",
    },
  
  },
  "/Services/pms/webPayment": { // TR Slug: /antalya-pms/web-odeme-sistemleri
    tr: {
      title: "Antalya Web Ödeme Sistemleri Kurulumu | Güvenli Online Tahsilat",
      description: "Web siteniz üzerinden kredi kartı ile güvenli ve hızlı online ödeme altyapılarının kurulumu ve entegrasyonu.",
    },
    en: {
      title: "Antalya Web Payment System Setup | Secure Online Collection",
      description: "Setup and integration of secure and fast online payment infrastructures via credit card on your website.",
    },

  },
  "/Services/pms/reservationModule": { // TR Slug: /antalya-pms/rezervasyon-modulu
    tr: {
      title: "Antalya Rezervasyon Modülü Entegrasyonu | Doğrudan Satış Artışı",
      description: "Web sitenize entegre edilecek kullanıcı dostu rezervasyon modülü ile komisyonsuz doğrudan satışlarınızı maksimize edin.",
    },
    en: {
      title: "Antalya Reservation Module Integration | Increase Direct Sales",
      description: "Maximize your commission-free direct sales with a user-friendly reservation module integrated into your website.",
    },

  },
  "/Services/pms/reservationManagement": { // TR Slug: /antalya-pms/rezervasyon-yonetimi
    tr: {
      title: "Antalya Rezervasyon Yönetimi ve Kanal Yöneticisi Entegrasyonu",
      description: "Tüm satış kanallarınızdaki rezervasyonların merkezi olarak yönetimi ve kanal yöneticisi (Channel Manager) entegrasyonu.",
    },
    en: {
      title: "Antalya Reservation Management and Channel Manager Integration",
      description: "Centralized management of reservations across all your sales channels and Channel Manager integration.",
    },

  },

  // DİJİTAL ANALİZ Alt Sayfaları
  "/Services/digitalAnalysis/websiteReportingService": { // TR Slug: /antalya-analiz/web-sitesi-raporlama
    tr: {
      title: "Antalya Web Sitesi Performans Raporlama ve Dönüşüm Analizi",
      description: "Google Analytics ve diğer araçlarla web sitenizin dönüşüm hunisi ve kullanıcı davranışları raporlaması.",
    },
    en: {
      title: "Antalya Website Performance Reporting and Conversion Analysis",
      description: "Conversion funnel and user behavior reporting for your website using Google Analytics and other tools.",
    },

  },
  "/Services/digitalAnalysis/digitalSalesAnalysis": { // TR Slug: /antalya-analiz/dijital-satis-analizi
    tr: {
      title: "Antalya Dijital Satış ve Pazarlama Kanal Analizi | ROI Optimizasyonu",
      description: "Hangi dijital kanalın en yüksek satış getirisini (ROI) sağladığını belirleyen detaylı satış analizleri.",
    },
    en: {
      title: "Antalya Digital Sales and Marketing Channel Analysis | ROI Optimization",
      description: "Detailed sales analyses identifying which digital channel provides the highest return on investment (ROI).",
    },

  },
  "/Services/digitalAnalysis/onlineMarketResearchService": { // TR Slug: /antalya-analiz/online-pazar-arastirmasi
    tr: {
      title: "Antalya Online Pazar Araştırması ve Rakip Analizi",
      description: "Antalya turizm ve otelcilik pazarında rakiplerinizin dijital stratejilerini ve potansiyel fırsatları belirleyin.",
    },
    en: {
      title: "Antalya Online Market Research and Competitor Analysis",
      description: "Identify your competitors' digital strategies and potential opportunities in the Antalya tourism and hotel market.",
    },

  },
  "/Services/digitalAnalysis/advertisingReportingService": { // TR Slug: /antalya-analiz/reklam-raporlama
    tr: {
      title: "Antalya Reklam Kampanyası Raporlama ve Performans Analizi",
      description: "Tüm Google Ads, Yandex ve sosyal medya reklam kampanyalarının performansını ölçen detaylı raporlar.",
    },
    en: {
      title: "Antalya Advertising Campaign Reporting and Performance Analysis",
      description: "Detailed reports measuring the performance of all Google Ads, Yandex, and social media advertising campaigns.",
    },

  },
  "/Services/digitalAnalysis/callReportingService": { // TR Slug: /antalya-analiz/cagri-raporlama
    tr: {
      title: "Antalya Çağrı Raporlama ve Satış Takibi Hizmetleri",
      description: "Çağrı merkezi performansını, arayanın kaynağını ve satışa dönüşüm oranlarını ölçen kapsamlı raporlama.",
    },
    en: {
      title: "Antalya Call Reporting and Sales Tracking Services",
      description: "Comprehensive reporting measuring call center performance, caller source, and sales conversion rates.",
    },

  },

  // ÇAĞRI MERKEZİ Alt Sayfaları
  "/Services/callcenter/callLanguages": { // TR Slug: /antalya-cagri-merkezi/cok-dilli-destek
    tr: {
      title: "4 Dilli Çağrı Merkezi – Çok Dilli Misafir & Müşteri Destek Hizmeti | DGTLFACE",
      description: "DGTLFACE, Türkçe, İngilizce, Almanca ve Rusça dillerinde çok dilli çağrı merkezi ve yazılı mesaj desteği sunar. Oteller ve uluslararası çalışan markalar için inbound/outbound çağrı yönetimi, WhatsApp ve sosyal medya mesaj desteği, OTA mesajlaşmaları ve yorum yanıtları gibi süreçleri ortak bir operasyon standardı ve entegrasyon mantığıyla yönetir.",
    },
    en: {
      title: "4-Language Call Center – Multilingual Guest & Customer Support | DGTLFACE",
      description: "DGTLFACE provides multilingual call center and written messaging support in Turkish, English, German, and Russian. For hotels and international brands, we manage inbound/outbound calls, WhatsApp and social DM support, OTA messaging, and review responses with unified operational standards and integration-ready workflows.",
    },

  },
  "/Services/callcenter/callPerformance": { // TR Slug: /antalya-cagri-merkezi/performans-analizi
    tr: {
      title: "Çağrı Merkezi Performans Analizi – KPI, Raporlama ve Optimizasyon | DGTLFACE",
      description: "DGTLFACE, çağrı merkezi operasyonlarında KPI’ları uçtan uca analiz ederek verimlilik, satış/rezervasyon dönüşümü ve misafir memnuniyetini artırır. Çağrı hacmi, cevaplanma oranı, bekleme süresi, ilk çağrıda çözüm (FCR), çağrı süresi, kaçan çağrılar, tekrar arama oranı ve agent performansı gibi metrikleri çok kanallı verilerle birleştirir; Looker Studio dashboard’ları, günlük/haftalık/aylık raporlar ve aksiyon planlarıyla süreç optimizasyonu sağlar.",
    },
    en: {
      title: "Call Center Performance Analysis – KPIs, Reporting & Optimization | DGTLFACE",
      description: "DGTLFACE improves call center efficiency, revenue conversion, and guest satisfaction by analyzing KPIs end-to-end. We consolidate multi-channel metrics such as call volume, answer rate, wait time, first call resolution (FCR), average handle time, missed calls, repeat calls, and agent performance; then deliver Looker Studio dashboards, daily/weekly/monthly reporting, and actionable optimization plans to continuously enhance operations.",
    },

  },
  "/Services/callcenter/messageManagement": { // TR Slug: /antalya-cagri-merkezi/cok-kanalli-satis-takibi
    tr: {
      title: "Sosyal Medya Mesaj & Yorum Yönetimi – Çok Kanallı Destek | DGTLFACE",
      description: "DGTLFACE, Instagram DM, WhatsApp, web chat, Google & OTA yorumları gibi tüm dijital mesaj ve geri bildirim kanallarını tek merkezden yöneten çok kanallı mesaj & yorum yönetimi hizmeti sunar. Rezervasyon talepleri, bilgi soruları ve şikayetler çağrı merkezi standardında ele alınır; çok dilli ekipler, hızlı yanıt SLA’ları ve CRM/PMS entegrasyonu ile marka itibarı, misafir memnuniyeti ve satış fırsatları sürdürülebilir şekilde yönetilir.",
    },
    en: {
      title: "Social Media Message & Review Management – Multi-Channel Support | DGTLFACE",
      description: "DGTLFACE provides professional multi-channel message and review management across Instagram DM, WhatsApp, web chat, Google reviews, and OTA inboxes. Reservation inquiries, information requests, and complaints are handled with call center standards, multilingual agents, fast response SLAs, and CRM/PMS integrations—helping brands improve online reputation, guest satisfaction, and revenue opportunities.",
    },

  },
  "/Services/callcenter/aftersalesSupport": { // TR Slug: /antalya-cagri-merkezi/sozlesme-yonetimi
    tr: {
      title: "Satış Sonrası Müşteri Destek – Çok Kanallı Destek Çözümleri | DGTLFACE",
      description: "DGTLFACE, satış sonrası destek süreçlerinizi profesyonel ekiplerle yönetir. Telefon, WhatsApp, e-posta, sosyal medya mesajları, web chat ve OTA kanalları üzerinden gelen talep ve şikayetleri çok kanallı bir modelle karşılar; CRM/PMS kayıt ve takip süreçleriyle müşteri memnuniyeti ve marka sadakatini güçlendirir..",
    },
    en: {
      title: "After-Sales Customer Support – Omnichannel Support Solutions | DGTLFACE",
      description: "DGTLFACE manages your after-sales support with professional teams. We handle customer questions, requests, and complaints across phone, WhatsApp, email, social DMs, web chat, and OTA messaging, and improve satisfaction and loyalty with structured CRM/PMS logging and follow-up workflows.",
    },

  },
  "/Services/callcenter/reservationSupport": { // TR Slug: /antalya-cagri-merkezi/rezervasyon-destek
    tr: {
      title: "Otel Rezervasyon Çağrı Merkezi – Satış Odaklı Rezervasyon Yönetimi | DGTLFACE",
      description: "DGTLFACE, oteller ve turizm tesisleri için satış odaklı, çok dilli rezervasyon çağrı merkezi hizmeti sunar. Telefon, WhatsApp, web ve OTA kanallarından gelen rezervasyon talepleri PMS entegrasyonlu altyapı ile yönetilir; fiyat, müsaitlik ve kampanya bilgileri anlık kontrol edilir. Satış script’leri, upsell ve cross-sell akışları ile doğrudan rezervasyon oranı artırılır, misafir memnuniyeti sürdürülebilir şekilde yükseltilir.",
    },
    en: {
      title: "Hotel Reservation Call Center – Sales-Focused Reservation Management | DGTLFACE",
      description: "DGTLFACE provides sales-driven, multilingual hotel reservation call center services for hotels and hospitality brands. Reservation requests via phone, WhatsApp, web, and OTA channels are handled through PMS-integrated systems with real-time availability and pricing control. Sales scripts, upsell and cross-sell strategies help increase direct bookings, revenue, and guest satisfaction.",
    },

  },
};