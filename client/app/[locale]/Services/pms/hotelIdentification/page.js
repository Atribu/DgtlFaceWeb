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
    header:"Hotel Digital Market Analysis Services",
    text:"The process begins with comprehensive analyses such as the unique aspects of your hotel, target audience, and market position. DGTLFACE ensures your hotel stands out in the market and captures the attention of target guests. Leveraging the latest techniques, we trust in our expertise to enhance your online visibility, engage more effectively with your target audience, and surpass your competitors."
  },
  {
    id:2,
    image:image2,
    header:"Hotel Concept Development Services",
    text:"Hotel concept development services involve the creation and refinement of ideas, themes, and designs for the development of a new hotel or the rebranding of an existing one. These services aim to define the unique identity, guest experience, and overall concept that will set the hotel apart in the market."
  },
  {
    id:3,
    image:image3,
    header:"Hotel Quality Determination Services",
    text:"We thoroughly evaluate your online presence, from website functionality and user experience to content relevance and search engine optimization. We elevate your digital quality, creating a robust and reputable online presence."
  },
  {
    id:4,
    image:image4,
    header:"Hotel Digital Promotion Services",
    text:"Digital promotion services enhance your hotel's online visibility and appeal. We specialize in creating effective digital campaigns that highlight the unique charm and facilities of your hotel, attracting potential guests across multiple digital platforms. Witness your hotel's digital prominence and increased guest attraction with DGTLFACE!"
  }
]
const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header="Hotel Identification" header2="Services" text="Optimize your hotel's presence in the competitive hospitality sector with specialized approaches designed to achieve strategic positions." buttonLink="/"/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
