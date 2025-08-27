"use client";

import React from "react";

export const FooterSection = () => {
  const services = [
    { name: "Instalații Gaze Naturale", href: "instalatii-gaze-naturale.html" },
    { name: "Centrale Termice" },
    { name: "Urgențe 24/7" },
    { name: "Revizii Și Verificări" },
    { name: "Revizii Și Verificări" },
    { name: "Senzori Și Electrovalve" },
  ];

  const zones = [
    "Constanța Și Mamaia",
    "Năvodari Și Medgidia",
    "Mangalia Și Eforie",
    "Lucrări Naționale",
  ];

  const contactInfo = [
    {
      icon: "/img/vector-41.svg",
      text: "Constanța, România",
      color: "#05213c",
    },
    {
      icon: "/img/vector-42.svg",
      text: "contact@conest-gaze-centrale.ro",
      color: "#303030",
    },
    {
      icon: "/img/vector-46.svg",
      text: "0722-619-097",
      color: "#303030",
      hasMultipleIcons: true,
    },
    {
      icon: "/img/vector-46.svg",
      text: "Urgențe: 0744-579-725",
      color: "#303030",
      hasMultipleIcons: true,
    },
    { icon: "/img/vector-120.svg", text: "24/7", color: "#303030" },
  ];

  const legalLinks = [
    "Politica De Confidențialitate",
    "Termeni Și Condiții",
    "Certificări Anre & Iscir",
  ];

  return (
    <footer className="flex flex-col h-[633px] items-center justify-center gap-2.5 px-[60px] py-[200px] relative self-stretch w-full bg-white">
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] mt-[-125.00px] mb-[-8.00px]">
        <div className="inline-flex flex-col h-56 items-start relative flex-[0_0_auto]">
          <div className="relative w-[196px] h-9">
            <div className="bg-[url(/img/wordmark-3.svg)] relative h-[35px] left-px bg-[100%_100%]">
              <img
                className="absolute w-[35px] h-[35px] top-0 left-[37px]"
                alt="Vector"
                src="/img/vector-30.svg"
              />
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-1.5 px-0 py-5 relative flex-[0_0_auto]">
              <p className="relative w-[340px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
                Instalații gaze și centrale termice
                <br />
                Fondat 1996 | Autorizat ANRE și ISCIR
                <br />
                Constanța, România
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[293px] h-[315px] items-start gap-5 relative">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[22px] tracking-[0] leading-[28.6px] whitespace-nowrap">
            Servicii
          </div>

          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            {services.map((service, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
              >
                <div className="relative w-[18px] h-[18px]">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt="Vector"
                    src="/img/vector-36.svg"
                  />
                </div>

                {service.href ? (
                  <a
                    className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]"
                    href={service.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {service.name}
                  </a>
                ) : (
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
                    {service.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-col h-[315px] items-start gap-5 inline-flex relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[22px] tracking-[0] leading-[28.6px] whitespace-nowrap">
            Zone Deservite
          </div>

          <div className="flex flex-col w-[293px] items-start gap-3 relative flex-[0_0_auto]">
            {zones.map((zone, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="relative w-[18px] h-[18px]">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt="Vector"
                    src="/img/vector-40.svg"
                  />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-base tracking-[0.32px] leading-[normal]">
                  {zone}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-col h-[366px] items-start gap-5 inline-flex relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[22px] tracking-[0] leading-[28.6px] whitespace-nowrap">
            Contact &amp; Legal
          </div>

          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
              >
                <div className="relative w-5 h-5">
                  {contact.hasMultipleIcons ? (
                    <div className="relative w-[17px] h-[17px] top-px left-0.5">
                      <div className="relative h-[17px]">
                        <img
                          className="absolute w-4 h-4 top-px left-0"
                          alt="Vector"
                          src="/img/vector-46.svg"
                        />
                        <img
                          className="absolute w-2 h-2 top-0 left-[9px]"
                          alt="Vector"
                          src="/img/vector-118.svg"
                        />
                        <img
                          className="absolute w-[5px] h-[5px] top-[3px] left-[9px]"
                          alt="Vector"
                          src="/img/vector-48.svg"
                        />
                      </div>
                    </div>
                  ) : contact.icon === "/img/vector-41.svg" ? (
                    <img
                      className="absolute w-[15px] h-[18px] top-px left-[3px]"
                      alt="Vector"
                      src={contact.icon}
                    />
                  ) : contact.icon === "/img/vector-42.svg" ? (
                    <img
                      className="absolute w-[18px] h-[15px] top-[3px] left-px"
                      alt="Vector"
                      src={contact.icon}
                    />
                  ) : (
                    <img
                      className="absolute w-[18px] h-[18px] top-px left-px"
                      alt="Vector"
                      src={contact.icon}
                    />
                  )}
                </div>

                <div
                  className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[${contact.color}] text-base tracking-[0.32px] leading-[normal]`}
                >
                  {contact.text}
                </div>
              </div>
            ))}

            {legalLinks.map((link, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
              >
                <div className="relative w-[18px] h-[18px]">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt="Vector"
                    src="/img/vector-52.svg"
                  />
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
                  {link}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="relative w-[1395px] h-[107px] mb-[-124.00px] ml-[-37.50px] mr-[-37.50px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base text-center tracking-[0] leading-[28.8px]">
        © 2025 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații gaze
        și centrale termice Constanța din 1996
        <br />
        Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform standardelor
        europene
      </p>
    </footer>
  );
};
