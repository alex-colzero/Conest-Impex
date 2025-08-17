"use client";

import React from "react";
import { FeatureCardsSmall } from "../../../../components/FeatureCardsSmall";
import "./style.css";

export const ServicesRevizie = () => {
  return (
    <div className="services">
      <div className="text-7">
        <div className="anre-iscir-wrapper">
          <div className="anre-iscir">Revizii & Verificări</div>
        </div>

        <div className="title-3">
          <p className="text-wrapper-56">
            Ce Include o Revizie Completă ANRE & ISCIR
          </p>
        </div>

        <div className="para-2">
          <p className="div-10">
            Reviziile periodice sunt obligatorii conform legislației și includ verificări complete ale instalației de gaze, centralei termice și dispozitivelor de siguranță pentru a asigura funcționarea în parametri normali.
          </p>
        </div>
      </div>

      <div className="cards-2">
        <FeatureCardsSmall text="Verificare Centrală" text1="Inspecție tehnică completă" />
        <FeatureCardsSmall text="Control Gaze Arse" text1="Sistemul de evacuare" />
        <FeatureCardsSmall text="Dispozitive Siguranță" text1="Testare funcționare" />
        <FeatureCardsSmall text="Măsurători CO" text1="Verificare emisii" />
        <FeatureCardsSmall text="Certificate Oficiale" text1="Documentație completă" />
      </div>

      <div className="title-4">
        <div className="text-wrapper-56">PROGRAMĂRI: 0722 619 097</div>

        <div className="para-2">
          <p className="div-10">
            <a
              href="tel:+40722619097"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-57">
                Programează Revizia Acum
                <br />
              </span>
            </a>

            <span className="text-wrapper-57">
              Revizii programate în maxim 48 de ore în Constanța
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};