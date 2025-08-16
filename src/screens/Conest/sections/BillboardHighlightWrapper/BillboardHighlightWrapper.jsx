"use client";

import React from "react";
import { FeatureCardsYellow } from "../../../../components/FeatureCardsYellow";
import { Check4 } from "../../../../icons/Check4";
import "./style.css";

export const BillboardHighlightWrapper = () => {
  return (
    <div className="billboard-highlight-wrapper">
      <div className="content-2">
        <div className="text-6">
          <div className="text-7">
            <p className="exper-i-n-instala-ii">
              Experți în instalații
              <br />
              gaze din 1996
            </p>

            <p className="SC-CON-EST-IMPEX-SRL">
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

          <div className="why-choose-2">
            <div className="highlight-infos">
              <div className="element-8">
                <Check4 className="check-4" color="#F2B821" />
                <p className="autoriza-ii-complete">
                  <span className="text-wrapper-34">
                    Autorizații complete
                    <br />
                  </span>

                  <span className="text-wrapper-35">
                    ANRE și ISCIR (RVT și RSL)
                    <br />
                  </span>
                </p>
              </div>

              <div className="element-9">
                <Check4 className="check-4" color="#F2B821" />
                <p className="div-10">
                  <span className="text-wrapper-34">
                    Experiență vastă
                    <br />
                  </span>

                  <span className="text-wrapper-35">
                    Peste 27 de ani pe piață
                  </span>
                </p>
              </div>
            </div>

            <div className="highlight-infos-2">
              <div className="element-8">
                <Check4 className="check-4" color="#F2B821" />
                <p className="div-10">
                  <span className="text-wrapper-34">
                    Siguranță garantată
                    <br />
                  </span>

                  <span className="text-wrapper-35">Standarde europene</span>
                </p>
              </div>

              <div className="element-9">
                <Check4 className="check-4" color="#F2B821" />
                <p className="div-10">
                  <span className="text-wrapper-34">
                    Reduceri speciale
                    <br />
                  </span>

                  <span className="text-wrapper-35">-25% pensionari</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeatureCardsYellow
        divClassName="feature-cards-yellow-instance"
        text="Ani de experiență"
        text1="3400+"
        text2="Conformitate ANRE / ISCIR"
      />
    </div>
  );
};
