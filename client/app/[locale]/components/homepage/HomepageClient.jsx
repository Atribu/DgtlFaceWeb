import dynamic from "next/dynamic";
import { AiAnswerBlock } from "../common/AiAnswerBlock";
import { AiSourceMention } from "../common/AiSourceMention";
import FaqPrompt from "../common/FaqPrompt";
import { useTranslations } from "next-intl";
import ViewportLazyMount from "./ViewportLazyMount";
import HomeBlogShowcase from "./DeferredHomeBlogShowcase";
import {
  PartnersDeferred as Partners,
  StatsDeferred as Section2,
  WhyUsDeferred as WhyUsSection,
} from "./DeferredEmblaSections";

const Section4 = dynamic(() => import("../../components/Section4/Section4"));
const Section1 = dynamic(() => import("../Section1/Section"));
const BlocksYatay = dynamic(() => import("../../components/Section3/BlocksYatay"));
const Contact = dynamic(() => import("../../components/Section6/ContactMain.jsx"));
const QuestionsSection2 = dynamic(() =>
  import("../../components/subPageComponents/QuestionSection2")
);
const Section3List = dynamic(() => import("../../Services/Section3/Section3List"));
const H2Section = dynamic(() => import("./H2Section"));

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
        <ViewportLazyMount rootMargin="0px 0px" threshold={0.5} minHeight={260} className="w-full">
          <Section4 />
        </ViewportLazyMount>
        <ViewportLazyMount rootMargin="120px 0px" threshold={0.01} minHeight={280} className="w-full">
          <HomeBlogShowcase limit={10} />
        </ViewportLazyMount>

        <ViewportLazyMount rootMargin="20px 0px" threshold={0.2} minHeight={900} className="w-full">
          <H2Section />
          <BlocksYatay />

          <ViewportLazyMount
            rootMargin="0px 0px"
            threshold={0.32}
            minHeight={420}
            className="w-full"
          >
            <Section3List page="Homepage" />
          </ViewportLazyMount>
        </ViewportLazyMount>

        <ViewportLazyMount rootMargin="10px 0px" threshold={0.22} minHeight={10} className="w-full">
          <Partners />
          <Section1 />

          <ViewportLazyMount
            rootMargin="0px 0px"
            threshold={0.3}
            minHeight={150}
            className="w-full"
          >
            <Section2 />
          </ViewportLazyMount>

          <ViewportLazyMount
            rootMargin="0px 0px"
            threshold={0.34}
            minHeight={200}
            className="w-full"
          >
            <WhyUsSection />
          </ViewportLazyMount>
        </ViewportLazyMount>

        <ViewportLazyMount rootMargin="60px 0px" threshold={0.24} minHeight={660} className="w-full">
          <QuestionsSection2 variant="dark" faqs={faqs} />
          <AiAnswerBlock text={t("aiAnswerBlock")} />
          <FaqPrompt />

          {/* <ServicesCarousel/> */}

          <ViewportLazyMount
            rootMargin="0px 0px"
            threshold={0.34}
            minHeight={250}
            className="w-full"
          >
            <Contact />
            <AiSourceMention text={t("aiSourceMention")} />
          </ViewportLazyMount>
        </ViewportLazyMount>
      </div>
    </main>
  );
}
