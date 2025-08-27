"use client";

import React from "react";
import Link from "next/link";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "/img/icon-11.png",
      iconAlt: "Icon",
      iconWidth: "w-[51px]",
      iconHeight: "h-[68px]",
      iconMarginTop: "mt-[-14.00px]",
      iconMarginBottom: "mb-[-14.00px]",
      iconAspect: "aspect-[0.75]",
      title: "Instalații gaze naturale",
      description:
        "Executarea instalației de utilizare. Montarea conductei între branșament și aparatele consumatoare, inclusiv instalarea dispozitivelor de detecție și siguranță.",
      buttonText: "Detalii Instalații Gaze ➔",
      link: "/instalatii-gaze-naturale",
    },
    {
      id: 2,
      icon: "/img/icon-30.png",
      iconAlt: "Icon",
      iconWidth: "w-[60px]",
      iconHeight: "h-[62px]",
      iconMarginTop: "mt-[-11.00px]",
      iconMarginBottom: "mb-[-11.00px]",
      iconAspect: "aspect-[0.96]",
      title: "Centrale termice și încălzire",
      description:
        "Montaj și autorizare centrale termice cu tiraj forțat sau natural. Service autorizat ISCIR pentru toate mărcile de centrale.",
      buttonText: "Servicii Centrale ➔",
      link: "/centrale-termice",
    },
    {
      id: 3,
      icon: "/img/service-icon-2.png",
      iconAlt: "Service icon",
      iconWidth: "w-[45.86px]",
      iconHeight: "h-[60.3px]",
      iconMarginTop: "mt-[-10.15px]",
      iconMarginBottom: "mb-[-10.15px]",
      iconAspect: "aspect-[0.64]",
      title: "Revizii și verificări ANRE",
      description:
        "Verificări tehnice periodice obligatorii la 2 ani. Revizii complete și eliberare certificate de conformitate.",
      buttonText: "Programează Revizie ➔",
      link: "/revizii-anre",
    },
  ];

  return (
    <section className="flex flex-col max-w-[1600px] items-center gap-10 px-5 py-[100px] relative w-full flex-[0_0_auto]">
      <header className="inline-flex flex-wrap h-[60px] items-center justify-center gap-[10px_10px] px-5 py-2.5 relative bg-white rounded-[10px] overflow-hidden border border-solid border-[#05213c66]">
        <h2 className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-lg tracking-[1.80px] leading-[normal]">
          ANRE și ISCIR
        </h2>
      </header>

      <h1 className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[34px] text-center tracking-[0] leading-[44.2px]">
        Soluții complete pentru instalații gaze și centrale termice
      </h1>

      <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-xl text-center tracking-[0] leading-[26.0px]">
        Cu o experiență de peste 27 de ani, oferim servicii complete autorizate
        ANRE și ISCIR pentru toate nevoile dvs. de încălzire și instalații gaze.
      </p>

      <div className="flex flex-col items-start gap-[30px] pt-[70px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
        {services.map((service) => (
          <article
            key={service.id}
            className="flex flex-wrap items-start gap-[30px_30px] relative self-stretch w-full flex-[0_0_auto]"
          >
            <div className="flex items-center gap-10 relative flex-1 grow">
              <div className="flex flex-col h-[508px] items-center pt-[60px] pb-[50px] px-10 relative flex-1 grow bg-white rounded-[40px]">
                <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[100px] h-[100px] items-center justify-center px-0 py-[30px] relative bg-[#f2b721] rounded-[20px] overflow-hidden aspect-[1]">
                      <img
                        className={`relative ${service.iconWidth} ${service.iconHeight} ${service.iconMarginTop} ${service.iconMarginBottom} ${service.iconAspect} object-cover`}
                        alt={service.iconAlt}
                        src={service.icon}
                      />
                    </div>

                    <div className="flex flex-col items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px]">
                        {service.title}
                      </h3>

                      <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base text-center tracking-[0] leading-[20.8px]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col items-center justify-end gap-2.5 relative flex-1 grow">
                  <div className="inline-flex flex-col items-center justify-end gap-2.5 relative flex-[0_0_auto]">
                    <Link
                      href={service.link}
                      className="flex w-[294px] h-[70px] items-center px-9 py-[30px] bg-[#05213c] justify-center rounded-[10px] overflow-hidden hover:bg-[#0a2a4a] focus:bg-[#0a2a4a] focus:outline-2 focus:outline-offset-2 focus:outline-[#05213c] transition-colors duration-200"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span className="relative flex-1 mt-[-8.00px] mb-[-6.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-base text-center tracking-[1.28px] leading-[normal]">
                        {service.buttonText}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
