import React from 'react'
import aiImg from "./images/ai.png"
import Image from 'next/image'

const SubBanner = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-[#000000]" >
      <div className='flex w-[80%] items-center justify-between gap-[16px]'>
        <Image
        src={aiImg}
        alt='ai'
        width={aiImg.width}
        height={aiImg.height}
        />
        <div className='flex flex-col items-center justify-center text-center w-[40%] gap-[16px] font-inter text-white'>
            <h1 className='text-[48px] font-bold leading-[120%] -tracking-[0.96px]'>Graphic &  Motion <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>Graphic Design Service</span></h1>
            <p className='text-[16px] font-normal leading-[140%] -tracking-[0.32px] mb-[16px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad ut aliquip ex ea commodo consequat.</p>
            <button className='gradient-cookie-button relative border flex py-[16px] px-[32px]'>Talk to us</button>
        </div>
        <Image
        src={aiImg}
        alt='ai'
        width={aiImg.width}
        height={aiImg.height}
        className='flex '
        />
      </div>
    </div>
  )
}

export default SubBanner
