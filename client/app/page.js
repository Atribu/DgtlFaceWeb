import MyThreeScene from "./components/MtThreeScene";
import Partners from "./components/Partners/Partners";
import Section1 from "./components/Section1/Section";
import Section2 from "./components/Section2/Section2";
import Deneme from "./components/Square/Deneme";


export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-full items-center ">
        <MyThreeScene />
        <Partners />
        <Section1 />
        <Section2 />
        <Deneme />
        
      </div>
    </main>
  );
}
