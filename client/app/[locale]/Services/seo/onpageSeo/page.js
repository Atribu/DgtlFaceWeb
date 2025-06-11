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
    header:"Keyword Research & Analysis",
    text:"Uncover the potential of your online content with our keyword research and analysis services. Our services involve in-depth research of your competitors and target audience using professional SEO tools to uncover highly relevant keywords and keyword phrases with high search volumes."
  },
  {
    id:2,
    image:image2,
    header:"On-Page URL Optimization",
    text:"We prioritize criteria such as avoiding unnecessary parameters in your website's URL structure, incorporating target keywords, and including category information when necessary. At DGTLFACE, we understand the importance of strategic URL optimization for your online visibility."
  },
  {
    id:3,
    image:image3,
    header:"Web Optimization & Performance Enhancement",
    text:"Our efforts focus on strategies such as speeding up loading times, compressing images, minimizing code, and efficient caching techniques to ensure smooth operation of your site across all devices and browsers."
  },
  
  {
    id:4,
    image:image4,
    header:"Local Optimization Initiatives",
    text:"Our local SEO strategy enhances your presence in local search results and ensures prominence within the communities you serve. We tailor your content to include local keywords and significant points, making it more relevant to target audiences."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="On-Page SEO" header2="Services" text="Improving your website's performance and user experience is closely associated with effective on-page optimization efforts. We conduct comprehensive analyses to identify and rectify issues such as broken links, slow loading times, and unoptimized content." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
