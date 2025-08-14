import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import {useTranslations} from 'next-intl';

// const stepData=[
//     {
//       id:1,
//       image:image1,
//       header:"Web Site Design",
//       text:"Effective website designs offer visitors a clean interface and easy navigation. For SEO compatibility, focus on keyword-driven content and fast loading times. Not only does this improve user experience, but it also helps rank higher in search engines. In short, a successful website should combine aesthetics with functionality, being both user and search engine friendly."
//     },
//     {
//       id:2,
//       image:image2,
//       header:"UI&UX Compatible Design",
//       text:"UI and UX Design Services improve your digital products both aesthetically and functionally by putting user experience at the centre. While a good UI (User Interface) design makes it easier for users to interact with your product, UX (User Experience) design ensures that this interaction is pleasant and smooth. These services help make your websites and mobile applications user-friendly, accessible and SEO-friendly. By following modern design trends and best usability practices, it strengthens your brand's digital presence and increases user satisfaction."
//     },
//     {
//       id:3,
//       image:image3,
//       header:"Conversion Probability & Analysis",
//       text:"A thoughtful UX design, combined with persuasive UI elements, can lead to increased conversion rates. Whether your goal is to drive sales, capture leads, or encourage specific actions, an optimised design contributes to achieving those objectives."
//     },
//     {
//       id:4,
//       image:image4,
//       header:"Customer Retention",
//       text:"A well-designed and user-friendly interface reduces bounce rates, keeping users engaged and encouraging them to explore your platform further. This is crucial for retaining visitors and converting them into customers."
//     }
//   ]
const page = () => {
  const t = useTranslations("UiUxDesign");
  
  const stepData = [1,2,3,4].map(i => ({
  id: i,
  image: [image1,image2,image3,image4][i-1],
  header: t(`uiux_step_header${i}`),
  text:   t(`uiux_step_text${i}`)
}));
  
  
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>

      <SubBanner header={t("uiux_banner_header1")} header2={t("uiux_banner_header2")} text={t("uiux_banner_text")} buttonLink="/" buttonText={t("cta_talk_to_us")}/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
