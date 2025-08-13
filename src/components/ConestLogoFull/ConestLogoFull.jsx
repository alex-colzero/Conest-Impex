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
  conest = "/img/conest-2.svg",
  img = "/img/conest-3.svg",
  conest1 = "/img/conest-4.svg",
}) => {
  return (
    <div className={`conest-logo-full ${className}`}>
      <div className="overlap-group-2">
        <img className="conest" alt="Conest" src={conest} />

        <img className="conest-2" alt="Conest" src={img} />

        <img className="conest-3" alt="Conest" src={conest1} />
      </div>
    </div>
  );
};

ConestLogoFull.propTypes = {
  conest: PropTypes.string,
  img: PropTypes.string,
  conest1: PropTypes.string,
};
