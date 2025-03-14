import React from 'react'

const RightArrowSvg = ({className,width,height,color}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 11 10" fill="none">
  <path d="M5.875 1.5L10 5M10 5L5.875 8.5M10 5H1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
  )
}

export default RightArrowSvg
