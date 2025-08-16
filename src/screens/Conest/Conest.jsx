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
      <div className="div-12">
        <Footer />
        <Blogs />
        <Faqs />
        <BillboardHighlight />
        <Services />
        <OurWorks />
        <ServicesWrapper />
        <IntroText />
        <BillboardHighlightWrapper />
        <DivWrapper />
        <ServicesImportant />
        <ServicesTop />
        <HeroTextWrapper />
        <div className="brand-logos">
          <div className="tag-8">
            <p className="text-wrapper-60">
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
