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
    header:"Comprehensive SEO Performance",
    text:"We'll conduct a detailed audit of your website's SEO performance, examining on-page factors, technical issues, and off-page factors to identify areas for improvement. We'll analyze your website's keyword rankings and search visibility, identifying high-value keywords and opportunities for optimization."
  },
  {
    id:2,
    image:image2,
    header:"Competitor Analysis",
    text:"We'll assess your competitors' SEO strategies and performance, benchmarking your website against industry leaders and identifying areas where you can gain a competitive edge."
  },
  {
    id:3,
    image:image3,
    header:"Technical SEO Assessment",
    text:"We'll evaluate your website's technical infrastructure, including site speed, mobile-friendliness, and crawlability, to ensure it meets best practices and search engine guidelines. We'll analyze your website's backlink profile, identifying high-quality backlinks, toxic links, and opportunities for link building to improve your website's authority and trustworthiness."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="SEO Reporting" header2="Services" text="In the dynamic world of digital marketing, understanding your website's performance in search engine results is essential for staying ahead of the competition. Our expert team of SEO specialists will conduct a thorough analysis of your website's performance, examining key metrics such as keyword rankings, organic traffic, backlink profile, and user engagement." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
