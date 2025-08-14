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
    header:"Concert Promotion Campaigns",
    text:"DGTLFACE offers a dynamic approach to market your concerts in the digital realm. We create online solutions to enhance visibility and interaction for your concerts. By integrating various digital marketing strategies such as social media advertising and content marketing, we reach your target audience effectively."
  },
  {
    id:2,
    image:image2,
    header:"Digital Promotion Campaigns for Parties",
    text:"We ensure your event stands out in the digital space with the latest digital marketing strategies. With a unique approach, from exciting nightclub events to private parties, we capture the attention of your event's target audience. From promotional videos to interactive posts, our content is designed to highlight key points of interest."
  },
  {
    id:3,
    image:image3,
    header:"Digital Promotion Campaigns for Events",
    text:"Special Event Digital Promotion Services are tailored solutions designed to maximize the online visibility, engagement, and success of a particular event. Whether it's a product launch, conference, concert, or any other special occasion, leveraging digital channels is crucial for reaching and engaging the target audience."
  },
  {
    id:4,
    image:image4,
    header:"360 Image and Video Shoots",
    text:"Elevate your brand with 360 showcase video and photography services that resonate with your target audience. Our video showcase services include concept development, scriptwriting, shooting, and post-production, providing informative and engaging content."
  }
]
const page = () => {
  const t = useTranslations("EventProduction");

  const stepData = [1,2,3,4].map(i => ({
  id: i,
  image: [image1,image2,image3,image4][i-1],
  header: t(`eventprod_step_header${i}`),
  text:   t(`eventprod_step_text${i}`)
}));
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
     <SubBanner
  header={t('eventprod_banner_header1')}
  header2={t('eventprod_banner_header2')}
  text={t('eventprod_banner_text')}
  buttonLink="/"
  buttonText={t('cta_talk_to_us')}
/>
      <StepSection2 data={stepData}/>
      <VerticalSlider/>
      <QuestionsSection color="#fff"/>
    </div>
  )
}

export default page
