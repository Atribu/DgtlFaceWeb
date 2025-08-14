import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'
import { useTranslations } from "next-intl";

// const servicesData = [
//   {
//     id: 1,
//     title: "Graphic & Motion Graphic",
//     subTitle: "Design Service",
//     features: [
//       "Logo Design",
//       "Brand Guidelines",
//       "Social Media Graphics",
//       "Creating and Editing Motionography"
      
//     ],
//     buttonLink:"/Services/creative/graphicDesign"
//   },
//   {
//     id: 2,
//     title: "UI / UX",
//     subTitle: "Design Service",
//     features: [
//       "Logo Design",
//       "Brand Guidelines",
//       "Social Media Graphics",
//       "Creating and Editing Motionography",
//     ],
//      buttonLink:"/Services/creative/uiUxDesign"
//   },
//   {
//     id: 3,
//     title: "Video & Production",
//     subTitle: "Design Service",
//     features: [
//       "Logo Design",
//       "Brand Guidelines",
//       "Social Media Graphics",
//       "Creating and Editing Motionography",
//     ],
//      buttonLink:"/Services/creative/videoProduction"
//   },
//   {
//     id: 4,
//     title: "Event Production",
//     subTitle: "Design Service",
//     features: [
//       "Logo Design",
//       "Brand Guidelines",
//       "Social Media Graphics",
//       "Creating and Editing Motionography",
//     ],
//      buttonLink:"/Services/creative/eventProduction"
//   },

//   {
//     id: 5,
//     title: "Corporate Gift",
//     subTitle: "Design Service",
//     features: [
//       "Logo Design",
//       "Brand Guidelines",
//       "Social Media Graphics",
//       "Creating and Editing Motionography",
//     ],
//      buttonLink:"/Services/creative/corporateGift"
//   },
// ];

const page = () => {
  const t = useTranslations("CreativePage");

 const buttonLinks=["/Services/creative/graphicDesign","/Services/creative/uiUxDesign", "/Services/creative/videoProduction", "/Services/creative/eventProduction", "/Services/creative/corporateGift"]

  const servicesData = Array.from({ length: 5 }, (_, i) => {
  const id = i + 1;
  return {
    id,
    title: t(`creativepage_services_title${id}`),
    subTitle: t(`creativepage_services_subtitle${id}`),
    features: [1,2,3,4].map(j => t(`creativepage_services_feature${id}_${j}`)),
    buttonLink:buttonLinks[id-1]
  };
});

  return (
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
      <MainBanner header={t("creativepage_banner_header")} span={t("creativepage_banner_span")} text={t("creativepage_banner_text")} buttonText={t("buttonText")}/>
      <StepSection header={t("creativepage_step_header1")} header2={t("creativepage_step_header2")} text={t("creativepage_step_text")} servicesData={servicesData} buttonText={t("buttonText")}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
