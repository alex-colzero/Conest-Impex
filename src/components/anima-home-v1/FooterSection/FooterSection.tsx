import React from "react";

export const FooterSection = (): JSX.Element => {
  const contactInfo = [
    {
      icon: "/assets/anima-home-v1/solar-map-point-outline.svg",
      text: "Constanța, România",
      alt: "Solar map point",
    },
    {
      icon: "/assets/anima-home-v1/solar-letter-outline.svg",
      text: "contact@conest-gaze-centrale.ro",
      alt: "Solar letter outline",
    },
    {
      icon: "/assets/anima-home-v1/solar-phone-calling-outline-1.svg",
      text: "0xxx-xxx-xxx",
      alt: "Solar phone calling",
    },
    {
      icon: "/assets/anima-home-v1/solar-phone-calling-outline-1.svg",
      text: "Urgențe: 0xxx-xxx-xxx",
      alt: "Solar phone calling",
    },
    {
      icon: "/assets/anima-home-v1/solar-clock-circle-outline.svg",
      text: "24/7",
      alt: "Solar clock circle",
    },
  ];

  const legalLinks = [
    {
      icon: "/assets/anima-home-v1/la-chevron-circle-right-12.svg",
      text: "Politica De Confidențialitate",
      alt: "La chevron circle",
    },
    {
      icon: "/assets/anima-home-v1/la-chevron-circle-right-12.svg",
      text: "Termeni Și Condiții",
      alt: "La chevron circle",
    },
    {
      icon: "/assets/anima-home-v1/la-chevron-circle-right-12.svg",
      text: "Certificări Anre & Iscir",
      alt: "La chevron circle",
    },
  ];

  const serviceAreas = [
    "Constanța Și Mamaia",
    "Năvodari Și Medgidia",
    "Mangalia Și Eforie",
    "Lucrări Naționale",
  ];

  const services = [
    {
      text: "Instalații Gaze Naturale",
      href: "instalatii-gaze-naturale.html",
    },
    {
      text: "Centrale Termice",
    },
    {
      text: "Urgențe 24/7",
    },
    {
      text: "Revizii Și Verificări",
    },
    {
      text: "Revizii Și Verificări",
    },
    {
      text: "Senzori Și Electrovalve",
    },
  ];

  return (
    <footer className="absolute w-[1420px] h-[363px] top-[73px] left-[250px] bg-transparent">
      <div className="inline-flex flex-col h-[366px] items-start gap-5 absolute top-[29px] left-[1080px]">
        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[22px] tracking-[0] leading-[28.6px] whitespace-nowrap">
          Contact &amp; Legal
        </h3>

        <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
            >
              <img
                className="relative w-5 h-5"
                alt={item.alt}
                src={item.icon}
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
                {item.text}
              </div>
            </div>
          ))}

          {legalLinks.map((link, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
            >
              <img
                className="relative w-[18px] h-[18px]"
                alt={link.alt}
                src={link.icon}
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
                {link.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="inline-flex flex-col h-[315px] items-start gap-5 absolute top-[29px] left-[720px]">
        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[22px] tracking-[0] leading-[28.6px] whitespace-nowrap">
          Zone Deservite
        </h3>

        <div className="flex flex-col w-[293px] items-start gap-3 relative flex-[0_0_auto]">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]"
            >
              <img
                className="relative w-[18px] h-[18px]"
                alt="La chevron circle"
                src="/assets/anima-home-v1/la-chevron-circle-right-12.svg"
              />
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-base tracking-[0.32px] leading-[normal]">
                {area}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="inline-flex flex-col h-[315px] items-start gap-5 absolute top-[29px] left-[360px]">
        <h3 className="font-semibold text-[#05213c] text-[22px] tracking-[0] leading-[28.6px] whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica]">
          Servicii
        </h3>

        <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          {services.map((service, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
            >
              <img
                className="relative w-[18px] h-[18px]"
                alt="La chevron circle"
                src="/assets/anima-home-v1/la-chevron-circle-right-12.svg"
              />
              {service.href ? (
                <a
                  className="w-fit relative mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]"
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
        </div>
      </div>

      <div className="inline-flex flex-col h-56 items-start gap-5 absolute top-[29px] left-0">
        <img
          className="relative w-[219px] h-11"
          alt="Logo"
          src="/assets/anima-home-v1/logo@2x.png"
        />

        <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
            <p className="w-[340px] relative mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0.32px] leading-[normal]">
              Instalații Gaze &amp; Centrale Termice
              <br />
              est. 1996 | Autorizat Anre &amp; Iscir
              <br />
              constanța, România
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
