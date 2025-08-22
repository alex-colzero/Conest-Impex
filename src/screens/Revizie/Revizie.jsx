"use client";

import React from "react";
import Link from "next/link";
import { useWindowWidth } from "../../breakpoints";
import { ConestLogoFull } from "../../components/ConestLogoFull";
import { Check9 } from "../../icons/Check9";
import { TopBar } from "../FrameScreen/sections/TopBar";
import { BillboardHighlightRevizie } from "./sections/BillboardHighlightRevizie";
import { BillboardHighlightWrapper } from "../Servicii/sections/BillboardHighlightWrapper";
import { FaqsRevizie } from "./sections/FaqsRevizie";
import { FooterWrapper } from "../Servicii/sections/FooterWrapper";
import { ImageTextRevizie } from "./sections/ImageTextRevizie";
import { ImageText1 } from "../Servicii/sections/ImageText1";
import { ImageTextWrapper } from "../Servicii/sections/ImageTextWrapper";
import { ServicesRevizie } from "./sections/ServicesRevizie";
import "./style.css";

export const Revizie = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="servicii" data-model-id="111:2202">
      {/* Homepage Navigation */}
      {screenWidth < 1600 && (
        <TopBar />
      )}

      {screenWidth >= 1600 && (
        <div className="top-bar-2">
          <div className="conest-logo-full-instance-wrapper">
            <ConestLogoFull
              className="instance-node"
              flamedrop="/img/flamedrop-1.svg"
              overlapGroupClassName="conest-logo-full-6"
            />
          </div>

          <div className="navigation-2">
            <Link href="/" className="text-wrapper-75">Acasă</Link>
            <Link href="/servicii" className="text-wrapper-75">Servicii</Link>
            <div className="text-wrapper-75" style={{color: "#ff6b35"}}>Revizii</div>

            <div className="button-3">
              <div className="copy-2">COMENZI</div>
              <img
                className="phoneicon-2"
                alt="Phoneicon"
                src="/img/phoneicon-1.svg"
              />
              <div className="copy-2">0722 619 097</div>
            </div>
          </div>
        </div>
      )}

      {/* Gradient Header Section */}
      {screenWidth >= 1600 && (
        <div className="frame-35">
          <div className="frame-36">
            <p className="text-wrapper-76">
              Revizii și verificări ANRE pentru centrale termice
            </p>

            <p className="autoriza-i-ANRE-2">
              Autorizați ANRE &amp; ISCIR din 1996
            </p>

            <div className="text-13">
              <div className="why-choose-4">
                <div className="element-21">
                  <Check9 className="check-instance" color="#F2B821" />
                  <div className="text-wrapper-77">Revizii Obligatorii</div>
                </div>

                <div className="element-21">
                  <Check9 className="check-instance" color="#F2B821" />
                  <div className="text-wrapper-77">Certificate Oficiale</div>
                </div>

                <div className="element-21">
                  <Check9 className="check-instance" color="#F2B821" />
                  <div className="text-wrapper-77">Experiență 27+ Ani</div>
                </div>
              </div>
            </div>

            <div className="text-14">
              <div className="CTA-buttons-2">
                <button className="btn-8">
                  <div className="icon-10" />
                  <div className="text-wrapper-78">Programează Revizia</div>
                </button>

                <button className="button-4">
                  <img
                    className="phoneicon-2"
                    alt="Phoneicon"
                    src="/img/phoneicon-2.svg"
                  />
                  <div className="copy-2">0722 619 097</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
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
        {/* TopNaviRevizie removed - using homepage navigation instead */}
      </div>
    </div>
  );
};