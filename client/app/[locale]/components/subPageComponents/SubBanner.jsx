import React from 'react'
import aiImg from "./images/ai.png"
import Image from 'next/image'
import Link from 'next/link'
import PlainRichText from '../common/PlainRichText'

const SubBanner = ({header,header2,text,buttonLink, buttonText, header3,text2}) => {
  return (
    <div className="flex w-screen h-auto min-h-[100vh] md:min-h-[50vh] lg:mt-[16vh] items-center justify-center bg-[#080612] pt-[15%] md:pt-0" >
      <div className='flex flex-col lg:flex-row w-[96%] lg:w-[95%] items-center justify-between lg:gap-[10px]'>
        <Image
        src={aiImg}
        alt='ai'
        width={aiImg.width}
        height={aiImg.height}
        className='w-[70%] lg:w-auto h-auto lg:min-w-[22%]'
        />
        <div className='flex flex-col items-center justify-center text-start w-[95%] md:w-[80%] lg:w-[65%] gap-2 lg:gap-[16px] font-inter text-white mt-4 md:mt-10'>
            <h1 className='text-[24px] lg:text-[26px] font-semibold leading-[120%] -tracking-[0.96px] '>{header} <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>{header2}</span></h1>
            {/* <p className=' text-[12px] md:text-[14px]  lg:text-[16px] font-normal leading-[120%] lg:leading-[130%]  lg:mb-[16px]'>{text}</p> */}
            {/* <Link href={buttonLink} className='gradient-cookie-button !text-[14px] relative border flex py-[16px] px-[32px]'>{buttonText}</Link> */}
        <PlainRichText
            html={text}
            className="text-[12px] md:text-[14px] lg:text-[16px] font-normal leading-[120%] lg:leading-[130%] lg:mb-[16px] space-y-1 [&_ul]:list-disc
      [&_ul]:pl-[5%] [&_ul]:text-start
      [&_li]:mb-1"
          />

            <h2 className='text-[22px] lg:text-[24px] font-semibold leading-[120%] -tracking-[0.96px] mt-2'>{header3}</h2>
            <PlainRichText
            html={text2}
            className="text-[12px] md:text-[14px] lg:text-[16px] font-normal leading-[120%] lg:leading-[130%] lg:mb-[16px] space-y-1 [&_ul]:list-disc
      [&_ul]:pl-[5%] [&_ul]:text-start
      [&_li]:mb-1"
          />
             
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
