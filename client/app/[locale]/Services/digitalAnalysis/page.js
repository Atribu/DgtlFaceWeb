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
    title: "Website Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/digitalAnalysis/websiteReportingService"
  },
  {
    id: 2,
    title: "Online Market Research",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
        buttonLink:"/Services/digitalAnalysis/onlineMarketResearchService"
  },
  {
    id: 3,
    title: "Digital Sales Analysis",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
        buttonLink:"/Services/digitalAnalysis/digitalSalesAnalysis"
  },
  {
    id: 4,
    title: "Advertising Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
        buttonLink:"/Services/digitalAnalysis/advertisingReportingService"
  },

  {
    id: 5,
    title: "Call Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
        buttonLink:"/Services/digitalAnalysis/callReportingService"
  },
];

const page = () => {
  const t = useTranslations("DigitalAnalysis");

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`analysis_services_title${i}`),
  subTitle: t(`analysis_services_subtitle${i}`),
  features: [1,2,3,4].map(j => t(`analysis_services_feature${i}_${j}`)),
  buttonLink: [
    "/Services/digitalAnalysis/websiteReportingService",
    "/Services/digitalAnalysis/onlineMarketResearchService",
    "/Services/digitalAnalysis/digitalSalesAnalysis",
    "/Services/digitalAnalysis/advertisingReportingService",
    "/Services/digitalAnalysis/callReportingService"
  ][i-1]
}));
  
  return (
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
    <MainBanner header={t("analysis_banner_header")} text={t("analysis_banner_text")} span={t("analysis_banner_span")} buttonText={t("buttonText")}/>
<StepSection
  header={t("analysis_section_header1")}
  header2={t("analysis_section_header2")}
  text={t("analysis_section_text")}
  servicesData={servicesData}
  buttonText={t("buttonText")}
/>


      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
