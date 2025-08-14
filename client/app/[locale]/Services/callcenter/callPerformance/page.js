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
    header:"Measure Call CenterPerformance",
    text:"Enhance the efficiency of your call center with our call center performance measurement service. Our specialized analyses delve deep into key performance indicators, enabling targeted improvements. Through comprehensive performance metric analysis, we exceed customer expectations and set new standards in customer support."
  },
  {
    id:2,
    image:image2,
    header:"Speech Analytics Tracking",
    text:"We enable strategic improvements by analysing voice communications related to call quality and representative performance, allowing us to provide you with the best possible services. Speech analytics guide informed decisions, taking your customer service to new heights."
  },
  {
    id:3,
    image:image3,
    header:"Call Center Sales Analysis",
    text:"Develop effective sales strategies that lead to revenue growth by identifying strengths and areas for improvement. Our comprehensive approach to analysing sales interactions allows us to determine effective tactics and areas that need enhancement."
  }
]
const page = () => {
  const t = useTranslations("CallPerformance");

  const stepData = [1,2,3].map(i => ({
  id: i,
  image: [image1,image2,image3][i-1],
  header: t(`callperformance_step${i}_header`),
  text:   t(`callperformance_step${i}_text`)
}));

  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
     <SubBanner
  header={t("callperformance_subbanner_header")}
  header2={t("callperformance_subbanner_header2")}
  text={t("callperformance_subbanner_text")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff" />
    </div>
  )
}

export default page
