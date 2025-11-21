import React from 'react'
import DgtlfaceLogoBlackHead from '../header/svg/DgtlfaceLogoBlackHead';

const H2LogoSection = ({title1,title2,text1,text2}) => {
  return (
    <div className="flex flex-col w-screen h-auto items-center justify-center bg-[#080612] pb-12">
       <div className='flex flex-col lg:flex-row text-white items-center justify-around text-center gap-3 lg:gap-6 mt-10 lg:mt-32'>
        <div className='flex flex-col w-[90%] lg:w-[35%] gap-2'>
            <h2 className='text-[22px] lg:text-[24px] leading-[130%] font-semibold'>{title1}</h2>
            <p className='text-[12px] lg:text-[14px] leading-[120%]'>{text1}</p>
        </div>
        <DgtlfaceLogoBlackHead
          width={100}
          height={100}
          className=""
          color="#ffffff"
        />
         <div className='flex flex-col w-[90%] lg:w-[35%] gap-2'>
             <h2 className='text-[22px] lg:text-[24px] leading-[130%] font-semibold'>{title2}</h2>
            <p className='text-[12px] lg:text-[14px] leading-[120%]'>{text2}</p>
        </div>
      </div>
    </div>
  )
}

export default H2LogoSection
