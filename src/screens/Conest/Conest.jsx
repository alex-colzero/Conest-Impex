"use client";

import React from "react";
import { Billboard } from "./sections/Billboard";
import { BillboardHighlight } from "./sections/BillboardHighlight";
import { BillboardHighlightWrapper } from "./sections/BillboardHighlightWrapper";
import { Blogs } from "./sections/Blogs";
import { DivWrapper } from "./sections/DivWrapper";
import { Faqs } from "./sections/Faqs";
import { Footer } from "./sections/Footer";
import { HeroTextWrapper } from "./sections/HeroTextWrapper";
import { IntroText } from "./sections/IntroText";
import { OurWorks } from "./sections/OurWorks";
import { Services } from "./sections/Services";
import { ServicesImportant } from "./sections/ServicesImportant";
import { ServicesTop } from "./sections/ServicesTop";
import { ServicesWrapper } from "./sections/ServicesWrapper";
import { TopNavi } from "./sections/TopNavi";
import "./style.css";

export const Conest = () => {
  return (
    <div className="CONEST" data-model-id="33:112">
      <div className="div-13">
        <div className="overlap-2">
          <div className="bottom">
            <p className="element-CON-EST-IMPEX">
              © 2024 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații
              Gaze &amp; Centrale Termice Constanța din 1996
              <br />
              Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform
              standardelor europene
            </p>
          </div>

          <Footer />
        </div>

        <Blogs />
        <Faqs />
        <BillboardHighlight />
        <Services />
        <OurWorks />
        <ServicesWrapper />
        <IntroText />
        <BillboardHighlightWrapper />
        <div className="overlap-3">
          <DivWrapper />
          <ServicesImportant />
        </div>

        <ServicesTop />
        <HeroTextWrapper />
        <div className="brand-logos">
          <div className="tag-7">
            <p className="text-wrapper-54">
              Montaj și service autorizat pentru brandurile de top din domeniu
            </p>
          </div>

          <img
            className="brand-logos-2"
            alt="Brand logos"
            src="/img/brand-logos.svg"
          />
        </div>

        <Billboard />
        <TopNavi />
      </div>
    </div>
  );
};
