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

const stepData=[
  {
    id:1,
    image:image1,
    header:"Interior Showcase Shoots",
    text:"Whether it's a hotel, a stylish restaurant, or an office, highlighting the ambiance and unique features of any interior space is our specialty. Our attention-grabbing video and photography shoots, tailored to your brand's identity, will set you apart from your competitors."
  },
  {
    id:2,
    image:image2,
    header:"Exterior Showcase Shoots",
    text:"Whether it's a hotel, a stylish restaurant, or an office, highlighting the ambiance and unique features of any interior space is our specialty. Our attention-grabbing video and photography shoots, tailored to your brand's identity, will set you apart from your competitors."
  },
  {
    id:3,
    image:image3,
    header:"Video & Photography Shoots",
    text:"Our commitment to quality and creativity ensures that every project we undertake stands out. By combining artistic vision with technical expertise, we offer comprehensive video and photography services that exceed expectations and cater to diverse industry demands."
  },
  {
    id:4,
    image:image4,
    header:"360 Image and Video Shoots",
    text:"Elevate your brand with 360 showcase video and photography services that resonate with your target audience. Our video showcase services include concept development, scriptwriting, shooting, and post-production, providing informative and engaging content."
  }
]
const page = () => {
   const t = useTranslations("VideoProduction");

  const stepData = [1,2,3,4].map(i => ({
  id: i,
  image: [image1,image2,image3,image4][i-1],
  header: t(`videoprod_step_header${i}`),
  text:   t(`videoprod_step_text${i}`)
}));
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
          <SubBanner  header={t('videoprod_banner_header1')}
  header2={t('videoprod_banner_header2')}
  text={t('videoprod_banner_text')}
  buttonLink="/" buttonText={t("cta_talk_to_us")}/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
