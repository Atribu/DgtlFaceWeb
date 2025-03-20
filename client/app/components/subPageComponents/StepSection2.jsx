import Image from 'next/image'
import React from 'react'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"

const StepSection2 = () => {
  return (
    <div className='flex w-screen h-auto items-center justify-center bg-[#080612]'>
      <div className='flex flex-col w-[80%] items-center justify-center gap-[122px]'>
        

        <div className='flex items-center justify-between w-full gap-[2%]'>
            <Image
            src={image1}
            alt='logodesign'
            width={image1.width}
            height={image1.height}
            className='rounded-[22px] flex w-[38%]'/>

            <div className='flex items-center justify-center w-[30%]'>
            <div className='flex w-[111px] h-[86px] bg-white text-darkBlue text-[48px] font-bold leading-[120%] -tracking-[0.96px] rounded-[22px] items-center justify-center'>01</div>
            </div>

            <div className='flex flex-col items-center justify-center gap-[32px] w-[38%]'>
                <button className='gradient-cookie-button relative flex border px-[136px] py-[24px] !text-[32px] !font-bold !leading-[120%] !-trackign-[0.64px]'>Logo Design</button>
                <p className='text-[16px] font-normal leading-[140%] -tracking-[0.32px]'>The most important starting point in quality branding is logodor. The first impression is very important and the first element of your website, business card or signboard that catches the eye is the logo.</p>
            </div>
        </div>


        <div className='flex items-center justify-between w-full gap-[75px]'>
            <div className='flex flex-col items-center justify-center gap-[32px] w-[32%]'>
            <button className='gradient-cookie-button relative flex border px-[136px] py-[24px] !text-[32px] !font-bold !leading-[120%] !-trackign-[0.64px]'>Brand Guidline</button>
                <p className='text-[16px] font-normal leading-[140%] -tracking-[0.32px]'>The most important starting point in quality branding is logodor. The first impression is very important and the first element of your website, business card or signboard that catches the eye is the logo.</p>
            </div>
            <div className='flex px-[49px]'>
            <div className='flex w-[111px] h-[86px] bg-white text-darkBlue text-[48px] rounded-[22px] font-bold leading-[120%] -tracking-[0.96px] items-center justify-center'>02</div>
            </div>
           
            <Image
            src={image2}
            alt='logodesign'
            width={image2.width}
            height={image2.height}
            className='rounded-[22px] flex'/>
        </div>


        <div className='flex items-center justify-between w-full gap-[75px]'>
            <Image
            src={image3}
            alt='logodesign'
            width={image3.width}
            height={image3.height}
            className='rounded-[22px] flex'/>

            <div className='flex px-[49px]'>
            <div className='flex w-[111px] h-[86px] bg-white text-darkBlue text-[48px] rounded-[22px] font-bold leading-[120%] -tracking-[0.96px] items-center justify-center'>03</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-[32px] w-[32%]'>
            <button className='gradient-cookie-button relative flex border px-[136px] py-[24px] !text-[32px] !font-bold !leading-[120%] !-trackign-[0.64px]'>Social Media Graphics</button>
                <p className='text-[16px] font-normal leading-[140%] -tracking-[0.32px]'>The most important starting point in quality branding is logodor. The first impression is very important and the first element of your website, business card or signboard that catches the eye is the logo.</p>
            </div>
        </div>


        <div className='flex items-center justify-between w-full gap-[75px]'>
            <div className='flex flex-col items-center justify-center gap-[32px] w-[32%]'>
            <button className='gradient-cookie-button relative flex border px-[136px] py-[24px] !text-[32px] !font-bold !leading-[120%] !-trackign-[0.64px]'>Creating & Editing
            Motionography</button>
                <p className='text-[16px] font-normal leading-[140%] -tracking-[0.32px]'>The most important starting point in quality branding is logodor. The first impression is very important and the first element of your website, business card or signboard that catches the eye is the logo.</p>
            </div>
            <div className='flex px-[49px]'>
            <div className='flex w-[111px] h-[86px] bg-white text-darkBlue text-[48px] rounded-[22px] font-bold leading-[120%] -tracking-[0.96px] items-center justify-center'>04</div>
            </div>
           
            <Image
            src={image4}
            alt='logodesign'
            width={image4.width}
            height={image4.height}
            className='rounded-[22px] flex'/>
        </div>


      </div>
    </div>
  )
}

export default StepSection2
