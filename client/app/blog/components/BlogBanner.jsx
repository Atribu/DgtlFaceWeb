import Image from 'next/image'
import React from 'react'

const BlogBanner = () => {
  return (
    <div className='flex w-screen bg-[#FBFBFD] items-center justify-center'>
      <div className='flex flex-col lg:flex-row items-center justify-center w-[90%] lg:w-[80%] max-w-[1200px]'>
        <div className='flex flex-col items-satrt justify-start gap-[15px] lg:gap-[31px] w-[100%] lg:w-[45%]'>
            <h3 className='text-[28px] md:text-[32px] lg:text-[48px] text-darkBlue font-inter font-bold -tracking-[0.96px]'>Right Choice for Your Digital Success!</h3>
            <p className='text-[]'> <span className='font-bold uppercase'>DGTLFACE</span>  – Digital Technology Partner </p>
            <p>With expertise in customer relationships. We upgrade your businesses with creativity. DGTLFACE produces stunning visual content, advertisement concepts, and effective digital sales strategies for you.</p>
        </div>

        <div className='w-[100%] lg:w-[45%]'>
            <Image/>
        </div>
      </div>
    </div>
  )
}

export default BlogBanner
