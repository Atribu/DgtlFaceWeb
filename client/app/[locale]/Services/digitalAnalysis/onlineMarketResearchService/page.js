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
    header:"Follow The Trend",
    text:"We monitor emerging trends and consumer preferences in real-time, keeping you one step ahead of the competition and positioning your brand as an industry leader.  From social media chatter and consumer reviews to industry reports and competitor analysis, we leave no stone unturned in uncovering valuable insights that shape your strategic direction."
  },
  {
    id:2,
    image:image2,
    header:"Stay up to Date",
    text:"In the ever-evolving digital marketplace, knowledge is power. To stay ahead of the curve, you need actionable insights derived from comprehensive online market research. We offer updated and refined Online Market Research Services tailored to meet the demands of today's dynamic business environment."
  },
  {
    id:3,
    image:image3,
    header:"Understand Your Audience",
    text:"We delve deep into consumer behavior, demographics, and psychographics to develop a comprehensive understanding of your target audience, allowing you to tailor your products, services, and marketing efforts to their needs and preferences."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Online Market Research" header2="Services" text="In today's rapidly evolving marketplace, keeping your finger on the pulse of consumer trends and industry insights is crucial to staying competitive. we specialize in providing comprehensive Online Market Research Services designed to help you navigate the ever-changing landscape and make informed decisions that drive success." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
