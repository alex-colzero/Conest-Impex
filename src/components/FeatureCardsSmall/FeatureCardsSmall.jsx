"use client";

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FlameBig1 } from "../../icons/FlameBig1";
import "./style.css";

export const FeatureCardsSmall = ({
  text = "Scăpări De Gaze",
  text1 = "Intervenție imediată",
}) => {
  return (
    <div className="feature-cards-small">
      <div className="frame-33">
        <div className="flame-big-wrapper">
          <FlameBig1 className="flame-big" color="#05213C" />
        </div>

        <div className="frame-34">
          <div className="modernizare-smart-2">{text}</div>

          <div className="interven-ie-imediat">{text1}</div>
        </div>
      </div>
    </div>
  );
};

FeatureCardsSmall.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
