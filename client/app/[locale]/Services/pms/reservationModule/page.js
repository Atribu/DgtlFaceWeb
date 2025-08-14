import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations } from "next-intl";

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
  const t = useTranslations("ReservationModule");

     const stepData = [1,2,3].map(i => ({
    id: i,
    image: [image1,image2,image3][i-1],
    header: t(`reservationmodule_step${i}_header`),
    text:   t(`reservationmodule_step${i}_text`)
  }));

  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header={t("reservationmodule_subbanner_header")} header2={t("reservationmodule_subbanner_header2")} text={t("reservationmodule_subbanner_text")} buttonLink="/" buttonText={t("cta_talk_to_us")}/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
