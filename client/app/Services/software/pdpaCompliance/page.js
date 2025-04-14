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
    header:"Integration & PDPA",
    text:"Due to current legal regulations, PDPA has become quite complex. Clarification text and cookies are not possible without a professional team, and DGTLFACE follows these regulations closely and takes the necessary steps for you at the right time."
  },
  {
    id:2,
    image:image2,
    header:"Cookie Policy",
    text:"We will handle this task for you with personnel specialised in cookies and cookie use. Even if you comply with PDPA rules, the cookie selection screen may be against the law. Don't bother with all this and let our expert teams take care of this problem for you."
  },
  {
    id:3,
    image:image3,
    header:"Compliance With World",
    text:"Creating a website that complies with legal regulations and security policies is more difficult than it seems. Since all our departments work in harmony, it is our job to create a website that is compatible with the modern world and fully comply with legal regulations."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="PDPA Compliance" header2="Services" text="The purpose of this Law is to protect fundamental rights and freedoms of persons, particularly the right to privacy, with respect to processing of personal data and to set forth obligations, principles and procedures which shall be binding upon natural or legal persons who process personal data." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
