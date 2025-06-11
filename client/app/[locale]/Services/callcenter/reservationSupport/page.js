import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"

const stepData=[
  {
    id:1,
    image:image1,
    header:"Reservation Tracking & Updates",
    text:"Tracking reservations allows us to keep both your business and customers informed about developments, ensuring meticulous management and communication of every detail. Our innovative approaches enable real-time information for a smooth and stress-free journey for both you and your customers by closely monitoring and updating each reservation."
  },
  {
    id:2,
    image:image2,
    header:"Call Center Feedback & Analysis",
    text:"Every customer interaction presents a valuable analysis opportunity. We ensure that customer satisfaction remains at its peak by deeply analyzing customer interactions to uncover meaningful insights that lead to significant improvements. Our expert analysis team works to reveal insights that contribute to meaningful enhancements, maintaining customer satisfaction"
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Reservation Support " header2="Services" text="This service is designed based on conversions to enhance customer satisfaction and loyalty. Measuring post-sale satisfaction and providing solutions to potential user issues builds trust, thereby increasing consumer loyalty." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
