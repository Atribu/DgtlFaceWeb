import Image from 'next/image'
import React from 'react'
import LongLineSvg from './LongLineSvg'

const StepSection2 = ({ data }) => {
  return (
    <div className="flex w-screen h-auto items-center justify-center bg-[#080612]">
      <div className="flex flex-col w-[80%] items-end lg:items-center justify-center lg:justify-center gap-[50px] lg:gap-[122px] relative">
        
        <LongLineSvg className="absolute top-0 left-0 lg:left-1/2 -translate-x-1/2 z-[10]" />

        {data.map((item, index) => {
          // Adım numarasını 2 basamaklı hale getirelim:
          const stepNumber = String(index + 1).padStart(2, '0');
          // Layout: çift index (0,2,...) -> resim solda, tek index (1,3,...) -> resim sağda
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-between w-[90%] lg:w-full gap-[18px] lg:gap-[2%] z-[20] relative"
            >
              {isEven ? (
                <>
                  {/* Resim solda */}
                  <div className="relative group w-full lg:w-[38%] h-auto ">
                    <Image
                      src={item.image}
                      alt="certificate"
                      width={item.image.width}
                      height={item.image.height}
                      className="rounded-[22px] flex object-cover w-[464px] h-[322px]"
                    />
                    <div className="absolute inset-0 rounded-[22px] bg-[linear-gradient(299deg,rgba(84,185,207,0.75)_2.48%,rgba(84,124,207,0.75)_50.42%,rgba(167,84,207,0.75)_97.37%)] mix-blend-color transition-all group-hover:opacity-80 lg:w-[464px]" />
                  </div>
                  {/* Adım numarası */}
                  <div className="absolute left-0 lg:left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="flex p-[10px] lg:p-0 lg:w-[111px] lg:h-[86px] bg-white text-darkBlue text-[16px] lg:text-[48px] font-bold leading-[120%] -tracking-[0.32px] lg:-tracking-[0.96px] rounded-[10px] lg:rounded-[22px] items-center justify-center">
                      {stepNumber}
                    </div>
                  </div>
                  {/* Text bölümü */}
                  <div className="flex flex-col items-center justify-center gap-[32px] lg:w-[38%]">
                    <button className="gradient-cookie-button relative flex border w-full py-[16px] px-auto items-center justify-center lg:px-[136px] lg:py-[24px] text-[14px] lg:text-[32px] font-bold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px]">
                      {item.header} 
                    </button>
                    <p className="text-[12px] lg:text-[16px] font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-white w-[80%]">
                      {item.text}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Text bölümü solda */}
                  <div className="flex flex-col items-center justify-center gap-[32px] lg:w-[38%]">
                    <button className="gradient-cookie-button relative flex border w-full py-[16px] px-auto items-center justify-center lg:px-[136px] lg:py-[24px] text-[14px] lg:text-[32px] font-bold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.64px]">
                      {item.header}
                    </button>
                    <p className="text-[12px] lg:text-[16px] font-normal leading-[130%] lg:leading-[140%] tracking-[-0.36px] lg:tracking-[-0.32px] text-white w-[80%] mt-[18px] lg:mt-0">
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
                  <div className="relative group w-full lg:w-[38%] h-auto">
                    <Image
                      src={item.image}
                      alt="certificate"
                      width={item.image.width}
                      height={item.image.height}
                      className="rounded-[22px] flex w-[464px] h-[322px]"
                    />
                    <div className="absolute inset-0 rounded-[22px] bg-[linear-gradient(299deg,rgba(84,185,207,0.75)_2.48%,rgba(84,124,207,0.75)_50.42%,rgba(167,84,207,0.75)_97.37%)] mix-blend-color transition-all group-hover:opacity-80 lg:w-[464px]" />
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
