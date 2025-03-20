import QuestionsSection from '@/app/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/components/subPageComponents/StepSection2'
import SubBanner from '@/app/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image3.png"

const stepData=[
  {
    id:1,
    image:image1,
    header:"Concert Promotion Campaigns",
    text:"DGTLFACE offers a dynamic approach to market your concerts in the digital realm. We create online solutions to enhance visibility and interaction for your concerts. By integrating various digital marketing strategies such as social media advertising and content marketing, we reach your target audience effectively."
  },
  {
    id:2,
    image:image2,
    header:"Digital Promotion Campaigns for Parties",
    text:"We ensure your event stands out in the digital space with the latest digital marketing strategies. With a unique approach, from exciting nightclub events to private parties, we capture the attention of your event's target audience. From promotional videos to interactive posts, our content is designed to highlight key points of interest."
  },
  {
    id:3,
    image:image3,
    header:"Digital Promotion Campaigns for Events",
    text:"Special Event Digital Promotion Services are tailored solutions designed to maximize the online visibility, engagement, and success of a particular event. Whether it's a product launch, conference, concert, or any other special occasion, leveraging digital channels is crucial for reaching and engaging the target audience."
  },
  {
    id:4,
    image:image4,
    header:"360 Image and Video Shoots",
    text:"Elevate your brand with 360 showcase video and photography services that resonate with your target audience. Our video showcase services include concept development, scriptwriting, shooting, and post-production, providing informative and engaging content."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Event Production" header2="Service" text="We manage your events to high standards in every aspect, utilizing the latest technology. We address all technical aspects of event production, including sound, lighting, video, and staging." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
