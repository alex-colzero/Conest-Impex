"use client";

import React from "react";
import { BillboardHighlight } from "./sections/BillboardHighlight";
import { BillboardHighlightWrapper } from "./sections/BillboardHighlightWrapper";
import { Blogs } from "./sections/Blogs";
import { Faqs } from "./sections/Faqs";
import { FooterWrapper } from "./sections/FooterWrapper";
import { ImageText } from "./sections/ImageText";
import { ImageText1 } from "./sections/ImageText1";
import { ImageTextWrapper } from "./sections/ImageTextWrapper";
import { Services } from "./sections/Services";
import { TopNavi } from "./sections/TopNavi";
import "./style.css";

export const Servicii = () => {
  return (
    <div className="servicii" data-model-id="111:2202">
      <div className="div-17">
        <div className="overlap">
          <div className="bottom">
            <p className="element-CON-EST-IMPEX-3">
              © 2024 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații
              Gaze &amp; Centrale Termice Constanța din 1996
              <br />
              Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform
              standardelor europene
            </p>
          </div>

          <FooterWrapper />
        </div>

        <Blogs />
        <Faqs />
        <BillboardHighlight />
        <Services />
        <BillboardHighlightWrapper />
        <ImageText />
        <ImageTextWrapper />
        <ImageText1 />
        <TopNavi />
      </div>
    </div>
  );
};
