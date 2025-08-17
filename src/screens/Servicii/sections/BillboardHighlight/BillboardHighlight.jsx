"use client";

import React from "react";
import { FeatureCards } from "../../../../components/FeatureCards";
import { Check9 } from "../../../../icons/Check9";
import "./style.css";

export const BillboardHighlight = () => {
  return (
    <div className="billboard-highlight">
      <FeatureCards
        className="feature-cards-contact"
        vector="/img/vector-52.svg"
      />
      <div className="content">
        <div className="text-5">
          <div className="text-6">
            <div className="text-wrapper-51">Contactați-ne Acum</div>

            <p className="text-wrapper-52">
              Obțineți o ofertă personalizată pentru proiectul dvs. Răspundem în
              maximum 30 de minute.
            </p>
          </div>

          <div className="why-choose-2">
            <div className="group-2">
              <div className="element-16">
                <Check9 className="check-17" color="#F2B821" />
                <p className="telefon-principal">
                  <span className="text-wrapper-53">
                    Telefon Principal
                    <br />
                  </span>

                  <a
                    href="tel:+40XXXXXXXXX"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-54">0xxx-xxx-xxx</span>
                  </a>
                </p>
              </div>

              <div className="element-17">
                <Check9 className="check-17" color="#F2B821" />
                <p className="div-9">
                  <span className="text-wrapper-53">
                    Email
                    <br />
                  </span>

                  <a
                    href="mailto:contact@conest-gaze-centrale.ro"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-54">
                      Contact@conest-gaze-centrale.ro
                    </span>
                  </a>
                </p>
              </div>
            </div>

            <div className="group-3">
              <div className="element-16">
                <Check9 className="check-17" color="#F2B821" />
                <p className="div-9">
                  <span className="text-wrapper-53">
                    Urgențe 24/7
                    <br />
                  </span>

                  <a
                    href="tel:+40XXXXXXXXX"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-54">0xxx-xxx-xxx</span>
                  </a>
                </p>
              </div>

              <div className="element-17">
                <Check9 className="check-17" color="#F2B821" />
                <p className="div-9">
                  <span className="text-wrapper-53">
                    Adresa
                    <br />
                  </span>

                  <span className="text-wrapper-55">
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
    </div>
  );
};
