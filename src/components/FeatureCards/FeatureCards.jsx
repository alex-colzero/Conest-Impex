"use client";

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FeatureCards = ({ vector = "/img/vector.svg" }) => {
  return (
    <div className="feature-cards">
      <div className="text-wrapper-41">Solicitare Ofertă</div>

      <div className="type-field">
        <div className="frame-6">
          <div className="text-wrapper-42">Numele dvs. complet</div>
        </div>

        <div className="text-wrapper-43">Nume Complet *</div>
      </div>

      <div className="type-field">
        <div className="frame-7">
          <div className="text-wrapper-44">0xxx-xxx-xxx</div>
        </div>

        <div className="text-wrapper-43">Telefon *</div>
      </div>

      <div className="type-field">
        <div className="frame-7">
          <div className="frame-8">
            <div className="text-wrapper-45">Instaltie gaze</div>

            <div className="arrow-down">
              <img className="vector-8" alt="Vector" src={vector} />
            </div>
          </div>
        </div>

        <div className="text-wrapper-43">Tipul Serviciului</div>
      </div>

      <div className="type-field-2">
        <div className="frame-9">
          <p className="text-wrapper-46">
            Descrieți pe scurt proiectul dvs ...
          </p>
        </div>

        <div className="text-wrapper-43">Descrierea Proiectului</div>
      </div>

      <div className="btn-6">
        <p className="text-wrapper-47">
          Trimite Solicitarea - Răspuns în 30 minute
        </p>
      </div>
    </div>
  );
};

FeatureCards.propTypes = {
  vector: PropTypes.string,
};
