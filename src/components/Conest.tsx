'use client';

import React from 'react';
import { TopNavigationSection } from './sections/TopNavigationSection';
import { HeroTextSection } from './sections/HeroTextSection';
import { ServicesSection } from './sections/ServicesSection';
import { ImportantServicesSection } from './sections/ImportantServicesSection';
import { IntroTextSection } from './sections/IntroTextSection';
import { BillboardHighlightSection } from './sections/BillboardHighlightSection';
import { OurWorksSection } from './sections/OurWorksSection';
import { BillboardSection } from './sections/BillboardSection';
import { FaqsSection } from './sections/FaqsSection';
import { BlogsSection } from './sections/BlogsSection';
import { FooterSection } from './sections/FooterSection';
import FloatingActions from './ui/FloatingActions';
import ScrollToTop from './ui/ScrollToTop';

export const Conest = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <TopNavigationSection />
      <main id="main-content">
        <HeroTextSection />
        <ServicesSection />
        <ImportantServicesSection />
        <IntroTextSection />
        <BillboardHighlightSection />
        <OurWorksSection />
        <BillboardSection />
        <FaqsSection />
        <BlogsSection />
        <FooterSection />
      </main>
      <FloatingActions />
      <ScrollToTop />
    </div>
  );
};