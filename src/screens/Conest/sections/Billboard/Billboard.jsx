"use client";

import React from "react";
import { Check4 } from "../../../../icons/Check4";
import "./style.css";

export const Billboard = () => {
  return (
    <div className="billboard">
      <div className="overlap">
        <div className="content-3">
          <div className="text-11">
            <div className="text-12">
              <p className="instala-ii-gaze-i-2">
                Instalații gaze și centrale
                <br />
                termice constanța
              </p>

              <p className="autoriza-i-ANRE">
                Autorizați ANRE &amp; ISCIR din 1996
              </p>
            </div>

            <div className="div-11">
              <div className="element-10">
                <Check4 className="check-11" color="#F2B821" />
                <div className="text-wrapper-42">Autorizat Anre</div>
              </div>

              <div className="element-10">
                <Check4 className="check-11" color="#F2B821" />
                <div className="text-wrapper-42">Certificat Iscir</div>
              </div>

              <div className="element-10">
                <Check4 className="check-11" color="#F2B821" />
                <div className="text-wrapper-42">Garanție 2 Ani</div>
              </div>
            </div>
          </div>

          <div className="div-11">
            <button className="btn-3">
              <div className="icon-6" />

              <div className="text-wrapper-43">Cere Ofertă</div>
            </button>

            <button className="btn-4">
              <div className="icon-7" />

              <div className="element-xxx-xxx">0758 XXX XXX</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
