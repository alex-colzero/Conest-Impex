"use client";

import React from "react";
import "./style.css";

export const FrameWrapper = () => {
  return (
    <div className="frame-wrapper">
      <div className="tag">
        <div className="text-wrapper-4">ANRE și ISCIR</div>
      </div>

      <p className="text-wrapper-5">
        Soluții complete pentru instalații gaze și centrale termice
      </p>

      <p className="text-wrapper-6">
        Cu o experiență de peste 27 de ani, oferim servicii complete autorizate
        ANRE și ISCIR pentru toate nevoile dvs. de încălzire și instalații gaze.
      </p>

      <div className="frame-4">
        <div className="feature-cards-wrapper">
          <div className="feature-cards-2">
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-icon">
                  <img className="img" alt="Icon" src="/img/icon-11.png" />
                </div>

                <div className="frame-7">
                  <div className="text-wrapper-7">Instalații gaze naturale</div>

                  <p className="text-wrapper-8">
                    Proiectare și execuție instalații gaze naturale conforme
                    ANRE. Branșamente, conducte de distribuție și aparate
                    consumatoare cu garanție completă.
                  </p>
                </div>
              </div>
            </div>

            <div className="frame-8">
              <div className="btn-wrapper">
                <button className="btn-2">
                  <div className="text-wrapper-9">
                    Detalii Instalații Gaze ➔
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-9">
        <div className="feature-cards-wrapper">
          <div className="feature-cards-2">
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-icon">
                  <img className="icon-2" alt="Icon" src="/img/icon-12.png" />
                </div>

                <div className="frame-7">
                  <div className="text-wrapper-7">
                    Centrale termice și încălzire
                  </div>

                  <p className="text-wrapper-8">
                    Montaj și autorizare centrale termice cu tiraj forțat sau
                    natural. Service autorizat ISCIR pentru toate mărcile de
                    centrale.
                  </p>
                </div>
              </div>
            </div>

            <div className="frame-8">
              <div className="btn-wrapper">
                <button className="btn-2">
                  <div className="text-wrapper-9">Servicii Centrale ➔</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-9">
        <div className="feature-cards-wrapper">
          <div className="feature-cards-2">
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-icon">
                  <img
                    className="service-icon"
                    alt="Service icon"
                    src="/img/service-icon-1.png"
                  />
                </div>

                <div className="frame-7">
                  <div className="text-wrapper-7">
                    Revizii și verificări ANRE
                  </div>

                  <p className="text-wrapper-8">
                    Verificări tehnice periodice obligatorii la 2 ani. Revizii
                    complete și eliberare certificate de conformitate.
                  </p>
                </div>
              </div>
            </div>

            <div className="frame-8">
              <div className="btn-wrapper">
                <button className="btn-2">
                  <div className="text-wrapper-9">Programează Revizie ➔</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
