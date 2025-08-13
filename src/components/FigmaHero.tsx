"use client";

import React from "react";
import Image from "next/image";

export const FigmaHero = () => {
  return (
    <div className="w-full min-h-screen bg-[#05213C] relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 lg:px-16 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-8 max-w-2xl">
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-4xl lg:text-6xl font-semibold font-['Poppins'] leading-tight">
                Instalații gaze și centrale<br />
                termice Constanța
              </h1>
              <p className="text-white text-2xl lg:text-3xl font-normal font-['Poppins'] tracking-wider">
                Autorizați ANRE & ISCIR din 1996
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#F2B721] rounded-sm"></div>
                <span className="text-white text-base font-medium">Autorizat ANRE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#F2B721] rounded-sm"></div>
                <span className="text-white text-base font-medium">Certificat ISCIR</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#F2B721] rounded-sm"></div>
                <span className="text-white text-base font-medium">Garanție 2 ani</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-9 py-4 border-2 border-[#F2B721] text-[#F2B721] rounded-lg hover:bg-[#F2B721] hover:text-[#05213C] transition-all font-semibold">
                Cere Ofertă
              </button>
              <button className="px-9 py-4 bg-[#F2B721] text-[#05213C] rounded-lg hover:bg-[#e6a61e] transition-all font-semibold flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0758 XXX XXX
              </button>
            </div>
          </div>
          
          {/* Right Image - Van */}
          <div className="relative w-full lg:w-1/2">
            <img 
              src="/assets/anima-home-v1/gazelle-next-mockup.png"
              alt="CONEST Service Van"
              className="w-full h-auto object-contain max-w-[600px] mx-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2B721] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F2B721] rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};