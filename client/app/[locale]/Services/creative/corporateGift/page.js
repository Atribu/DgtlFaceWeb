import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image3.png"
import {useTranslations} from 'next-intl';

const stepData=[
  {
    id:1,
    image:image1,
    header:"Corporate Promotional Material Service",
    text:"These materials play a crucial role in creating a positive and consistent brand image and effectively communicating with the target audience. Here are key components and benefits of corporate promotional material services."
  },
  {
    id:2,
    image:image2,
    header:"Corparate Catalogue Design Service",
    text:"Our team of experienced designers not only captures the essence of your brand but also focuses on creating customized catalogue that not only capture the essence of your brand but also inform your target audience."
  },
  {
    id:3,
    image:image3,
    header:"Hotel Concept Design Support Service",
    text:"We collaborate closely to develop unique concepts that reflect the identity, location, and target market of your hotel. This ensures that every aspect of the design contributes to a consistent and memorable guest experience."
  },
  {
    id:4,
    image:image4,
    header:"360 Image and Video Shoots",
    text:"Elevate your brand with 360 showcase video and photography services that resonate with your target audience. Our video showcase services include concept development, scriptwriting, shooting, and post-production, providing informative and engaging content."
  }
]
const page = () => {
  const t = useTranslations("CorporateGift");

  const stepData = [1,2,3,4].map(i => ({
  id: i,
  image: [image1, image2, image3, image4][i-1],
  header: t(`corporategift_step_header${i}`),
  text:   t(`corporategift_step_text${i}`)
}));

  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner header={t('corporategift_banner_header1')}
  header2={t('corporategift_banner_header2')}
  text={t('corporategift_banner_text')}
  buttonLink="/" buttonText={t("cta_talk_to_us")}/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
