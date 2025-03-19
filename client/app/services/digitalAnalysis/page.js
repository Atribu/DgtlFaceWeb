import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/components/Section6/ContactMain.jsx'

const servicesData = [
  {
    id: 1,
    title: "Website Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 2,
    title: "Online Market Research",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 3,
    title: "Digital Sales Analysis",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 4,
    title: "Advertising Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },

  {
    id: 5,
    title: "Call Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[75px] lg:gap-[150px] overflow-hidden'>
      <MainBanner header="Digital Analysis & Reporting" text="Digital Analysis and Reporting Services is a leading provider of data-driven solutions for businesses of all sizes and industries. This system helps clients transform their data into actionable insights, optimize their performance, and achieve their strategic goals."/>
      <StepSection header="Comprehensive Range of" header2="Services" text=" We collects and integrates data from various sources, such as web analytics, social media, Google, OTA, and more. We ensures the quality, accuracy, and security of the data, and prepares it for analysis." servicesData={servicesData}/>
      <VerticalSlider/>
      <QuestionsSection/>
      <Contact/>
    </div>
  )
}

export default page
