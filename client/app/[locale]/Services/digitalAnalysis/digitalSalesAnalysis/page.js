import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"

const stepData=[
  {
    id:1,
    image:image1,
    header:"Customer Segmentation & Profiling",
    text:"We segments and profiles customers based on their demographics, behaviors, preferences, and needs. This service helps clients identify their most valuable and loyal customers, and tailor their offerings and communications to them."
  },
  {
    id:2,
    image:image2,
    header:"Market Research & Intelligence",
    text:"We conducts market research and intelligence to help clients assess the size, growth, trends, and opportunities of their target markets. This service helps clients monitor and benchmark their performance against their competitors, and identify their strengths and weaknesses."
  },
  {
    id:3,
    image:image3,
    header:"Campaign Analysis & Optimization",
    text:"We analyzes and optimizes campaigns across various channels, such as email, social media, web, and mobile. We helps clients measure and improve their campaign effectiveness, efficiency, and impact, and provides recommendations for enhancement."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Digital Sales Analysis" header2="Services" text="Digital Sales and Marketing Analysis Services is a premier provider of data-driven solutions for businesses that want to optimize their sales and marketing strategies. We helps clients understand their customers, markets, competitors, and campaigns, and provides them with actionable insights to increase their sales and marketing." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
