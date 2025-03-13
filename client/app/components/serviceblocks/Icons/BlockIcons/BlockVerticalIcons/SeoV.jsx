import React from "react";

function SeoV({ gradient, ...props }) {
  return (
    <div {...props}>
      <svg
        viewBox="0 0 51 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="seo">
          <path
            d="M49.8725 21.0198C47.2925 19.8898 44.7325 18.6598 42.3725 17.6498C40.8225 16.9798 38.6725 18.2898 39.0225 19.5598C39.1125 19.8698 39.2125 20.1698 39.3125 20.4898H27.6325C27.2925 20.4898 27.0225 20.2898 27.0225 20.0398V15.7698C27.0225 13.4598 24.4425 11.5898 21.2625 11.5898H13.9325C12.5125 11.5898 11.3525 12.4298 11.3525 13.4598C11.3525 14.4898 12.5025 15.3298 13.9225 15.3298H21.2525C21.5925 15.3298 21.8625 15.5298 21.8625 15.7798V20.0498C21.8625 22.3598 24.4425 24.2298 27.6225 24.2298H39.3025C39.2025 24.5398 39.1025 24.8498 39.0125 25.1598C38.6625 26.4398 40.8125 27.7498 42.3625 27.0698C44.7225 26.0598 47.2825 24.8398 49.8625 23.6998C51.3325 23.0498 51.3325 21.6598 49.8625 21.0198H49.8725Z"
            fill={gradient && gradient == "true" ? "#fff" : "#140F25"}
          />
          <path
            d="M29.6125 44.7898L29.6325 44.6698C29.8525 42.4398 29.3125 40.2998 28.7925 38.2298C28.5825 37.3798 28.1225 35.9398 27.8725 34.8598C32.7325 34.2598 37.2025 32.5698 40.6825 30.0398C40.9525 29.8398 41.2125 29.6398 41.4725 29.4398C41.0825 29.4398 40.7025 29.4098 40.3225 29.3498C39.3025 29.1698 38.3625 28.7898 37.6325 28.2498C37.0725 27.8398 36.6325 27.3598 36.3425 26.8198L36.2925 26.8598C29.4125 31.8498 18.2625 31.8398 11.3925 26.8498C4.5225 21.8598 4.5325 13.7598 11.4125 8.77977C18.2925 3.78977 29.4425 3.79977 36.3125 8.78977C38.7725 10.5798 40.4425 12.8498 41.1225 15.3198C42.0925 15.2698 43.0725 15.4398 43.9125 15.7998C45.1325 16.3198 46.3725 16.8898 47.6725 17.4798C47.5625 13.0098 45.0625 8.73977 40.6925 5.57977C31.3825 -1.18023 16.2925 -1.18023 6.9825 5.57977C-2.3275 12.3398 -2.3275 23.2898 6.9825 30.0498C10.4525 32.5798 14.9225 34.2598 19.7725 34.8698C19.5225 35.9498 19.0625 37.3898 18.8525 38.2398C18.3325 40.3198 17.7925 42.4598 18.0125 44.6798L18.0425 44.7998C18.2425 45.4098 18.6825 45.9698 19.3025 46.4198C20.2325 47.0898 21.4825 47.4898 22.7925 47.5398H24.8725C27.1425 47.4698 29.1425 46.3198 29.6225 44.8098L29.6125 44.7898Z"
            fill={gradient && gradient == "true" ? "#fff" : "#140F25"}
          />
        </g>
      </svg>
    </div>
  );
}

export default SeoV;
