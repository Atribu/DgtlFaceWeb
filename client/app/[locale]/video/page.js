"use client";
import dynamic from "next/dynamic";


// const MyThreeScene = dynamic(() => import("./components/MyThreeScene2"), {
//   ssr: false,
// });


export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center max-w-screen overflow-x-hidden">
      <div className="flex flex-col w-full items-center gap-[30px] lg:gap-[48px] my-[130px]">
        {/* <MyThreeScene /> */}
        
       
      </div>
    </main>
  );
}
