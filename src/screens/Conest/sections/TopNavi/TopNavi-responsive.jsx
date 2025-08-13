"use client";

import React, { useState } from "react";
import { ConestLogoFull } from "../../../../components/ConestLogoFull";
import "./style.css";
import "./responsive-nav.css";

export const TopNaviResponsive = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="top-navi">
      <div className="top-2">
        <div className="logo">
          <ConestLogoFull
            className="conest-logo-full-2"
            conest="/img/conest2-2.svg"
            conest1="/img/conest4-2.svg"
            img="/img/conest3-2.svg"
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="menu desktop-menu">
          <div className="nav-right">
            <div className="right">
              <div className="div-wrapper-2">
                <div className="text-wrapper-40">Servicii</div>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-40">Despre Noi</div>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-40">Zone Deservite</div>
              </div>

              <div className="div-wrapper-2">
                <div className="text-wrapper-40">Contact</div>
              </div>

              <button className="btn-wrapper">
                <button className="btn-5">
                  <img
                    className="streamline-travel"
                    alt="Streamline travel"
                    src="/img/streamline-travel-hotel-air-conditioner-heating-ac-air-hvac-cool.svg"
                  />
                  <div className="element-xxx-xxx-2">0758 XXX XXX</div>
                </button>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <nav className="mobile-nav">
              <a href="#servicii" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                Servicii
              </a>
              <a href="#despre" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                Despre Noi  
              </a>
              <a href="#zone" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                Zone Deservite
              </a>
              <a href="#contact" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </nav>
            
            <div className="mobile-cta">
              <button className="mobile-btn">
                <img
                  className="streamline-travel"
                  alt="Phone"
                  src="/img/streamline-travel-hotel-air-conditioner-heating-ac-air-hvac-cool.svg"
                />
                <span>0758 XXX XXX</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};