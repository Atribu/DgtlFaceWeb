import QuestionsSection from '@/app/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/components/subPageComponents/StepSection2'
import SubBanner from '@/app/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"

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
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Multiple Channels Sales " header2="Tracking Services" text="Simplify your sales strategy and capture performance across all platforms with DGTLFACE's Multi-Channel Sales Tracking Service. This comprehensive approach optimizes every touchpoint for maximum engagement and revenue growth, facilitating efficiency." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
