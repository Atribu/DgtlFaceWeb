import QuestionsSection from '@/app/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/components/subPageComponents/StepSection2'
import SubBanner from '@/app/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "../../../../app/components/subPageComponents/images/image1.png"
import image2 from "../../../../app/components/subPageComponents/images/image2.png"
import image3 from "../../../../app/components/subPageComponents/images/image3.png"
import image4 from "../../../../app/components/subPageComponents/images/image4.png"

const stepData=[
  {
    id:1,
    image:image1,
    header:"Logo Design",
    text:"The most important starting point in quality branding is logodor. The first impression is very important and the first element of your website, business card or signboard that catches the eye is the logo."
  },
  {
    id:2,
    image:image2,
    header:"Brand Guidline",
    text:"We are trying to offer you a great road map created by our expert team who organises your brand. Scroll through the pages to discover the principles, colours, fonts and images that make up the unique fabric of your brand identity."
  },
  {
    id:3,
    image:image3,
    header:"Social Media Graphics",
    text:"Transform likes into meaningful engagement with our social media graphics. We don't just design visuals; we create experiences that resonate with your audience."
  },
  {
    id:4,
    image:image4,
    header:"Creating & Editing Motionography",
    text:"Motionography blends motion graphics and animation to create captivating content for digital platforms such as websites and social media. The process begins with conceptualisation, defining the project's purpose and target audience. Storyboard and script writing outline the narrative, followed by design using tools such as Adobe After Effects and Blender. Animation and sound design bring the visuals to life."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
          <SubBanner header="Graphic &  Motion" header2="Graphic Design Service" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad ut aliquip ex ea commodo consequat." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
