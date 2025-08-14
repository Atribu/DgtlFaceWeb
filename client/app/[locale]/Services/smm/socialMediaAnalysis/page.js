import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations } from "next-intl";

const stepData=[
  {
    id:1,
    image:image1,
    header:"Campaign Performance Evaluation",
    text:"We'll assess the performance of your social media advertising campaigns, tracking metrics such as reach, engagement, clicks, conversions, and return on ad spend."
  },
  {
    id:2,
    image:image2,
    header:"Audience Insights & Segmentation",
    text:"We'll analyze audience demographics, interests, and behaviours to identify high-performing audience segments and tailor your targeting strategy for maximum effectiveness."
  },
  {
    id:3,
    image:image3,
    header:"Ad Creative Analysis",
    text:"We'll evaluate the effectiveness of your ad creatives, including images, videos, headlines, and copywriting, to determine which elements resonate best with your audience and drive the highest engagement."
  }
]
const page = () => {
    const t = useTranslations("SocialMediaAnalysis");
     const stepData = [1,2,3].map(i => ({
      id: i,
      image: [image1,image2,image3][i-1],
      header: t(`socialmediaanalysis_step${i}_header`),
      text:   t(`socialmediaanalysis_step${i}_text`)
    }));

  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner
  header={t("socialmediaanalysis_subbanner_header")}
  header2={t("socialmediaanalysis_subbanner_header2")}
  text={t("socialmediaanalysis_subbanner_text")}
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
