import React from "react";
import clsx from "clsx";
import CallIcon from "../blockIcons/CallIcon";
import SeoIcon from "../blockIcons/SeoIcon";
import CreativeIcon from "../blockIcons/CreativeIcon";
import AnalysisIcon from "../blockIcons/AnalysisIcon";
import ItIcon from "../blockIcons/ItIcon";
import PmsIcon from "../blockIcons/PmsIcon";
import OtaIcon from "../blockIcons/OtaIcon";
import WebIcon from "../blockIcons/WebIcon";
import DgtlfaceIcon from "../blockIcons/DgtlfaceIcon";

const iconAdjustments = {
  [CallIcon]: "translate-x-[55px] translate-y-[1px]",
  [SeoIcon]: "translate-x-[8px] translate-y-[7px]",
  [CreativeIcon]: "translate-x-[5px] translate-y-[5px]",
  [AnalysisIcon]: "translate-x-[17px] translate-y-[-2px]",
  [ItIcon]: "translate-x-[15px] translate-y-[-1px]",
  [PmsIcon]: "translate-x-[10px] translate-y-[5px]",
  [OtaIcon]: "translate-x-[13px] translate-y-[0px]",
  [WebIcon]: "translate-x-[13px] translate-y-[0px]",
  [DgtlfaceIcon]: "translate-x-[9px] translate-y-[5px]",
};

function BlockDeneme({
  gradient,
  IconComponent,
  iconClass,
  svgGradientId = "paint0_linear",
  gradientPosition = {
    x1: "482.037",
    y1: "-10.104",
    x2: "293.633",
    y2: "124.31",
  },
  gradientColors = ["#54B9CF", "#547CCF", "#A754CF"],
  svgHeight = 124,
  svgProps,
  ...props
}) {
  return (
    <div {...props}>
      <div className="relative h-full w-full">
        <svg
          width={500}
          height={svgHeight}
          viewBox={`0 0 659 ${svgHeight}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            "transition-all duration-500",
            gradient === "true" ? "ml-[25px] xl:ml-[100px]" : "",
          )}
        >
          <g>
            <rect
              width={124}
              height={595.36}
              transform={`matrix(-4.37114e-08 -1 -1 4.37114e-08 595.36 ${svgHeight})`}
              fill={gradient === "true" ? "#625995" : "#2B2455"}
            />
            <rect
              width={62.0001}
              height={595.36}
              transform={`matrix(-4.37114e-08 -1 -1 4.37114e-08 595.36 ${svgHeight})`}
              fill={gradient === "true" ? "#9A94BD" : "#140F25"}
            />
            <path
              d="M640.36 62.0002L595.36 0.000134995L550.36 62.0003L595.36 124L640.36 62.0002Z"
              fill="#7268AE"
            />
            <g
              style={{ mixBlendMode: "screen" }}
              className={clsx(
                "transition-all duration-500",
                gradient === "true" ? "opacity-100" : "opacity-0"
              )}
            >
              <path
                d="M595.372 -0.000234566L639.873 61.9999L595.372 124L0 124L0 -0.000208541L595.372 -0.000234566Z"
                fill={`url(#${svgGradientId})`}
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id={svgGradientId}
              x1={gradientPosition.x1}
              y1={gradientPosition.y1}
              x2={gradientPosition.x2}
              y2={gradientPosition.y2}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={gradientColors[0]} />
              <stop offset="0.409548" stopColor={gradientColors[1]} />
              <stop offset="1" stopColor={gradientColors[2]} />
            </linearGradient>
          </defs>
        </svg>
        {IconComponent && (
          <IconComponent
            gradient={gradient}
            className={clsx(
              "absolute transition-all duration-500 ease-in-out scale-75",
              gradient === "true"
                ? iconClass?.active || "right-[-20px] top-[20px]"
                : iconClass?.default || "right-[35px] top-[30px]",
              iconAdjustments[IconComponent]
            )}
          />
        )}
      </div>
    </div>
  );
}

export default BlockDeneme;
