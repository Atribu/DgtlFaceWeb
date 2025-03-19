import React from 'react'
import Section1 from "./Section1/Section1.jsx"
import Section2 from './Section2/Section2.jsx'
import Section3 from './Section3/Section3.jsx'
import Section4 from './Section4/Section4.jsx'
import Section5 from './Section5/Section5.jsx'
import ContactMain from '../components/Section6/ContactMain.jsx'
import ServicesGridSection from './components/ServicesGridSection.jsx'

const page = () => {
  return (
    <div className='flex flex-col overflow-hidden gap-[48px] lg:gap-[150px]'>
      <Section1 />
      <Section2 />
      <ServicesGridSection/>
     <div className='hidden md:flex'>
     <Section3 />
     </div>
      <Section4 />
      <Section5 />
      <ContactMain />
    </div>
  )
}

export default page