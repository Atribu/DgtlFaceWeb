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
      title: "Antalya Dijital Pazarlama Hizmetleri | Tüm Kapsamlı Çözümler",
      description: "Antalya merkezli, otel ve turizme özel SEO, SEM, SMM, Çağrı Merkezi, Yazılım ve Yaratıcılık hizmetlerimizi keşfedin.",
    },
    en: {
      title: "Antalya Digital Marketing Services | All Comprehensive Solutions",
      description: "Discover all our specialized SEO, SEM, SMM, Call Center, Software, and Creative services for hotels and tourism in Antalya.",
    },
  
  },
  "/Services/sem": { // TR Slug: /antalya-dijital-pazarlama-sem-hizmetleri
    tr: {
      title: "Antalya SEM Hizmetleri | Google Ads ve Yandex Reklam Yönetimi",
      description: "Antalya'da arama motoru pazarlaması ile anında görünürlük elde edin. Google ve Yandex reklam stratejileri ile satışlarınızı artırın.",
    },
    en: {
      title: "Antalya SEM Services | Google Ads and Yandex Advertising Management",
      description: "Achieve instant visibility with search engine marketing in Antalya. Increase sales with Google and Yandex ad strategies.",
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
      title: "Antalya SEO Hizmetleri | Arama Motoru Optimizasyonu Ajansı",
      description: "Antalya'da organik trafiğinizi ve otel/turizm satışlarınızı artırmak için Teknik SEO, İçerik ve Off-Page stratejileri.",
    },
    en: {
      title: "Antalya SEO Services | Search Engine Optimization Agency",
      description: "Technical SEO, Content, and Off-Page strategies to increase your organic traffic and hotel/tourism sales in Antalya.",
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
  "/Services/sem/googleWebtools": { // TR Slug: /antalya-sem/google-web-araclari
    tr: {
      title: "Antalya Google Web Araçları Optimizasyonu | Search Console & Analytics",
      description: "Google Search Console, Analytics ve Tag Manager kurulumu ve optimizasyonu ile site performansınızı en üst düzeye çıkarın.",
    },
    en: {
      title: "Antalya Google Web Tools Optimization | Search Console & Analytics",
      description: "Maximize your site performance with Google Search Console, Analytics, and Tag Manager setup and optimization.",
    },
   
  },
  "/Services/sem/yandexAdvertising": { // TR Slug: /antalya-sem/yandex-reklamlari
    tr: {
      title: "Antalya Yandex Reklam Yönetimi | Hedef Odaklı Rusya Pazarı Erişimi",
      description: "Yandex Direct ve diğer Yandex araçları ile Rusya pazarında yüksek dönüşümlü reklam kampanyaları oluşturun.",
    },
    en: {
      title: "Antalya Yandex Advertising Management | Targeted Russia Market Access",
      description: "Create high-conversion advertising campaigns in the Russian market with Yandex Direct and other Yandex tools.",
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
  "/Services/sem/webTraffic": { // TR Slug: /antalya-sem/web-trafik-takibi
    tr: {
      title: "Antalya Web Trafiği Takibi ve Analizi | Kaynak Bazlı Raporlama",
      description: "Web sitenize gelen trafiği derinlemesine analiz ederek hangi kanalın daha etkili olduğunu belirleyin.",
    },
    en: {
      title: "Antalya Web Traffic Monitoring and Analysis | Source-Based Reporting",
      description: "Determine which channel is most effective by deeply analyzing the traffic coming to your website.",
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
  "/Services/seo/offpageSeo": { // TR Slug: /antalya-seo/site-disi-seo
    tr: {
      title: "Antalya Site Dışı (Off-Page) SEO | Etkili Backlink ve Otorite Geliştirme",
      description: "Kaliteli backlink stratejileri ve marka otoritesi geliştirme ile alan adınızın güvenilirliğini artırın.",
    },
    en: {
      title: "Antalya Off-Page SEO | Effective Backlink and Authority Development",
      description: "Increase your domain authority and credibility with high-quality backlink strategies and brand authority development.",
    },
  
  },
  "/Services/seo/onpageSeo": { // TR Slug: /antalya-seo/site-ici-seo
    tr: {
      title: "Antalya Site İçi (On-Page) SEO | İçerik ve Yapısal Optimizasyon",
      description: "İçerik optimizasyonu, başlık etiketleri ve site yapısı düzenlemeleri ile sayfa bazlı SEO gücünüzü artırın.",
    },
    en: {
      title: "Antalya On-Page SEO | Content and Structural Optimization",
      description: "Increase your page-level SEO strength with content optimization, title tags, and website structure adjustments.",
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
  "/Services/seo/originalCopywriting": { // TR Slug: /antalya-seo/ozgun-metin-yazarligi
    tr: {
      title: "Antalya Özgün Metin Yazarlığı ve SEO Uyumlu İçerik Üretimi",
      description: "Arama motorları ve kullanıcılar için optimize edilmiş, hedef kitlenizi ikna eden özgün ve değerli içerikler.",
    },
    en: {
      title: "Antalya Original Copywriting and SEO-Optimized Content Production",
      description: "Unique and valuable content optimized for search engines and users, persuading your target audience.",
    },
  
  },

  // YARATICILIK (CREATIVE) Alt Sayfaları
  "/Services/creative/eventProduction": { // TR Slug: /antalya-tasarim/etkinlik-produksiyonu
    tr: {
      title: "Antalya Etkinlik Prodüksiyonu ve Yaratıcı Organizasyon Hizmetleri",
      description: "Lansman, fuar ve kurumsal etkinlikler için konsept geliştirme, prodüksiyon ve sahne tasarım hizmetleri.",
    },
    en: {
      title: "Antalya Event Production and Creative Organization Services",
      description: "Concept development, production, and stage design services for launches, exhibitions, and corporate events.",
    },

  },
  "/Services/creative/corporateGift": { // TR Slug: /antalya-tasarim/kurumsal-hediye
    tr: {
      title: "Antalya Kurumsal Hediye Tasarımı ve Üretimi | Marka Kimliğine Uygun",
      description: "Markanızın değerlerini yansıtan, müşterilerinizi etkileyecek özgün ve yaratıcı kurumsal hediye çözümleri.",
    },
    en: {
      title: "Antalya Corporate Gift Design and Production | Aligned with Brand Identity",
      description: "Unique and creative corporate gift solutions that reflect your brand's values and impress your customers.",
    },
   
  },
  "/Services/creative/uiUxDesign": { // TR Slug: /antalya-tasarim/ui-ux-hizmeti
    tr: {
      title: "Antalya UI/UX Tasarım Hizmeti | Kullanıcı Deneyimi ve Arayüz Optimizasyonu",
      description: "Web ve mobil uygulamalarınız için kullanıcı deneyimini (UX) ve arayüz tasarımını (UI) optimize edin.",
    },
    en: {
      title: "Antalya UI/UX Design Service | User Experience and Interface Optimization",
      description: "Optimize user experience (UX) and interface design (UI) for your web and mobile applications.",
    },
  
  },
  "/Services/creative/graphicDesign": { // TR Slug: /antalya-tasarim/grafik-motion-tasarim
    tr: {
      title: "Antalya Grafik ve Motion Tasarım Hizmetleri | Görsel Kimlik Geliştirme",
      description: "Sosyal medya, reklamlar ve web siteniz için etkileyici grafikler ve hareketli (motion) tasarım çözümleri.",
    },
    en: {
      title: "Antalya Graphic and Motion Design Services | Visual Identity Development",
      description: "Impressive graphics and motion design solutions for social media, advertising, and your website.",
    },
  
  },
  "/Services/creative/videoProduction": { // TR Slug: /antalya-tasarim/video-ve-produksiyon
    tr: {
      title: "Antalya Video Prodüksiyon ve Çekim Hizmetleri | Kurumsal Tanıtım Filmi",
      description: "Marka bilinirliğinizi artırmak için profesyonel kurumsal tanıtım, otel ve reklam filmi prodüksiyonu.",
    },
    en: {
      title: "Antalya Video Production and Filming Services | Corporate Promotional Film",
      description: "Professional corporate promotional, hotel, and advertising film production to increase your brand awareness.",
    },
 
  },

  // YAZILIM (SOFTWARE) Alt Sayfaları
  "/Services/software/websiteMaintanceService": { // TR Slug: /antalya-yazilim/web-sitesi-bakim
    tr: {
      title: "Antalya Web Sitesi Bakım ve Performans İyileştirme Hizmetleri",
      description: "Web sitenizin güvenliğini, hızını ve güncelliğini sürekli koruyan profesyonel bakım hizmetleri.",
    },
    en: {
      title: "Antalya Website Maintenance and Performance Improvement Services",
      description: "Professional maintenance services that continuously protect the security, speed, and up-to-dateness of your website.",
    },
  
  },
  "/Services/software/pdpaCompliance": { // TR Slug: /antalya-yazilim/kvkk-uyumlulugu
    tr: {
      title: "Antalya KVKK (Kişisel Veri Koruma) ve PDPA Yazılım Uyumluluğu",
      description: "Web sitenizi ve yazılımlarınızı Kişisel Verilerin Korunması Kanunu (KVKK) ile tam uyumlu hale getirin.",
    },
    en: {
      title: "Antalya KVKK (Personal Data Protection) and PDPA Software Compliance",
      description: "Make your website and software fully compliant with the Personal Data Protection Law (KVKK/PDPA).",
    },

  },
  "/Services/software/websiteAndSoftware": { // TR Slug: /antalya-yazilim/web-sitesi-ve-yazilim
    tr: {
      title: "Antalya Web Sitesi ve Özel Yazılım Geliştirme | Turizm Sektörüne Özel",
      description: "Otel ve turizm ihtiyaçlarına özel, performans odaklı web sitesi ve özel yazılım çözümleri.",
    },
    en: {
      title: "Antalya Website and Custom Software Development | Specializing in Tourism Sector",
      description: "Performance-focused website and custom software solutions tailored for hotel and tourism needs.",
    },
   
  },
  "/Services/software/serverManagementService": { // TR Slug: /antalya-yazilim/sunucu-yonetimi
    tr: {
      title: "Antalya Sunucu Yönetimi ve Güvenlik Hizmetleri | Kesintisiz Performans",
      description: "Web siteleriniz için güvenli, hızlı ve optimize edilmiş bulut/fiziksel sunucu kurulumu ve yönetimi.",
    },
    en: {
      title: "Antalya Server Management and Security Services | Uninterrupted Performance",
      description: "Secure, fast, and optimized cloud/physical server setup and management for your websites.",
    },
 
  },
  "/Services/software/cmsInstallationService": { // TR Slug: /antalya-yazilim/cms-kurulumu
    tr: {
      title: "Antalya CMS (İçerik Yönetim Sistemi) Kurulum ve Entegrasyonu",
      description: "WordPress, Joomla veya özel CMS çözümlerinin kurulumu ve mevcut sistemlerinize entegrasyonu.",
    },
    en: {
      title: "Antalya CMS (Content Management System) Installation and Integration",
      description: "Installation of WordPress, Joomla, or custom CMS solutions and integration with your existing systems.",
    },

  },

  // SMM Alt Sayfaları
  "/Services/smm/socialMediaReporting": { // TR Slug: /antalya-sosyal-medya/raporlama-hizmetleri
    tr: {
      title: "Antalya Sosyal Medya Raporlama ve Analiz Hizmetleri | Dönüşüm Takibi",
      description: "Aylık detaylı sosyal medya performans raporları, ROI ve dönüşüm odaklı analiz hizmetleri.",
    },
    en: {
      title: "Antalya Social Media Reporting and Analysis Services | Conversion Tracking",
      description: "Detailed monthly social media performance reports, ROI, and conversion-focused analysis services.",
    },
 
  },
  "/Services/smm/socialMediaContent": { // TR Slug: /antalya-sosyal-medya/icerik-hizmetleri
    tr: {
      title: "Antalya Sosyal Medya İçerik Üretimi ve Tasarımı | Etkileşim Odaklı",
      description: "Marka kimliğinize uygun, takipçilerinizin ilgisini çeken yaratıcı görsel ve metinsel içerikler.",
    },
    en: {
      title: "Antalya Social Media Content Creation and Design | Engagement Focused",
      description: "Creative visual and textual content that matches your brand identity and engages your followers.",
    },

  },
  "/Services/smm/socialMediaPlanning": { // TR Slug: /antalya-sosyal-medya/planlama-hizmetleri
    tr: {
      title: "Antalya Sosyal Medya Strateji ve Planlama Hizmeti | Hedef Kitle Belirleme",
      description: "Marka hedeflerinize uygun, hangi platformda ne zaman paylaşım yapılacağını belirleyen stratejik planlama.",
    },
    en: {
      title: "Antalya Social Media Strategy and Planning Service | Target Audience Definition",
      description: "Strategic planning that defines where and when to post on which platforms, aligned with your brand goals.",
    },
 
  },
  "/Services/smm/socialMediaAnalysis": { // TR Slug: /antalya-sosyal-medya/analiz-hizmetleri
    tr: {
      title: "Antalya Sosyal Medya Rekabet ve Pazar Analizi | Detaylı Rapor",
      description: "Rakiplerinizin sosyal medya stratejilerini ve pazarın dinamiklerini analiz ederek yol haritanızı çizin.",
    },
    en: {
      title: "Antalya Social Media Competitive and Market Analysis | Detailed Report",
      description: "Analyze your competitors' social media strategies and market dynamics to draw your roadmap.",
    },

  },
  "/Services/smm/socialMediaManagement": { // Sitemap'te bulunan ekstra link (tr/Services/smm/socialMediaManagement)
    tr: {
      title: "Antalya Sosyal Medya Yönetim Hizmetleri | Hesap ve Kampanya Yönetimi",
      description: "Instagram, Facebook ve diğer sosyal medya hesaplarının profesyonel yönetimi, içerik ve reklam kampanyaları.",
    },
    en: {
      title: "Antalya Social Media Management Services | Account and Campaign Management",
      description: "Professional management of Instagram, Facebook, and other social media accounts, including content and advertising campaigns.",
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
      title: "Antalya Çok Dilli Çağrı Merkezi Desteği | Uluslararası Rezervasyonlar",
      description: "İngilizce, Rusça ve diğer dillerde uzman temsilcilerle uluslararası müşteri ve rezervasyon desteği sağlayın.",
    },
    en: {
      title: "Antalya Multilingual Call Center Support | International Reservations",
      description: "Provide international customer and reservation support with expert representatives in English, Russian, and other languages.",
    },

  },
  "/Services/callcenter/callPerformance": { // TR Slug: /antalya-cagri-merkezi/performans-analizi
    tr: {
      title: "Antalya Çağrı Merkezi Performans Analizi | Verimlilik ve Satış Optimizasyonu",
      description: "Temsilci performansı, bekleme süreleri ve satışa dönüşüm metriklerini analiz ederek çağrı merkezinizi optimize edin.",
    },
    en: {
      title: "Antalya Call Center Performance Analysis | Efficiency and Sales Optimization",
      description: "Optimize your call center by analyzing representative performance, waiting times, and sales conversion metrics.",
    },

  },
  "/Services/callcenter/multipleChannels": { // TR Slug: /antalya-cagri-merkezi/cok-kanalli-satis-takibi
    tr: {
      title: "Antalya Çok Kanallı Satış Takibi ve Entegrasyonu | CRM Çözümleri",
      description: "Telefon, e-posta, sosyal medya ve chat gibi tüm kanallardan gelen taleplerin merkezi takibi ve CRM entegrasyonu.",
    },
    en: {
      title: "Antalya Multi-Channel Sales Tracking and Integration | CRM Solutions",
      description: "Centralized tracking of requests from all channels like phone, email, social media, and chat, with CRM integration.",
    },

  },
  "/Services/callcenter/contractManagement": { // TR Slug: /antalya-cagri-merkezi/sozlesme-yonetimi
    tr: {
      title: "Antalya Çağrı Merkezi Sözleşme Yönetimi ve Takibi",
      description: "Müşteri sözleşmelerinin, rezervasyon anlaşmalarının ve yasal dokümantasyonun eksiksiz takibi ve yönetimi.",
    },
    en: {
      title: "Antalya Call Center Contract Management and Tracking",
      description: "Comprehensive tracking and management of customer contracts, reservation agreements, and legal documentation.",
    },

  },
  "/Services/callcenter/reservationSupport": { // TR Slug: /antalya-cagri-merkezi/rezervasyon-destek
    tr: {
      title: "Antalya Rezervasyon Destek ve Satış Temsilciliği Hizmeti",
      description: "Otel ve turizm işletmeleri için doğrudan satış ve rezervasyon süreçlerini yöneten profesyonel destek ekibi.",
    },
    en: {
      title: "Antalya Reservation Support and Sales Representation Service",
      description: "Professional support team managing direct sales and reservation processes for hotel and tourism businesses.",
    },

  },
};