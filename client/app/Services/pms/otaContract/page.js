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
    header:"OTA Marketing Strategies",
    text:"All our approaches, from optimised content to competitive pricing and promotions, are focused on maximizing your presence on OTA platforms. We implement promotional strategies such as timed campaigns and package offers to attract more guests. The first step in creating a marketing strategy is identifying and understanding your target audience."
  },
  {
    id:2,
    image:image2,
    header:"Hotel Contract Management",
    text:"We focus on ensuring that each contract aligns with your goals while securing conditions that enhance operational efficiency and financial performance. Leave the management and optimization of numerous agreements, including vendor contracts and OTA contracts, necessary for your hotel's operations, to our expertise."
  },
  {
    id:3,
    image:image3,
    header:"Search Engine Review Management",
    text:"We understand the impact of customer feedback on your digital footprint and diligently work to create a positive online image."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Ota Contract" header2="Management Services" text="DGTLFACE elevates your business in the digital travel markets by negotiating advantageous terms, enhancing your presence on crucial platforms, and increasing bookings and revenue." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
