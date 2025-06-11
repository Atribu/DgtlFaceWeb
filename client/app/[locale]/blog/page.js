import React from 'react'
import BlogBanner from './components/BlogBanner'
import HoverDropdown from './components/HoverDropdown'
import BlogGridSection from './components/BlogGridSection'

const page = () => {
  return (
    <div className='min-h-[100vh] flex flex-col bg-[#FBFBFD] overflow-hidden'>
      <BlogBanner/>
      <BlogGridSection/>
    </div>
  )
}

export default page
