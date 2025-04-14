import QuestionsSection from '@/app/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/components/subPageComponents/StepSection2'
import SubBanner from '@/app/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"

const stepData=[
  {
    id:1,
    image:image1,
    header:"Yandex Display Advertising Services",
    text:"We offer specialised campaigns designed to reach your target audience effectively and efficiently by harnessing Yandex's powerful visual advertising capabilities. Our service includes creating compelling visual ads that resonate with viewers, strategic placement across Yandex's extensive network, and continuous optimization for maximum return on investment."
  },
  {
    id:2,
    image:image2,
    header:"Yandex Maps Advertising Management",
    text:"Yandex Maps advertising management is a strategic service designed to increase businesses' visibility on Yandex Maps, thereby reaching potential customers more effectively. This service ensures your business stands out in search results and on Yandex Maps, differentiating you from competitors in local searches."
  },
  {
    id:3,
    image:image3,
    header:"Yandex Advertising Analysis & Reporting Services",
    text:"Our expert team meticulously tracks and analyses every aspect of your Yandex ads, from click-through rates to conversion rates, audience behaviour to interaction patterns, to provide actionable reports and recommendations. This data-driven approach enables you to invest your advertising budget wisely and maximise your return on investment."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Yandex Advertising" header2="Services" text="With our dedicated team of digital marketing specialists, we craft customised Yandex advertising campaigns designed to align with your business goals and resonate with your audience. Whether you're looking to increase website traffic, boost conversions, or raise brand awareness, we are the expert." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
