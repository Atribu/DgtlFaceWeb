import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/components/Section6/ContactMain.jsx'

const servicesData = [
  {
    id: 1,
    title: "Hotel Identification",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/pms/hotelIdentification"
  },
  {
    id: 2,
    title: " Ota Contract Management",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/pms/otaContract"
  },
  {
    id: 3,
    title: "Web Payment System ",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/pms/webPayment"
  },
  {
    id: 4,
    title: "Reservation Module",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
       buttonLink:"/Services/pms/reservationModule"
  },

  {
    id: 5,
    title: "Reservation Management",
    subTitle: "Design Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/pms/reservationManagement"
  },
];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[75px] lg:gap-[150px] overflow-hidden'>
      <MainBanner header="PMS&OTA Setup" text="Streamline your operations with DGTLFACE's hotel management system (PMS) and online travel agency (OTA) services. Our integrated approach enhances cross-platform visibility by optimising your online presence and reservations, making operations more efficient."/>
      <StepSection header="Set-up and " header2="Optimising" text="Discover our comprehensive solution designed to simplify and strengthen your accommodation operations, corporate management, and online travel agency interactions." servicesData={servicesData}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
