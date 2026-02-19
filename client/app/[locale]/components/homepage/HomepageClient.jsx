import dynamic from "next/dynamic";
import { AiAnswerBlock } from "../common/AiAnswerBlock";
import { AiSourceMention } from "../common/AiSourceMention";
import { useTranslations } from "next-intl";
// import HomeBlogShowcase from "./HomeBlogShowcase";
import ViewportLazyMount from "./ViewportLazyMount";

const Section4 = dynamic(() => import("../../components/Section4/Section4"));
const Partners = dynamic(() => import("../../components/Partners/Partners"));
const Section1 = dynamic(() => import("../Section1/Section"));
const Section2 = dynamic(() => import("../../components/Section2/Section2"));
const BlocksYatay = dynamic(() => import("../../components/Section3/BlocksYatay"));
const WhyUsSection = dynamic(() => import("../../components/Section5/WhyUsSection"));
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
         <ViewportLazyMount rootMargin="80px 0px" threshold={0.08} minHeight={260} className="w-full">
          <Section4 />
        </ViewportLazyMount>
         {/* <HomeBlogShowcase limit={10} heroCount={5} showHero /> */}

        <ViewportLazyMount rootMargin="120px 0px" threshold={0.12} minHeight={900} className="w-full">
          <H2Section />
          <BlocksYatay />

          <ViewportLazyMount
            rootMargin="40px 0px"
            threshold={0.22}
            minHeight={520}
            className="w-full"
          >
            <Section3List page="Homepage" />
          </ViewportLazyMount>
        </ViewportLazyMount>

        <ViewportLazyMount rootMargin="160px 0px" threshold={0.14} minHeight={2200} className="w-full">
          <Partners />
          <Section1 />

          <ViewportLazyMount
            rootMargin="80px 0px"
            threshold={0.2}
            minHeight={320}
            className="w-full"
          >
            <Section2 />
          </ViewportLazyMount>

          <ViewportLazyMount
            rootMargin="40px 0px"
            threshold={0.24}
            minHeight={700}
            className="w-full"
          >
            <WhyUsSection />
          </ViewportLazyMount>
        </ViewportLazyMount>

        <ViewportLazyMount rootMargin="180px 0px" threshold={0.16} minHeight={1400} className="w-full">
          <QuestionsSection2 variant="dark" faqs={faqs} />
          <AiAnswerBlock text={t("aiAnswerBlock")} />

          {/* <ServicesCarousel/> */}

          <ViewportLazyMount
            rootMargin="40px 0px"
            threshold={0.24}
            minHeight={520}
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
