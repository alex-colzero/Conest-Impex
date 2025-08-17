"use client";

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FeatureCards = ({ className, vector = "/img/vector.svg" }) => {
  return (
    <div className={`feature-cards ${className}`}>
      <div className="text-wrapper-68">Solicitare Ofertă</div>

      <div className="type-field">
        <div className="overlap-group-4">
          <div className="frame-29">
            <div className="text-wrapper-69">Numele dvs. complet</div>
          </div>

          <div className="text-wrapper-70">Nume Complet *</div>
        </div>
      </div>

      <div className="type-field">
        <div className="frame-30">
          <div className="text-wrapper-71">0xxx-xxx-xxx</div>
        </div>

        <div className="text-wrapper-70">Telefon *</div>
      </div>

      <div className="type-field">
        <div className="frame-30">
          <div className="frame-31">
            <div className="text-wrapper-72">Instaltie gaze</div>

            <div className="arrow-down">
              <img className="vector-28" alt="Vector" src={vector} />
            </div>
          </div>
        </div>

        <div className="text-wrapper-70">Tipul Serviciului</div>
      </div>

      <div className="type-field-2">
        <div className="frame-32">
          <p className="text-wrapper-73">
            Descrieți pe scurt proiectul dvs ...
          </p>
        </div>

        <div className="text-wrapper-70">Descrierea Proiectului</div>
      </div>

      <div className="btn-7">
        <p className="text-wrapper-74">
          Trimite Solicitarea - Răspuns în 30 minute
        </p>
      </div>
    </div>
  );
};

FeatureCards.propTypes = {
  vector: PropTypes.string,
};
