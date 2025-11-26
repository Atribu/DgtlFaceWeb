import React from 'react'

const LongLineSvg = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="700" viewBox="0 0 4 700" fill="none">
  <path d="M2 0L2.00008 1738" stroke="url(#paint0_linear_868_40322)" strokeWidth="4"/>
  <defs>
    <linearGradient id="paint0_linear_868_40322" x1="2.49999" y1="-1.32344" x2="2.52886" y2="824.39" gradientUnits="userSpaceOnUse">
      <stop stopColor="#54B9CF"/>
      <stop offset="0.282926" stopColor="#547CCF"/>
      <stop offset="1" stopColor="#A754CF"/>
    </linearGradient>
  </defs>
</svg>
    </div>
  )
}

export default LongLineSvg
