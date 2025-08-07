import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'

const servicesData = [
  {
    id: 1,
    title: "Call 4 Languages",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
       buttonLink:"/Services/callcenter/callLanguages"
  },
  {
    id: 2,
    title: "Reservation Support",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
      buttonLink:"/Services/callcenter/reservationSupport"
  },
  {
    id: 3,
    title: "Multiple Channels",
    subTitle: "Tracking Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
      buttonLink:"/Services/callcenter/multipleChannels"
  },
  {
    id: 4,
    title: "Contract Management",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
      buttonLink:"/Services/callcenter/contractManagement"
  },

  {
    id: 5,
    title: "Call Analys",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/callcenter/callPerformance"
  },
];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[48px] md:gap-[75px] lg:gap-[150px] overflow-hidden'>
      <MainBanner header="CallCenter" text="Call center service can be a good way to increase your company's reputation and brand perception. Moreover, as DGTLFACE, we promise to increase the perception of professionalism on your brand by providing you with call reception service in 4 languages."/>
      <StepSection header="Powerful Team in " header2="All Areas" text="We provide fast and effective interventions to your customer problems with our call center service and talented call center team." servicesData={servicesData}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
