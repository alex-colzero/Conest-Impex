"use client";

import React from "react";
import { FeatureCardsSmall } from "../../../../components/FeatureCardsSmall";
import "./style.css";

export const Services = () => {
  return (
    <div className="services">
      <div className="text-7">
        <div className="anre-iscir-wrapper">
          <div className="anre-iscir">Anre &amp; Iscir</div>
        </div>

        <div className="title-3">
          <p className="text-wrapper-56">
            Urgențe Gaze și Centrale Termice - Intervenții Rapide 24/7
          </p>
        </div>

        <div className="para-2">
          <p className="div-10">
            Când aveți o urgență cu gazele sau centrala termică, fiecare minut
            contează. Echipa CON EST IMPEX SRL este disponibilă NON-STOP pentru
            intervenții urgente în Constanța.
          </p>
        </div>
      </div>

      <div className="cards-2">
        <FeatureCardsSmall />
        <FeatureCardsSmall text="Centrale Oprite" text1="Remediere rapidă" />
        <FeatureCardsSmall
          text="Presiune Scăzută"
          text1="Diagnosticare sistem"
        />
        <FeatureCardsSmall
          text="Detecție Probleme"
          text1="Verificări siguranță"
        />
        <FeatureCardsSmall text="Remediere Avarii" text1="Piese originale" />
      </div>

      <div className="title-4">
        <div className="text-wrapper-56">URGENȚE 24/7: 0xxx-xxx-xxx</div>

        <div className="para-2">
          <p className="div-10">
            <a
              href="tel:+40XXXXXXXXX"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-57">
                Apelați Acum pentru Urgențe
                <br />
              </span>
            </a>

            <span className="text-wrapper-57">
              Timp de răspuns garantat sub 2 ore în Constanța
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
