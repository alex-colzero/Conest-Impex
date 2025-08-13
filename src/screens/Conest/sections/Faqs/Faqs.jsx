"use client";

import React from "react";
import "./style.css";

export const Faqs = () => {
  return (
    <div className="faqs">
      <div className="tag-2">
        <div className="text-wrapper-10">Întrebări frecvente</div>
      </div>

      <div className="title-2">
        <div className="text-wrapper-11">Avem răspunsuri</div>
      </div>

      <div className="dropdowns">
        <div className="faq">
          <div className="frame-3">
            <p className="text-wrapper-12">
              De ce este importantă întreținerea regulată a Conest?
            </p>

            <div className="ion-caret-down">
              <img className="vector-7" alt="Vector" src="/img/vector-23.svg" />
            </div>
          </div>

          <p className="text-wrapper-13">
            Întreținerea regulată a sistemului CONEST este esențială pentru a
            menține funcționarea eficientă a echipamentului și pentru a-i
            prelungi durata de viață. Aceasta ajută la prevenirea defectelor,
            asigură performanțe optime, îmbunătățește eficiența energetică și
            menține calitatea aerului din interior.
          </p>
        </div>

        <div className="faq-2">
          <p className="text-wrapper-12">
            Care sunt semnele că sistemul meu Conest are nevoie de reparații?
          </p>

          <div className="ion-caret-down">
            <img className="vector-7" alt="Vector" src="/img/vector-28.svg" />
          </div>
        </div>

        <div className="faq-2">
          <p className="text-wrapper-12">
            Cum pot îmbunătăți eficiența energetică a sistemului meu Conest?
          </p>

          <div className="ion-caret-down">
            <img className="vector-7" alt="Vector" src="/img/vector-28.svg" />
          </div>
        </div>

        <div className="faq-2">
          <p className="text-wrapper-12">
            Pot instala singur un sistem Conest?
          </p>

          <div className="ion-caret-down">
            <img className="vector-7" alt="Vector" src="/img/vector-28.svg" />
          </div>
        </div>

        <div className="faq-2">
          <p className="text-wrapper-12">
            Care este durata medie de viață a unui sistem Conest?
          </p>

          <div className="ion-caret-down">
            <img className="vector-7" alt="Vector" src="/img/vector-28.svg" />
          </div>
        </div>

        <div className="faq-2">
          <p className="text-wrapper-12">
            Cum pot îmbunătăți calitatea aerului din interiorul casei mele?
          </p>

          <div className="ion-caret-down">
            <img className="vector-7" alt="Vector" src="/img/vector-28.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
