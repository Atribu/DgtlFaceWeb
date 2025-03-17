import Section3 from "./Services/Section3/Section3";
import MyThreeScene from "./components/MtThreeScene";
import Partners from "./components/Partners/Partners";
import Section1 from "./components/Section1/Section";
import Section2 from "./components/Section2/Section2";
import BlocksYatay from "./components/Section3/BlocksYatay";
import Section4 from "./components/Section4/Section4";
import WhyUsSection from "./components/Section5/WhyUsSection";
import Contact from "./components/Section6/ContactMain";
// import ThreeAnimation from "./components/Square/ThreeAnimation";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center w-screen overflow-x-hidden">
      <div className="flex flex-col w-full items-center ">
        <MyThreeScene />
        <Partners />
        <Section1 />
        <Section2 />
        <BlocksYatay />
        <Section3/>
        {/* <ServicesCarousel/> */}

        <Section4 />
        <WhyUsSection />
        <Contact />
      </div>
    </main>
  );
}
