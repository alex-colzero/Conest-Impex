"use client";

import React from "react";

export const FooterDetailSection = () => {
  const services = [
    { text: "Instalații Gaze Naturale", href: "instalatii-gaze-naturale.html" },
    { text: "Centrale Termice" },
    { text: "Urgențe 24/7" },
    { text: "Revizii Și Verificări" },
    { text: "Senzori Și Electrovalve" },
  ];

  const zones = [
    "Constanța Și Mamaia",
    "Năvodari Și Medgidia",
    "Mangalia Și Eforie",
    "Lucrări Naționale",
  ];

  const contactItems = [
    {
      icon: "/img/vector-63.svg",
      text: "Constanța, România",
      iconClass: "w-[15px] h-[18px] top-px left-[3px]",
    },
    {
      icon: "/img/vector-64.svg",
      text: "contact@conest-gaze-centrale.ro",
      href: "mailto:contact@conest-gaze-centrale.ro",
      isLink: true,
      iconClass: "w-[18px] h-[15px] top-[3px] left-px",
    },
    {
      icon: "phone",
      text: "0722-619-097",
      iconClass: "phone",
    },
    {
      icon: "phone",
      text: "Urgențe: 0744-579-725",
      iconClass: "phone",
    },
    {
      icon: "/img/vector-71.svg",
      text: "24/7",
      iconClass: "w-[18px] h-[18px] top-px left-px",
    },
  ];

  const legalItems = [
    "Politica De Confidențialitate",
    "Termeni Și Condiții",
    "Certificări Anre & Iscir",
  ];

  const renderPhoneIcon = () => (
    <div className="relative w-[17px] h-[17px] top-px left-0.5">
      <div className="relative h-[17px]">
        <img
          className="absolute w-4 h-4 top-px left-0"
          alt="Vector"
          src="/img/vector-68.svg"
        />
        <img
          className="absolute w-2 h-2 top-0 left-[9px]"
          alt="Vector"
          src="/img/vector-69.svg"
        />
        <img
          className="absolute w-[5px] h-[5px] top-[3px] left-[9px]"
          alt="Vector"
          src="/img/vector-70.svg"
        />
      </div>
    </div>
  );

  return (
    <footer className="flex flex-col items-center justify-center gap-5 px-10 py-20 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col items-center justify-center gap-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[196px] h-9">
            <div className="bg-[url(/img/wordmark-4.svg)] relative h-[35px] left-px bg-[100%_100%]">
              <img
                className="absolute w-[35px] h-[35px] top-0 left-[37px]"
                alt="Vector"
                src="/img/vector-53.svg"
              />
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
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

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[22px] tracking-[0] leading-[28.6px] whitespace-nowrap">
            Servicii
          </h3>

          <nav
            className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]"
            role="navigation"
            aria-label="Servicii"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
              >
                <div className="relative w-[18px] h-[18px]">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt=""
                    src="/img/vector-74.svg"
                  />
                </div>

                {service.href ? (
                  <a
                    className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]"
                    href={service.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {service.text}
                  </a>
                ) : (
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
                    {service.text}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[22px] tracking-[0] leading-[28.6px] whitespace-nowrap">
            Zone Deservite
          </h3>

          <div className="flex flex-col w-[293px] items-start gap-3 relative flex-[0_0_auto]">
            {zones.map((zone, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="relative w-[18px] h-[18px]">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt=""
                    src="/img/vector-74.svg"
                  />
                </div>

                <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-base tracking-[0.32px] leading-[normal]">
                  {zone}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[22px] tracking-[0] leading-[28.6px] whitespace-nowrap">
            Contact &amp; Legal
          </h3>

          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
              >
                <div className="relative w-5 h-5">
                  {item.iconClass === "phone" ? (
                    renderPhoneIcon()
                  ) : (
                    <img
                      className={`absolute ${item.iconClass}`}
                      alt=""
                      src={item.icon}
                    />
                  )}
                </div>

                {item.isLink ? (
                  <a
                    className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-base tracking-[0.32px] leading-[normal] underline"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.text}
                  </a>
                ) : (
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-base tracking-[0.32px] leading-[normal]">
                    {item.text}
                  </div>
                )}
              </div>
            ))}

            {legalItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
              >
                <div className="relative w-[18px] h-[18px]">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt=""
                    src="/img/vector-74.svg"
                  />
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="relative w-[369px] ml-[-4.50px] mr-[-4.50px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-sm tracking-[0] leading-[25.2px]">
        © 2025 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații gaze
        și centrale termice Constanța din 1996 Autorizat ANRE • Certificat ISCIR
        (RVT și RSL) • Conform standardelor europene
      </p>
    </footer>
  );
};
