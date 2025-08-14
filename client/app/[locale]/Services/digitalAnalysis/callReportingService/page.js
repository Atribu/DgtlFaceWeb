import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import { useTranslations } from "next-intl";

const stepData=[
  {
    id:1,
    image:image1,
    header:"Call Recording & Storage",
    text:"Call recording and storage services allow businesses to securely record customer communications. This is important for future audits, training purposes, or immediate needs. Recorded calls form the basis of data analysis and customer feedback."
  },
  {
    id:2,
    image:image2,
    header:"Call Analysis & Monitoring",
    text:"Call analysis and monitoring help businesses evaluate their performance by listening to call content and improve customer satisfaction. Real-time monitoring provides the opportunity to quickly respond to customer requests."
  },
  {
    id:3,
    image:image3,
    header:"Reporting & Data Analysis",
    text:"Reporting and data analysis transform call data into valuable insights for the business. This service helps businesses understand their call centre performance, identify strengths and weaknesses, and make strategic decisions."
  },
  {
    id:4,
    image:image4,
    header:"Customer Feedback & Improvement",
    text:"Customer feedback and improvement are essential for enhancing the customer experience. This service provides data-driven feedback to understand customer satisfaction and optimise business processes, helping businesses deliver better service."
  }
]
const page = () => {
    const t = useTranslations("CallReportingService");
  
           const stepData = [1,2,3,4].map(i => ({
                              id: i,
                              image: [image1,image2,image3,image4][i-1],
                              header: t(`callreporting_step${i}_header`),
                              text:   t(`callreporting_step${i}_text`)
                            }));
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
     <SubBanner
  header={t("callreporting_subbanner_header")}
  header2={t("callreporting_subbanner_header2")}
  text={t("callreporting_subbanner_text")}
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
