import StepSection2 from '@/app/components/subPageComponents/StepSection2'
import SubBanner from '@/app/components/subPageComponents/SubBanner'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-[80px] lg:gap-[160px] bg-[#080612]'>
      <SubBanner/>
      <StepSection2/>
    </div>
  )
}

export default page
