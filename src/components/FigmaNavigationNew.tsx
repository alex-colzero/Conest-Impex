"use client";

import React, { useState } from "react";

export const FigmaNavigationNew = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-[155px] px-[250px] bg-white flex items-center sticky top-0 z-50">
      <div className="w-[1420px] h-[155px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-[220px] h-[93px] relative">
            <div className="p-2.5 absolute inset-0 flex justify-center items-center">
              <div className="w-[200px] h-[73px] relative overflow-hidden">
                <div className="w-[197.52px] h-[35.15px] left-[2px] top-[19px] absolute bg-[#05213C]" />
                <div className="w-[34.19px] h-[33.94px] left-[39.35px] top-[19.39px] absolute bg-[#05213C]" />
                <div className="w-[21.37px] h-[25.51px] left-[45.76px] top-[23.64px] absolute bg-[#F2B821]" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center gap-20">
          <nav className="flex items-center gap-[30px]">
            <a href="#servicii" className="flex items-center gap-1.5">
              <span className="text-[#05213C] text-[22px] font-medium font-['Poppins'] hover:text-[#F2B821] transition-colors">
                Servicii
              </span>
            </a>
            <a href="#despre" className="flex items-center gap-1.5">
              <span className="text-[#05213C] text-[22px] font-medium font-['Poppins'] hover:text-[#F2B821] transition-colors">
                Despre Noi
              </span>
            </a>
            <a href="#zone" className="flex items-center gap-1.5">
              <span className="text-[#05213C] text-[22px] font-medium font-['Poppins'] hover:text-[#F2B821] transition-colors">
                Zone Deservite
              </span>
            </a>
            <a href="#contact" className="flex items-center gap-1.5">
              <span className="text-[#05213C] text-[22px] font-medium font-['Poppins'] hover:text-[#F2B821] transition-colors">
                Contact
              </span>
            </a>
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center gap-[19px]">
            <button className="px-9 py-[18px] bg-[#F2B821] rounded-[20px] flex items-center gap-2.5 hover:bg-[#e6a61e] transition-all">
              <svg className="w-6 h-6 text-[#05213C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-[#05213C] text-base font-semibold font-['Poppins'] uppercase tracking-[1.28px]">
                0758 xxx xxx
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};