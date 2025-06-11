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
    header:"Website Traffic Analysis Service",
    text:"We gather all potentially meaningful data from many channels. The more data we have, the more meaningful text we get, but we gather and process data containing meaningful readings selected by our expert team, not randomly collected data."
  },
  {
    id:2,
    image:image2,
    header:"Website Performance Analysis Service",
    text:"All the data we gather is compared with proven and up-to-date data. The data we have is made suitable for comparison and new data is obtained by comparing the correct points. New data is reviewed by DGTLFACE’s experts."
  },
  {
    id:3,
    image:image3,
    header:"Presentation",
    text:"Dive deep into your data landscape with our in-depth analysis and customised reporting. Every report is crafted to address your unique business requirements, offering a comprehensive understanding of your performance metrics. Finally we present it to you."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Website Reporting" header2="Services" text="Experience the power of strategic analysis through our visual reports. We don't just present data; we visualise it in a way that resonates with your business goals. Let's turn complex data into clear, legible visuals." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
