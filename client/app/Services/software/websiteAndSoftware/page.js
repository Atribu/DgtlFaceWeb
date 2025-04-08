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
    header:"Next.js",
    text:"To keep your feet on the ground in the digital world, you need to use new generation languages. Do not use prehistoric languages for the IT sector and see the difference of a website written in the most up-to-date language of today's world."
  },
  {
    id:2,
    image:image2,
    header:"Fast Loading",
    text:"A fast loading website is the most important thing for a first impression. Unless a great-looking website loads quickly, your entire process will suffer. A website that does not load quickly reduces sales rates and loses customers. As DGTLFACE, we offer all of these together."
  },
  {
    id:3,
    image:image3,
    header:"Code Symphony",
    text:"Craft a symphony of code that harmonizes seamlessly with user experience. Our web development solutions go beyond functionality; they create a digital melody that resonates with your audience. Join us in composing a code symphony for your brand."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Website & Software" header2="Services" text="Involve your brand in the art of web development with our expert software developers. From stylish interfaces to robust functionality, we create digital experiences that go beyond the ordinary. Take a firm step into the digital world with our code mastery." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
