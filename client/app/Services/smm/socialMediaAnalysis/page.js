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
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Social Media Analysis" header2="Services" text="We'll create and manage targeted social media advertising campaigns to reach specific audience segments, drive website traffic, generate leads, and increase conversions. Our team will optimise your ad campaigns for maximum ROI, continuously monitoring performance and making adjustments as needed." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
