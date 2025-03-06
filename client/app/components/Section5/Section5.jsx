import React from 'react'
import Image from "next/image"

const Section5 = () => {
  return (
    <div className='flex flex-col'>
        <div>buralarda yazı olacak </div>
        <div className='flex flex-row'>
            <div>
                <div></div>
                <Image />
            </div>
            <div>
                <Image />
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Section5