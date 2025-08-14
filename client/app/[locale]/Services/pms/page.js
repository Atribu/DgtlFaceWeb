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
    title: "Hotel Identification",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/pms/hotelIdentification"
  },
  {
    id: 2,
    title: " Ota Contract Management",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/pms/otaContract"
  },
  {
    id: 3,
    title: "Web Payment System ",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/pms/webPayment"
  },
  {
    id: 4,
    title: "Reservation Module",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
       buttonLink:"/Services/pms/reservationModule"
  },

  {
    id: 5,
    title: "Reservation Management",
    subTitle: "Design Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/pms/reservationManagement"
  },
];

const page = () => {
  const t = useTranslations("Pms");

  const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`pms_services_title${i}`),
  subTitle: t(`pms_services_subtitle${i}`),
  features: [1,2,3,4].map(j => t(`pms_services_feature${i}_${j}`)),
  buttonLink: [
    "/Services/pms/hotelIdentification",
    "/Services/pms/otaContract",
    "/Services/pms/webPayment",
    "/Services/pms/reservationModule",
    "/Services/pms/reservationManagement"
  ][i-1]
}));

  return (
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
     <MainBanner  header={t("pms_banner_header")} span={t("pms_banner_span")} text={t("pms_banner_text")} buttonText={t("buttonText")}/>
      <StepSection header={t("pms_section_header1")} header2={t("pms_section_header2")} text={t("pms_section_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
