import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import { useTranslations } from "next-intl";

const stepData=[
  {
    id:1,
    image:image1,
    header:"OTA Marketing Strategies",
    text:"All our approaches, from optimised content to competitive pricing and promotions, are focused on maximizing your presence on OTA platforms. We implement promotional strategies such as timed campaigns and package offers to attract more guests. The first step in creating a marketing strategy is identifying and understanding your target audience."
  },
  {
    id:2,
    image:image2,
    header:"Hotel Contract Management",
    text:"We focus on ensuring that each contract aligns with your goals while securing conditions that enhance operational efficiency and financial performance. Leave the management and optimization of numerous agreements, including vendor contracts and OTA contracts, necessary for your hotel's operations, to our expertise."
  },
  {
    id:3,
    image:image3,
    header:"Search Engine Review Management",
    text:"We understand the impact of customer feedback on your digital footprint and diligently work to create a positive online image."
  }
]
const page = () => {
  const t = useTranslations("OtaContract");

  const stepData = [1,2,3].map(i => ({
  id: i,
  image: [image1,image2,image3][i-1],
  header: t(`otacontract_step${i}_header`),
  text:   t(`otacontract_step${i}_text`)
}));
  
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner
  header={t("otacontract_subbanner_header")}
  header2={t("otacontract_subbanner_header2")}
  text={t("otacontract_subbanner_text")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
