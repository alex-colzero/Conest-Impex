"use client";

import React from "react";
import Link from "next/link";
import { useWindowWidth } from "../../breakpoints";
import { ConestLogoFull } from "../../components/ConestLogoFull";
import { TopBar } from "../FrameScreen/sections/TopBar";
import "./style.css";

export const Revizie = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="revizie"
      style={{
        minWidth:
          screenWidth < 1600
            ? "440px"
            : screenWidth >= 1600
              ? "1600px"
              : undefined,
      }}
    >
      {screenWidth < 1600 && (
        <>
          <TopBar />
          <div className="mobile-hero">
            <div className="tag-revizie">
              <div className="text-wrapper-revizie">Revizii și verificări ANRE</div>
            </div>
            <h1 className="mobile-title">Programează Revizie Centrală Termică</h1>
            <p className="mobile-subtitle">
              Verificări tehnice periodice obligatorii la 2 ani. Revizii complete și eliberare certificate de conformitate.
            </p>
          </div>
        </>
      )}

      {screenWidth >= 1600 && (
        <>
          <div className="top-bar-revizie">
            <div className="conest-logo-full-instance-wrapper">
              <ConestLogoFull
                className="instance-node"
                flamedrop="/img/flamedrop-1.svg"
                overlapGroupClassName="conest-logo-full-6"
              />
            </div>

            <div className="navigation-revizie">
              <Link href="/" className="text-wrapper-nav">Acasă</Link>
              <Link href="/servicii" className="text-wrapper-nav">Servicii</Link>
              <div className="text-wrapper-nav active">Revizii</div>

              <div className="button-revizie">
                <div className="copy-revizie">COMENZI</div>
                <img
                  className="phoneicon-revizie"
                  alt="Phoneicon"
                  src="/img/phoneicon-1.svg"
                />
                <div className="copy-revizie">0722 619 097</div>
              </div>
            </div>
          </div>

          <div className="hero-section-desktop">
            <div className="tag-revizie">
              <div className="text-wrapper-revizie">Revizii și verificări ANRE</div>
            </div>
            
            <h1 className="main-title">Programează Revizie Centrală Termică</h1>
            <p className="subtitle">
              Verificări tehnice periodice obligatorii la 2 ani. Revizii complete și eliberare certificate de conformitate. Cu o experiență de peste 27 de ani, oferim servicii complete autorizate ANRE și ISCIR.
            </p>
          </div>
        </>
      )}

      <div className="services-section"
        style={{
          gap: screenWidth >= 1600 ? "30px" : screenWidth < 1600 ? "50px" : undefined,
          padding: screenWidth >= 1600 ? "80px 100px" : screenWidth < 1600 ? "40px 50px" : undefined,
        }}
      >
        {screenWidth >= 1600 && (
          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <div className="service-icon-wrapper">
                  <img className="service-icon" alt="Icon" src="/img/icon-11.png" />
                </div>
                <div className="service-text">
                  <div className="service-title">Instalații gaze naturale</div>
                  <p className="service-description">
                    Proiectare și execuție instalații gaze naturale conforme ANRE. Branșamente, conducte de distribuție și aparate consumatoare cu garanție completă.
                  </p>
                </div>
              </div>
              <div className="service-button-wrapper">
                <Link href="/servicii" className="service-button">
                  <button className="btn-service">
                    <div className="button-text">Detalii Instalații Gaze ➔</div>
                  </button>
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <div className="service-icon-wrapper">
                  <img className="service-icon" alt="Icon" src="/img/icon-12.png" />
                </div>
                <div className="service-text">
                  <div className="service-title">Centrale termice și încălzire</div>
                  <p className="service-description">
                    Montaj și autorizare centrale termice cu tiraj forțat sau natural. Service autorizat ISCIR pentru toate mărcile de centrale.
                  </p>
                </div>
              </div>
              <div className="service-button-wrapper">
                <div className="service-button">
                  <button className="btn-service">
                    <div className="button-text">Servicii Centrale ➔</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="service-card active">
              <div className="service-content">
                <div className="service-icon-wrapper">
                  <img className="service-icon" alt="Service icon" src="/img/service-icon-1.png" />
                </div>
                <div className="service-text">
                  <div className="service-title">Revizii și verificări ANRE</div>
                  <p className="service-description">
                    Verificări tehnice periodice obligatorii la 2 ani. Revizii complete și eliberare certificate de conformitate.
                  </p>
                </div>
              </div>
              <div className="service-button-wrapper">
                <div className="service-button">
                  <button className="btn-service active">
                    <div className="button-text">Programează Revizie ➔</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {screenWidth < 1600 && (
          <div className="mobile-services">
            <div className="mobile-service-card">
              <div className="mobile-service-content">
                <div className="mobile-service-icon-wrapper">
                  <img className="mobile-service-icon" alt="Icon" src="/img/icon-11.png" />
                </div>
                <div className="mobile-service-text">
                  <div className="mobile-service-title">Instalații gaze</div>
                  <p className="mobile-service-description">
                    Proiectare și execuție instalații gaze naturale conforme ANRE.
                  </p>
                </div>
              </div>
            </div>

            <div className="mobile-service-card">
              <div className="mobile-service-content">
                <div className="mobile-service-icon-wrapper">
                  <img className="mobile-service-icon" alt="Icon" src="/img/icon-12.png" />
                </div>
                <div className="mobile-service-text">
                  <div className="mobile-service-title">Centrale termice</div>
                  <p className="mobile-service-description">
                    Montaj și service autorizat ISCIR pentru toate mărcile.
                  </p>
                </div>
              </div>
            </div>

            <div className="mobile-service-card active">
              <div className="mobile-service-content">
                <div className="mobile-service-icon-wrapper">
                  <img className="mobile-service-icon" alt="Service icon" src="/img/service-icon-1.png" />
                </div>
                <div className="mobile-service-text">
                  <div className="mobile-service-title">Revizii ANRE</div>
                  <p className="mobile-service-description">
                    Verificări periodice obligatorii și certificate conformitate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="contact-section"
        style={{
          padding: screenWidth >= 1600 ? "80px 100px" : screenWidth < 1600 ? "40px 50px" : undefined,
        }}
      >
        <div className="contact-grid"
          style={{
            gridTemplateColumns: screenWidth >= 1600 ? "1fr 1fr" : "1fr",
            gap: screenWidth >= 1600 ? "60px" : "40px",
          }}
        >
          <div className="info-card">
            <h2>De ce este necesară revizia?</h2>
            <ul>
              <li>Verificarea stării tehnice a centralei termice</li>
              <li>Controlul sistemului de evacuare a gazelor arse</li>
              <li>Testarea dispozitivelor de siguranță</li>
              <li>Conformitate cu normele ANRE și ISCIR</li>
              <li>Eliberare certificate de conformitate</li>
              <li>Prevenția accidentelor și avarii</li>
            </ul>
          </div>

          <div className="contact-card">
            <h2>Programează acum revizia</h2>
            <p>Sună la numărul de telefon:</p>
            <a href="tel:+40722619097" className="phone-number">0722 619 097</a>
            <p className="working-hours">
              Program: Luni - Vineri 08:00 - 18:00<br/>
              Intervenții urgente: 24/7
            </p>
            <div className="contact-features">
              <div className="contact-feature">
                <span className="checkmark">✓</span>
                <span>Deplasare rapidă</span>
              </div>
              <div className="contact-feature">
                <span className="checkmark">✓</span>
                <span>Certificate oficiale</span>
              </div>
              <div className="contact-feature">
                <span className="checkmark">✓</span>
                <span>Experiență 27+ ani</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section"
        style={{
          padding: screenWidth >= 1600 ? "40px 100px" : screenWidth < 1600 ? "30px 50px" : undefined,
        }}
      >
        <p>
          © 2024 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații Gaze & Centrale Termice Constanța din 1996<br/>
          Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform standardelor europene
        </p>
      </div>
    </div>
  );
};