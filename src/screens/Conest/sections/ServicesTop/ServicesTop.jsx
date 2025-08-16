"use client";

import React from "react";
import "./style.css";

export const ServicesTop = () => {
  return (
    <div className="services-top">
      <div className="feature-cards-3">
        <div className="frame-icon-3">
          <img className="icon-4" alt="Icon" src="/img/icon-7.png" />
        </div>

        <div className="text-9">
          <div className="centrale-termice-nc-2">Instalații gaze naturale</div>

          <p className="text-wrapper-39">
            Proiectare și execuție instalații gaze naturale conforme ANRE.
            Branșamente, conducte de distribuție și aparate consumatoare cu
            garanție completă.
          </p>
        </div>

        <button className="btn-2">
          <div className="servicii-centrale-3">Detalii Instalații Gaze ➔</div>
        </button>
      </div>

      <div className="feature-cards-3">
        <div className="frame-icon-3">
          <img className="icon-5" alt="Icon" src="/img/icon-8.png" />
        </div>

        <div className="text-9">
          <div className="centrale-termice-nc-2">
            Centrale termice &amp; încălzire
          </div>

          <p className="text-wrapper-39">
            Montaj și autorizare centrale termice cu tiraj forțat sau natural.
            Service autorizat ISCIR pentru toate mărcile de centrale.
          </p>
        </div>

        <button className="btn-2">
          <div className="servicii-centrale-3">Servicii Centrale ➔</div>
        </button>
      </div>

      <div className="feature-cards-3">
        <div className="frame-icon-3">
          <img
            className="service-icon"
            alt="Service icon"
            src="/img/service-icon.png"
          />
        </div>

        <div className="text-9">
          <div className="centrale-termice-nc-2">
            Revizii și verificări ANRE
          </div>

          <p className="text-wrapper-39">
            Verificări tehnice periodice obligatorii la 2 ani. Revizii complete
            și eliberare certificate de conformitate.
          </p>
        </div>

        <button className="btn-2">
          <div className="servicii-centrale-3">Programează Revizie ➔</div>
        </button>
      </div>
    </div>
  );
};
