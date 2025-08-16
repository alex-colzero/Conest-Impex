"use client";

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ConestLogoFull = ({
  className,
  overlapGroupClassName,
  flamedrop = "/img/flamedrop.svg",
}) => {
  return (
    <div className={`conest-logo-full ${className}`}>
      <div className={`flamedrop-wrapper ${overlapGroupClassName}`}>
        <img className="flamedrop" alt="Flamedrop" src={flamedrop} />
      </div>
    </div>
  );
};

ConestLogoFull.propTypes = {
  flamedrop: PropTypes.string,
};
