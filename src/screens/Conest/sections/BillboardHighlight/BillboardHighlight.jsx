"use client";

import React from "react";
import { FeatureCards } from "../../../../components/FeatureCards";
import { Check4 } from "../../../../icons/Check4";
import "./style.css";

export const BillboardHighlight = () => {
  return (
    <div className="billboard-highlight">
      <div className="content">
        <div className="text-2">
          <div className="text-3">
            <div className="text-wrapper-14">Contactați-ne acum</div>

            <p className="text-wrapper-15">
              Obțineți o ofertă personalizată pentru proiectul dvs. Răspundem în
              maximum 30 de minute.
            </p>
          </div>

          <div className="why-choose">
            <div className="group-2">
              <div className="element-6">
                <Check4 className="check" color="#F2B821" />
                <p className="telefon-principal">
                  <span className="text-wrapper-16">
                    Telefon Principal
                    <br />
                  </span>

                  <a
                    href="tel:+40XXXXXXXXX"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-17">0xxx-xxx-xxx</span>
                  </a>
                </p>
              </div>

              <div className="element-7">
                <Check4 className="check" color="#F2B821" />
                <p className="div-5">
                  <span className="text-wrapper-16">
                    Email
                    <br />
                  </span>

                  <a
                    href="mailto:contact@conest-gaze-centrale.ro"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-17">
                      Contact@conest-gaze-centrale.ro
                    </span>
                  </a>
                </p>
              </div>
            </div>

            <div className="group-3">
              <div className="element-6">
                <Check4 className="check" color="#F2B821" />
                <p className="div-5">
                  <span className="text-wrapper-16">
                    Urgențe 24/7
                    <br />
                  </span>

                  <a
                    href="tel:+40XXXXXXXXX"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-17">0xxx-xxx-xxx</span>
                  </a>
                </p>
              </div>

              <div className="element-7">
                <Check4 className="check" color="#F2B821" />
                <p className="div-5">
                  <span className="text-wrapper-16">
                    Adresa
                    <br />
                  </span>

                  <span className="text-wrapper-18">
                    Strada [placeholder],
                    <br />
                    constanța, România
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeatureCards vector="/img/vector-29.svg" />
    </div>
  );
};
