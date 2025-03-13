import clsx from "clsx";
import React from "react";

function SeoIcon({ gradient, ...props }) {
  return (
    <div {...props}>
      <svg
        width={48}
        height={51}
        viewBox="0 0 48 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          "transition-all duration-500 ease-in-out",
          gradient && gradient == "true"
            ? "!h-[76.5px] !w-[72px] svgShadow transform-gpu"
            : "h-[51px] w-[48px]",
        )}
      >
        <g id="seo">
          <path
            d="M27.3406 49.8725C28.4706 47.2925 29.7006 44.7325 30.7106 42.3725C31.3806 40.8225 30.0706 38.6725 28.8006 39.0225C28.4906 39.1125 28.1906 39.2125 27.8706 39.3125L27.8706 27.6325C27.8706 27.2925 28.0706 27.0225 28.3206 27.0225L32.5906 27.0225C34.9006 27.0225 36.7706 24.4425 36.7706 21.2625L36.7706 13.9325C36.7706 12.5125 35.9306 11.3525 34.9006 11.3525C33.8706 11.3525 33.0306 12.5025 33.0306 13.9225L33.0306 21.2525C33.0306 21.5925 32.8306 21.8625 32.5806 21.8625L28.3106 21.8625C26.0006 21.8625 24.1306 24.4425 24.1306 27.6225L24.1306 39.3025C23.8206 39.2025 23.5106 39.1025 23.2006 39.0125C21.9206 38.6625 20.6106 40.8125 21.2906 42.3625C22.3006 44.7225 23.5206 47.2825 24.6606 49.8625C25.3106 51.3325 26.7006 51.3325 27.3406 49.8625L27.3406 49.8725Z"
            fill={gradient && gradient == "true" ? "#fff" : "#140F25"}
          />
          <path
            d="M3.57058 29.6125L3.69058 29.6325C5.92058 29.8525 8.06058 29.3125 10.1306 28.7925C10.9806 28.5825 12.4206 28.1225 13.5006 27.8725C14.1006 32.7325 15.7906 37.2025 18.3206 40.6825C18.5206 40.9525 18.7206 41.2125 18.9206 41.4725C18.9206 41.0825 18.9506 40.7025 19.0106 40.3225C19.1906 39.3025 19.5706 38.3625 20.1106 37.6325C20.5206 37.0725 21.0006 36.6325 21.5406 36.3425L21.5006 36.2925C16.5106 29.4125 16.5206 18.2625 21.5106 11.3925C26.5006 4.5225 34.6006 4.5325 39.5806 11.4125C44.5706 18.2925 44.5606 29.4425 39.5706 36.3125C37.7806 38.7725 35.5106 40.4425 33.0406 41.1225C33.0906 42.0925 32.9206 43.0725 32.5606 43.9125C32.0406 45.1325 31.4706 46.3725 30.8806 47.6725C35.3506 47.5625 39.6206 45.0625 42.7806 40.6925C49.5406 31.3825 49.5406 16.2925 42.7806 6.9825C36.0206 -2.3275 25.0706 -2.3275 18.3106 6.9825C15.7806 10.4525 14.1006 14.9225 13.4906 19.7725C12.4106 19.5225 10.9706 19.0625 10.1206 18.8525C8.04058 18.3325 5.90058 17.7925 3.68058 18.0125L3.56058 18.0425C2.95058 18.2425 2.39059 18.6825 1.94059 19.3025C1.27059 20.2325 0.870582 21.4825 0.820582 22.7925L0.820582 24.8725C0.890582 27.1425 2.04058 29.1425 3.55058 29.6225L3.57058 29.6125Z"
            fill={gradient && gradient == "true" ? "#fff" : "#140F25"}
          />
        </g>
      </svg>
    </div>
  );
}

export default SeoIcon;
