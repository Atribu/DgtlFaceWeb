import React from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import QuestionsSection from '../components/subPageComponents/QuestionsSection'
import Contact from '../components/Section6/ContactMain.jsx'

const page = () => {
  return (
    <div className='flex flex-col overflow-hidden gap-[75px] lg:gap-[150px]'>
        <Section1 />
        <Section2 />
        <Section3 />
        <QuestionsSection color="#140F25"/>
        <Contact/>
    </div>
  )
}

export default page