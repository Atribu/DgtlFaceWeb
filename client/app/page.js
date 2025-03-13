import MyThreeScene from "./components/MtThreeScene";
import Partners from "./components/Partners/Partners";
import Section1 from "./components/Section1/Section";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import WhyUsSection from "./components/Section5/WhyUsSection";
import Contact from "./components/Section6/ContactMain";
import BlocVertical from "./components/blocks/BlocVertical";
import Blocks from "./components/blocks/Blocks1/Blocks1";
import Blocks2 from "./components/blocks/Blocks1/Blocks2";
import Blocks3 from "./components/blocks/Blocks1/Blocks3";
import Blocks4 from "./components/blocks/Blocks1/Blocks4";
import Blocks5 from "./components/blocks/Blocks1/Blocks5";
import Blocks6 from "./components/blocks/Blocks1/Blocks6";
import Blocks7 from "./components/blocks/Blocks1/Blocks7";
import Blocks8 from "./components/blocks/Blocks1/Blocks8";
import Blocks9 from "./components/blocks/Blocks1/Blocks9";
import Services from "./components/serviceblocks/Services";
// import ThreeAnimation from "./components/Square/ThreeAnimation";


export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center w-screen ">
      <div className="flex flex-col w-full items-center ">
        <MyThreeScene />
        <Partners />
        <Section1 />
        <Section2 />
        {/* <ThreeAnimation /> */}
        <Section3 />
        {/* <Services/> */}
        <Section4 />
        <WhyUsSection />
        <Contact />
      </div>
    </main>
  );
}
