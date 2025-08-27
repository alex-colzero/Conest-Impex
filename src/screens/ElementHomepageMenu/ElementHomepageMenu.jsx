"use client";

import React from "react";
import { ContentSection } from "./sections/ContentSection";
import { ExperienceDetailSection } from "./sections/ExperienceDetailSection";
import { ExpertiseBoxWrapperSection } from "./sections/ExpertiseBoxWrapperSection/ExpertiseBoxWrapperSection";
import { ExpertiseWrapperSection } from "./sections/ExpertiseWrapperSection/ExpertiseWrapperSection";
import { FooterDetailSection } from "./sections/FooterDetailSection/FooterDetailSection";
import { FrameWrapperSection } from "./sections/FrameWrapperSection/FrameWrapperSection";
import { HeadlineBoxWrapperSection } from "./sections/HeadlineBoxWrapperSection";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import { ServiceBoxDetailSection } from "./sections/ServiceBoxDetailSection";
import { TopBarSection } from "./sections/TopBarSection";

export const ElementHomepageMenu = () => {
  return (
    <div
      className="flex flex-col h-[15605px] items-center relative bg-[#f3f2ef]"
      data-model-id="357:13100"
    >
      <FrameWrapperSection />
      <ContentSection />
      <div className="flex flex-col max-w-[1600px] items-center gap-[50px] pt-0 pb-[200px] px-5 relative w-full flex-[0_0_auto]">
        <div className="inline-flex flex-wrap h-[60px] items-center justify-center gap-[10px_10px] px-5 py-2.5 relative bg-white rounded-[10px] overflow-hidden border border-solid border-[#05213c66]">
          <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-xl tracking-[0.80px] leading-[normal]">
            Montaj și service autorizat
          </div>
        </div>

        <img
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Logos"
          src="/img/logos-2.svg"
        />
      </div>

      <SectionComponentNode />
      <ServiceBoxDetailSection />
      <ExperienceDetailSection />
      <HeadlineBoxWrapperSection />
      <ExpertiseWrapperSection />
      <ExpertiseBoxWrapperSection />
      <FooterDetailSection />
      <TopBarSection />
    </div>
  );
};
