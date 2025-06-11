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
    header:"Target Audience Analysis",
    text:"Gone are the days of one-size-fits-all marketing. In today's hyper-connected world, personalization is paramount, and relevance reigns supreme. Our team of seasoned analysts doesn't just scratch the surface; they dive deep into the psyche of your audience, unraveling insights that illuminate their desires, challenges, and aspirations."
  },
  {
    id:2,
    image:image2,
    header:"Detecting & Determining Effective Titles & Sub-Headings",
    text:"We aim to improve the website structure, internal links and navigation to improve user experience and facilitate easy access to important content. Optimizing the technical aspects of the website leads to higher search engine rankings, increased visibility and organic traffic, and DGTLFACE is ready to do this for you."
  },
  {
    id:3,
    image:image3,
    header:"Revision & Quality Control Work",
    text:"In the dynamic world of content creation, perfection isn't just a goal; it's an ongoing journey. At DGTLFACE, we understand that even the most meticulously crafted content can benefit from a discerning eye and a commitment to excellence. Introducing our Revision and Quality Control services."
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Original Copywriting" header2="Services" text="Introducing our SEO-Compatible Copywriting Service – where creativity meets strategy to craft compelling content that not only captivates your audience but also climbs the ranks of search engine results. Our team of seasoned wordsmiths doesn't just string together sentences; they sculpt narratives that speak directly to your audience while appeasing the algorithms that govern the digital landscape." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
