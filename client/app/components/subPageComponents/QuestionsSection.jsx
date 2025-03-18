"use client"
import React, { useState, useEffect } from "react";
import LineSvg from './LineSvg'
import PlusSvg from './PlusSvg '

const QuestionsSection = () => {
    const [isDropdown1Open, setIsDropdown1Open] = useState(false);
    const [isDropdown2Open, setIsDropdown2Open] = useState(false);
    const [isDropdown3Open, setIsDropdown3Open] = useState(false);
    const [isDropdown4Open, setIsDropdown4Open] = useState(false);

  return (
    <div className='flex flex-col w-full min-h-screen items-center justify-center gap-[70px] lg:gap-[168px] font-inter'>
      <div className='flex flex-col w-[65%] items-center justify-center text-center gap-[48px]'>
        <h3 className='text-[48px] text-darkBlue font-bold leading-[120%] -tracking-[0.96px]'> Dgtlface <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>Values</span></h3>
        <div className='grid grid-cols-2 lg:flex items-center justify-center gap-[24px] text-white'>
            <div className='flex bg-darkBlue p-[24px] items-center justify-center text-center rounded-[22px] text-[24px] font-bold leading-[120%] -tracking-[0.48px] gap-[22px]'>
                <p>Quality</p>
               <LineSvg className="flex" width={3} height={27}/>
                <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>01</span>
            </div>
            <div className='flex bg-darkBlue p-[24px] items-center justify-center text-center rounded-[22px] text-[24px] font-bold leading-[120%] -tracking-[0.48px] gap-[22px]'>
                <p>Reliability</p>
                <LineSvg className="flex"  width={3} height={27}/>
                <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>02</span>
            </div>
            <div className='flex bg-darkBlue p-[24px] items-center justify-center text-center rounded-[22px] text-[24px] font-bold leading-[120%] -tracking-[0.48px] gap-[22px]'>
                <p>Creativity</p>
                <LineSvg className="flex"  width={3} height={27}/>
                <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>03</span>
            </div>
            <div className='flex bg-darkBlue p-[24px] items-center justify-center text-center rounded-[22px] text-[24px] font-bold leading-[120%] -tracking-[0.48px] gap-[22px]'>
                <p>Ambition</p>
                <LineSvg className="flex"  width={3} height={27}/>
                <span className='bg-gradient-to-r from-[#54B9CF] to-[#547DCF] bg-clip-text text-transparent'>04</span>
            </div>
        </div>
      </div>

      <div className="flex flex-col w-[50%] items-center justify-center text-center gap-[16px] text-darkBlue">
  <h4 className="text-[32px] font-bold leading-[120%] -tracking-[0.64px] mb-[16px]">
    Frequently Asked{" "}
    <span className="bg-gradient-to-r from-[#547DCF] to-[#A754CF] bg-clip-text text-transparent">
      Questions
    </span>
  </h4>

  <div
    onClick={() => setIsDropdown1Open(!isDropdown1Open)}
    className={`
        flex flex-col overflow-hidden 
        transition-[max-height,transform] duration-700 ease-in-out 
        px-[32px] py-[14.5px] w-[80%] md:w-[600px]
        border gradient-border-button rounded-[20px]
        !text-[16px] !font-normal leading-[140%] -tracking-[0.32px] !text-darkBlue
        ${isDropdown1Open 
          ? "max-h-[200px] translate-y-0 " 
          : "max-h-[51px] translate-y-[-10px] "
        }
      `}
  >
    <div className="flex w-full justify-between items-start">
      <p className="flex whitespace-nowrap">What Are Design Services?</p>
      <PlusSvg
        className={`transition-transform duration-500 ${
          isDropdown1Open ? "rotate-180" : "rotate-0"
        }`}
        width={19}
        height={18}
      />
    </div>

    <div className="flex items-start text-start justify-center mt-4">
      <p className="w-[98%]">
        Bu çerezler, web sitesinin işlev görebilmesi için gereklidir ve
        sistemlerimizde kapatılamazlar. Genellikle yalnızca gizlilik tercihlerinizi
        belirleme, oturum açma veya formları doldurma gibi sizin tarafınızdan
        yapılan hizmet talebi niteliğindeki eylemlere yanıt olarak ayarlanırlar.
        Bu çerezler kişisel olarak tanımlanabilir bilgileri saklamaz.
      </p>
    </div>
  </div>

  <div
    onClick={() => setIsDropdown2Open(!isDropdown2Open)}
    className={`
        flex flex-col overflow-hidden 
        transition-[max-height,transform] duration-700 ease-in-out 
        px-[32px] py-[14.5px] w-[80%] md:w-[600px]
        border gradient-border-button rounded-[20px]
        !text-[16px] !font-normal leading-[140%] -tracking-[0.32px] !text-darkBlue
        ${isDropdown2Open 
          ? "max-h-[200px] translate-y-0 " 
          : "max-h-[51px] translate-y-[-10px] "
        }
      `}
  >
    <div className="flex w-full justify-between items-start">
      <p className="flex whitespace-nowrap">
        Why Are Design Services Important?
      </p>
      <PlusSvg
        className={`transition-transform duration-500 ${
          isDropdown2Open ? "rotate-180" : "rotate-0"
        }`}
        width={19}
        height={18}
      />
    </div>

    <div className="flex items-start text-start justify-center mt-4">
      <p className="w-[98%]">
        Bu çerezler, web sitesinin işlev görebilmesi için gereklidir ve
        sistemlerimizde kapatılamazlar. Genellikle yalnızca gizlilik tercihlerinizi
        belirleme, oturum açma veya formları doldurma gibi sizin tarafınızdan
        yapılan hizmet talebi niteliğindeki eylemlere yanıt olarak ayarlanırlar.
        Bu çerezler kişisel olarak tanımlanabilir bilgileri saklamaz.
      </p>
    </div>
  </div>

  <div
    onClick={() => setIsDropdown3Open(!isDropdown3Open)}
    className={`
        flex flex-col overflow-hidden 
        transition-[max-height,transform] duration-700 ease-in-out 
        px-[32px] py-[14.5px] w-[80%] md:w-[600px]
        border gradient-border-button rounded-[20px]
        !text-[16px] !font-normal leading-[140%] -tracking-[0.32px] !text-darkBlue
        ${isDropdown3Open 
          ? "max-h-[200px] translate-y-0 " 
          : "max-h-[51px] translate-y-[-10px] "
        }
      `}
  >
    <div className="flex w-full justify-between items-start">
      <p className="flex whitespace-nowrap">
        What Types of Projects Can Benefit from Design Services?
      </p>
      <PlusSvg
        className={`transition-transform duration-500 ${
          isDropdown3Open ? "rotate-180" : "rotate-0"
        }`}
        width={19}
        height={18}
      />
    </div>

    <div className="flex items-start text-start justify-center mt-4">
      <p className="w-[98%]">
        Bu çerezler, web sitesinin işlev görebilmesi için gereklidir ve
        sistemlerimizde kapatılamazlar. Genellikle yalnızca gizlilik tercihlerinizi
        belirleme, oturum açma veya formları doldurma gibi sizin tarafınızdan
        yapılan hizmet talebi niteliğindeki eylemlere yanıt olarak ayarlanırlar.
        Bu çerezler kişisel olarak tanımlanabilir bilgileri saklamaz.
      </p>
    </div>
  </div>

  <div
    onClick={() => setIsDropdown4Open(!isDropdown4Open)}
    className={`
        flex flex-col overflow-hidden 
        transition-[max-height,transform] duration-700 ease-in-out 
        px-[32px] py-[14.5px] w-[80%] md:w-[600px]
        border gradient-border-button rounded-[20px]
        !text-[16px] !font-normal leading-[140%] -tracking-[0.32px] !text-darkBlue
        ${isDropdown4Open 
          ? "max-h-[200px] translate-y-0 " 
          : "max-h-[51px] translate-y-[-10px] "
        }
      `}
  >
    <div className="flex w-full justify-between items-start">
      <p className="flex whitespace-nowrap">How Do Design Services Work?</p>
      <PlusSvg
        className={`transition-transform duration-500 ${
          isDropdown4Open ? "rotate-180" : "rotate-0"
        }`}
        width={19}
        height={18}
      />
    </div>

    <div className="flex items-start text-start justify-center mt-4">
      <p className="w-[98%]">
        Bu çerezler, web sitesinin işlev görebilmesi için gereklidir ve
        sistemlerimizde kapatılamazlar. Genellikle yalnızca gizlilik tercihlerinizi
        belirleme, oturum açma veya formları doldurma gibi sizin tarafınızdan
        yapılan hizmet talebi niteliğindeki eylemlere yanıt olarak ayarlanırlar.
        Bu çerezler kişisel olarak tanımlanabilir bilgileri saklamaz.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default QuestionsSection
