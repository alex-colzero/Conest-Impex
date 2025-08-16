"use client";

import React from "react";
import { FeatureCardsImage } from "../../../../components/FeatureCardsImage";
import "./style.css";

export const ServicesWrapper = () => {
  return (
    <div className="services-wrapper">
      <FeatureCardsImage modernAutonomous="/img/acoperire-primara-constanta.png" />
      <div className="feature-cards-image-2">
        <div className="img-wrapper">
          <img
            className="img-4"
            alt="Regiunea dobrogea"
            src="/img/regiunea-dobrogea.png"
          />
        </div>

        <div className="text-box">
          <div className="constan-a-acoperire">Regiunea Dobrogea</div>

          <div className="rectangle" />

          <div className="subtext">
            <p className="mamaia-propriet-i">
              <span className="text-wrapper-29">
                Năvodari
                <br />
              </span>

              <span className="text-wrapper-30">
                Case și vilet
                <br />
              </span>

              <span className="text-wrapper-29">
                <br />
                Medgidia
                <br />
              </span>

              <span className="text-wrapper-30">
                Service centrale
                <br />
                <br />
              </span>

              <span className="text-wrapper-29">
                Mangalia
                <br />
              </span>

              <span className="text-wrapper-30">
                Instalații sezonale
                <br />
                <br />
              </span>

              <span className="text-wrapper-29">
                Eforie
                <br />
              </span>

              <span className="text-wrapper-30">
                Hoteluri
                <br />
                <br />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="feature-cards-image-2">
        <div className="img-wrapper">
          <img
            className="img-4"
            alt="Proiecte nationale"
            src="/img/proiecte-nationale.png"
          />
        </div>

        <div className="text-box">
          <div className="constan-a-acoperire">Proiecte Naționale</div>

          <div className="rectangle" />

          <div className="subtext">
            <p className="mamaia-propriet-i">
              <span className="text-wrapper-29">
                București
                <br />
              </span>

              <span className="text-wrapper-30">
                Proiecte mari
                <br />
                <br />
              </span>

              <span className="text-wrapper-29">
                Cluj-Napoca
                <br />
              </span>

              <span className="text-wrapper-30">
                Dezvoltatori
                <br />
                <br />
              </span>

              <span className="text-wrapper-29">
                Iași
                <br />
              </span>

              <span className="text-wrapper-30">
                Modernizări
                <br />
                <br />
              </span>

              <span className="text-wrapper-29">
                Alte județe
                <br />
              </span>

              <span className="text-wrapper-30">
                La cerere
                <br />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
