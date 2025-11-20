import React from 'react'
import aiImg from "./images/ai.png"
import Image from 'next/image'
import Link from 'next/link'

const SubBanner = ({header,header2,text,buttonLink, buttonText}) => {
  return (
    <div className="flex w-screen h-[65vh] lg:h-[80vh] items-center justify-center bg-[#000000]" >
      <div className='flex flex-col lg:flex-row w-[94%] lg:w-[95%] items-center justify-between gap-[10px]'>
        <Image
        src={aiImg}
        alt='ai'
        width={aiImg.width}
        height={aiImg.height}
        className='w-[70%] lg:w-auto h-auto lg:min-w-[22%]'
        />
        <div className='flex flex-col items-center justify-center text-center w-[70%] lg:w-[65%] gap-[16px] font-inter text-white'>
            <h1 className='text-[24px] lg:text-[26px] font-bold leading-[120%] -tracking-[0.96px] lg:-tracking-[0.96px]'>{header} <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>{header2}</span></h1>
            <p className='hidden md:flex text-[14px] lg:text-[16px] font-normal leading-[130%] -tracking-[0.32px] mb-[16px]'>{text}</p>
            <Link href={buttonLink} className='gradient-cookie-button !text-[14px] relative border flex py-[16px] px-[32px]'>{buttonText}</Link>
        </div>
        <Image
        src={aiImg}
        alt='ai'
        width={aiImg.width}
        height={aiImg.height}
        className='hidden lg:flex transform scale-x-[-1]'
        />
      </div>
    </div>
  )
}

export default SubBanner
