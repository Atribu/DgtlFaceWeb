import { getTranslations } from "next-intl/server";
import FaqPrompt from '../../components/common/FaqPrompt'
import RichTextSpan from '../../components/common/RichTextSpan'
import { AiAnswerBlock } from '../../components/common/AiAnswerBlock'
import { AiSourceMention } from '../../components/common/AiSourceMention'
import DualHighlightSection from '../../components/subPageComponents/DualHighlightSection'
import LogoListSection from '../../components/subPageComponents/LogoListSection'
import { getOgImageByPathnameKey } from "@/app/lib/og-map";
import { getSeoData } from "@/app/lib/seo-utils";
import JsonLd from "../../components/seo/JsonLd";
import { stripHtml } from "@/app/lib/structured-data/buildDepartmentJsonLd";
import { getBaseUrl, getCanonicalUrl } from "@/app/lib/seo/get-canonical";
import {
  AutoBreadcrumbsWhiteDeferred as AutoBreadcrumbsWhite,
  ContactMainDeferred as Contact,
  MainBannerDeferred as MainBanner,
  MobileMainBannerDeferred as MobileMainBanner,
  QuestionsSection2Deferred as QuestionsSection2,
  StepSectionDeferred as StepSection,
  VerticalSlider2Deferred as VerticalSlider2,
} from '@/app/[locale]/components/subPageComponents/DeferredServiceSections'

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const pathnameKey = "/Services/software";

  const seoData = getSeoData(pathnameKey, locale);

  const title =
    seoData?.title || "Web & Yazılım Hizmetleri | DGTLFACE";

  const description =
    seoData?.description ||
    "DGTLFACE, Next.js ve React ile yüksek performanslı web siteleri ve özel yazılım geliştirir. CMS, KVKK, sunucu güvenliği ve bakım destek sunar.";

  const base = getBaseUrl();

  const ogPath = getOgImageByPathnameKey(pathnameKey, locale);
  const ogImageAbs = new URL(ogPath, base).toString();

  const url = getCanonicalUrl(pathnameKey, locale);

  return {
    metadataBase: new URL(base),

    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        tr: getCanonicalUrl(pathnameKey, "tr"),
        en: getCanonicalUrl(pathnameKey, "en"),
      },
    },

    openGraph: {
      type: "website",
      url,
      siteName: "DGTLFACE",
      title,
      description,
      images: [
        {
          url: ogImageAbs,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageAbs],
    },
  };
}

function normalizeCanonicalUrl(url) {
  if (!url) return url;

  try {
    const parsed = new URL(url);

    if (parsed.pathname !== "/" && parsed.pathname.endsWith("/")) {
      parsed.pathname = parsed.pathname.replace(/\/+$/, "");
    }

    return parsed.toString();
  } catch {
    return url.replace(/\/+$/, "");
  }
}

function normalizeBaseUrl(url) {
  if (!url) return url;

  return normalizeCanonicalUrl(url).replace(/\/+$/, "");
}

function buildSoftwareServiceJsonLd({
  locale,
  baseUrl,
  pageUrl,
  servicesUrl,
  pageName,
  pageDescription,
  serviceName,
  serviceDescription,
}) {
  const cleanBaseUrl = normalizeBaseUrl(baseUrl);
  const canonicalPageUrl = normalizeCanonicalUrl(pageUrl);
  const canonicalServicesUrl = normalizeCanonicalUrl(servicesUrl);

  const inLanguage = locale === "tr" ? "tr-TR" : "en-US";

  const organizationId = `${cleanBaseUrl}/#organization`;
  const websiteId = `${cleanBaseUrl}/#website`;
  const webpageId = `${canonicalPageUrl}#webpage`;
  const serviceId = `${canonicalPageUrl}#service`;
  const breadcrumbId = `${canonicalPageUrl}#breadcrumb`;

const homeUrl = normalizeCanonicalUrl(getCanonicalUrl("/", locale));

  const labels =
    locale === "tr"
      ? {
          home: "Anasayfa",
          services: "Hizmetlerimiz",
          current: "Bilgi Teknolojileri ve Yazılım",
          serviceType: "Web & Yazılım Hizmetleri",
          country: "Türkiye",
        }
      : {
          home: "Home",
          services: "Services",
          current: "Web & Software Services",
          serviceType: "Web & Software Services",
          country: "Turkey",
        };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: canonicalPageUrl,
        name: pageName,
        description: pageDescription,
        inLanguage,
        isPartOf: {
          "@id": websiteId,
        },
        publisher: {
          "@id": organizationId,
        },
        about: {
          "@id": serviceId,
        },
        mainEntity: {
          "@id": serviceId,
        },
        breadcrumb: {
          "@id": breadcrumbId,
        },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: serviceName,
        description: serviceDescription,
        serviceType: labels.serviceType,
        url: canonicalPageUrl,
        mainEntityOfPage: {
          "@id": webpageId,
        },
        provider: {
          "@id": organizationId,
        },
        areaServed: [
          {
            "@type": "Country",
            name: labels.country,
          },
          {
            "@type": "AdministrativeArea",
            name: "Antalya",
          },
        ],
        inLanguage,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: labels.home,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: labels.services,
            item: canonicalServicesUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: labels.current,
            item: canonicalPageUrl,
          },
        ],
      },
    ],
  };
}


const Page = async ({ params }) => {
  const { locale } = await params;

  const base = getBaseUrl();

  const t = await getTranslations({ locale, namespace: "Software" });
  const t2 = await getTranslations({ locale, namespace: "Software.h4Section" });

  // ✅ canonical ile birebir
const pathnameKey = "/Services/software";

const pageUrl = getCanonicalUrl(pathnameKey, locale);
const servicesUrl = getCanonicalUrl("/Services", locale);

const jsonLd = buildSoftwareServiceJsonLd({
  locale,
  baseUrl: base,
  pageUrl,
  servicesUrl,
  pageName: t("jsonld.pageName"),
  pageDescription: stripHtml(t("jsonld.pageDescription")),
  serviceName: t("jsonld.serviceName"),
  serviceDescription: stripHtml(t("aiAnswerBlock")),
});

const faqs = [1, 2, 3, 4, 5].map((i) => ({
  question: t(`faqs.question${i}`),
  answer: t(`faqs.answer${i}`),
}));

         const items = [
             {
               title: t("h2Section.title1"),
               text: (
                 <RichTextSpan
                   ns="Software"
                   id="h2Section.text1"
                   className=""
                 />
               ),
             },
             {
               title: t("h2Section.title2"),
               text: (
                 <RichTextSpan
                   ns="Software"
                   id="h2Section.text2"
                   className=""
                 />
               ),
             },
             {
               title: t("h2Section.title3"),
               text: (
                 <RichTextSpan
                   ns="Software"
                   id="h2Section.text3"
                   className=""
                 />
               ),
             },
               {
               title: t("h2Section.title4"),
               text: (
                 <RichTextSpan
                   ns="Software"
                   id="h2Section.text4"
                   className=""
                 />
               ),
             },
             
           ];
      
           const cards = [
        {
          widthClass: "w-[90%] lg:w-[80%]",
          title: t2("card1title"),
          description: (
            <RichTextSpan
              ns="Software"
              id="h4Section.card1description"
            />
          ),
        },
        {
          widthClass: "w-[90%] lg:w-[75%]",
          title: t2("card2title"),
          description: (
            <RichTextSpan
              ns="Software"
              id="h4Section.card2description"
            />
          ),
        },
        {
          widthClass: "w-[90%] lg:w-[70%]",
          title: t2("card3title"),
          description: (
            <RichTextSpan
              ns="Software"
              id="h4Section.card3description"
            />
          ),
        },
      
      ];

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`software_services_title${i}`),
  subTitle: t(`software_services_subtitle${i}`),
     text: t(`software_services_text${i}`),
  features: [1,2,3,4].map(j => t(`software_services_feature${i}_${j}`)),
  buttonLink: [
     "/Services/software/websiteAndSoftware",
    "/Services/software/cmsInstallationService",
    "/Services/software/kvkk",
    "/Services/software/serverManagementService",
    "/Services/software/websiteMaintanceService"
  ][i-1]
}));

  return (
   <>
    {/* JSON-LD Structured Data */}
<JsonLd id="software-service-jsonld" data={jsonLd} />

    <div className='flex flex-col items-center justify-center gap-[30px] md:gap-[45px] lg:gap-[60px] overflow-hidden'>
<div className='hidden lg:flex'>
     <MainBanner header={t("software_banner_header")} span={t("software_banner_span")} text={
           <RichTextSpan
             ns="Software"
             id="software_banner_text"
           />
         }   buttonText={t("buttonText")}/>
</div>

<div className='flex lg:hidden'>
     <MobileMainBanner header={t("software_banner_header")} span={t("software_banner_span")} text={
           <RichTextSpan
             ns="Software"
             id="software_banner_text"
           />
         }   buttonText={t("buttonText")}/>
</div>
<div className='flex flex-col gap-4 items-center justify-center'>
  <AutoBreadcrumbsWhite/>

         <AiAnswerBlock text={t("aiAnswerBlock")}/>
</div>
         <DualHighlightSection items={items}/>
<StepSection
  header={t("software_section_header1")}
  header2={t("software_section_header2")}
  text={t("software_section_text")}
  servicesData={servicesData}
   buttonText={t("buttonText")}
/>
 <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
      bgColor="#ffffff"
      textColor="#140f25"
    />
      <VerticalSlider2 page="Software" itemCount={4}/>
      <QuestionsSection2 color="#140F25" faqs={faqs}/>
      <FaqPrompt
        namespace="Software.faqPrompt"
        faqSlug="yazilim-sss"
      />
      <Contact/>
      <AiSourceMention text={t("aiSourceMention")}/>
    </div>
    </>
  )
}

export default Page
