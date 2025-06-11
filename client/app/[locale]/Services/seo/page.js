import React from 'react'
import MainBanner from '../../components/subPageComponents/MainBanner'
import StepSection from '../../components/subPageComponents/StepSection'
import QuestionsSection from '../../components/subPageComponents/QuestionsSection'
import VerticalSlider from '../../components/subPageComponents/VerticalSlider'
import Contact from '@/app/[locale]/components/Section6/ContactMain.jsx'

const servicesData = [
  {
    id: 1,
    title: "On-Page SEO",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
    buttonLink:"/Services/seo/onpageSeo"
  },
  {
    id: 2,
    title: "Off-Page SEO",
    subTitle: "Deign Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/offpageSeo"
  },
  {
    id: 3,
    title: "Technical SEO",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/technicaSeo"
  },
  {
    id: 4,
    title: "Original Copywriting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/originalCopywriting"
  },

  {
    id: 5,
    title: "SEO Reporting",
    subTitle: " Service",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Creating and Editing Motionography",
    ],
     buttonLink:"/Services/seo/seoReporting"
  },
];

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[75px] lg:gap-[150px] overflow-hidden'>
      <MainBanner header="Search Engine Optimization (SEO)" text="Our comprehensive approach to SEO includes keyword research, on-page optimization, content strategy, and technical SEO to ensure your website consistently ranks higher in target search results."/>
      <StepSection header="Head up on" header2="Search" text="  Evolve your online visibility and organic traffic with Search Engine Optimization (SEO) services. DGTLFACE ensures your website remains visible to competitive and ideal customers by staying updated with search engine algorithm updates." servicesData={servicesData}/>
      <VerticalSlider/>
      <QuestionsSection color="#140F25"/>
      <Contact/>
    </div>
  )
}

export default page
