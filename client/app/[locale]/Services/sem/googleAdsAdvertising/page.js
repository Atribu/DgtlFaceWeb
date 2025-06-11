import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"

const stepData=[
  {
    id:1,
    image:image1,
    header:"Keyword and Audience Research Services",
    text:"Keyword and audience research are fundamental components of a successful digital marketing strategy. We conduct in-depth analysis of your market, competitors, and potential customers to identify the most effective keywords and audience segments for your campaigns."
  },
  {
    id:2,
    image:image2,
    header:"Ad Copy and Visual Design Services",
    text:"We create ads that not only catch the eye but also inspire action by combining the art of persuasive copywriting with effective visual design. Our team of creative professionals specialises in creating custom ad content that resonates with audiences across all digital platforms."
  },
  {
    id:3,
    image:image3,
    header:"Ad Campaign Creation Services",
    text:"Our team ensures your message is consistently shared across all platforms by leveraging various channels and tactics, including digital advertising, social media, PPC, email marketing, and more, to increase brand awareness and generate potential leads."
  },
  
  {
    id:4,
    image:image4,
    header:"Google Ads Targeting & Budget Management",
    text:"We design your Google Ads campaigns to target specific audiences, use relevant keywords, and capture the interest of potential customers. By optimising bids for keywords and adjusting spending based on campaign performance, we manage your budget to achieve the best possible return on investment."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Google Ads Advertising" header2="Services" text="Track the effectiveness of your Google Ads campaigns by monitoring conversions, attributing sales, and optimizing your advertising ROI." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
