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
    header:"Strategic Planning",
    text:"We'll develop a strategic social media plan aligned with your business objectives, identifying key target audiences, platforms, and messaging strategies. Our team will create high-quality, engaging content, including posts, images, videos, and stories, designed to resonate"
  },
  {
    id:2,
    image:image2,
    header:"Platform Management & Posting",
    text:"We'll manage all aspects of your social media profiles, including posting frequency, timing, and optimization. Our team will ensure that your content is consistently scheduled and published across all relevant platforms to maximize reach and visibility."
  },
  {
    id:3,
    image:image3,
    header:"Community Engagement & Interaction",
    text:"We'll actively engage with your audience, responding to comments, messages, and inquiries in a timely and professional manner. Our team will foster a sense of community around your brand, building trust and loyalty among your followers."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Social Media" header2="Management Services" text="Transform your social media presence with our expert team. Social media presence is essential for businesses to connect with their audience, build brand awareness, and drive meaningful engagement." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
