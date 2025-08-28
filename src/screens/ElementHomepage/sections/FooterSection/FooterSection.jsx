"use client";

import React from "react";
import Link from "next/link";

export const FooterSection = () => {
  const services = [
    { text: "Instalații gaze naturale", href: "/instalatii-gaze-naturale" },
    { text: "Centrale termice", href: "/centrale-termice" },
    { text: "Urgențe 24/7", href: "/urgente" },
    { text: "Revizii și verificări", href: "/revizii-anre" },
    { text: "Senzori și electrovalve", href: "/sisteme-siguranta" },
    { text: "Montaj senzori și electrovalve", href: "/montaj-senzori-electrovalve" },
    { text: "Întrebări frecvente", href: "/intrebari-frecvente" },
  ];

  const emergencyPages = [
    { text: "Gaz Scurs - Ce Fac?", href: "/gaz-scurs-ce-fac" },
    { text: "Centrala Nu Pornește", href: "/centrala-nu-porneste-iarna" },
    { text: "Pregătire centrală iarnă", href: "/pregatire-centrala-iarna" },
    { text: "Miros Gaz în Apartament", href: "/miros-gaz-apartament" },
    { text: "Presiune Scăzută Gaze", href: "/presiune-scazuta-gaze" },
  ];

  const certificationPages = [
    { text: "Instalator Autorizat ANRE", href: "/instalator-gaze-autorizat-anre-constanta" },
    { text: "Service ISCIR Constanța", href: "/service-iscir-constanta" },
    { text: "Certificări ANRE & ISCIR", href: "/certificari-anre-iscir" },
  ];

  const zones = [
    { text: "Constanța și Mamaia", href: "/constanta-mamaia" },
    { text: "Instalații gaze Mamaia", href: "/instalatii-gaze-mamaia" },
    { text: "Năvodari și Medgidia", href: "/navodari-medgidia" },
    { text: "Mangalia și Eforie", href: "/mangalia-eforie" },
    { text: "Lucrări naționale", href: "/lucrari-nationale" },
    { text: "Centrale Termice Nord", href: "/centrale-termice-constanta-nord" },
  ];

  const contactItems = [
    {
      icon: "/img/vector-11.svg",
      text: "Constanța, România",
      iconClass: "w-[15px] h-[18px] top-px left-[3px]",
    },
    {
      icon: "/img/vector-12.svg",
      text: "contact@conest-gaze-centrale.ro",
      href: "mailto:contact@conest-gaze-centrale.ro",
      isLink: true,
      iconClass: "w-[18px] h-[15px] top-[3px] left-px",
    },
    {
      icon: "/img/vector-16.svg",
      text: "0722-619-097",
      isPhone: true,
    },
    {
      icon: "/img/vector-16.svg",
      text: "Urgențe: 0744-579-715",
      isPhone: true,
    },
    {
      icon: "/img/vector-71.svg",
      text: "24/7",
      iconClass: "w-[18px] h-[18px] top-px left-px",
    },
  ];

  const legalItems = [
    { text: "Politica de confidențialitate", href: "/politica-confidentialitate" },
    { text: "Termeni și condiții", href: "/termeni-conditii" },
    { text: "Certificări ANRE & ISCIR", href: "/certificari-anre-iscir" },
  ];

  const renderPhoneIcon = () => (
    <div className="relative w-5 h-5">
      <div className="relative w-[17px] h-[17px] top-px left-0.5">
        <div className="relative h-[17px]">
          <img
            className="absolute w-4 h-4 top-px left-0"
            alt="Vector"
            src="/img/vector-16.svg"
          />
          <img
            className="absolute w-2 h-2 top-0 left-[9px]"
            alt="Vector"
            src="/img/vector-17.svg"
          />
          <img
            className="absolute w-[5px] h-[5px] top-[3px] left-[9px]"
            alt="Vector"
            src="/img/vector-18.svg"
          />
        </div>
      </div>
    </div>
  );

  return (
    <footer className="flex flex-col items-center justify-center gap-5 px-4 sm:px-10 py-8 md:py-12 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-20 relative self-stretch w-full max-w-[1200px] mx-auto">
        
        {/* Company Info */}
        <div className="flex flex-col items-start gap-6 flex-1">
          <div className="relative w-[196px] h-9">
            <div className="bg-[url(/img/wordmark-4.svg)] relative h-[35px] left-px bg-[100%_100%]">
              <img
                className="absolute w-[35px] h-[35px] top-0 left-[37px]"
                alt="Vector"
                src="/img/vector-1.svg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="w-full max-w-[340px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
              Instalații gaze și centrale termice
              <br />
              Fondat 1996 | Autorizat ANRE și ISCIR
              <br />
              Constanța, România
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-start gap-5 flex-1">
          <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[22px] tracking-[0] leading-[28.6px]">
            Servicii Principale
          </div>

          <div className="flex flex-col gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5"
              >
                <div className="relative w-[18px] h-[18px] flex-shrink-0">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt="Vector"
                    src="/img/vector-22.svg"
                  />
                </div>

                {service.href ? (
                  service.href.startsWith('tel:') || service.href.startsWith('mailto:') || service.href.startsWith('http') ? (
                    <a
                      className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal] hover:text-[#f2b721] transition-colors"
                      href={service.href}
                      {...(service.href.startsWith('http') ? { rel: "noopener noreferrer", target: "_blank" } : {})}
                    >
                      {service.text}
                    </a>
                  ) : (
                    <Link
                      className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal] hover:text-[#f2b721] transition-colors"
                      href={service.href}
                    >
                      {service.text}
                    </Link>
                  )
                ) : (
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
                    {service.text}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Probleme Frecvente - Sub Servicii */}
          <div className="mt-6 w-full">
            <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[18px] tracking-[0] leading-[23.4px] mb-3">
              Probleme Frecvente
            </div>
            <div className="flex flex-col gap-2">
              {emergencyPages.map((page, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5"
                >
                  <div className="relative w-[16px] h-[16px] flex-shrink-0">
                    <img
                      className="absolute w-[13px] h-[13px] top-0.5 left-0.5"
                      alt="Vector"
                      src="/img/vector-22.svg"
                    />
                  </div>

                  <Link
                    className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-sm tracking-[0.28px] leading-[normal] hover:text-[#f2b721] transition-colors"
                    href={page.href}
                  >
                    {page.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Zones */}
        <div className="flex flex-col items-start gap-5 flex-1">
          <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[22px] tracking-[0] leading-[28.6px]">
            Zone Deservite
          </div>

          <div className="flex flex-col gap-3">
            {zones.map((zone, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5"
              >
                <div className="relative w-[18px] h-[18px] flex-shrink-0">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt="Vector"
                    src="/img/vector-22.svg"
                  />
                </div>

                <Link
                  href={zone.href}
                  className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal] hover:text-[#f2b721] transition-colors"
                >
                  {zone.text}
                </Link>
              </div>
            ))}
          </div>

          {/* Certificări - Sub Zone */}
          <div className="mt-6 w-full">
            <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[18px] tracking-[0] leading-[23.4px] mb-3">
              Certificări
            </div>
            <div className="flex flex-col gap-2">
              {certificationPages.map((page, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5"
                >
                  <div className="relative w-[16px] h-[16px] flex-shrink-0">
                    <img
                      className="absolute w-[13px] h-[13px] top-0.5 left-0.5"
                      alt="Vector"
                      src="/img/vector-22.svg"
                    />
                  </div>

                  <Link
                    className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-sm tracking-[0.28px] leading-[normal] hover:text-[#f2b721] transition-colors"
                    href={page.href}
                  >
                    {page.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Legal */}
        <div className="flex flex-col items-start gap-5 flex-1">
          <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[22px] tracking-[0] leading-[28.6px]">
            Contact &amp; Legal
          </div>

          <div className="flex flex-col gap-3">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5"
              >
                {item.isPhone ? (
                  renderPhoneIcon()
                ) : (
                  <div className="relative w-5 h-5 flex-shrink-0">
                    <img
                      className={`absolute ${item.iconClass}`}
                      alt="Vector"
                      src={item.icon}
                    />
                  </div>
                )}

                {item.isLink ? (
                  <a
                    className="[font-family:'Poppins',Helvetica] font-medium text-[#303030] text-base tracking-[0.32px] leading-[normal] underline hover:text-[#f2b721] transition-colors"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.text}
                  </a>
                ) : item.isPhone ? (
                  <a
                    className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal] hover:text-[#f2b721] transition-colors cursor-pointer"
                    href={`tel:${item.text.replace(/[^0-9]/g, '')}`}
                  >
                    {item.text}
                  </a>
                ) : (
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
                    {item.text}
                  </div>
                )}
              </div>
            ))}

            {legalItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5"
              >
                <div className="relative w-[18px] h-[18px] flex-shrink-0">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt="Vector"
                    src="/img/vector-22.svg"
                  />
                </div>

                <Link
                  href={item.href}
                  className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal] hover:text-[#f2b721] transition-colors"
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-8 w-full max-w-[1200px] mx-auto text-center">
        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-sm tracking-[0] leading-[25.2px]">
          © 2025 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații gaze
          și centrale termice Constanța din 1996 Autorizat ANRE • Certificat ISCIR
          (RVT și RSL) • Conform standardelor europene
        </p>
      </div>
    </footer>
  );
};
