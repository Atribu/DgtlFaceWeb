import React from 'react'
import Section1 from "./Section1/Section1.jsx"
import Section2 from './Section2/Section2.jsx'
import Section3 from './Section3/Section3.jsx'
import Section4 from './Section4/Section4.jsx'
import Section5 from './Section5/Section5.jsx'
import ContactMain from '../components/Section6/ContactMain.jsx'
import ServicesGridSection from './components/ServicesGridSection.jsx'
import DualHighlightSection from '../components/subPageComponents/DualHighlightSection.jsx'
import QuestionsSection2 from '../components/subPageComponents/QuestionSection2.jsx'
import { useTranslations } from "next-intl";
import MainBanner from '../components/subPageComponents/MainBanner.jsx'
import LogoListSection from '../components/subPageComponents/LogoListSection.jsx'
import StepSection from '../components/subPageComponents/StepSection.jsx'
import Section3Long from './Section3/Section3Long.jsx'

const page = () => {
  const t = useTranslations("ServicesPage");
  const t2 = useTranslations("ServicesPage.h4Section");

  const cards = [
    {
      widthClass: "w-[80%]",
      title: t2("card1title"),
      description: t2("card1description"),
    },
    {
      widthClass: "w-[75%]",
      title: t2("card2title"),
      description: t2("card2description"),
    },
    {
      widthClass: "w-[70%]",
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
      question:
       t("faq.question2"),
      answer:
        t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer:
          t("faq.answer3"),
    },

    {
      question:t("faq.question4"),
      answer:
        t("faq.answer4"),
    },

    {
      question: t("faq.question5"),
      answer:
        t("faq.answer5"),
    },

  ];

  const items = [
    {
      title: t("h2Section.title1"),
      text:  t("h2Section.text1"),
    },
    {
      title: t("h2Section.title2"),
      text:  t("h2Section.text2"),
    },
    {
      title: t("h2Section.title3"),
      text:  t("h2Section.text3"),
    },
    {
      title: t("h2Section.title4"),
      text:  t("h2Section.text4"),
    },
  ];

   const servicesData = [1,2,3,4,5].map(i => ({
  id: i,
  title: t(`servicesData.title${i}`),
  subTitle: t(`servicesData.item${i}_1`),
  text: t(`servicesDataitem${i}_1`),
  features: [1,2,3,4].map(j => t(`servicesData.item${i}_1`)),
  buttonLink: [
    "/Services/sem/advertisingManagement",
    "/Services/sem/webTraffic",
    "/Services/sem/googleWebtools",
    "/Services/sem/yandexAdvertising",
    "/Services/sem/googleAdsAdvertising"
  ][i-1]
}));

  return (
    <div className='flex flex-col overflow-hidden gap-[48px] md:gap-[75px] lg:gap-[150px]'>
      {/* <Section1 /> */}
      <MainBanner header={t("servicespage_s1_text1")} span={t("servicespage_s1_span1")} text={t("servicespage_s1_text2")} buttonText={t("servicespage_s1_button1")}/>
     <DualHighlightSection items={items} />
      <Section2 />
     
      <ServicesGridSection/>
     <div className='hidden md:flex'>
     <Section3Long page="ServicesPage"/>
     </div>
      <LogoListSection
      introTitle={t2("header")}
      introSubtitlePrefix="DGTLFACE"
      introSubtitle={""}
      introDescription={""}
      cards={cards}
    />
      <QuestionsSection2 color="#140F25" faqs={faqs} />
      <Section4 />
      <Section5 />
      <ContactMain />
    </div>
  )
}

export default page