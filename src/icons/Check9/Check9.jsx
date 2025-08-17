"use client";

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Check9 = ({ color = "#F2B821", className }) => {
  return (
    <svg
      className={`check-9 ${className}`}
      fill="none"
      height="19"
      viewBox="0 0 20 19"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 0C4.75328 0 0.5 4.25328 0.5 9.5C0.5 14.7467 4.75328 19 10 19C15.2467 19 19.5 14.7467 19.5 9.5C19.5 4.25328 15.2467 0 10 0ZM10 1.83871C14.2341 1.83871 17.6613 5.26526 17.6613 9.5C17.6613 13.7341 14.2347 17.1613 10 17.1613C5.76591 17.1613 2.33871 13.7347 2.33871 9.5C2.33871 5.26591 5.76526 1.83871 10 1.83871ZM15.3707 6.82878L14.5074 5.95853C14.3287 5.7783 14.0376 5.77711 13.8574 5.95593L8.44269 11.3271L6.15227 9.0181C5.97349 8.83787 5.68244 8.83669 5.50221 9.01546L4.63193 9.87874C4.45169 10.0575 4.45051 10.3486 4.62932 10.5288L8.10682 14.0345C8.28559 14.2147 8.57665 14.2159 8.75688 14.0371L15.3682 7.47888C15.5483 7.30006 15.5495 7.00901 15.3707 6.82878Z"
        fill={color}
      />
    </svg>
  );
};

Check9.propTypes = {
  color: PropTypes.string,
};
