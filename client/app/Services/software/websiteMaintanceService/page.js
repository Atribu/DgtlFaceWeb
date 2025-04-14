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
    header:"Supporting & Maintenance",
    text:"Forge your connections with our cutting-edge security infrastructure. Your data is wrapped in impenetrable armor, ensuring that every connection is not just secure but fortified against any unauthorized access."
  },
  {
    id:2,
    image:image2,
    header:"Securing Data",
    text:"We don't just secure connections; we shield them with an impervious layer of data security.  Your information is guarded against any breach, ensuring that every connection is a secure pathway in the digital realm."
  },
  {
    id:3,
    image:image3,
    header:"Encryption",
    text:"Every piece of data is encoded with the highest standards, ensuring that your connections remain secure and impervious to any external threats. We take pride in securing every byte, connection by connection."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Website Maintenance " header2="Services" text="Success in the online world not only hinges on making a strong start but also on ensuring your website remains continuously updated, secure, and fast. This is where DGTLFACE Website Maintenance and Support Services come into play. Our professional team provides all the necessary technical maintenance and updates to ensure your website always performs at its peak." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
