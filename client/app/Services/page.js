import React from 'react'
import Image from "next/image"
import Block from "./Image/services.png"

const page = () => {
  return (
    <div className="w-[1920px] h-[1080px] relative bg-[#140f25] flex flex-row items-center justify-center">
        <div className='flex w-1/2 items-center justify-center'>
        <Image 
              src={Block}
              alt="Background"
            />
        </div>

        <div className='flex flex-col w-1/2 items-start text-start gap-5'>
            <div className="relative justify-center"><span className="text-white text-[56px] font-bold font-['Inter'] capitalize leading-[61.60px]">Our<br/></span><span className="text-[#a754cf] text-[56px] font-bold font-['Inter'] capitalize leading-[61.60px]">Services</span></div>
            <div className="w-[417px] relative justify-center text-white text-lg font-normal font-['Inter'] leading-[25.20px]">We know the best way to open up to a new world. You can find everything that is important for you to take the right steps in branding and growth here, and you can learn the whole process by calling us.</div>
            <div className="px-8 py-4 rounded-[14px] border-2 border-[#54b9cf] inline-flex justify-center items-center gap-2.5">
    <div className="relative justify-start text-white text-sm font-bold font-['Inter'] leading-[16.80px]">Get in Touch</div>
</div>
        </div>
    </div>
  )
}

export default page