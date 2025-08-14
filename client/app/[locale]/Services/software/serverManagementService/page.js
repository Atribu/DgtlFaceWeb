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
    header:"Future-Proof Performance",
    text:"Embrace the future with scalable servers that evolve alongside your business. Our service ensures future-proof performance, allowing your digital infrastructure to grow seamlessly. Elevate your operations with a server solution designed for tomorrow."
  },
  {
    id:2,
    image:image2,
    header:"Server Security",
    text:"Fortify your digital defences with our server security service. We go beyond standard protocols, implementing robust measures to safeguard your data. Trust us for a secure server environment that shields your digital assets."
  },
  {
    id:3,
    image:image3,
    header:"Server Efficiency",
    text:"We fine-tune your servers for peak performance, ensuring that every digital interaction is smooth, swift, and efficient. Experience the power of optimised servers. From routine maintenance to intricate optimizations, our experts handle it all."
  }
]
const page = () => {
   const t = useTranslations("ServerManagement");
  
      const stepData = [1,2,3].map(i => ({
                     id: i,
                     image: [image1,image2,image3][i-1],
                     header: t(`servermanagement_step${i}_header`),
                     text:   t(`servermanagement_step${i}_text`)
                   }));
                   
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner
  header={t("servermanagement_subbanner_header")}
  header2={t("servermanagement_subbanner_header2")}
  text={t("servermanagement_subbanner_text")}
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
