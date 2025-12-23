import React from "react";

const LongLineSvg = ({ className = "", width = 4, height = 3500 }) => {
  const strokeWidth = 4;
  const vbW = strokeWidth + 2; // viewBox genişliği
  const x = vbW / 2;

  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${vbW} ${height}`}     // ✅ viewBox artık height ile aynı
        preserveAspectRatio="none"
        fill="none"
        style={{ display: "block" }}
      >
        <path
          d={`M${x} 0 L${x} ${height}`}      // ✅ çizgi artık height'a kadar iner
          stroke="url(#paint0)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0"
            x1={x}
            y1="0"
            x2={x}
            y2={height}                      // ✅ gradient de boyuna uzar
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#54B9CF" />
            <stop offset="0.282926" stopColor="#547CCF" />
            <stop offset="1" stopColor="#A754CF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LongLineSvg;
