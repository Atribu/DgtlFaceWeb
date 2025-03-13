import clsx from "clsx";
import React from "react";
import PmsIcon from "./BlockIcons/PmsIcon";

function Block6({ gradient, ...props }) {
  //   console.log(gradient);
  return (
    <div {...props}>
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
        <g id={6}>
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
            d="M640.36 62.0002L595.36 0.000134995L550.36 62.0003L595.36 124L640.36 62.0002Z"
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
          {/* <path
            id="pms"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M520.49 80.9695C519.36 81.8195 518.17 82.4595 516.96 82.8995L515.73 90.1295L509.85 90.1295L508.59 82.7295C507.38 82.2395 506.21 81.5495 505.1 80.6595L500.52 84.5795L496.36 78.8495L499.27 72.3995C498.65 70.8495 498.19 69.2095 497.87 67.5295L492.62 65.8395L492.62 57.7395L497.99 56.0095C498.34 54.3495 498.84 52.7295 499.49 51.1995L496.65 44.8895L500.81 39.1595L505.49 43.1695C506.62 42.3195 507.81 41.6795 509.02 41.2395L510.25 34.0095L516.13 34.0095L517.39 41.4095C518.6 41.8995 519.77 42.5895 520.88 43.4795L525.46 39.5595L529.62 45.2895L526.71 51.7395C527.33 53.2895 527.79 54.9295 528.11 56.6095L533.36 58.2995L533.36 66.3995L527.99 68.1295C527.64 69.7895 527.14 71.4095 526.49 72.9395L529.33 79.2495L525.17 84.9795L520.49 80.9695ZM518.83 70.1195C515.6 74.5695 510.37 74.5695 507.14 70.1195C503.91 65.6695 503.91 58.4595 507.14 54.0095C510.37 49.5595 515.6 49.5595 518.83 54.0095C522.06 58.4595 522.06 65.6695 518.83 70.1195Z"
            fill="#140F25"
          /> */}
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_76_17308"
            x1={546.037}
            y1={-10.104}
            x2={357.633}
            y2={124.31}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#54B9CF" />
            <stop offset={0.409548} stopColor="#547CCF" />
            <stop offset={1} stopColor="#A754CF" />
          </linearGradient>
        </defs>
      </svg>
      <PmsIcon
        gradient={gradient}
        // className={clsx(
        //   "absolute top-[35px] transition-all duration-500",
        //   gradient && gradient == "true" ? "right-[10px] " : "right-[40px]",
        // )}
        className={clsx(
          "absolute transition-all duration-500 ease-in-out ",
          gradient && gradient == "true"
            ? "right-[-50px] top-[20px]"
            : "right-[40px] top-[35px]",
        )}
      />
    </div>
  );
}

export default Block6;