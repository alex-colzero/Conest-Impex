"use client";

import React from "react";
import { BillboardHighlightRevizie } from "./sections/BillboardHighlightRevizie";
import { BillboardHighlightWrapper } from "../Servicii/sections/BillboardHighlightWrapper";
import { FaqsRevizie } from "./sections/FaqsRevizie";
import { FooterWrapper } from "../Servicii/sections/FooterWrapper";
import { ImageTextRevizie } from "./sections/ImageTextRevizie";
import { ImageText1 } from "../Servicii/sections/ImageText1";
import { ImageTextWrapper } from "../Servicii/sections/ImageTextWrapper";
import { ServicesRevizie } from "./sections/ServicesRevizie";
import { TopNaviRevizie } from "./sections/TopNaviRevizie";
import "./style.css";

export const Revizie = () => {
  return (
    <div className="servicii" data-model-id="111:2202">
      <div className="div-17">
        <div className="overlap">
          <div className="bottom">
            <p className="element-CON-EST-IMPEX-3">
              © 2024 CON EST IMPEX SRL. Toate drepturile rezervate. | Revizii Centrale Termice Constanța din 1996
              <br />
              Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform
              standardelor europene
            </p>
          </div>

          <FooterWrapper />
        </div>

        <div className="blogs">
          <div className="text-5">
            <div className="tag-wrapper">
              <div className="tag">
                <div className="text-wrapper-45">Informații Utile</div>
              </div>
            </div>

            <div className="frame-23">
              <div className="text-wrapper-46">
                Sfaturi pentru Menținerea Centralei în Stare Optimă
              </div>

              <p className="text-wrapper-47">
                Pe lângă reviziile obligatorii, iată câteva sfaturi pentru a vă menține centrala termică în stare perfectă de funcționare:
              </p>
            </div>
          </div>

          <div className="cards">
            <div className="frame-24">
              <img className="frame" alt="Frame" src="/img/frame-3549-1.png" />

              <div className="content-2">
                <div className="text-wrapper-48">Verificări Lunare</div>

                <p className="p">
                  Controlați lunar presiunea în sistem și curățați filtrul de la centrală pentru a preveni blocajele.
                </p>
              </div>
            </div>

            <div className="frame-24">
              <img className="frame" alt="Frame" src="/img/frame-3550-1.png" />

              <div className="content-2">
                <div className="text-wrapper-48">Urmărirea Consumului</div>

                <p className="p">
                  Monitorizați consumul de gaze - creșteri neobișnuite pot indica probleme ce necesită atenție.
                </p>
              </div>
            </div>

            <div className="frame-24">
              <img className="icon" alt="Icon" src="/img/icon-10.png" />

              <div className="content-2">
                <div className="text-wrapper-48">Aerisirea Spațiului</div>

                <p className="p">
                  Asigurați-vă că spațiul unde este instalată centrala este bine aerisit și gratele de ventilație nu sunt blocate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <FaqsRevizie />
        <BillboardHighlightRevizie />
        <ServicesRevizie />
        <BillboardHighlightWrapper />
        <ImageTextRevizie />
        <ImageTextWrapper />
        <ImageText1 />
        <TopNaviRevizie />
      </div>
    </div>
  );
};