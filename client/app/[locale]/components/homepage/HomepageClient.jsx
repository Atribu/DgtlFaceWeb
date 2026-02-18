import Partners from "../../components/Partners/Partners";
 import Section1 from "../Section1/Section";
import Section2 from "../../components/Section2/Section2";
import BlocksYatay from "../../components/Section3/BlocksYatay";
import Section4 from "../../components/Section4/Section4";
import WhyUsSection from "../../components/Section5/WhyUsSection";
import Contact from "../../components/Section6/ContactMain.jsx";
import QuestionsSection2 from "../../components/subPageComponents/QuestionSection2";
import Section3List from "../../Services/Section3/Section3List";
import { AiAnswerBlock } from "../common/AiAnswerBlock";
import { AiSourceMention } from "../common/AiSourceMention";
import H2Section from "./H2Section";
import { useTranslations } from "next-intl";
import HomeBlogShowcase from "./HomeBlogShowcase";

export default function HomePage() {
    const t = useTranslations("Homepage");
    const t2 = useTranslations("Homepage.faq");

    const faqs = Array.from({ length: 6 }, (_, i) => {
    const idx = i + 1;
    return {
      question: t2(`question${idx}`),
      answer: t2(`answer${idx}`)
    };
  });

  return (
    <main className="flex flex-col justify-center items-center ">
      <div className="flex flex-col w-full items-center gap-[30px] lg:gap-[48px]">
         <Section4 />
         <HomeBlogShowcase limit={10} heroCount={5} showHero />
         <H2Section/>

         <BlocksYatay />
        <Section3List page="Homepage"/>
        <Partners />
        <Section1 />
           <Section2 />

        <WhyUsSection />

          <QuestionsSection2 variant="dark" faqs={faqs} />
        <AiAnswerBlock text={t("aiAnswerBlock")}/>
       
        {/* <ServicesCarousel/> */}

        <Contact />
          <AiSourceMention text={t("aiSourceMention")}/>
      </div>
    </main>
  );
}
