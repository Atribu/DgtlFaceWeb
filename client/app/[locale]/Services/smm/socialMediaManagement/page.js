import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("SocialMediaManagement");

   const stepData = [1,2,3].map(i => ({
           id: i,
           image: [image1,image2,image3][i-1],
           header: t(`socialmediamanagement_step${i}_header`),
           text:   t(`socialmediamanagement_step${i}_text`)
         }));

  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
    <SubBanner
  header={t("socialmediamanagement_subbanner_header")}
  header2={t("socialmediamanagement_subbanner_header2")}
  text={t("socialmediamanagement_subbanner_text")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
