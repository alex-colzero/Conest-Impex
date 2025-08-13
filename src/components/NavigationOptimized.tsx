"use client";

import React, { useState } from "react";

export const NavigationOptimized = (): React.JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { label: "Servicii", href: "#servicii" },
    { label: "Despre Noi", href: "#despre-noi" },
    { label: "Zone Deservite", href: "#zone-deservite" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/assets/anima-home-v1/logo@2x.png"
              alt="CONEST"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-[#05213c]">CONEST</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#05213c] hover:text-[#f2b721] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-[#05213c] font-semibold">Zone Deservite</span>
            <button className="px-6 py-2 bg-[#f2b721] text-[#05213c] font-bold rounded hover:bg-[#e6a61e] transition-colors">
              0758 XXX XXX
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#05213c]"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#05213c] hover:text-[#f2b721] transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="px-6 py-2 bg-[#f2b721] text-[#05213c] font-bold rounded hover:bg-[#e6a61e] transition-colors">
                0758 XXX XXX
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};