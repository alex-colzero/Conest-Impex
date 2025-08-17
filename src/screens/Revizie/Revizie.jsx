"use client";

import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { ConestLogoFull } from "../../components/ConestLogoFull";
import "./style.css";

export const Revizie = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="revizie">
      {screenWidth >= 1600 && (
        <div className="desktop-version">
          <div className="header">
            <ConestLogoFull />
            <nav className="navigation">
              <a href="/" className="nav-link">Acasă</a>
              <a href="/servicii" className="nav-link">Servicii</a>
              <a href="/revizie" className="nav-link active">Revizie</a>
            </nav>
          </div>
          
          <div className="hero-section">
            <h1 className="main-title">Programează Revizie Centrală Termică</h1>
            <p className="subtitle">
              Reviziile periodice sunt obligatorii conform legislației în vigoare. 
              Asigură funcționarea optimă și siguranța instalației tale de gaze.
            </p>
          </div>

          <div className="content-section">
            <div className="info-card">
              <h2>De ce este necesară revizia?</h2>
              <ul>
                <li>Verificarea stării tehnice a centralei termice</li>
                <li>Controlul sistemului de evacuare a gazelor arse</li>
                <li>Testarea dispozitivelor de siguranță</li>
                <li>Conformitate cu normele ANRE și ISCIR</li>
              </ul>
            </div>

            <div className="contact-card">
              <h2>Programează acum</h2>
              <p>Sunând la numărul de telefon:</p>
              <a href="tel:+40241123456" className="phone-number">0241 123 456</a>
              <p className="working-hours">
                Program: Luni - Vineri 08:00 - 18:00<br/>
                Urgențe: 24/7
              </p>
            </div>
          </div>

          <div className="footer-section">
            <p>
              © 2024 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații Gaze & Centrale Termice Constanța din 1996<br/>
              Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform standardelor europene
            </p>
          </div>
        </div>
      )}

      {screenWidth < 1600 && (
        <div className="mobile-version">
          <div className="mobile-header">
            <ConestLogoFull />
          </div>
          
          <div className="mobile-hero">
            <h1>Programează Revizie</h1>
            <p>Reviziile periodice obligatorii pentru centrala ta termică</p>
          </div>

          <div className="mobile-content">
            <div className="mobile-info">
              <h2>De ce revizia?</h2>
              <ul>
                <li>Verificare stare tehnică</li>
                <li>Control evacuare gaze</li>
                <li>Test dispozitive siguranță</li>
                <li>Conformitate ANRE/ISCIR</li>
              </ul>
            </div>

            <div className="mobile-contact">
              <h2>Contactează-ne</h2>
              <a href="tel:+40241123456" className="mobile-phone">0241 123 456</a>
              <p>Luni-Vineri 08:00-18:00</p>
              <p>Urgențe: 24/7</p>
            </div>
          </div>

          <div className="mobile-footer">
            <p>© 2024 CON EST IMPEX SRL</p>
          </div>
        </div>
      )}
    </div>
  );
};