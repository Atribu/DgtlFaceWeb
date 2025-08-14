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
    title: "Social Media Planning",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/smm/socialMediaPlanning"
  },
  {
    id: 2,
    title: "Social Media Management",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/smm/socialMediaManagement"
  },
  {
    id: 3,
    title: "Social Media Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/smm/socialMediaReporting"
  },
  {
    id: 4,
    title: "Social Media Content",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/smm/socialMediaContent"
  },

  {
    id: 5,
    title: "Social Media Analysis",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/smm/socialMediaAnalysis"
  },
];

const page = () => {
     const t = useTranslations("Smm");

      const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`smm_services_title${i}`),
  subTitle: t(`smm_services_subtitle${i}`),
  features: [1,2,3,4].map(j => t(`smm_services_feature${i}_${j}`)),
  buttonLink: [
    "/Services/smm/socialMediaPlanning",
    "/Services/smm/socialMediaManagement",
    "/Services/smm/socialMediaReporting",
    "/Services/smm/socialMediaContent",
    "/Services/smm/socialMediaAnalysis"
  ][i-1]
}));

  return (
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
       <MainBanner  header={t("smm_banner_header")} span={t("smm_banner_span")} text={t("smm_banner_text")} buttonText={t("buttonText")}/>
      <StepSection header={t("smm_section_header1")} header2={t("smm_section_header2")} text={t("smm_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
