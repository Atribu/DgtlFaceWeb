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
    header:"Comprehensive Google Analytics Integration",
    text:"Elevate your website's performance with our comprehensive Google Analytics setup service. Track visitor behavior, understand traffic sources, and measure key performance indicators to make data-driven decisions that will propel your business forward."
  },
  {
    id:2,
    image:image2,
    header:"Google Ads Setup & Optimization",
    text:"Jumpstart your paid marketing efforts with our Google Ads setup and optimization service. From campaign creation to keyword selection and bid management, we'll help you reach your advertising goals."
  },
  {
    id:3,
    image:image3,
    header:"Implementation of Google Tag Manager",
    text:"Simplify the management of your website tags without editing code with our Google Tag Manager implementation service. Distribute and update web analytics, conversion tracking, and remarketing tags from one centralised location for a seamless data collection process."
  },
  
  {
    id:4,
    image:image4,
    header:"Google Search Console Setup & Integration",
    text:"Setting up and integrating Google Search Console is a crucial step for any website aiming to enhance its visibility in Google search results. By submitting a sitemap and regularly monitoring indexing issues and performance metrics, we ensure your website is optimised for search engines."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Google Webtools" header2="Services" text="In the vast and ever-evolving digital landscape, harnessing the power of Google's suite of web tools is essential for maximising your online presence. At DGTLFACE, we specialise in providing professional installation services for Google Web Tools, empowering your business with invaluable insights, enhanced performance, and measurable results." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
