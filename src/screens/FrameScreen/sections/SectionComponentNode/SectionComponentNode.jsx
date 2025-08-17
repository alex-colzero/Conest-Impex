"use client";

import React from "react";
import { Check } from "../../../../components/Check";
import { FeatureCardsYellow } from "../../../../components/FeatureCardsYellow";
import "./style.css";

export const SectionComponentNode = () => {
  return (
    <div className="section-component-node">
      <div className="frame-18">
        <p className="exper-i-n-instala-ii">
          Experți în instalații
          <br />
          gaze din 1996
        </p>

        <p className="SC-CON-EST-IMPEX-SRL">
          SC CON EST IMPEX SRL este o companie cu tradiție în domeniul
          instalațiilor de gaze naturale și centrale termice, activând din 1996
          în Constanța și regiunea Dobrogea.
          <br />
          <br />
          Suntem autorizați ANRE pentru instalații gaze și certificați ISCIR
          (RVT și RSL) pentru centrale termice, garantând conformitatea completă
          cu reglementările naționale și europene.
        </p>

        <div className="text-3">
          <div className="frame-19">
            <div className="element-2">
              <Check />
              <p className="autoriza-ii-complete">
                <span className="span">
                  Autorizații complete
                  <br />
                </span>

                <span className="text-wrapper-19">
                  ANRE și ISCIR (RVT și RSL)
                  <br />
                </span>
              </p>
            </div>

            <div className="element-2">
              <Check />
              <p className="div-3">
                <span className="span">
                  Experiență vastă
                  <br />
                </span>

                <span className="text-wrapper-19">
                  Peste 27 de ani pe piață
                </span>
              </p>
            </div>
          </div>

          <div className="frame-19">
            <div className="element-3">
              <Check />
              <p className="div-3">
                <span className="span">
                  Siguranță garantată
                  <br />
                </span>

                <span className="text-wrapper-19">Standarde europene</span>
              </p>
            </div>

            <div className="element-2">
              <Check />
              <p className="div-3">
                <span className="span">
                  Reduceri speciale
                  <br />
                </span>

                <span className="text-wrapper-19">-25% pensionari</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <FeatureCardsYellow
        className="feature-cards-yellow-instance"
        divClassName="feature-cards-yellow-2"
        text="Ani de experiență"
        text1="3400+"
        text2="Conformitate ANRE / ISCIR"
      />
    </div>
  );
};
