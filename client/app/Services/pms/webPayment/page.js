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
    header:"Web Payment Module Integration",
    text:"Provides flexibility to users, catering to diverse preferences and improving the overall user experience. Assess the ease of integration with the existing website or e-commerce platform."
  },
  {
    id:2,
    image:image2,
    header:"Hotel Payment System Institutions",
    text:"Prioritize payment systems that offer a smooth and intuitive user experience, both on desktop and mobile devices. Enhances customer satisfaction and reduces the likelihood of abandoned transactions."
  },
  {
    id:3,
    image:image3,
    header:"Web Payment System Bank Definitions",
    text:"In the context of web payment systems, 'bank definitions' typically refer to the information and specifications related to the integration of a specific bank's services into a payment system. These definitions include the necessary details and configurations required to facilitate transactions between the payment system and a particular bank."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Web Payment" header2="System Services" text="Web payment system identification services involve the process of identifying, selecting, and implementing payment systems for online transactions. These services are crucial for ensuring secure, efficient, and user-friendly payment processing on websites." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
