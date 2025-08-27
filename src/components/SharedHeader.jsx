"use client";

import React, { useState } from "react";
import Link from "next/link";

const navigationItems = [
  { label: "Acasă", href: "/" },
  { 
    label: "Servicii", 
    href: "/",
    dropdown: [
      { label: "Instalații gaze naturale", href: "/instalatii-gaze-naturale" },
      { label: "Centrale termice", href: "/centrale-termice" },
      { label: "Revizii ANRE", href: "/revizii-anre" },
      { label: "Sisteme siguranță", href: "/sisteme-siguranta" },
      { label: "Modernizare smart home", href: "/modernizare-smart-home" },
    ]
  },
  { label: "FAQ", href: "/intrebari-frecvente" },
];

export const SharedHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Navigation Header */}
      <header className="w-full flex items-center max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-[50px] py-[30px] justify-between relative bg-[#f5f4f1] min-h-[90px]">
        <Link href="/" className="flex items-center">
          <div className="relative w-[196px] h-9">
            <div className="relative h-[35px] left-px bg-[url(/img/wordmark-7.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[35px] h-[35px] top-0 left-[37px]"
                alt="Vector"
                src="/img/vector-79.svg"
              />
            </div>
          </div>
        </Link>
        
        <nav className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-[55px]">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-[22px] hover:text-[#f2b721] transition-colors flex items-center gap-1"
                    >
                      {item.label}
                      <span className="text-sm">▼</span>
                    </button>
                    
                    {servicesOpen && (
                      <div className="absolute top-full left-0 pt-2 w-64 z-50">
                        <div className="bg-white shadow-lg rounded-lg border border-gray-200 py-2">
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <Link
                              key={dropIndex}
                              href={dropItem.href}
                              className="block px-4 py-3 text-[#05213c] hover:bg-[#f2b721] hover:text-white transition-colors [font-family:'Poppins',Helvetica] font-medium"
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-[22px] hover:text-[#f2b721] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <a
              href="tel:0722619097"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-[18px] bg-[#f2b721] rounded-[20px] hover:bg-[#e0a61d] transition-colors"
            >
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px]">
                COMENZI
              </span>
              <img className="w-[23.75px] h-6" alt="Phone" src="/img/phoneicon-7.svg" />
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50"
            >
              <img
                className="w-6 h-6 cursor-pointer"
                alt="Menu"
                src={menuOpen ? "/img/menu-close.svg" : "/img/menu.svg"}
              />
            </button>
            
            <a
              href="tel:0722619097"
              className="flex items-center justify-center w-[60px] h-[60px] bg-[#f2b721] rounded-[20px] hover:bg-[#e0a61d] transition-colors"
            >
              <img
                className="w-6 h-6"
                alt="Phoneicon"
                src="/img/phoneicon-8.svg"
              />
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[90px] left-0 right-0 bg-white shadow-lg z-50 p-6 max-h-[calc(100vh-90px)] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="text-[#05213c] font-medium text-xl hover:text-[#f2b721] transition-colors py-3 px-2 rounded hover:bg-[#f2b721] hover:bg-opacity-10"
            >
              Acasă
            </Link>
            <div className="border-t pt-2">
              <p className="text-[#05213c] font-semibold mb-2">Servicii:</p>
              <Link 
                href="/instalatii-gaze-naturale" 
                onClick={() => setMenuOpen(false)}
                className="block text-[#05213c] font-medium text-lg hover:text-[#f2b721] transition-colors ml-4 mb-3 py-2 px-2 rounded hover:bg-[#f2b721] hover:bg-opacity-10"
              >
                Instalații gaze naturale
              </Link>
              <Link 
                href="/centrale-termice" 
                onClick={() => setMenuOpen(false)}
                className="block text-[#05213c] font-medium text-lg hover:text-[#f2b721] transition-colors ml-4 mb-3 py-2 px-2 rounded hover:bg-[#f2b721] hover:bg-opacity-10"
              >
                Centrale termice
              </Link>
              <Link 
                href="/revizii-anre" 
                onClick={() => setMenuOpen(false)}
                className="block text-[#05213c] font-medium text-lg hover:text-[#f2b721] transition-colors ml-4 mb-3 py-2 px-2 rounded hover:bg-[#f2b721] hover:bg-opacity-10"
              >
                Revizii ANRE
              </Link>
              <Link 
                href="/sisteme-siguranta" 
                onClick={() => setMenuOpen(false)}
                className="block text-[#05213c] font-medium text-lg hover:text-[#f2b721] transition-colors ml-4 mb-3 py-2 px-2 rounded hover:bg-[#f2b721] hover:bg-opacity-10"
              >
                Sisteme siguranță
              </Link>
              <Link 
                href="/modernizare-smart-home" 
                onClick={() => setMenuOpen(false)}
                className="block text-[#05213c] font-medium text-lg hover:text-[#f2b721] transition-colors ml-4 mb-3 py-2 px-2 rounded hover:bg-[#f2b721] hover:bg-opacity-10"
              >
                Modernizare smart home
              </Link>
            </div>
            <Link 
              href="/intrebari-frecvente" 
              onClick={() => setMenuOpen(false)}
              className="text-[#05213c] font-medium text-xl hover:text-[#f2b721] transition-colors py-3 px-2 rounded hover:bg-[#f2b721] hover:bg-opacity-10"
            >
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};