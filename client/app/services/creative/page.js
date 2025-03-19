import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/components/Section6/ContactMain.jsx'

const servicesData = [
  {
    id: 1,
    title: "Graphic & Motion Graphic",
    subTitle: "Design Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 2,
    title: "UI / UX",
    subTitle: "Design Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 3,
    title: "Video & Production",
    subTitle: "Design Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },
  {
    id: 4,
    title: "Event Production",
    subTitle: "Design Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
  },

  {
    id: 5,
    title: "Corporate Gift",
    subTitle: "Design Service",
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
      <MainBanner header="Creative" text="Check out the beating heart of creativity at DGTLFACE. We don't just dream; We create symphonies of imagination. Watch your brand evolve into a fascinating fabric of brilliance."/>
      <StepSection header="Creativity & Beyond of" header2="Design" text="  Every pixel, every word has been meticulously woven into a perfect
            texture. Join the innovation symphony where dreams turn into design.
            Your vision, our craft." servicesData={servicesData}/>
      <VerticalSlider/>
      <QuestionsSection/>
      <Contact/>
    </div>
  )
}

export default page
