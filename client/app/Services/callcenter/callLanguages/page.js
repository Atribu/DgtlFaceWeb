import QuestionsSection from '@/app/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/components/subPageComponents/StepSection2'
import SubBanner from '@/app/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image-1.png"
import image2 from "./images/image-2.png"
import image3 from "./images/image-3.png"

const stepData=[
  {
    id:1,
    image:image1,
    header:"Prefessional Call Answering",
    text:"There are very few ways to truly do a job right, and missed opportunities may not be compensated for when things are not done correctly. To avoid this risk, you must always perform work with the highest care and quality. A professional, timely and on-site team is waiting for you."
  },
  {
    id:2,
    image:image2,
    header:"International Call Center Service",
    text:"Let us answer your calls for the countries you serve with our international call greeting service. Increase your call quality as a company that provides international service with a professional team that provides quality service in 4 languages."
  },
  {
    id:3,
    image:image3,
    header:"Dijital iletişim Strateji Hizmeti",
    text:"We collaborate with you to determine the expectations and communication strategies tailored to your business goals and target audience. Transform your online presence into a strategically designed dynamic interaction platform, elevating brand awareness with each interaction and establishing effective connections with your target audience."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Call 4 Languages " header2="Services" text="Take your business to the next level with our strong call center team consisting of employees who are proficient in 4 languages and even native speakers of some languages. Work with us to never miss a customer and always establish correct communication." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
