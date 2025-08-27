"use client";

import React from "react";
import Link from "next/link";

export const ServiceBoxWrapperSection = () => {
  const services = [
    {
      id: 1,
      icon: "/img/image-8-2.png",
      iconWidth: "45px",
      iconHeight: "61px",
      iconMarginTop: "-10.50px",
      iconMarginBottom: "-10.50px",
      iconAspectRatio: "0.73",
      title: "Senzori gaze și electrovalve",
      description:
        "Montaj detectoare gaze naturale cu electrovalvă automată. Siguranță completă pentru familia dvs.",
      buttonText: "Sisteme Siguranță ➔",
      link: "/sisteme-siguranta",
    },
    {
      id: 2,
      icon: "/img/image-9-2.png",
      iconWidth: "51px",
      iconHeight: "51px",
      iconMarginTop: "-5.50px",
      iconMarginBottom: "-5.50px",
      iconAspectRatio: "0.98",
      title: "Modernizare și Smart-Home",
      description:
        "Modernizarea instalațiilor existente și integrarea cu sisteme smart home. Eficiență energetică maximă.",
      buttonText: "Modernizare ➔",
      link: "/modernizare-smart-home",
    },
  ];

  return (
    <section className="flex flex-col max-w-[1600px] items-center gap-5 px-5 py-[100px] relative w-full flex-[0_0_auto]">
      <h2 className="relative w-[352px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[34px] text-center tracking-[0] leading-[44.2px]">
        Siguranță și eficiență pentru casa ta
      </h2>

      <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-3xl text-center tracking-[0] leading-[39.0px]">
        Integram cele mai noi tehnologii pentru a vă transforma locuința într-un
        spațiu mai sigur și mai eficient energetic, cu sisteme smart home și
        protecție automată împotriva gazelor.
      </p>

      <div className="flex flex-col items-center gap-10 pt-[60px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
        {services.map((service) => (
          <article
            key={service.id}
            className="gap-10 p-10 self-stretch w-full flex-[0_0_auto] bg-white flex flex-col items-center relative rounded-[40px]"
          >
            <div className="flex flex-col w-[100px] h-[100px] items-center justify-center px-0 py-[30px] relative bg-[#05213c1a] rounded-[20px] overflow-hidden aspect-[1]">
              <img
                className={`w-[${service.iconWidth}] h-[${service.iconHeight}] mt-[${service.iconMarginTop}] mb-[${service.iconMarginBottom}] aspect-[${service.iconAspectRatio}] relative object-cover`}
                alt={service.title}
                src={service.icon}
              />
            </div>

            <div className="inline-flex items-center gap-10 flex-[0_0_auto] flex-col relative">
              <div className="flex flex-col items-center justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px]">
                  {service.title}
                </h3>

                <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base text-center tracking-[0] leading-[20.8px]">
                  {service.description}
                </p>
              </div>

              <Link
                href={service.link}
                className="all-[unset] box-border inline-flex items-end px-9 py-[18px] flex-[0_0_auto] bg-[#05213c] justify-center relative rounded-[10px] overflow-hidden hover:bg-[#0a2a4a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#05213c] focus:ring-offset-2"
                aria-label={`Learn more about ${service.title}`}
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-base text-center tracking-[1.28px] leading-[normal]">
                  {service.buttonText}
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
