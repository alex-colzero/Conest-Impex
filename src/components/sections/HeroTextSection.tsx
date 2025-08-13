import React from 'react';
import Link from 'next/link';

export const HeroTextSection = (): React.JSX.Element => {
  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 md:mb-8 rounded-full border border-primary/20 bg-primary/5">
            <span className="text-sm md:text-base font-medium text-primary tracking-wide">
              ANRE și ISCIR
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 md:mb-8 leading-tight">
            Soluții complete pentru instalații
            <br className="hidden sm:block" />
            <span className="text-primary"> gaze și centrale termice</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mb-8 md:mb-10 leading-relaxed">
            Cu o experiență de peste 27 de ani, oferim servicii complete
            autorizate ANRE și ISCIR pentru toate nevoile dvs. de încălzire și
            instalații gaze.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="#contact"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all transform hover:scale-105 text-center"
            >
              Solicită Ofertă Gratuită
            </Link>
            <a
              href="tel:+40741234567"
              className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-center"
            >
              Urgențe: 0741 234 567
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 w-full max-w-4xl">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">27+</div>
              <div className="text-sm text-text-secondary">Ani Experiență</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-text-secondary">Urgențe</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-text-secondary">Autorizat</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">-25%</div>
              <div className="text-sm text-text-secondary">Pensionari</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};