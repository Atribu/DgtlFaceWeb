import clsx from "clsx";
import React from "react";

function CallIconV({ gradient, ...props }) {
  return (
    <div {...props}>
      <svg viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="call"
          d="M22.5502 12.5706C23.7451 11.006 24.2274 9.16886 23.8998 7.39187C23.5579 5.52284 22.3846 3.82727 20.5131 2.48921C18.6415 1.15116 16.2625 0.315764 13.6424 0.0715167C11.1518 -0.162112 8.58206 0.181251 6.38661 1.03435C5.87553 1.09453 5.38246 1.26444 4.98656 1.54408L1.81575 3.80957C0.815197 4.52461 0.815197 5.68567 1.81575 6.40072L2.87388 7.1547C3.87443 7.86974 5.50123 7.86974 6.50538 7.1547L9.67619 4.88921C10.6767 4.17417 10.6767 3.01311 9.67619 2.29806L8.61805 1.54408C8.57126 1.51222 8.52447 1.48037 8.47409 1.44851C12.2603 0.464437 16.6081 1.10868 19.5233 3.1901C22.4386 5.27151 23.3456 8.37594 21.9635 11.0768C21.9203 11.0414 21.8771 11.006 21.8304 10.9742L20.7722 10.2202C19.7717 9.50514 18.1449 9.50514 17.1407 10.2202L13.9699 12.4857C12.9694 13.2007 12.9694 14.3618 13.9699 15.0768L14.8913 15.7352C11.3966 16.4326 7.65349 15.7989 4.95056 14.0149C5.32487 13.9299 5.67398 13.7812 5.96911 13.5689L6.49818 13.1901C7.49873 12.4751 7.49873 11.314 6.49818 10.5989L4.91097 9.4662C3.91042 8.75116 2.28363 8.75116 1.27948 9.4662L0.750413 9.84496C-0.250138 10.56 -0.250138 11.7211 0.750413 12.4361L3.65849 14.5104C5.37886 15.7388 7.54912 16.5529 9.93172 16.8609C12.1956 17.1547 14.5062 16.9812 16.6225 16.3582C17.3495 16.4007 18.0981 16.2237 18.6523 15.8308L21.8232 13.5653C22.2191 13.2821 22.4566 12.9317 22.5394 12.5671L22.5502 12.5706Z"
          fill={gradient && gradient == "true" ? "#fff" : "#140F25"}
        />
      </svg>
    </div>
  );
}

export default CallIconV;
