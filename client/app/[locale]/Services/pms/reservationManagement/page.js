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
    header:"Reservation Management Solutions",
    text:"We provide a user-friendly online booking platform that allows customers to make reservations seamlessly from any device, 24/7. Our intuitive reservation dashboard gives you a comprehensive overview of all bookings, allowing you to manage availability, allocate resources, and track reservations in real-time."
  },
  {
    id:2,
    image:image2,
    header:"Flexible Booking Options",
    text:"Accommodate various booking types, including single or multiple-day reservations, recurring appointments, group bookings, and more, with ease. Seamlessly process payments, deposits, or pre-authorizations directly within the reservation management system, enhancing convenience for both you and your customers."
  },
  {
    id:3,
    image:image3,
    header:"Dedicated Support & Training",
    text:"Our expert support team is available to assist with setup, training, and ongoing support, ensuring a smooth and seamless transition to our reservation management system."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Reservation" header2="Management Services" text="Our tailored solutions are crafted to meet the unique needs of your business, whether you're a hotel, restaurant, event venue, or service provider. From online bookings to managing reservations, our services cover every aspect of the reservation process, allowing you to focus on delivering outstanding service to your customers." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
