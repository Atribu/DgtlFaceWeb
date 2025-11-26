import StepSection2New from '@/app/[locale]/components/subPageComponents/StepSection2New'
import SubBanner from '@/app/[locale]/components/subPageComponents/SubBanner'
import VerticalSlider from '@/app/[locale]/components/subPageComponents/VerticalSlider'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import { useTranslations } from "next-intl";
import LogoListSection from '@/app/[locale]/components/subPageComponents/LogoListSection'
import QuestionsSection2 from '@/app/[locale]/components/subPageComponents/QuestionSection2'
import H2LogoSection from '@/app/[locale]/components/subPageComponents/H2LogoSection'
import StepSection2 from '@/app/[locale]/components/subPageComponents/StepSection2'
import LogoListSectionBlack from '@/app/[locale]/components/subPageComponents/LogoListSectionBlack'

const page = () => {
   const t = useTranslations("GoogleAdsAdvertising");
   const t2 = useTranslations("GoogleAdsAdvertising.h4Section");

   const stepData = [1,2].map(i => ({
     id: i,
     image: [image1,image2][i-1],
     header: t(`googleadsadvertising_step${i}_header`),
     text:   t(`googleadsadvertising_step${i}_text`)
   }));

      const stepData2 = [1,2].map(i => ({
     id: i,
     image: [image3,image4][i-1],
     header: t(`googleadsadvertising_step2_${i}header`),
     text:   t(`googleadsadvertising_step2_${i}text`)
   }));

   const cards = [
    {
      widthClass: "w-[95%] lg:w-[80%]",
      title: t2("card1title"),
      description: t2("card1description"),
    },
    {
      widthClass: "w-[95%] lg:w-[75%]",
      title: t2("card2title"),
      description: t2("card2description"),
    },
    {
      widthClass: "w-[95%] lg:w-[70%]",
      title: t2("card3title"),
      description: t2("card3description"),
    },

  ];

    const faqs = [
    {
      question: t("faq.question1"),
      answer:
       t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer:
       t("faq.answer2"),
    },
    {
       question: t("faq.question3"),
      answer:
       t("faq.answer3"),
    },

    {
    question: t("faq.question4"),
      answer:
       t("faq.answer4"),
    },

    {
    question: t("faq.question5"),
      answer:
       t("faq.answer5"),
    },


  ];
   
  return (
    <div className='flex flex-col gap-[12px] lg:gap-[50px] bg-[#080612] overflow-x-hidden items-center justify-center pb-10'>
      <div>
        <SubBanner
  header={t("googleadsadvertising_subbanner_header")}
  header2={t("googleadsadvertising_subbanner_header2")}
  header3={t("googleadsadvertising_subbanner_header3")}
  text={t("googleadsadvertising_subbanner_text")}
   text2={t("googleadsadvertising_subbanner_text2")}
  buttonLink="/"
  buttonText={t("cta_talk_to_us")}
/>
      <StepSection2New data={stepData} header={t("googleadsadvertising_stepheader")} text={t("googleadsadvertising_steptext")} />
      </div>


      <div>
        <StepSection2 data={stepData2}  />

      <H2LogoSection  title1={t("googleadsadvertising_step5_header")}
       text1={t("googleadsadvertising_step5_text")}
        title2={t("googleadsadvertising_step6_header")}
         text2={t("googleadsadvertising_step6_text")}/>
      </div>

    <div>
         <LogoListSectionBlack
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
    />
      <VerticalSlider page="GoogleAdsAdvertising" itemCount={3}/>
    </div>
     <QuestionsSection2 variant="light" faqs={faqs} />
    </div>
  )
}

export default page
