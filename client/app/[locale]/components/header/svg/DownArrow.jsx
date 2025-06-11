import React from 'react'

const DownArrow = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 9 8" fill="none">
  <path d="M8 1.9375L4.5 6.0625L1 1.9375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
  )
}

export default DownArrow
