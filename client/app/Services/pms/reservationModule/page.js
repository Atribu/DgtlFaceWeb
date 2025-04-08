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
    header:"Reservation Module Services",
    text:"Our expert team will work closely with you to develop a custom reservation module that seamlessly integrates with your website or application. Whether you're in the hospitality industry, offering appointments for services, or managing event bookings, our solutions are designed to meet your specific needs."
  },
  {
    id:2,
    image:image2,
    header:"Customised Booking Experience",
    text:"Hotel concept development services involve the creation and refinement of ideas, themes, and designs for the development of a new hotel or the rebranding of an existing one. These services aim to define the unique identity, guest experience, and overall concept that will set the hotel apart in the market."
  },
  {
    id:3,
    image:image3,
    header:"Real Time Availability",
    text:"Customers can check availability and make bookings in real-time, reducing the risk of double bookings and maximizing your capacity. We'll integrate secure payment gateways, allowing customers to make deposits or full payments online, enhancing convenience and reducing administrative overhead."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Reservation" header2="Module Services" text="In today's fast-paced world, convenience is key, especially when it comes to booking services or making reservations. At DGTLFACE, we specialise in providing tailored Reservation Module Services to streamline your booking process and enhance customer satisfaction." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
