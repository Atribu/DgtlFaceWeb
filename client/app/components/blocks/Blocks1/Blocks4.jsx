import React from "react";
import AnalysisIcon from "../blockIcons/AnalysisIcon";
import clsx from "clsx";

function Blocks4({ gradient, ...props }) {

  return (
    <div {...props}>
      <div className="relative h-full w-full">
        <svg
          width={658}
          height={206}
          viewBox="0 0 658 206"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            "transition-all duration-500",
            gradient && gradient == "true" ? "ml-[25px] xl:ml-[100px]" : "",
          )}
        >
          <g id={4}>
            <rect
              id="left"
              width={124}
              height={595.36}
              transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 595.36 165)"
              fill={gradient && gradient == "true" ? "#625995" : "#2B2455"}
            />
            <rect
              id="right"
              width={62.0001}
              height={595.36}
              transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 595.36 165)"
              fill={gradient && gradient == "true" ? "#9A94BD" : "#140F25"}
            />
            <path
              id="top"
              d="M641 103L596 41.0004L551 103L596 165.001L641 103Z"
              fill="#7268AE"
            />
            <g
              id="gradient"
              style={{
                mixBlendMode: "overlay",
              }}
              className={clsx(
                "transition-all duration-500",
                gradient && gradient == "true" ? "opacity-100" : "opacity-0",
              )}
            >
              <path
                d="M596.012 41L640.513 103L596.012 165L0.639709 165L0.639704 41L596.012 41Z"
                fill="url(#paint0_linear_76_17284)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_dd_76_17284"
              x={559}
              y={0}
              width={165}
              height={206}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation={2} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_76_17284"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation={25} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.866407 0 0 0 0 0.995215 0 0 0 0 0.995215 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_76_17284"
                result="effect2_dropShadow_76_17284"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_76_17284"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_76_17284"
              x1={641}
              y1={103.001}
              x2={337}
              y2={103.001}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54B9CF" />
              <stop offset={0.282926} stopColor="#547CCF" />
              <stop offset={1} stopColor="#A754CF" />
            </linearGradient>
          </defs>
        </svg>
        <AnalysisIcon
          gradient={gradient}
          className={clsx(
            "absolute transition-all duration-500 ease-in-out rotate-180",
            gradient && gradient == "true"
              ? "right-[-50px] top-[30px]"
              : "right-[37.5px] top-[55px]",
          )}
        />
      </div>
    </div>
  );
}

export default Blocks4;
