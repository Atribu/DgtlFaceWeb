import QuestionsSection from '@/app/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/components/subPageComponents/StepSection2'
import SubBanner from '@/app/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"

const stepData=[
  {
    id:1,
    image:image1,
    header:"Interior Showcase Shoots",
    text:"Whether it's a hotel, a stylish restaurant, or an office, highlighting the ambiance and unique features of any interior space is our specialty. Our attention-grabbing video and photography shoots, tailored to your brand's identity, will set you apart from your competitors."
  },
  {
    id:2,
    image:image2,
    header:"Exterior Showcase Shoots",
    text:"Whether it's a hotel, a stylish restaurant, or an office, highlighting the ambiance and unique features of any interior space is our specialty. Our attention-grabbing video and photography shoots, tailored to your brand's identity, will set you apart from your competitors."
  },
  {
    id:3,
    image:image3,
    header:"Video & Photography Shoots",
    text:"Our commitment to quality and creativity ensures that every project we undertake stands out. By combining artistic vision with technical expertise, we offer comprehensive video and photography services that exceed expectations and cater to diverse industry demands."
  },
  {
    id:4,
    image:image4,
    header:"360 Image and Video Shoots",
    text:"Elevate your brand with 360 showcase video and photography services that resonate with your target audience. Our video showcase services include concept development, scriptwriting, shooting, and post-production, providing informative and engaging content."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
          <SubBanner header="Video & Production" header2="Service" text="Our creative and professional team focuses on producing high-quality and captivating video content that resonates with your target audience at every stage of production." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
