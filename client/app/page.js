import MyThreeScene from "./components/MtThreeScene";
import Partners from "./components/Partners/Partners";


export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-full items-center ">
        <MyThreeScene />
        <Partners />
      </div>
    </main>
  );
}
