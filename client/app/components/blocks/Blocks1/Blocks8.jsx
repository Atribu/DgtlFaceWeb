import clsx from "clsx";
import React from "react";
import WebIcon from "../blockIcons/WebIcon";

function Blocks8({ gradient, ...props }) {
  return (
    <div {...props} className={clsx("relative", props.className)}>
      <div className="relative h-full w-full">
        <svg
          width={658}
          height={124}
          viewBox="0 0 658 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            "transition-all duration-500",
            gradient && gradient == "true" ? "ml-[25px] xl:ml-[100px]" : "",
          )}
        >
          <g id={8}>
            <rect
              id="left"
              width={124}
              height={595.36}
              transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 595.36 124)"
              fill={gradient && gradient == "true" ? "#625995" : "#2B2455"}
            />
            <rect
              id="right"
              width={62.0001}
              height={595.36}
              transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 595.36 124)"
              fill={gradient && gradient == "true" ? "#9A94BD" : "#140F25"}
            />
            <path
              id="top"
              d="M640.36 62.0005L595.36 0.000379136L550.36 62.0005L595.36 124.001L640.36 62.0005Z"
              fill="#7268AE"
            />
            <g
              style={{
                mixBlendMode: "screen",
              }}
              className={clsx(
                "transition-all duration-500",
                gradient && gradient == "true" ? "opacity-100" : "opacity-0",
              )}
            >
              <path
                d="M595.372 -0.000234566L639.873 61.9999L595.372 124L6.10352e-05 124L5.56149e-05 -0.000208541L595.372 -0.000234566Z"
                fill="url(#paint0_linear_2095_13768)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_76_17332"
              x1={418.037}
              y1={-10.1037}
              x2={229.633}
              y2={124.31}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54B9CF" />
              <stop offset={0.409548} stopColor="#547CCF" />
              <stop offset={1} stopColor="#A754CF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <WebIcon
        gradient={gradient}
        // className={clsx(
        //   "absolute top-[30px] transition-all duration-500",
        //   gradient && gradient == "true" ? "right-[7.5px] " : "right-[37.5px]",
        // )}
        className={clsx(
          "absolute transition-all duration-500 ease-in-out rotate-180",
          gradient && gradient == "true"
            ? "right-[-60px] top-[15px]"
            : "right-[38px] top-[30px]",
        )}
      />
    </div>
  );
}

export default Blocks8;
