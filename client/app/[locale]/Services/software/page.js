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
    title: "Website & Software",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/software/websiteAndSoftware"
  },
  {
    id: 2,
    title: "Server Management",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/software/serverManagementService"
  },
  {
    id: 3,
    title: "PDPA Compliance",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/software/pdpaCompliance"
  },
  {
    id: 4,
    title: "Website Maintenance",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/software/websiteMaintanceService"
  },

  {
    id: 5,
    title: "CMS Installation",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/software/cmsInstallationService"
  },
];

const page = () => {
  const t = useTranslations("Software");

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`software_services_title${i}`),
  subTitle: t(`software_services_subtitle${i}`),
  features: [1,2,3,4].map(j => t(`software_services_feature${i}_${j}`)),
  buttonLink: [
    "/Services/software/websiteAndSoftware",
    "/Services/software/serverManagementService",
    "/Services/software/pdpaCompliance",
    "/Services/software/websiteMaintanceService",
    "/Services/software/cmsInstallationService"
  ][i-1]
}));

  return (
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
   <MainBanner header={t("software_banner_header")} span={t("software_banner_span")} text={t("software_banner_text")}   buttonText={t("buttonText")}/>
<StepSection
  header={t("software_section_header1")}
  header2={t("software_section_header2")}
  text={t("software_section_text")}
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
