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
    header:"Platform Selection & Recommendation",
    text:"We help you choose the right CMS platform based on your requirements, budget, and technical expertise, ensuring a perfect fit for your website."
  },
  {
    id:2,
    image:image2,
    header:"Installation & Configuration",
    text:"Our technicians handle the entire installation process, setting up and configuring the CMS to meet your specifications and preferences."
  },
  {
    id:3,
    image:image3,
    header:"Theme & Plugin Integration",
    text:"We integrate custom themes and plugins to enhance the design and functionality of your website, ensuring a seamless user experience and optimal performance."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="CMS Installation " header2="Services" text="In the dynamic world of online presence, having a robust Content Management System is the cornerstone of success. At DGTLFACE, we specialize in providing professional CMS installation services, empowering your website with the tools and flexibility it needs to thrive in the digital realm." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
