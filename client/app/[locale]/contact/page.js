import React from 'react'
import Contact from './Section1/Contact.jsx'
import AltSection from './Section1/AltSection.jsx'
import Location from "./Section2/Location.jsx"
import ContactMain from '../components/Section6/ContactMain.jsx'

const Page = () => {
  return (
    <div className='flex flex-col overflow-hidden gap-[50px] lg:gap-[70px]'>
        <Contact />
        <AltSection />
        <Location />
        <ContactMain/>
    </div>
  )
}

export default Page