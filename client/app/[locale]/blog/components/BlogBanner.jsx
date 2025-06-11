import Image from 'next/image'
import React from 'react'
import img from "../images/writing2.png"
import Link from 'next/link'

const BlogBanner = () => {
  return (
    <div className='flex flex-col w-screen items-center justify-center min-h-[80vh] gap-[20px] lg:gap-[50px] text-darkBlue font-inter'>
      <div className='flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-[80%] max-w-[1100px]  gap-[10%]'>
        <div className='flex flex-col items-start text-start justify-start gap-[15px] lg:gap-[31px] w-[100%] lg:w-[45%]'>
            <h3 className='text-[28px] md:text-[32px] lg:text-[48px]  font-inter font-bold -tracking-[0.96px]'>Right Choice for Your Digital Success!</h3>
            <p className='text-[]'> <span className='font-bold uppercase'>DGTLFACE</span>  – Digital Technology Partner </p>
            <p>With expertise in customer relationships. We upgrade your businesses with creativity. DGTLFACE produces stunning visual content, advertisement concepts, and effective digital sales strategies for you.</p>
            <button className='flex py-[16px] px-[32px] items-start justify-start text-start w-[80%] md:w-[483px] h-[52px] text-[14px] font-normal -tracking-[0.28px] leading-[140%] rounded-[14px] border-[2px] gradient-darktext-button'>Lorem ipsum dolor sit amet consectetur ?</button>
        </div>

        <div className=''>
           <Image src={img} alt='writing' width={img.width} height={img.height} />
        </div>
      </div>

      <div className='flex flex-col w-[90%] lg:w-[75%] max-w-[1200px] itesm-start justify-start text-start gap-[14px] lg:gap-[27px] '>
        <span className='text-[18px] font-bold -tracking-[0.36px] leading-[140%]'>Choose Your Category ;</span>
        <div className='flex w-full items-end justify-between h-[82px] rounded-[28px] bg-white gap-[14px] overflow-x-scroll thin-scrollbar px-[43px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)]'>
          <Link href="/" className="flex items-center justify-center text-center py-[16px] px-[32px] rounded-[14px] bg-[rgba(20,15,37,0.03)] font-bold text-[14px] -tracking-[0.28px] leading-normal whitespace-nowrap !text-darkBlue hover:text-white hover:bg-[linear-gradient(90deg,#a754cf,#54b9cf,#547dcf,#a754cf)] group transition-all">Creative</Link>
          <Link href="/" className="flex items-center justify-center text-center py-[16px] px-[32px] rounded-[14px] bg-[rgba(20,15,37,0.03)] font-bold text-[14px] -tracking-[0.28px] leading-normal whitespace-nowrap !text-darkBlue hover:text-white hover:bg-[linear-gradient(90deg,#a754cf,#54b9cf,#547dcf,#a754cf)] group transition-all">Call Center</Link>
          <Link href="/" className="flex items-center justify-center text-center py-[16px] px-[32px] rounded-[14px] bg-[rgba(20,15,37,0.03)] font-bold text-[14px] -tracking-[0.28px] leading-normal whitespace-nowrap !text-darkBlue hover:text-white hover:bg-[linear-gradient(90deg,#a754cf,#54b9cf,#547dcf,#a754cf)] group transition-all">PMS & OTA Managment</Link>
          <Link href="/" className="flex items-center justify-center text-center py-[16px] px-[32px] rounded-[14px] bg-[rgba(20,15,37,0.03)] font-bold text-[14px] -tracking-[0.28px] leading-normal whitespace-nowrap !text-darkBlue hover:text-white hover:bg-[linear-gradient(90deg,#a754cf,#54b9cf,#547dcf,#a754cf)] group transition-all">Search Engine Marketing</Link>
          <Link href="/" className="flex items-center justify-center text-center py-[16px] px-[32px] rounded-[14px] bg-[rgba(20,15,37,0.03)] font-bold text-[14px] -tracking-[0.28px] leading-normal whitespace-nowrap !text-darkBlue hover:text-white hover:bg-[linear-gradient(90deg,#a754cf,#54b9cf,#547dcf,#a754cf)] group transition-all">Search Engine Optimization</Link>
          <Link href="/" className="flex items-center justify-center text-center py-[16px] px-[32px] rounded-[14px] bg-[rgba(20,15,37,0.03)] font-bold text-[14px] -tracking-[0.28px] leading-normal whitespace-nowrap !text-darkBlue hover:text-white hover:bg-[linear-gradient(90deg,#a754cf,#54b9cf,#547dcf,#a754cf)] group transition-all">Social Media Marketing</Link>
          <Link href="/" className="flex items-center justify-center text-center py-[16px] px-[32px] rounded-[14px] bg-[rgba(20,15,37,0.03)] font-bold text-[14px] -tracking-[0.28px] leading-normal whitespace-nowrap !text-darkBlue hover:text-white hover:bg-[linear-gradient(90deg,#a754cf,#54b9cf,#547dcf,#a754cf)] group transition-all">Information Technology & Software</Link>
          <Link href="/" className="flex items-center justify-center text-center py-[16px] px-[32px] rounded-[14px] bg-[rgba(20,15,37,0.03)] font-bold text-[14px] -tracking-[0.28px] leading-normal whitespace-nowrap !text-darkBlue hover:text-white hover:bg-[linear-gradient(90deg,#a754cf,#54b9cf,#547dcf,#a754cf)] group transition-all">Digital Analysis & Reporting</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogBanner
