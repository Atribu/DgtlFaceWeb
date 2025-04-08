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
    header:"Gain Valuable Insights",
    text:"We'll create customized reporting dashboards tailored to your specific goals and KPIs, allowing you to track performance metrics that matter most to your business."
  },
  {
    id:2,
    image:image2,
    header:"Performance Metrics Tracking",
    text:"We'll track key performance metrics, including engagement rates, reach, impressions, click-through rates, conversion rates, and more, across all your social media platforms."
  },
  {
    id:3,
    image:image3,
    header:"Audience Insights & Demographics",
    text:"We'll provide you with valuable insights into your audience demographics, including age, gender, location, interests, and behaviors, helping you better understand and target your audience."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Social Media Reporting" header2="Services" text="Based on our analysis, we'll provide you with actionable recommendations for optimising your social media strategy, improving performance, and achieving your business objectives. With our Social Media Reporting Services, you'll gain valuable insights into your social media performance and make data-driven decisions to drive better results." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
