"use client";

import React from "react";
import { FigmaNavigationNew } from "./FigmaNavigationNew";
import { FigmaHeroNew } from "./FigmaHeroNew";
import { FigmaServicesNew } from "./FigmaServicesNew";
import { FigmaAbout } from "./FigmaAbout";
import { FigmaWorks } from "./FigmaWorks";
import { FigmaFAQ } from "./FigmaFAQ";
import { FigmaContact } from "./FigmaContact";
import { FigmaFooterNew } from "./FigmaFooterNew";

export const FigmaLanding = () => {
  return (
    <div className="min-h-screen">
      <FigmaNavigationNew />
      <FigmaHeroNew />
      <FigmaServicesNew />
      <FigmaAbout />
      <FigmaWorks />
      <FigmaFAQ />
      <FigmaContact />
      <FigmaFooterNew />
    </div>
  );
};