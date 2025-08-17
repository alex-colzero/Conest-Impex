"use client";

import React from "react";
import { Check9 } from "../../../../icons/Check9";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div-2">
        <p className="p">Instalații gaze și centrale termice constanța</p>

        <p className="autoriza-i-ANRE">Autorizați ANRE &amp; ISCIR din 1996</p>

        <div className="text">
          <div className="why-choose">
            <div className="element">
              <Check9 className="check-9" color="#F2B821" />
              <div className="text-wrapper-2">Autorizat Anre</div>
            </div>

            <div className="element">
              <Check9 className="check-9" color="#F2B821" />
              <div className="text-wrapper-2">Certificat Iscir</div>
            </div>
          </div>
        </div>

        <div className="CTA-buttons-wrapper">
          <div className="CTA-buttons">
            <button className="btn">
              <div className="icon" />

              <div className="text-wrapper-3">Cere Ofertă</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
