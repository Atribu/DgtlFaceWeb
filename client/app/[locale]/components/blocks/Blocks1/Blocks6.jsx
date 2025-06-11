import clsx from "clsx";
import React from "react";
import PmsIcon from "../blockIcons/PmsIcon"; // Dosya yolunu kontrol edin

function Blocks6({ gradient, ...props }) {
  return (
    <div {...props} className={clsx("relative", props.className)}>
      <svg
        width={658}
        height={124}
        viewBox="0 0 658 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          "transition-all duration-500",
          gradient && gradient === "true" ? "ml-[25px] xl:ml-[100px]" : ""
        )}
      >
        <g id={6}>
          <rect
            id="left"
            width={124}
            height={595.36}
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 595.36 124)"
            fill={gradient && gradient === "true" ? "#625995" : "#2B2455"}
          />
          <rect
            id="right"
            width={62.0001}
            height={595.36}
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 595.36 124)"
            fill={gradient && gradient === "true" ? "#9A94BD" : "#140F25"}
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
              gradient && gradient === "true" ? "opacity-100" : "opacity-0"
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
        className={clsx(
          "absolute transition-all duration-500 ease-in-out",
          gradient && gradient === "true"
            ? "right-[-50px] top-[20px]"
            : "right-[40px] top-[35px]"
        )}
      />
    </div>
  );
}

export default Blocks6;
