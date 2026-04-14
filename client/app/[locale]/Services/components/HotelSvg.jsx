import React from 'react'

const HotelSvg = ({ className, width, height }) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 35 33" fill="none">
        <path
          d="M5.16699 31.625V8.25H29.8337V31.625M12.167 31.625V22H22.8337V31.625M10.417 13.0625H13.3337M10.417 17.875H13.3337M10.417 22.6875H13.3337M21.667 13.0625H24.5837M21.667 17.875H24.5837M21.667 22.6875H24.5837M15.667 3.4375H19.3337M17.5003 3.4375V8.25M2.83366 31.625H32.167"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default HotelSvg
