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
    header:"Content Strategy Development",
    text:"We'll collaborate with you to develop a comprehensive content strategy aligned with your brand's goals and target audience. Our team will identify key themes, messaging strategies, and content formats to guide our content creation efforts."
  },
  {
    id:2,
    image:image2,
    header:"Creative Content Creation",
    text:"We'll produce engaging and visually stunning content, including graphics, images, videos, GIFs, and infographics, that captivates your audience and communicates your brand's message effectively."
  },
  {
    id:3,
    image:image3,
    header:"Copywriting & Caption Creation",
    text:"Our expert copywriters will craft compelling captions and copy that complement your visuals and drive engagement. Whether it's witty captions, informative descriptions, or persuasive calls to action, we'll ensure that your content resonates with your audience and inspires action."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Social Media Content" header2="Services" text="We'll produce content that encourages interaction and engagement, such as polls, quizzes, contests, and user-generated content campaigns, fostering meaningful connections with your audience and driving community growth." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
