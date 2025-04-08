import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/components/Section6/ContactMain.jsx'

const servicesData = [
  {
    id: 1,
    title: "Social Media Planning",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/smm/socialMediaPlanning"
  },
  {
    id: 2,
    title: "Social Media Management",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/smm/socialMediaManagement"
  },
  {
    id: 3,
    title: "Social Media Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/smm/socialMediaReporting"
  },
  {
    id: 4,
    title: "Social Media Content",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/smm/socialMediaContent"
  },

  {
    id: 5,
    title: "Social Media Analysis",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/smm/socialMediaAnalysis"
  },
];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[75px] lg:gap-[150px] overflow-hidden'>
      <MainBanner header="Social Media Marketing (SMM)" text="Social Media Marketing (SMM) Services designed to help you unlock the full potential of social media for your business. Our customised SMM strategy tailored to your unique goals and objectives."/>
      <StepSection header="Content" header2="Creation" text=" We'll develop a strategic social media plan aligned with your business objectives, identifying key target audiences, platforms, and messaging strategies. Our team will create engaging and relevant content, including posts, images, videos, and stories, designed to resonate with your audience and drive engagement." servicesData={servicesData}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
