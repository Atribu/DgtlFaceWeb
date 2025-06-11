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
    header:"User Behavior Analysis",
    text:"Every visitor to your site has a story, a goal, and a set of preferences. Through DGTLFACE's user behaviour analysis, we decode these stories by meticulously examining user actions."
  },
  {
    id:2,
    image:image2,
    header:"Web Traffic Source Analysis",
    text:"Understanding where your traffic comes from is as important as knowing it exists. Our web traffic source analysis delves deep into the origins of your site's visitors, whether they come from search engines, social media platforms, direct links, or paid campaigns."
  },
  {
    id:3,
    image:image3,
    header:"Shopping Ads",
    text:"By identifying elements that increase interaction and conversions, we provide clear recommendations for improvement. Our goal-oriented analysis ensures that every aspect of your site aligns with your business objectives, maximising return on investment and fostering growth."
  }
]

const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Web Traffic Tracking" header2="Services" text="We strategically acquire targeted web traffic through a blend of proven methodologies, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and content optimization. Each strategy is meticulously tailored to your unique goals." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
