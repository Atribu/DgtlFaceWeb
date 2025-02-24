import React from "react";
import DgtlfaceIcon from "../blockIcons/DgtlfaceIcon";
import clsx from "clsx";

function Blocks9(props) {
  return (
    <div {...props} className={clsx("relative", props.className)}>
      <div className="relative h-full w-full">
        <svg
          width={658}
          height={124}
          viewBox="0 0 658 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <g id="orta">
            <rect
              id="left"
              width={124}
              height={595.36}
              transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 595.36 123.999)"
              fill="#0D0918"
            />
            <rect
              id="right"
              width={62.0001}
              height={595.36}
              transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 595.36 123.999)"
              fill="#1C1533"
            />

            <path
              id="top"
              d="M640.36 61.9988L595.36 -0.00132985L550.36 61.9988L595.36 123.999L640.36 61.9988Z"
              fill="#140F25"
            />

            <g
              id="gradient"
              style={{
                mixBlendMode: "overlay",
              }}
            >
              <path
                d="M595.372 -0.00169941L639.873 61.9984L595.372 123.999L6.10352e-05 123.999L5.56149e-05 -0.00167339L595.372 -0.00169941Z"
                fill="url(#paint0_linear_2095_13780)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2095_13780"
              x1={640.36}
              y1={61.9995}
              x2={336.36}
              y2={61.9994}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#54B9CF" />
              <stop offset={0.282926} stopColor="#547CCF" />
              <stop offset={1} stopColor="#A754CF" />
            </linearGradient>
          </defs>
        </svg>
        <DgtlfaceIcon
          className={clsx(
            "absolute right-[42.5px] top-[35px] transition-all duration-500 ease-in-out",
          )}
        />
      </div>
    </div>
  );
}

export default Blocks9;
