"use client";

import React, { useState } from "react";

export const TopNavigationSection = (): React.JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { label: "Servicii", href: "#servicii" },
    { label: "Despre Noi", href: "#despre-noi" },
    { label: "Zone Deservite", href: "#zone-deservite" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex flex-col w-full min-h-[155px] items-center gap-2.5 px-4 md:px-8 lg:px-[250px] py-4 relative top-0 left-0 bg-white">
      <nav
        className="flex w-full max-w-7xl min-h-[155px] items-center justify-between relative flex-wrap"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="relative w-[180px] md:w-[220px] h-[75px] md:h-[93px] shrink-0">
          <div className="inline-flex items-center justify-center gap-2.5 relative">
            <img
              className="relative w-full h-full object-contain"
              src="/assets/anima-home-v1/frame-3488.svg"
              alt="Company Logo"
              width="220"
              height="93"
            />
          </div>
        </div>

        <div className="hidden lg:inline-flex items-center justify-center gap-20 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[73px] relative flex-[0_0_auto]">
            <ul className="gap-[30px] inline-flex items-center relative flex-[0_0_auto] list-none m-0 p-0">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className="gap-1.5 inline-flex items-center relative flex-[0_0_auto]"
                >
                  <a
                    href={item.href}
                    className="font-medium text-[#05213c] text-[22px] tracking-[0] leading-[normal] relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] hover:text-[#f2b721] transition-colors duration-200 no-underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="all-[unset] box-border inline-flex items-center justify-end gap-[19px] relative flex-[0_0_auto]">
                <a
                  href="tel:0758XXXXXX"
                  className="all-[unset] box-border inline-flex items-center gap-2.5 bg-[#f2b721] rounded-[20px] justify-center px-6 md:px-9 py-[14px] md:py-[18px] relative flex-[0_0_auto] overflow-hidden hover:bg-[#e0a61d] transition-colors duration-200 cursor-pointer"
                  aria-label="Call us at 0758 XXX XXX"
                >
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/assets/anima-home-v1/streamline-travel-hotel-air-conditioner-heating-ac-air-hvac-cool.svg"
                    width="24"
                    height="24"
                  />

                  <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-sm md:text-base text-center tracking-[1.28px] leading-[normal]">
                    0758 XXX XXX
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-t border-gray-200 py-4">
          <ul className="flex flex-col space-y-4">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-2 [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-lg hover:text-[#f2b721] transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="px-4">
              <a
                href="tel:0758XXXXXX"
                className="inline-flex items-center gap-2.5 bg-[#f2b721] rounded-[20px] justify-center px-6 py-[14px] hover:bg-[#e0a61d] transition-colors duration-200"
                aria-label="Call us at 0758 XXX XXX"
              >
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/assets/anima-home-v1/streamline-travel-hotel-air-conditioner-heating-ac-air-hvac-cool.svg"
                  width="24"
                  height="24"
                />
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base tracking-[1.28px]">
                  0758 XXX XXX
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
