"use client";

import React from "react";
import "./style.css";

export const ImageTextRevizie = () => {
  return (
    <div className="image-text">
      <div className="big-image-wrapper">
        <img className="big-image" alt="Big image" src="/img/big-image-1.png" />
      </div>

      <div className="content-wrapper">
        <div className="content">
          <div className="tag-2">
            <div className="anre-iscir">Revizii ANRE & ISCIR</div>
          </div>

          <div className="title">
            <p className="text-wrapper-58">
              Revizii Periodice Obligatorii pentru Centrale Termice
            </p>
          </div>

          <div className="para">
            <p className="text-wrapper-59">
              Conform legislației în vigoare, toate centralele termice trebuie să treacă prin revizii periodice obligatorii la 2 ani. CON EST IMPEX SRL oferă servicii complete de revizie și verificare tehnică autorizate ANRE și ISCIR pentru siguranța și conformitatea instalației dumneavoastră.
            </p>
          </div>

          <div className="features">
            <div className="feature">
              <img className="vector" alt="Vector" src="/img/vector-51.svg" />
              <div className="text-wrapper-60">Verificări Tehnice Complete</div>
            </div>

            <div className="feature">
              <img className="vector" alt="Vector" src="/img/vector-52.svg" />
              <div className="text-wrapper-60">Certificate de Conformitate</div>
            </div>

            <div className="feature">
              <img className="vector" alt="Vector" src="/img/vector-45.svg" />
              <div className="text-wrapper-60">Autorizați ANRE & ISCIR</div>
            </div>
          </div>

          <button className="button">
            <div className="text-wrapper-61">Programează Revizia Acum</div>
            <img className="vector-2" alt="Vector" src="/img/vector-46.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};