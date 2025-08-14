import QuestionsSection from '@/app/[locale]/components/subPageComponents/QuestionsSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import { useTranslations } from "next-intl";

const stepData=[
  {
    id:1,
    image:image1,
    header:"Backlinking Efforts",
    text:"Our backlinking strategy focuses on acquiring high-quality and relevant links from trusted sources in your industry. Our efforts are meticulously planned and executed to obtain targeted traffic, increase domain authority, and contribute to your digital marketing success."
  },
  {
    id:2,
    image:image2,
    header:"Social Media Sharing Optimizations",
    text:"We specialise in crafting posts and interactions that tell your brand story, engage your target audience, and create shares and interactions. From striking visuals and captivating videos to informative articles and interactive polls, each piece is designed to capture the interest of your audience."
  },
  {
    id:3,
    image:image3,
    header:"Brand Collaborations & Online Review Management",
    text:"We actively monitor online reviews on platforms, engage with them, and help you build trust with your audience. DGTLFACE creates a comprehensive strategy that elevates your brand's online reputation, encourages communities, and embraces long-term loyalty and growth."
  },
  
  {
    id:4,
    image:image4,
    header:"Blog, Forum, Content Marketing",
    text:"Blog, forum, and content marketing are integral components of digital marketing strategies aimed at engaging audiences, building brand awareness, and driving traffic to websites"
  }
]
const page = () => {
  const t = useTranslations("OffpageSeo");

  const stepData = [1,2,3,4].map(i => ({
  id: i,
  image: [image1,image2,image3,image4][i-1],
  header: t(`offpage_step${i}_header`),
  text:   t(`offpage_step${i}_text`)
}));

  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612] overflow-hidden'>
      <SubBanner
  header={t("offpage_subbanner_header")}
  header2={t("offpage_subbanner_header2")}
  text={t("offpage_subbanner_text")}
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
