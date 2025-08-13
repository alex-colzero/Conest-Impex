"use client";

import React from "react";

export const FigmaHeroNew = () => {
  return (
    <div className="relative w-full h-[766px] bg-[#05213C] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room@2x.png" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05213C] via-[#05213C]/95 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-[61px] px-[250px] pt-[159px]">
        <div className="flex flex-col gap-[34px]">
          {/* Title and subtitle */}
          <div className="flex flex-col gap-5">
            <h1 className="w-[741px] text-white text-[56px] font-semibold font-['Poppins'] leading-[72.8px]">
              Instalații gaze și centrale<br/>termice constanța
            </h1>
            <p className="text-white text-[30px] font-normal font-['Poppins'] tracking-[3px]">
              Autorizați ANRE & ISCIR din 1996
            </p>
          </div>

          {/* Features */}
          <div className="flex gap-10">
            <div className="flex items-center gap-2.5">
              <div className="w-[19px] h-[19px] bg-[#F2B821]" />
              <span className="text-white text-base font-medium font-['Poppins'] capitalize tracking-[0.8px]">
                Autorizat ANRE
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-[19px] h-[19px] bg-[#F2B821]" />
              <span className="text-white text-base font-medium font-['Poppins'] capitalize tracking-[0.8px]">
                Certificat ISCIR
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-[19px] h-[19px] bg-[#F2B821]" />
              <span className="text-white text-base font-medium font-['Poppins'] capitalize tracking-[0.8px]">
                Garanție 2 ani
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-10">
          <button className="px-9 py-[18px] border border-[#F2B821] text-[#F2B821] rounded-[10px] flex items-center gap-2.5 hover:bg-[#F2B821] hover:text-[#05213C] transition-all">
            <span className="text-center text-base font-semibold font-['Poppins'] tracking-[1.28px]">
              Cere Ofertă
            </span>
          </button>
          <button className="px-9 py-[18px] bg-[#F2B821] rounded-[10px] flex items-center gap-2.5 hover:bg-[#e6a61e] transition-all">
            <svg className="w-6 h-6 text-[#05213C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-center text-[#05213C] text-base font-semibold font-['Poppins'] uppercase tracking-[1.28px]">
              0758 xxx xxx
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};