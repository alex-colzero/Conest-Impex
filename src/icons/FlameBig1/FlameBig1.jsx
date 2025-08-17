"use client";

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FlameBig1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`flame-big-1 ${className}`}
      fill="none"
      height="55"
      viewBox="0 0 50 55"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M25.705 3C25.705 3 46 12.0725 46 30.1921C46 48.3117 34.6602 53 23.295 53C17.9124 53 12.7503 50.864 8.94426 47.062C5.13822 43.2599 3 38.1032 3 32.7263C3.07934 29.1965 3.9205 25.7253 5.46603 22.5501C7.01155 19.3748 9.225 16.5702 11.9552 14.3279C12.3664 17.7877 13.9722 20.9959 16.4962 23.4004C19.866 21.2781 22.536 18.2121 24.1736 14.5844C25.8111 10.9568 26.3437 6.92794 25.705 3Z"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="3"
      />
    </svg>
  );
};

FlameBig1.propTypes = {
  color: PropTypes.string,
};
