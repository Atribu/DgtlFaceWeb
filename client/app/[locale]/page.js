"use client"
import Section3 from "./Services/Section3/Section3";
// import MyThreeScene from "./components/MtThreeScene";
import Partners from "./components/Partners/Partners";
// import Section1 from "./components/Section1/Section";
import Section2 from "./components/Section2/Section2";
import BlocksYatay from "./components/Section3/BlocksYatay";
import Section4 from "./components/Section4/Section4";
import WhyUsSection from "./components/Section5/WhyUsSection";
// import ThreeAnimation from "./components/Square/ThreeAnimation";
import dynamic from 'next/dynamic';
import Contact from "./components/Section6/ContactMain.jsx";

const MyThreeScene = dynamic(() => import("./components/MtThreeScene"), {
  ssr: false,
});

const Section1 = dynamic(() => import("./components/Section1/Section"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center max-w-screen overflow-x-hidden">
      <div className="flex flex-col w-full items-center gap-[48px]">
        <MyThreeScene />
        <Partners />
        <Section1 />
        <Section2 />
        <BlocksYatay />
        <Section3/>
        {/* <ServicesCarousel/> */}
        <Section4 />
        <WhyUsSection />
        <Contact/>
      </div>
    </main>
  );
}
