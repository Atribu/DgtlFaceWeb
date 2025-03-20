import Image from 'next/image'
import React from 'react'
import LongLineSvg from './LongLineSvg'

const StepSection2 = ({data}) => {
  return (
    <div className='flex w-screen h-auto items-center justify-center bg-[#080612]'>
      <div className='flex flex-col w-[80%] items-end lg:items-center justify-center lg:justify-center gap-[50px] lg:gap-[122px] relative'>
        
       <LongLineSvg className="absolute top-0 left-0 lg:left-1/2 -translate-x-1/2 z-[10]"/>

       <div className='flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-full gap-[18px] lg:gap-[2%] z-[20]'>
            <div className='relative group w-full lg:w-[38%] h-auto items-end justify-end'>
            <Image
            src={data[0].image}
            alt='logodesign'
            width={data[0].image.width}
            height={data[0].image.height}
            className='rounded-[22px] flex'/>

         <div className="absolute inset-0 rounded-[22px] bg-[linear-gradient(299deg,rgba(84,185,207,0.75)_2.48%,rgba(84,124,207,0.75)_50.42%,rgba(167,84,207,0.75)_97.37%)] mix-blend-color transition-all group-hover:opacity-80 lg:w-[464px]" />
            </div>

            <div className='absolute left-0 lg:left-1/2 -translate-x-1/2 items-center justify-center '>
            <div className='flex p-[10px] lg:p-0 lg:w-[111px] lg:h-[86px] bg-white text-darkBlue text-[16px] lg:text-[48px] font-bold leading-[120%] -tracking-[0.32px] lg:-tracking-[0.96px] rounded-[10px] lg:rounded-[22px] items-center justify-center'>01</div>
            </div>

            <div className='flex flex-col items-center justify-center gap-[32px] lg:w-[38%]'>
                <button className='gradient-cookie-button relative flex border w-full py-[16px] px-auto items-center justify-center lg:px-[136px] lg:py-[24px] !text-[14px] lg:!text-[32px] !font-bold !leading-[120%] !-trackign-[0.28px] lg:!-trackign-[0.64px]'>{data[0].header}</button>
                <p className='text-[12px] lg:text-[16px] font-normal leading-[130%] lg:leading-[140%] -tracking-[0.36px] lg:-tracking-[0.32px] text-white w-[80%]'>{data[0].text}</p>
            </div>
        </div>


        <div className='flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-full gap-[18px] lg:gap-[2%] z-[20]'>
            <div className='flex flex-col items-center justify-center lg:gap-[32px] lg:w-[32%]'>
            <button className='gradient-cookie-button relative flex border w-full py-[16px] px-auto items-center justify-center lg:px-[136px] lg:py-[24px] !text-[14px] lg:!text-[32px] !font-bold !leading-[120%] !-trackign-[0.28px] lg:!-trackign-[0.64px]'>{data[1].header}</button>
                <p className='text-[12px] lg:text-[16px] font-normal leading-[130%] lg:leading-[140%] -tracking-[0.36px] lg:-tracking-[0.32px] text-white w-[80%] mt-[18px] lg:mt-0'>{data[1].text}</p>
            </div>

            <div className='absolute left-0 lg:left-1/2 -translate-x-1/2 items-center justify-center '>
            <div className='flex p-[10px] lg:p-0 lg:w-[111px] lg:h-[86px] bg-white text-darkBlue text-[16px] lg:text-[48px] font-bold leading-[120%] -tracking-[0.32px] lg:-tracking-[0.96px] rounded-[10px] lg:rounded-[22px] items-center justify-center'>02</div>
            </div>
           
            <div className='relative group w-full lg:w-[38%] h-auto items-end justify-end flex'>
            <Image
            src={data[1].image}
            alt='logodesign'
            width={data[1].image.width}
            height={data[1].image.height}
            className='rounded-[22px] flex '/>

    <div className="absolute top-0 bottom-0 right-0 rounded-[22px]
    bg-[linear-gradient(299deg,rgba(84,185,207,0.75)_2.48%,rgba(84,124,207,0.75)_50.42%,rgba(167,84,207,0.75)_97.37%)]
    mix-blend-color
    transition-all
    group-hover:opacity-80 lg:w-[464px]" />
            </div>
        </div>

         <div className='flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-full gap-[18px] lg:gap-[2%] z-[20]'>
            <div className='relative group w-full lg:w-[38%] h-auto'>
            <Image
            src={data[2].image}
            alt='logodesign'
            width={data[2].image.width}
            height={data[2].image.height}
            className='rounded-[22px] flex '/>

    <div className="absolute inset-0 rounded-[22px]
    bg-[linear-gradient(299deg,rgba(84,185,207,0.75)_2.48%,rgba(84,124,207,0.75)_50.42%,rgba(167,84,207,0.75)_97.37%)]
    mix-blend-color
    transition-all
    group-hover:opacity-80 lg:w-[464px]" />
            </div>

            <div className='absolute left-0 lg:left-1/2 -translate-x-1/2 items-center justify-center '>
            <div className='flex p-[10px] lg:p-0 lg:w-[111px] lg:h-[86px] bg-white text-darkBlue text-[16px] lg:text-[48px] font-bold leading-[120%] -tracking-[0.32px] lg:-tracking-[0.96px]  rounded-[10px] lg:rounded-[22px] items-center justify-center'>03</div>
            </div>

            <div className='flex flex-col items-center justify-center lg:gap-[32px] lg:w-[38%]'>
                <button className='gradient-cookie-button relative flex border w-full py-[16px] px-auto items-center justify-center lg:px-[136px] lg:py-[24px] !text-[14px] lg:!text-[32px] !font-bold !leading-[120%] !-trackign-[0.28px] lg:!-trackign-[0.64px]'>{data[2].header}</button>
                <p className='text-[12px] lg:text-[16px] font-normal leading-[130%] lg:leading-[140%] -tracking-[0.36px] lg:-tracking-[0.32px] text-white w-[80%]'>{data[2].text}</p>
            </div>
        </div>


        <div className='flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-full gap-[18px] lg:gap-[2%] z-[20]'>
            <div className='flex flex-col items-center justify-center lg:gap-[32px] lg:w-[32%]'>
            <button className='gradient-cookie-button relative flex border w-full py-[16px] px-auto items-center justify-center lg:px-[136px] lg:py-[24px] !text-[14px] lg:!text-[32px] !font-bold !leading-[120%] !-trackign-[0.28px] lg:!-trackign-[0.64px] max-h-[118px]'>{data[3].header} <br/>
            </button>
                <p className='text-[12px] lg:text-[16px] font-normal leading-[130%] lg:leading-[140%] -tracking-[0.36px] lg:-tracking-[0.32px] text-white w-[80%] mt-[18px] lg:mt-0'>{data[3].text}</p>
            </div>
            <div className='absolute left-0 lg:left-1/2 -translate-x-1/2 items-center justify-center '>
            <div className='flex p-[10px] lg:p-0 lg:w-[111px] lg:h-[86px] bg-white text-darkBlue text-[16px] lg:text-[48px] font-bold leading-[120%] -tracking-[0.32px] lg:-tracking-[0.96px]  rounded-[10px] lg:rounded-[22px] items-center justify-center'>04</div>
            </div>
           
            <div className='relative group w-full lg:w-[38%] h-auto items-end justify-end flex'>
            <Image
          src={data[3].image}
          alt='logodesign'
          width={data[3].image.width}
          height={data[3].image.height}
            className='rounded-[22px] flex '/>

    <div className="absolute top-0 bottom-0 right-0 rounded-[22px]
    bg-[linear-gradient(299deg,rgba(84,185,207,0.75)_2.48%,rgba(84,124,207,0.75)_50.42%,rgba(167,84,207,0.75)_97.37%)]
    mix-blend-color
    transition-all
    group-hover:opacity-80 lg:w-[464px]" />
            </div>
        </div>


      </div>
    </div>
  )
}

export default StepSection2
