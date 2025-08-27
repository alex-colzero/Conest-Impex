"use client";

import React from "react";

export const MainContentSection = () => {
  const services = [
    {
      id: 1,
      icon: "/img/image-8-4.png",
      iconAlt: "Gas sensors icon",
      iconWidth: "w-[45px]",
      iconHeight: "h-[61px]",
      iconMargin: "mt-[-10.50px] mb-[-10.50px]",
      iconAspect: "aspect-[0.73]",
      title: "Senzori gaze și electrovalve",
      description:
        "Montaj detectoare gaze naturale cu electrovalvă automată. Siguranță completă pentru familia dvs.",
      buttonText: "Sisteme Siguranță ➔",
    },
    {
      id: 2,
      icon: "/img/image-9-4.png",
      iconAlt: "Smart home icon",
      iconWidth: "w-[51px]",
      iconHeight: "h-[51px]",
      iconMargin: "mt-[-5.50px] mb-[-5.50px]",
      iconAspect: "aspect-[0.98]",
      title: "Modernizare și Smart-Home",
      description:
        "Modernizarea instalațiilor existente și integrarea cu sisteme smart home. Eficiență energetică maximă.",
      buttonText: "Modernizare ➔",
    },
  ];

  return (
    <section className="flex flex-col max-w-[1600px] items-center gap-[30px] pt-[200px] pb-0 px-[60px] relative w-full flex-[0_0_auto]">
      <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] text-center tracking-[0] leading-[83.2px]">
        Siguranță și eficiență pentru casa ta
      </h1>

      <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-3xl text-center tracking-[0] leading-[39.0px]">
        Integram cele mai noi tehnologii pentru a vă transforma locuința într-un
        spațiu mai sigur și mai eficient energetic, cu sisteme smart home și
        protecție automată împotriva gazelor.
      </p>

      <div className="flex items-start justify-center gap-5 pt-20 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
        {services.map((service) => (
          <article
            key={service.id}
            className="min-h-[287px] max-h-[287px] items-start gap-[30px] px-[50px] py-10 bg-white flex relative flex-1 grow rounded-[40px]"
          >
            <div className="flex flex-col w-[100px] h-[100px] items-center justify-center px-0 py-[30px] relative bg-[#05213c1a] rounded-[20px] overflow-hidden aspect-[1]">
              <img
                className={`${service.iconWidth} ${service.iconHeight} ${service.iconMargin} ${service.iconAspect} relative object-cover`}
                alt={service.iconAlt}
                src={service.icon}
              />
            </div>

            <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[26px] tracking-[0] leading-[33.8px] whitespace-nowrap">
                  {service.title}
                </h2>

                <p className="relative w-[372px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base tracking-[0] leading-[20.8px]">
                  {service.description}
                </p>
              </div>

              <button
                className="all-[unset] box-border inline-flex items-end px-9 py-[18px] flex-[0_0_auto] justify-center relative bg-[#05213c] rounded-[10px] overflow-hidden"
                type="button"
                aria-label={`Learn more about ${service.title}`}
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-base text-center tracking-[1.28px] leading-[normal]">
                  {service.buttonText}
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
