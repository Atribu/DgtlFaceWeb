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
    title: "Advertising Management",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/sem/advertisingManagement"
  },
  {
    id: 2,
    title: "Web Traffic Tracking",
    subTitle: "Deign Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/sem/webTraffic"
  },
  {
    id: 3,
    title: "Google Webtools",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
      buttonLink:"/Services/sem/googleWebtools"
  },
  {
    id: 4,
    title: "Yandex Advertising",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
      buttonLink:"/Services/sem/yandexAdvertising"
  },

  {
    id: 5,
    title: "Google Ads Advertising",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
      buttonLink:"/Services/sem/googleAdsAdvertising"
  },
];

const page = () => {
  const t = useTranslations("Sem");

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`sem_services_title${i}`),
  subTitle: t(`sem_services_subtitle${i}`),
  features: [1,2,3,4].map(j => t(`sem_services_feature${i}_${j}`)),
  buttonLink: [
    "/Services/sem/advertisingManagement",
    "/Services/sem/webTraffic",
    "/Services/sem/googleWebtools",
    "/Services/sem/yandexAdvertising",
    "/Services/sem/googleAdsAdvertising"
  ][i-1]
}));

  
  return (
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
     <MainBanner  header={t("sem_banner_header")} span={t("sem_banner_span")} text={t("sem_banner_text")} buttonText={t("buttonText")}/>
      <StepSection header={t("sem_section_header1")} header2={t("sem_section_header2")} text={t("sem_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
