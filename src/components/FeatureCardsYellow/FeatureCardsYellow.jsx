"use client";

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FeatureCardsYellow = ({
  className,
  divClassName,
  text = "Ani de Experiență",
  text1 = "1000+",
  text2 = "Conformitate ANRE",
}) => {
  return (
    <div className={`feature-cards-yellow ${className}`}>
      <div className="frame-22">
        <div className="text-wrapper-37">27+</div>

        <div className={`ani-de-experien ${divClassName}`}>{text}</div>
      </div>

      <div className="spacing" />

      <div className="frame-23">
        <div className="element-10">{text1}</div>

        <div className="text-wrapper-38">Proiecte Realizate</div>
      </div>

      <div className="frame-23">
        <div className="text-wrapper-39">24/7</div>

        <div className="text-wrapper-40">Service Urgențe</div>
      </div>

      <div className="frame-23">
        <div className="text-wrapper-39">100%</div>

        <div className="text-wrapper-40">{text2}</div>
      </div>
    </div>
  );
};

FeatureCardsYellow.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
