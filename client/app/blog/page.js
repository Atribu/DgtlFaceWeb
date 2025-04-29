import React from 'react'
import BlogBanner from './components/BlogBanner'
import HoverDropdown from './components/HoverDropdown'

const page = () => {
  return (
    <div className='h-[100vh] flex flex-col'>
      <BlogBanner/>
      <HoverDropdown/>
    </div>
  )
}

export default page
