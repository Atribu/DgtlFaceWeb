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
         <ViewportLazyMount rootMargin="240px 0px" minHeight={260} className="w-full">
          <Section4 />
        </ViewportLazyMount>
         {/* <HomeBlogShowcase limit={10} heroCount={5} showHero /> */}

        <ViewportLazyMount rootMargin="420px 0px" minHeight={900} className="w-full">
          <H2Section />
          <BlocksYatay />
          <Section3List page="Homepage" />
        </ViewportLazyMount>

        <ViewportLazyMount rootMargin="520px 0px" minHeight={2200} className="w-full">
          <Partners />
          <Section1 />
          <Section2 />
          <WhyUsSection />
        </ViewportLazyMount>

        <ViewportLazyMount rootMargin="620px 0px" minHeight={1400} className="w-full">
          <QuestionsSection2 variant="dark" faqs={faqs} />
          <AiAnswerBlock text={t("aiAnswerBlock")} />

          {/* <ServicesCarousel/> */}

          <Contact />
          <AiSourceMention text={t("aiSourceMention")} />
        </ViewportLazyMount>
      </div>
    </main>
  );
}
