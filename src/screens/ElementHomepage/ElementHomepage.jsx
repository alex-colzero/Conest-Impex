"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useWindowWidth } from "../../breakpoints";
import { SharedHeader } from "../../components/SharedHeader";
import { ExperienceSection } from "./sections/ExperienceSection/ExperienceSection";
import { ExpertiseBoxSection } from "./sections/ExpertiseBoxSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeadlineSection } from "./sections/HeadlineSection";
import { HeroSection } from "./sections/HeroSection";
import { ServiceBoxSection } from "./sections/ServiceBoxSection";
import { ServiceBoxWrapperSection } from "./sections/ServiceBoxWrapperSection";
import { ServicesSection } from "./sections/ServicesSection";


const heroFeatures = [
  { icon: "/img/check-27.svg", text: "Autorizat Anre" },
  { icon: "/img/check-27.svg", text: "Certificat Iscir" },
  { icon: "/img/check-27.svg", text: "Garanție 2 Ani" },
];

const mainServices = [
  {
    icon: "/img/icon-29.png",
    iconMobile: "/img/icon-20.png",
    title: "Instalații gaze naturale",
    description:
      "Executarea instalației de utilizare. Montarea conductei între branșament și aparatele consumatoare, inclusiv instalarea dispozitivelor de detecție și siguranță.",
    buttonText: "Detalii Instalații Gaze ➔",
    link: "/instalatii-gaze-naturale",
  },
  {
    icon: "/img/icon-30.png",
    iconMobile: "/img/icon-21.png",
    title: "Centrale termice & încălzire",
    description:
      "Montaj și autorizare centrale termice cu tiraj forțat sau natural. Service autorizat ISCIR pentru toate mărcile de centrale.",
    buttonText: "Servicii Centrale ➔",
    link: "/centrale-termice",
  },
  {
    icon: "/img/service-icon-4.png",
    iconMobile: "/img/service-icon-3.png",
    title: "Revizii și verificări ANRE",
    description:
      "Verificări tehnice periodice obligatorii la 2 ani. Revizii complete și eliberare certificate de conformitate.",
    buttonText: "Programează Revizie ➔",
    link: "/revizii-anre",
  },
];

const smartHomeServices = [
  {
    icon: "/img/image-8-4.png",
    iconMobile: "/img/image-8-3.png",
    title: "Senzori gaze și electrovalve",
    description:
      "Montaj detectoare gaze naturale cu electrovalvă automată. Siguranță completă pentru familia dvs.",
    buttonText: "Sisteme Siguranță ➔",
    link: "/sisteme-siguranta",
  },
  {
    icon: "/img/image-9-4.png",
    iconMobile: "/img/image-9-3.png",
    title: "Modernizare și Smart-Home",
    description:
      "Modernizarea instalațiilor existente și integrarea cu sisteme smart home. Eficiență energetică maximă.",
    buttonText: "Modernizare ➔",
    link: "/modernizare-smart-home",
  },
];

const experienceFeatures = [
  {
    icon: "/img/check-31.svg",
    iconMobile: "/img/check-24.svg",
    title: "Autorizații complete",
    subtitle: "ANRE și ISCIR (RVT și RSL)",
  },
  {
    icon: "/img/check-31.svg",
    iconMobile: "/img/check-24.svg",
    title: "Experiență vastă",
    subtitle: "Peste 27 de ani pe piață",
  },
  {
    icon: "/img/check-31.svg",
    iconMobile: "/img/check-24.svg",
    title: "Siguranță garantată",
    subtitle: "Standarde europene",
  },
  {
    icon: "/img/check-31.svg",
    iconMobile: "/img/check-24.svg",
    title: "Reduceri speciale",
    subtitle: "-25% pensionari",
  },
];

const experienceStats = [
  { number: "27+", label: "Ani de experiență" },
  { number: "3400+", label: "Proiecte Realizate" },
  { number: "24/7", label: "Service Urgențe" },
  { number: "100%", label: "Conformitate ANRE / ISCIR" },
];

const serviceAreas = [
  {
    image: "/img/acoperire-primara-constanta-3.png",
    imageMobile: "/img/acoperire-primara-constanta-2.png",
    title: "Constanța",
    subtitle: "Acoperire primară",
    areas: [
      { name: "Mamaia", description: "Proprietăți premium" },
      { name: "Centrul Vechi", description: "Modernizări" },
      { name: "Km 4-5", description: "Zone rezidențiale" },
      { name: "Tomis", description: "Apartamente noi" },
    ],
  },
  {
    image: "/img/proiecte-nationale-3.png",
    imageMobile: "/img/proiecte-nationale-2.png",
    title: "Proiecte naționale",
    areas: [
      { name: "Constanța", description: "Proiecte mari" },
      { name: "Județul Constanța", description: "Zone rurale" },
      { name: "Portul Constanța", description: "Zone industriale" },
      { name: "Alte județe", description: "La cerere" },
    ],
  },
  {
    image: "/img/regiunea-dobrogea-3.png",
    imageMobile: "/img/regiunea-dobrogea-2.png",
    title: "Regiunea Dobrogea",
    areas: [
      { name: "Năvodari", description: "Case și vilet" },
      { name: "Medgidia", description: "Service centrale" },
      { name: "Mangalia", description: "Instalații sezonale" },
      { name: "Eforie", description: "Hoteluri" },
    ],
  },
];

const emergencyServices = [
  { title: "Scăpări de gaze", description: "Intervenție imediată" },
  { title: "Centrale oprite", description: "Remediere rapidă" },
  { title: "Presiune scăzută", description: "Diagnosticare sistem" },
  { title: "Detecție probleme", description: "Verificări siguranță" },
  { title: "Remediere avarii", description: "Piese originale" },
];


export const ElementHomepage = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className={`flex flex-col items-center bg-[#f3f2ef] relative ${screenWidth < 977 ? "min-w-[440px]" : (screenWidth >= 977 && screenWidth < 1440) ? "min-w-[977px]" : screenWidth >= 1440 ? "min-w-[1440px]" : ""} ${screenWidth < 977 ? "h-[15605px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "overflow-hidden" : ""}`}
      data-model-id="352:7970"
    >
      <SharedHeader />

      {/* Mobile Sections */}
      {screenWidth < 977 && (
        <>
          <HeroSection />
          <ServicesSection />
        </>
      )}

      {/* Desktop Hero Section */}
      {(screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) && (
        <section
          className={`w-full flex self-stretch bg-cover flex-[0_0_auto] shadow-[0px_1px_1px_#303030] bg-[url(/img/hero-4.png)] bg-[50%_50%] relative ${screenWidth >= 977 && screenWidth < 1440 ? "items-center" : (screenWidth >= 1440) ? "items-start" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "gap-2.5" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "px-[60px] py-[200px]" : (screenWidth >= 1440) ? "pl-[150px] pr-[700px] pt-[98px] pb-[78px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "justify-center" : ""}`}
        >
          <div
            className={`flex flex-col gap-10 relative ${screenWidth >= 1440 ? "w-[792px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "items-center" : (screenWidth >= 1440) ? "items-start" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "grow" : ""} ${screenWidth >= 1440 ? "mr-[-202.00px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "flex-1" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "justify-center" : ""}`}
          >
            <h1
              className={`[font-family:'Poppins',Helvetica] tracking-[0] mt-[-1.00px] relative text-[#05213c] font-semibold ${screenWidth >= 1440 ? "w-[616px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "self-stretch" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "text-[56px]" : (screenWidth >= 1440) ? "text-[64px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[72.8px]" : (screenWidth >= 1440) ? "leading-[83.2px]" : ""}`}
            >
              Instalații gaze și centrale termice constanța
            </h1>

            <p className="[font-family:'Poppins',Helvetica] self-stretch tracking-[3.00px] text-3xl text-[#05213c] font-medium leading-[normal] relative">
              Autorizați ANRE &amp; ISCIR din 1996
            </p>

            <div className="w-full flex self-stretch flex-col items-start gap-[30px] flex-[0_0_auto] relative">
              <div className="inline-flex items-start gap-10 flex-[0_0_auto] relative">
                {heroFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2.5 flex-[0_0_auto] relative"
                  >
                    <img
                      className="w-[19px] aspect-[1] h-[19px] relative"
                      alt="Check"
                      src={feature.icon}
                    />

                    <div className="[font-family:'Poppins',Helvetica] w-fit mt-[-1.00px] tracking-[0.80px] text-base text-[#05213c] font-semibold leading-[normal] relative">
                      {feature.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex self-stretch flex-col items-start gap-[34px] h-[140px] relative">
              <div className="inline-flex items-start gap-10 flex-[0_0_auto] px-0 py-10 relative">
                <a
                  href="tel:0722619097"
                  className="inline-flex items-center gap-2.5 flex-[0_0_auto] px-9 py-[18px] overflow-hidden rounded-[10px] justify-center bg-[#f2b721] relative hover:bg-opacity-90 transition-all duration-200 no-underline"
                  aria-label="Sună la numărul 0722 619 097"
                >
                  <img
                    className="w-[23.75px] h-[23.79px] relative"
                    alt="Phoneicon"
                    src="/img/phoneicon-8.svg"
                  />

                  <div className="[font-family:'Poppins',Helvetica] w-fit mt-[-1.00px] tracking-[1.28px] text-base text-[#05213c] font-semibold text-center leading-[normal] relative">
                    0722 619 097
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Services Section */}
      <section
        className={`w-full flex flex-col items-center max-w-[1600px] flex-[0_0_auto] relative ${screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440) ? "gap-[30px]" : (screenWidth < 977) ? "gap-[50px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "px-[100px] py-[200px]" : (screenWidth >= 1440) ? "pt-40 pb-[200px] px-[100px]" : screenWidth < 977 ? "pt-0 pb-[200px] px-5" : ""}`}
      >
        <div className="border border-solid border-[#05213c66] inline-flex flex-wrap items-center gap-[10px_10px] px-5 py-2.5 h-[60px] overflow-hidden rounded-[10px] justify-center bg-white relative">
          <div
            className={`[font-family:'Poppins',Helvetica] w-fit relative leading-[normal] ${screenWidth < 977 ? "tracking-[0.80px]" : (screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) ? "tracking-[1.80px]" : ""} ${screenWidth < 977 ? "text-xl" : (screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) ? "text-lg" : ""} ${screenWidth < 977 ? "text-[#05213c]" : (screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) ? "text-[#303030]" : ""} ${screenWidth < 977 ? "font-normal" : (screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) ? "font-medium" : ""}`}
          >
            {screenWidth < 977 && <>Montaj și service autorizat</>}

            {(screenWidth >= 1440 ||
              (screenWidth >= 977 && screenWidth < 1440)) && <>ANRE și ISCIR</>}
          </div>
        </div>

        {(screenWidth >= 1440 ||
          (screenWidth >= 977 && screenWidth < 1440)) && (
          <>
            <h2
              className={`[font-family:'Poppins',Helvetica] self-stretch tracking-[0] text-[#303030] font-semibold text-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "text-4xl" : (screenWidth >= 1440) ? "text-[64px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[46.8px]" : (screenWidth >= 1440) ? "leading-[83.2px]" : ""}`}
            >
              Soluții complete pentru instalații gaze și centrale termice
            </h2>

            <p
              className={`[font-family:'Poppins',Helvetica] self-stretch tracking-[0] text-3xl text-[#5a5a5a] font-normal text-center leading-[39.0px] relative ${screenWidth >= 977 && screenWidth < 1440 ? "h-[200px]" : ""}`}
            >
              Cu o experiență de peste 27 de ani, oferim servicii complete
              autorizate ANRE și ISCIR pentru toate nevoile dvs. de încălzire și
              instalații gaze.
            </p>

            <div
              className={`w-full flex items-center flex-[0_0_auto] justify-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "self-stretch" : ""} ${screenWidth >= 1440 ? "min-w-[1024px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "flex-col" : ""} ${screenWidth >= 1440 ? "max-w-[1400px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "gap-10" : (screenWidth >= 1440) ? "gap-[30px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "px-[60px] py-0" : ""}`}
            >
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-10 justify-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-full" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "self-stretch" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "flex-col" : ""} ${screenWidth >= 1440 ? "grow" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "flex-[0_0_auto]" : (screenWidth >= 1440) ? "flex-1" : ""}`}
                >
                  <div
                    className={`flex min-w-[308px] flex-col items-center pt-[60px] pb-[50px] px-10 h-[508px] rounded-[40px] bg-white relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-full" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "self-stretch" : ""} ${screenWidth >= 1440 ? "grow" : ""} ${screenWidth >= 1440 ? "flex-1" : ""}`}
                  >
                    <div className="w-full flex self-stretch flex-col items-center gap-2.5 flex-[0_0_auto] relative">
                      <div className="w-full flex self-stretch flex-col items-center gap-[30px] flex-[0_0_auto] relative">
                        <div className="w-[100px] aspect-[1] flex flex-col items-center px-0 py-[30px] h-[100px] overflow-hidden rounded-[20px] justify-center bg-[#f2b721] relative">
                          <img
                            className="w-[51px] aspect-[0.75] mt-[-14.00px] object-cover h-[68px] mb-[-14.00px] relative"
                            alt="Icon"
                            src={
                              screenWidth >= 977 && screenWidth < 1440
                                ? service.iconMobile
                                : screenWidth >= 1440
                                  ? service.icon
                                  : undefined
                            }
                          />
                        </div>

                        <div className="w-full flex self-stretch flex-col items-center gap-[15px] flex-[0_0_auto] relative">
                          <h3 className="[font-family:'Poppins',Helvetica] self-stretch tracking-[0] mt-[-1.00px] text-[26px] relative text-[#05213c] font-semibold text-center leading-[33.8px]">
                            {service.title}
                          </h3>

                          <p className="[font-family:'Poppins',Helvetica] self-stretch tracking-[0] text-base text-[#05213c] font-normal text-center leading-[20.8px] relative">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex self-stretch flex-col items-center grow gap-2.5 flex-1 justify-end relative">
                      <div className="w-full flex self-stretch flex-col items-center gap-2.5 flex-[0_0_auto] justify-end relative">
                        {service.link ? (
                          <Link href={service.link}>
                            <button className="all-[unset] box-border w-full flex self-stretch items-center px-9 py-[30px] h-[70px] overflow-hidden rounded-[10px] justify-center bg-[#05213c] relative">
                              <div className="[font-family:'Poppins',Helvetica] mt-[-8.00px] tracking-[1.28px] text-base flex-1 text-white font-semibold text-center mb-[-6.00px] leading-[normal] relative">
                                {service.buttonText}
                              </div>
                            </button>
                          </Link>
                        ) : (
                          <button className="all-[unset] box-border w-full flex self-stretch items-center px-9 py-[30px] h-[70px] overflow-hidden rounded-[10px] justify-center bg-[#05213c] relative">
                            <div className="[font-family:'Poppins',Helvetica] mt-[-8.00px] tracking-[1.28px] text-base flex-1 text-white font-semibold text-center mb-[-6.00px] leading-[normal] relative">
                              {service.buttonText}
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {screenWidth < 977 && (
          <img
            className="relative self-stretch w-full flex-[0_0_auto]"
            alt="Logos"
            src="/img/logos.svg"
          />
        )}
      </section>

      {/* Logos Section */}
      {(screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) && (
        <section
          className={`w-full flex flex-col items-center max-w-[1600px] gap-[50px] flex-[0_0_auto] relative ${screenWidth >= 977 && screenWidth < 1440 ? "pt-0 pb-[200px] px-[60px]" : (screenWidth >= 1440) ? "pt-0 pb-[200px] px-[100px]" : ""}`}
        >
          <div className="border border-solid border-[#05213c66] inline-flex flex-wrap items-center gap-[10px_10px] px-5 py-2.5 h-[60px] overflow-hidden rounded-[10px] justify-center bg-white relative">
            <div className="[font-family:'Poppins',Helvetica] w-fit tracking-[0.80px] text-xl text-[#05213c] font-normal leading-[normal] relative">
              Montaj și service autorizat
            </div>
          </div>

          <img
            className="w-full self-stretch flex-[0_0_auto] relative"
            alt="Logos"
            src={
              screenWidth >= 977 && screenWidth < 1440
                ? "/img/logos-3.svg"
                : screenWidth >= 1440
                  ? "/img/logos-4.svg"
                  : undefined
            }
          />
        </section>
      )}

      {/* Emergency Service Section */}
      {(screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) && (
        <section
          className={`w-full flex self-stretch items-center bg-cover h-[913px] bg-[url(/img/service-box-3.png)] justify-center bg-[50%_50%] relative ${screenWidth >= 1440 ? "px-0 py-[200px]" : ""}`}
        >
          <div
            className="inline-flex items-center gap-10 flex-[0_0_auto
] shadow-[0px_4px_104px_#000000f2] relative"
          >
            <div className="w-[524px] flex flex-col items-center pt-[60px] pb-[50px] px-10 h-[508px] rounded-[40px] bg-white relative">
              <div className="w-full flex self-stretch flex-col items-center gap-2.5 flex-[0_0_auto] relative">
                <div className="w-full flex self-stretch flex-col items-center gap-[30px] flex-[0_0_auto] relative">
                  <div className="border border-solid border-black w-[100px] aspect-[1] flex flex-col items-center px-0 py-[30px] h-[100px] overflow-hidden rounded-[20px] justify-center relative">
                    <img
                      className="w-3.5 aspect-[0.24] mt-[-9.00px] object-cover h-[58px] mb-[-9.00px] relative"
                      alt="Icon"
                      src={
                        screenWidth >= 977 && screenWidth < 1440
                          ? "/img/icon-22.png"
                          : screenWidth >= 1440
                            ? "/img/icon-36.png"
                            : undefined
                      }
                    />
                  </div>

                  <div className="w-full flex self-stretch flex-col items-center gap-[15px] flex-[0_0_auto] relative">
                    <h3 className="[font-family:'Poppins',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-[26px] text-[#05213c] font-semibold text-center leading-[33.8px] relative">
                      Intervenții urgente 24/7
                    </h3>

                    <p className="[font-family:'Poppins',Helvetica] self-stretch tracking-[0] text-base text-[#05213c] font-normal text-center leading-[20.8px] relative">
                      Service non-stop pentru urgențe gaze și centrale termice.
                      Timp de răspuns rapid în Constanța și împrejurimi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-[294px] flex flex-col items-center grow gap-2.5 flex-1 justify-end relative">
                <div className="w-full flex self-stretch flex-col items-center gap-2.5 flex-[0_0_auto] justify-end relative">
                  <button className="all-[unset] box-border inline-flex items-center px-9 py-[30px] h-[70px] overflow-hidden rounded-[10px] justify-center bg-[#f2b721] relative">
                    <div className="[font-family:'Poppins',Helvetica] w-[222px] mt-[-8.00px] tracking-[1.28px] text-base text-[#05213c] font-semibold text-center mb-[-6.00px] leading-[normal] relative">
                      Urgențe Non-Stop ➔
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Smart Home Services Section */}
      {(screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) && (
        <section
          className={`w-full flex flex-col items-center max-w-[1600px] gap-10 flex-[0_0_auto] relative ${screenWidth >= 977 && screenWidth < 1440 ? "px-[60px] py-[200px]" : (screenWidth >= 1440) ? "px-[100px] py-[200px]" : ""}`}
        >
          <h2
            className={`[font-family:'Poppins',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-[#303030] font-semibold text-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "text-4xl" : (screenWidth >= 1440) ? "text-[64px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[46.8px]" : (screenWidth >= 1440) ? "leading-[83.2px]" : ""}`}
          >
            Siguranță și eficiență pentru casa ta
          </h2>

          <p className="[font-family:'Poppins',Helvetica] self-stretch tracking-[0] text-3xl text-[#5a5a5a] font-normal text-center leading-[39.0px] relative">
            Integram cele mai noi tehnologii pentru a vă transforma locuința
            într-un spațiu mai sigur și mai eficient energetic, cu sisteme smart
            home și protecție automată împotriva gazelor.
          </p>

          <div
            className={`w-full flex self-stretch flex-[0_0_auto] pt-20 pb-0 px-0 relative ${screenWidth >= 977 && screenWidth < 1440 ? "flex-col" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "items-center" : (screenWidth >= 1440) ? "items-start" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "gap-10" : (screenWidth >= 1440) ? "gap-[30px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "justify-center" : ""}`}
          >
            {smartHomeServices.map((service, index) => (
              <div
                key={index}
                className={`min-h-[287px] items-start max-h-[287px] gap-[30px] px-[50px] py-10 rounded-[40px] bg-white relative ${screenWidth >= 977 && screenWidth < 1440 ? "inline-flex" : (screenWidth >= 1440) ? "flex" : ""} ${screenWidth >= 1440 ? "grow" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "flex-[0_0_auto]" : (screenWidth >= 1440) ? "flex-1" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "justify-center" : ""}`}
              >
                <div className="w-[100px] aspect-[1] flex flex-col items-center px-0 py-[30px] h-[100px] overflow-hidden rounded-[20px] justify-center bg-[#f2b721] relative">
                  <img
                    className="w-[45px] aspect-[0.73] mt-[-10.50px] object-cover h-[61px] mb-[-10.50px] relative"
                    alt="Image"
                    src={
                      screenWidth >= 977 && screenWidth < 1440
                        ? service.iconMobile
                        : screenWidth >= 1440
                          ? service.icon
                          : undefined
                    }
                  />
                </div>

                <div className="inline-flex flex-col items-start gap-[30px] flex-[0_0_auto] relative">
                  <div className="inline-flex flex-col items-start gap-5 flex-[0_0_auto] relative">
                    <h3 className="[font-family:'Poppins',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[26px] text-[#05213c] font-semibold leading-[33.8px] whitespace-nowrap relative">
                      {service.title}
                    </h3>

                    <p className="[font-family:'Poppins',Helvetica] w-[372px] tracking-[0] text-base text-[#05213c] font-normal leading-[20.8px] relative">
                      {service.description}
                    </p>
                  </div>

                  <Link 
                    href={service.link}
                    className="all-[unset] box-border inline-flex items-end flex-[0_0_auto] px-9 py-[18px] overflow-hidden rounded-[10px] justify-center bg-[#05213c] relative hover:bg-opacity-90 transition-all cursor-pointer no-underline"
                  >
                    <div className="[font-family:'Poppins',Helvetica] w-fit mt-[-1.00px] tracking-[1.28px] text-base text-white font-semibold text-center leading-[normal] relative">
                      {service.buttonText}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience Section */}
      {(screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) && (
        <section
          className={`w-full flex self-stretch items-center justify-center bg-[#05213c] relative ${screenWidth >= 977 && screenWidth < 1440 ? "flex-col" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "gap-[60px]" : (screenWidth >= 1440) ? "gap-20" : ""} ${screenWidth >= 1440 ? "px-[100px] py-[200px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "h-[1600px]" : (screenWidth >= 1440) ? "h-[1056px]" : ""}`}
        >
          <div
            className={`flex flex-col items-start gap-10 relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-[643px]" : ""} ${screenWidth >= 1440 ? "grow" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "flex-[0_0_auto]" : (screenWidth >= 1440) ? "flex-1" : ""}`}
          >
            <h2 className="[font-family:'Poppins',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-[56px] text-white font-semibold leading-[72.8px] relative">
              Experți în instalații
              <br />
              gaze din 1996
            </h2>

            <p className="[font-family:'Poppins',Helvetica] self-stretch tracking-[1.60px] text-base text-white h-[167px] font-normal leading-[normal] relative">
              SC CON EST IMPEX SRL este o companie cu tradiție în domeniul
              instalațiilor de gaze naturale și centrale termice, activând din
              1996 în Constanța și regiunea Dobrogea.
              <br />
              <br />
              Suntem autorizați ANRE pentru instalații gaze și certificați ISCIR
              (RVT și RSL) pentru centrale termice, garantând conformitatea
              completă cu reglementările naționale și europene.
            </p>

            <div className="w-full flex self-stretch flex-col items-start gap-[30px] flex-[0_0_auto] relative">
              <div className="inline-flex items-start gap-[70px] flex-[0_0_auto] relative">
                {experienceFeatures.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2.5 flex-[0_0_auto] relative"
                  >
                    <img
                      className="w-[19px] aspect-[1] h-[19px] relative"
                      alt="Check"
                      src={
                        screenWidth >= 977 && screenWidth < 1440
                          ? feature.iconMobile
                          : screenWidth >= 1440
                            ? feature.icon
                            : undefined
                      }
                    />

                    <p className="[font-family:'Poppins',Helvetica] w-[218px] mt-[-1.00px] tracking-[0.80px] text-base text-white h-12 font-normal leading-[normal] relative">
                      <span className="tracking-[0.13px] font-bold">
                        {feature.title}
                        <br />
                      </span>

                      <span className="tracking-[0.13px]">
                        {feature.subtitle}
                        <br />
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-start gap-[70px] flex-[0_0_auto] relative">
                {experienceFeatures.slice(2, 4).map((feature, index) => (
                  <div
                    key={index}
                    className={`${index === 0 ? "w-[247px] flex" : "inline-flex"} items-center gap-2.5 ${index === 0 ? "relative" : "flex-[0_0_auto] relative"}`}
                  >
                    <img
                      className="w-[19px] aspect-[1] h-[19px] relative"
                      alt="Check"
                      src={
                        screenWidth >= 977 && screenWidth < 1440
                          ? feature.iconMobile
                          : screenWidth >= 1440
                            ? feature.icon
                            : undefined
                      }
                    />

                    <p className="[font-family:'Poppins',Helvetica] w-fit mt-[-1.00px] tracking-[0.80px] text-base text-white font-normal leading-[normal] relative">
                      <span className="tracking-[0.13px] font-bold">
                        {feature.title}
                        <br />
                      </span>

                      <span className="tracking-[0.13px]">
                        {feature.subtitle}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col items-center gap-5 p-10 h-[800px] rounded-[40px] bg-[#f2b721] relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-[580px]" : ""} ${screenWidth >= 1440 ? "mt-[-72.00px]" : ""} ${screenWidth >= 1440 ? "grow" : ""} ${screenWidth >= 1440 ? "flex-1" : ""} ${screenWidth >= 1440 ? "mb-[-72.00px]" : ""}`}
          >
            <div className="inline-flex flex-col items-center gap-5 h-[185px] relative">
              <div className="[font-family:'Poppins',Helvetica] w-[270px] mt-[-1.00px] tracking-[0] text-[150px] text-[#05213c] h-[147px] font-bold text-center whitespace-nowrap leading-[195.0px] relative">
                {experienceStats[0].number}
              </div>

              <div className="[font-family:'Poppins',Helvetica] w-[372px] tracking-[0] text-[26px] text-[#05213c] h-[23px] font-normal text-center whitespace-nowrap mb-[-4.00px] leading-[33.8px] relative">
                {experienceStats[0].label}
              </div>
            </div>

            <div className="w-[200px] h-[30px] relative" />

            {experienceStats.slice(1).map((stat, index) => (
              <div
                key={index}
                className="border-2 border-dashed border-[#05213c] w-full flex self-stretch flex-col items-center gap-2.5 p-10 h-[140px] rounded-[40px] justify-center relative"
              >
                <div className="[font-family:'Poppins',Helvetica] w-[270px] mt-[-18.00px] tracking-[0] text-[56px] text-[#05213c] h-[55px] font-bold text-center whitespace-nowrap leading-[72.8px] relative">
                  {stat.number}
                </div>

                <div
                  className={`[font-family:'Poppins',Helvetica] w-[372px] tracking-[0] text-[#05213c] h-[23px] text-center whitespace-nowrap mb-[-14.00px] leading-[${index === 0 ? "33.8px" : "20.8px"}] relative ${index === 0 ? "text-[26px] font-normal" : "text-base font-medium"} ${index === 0 ? "mb-[-14.00px]" : "mb-[-12.00px]"}`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Service Areas Section */}
      {(screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) && (
        <>
          <section
            className={`flex flex-col items-center flex-[0_0_auto] justify-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-[748px]" : (screenWidth >= 1440) ? "w-full" : ""} ${screenWidth >= 1440 ? "self-stretch" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "gap-10" : (screenWidth >= 1440) ? "gap-[30px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "pt-[200px] pb-[100px] px-5" : (screenWidth >= 1440) ? "pt-[200px] pb-0 px-[100px]" : ""}`}
          >
            <div className="border border-solid border-[#05213c66] inline-flex flex-wrap items-center gap-[10px_10px] px-5 py-2.5 h-[60px] overflow-hidden rounded-[10px] justify-center bg-white relative">
              <div className="[font-family:'Poppins',Helvetica] w-fit tracking-[0.80px] text-xl text-[#05213c] font-normal leading-[normal] relative">
                Aria operationala
              </div>
            </div>

            <h2
              className={`[font-family:'Poppins',Helvetica] tracking-[0] text-[#303030] font-semibold text-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-[716px]" : ""} ${screenWidth >= 1440 ? "self-stretch" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "text-4xl" : (screenWidth >= 1440) ? "text-[64px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "mr-[-4.00px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "ml-[-4.00px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[46.8px]" : (screenWidth >= 1440) ? "leading-[83.2px]" : ""}`}
            >
              Servicii complete în Constanța și la nivel național
            </h2>

            <p className="[font-family:'Poppins',Helvetica] self-stretch tracking-[0] text-3xl text-[#5a5a5a] font-normal text-center leading-[39.0px] relative">
              Echipa CON EST deservește Constanța și regiunea Dobrogea cu
              intervenții rapide, precum și proiecte naționale de amploare.
            </p>
          </section>

          <div
            className={`flex items-center flex-[0_0_auto] relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-full" : (screenWidth >= 1440) ? "w-[1440px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "self-stretch" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "flex-col" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "gap-10" : (screenWidth >= 1440) ? "gap-[30px]" : ""} ${screenWidth >= 1440 ? "pt-[200px] pb-0 px-[100px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "justify-center" : ""}`}
          >
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-10 h-[953px] rounded-[40px] bg-white relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-[671px]" : ""} ${screenWidth >= 1440 ? "grow" : ""} ${screenWidth >= 1440 ? "flex-1" : ""} ${index === 2 && screenWidth >= 1440 ? "pl-px pr-0 py-0" : ""}`}
              >
                <div className="w-full flex self-stretch flex-col items-center h-[300px] overflow-hidden rounded-[40px_40px_0px_0px] justify-center bg-[#f2b721] relative">
                  <img
                    className={`aspect-[1.5] object-cover relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-full" : (screenWidth >= 1440) ? (index === 2 ? "w-[392.33px]" : "w-[393.33px]") : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "self-stretch" : ""} ${screenWidth >= 1440 ? "h-[300px]" : ""}`}
                    alt={area.title}
                    src={
                      screenWidth >= 977 && screenWidth < 1440
                        ? area.imageMobile
                        : screenWidth >= 1440
                          ? area.image
                          : undefined
                    }
                  />
                </div>

                <div
                  className={`flex-col gap-10 h-[179px] relative ${screenWidth >= 1440 ? "w-full" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "inline-flex" : (screenWidth >= 1440) ? "flex" : ""} ${screenWidth >= 1440 ? "self-stretch" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "items-start" : (screenWidth >= 1440) ? "items-center" : ""} ${screenWidth >= 1440 ? "px-5 py-0" : ""}`}
                >
                  {screenWidth >= 977 && screenWidth < 1440 && index === 0 && (
                    <div className="flex items-center gap-10 self-stretch w-full flex-[0_0_auto] flex-col relative">
                      <div className="h-[300px] self-stretch w-full bg-[#f2b721] rounded-[40px_40px_0px_0px] flex flex-col items-center justify-center relative overflow-hidden">
                        <img
                          className="relative self-stretch w-full aspect-[1.5] object-cover"
                          alt="Acoperire primara"
                          src="/img/acoperire-primara-constanta-2.png"
                        />
                      </div>

                      <div className="inline-flex flex-col h-[179px] items-start gap-10 relative">
                        <p className="font-normal relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] text-[#05213c] text-[38px] text-center tracking-[0] leading-[49.4px]">
                          <span className="font-semibold">
                            Constanța
                            <br />
                          </span>

                          <span className="[font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[38px] tracking-[0] leading-[49.4px]">
                            Acoperire primară
                          </span>
                        </p>

                        <div className="relative w-[408px] h-px bg-[#05213c66]" />

                        <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] mb-[-398.00px]">
                          <p className="relative h-[398px] mt-[-1.00px] w-[408px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px]">
                            {area.areas.map((subArea, subIndex) => (
                              <span key={subIndex}>
                                <span className="font-bold">
                                  {subArea.name}
                                  <br />
                                </span>
                                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] tracking-[0] leading-[33.8px]">
                                  {subArea.description}
                                  <br />
                                  {subIndex < area.areas.length - 1 && <br />}
                                </span>
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {screenWidth >= 1440 && (
                    <>
                      <div
                        className={`relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] text-[#05213c] text-[38px] text-center tracking-[0] leading-[49.4px] ${index === 1 ? "font-semibold" : "font-normal"}`}
                      >
                        {index === 0 && (
                          <>
                            <span className="font-semibold">
                              {area.title}
                              <br />
                            </span>
                            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[38px] tracking-[0] leading-[49.4px]">
                              {area.subtitle}
                            </span>
                          </>
                        )}
                        {index === 1 && area.title}
                        {index === 2 && area.title}
                      </div>

                      <div className="relative self-stretch w-full h-px bg-[#05213c66]" />

                      <div
                        className={`mb-[-398.00px] relative ${index === 2 ? "w-[410px]" : "w-[410px]"} ${index === 2 ? "mr-[-29.83px]" : "mr-[-29.33px]"} ${index === 2 ? "ml-[-27.83px]" : "ml-[-27.33px]"} h-[398px]`}
                      >
                        <p className="absolute w-[408px] top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px]">
                          {area.areas.map((subArea, subIndex) => (
                            <span key={subIndex}>
                              <span className="font-bold">
                                {subArea.name}
                                <br />
                              </span>
                              <span className="[font-family:'Poppins',Helvetica] tracking-[0] text-[26px] text-[#05213c] font-normal leading-[33.8px]">
                                {subArea.description}
                                <br />
                                {subIndex < area.areas.length - 1 && <br />}
                              </span>
                            </span>
                          ))}
                        </p>
                      </div>
                    </>
                  )}

                  {screenWidth >= 977 && screenWidth < 1440 && index === 1 && (
                    <>
                      <div className="relative w-[408px] h-px bg-[#05213c66]" />

                      <div className="flex items-start gap-[81px] self-stretch w-full flex-[0_0_auto] mb-[-439.00px] flex-col relative">
                        <div className="font-semibold relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] text-[#05213c] text-[38px] text-center tracking-[0] leading-[49.4px]">
                          {area.title}
                        </div>

                        <div className="relative self-stretch w-full h-[398px] mr-[-2.00px]">
                          <p className="absolute top-0 left-0 w-[408px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px]">
                            {area.areas.map((subArea, subIndex) => (
                              <span key={subIndex}>
                                <span className="font-bold">
                                  {subArea.name}
                                  <br />
                                </span>
                                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] tracking-[0] leading-[33.8px]">
                                  {subArea.description}
                                  <br />
                                  {subIndex < area.areas.length - 1 && <br />}
                                </span>
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {screenWidth >= 977 && screenWidth < 1440 && index === 2 && (
                    <>
                      <div className="[font-family:'Poppins',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-[38px] text-[#05213c] font-semibold text-center leading-[49.4px] relative">
                        {area.title}
                      </div>

                      <div className="h-px bg-[#05213c66] relative w-[408px]" />

                      <div className="mb-[-398.00px] relative inline-flex items-center gap-2.5 flex-[0_0_auto] justify-center">
                        <p className="w-[408px] mt-[-1.00px] h-[398px] relative [font-family:'Poppins',Helvetica] tracking-[0] text-[26px] text-[#05213c] font-normal text-center leading-[33.8px]">
                          {area.areas.map((subArea, subIndex) => (
                            <span key={subIndex}>
                              <span className="font-bold">
                                {subArea.name}
                                <br />
                              </span>
                              <span className="[font-family:'Poppins',Helvetica] tracking-[0] text-[26px] text-[#05213c] font-normal leading-[33.8px]">
                                {subArea.description}
                                <br />
                                {subIndex < area.areas.length - 1 && <br />}
                              </span>
                            </span>
                          ))}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Emergency Services Section */}
      {(screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) && (
        <section
          className={`flex flex-col items-center flex-[0_0_auto] justify-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-full" : (screenWidth >= 1440) ? "w-[1440px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "self-stretch" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "gap-10" : (screenWidth >= 1440) ? "gap-[30px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "px-[60px] py-[200px]" : (screenWidth >= 1440) ? "pt-[200px] pb-[180px] px-0" : ""}`}
        >
          <div className="border border-solid border-[#05213c66] inline-flex flex-wrap items-center gap-[10px_10px] px-5 py-2.5 h-[60px] overflow-hidden rounded-[10px] justify-center bg-white relative">
            <div className="[font-family:'Poppins',Helvetica] w-fit tracking-[0.80px] text-xl text-[#05213c] font-normal leading-[normal] relative">
              URGENȚE
            </div>
          </div>

          <h2
            className={`[font-family:'Poppins',Helvetica] self-stretch tracking-[0] text-[#303030] font-semibold text-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "text-4xl" : (screenWidth >= 1440) ? "text-[64px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[46.8px]" : (screenWidth >= 1440) ? "leading-[83.2px]" : ""}`}
          >
            <span
              className={`[font-family:'Poppins',Helvetica] tracking-[0] text-[#303030] font-semibold ${screenWidth >= 977 && screenWidth < 1440 ? "text-4xl" : (screenWidth >= 1440) ? "text-[64px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[46.8px]" : (screenWidth >= 1440) ? "leading-[83.2px]" : ""}`}
            >
              Urgențe gaze și centrale termice{" "}
            </span>

            <span
              className={`[font-family:'Poppins',Helvetica] tracking-[0] text-[#303030] font-semibold ${screenWidth >= 977 && screenWidth < 1440 ? "text-4xl" : (screenWidth >= 1440) ? "text-[64px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[46.8px]" : (screenWidth >= 1440) ? "leading-[83.2px]" : ""}`}
            >
              intervenții rapide
            </span>

            <span
              className={`[font-family:'Poppins',Helvetica] tracking-[0] text-[#303030] font-semibold ${screenWidth >= 977 && screenWidth < 1440 ? "text-4xl" : (screenWidth >= 1440) ? "text-[64px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[46.8px]" : (screenWidth >= 1440) ? "leading-[83.2px]" : ""}`}
            >
              {" "}
              24/7
            </span>
          </h2>

          <p
            className={`[font-family:'Poppins',Helvetica] self-stretch tracking-[0] text-[#5a5a5a] font-normal text-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "text-3xl" : (screenWidth >= 1440) ? "text-[38px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[39.0px]" : (screenWidth >= 1440) ? "leading-[49.4px]" : ""}`}
          >
            Când aveți o urgență cu gazele sau centrala termică, fiecare minut
            contează. Echipa CON EST IMPEX SRL este disponibilă NON-STOP pentru
            intervenții urgente în Constanța.
          </p>

          <div
            className={`pt-20 pb-0 px-0 ${screenWidth >= 977 && screenWidth < 1440 ? "w-[857px]" : (screenWidth >= 1440) ? "w-full" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "grid" : (screenWidth >= 1440) ? "flex" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "left-[60px]" : ""} ${screenWidth >= 1440 ? "flex-wrap" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "grid-rows-[fit-content(100%)_fit-content(100%)]" : ""} ${screenWidth >= 1440 ? "self-stretch" : ""} ${screenWidth >= 1440 ? "items-center" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "top-[630px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "gap-5" : (screenWidth >= 1440) ? "gap-[20px_40px]" : ""} ${screenWidth >= 1440 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "grid-cols-3" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "h-[600px]" : ""} ${screenWidth >= 1440 ? "justify-center" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "absolute" : (screenWidth >= 1440) ? "relative" : ""}`}
          >
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className={`w-[222px] flex flex-col items-center gap-10 h-[250px] rounded-[40px] justify-center bg-white relative ${screenWidth >= 977 && screenWidth < 1440 ? (index < 3 ? "row-[1_/_2]" : "row-[2_/_3]") : ""} ${screenWidth >= 977 && screenWidth < 1440 ? (index === 0 || index === 3 ? "col-[1_/_2]" : index === 1 || index === 4 ? "col-[2_/_3]" : "col-[3_/_4]") : ""}`}
              >
                <div className="inline-flex flex-col items-center gap-5 px-0 py-6 h-[250px] justify-center relative">
                  <div className="w-[100px] aspect-[1] flex flex-col items-center h-[100px] overflow-hidden rounded-[20px] justify-center bg-[#f2b721] relative">
                    <div className="w-[50px] aspect-[1] h-[50px] relative">
                      <img
                        className="w-3.5 left-[17px] aspect-[0.24] -top-1 object-cover h-[58px] absolute"
                        alt="Icon"
                        src={
                          screenWidth >= 977 && screenWidth < 1440
                            ? `/img/icon-${25 + index}.png`
                            : screenWidth >= 1440
                              ? "/img/icon-36.png"
                              : undefined
                        }
                      />
                    </div>
                  </div>

                  <div className="w-[221px] flex flex-col items-center h-[37px] relative">
                    <div className="[font-family:'Poppins',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base text-[#05213c] font-semibold leading-[20.8px] whitespace-nowrap relative">
                      {service.title}
                    </div>

                    <div className="[font-family:'Poppins',Helvetica] self-stretch tracking-[0] text-base text-[#05213c] h-[46px] font-normal text-center mb-[-29.00px] leading-[20.8px] relative">
                      {service.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`flex flex-col items-center gap-[18px] flex-[0_0_auto] pt-[100px] pb-0 px-0 justify-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "w-full" : (screenWidth >= 1440) ? "w-[1440px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "self-stretch" : ""}`}
          >
            <div
              className={`[font-family:'Poppins',Helvetica] w-[1181px] mt-[-1.00px] tracking-[0] text-[#303030] font-semibold text-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "text-4xl" : (screenWidth >= 1440) ? "text-[64px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "mr-[-162.00px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "ml-[-162.00px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[46.8px]" : (screenWidth >= 1440) ? "leading-[83.2px]" : ""}`}
            >
              URGENȚE 24/7: 0744-579-715
            </div>

            <div
              className={`w-[1420px] flex flex-col items-center gap-5 flex-[0_0_auto] justify-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "mr-[-281.50px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "ml-[-281.50px]" : ""}`}
            >
              <p
                className={`[font-family:'Poppins',Helvetica] w-[1175px] mt-[-1.00px] tracking-[0] text-[#5a5a5a] font-normal text-center relative ${screenWidth >= 977 && screenWidth < 1440 ? "text-3xl" : (screenWidth >= 1440) ? "text-[38px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[39.0px]" : (screenWidth >= 1440) ? "leading-[49.4px]" : ""}`}
              >
                <span
                  className={`[font-family:'Poppins',Helvetica] tracking-[0] text-[#5a5a5a] font-normal ${screenWidth >= 977 && screenWidth < 1440 ? "text-3xl" : (screenWidth >= 1440) ? "text-[38px]" : ""} ${screenWidth >= 977 && screenWidth < 1440 ? "leading-[39.0px]" : (screenWidth >= 1440) ? "leading-[49.4px]" : ""}`}
                >
                  Apelați acum pentru urgențe.
                  <br />
                  Timp de răspuns rapid ore în Constanța
                  <br />
                </span>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      {(screenWidth >= 1440 || (screenWidth >= 977 && screenWidth < 1440)) && (
        <FooterSection />
      )}

      {/* Mobile Sections */}
      {screenWidth < 977 && (
        <>
          <ServiceBoxSection />
          <ServiceBoxWrapperSection />
          <ExperienceSection />
          <HeadlineSection />
          <ExpertiseSection />
          <ExpertiseBoxSection />
          <FooterSection />
        </>
      )}
    </div>
  );
};
