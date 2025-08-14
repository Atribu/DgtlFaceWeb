import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";

const servicesData = [
  {
    id: 1,
    title: "On-Page SEO",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/seo/onpageSeo"
  },
  {
    id: 2,
    title: "Off-Page SEO",
    subTitle: "Deign Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/offpageSeo"
  },
  {
    id: 3,
    title: "Technical SEO",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/technicaSeo"
  },
  {
    id: 4,
    title: "Original Copywriting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/originalCopywriting"
  },

  {
    id: 5,
    title: "SEO Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/seoReporting"
  },
];

const page = () => {
   const t = useTranslations("Seo");
   
   const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`seo_services_title${i}`),
  subTitle: t(`seo_services_subtitle${i}`),
  features: [1,2,3,4].map(j => t(`seo_services_feature${i}_${j}`)),
  buttonLink: [
    "/Services/seo/onpageSeo",
    "/Services/seo/offpageSeo",
    "/Services/seo/technicalSeo",
    "/Services/seo/originalCopywriting",
    "/Services/seo/seoReporting"
  ][i-1]
}));
  return (
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
       <MainBanner  header={t("seo_banner_header")} span={t("seo_banner_span")} text={t("seo_banner_text")} buttonText={t("buttonText")}/>
      <StepSection header={t("seo_section_header1")} header2={t("seo_section_header2")} text={t("seo_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
