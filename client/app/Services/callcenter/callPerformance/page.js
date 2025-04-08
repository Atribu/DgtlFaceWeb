import QuestionsSection from '@/app/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/components/subPageComponents/StepSection2'
import SubBanner from '@/app/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"

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
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Call Performance " header2="& Analysis Services" text="Our advanced system meticulously evaluates call metrics to enhance representative performance, increase satisfaction rates, and support strategic decision-making for quality service delivery." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
