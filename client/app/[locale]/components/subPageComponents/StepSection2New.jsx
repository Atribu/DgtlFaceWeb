import Image from 'next/image'
import React from 'react'
import LongLineSvg from './LongLineSvg'

const StepSection2 = ({ data, header, text}) => {
  return (
    <div className="flex flex-col w-screen h-auto items-center justify-center bg-[#080612] mt-4 lg:mt-0">
        <div className='flex flex-col w-[90%] lg:w-[85%] gap-1 lg:gap-2 text-white items-center justify-center text-center mb-7 lg:mb-10'>
            <h2 className='text-[22px] lg:text-[24px] leading-[130%] font-semibold'>{header}</h2>
            <p className='text-[12px] lg:text-[14px] leading-[120%]'>{text}</p>
        </div>
      <div className="flex flex-col w-[90%] items-end lg:items-center justify-center lg:justify-center gap-[50px] lg:gap-[122px] relative">
        
        <LongLineSvg className="absolute top-0 left-0 lg:left-1/2 -translate-x-1/2 z-[10]" height={150}/>

        {data.map((item, index) => {
          // Adım numarasını 2 basamaklı hale getirelim:
          const stepNumber = String(index + 1).padStart(2, '0');
          // Layout: çift index (0,2,...) -> resim solda, tek index (1,3,...) -> resim sağda
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-between w-[98%] lg:w-full gap-[18px] lg:gap-[2%] z-[20] relative"
            >
              {isEven ? (
                <>
                  {/* Resim solda */}
                  <div className="relative group w-full lg:w-[32%] h-auto ">
                    <Image
                      src={item.image}
                      alt="certificate"
                      width={item.image?.width || 444}
                      height={item.image?.height || 312}
                      className="rounded-[22px] flex object-cover w-[444px] h-[312px]"
                    />
                    <div className="absolute inset-0 rounded-[22px] bg-[linear-gradient(299deg,rgba(84,185,207,0.75)_2.48%,rgba(84,124,207,0.75)_50.42%,rgba(167,84,207,0.75)_97.37%)] mix-blend-color transition-all group-hover:opacity-80 lg:w-[444px]" />
                  </div>
                  {/* Adım numarası */}
                  <div className="absolute left-0 lg:left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="flex p-[10px] lg:p-0 lg:w-[111px] lg:h-[86px] bg-white text-darkBlue text-[16px] lg:text-[48px] font-bold leading-[120%] -tracking-[0.32px] lg:-tracking-[0.96px] rounded-[10px] lg:rounded-[22px] items-center justify-center">
                      {stepNumber}
                    </div>
                  </div>
                  {/* Text bölümü */}
                  <div className="flex flex-col items-center justify-center gap-3 md:gap-4 xl:gap-[22px] lg:w-[45%]">
                    <h3 className="gradient-cookie-button relative flex border w-[88%] lg:w-full py-[16px] px-auto items-center justify-center lg:px-[106px] lg:py-[24px] text-[18px] lg:text-[22px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px]">
                      {item.header} 
                    </h3>
                    <p className="text-[12px] lg:text-[14px] font-normal leading-[125%] tracking-[-0.36px] lg:tracking-[-0.32px] text-white w-[95%] lg:w-[80%]">
                      {item.text}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Text bölümü solda */}
                  <div className="flex flex-col items-center justify-center gap-3 md:gap-4 xl:gap-[22px] w-[100%] lg:w-[45%]">
                    <h3 className="gradient-cookie-button relative flex border w-[88%] lg:w-full py-[16px] px-auto items-center justify-center lg:px-[106px] lg:py-[24px] text-[18px] lg:text-[22px] font-semibold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px]">
                      {item.header}
                    </h3>
                    <p className="text-[12px] lg:text-[14px] font-normal leading-[125%]  tracking-[-0.36px] lg:tracking-[-0.32px] text-white w-[95%] lg:w-[80%] mt-0">
                      {item.text}
                    </p>
                  </div>
                  {/* Adım numarası */}
                  <div className="absolute left-0 lg:left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="flex p-[10px] lg:p-0 lg:w-[111px] lg:h-[86px] bg-white text-darkBlue text-[16px] lg:text-[48px] font-bold leading-[120%] tracking-[-0.32px] lg:tracking-[-0.96px] rounded-[10px] lg:rounded-[22px] items-center justify-center">
                      {stepNumber}
                    </div>
                  </div>
                  {/* Resim sağda */}
                  <div className="relative group w-full lg:w-[32%] h-auto">
                    <Image
                      src={item.image}
                      alt="certificate"
                      width={item.image.width}
                      height={item.image.height}
                      className="rounded-[22px] flex w-[444px] h-[312px]"
                    />
                    <div className="absolute inset-0 rounded-[22px] bg-[linear-gradient(299deg,rgba(84,185,207,0.75)_2.48%,rgba(84,124,207,0.75)_50.42%,rgba(167,84,207,0.75)_97.37%)] mix-blend-color transition-all group-hover:opacity-80 lg:w-[444px]" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default StepSection2;
