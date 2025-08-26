import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image-1.png"
import image2 from "./images/image-2.png"
import image3 from "./images/image-3.png"
import { useTranslations } from "next-intl";

const stepData=[
  {
    id:1,
    image:image1,
    header:"Prefessional Call Answering",
    text:"There are very few ways to truly do a job right, and missed opportunities may not be compensated for when things are not done correctly. To avoid this risk, you must always perform work with the highest care and quality. A professional, timely and on-site team is waiting for you."
  },
  {
    id:2,
    image:image2,
    header:"International Call Center Service",
    text:"Let us answer your calls for the countries you serve with our international call greeting service. Increase your call quality as a company that provides international service with a professional team that provides quality service in 4 languages."
  },
  {
    id:3,
    image:image3,
    header:"Dijital iletişim Strateji Hizmeti",
    text:"We collaborate with you to determine the expectations and communication strategies tailored to your business goals and target audience. Transform your online presence into a strategically designed dynamic interaction platform, elevating brand awareness with each interaction and establishing effective connections with your target audience."
  }
]
const page = () => {
  const images = [image1, image2, image3].filter(Boolean);
  const t = useTranslations("CallLanguages");

  const stepData = [1,2,3].map(i => ({
  id: i,
  image: images[i - 1] || null, // 3. yoksa null
  header: t(`calllanguages_step${i}_header`),
  text:   t(`calllanguages_step${i}_text`)
}));
    
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header={t("calllanguages_subbanner_header")} header2={t("calllanguages_subbanner_header2")} text={t("calllanguages_subbanner_text")} buttonLink="/" buttonText={t("cta_talk_to_us")}/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
