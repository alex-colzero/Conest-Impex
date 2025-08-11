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
      className="bg-neutral-50 grid justify-items-center [align-items:start] w-screen"
      data-model-id="33:112"
    >
      <div className="bg-neutral-50 overflow-hidden w-[1920px] h-[14291px] relative">
        <TopNavigationSection />

        <BillboardSection />

        <div className="flex flex-col w-[1419px] items-center gap-[60px] absolute top-[1081px] left-[250px]">
          <div className="w-[743px] flex h-[60px] items-center justify-center gap-2.5 px-[13px] py-2.5 relative rounded-[10px] overflow-hidden border border-solid border-[#05213c33]">
            <p className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-xl tracking-[0.80px] leading-[normal]">
              Montaj și service autorizat pentru brandurile de top din domeniu
            </p>
          </div>

          <img
            className="relative w-[1419px] flex-[0_0_auto]"
            alt="Logos"
            src="/assets/anima-home-v1/logos.svg"
          />
        </div>

        <HeroTextSection />

        <ContentSection />

        <div className="absolute w-[2065px] h-[2101px] top-[2799px] left-[-73px]">
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

        <div className="absolute w-[1920px] h-[634px] top-[13657px] left-0">
          <div className="flex w-[1920px] h-[634px] items-center justify-around gap-[883px] px-[250px] py-[30px] absolute top-0 left-0 bg-[#f2f2f2]">
            <p className="relative w-[1420px] h-[574px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base text-center tracking-[0] leading-[28.8px]">
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
