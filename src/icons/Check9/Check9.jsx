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
      height="20"
      viewBox="0 0 19 20"
      width="19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.5 0.5C4.25328 0.5 0 4.75328 0 10C0 15.2467 4.25328 19.5 9.5 19.5C14.7467 19.5 19 15.2467 19 10C19 4.75328 14.7467 0.5 9.5 0.5ZM9.5 2.33871C13.7341 2.33871 17.1613 5.76526 17.1613 10C17.1613 14.2341 13.7347 17.6613 9.5 17.6613C5.26591 17.6613 1.83871 14.2347 1.83871 10C1.83871 5.76591 5.26526 2.33871 9.5 2.33871ZM14.8707 7.32878L14.0074 6.45853C13.8287 6.2783 13.5376 6.27711 13.3574 6.45593L7.94269 11.8271L5.65227 9.5181C5.47349 9.33787 5.18244 9.33669 5.00221 9.51546L4.13193 10.3787C3.95169 10.5575 3.95051 10.8486 4.12932 11.0288L7.60682 14.5345C7.7856 14.7147 8.07665 14.7159 8.25688 14.5371L14.8682 7.97888C15.0483 7.80006 15.0495 7.50901 14.8707 7.32878Z"
        fill={color}
      />
    </svg>
  );
};

Check9.propTypes = {
  color: PropTypes.string,
};
