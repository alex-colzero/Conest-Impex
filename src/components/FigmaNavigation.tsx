"use client";

import React, { useState } from "react";

export const FigmaNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Servicii", href: "#servicii" },
    { label: "Despre Noi", href: "#despre" },
    { label: "Lucrări", href: "#lucrari" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#F2B721] rounded-lg flex items-center justify-center">
              <span className="text-[#05213C] font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold font-['Poppins'] text-[#05213C]">CONEST</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#05213C] hover:text-[#F2B721] transition-colors font-['Poppins'] font-medium text-lg"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0758XXXXXX"
              className="flex items-center gap-2 px-6 py-3 bg-[#F2B721] text-[#05213C] rounded-lg hover:bg-[#e6a61e] transition-all font-['Poppins'] font-bold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0758 XXX XXX
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6 text-[#05213C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#05213C] hover:text-[#F2B721] transition-colors font-['Poppins'] font-medium text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:0758XXXXXX"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#f2b721] text-[#05213c] rounded-lg hover:bg-[#e6a61e] transition-all font-['Poppins'] font-bold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0758 XXX XXX
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};