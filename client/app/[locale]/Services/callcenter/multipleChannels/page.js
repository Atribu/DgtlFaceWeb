import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import { useTranslations } from "next-intl";

const stepData=[
  {
    id:1,
    image:image1,
    header:"Multi Chatbox Technology Integration",
    text:"In today's widely used chatbox solutions across various industries, users can quickly access answers to simple queries. This innovative solution enhances user experience in real-time by enabling your brand to instantly connect with customers."
  },
  {
    id:2,
    image:image2,
    header:"Digital Automation Web Tool Installations",
    text:"Digital Automation web tools are software solutions that assist in managing complexity and facilitating measurement. Our solutions streamline processes, reduce manual effort, and enhance user experience. Our digital automation web tool services guide your conversion journey towards seamless integration and operational excellence."
  }
]
const page = () => {
  const t = useTranslations("MultipleChannels");

  const stepData = [1,2].map(i => ({
  id: i,
  image: [image1, image2][i-1],
  header: t(`multichannels_step${i}_header`),
  text:   t(`multichannels_step${i}_text`)
}));
  
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
     <SubBanner
  header={t("multichannels_subbanner_header")}
  header2={t("multichannels_subbanner_header2")}
  text={t("multichannels_subbanner_text")}
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
