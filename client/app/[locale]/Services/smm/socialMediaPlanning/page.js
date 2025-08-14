import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import { useTranslations } from "next-intl";

const stepData=[
  {
    id:1,
    image:image1,
    header:"Community Management",
    text:"We'll actively engage with your audience, responding to comments, messages, and inquiries in a timely and professional manner. Our team will foster a sense of community around your brand, building trust and loyalty among your followers."
  },
  {
    id:2,
    image:image2,
    header:"Marketing Collaboration",
    text:"We'll identify and collaborate with relevant influencers in your industry to amplify your brand's reach and credibility. Our team will manage the entire influencer marketing process, from outreach and negotiation to campaign execution and performance tracking."
  }
]
const page = () => {
   const t = useTranslations("SocialMediaPlanning");

   const stepData = [1,2,3].map(i => ({
              id: i,
              image: [image1,image2][i-1],
              header: t(`socialmediaplanning_step${i}_header`),
              text:   t(`socialmediaplanning_step${i}_text`)
            }));
            
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner
  header={t("socialmediaplanning_subbanner_header")}
  header2={t("socialmediaplanning_subbanner_header2")}
  text={t("socialmediaplanning_subbanner_text")}
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
