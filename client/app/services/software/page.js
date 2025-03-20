import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/components/Section6/ContactMain.jsx'

const servicesData = [
  {
    id: 1,
    title: "Website & Software",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 2,
    title: "Server Management",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 3,
    title: "PDPA Compliance",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 4,
    title: "Website Maintenance",
    subTitle: "Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },

  {
    id: 5,
    title: "CMS Installation",
    subTitle: "Service",
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
      <MainBanner header="IT and Software" text="Involve your brand in the art of web development with our expert software developers. From stylish interfaces to robust functionality, we create digital experiences that go beyond the ordinary. Take a firm step into the digital world with our code mastery."/>
      <StepSection header="Code Craftsmanship for" header2="Digital Excellence" text=" At DGTLFACE, we don't just create websites; We create digital masterpieces that tell your brand story, fascinate your customers and drive results. Join us to shape your brand's online presence." servicesData={servicesData}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
