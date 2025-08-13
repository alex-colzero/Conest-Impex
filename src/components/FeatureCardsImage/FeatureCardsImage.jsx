"use client";

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FeatureCardsImage = ({
  className,
  frameIconClassName,
  modernAutonomous = "/img/modern-autonomous-heating-system-boiler-room.png",
  text = "Constanța - Acoperire Primară",
  text1 = "Mamaia",
  text2 = " - Proprietăți premium<br/><br/>",
  text3 = "Centrul Vechi",
  text4 = " - Modernizări",
  text5 = "Km 4-5",
  text6 = " - Zone rezidențiale<br/><br/>",
  text7 = "Tomis",
  text8 = " - Apartamente noi",
}) => {
  return (
    <div className={`feature-cards-image ${className}`}>
      <div className={`modern-autonomous-wrapper ${frameIconClassName}`}>
        <img
          className="modern-autonomous"
          alt="Modern autonomous"
          src={modernAutonomous}
        />
      </div>

      <div className="frame-10">
        <div className="constan-a-acoperire">{text}</div>

        <div className="subtext-infos">
          <div className="subtext">
            <p className="div-12">
              <span className="text-wrapper-48">{text1}</span>

              <span className="text-wrapper-49">{text2}</span>

              <span className="text-wrapper-48">{text3}</span>

              <span className="text-wrapper-49">{text4}</span>
            </p>
          </div>

          <div className="km-zone-reziden-wrapper">
            <p className="div-12">
              <span className="text-wrapper-48">{text5}</span>

              <span className="text-wrapper-49">{text6}</span>

              <span className="text-wrapper-48">{text7}</span>

              <span className="text-wrapper-49">{text8}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureCardsImage.propTypes = {
  modernAutonomous: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
};
