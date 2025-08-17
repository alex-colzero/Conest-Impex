"use client";

import React from "react";
import "./style.css";

export const Div = () => {
  return (
    <div className="div">
      <div className="tag-2">
        <div className="text-wrapper-13">ANRE și ISCIR</div>
      </div>

      <p className="text-wrapper-14">Siguranță și eficiență pentru casa ta</p>

      <p className="text-wrapper-15">
        Integram cele mai noi tehnologii pentru a vă transforma locuința într-un
        spațiu mai sigur și mai eficient energetic, cu sisteme smart home și
        protecție automată împotriva gazelor.
      </p>

      <div className="frame-16">
        <div className="feature-cards-3">
          <div className="image-wrapper">
            <img
              className="image"
              alt="Image"
              src="/img/acoperire-primara-constanta.png"
            />
          </div>

          <div className="frame-17">
            <div className="text-2">
              <div className="text-wrapper-16">
                Senzori gaze și electrovalve
              </div>

              <p className="text-wrapper-17">
                Montaj detectoare gaze naturale cu electrovalvă automată.
                Siguranță completă pentru familia dvs.
              </p>
            </div>

            <button className="btn-4">
              <div className="text-wrapper-18">Sisteme Siguranță ➔</div>
            </button>
          </div>
        </div>

        <div className="feature-cards-3">
          <div className="image-wrapper">
            <img className="image-2" alt="Image" src="/img/image-9.png" />
          </div>

          <div className="frame-17">
            <div className="text-2">
              <div className="text-wrapper-16">Modernizare și Smart-Home</div>

              <p className="text-wrapper-17">
                Modernizarea instalațiilor existente și integrarea cu sisteme
                smart home. Eficiență energetică maximă.
              </p>
            </div>

            <button className="btn-4">
              <div className="text-wrapper-18">Modernizare ➔</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
