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
    title: "Call 4 Languages",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
       buttonLink:"/Services/callcenter/callLanguages"
  },
  {
    id: 2,
    title: "Reservation Support",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
      buttonLink:"/Services/callcenter/reservationSupport"
  },
  {
    id: 3,
    title: "Multiple Channels",
    subTitle: "Tracking Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
      buttonLink:"/Services/callcenter/multipleChannels"
  },
  {
    id: 4,
    title: "Contract Management",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
      buttonLink:"/Services/callcenter/contractManagement"
  },

  {
    id: 5,
    title: "Call Analys",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/callcenter/callPerformance"
  },
];

const page = () => {
   const t = useTranslations("Callcenter");
  
   const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`callcenter_services_title${i}`),
  subTitle: t(`callcenter_services_subtitle${i}`),
  features: [1,2,3,4].map(j => t(`callcenter_services_feature${i}_${j}`)),
  buttonLink: [
    "/Services/callcenter/callLanguages",
    "/Services/callcenter/reservationSupport",
    "/Services/callcenter/multipleChannels",
    "/Services/callcenter/contractManagement",
    "/Services/callcenter/callPerformance"
  ][i-1]
}));

  return (
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
      <MainBanner  header={t("callcenter_banner_header")} span={t("callcenter_banner_span")} text={t("callcenter_banner_text")} buttonText={t("buttonText")}/>
      <StepSection header={t("callcenter_section_header1")} header2={t("callcenter_section_header2")} text={t("callcenter_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
