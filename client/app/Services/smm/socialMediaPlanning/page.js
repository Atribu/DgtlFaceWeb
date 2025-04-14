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
    header:"Community Management",
    text:"We'll actively engage with your audience, responding to comments, messages, and inquiries in a timely and professional manner. Our team will foster a sense of community around your brand, building trust and loyalty among your followers."
  },
  {
    id:2,
    image:image2,
    header:"Marketing Collaboration",
    text:"We'll identify and collaborate with relevant influencers in your industry to amplify your brand's reach and credibility. Our team will manage the entire influencer marketing process, from outreach and negotiation to campaign execution and performance tracking."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Social Media Planning" header2="Services" text="We'll create and manage targeted social media advertising campaigns to reach specific audience segments, drive website traffic, generate leads, and increase conversions. Our team will optimise your ad campaigns for maximum ROI, continuously monitoring performance and making adjustments as needed." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
