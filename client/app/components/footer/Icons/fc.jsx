import { headers } from 'next/headers'
import React from 'react'

const fc = ({className, width, height}) => {
  return (
    <div className={className}>
        <svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="fc">
            <circle id="Ellipse 2" cx="18" cy="18" r="17" stroke="white" strokeWidth="2"/>
            <path id="Vector" d="M16.0287 25.8531H19.1659V18H21.3516L21.583 15.372H19.1607V13.8754C19.1607 13.2531 19.2842 13.0114 19.8859 13.0114H21.583V10.2857H19.4127C17.0779 10.2857 16.0287 11.3143 16.0287 13.2788V15.3771H14.3984V18.0411H16.0287V25.8583V25.8531Z" fill="white"/>
            </g>
        </svg>

    </div>
  )
}

export default fc