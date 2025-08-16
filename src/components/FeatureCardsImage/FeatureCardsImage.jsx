"use client";

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FeatureCardsImage = ({
  modernAutonomous = "/img/modern-autonomous-heating-system-boiler-room.png",
}) => {
  return (
    <div className="feature-cards-image">
      <div className="modern-autonomous-wrapper">
        <img
          className="modern-autonomous"
          alt="Modern autonomous"
          src={modernAutonomous}
        />
      </div>

      <div className="text-13">
        <p className="constan-a-acoperire-2">
          <span className="text-wrapper-52">
            Constanța
            <br />
          </span>

          <span className="text-wrapper-53">Acoperire Primară</span>
        </p>

        <div className="rectangle-2" />

        <div className="mamaia-propriet-i-wrapper">
          <p className="mamaia-propriet-i-2">
            <span className="text-wrapper-54">
              Mamaia
              <br />
            </span>

            <span className="text-wrapper-55">
              Proprietăți premium
              <br />
            </span>

            <span className="text-wrapper-54">
              <br />
              Centrul Vechi
              <br />
            </span>

            <span className="text-wrapper-55">
              Modernizări
              <br />
            </span>

            <span className="text-wrapper-54">
              <br />
              Km 4-5
              <br />
            </span>

            <span className="text-wrapper-55">
              Zone rezidențiale
              <br />
            </span>

            <span className="text-wrapper-54">
              <br />
              Tomis
              <br />
            </span>

            <span className="text-wrapper-55">Apartamente noi</span>
          </p>
        </div>
      </div>
    </div>
  );
};

FeatureCardsImage.propTypes = {
  modernAutonomous: PropTypes.string,
};
