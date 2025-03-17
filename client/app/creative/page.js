import React from 'react'
import MainBanner from '../components/subPageComponents/MainBanner'
import StepSection from '../components/subPageComponents/StepSection'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[75px] lg:gap-[150px]'>
      <MainBanner header="Creative" text="Check out the beating heart of creativity at DGTLFACE. We don't just dream; We create symphonies of imagination. Watch your brand evolve into a fascinating fabric of brilliance."/>
      <StepSection/>
    </div>
  )
}

export default page
