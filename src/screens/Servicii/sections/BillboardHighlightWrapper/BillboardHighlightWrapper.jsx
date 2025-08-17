"use client";

import React from "react";
import { FeatureCardsYellow } from "../../../../components/FeatureCardsYellow";
import { Check9 } from "../../../../icons/Check9";
import "./style.css";

export const BillboardHighlightWrapper = () => {
  return (
    <div className="billboard-highlight-wrapper">
      <FeatureCardsYellow
        className="feature-cards-yellow-3"
        text="Ani de Experiență"
        text1="1000+"
        text2="Conformitate ANRE"
      />
      <div className="content-2">
        <div className="text-8">
          <div className="text-9">
            <p className="exper-i-n-instala-ii-2">
              Experți în Instalații
              <br />
              Gaze din 1996
            </p>

            <p className="SC-CON-EST-IMPEX-SRL-2">
              SC CON EST IMPEX SRL este o companie cu tradiție în domeniul
              instalațiilor de gaze naturale și centrale termice, activând din
              1996 în Constanța și regiunea Dobrogea.
              <br />
              <br />
              Suntem autorizați ANRE pentru instalații gaze și certificați ISCIR
              (RVT și RSL) pentru centrale termice, garantând conformitatea
              completă cu reglementările naționale și europene.
            </p>
          </div>

          <div className="why-choose-3">
            <div className="group-4">
              <div className="element-18">
                <Check9 className="check-2" color="#F2B821" />
                <p className="autoriza-ii-complete-2">
                  <span className="text-wrapper-58">
                    Autorizații Complete
                    <br />
                  </span>

                  <span className="text-wrapper-59">
                    Anre Și Iscir (rvt Și Rsl)
                    <br />
                  </span>
                </p>
              </div>

              <div className="element-19">
                <Check9 className="check-2" color="#F2B821" />
                <p className="div-11">
                  <span className="text-wrapper-58">
                    Experiență Vastă
                    <br />
                  </span>

                  <span className="text-wrapper-59">
                    Peste 27 De Ani Pe Piață
                  </span>
                </p>
              </div>
            </div>

            <div className="group-5">
              <div className="element-18">
                <Check9 className="check-2" color="#F2B821" />
                <p className="div-11">
                  <span className="text-wrapper-58">
                    Siguranță Garantată
                    <br />
                  </span>

                  <span className="text-wrapper-59">Standarde Europene</span>
                </p>
              </div>

              <div className="element-19">
                <Check9 className="check-2" color="#F2B821" />
                <p className="div-11">
                  <span className="text-wrapper-58">
                    Reduceri Speciale
                    <br />
                  </span>

                  <span className="text-wrapper-59">-25% Pensionari</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
