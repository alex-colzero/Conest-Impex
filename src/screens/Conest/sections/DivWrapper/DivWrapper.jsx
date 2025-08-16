"use client";

import React from "react";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="para-wrapper">
        <div className="para-3">
          <div className="title-7">
            <p className="text-wrapper-36">
              Siguranță și eficiență pentru casa ta
            </p>
          </div>

          <p className="text-wrapper-37">
            Integram cele mai noi tehnologii pentru a vă transforma locuința
            într-un spațiu mai sigur și mai eficient energetic, cu sisteme smart
            home și protecție automată împotriva gazelor.
          </p>
        </div>
      </div>

      <div className="cards-2">
        <div className="feature-cards-wide">
          <div className="frame-4">
            <div className="frame-icon-2">
              <div className="flame-big">
                <img className="image" alt="Image" src="/img/image-8.png" />
              </div>
            </div>

            <div className="frame-5">
              <div className="modernizare-smart-2">
                Senzori gaze și electrovalve
              </div>

              <p className="text-wrapper-38">
                Montaj detectoare gaze naturale cu electrovalvă automată.
                Siguranță completă pentru familia dvs.
              </p>

              <button className="servicii-centrale-wrapper">
                <div className="servicii-centrale">Sisteme Siguranță ➔</div>
              </button>
            </div>
          </div>
        </div>

        <div className="feature-cards-wide">
          <div className="frame-4">
            <div className="frame-icon-2">
              <img className="image-2" alt="Image" src="/img/image-9.png" />
            </div>

            <div className="frame-5">
              <div className="modernizare-smart-2">
                Modernizare și Smart-Home
              </div>

              <p className="text-wrapper-38">
                Modernizarea instalațiilor existente și integrarea cu sisteme
                smart home. Eficiență energetică maximă.
              </p>

              <button className="servicii-centrale-wrapper">
                <div className="servicii-centrale">Modernizare ➔</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
