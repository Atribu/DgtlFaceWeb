import MyThreeScene from "./components/MtThreeScene";
import Partners from "./components/Partners/Partners";
import Section1 from "./components/Section1/Section";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
// import ThreeAnimation from "./components/Square/ThreeAnimation";


export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-full items-center ">
        <MyThreeScene />
        <Partners />
        <Section1 />
        <Section2 />
        {/* <ThreeAnimation /> */}
        <Section3 />
        <Section4 />
      </div>
    </main>
  );
}
