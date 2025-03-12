import React from 'react'

const LineSvg = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 415 2" fill="none">
<path d="M0 1.00006L415 1.00002" stroke="url(#paint0_linear_795_8934)"/>
<defs>
<linearGradient id="paint0_linear_795_8934" x1="421.479" y1="1.50001" x2="3.33702e-07" y2="1.50029" gradientUnits="userSpaceOnUse">
<stop stopColor="#54B9CF"/>
<stop offset="0.505108" stopColor="#547DCF"/>
<stop offset="0.505208" stopColor="#547CCF"/>
<stop offset="1" stopColor="#A754CF"/>
</linearGradient>
</defs>
</svg>
    </div>
  )
}

export default LineSvg
