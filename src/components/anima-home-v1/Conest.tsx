"use client";

import React from "react";
import { BillboardHighlightSection } from "./BillboardHighlightSection/BillboardHighlightSection";
import { BillboardHighlightWrapperSection } from "./BillboardHighlightWrapperSection/BillboardHighlightWrapperSection";
import { BillboardSection } from "./BillboardSection";
import { BlogsSection } from "./BlogsSection/BlogsSection";
import { ContentSection } from "./ContentSection/ContentSection";
import { ContentWrapperSection } from "./ContentWrapperSection";
import { FaqsSection } from "./FaqsSection";
import { FooterSection } from "./FooterSection/FooterSection";
import { HeroTextSection } from "./HeroTextSection";
import { ImportantServicesSection } from "./ImportantServicesSection/ImportantServicesSection";
import { IntroTextSection } from "./IntroTextSection";
import { OurWorksSection } from "./OurWorksSection";
import { ServicesSection } from "./ServicesSection/ServicesSection";
import { ServicesWrapperSection } from "./ServicesWrapperSection";
import { TopNavigationSection } from "./TopNavigationSection";

export const Conest = () => {
  return (
    <div
      className="bg-neutral-50 w-full min-h-screen"
      data-model-id="33:112"
    >
      <div className="bg-neutral-50 w-full relative">
        <TopNavigationSection />

        <BillboardSection />

        <div className="flex flex-col w-full max-w-7xl mx-auto items-center gap-[60px] relative mt-16 px-4 md:px-8">
          <div className="w-full max-w-3xl flex min-h-[60px] items-center justify-center gap-2.5 px-[13px] py-2.5 relative rounded-[10px] overflow-hidden border border-solid border-[#05213c33]">
            <p className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-xl tracking-[0.80px] leading-[normal]">
              Montaj și service autorizat pentru brandurile de top din domeniu
            </p>
          </div>

          <img
            className="relative w-full max-w-7xl flex-[0_0_auto]"
            alt="Logos"
            src="/assets/anima-home-v1/logos.svg"
          />
        </div>

        <HeroTextSection />

        <ContentSection />

        <div className="relative w-full px-4 md:px-8 mt-16">
          <ContentWrapperSection />
          <ImportantServicesSection />
        </div>

        <BillboardHighlightWrapperSection />

        <IntroTextSection />

        <ServicesWrapperSection />

        <OurWorksSection />

        <ServicesSection />

        <BillboardHighlightSection />

        <FaqsSection />

        <BlogsSection />

        <div className="relative w-full mt-16">
          <div className="flex w-full items-center justify-center px-4 md:px-8 py-[30px] bg-[#f2f2f2]">
            <p className="relative w-full max-w-7xl [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-sm md:text-base text-center tracking-[0] leading-[28.8px]">
              © 2024 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații
              Gaze &amp; Centrale Termice Constanța din 1996
              <br />
              Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform
              standardelor europene
            </p>
          </div>

          <FooterSection />
        </div>
      </div>
    </div>
  );
};
