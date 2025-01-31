import MyThreeScene from "./components/MtThreeScene";
import Partners from "./components/Partners/Partners";
import Section1 from "./components/Section1/Section";


export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-full items-center ">
        <MyThreeScene />
        <Partners />
        <Section1 />
        
      </div>
    </main>
  );
}
