import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"

const stepData=[
  {
    id:1,
    image:image1,
    header:"Vidoe Ads",
    text:"Video ads are the cornerstone of captivating digital marketing strategies, engaging target audiences with dynamic storytelling and compelling visuals. Leveraging the power of motion and sound to convey your message, these ads prompt action from your target audience."
  },
  {
    id:2,
    image:image2,
    header:"Visual Ads",
    text:"Also known as banner ads, visual advertising aims to increase brand awareness and drive clicks by combining creativity with strategic placement. DGTLFACE specializes in creating visually striking banner ads that capture attention across the web."
  },
  {
    id:3,
    image:image3,
    header:"Shopping Ads",
    text:"With DGTLFACE's shopping ads, your products are showcased perfectly, combining clear visuals, competitive prices, and essential product details to facilitate shopping directly within the search experience for your customers."
  },
  
  {
    id:4,
    image:image4,
    header:"Search Network Ads",
    text:"Targeting specific keywords, DGTLFACE ensures your brand is visible when potential customers search for your products or services. This strategic placement not only ensures your brand is seen but also searched for, maximizing conversion opportunities."
  },
  {
    id:5,
    image:image5,
    header:"Social Media Ad Management",
    text:"We specialize in managing social media ads on platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok. DGTLFACE leverages targeted campaigns and broad outreach strategies to effectively connect your brand with global audiences."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Advertising" header2="Management Services" text="In today's digital world, making your mark means more than just being online. This is where we come in. Our digital marketing and advertising management services are designed to ensure that your brand is not only present but also stands out in the digital environment. The important thing is to be in the right place, at the right time, with the right message." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
