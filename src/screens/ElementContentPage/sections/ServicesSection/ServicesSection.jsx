"use client";

import React from "react";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "/img/icon-9.png",
      title: "Centrale termice & încălzire",
      description:
        "Montaj și autorizare centrale termice cu tiraj forțat sau natural. Service autorizat ISCIR pentru toate mărcile de centrale.",
      buttonText: "Servicii Centrale ➔",
    },
    {
      id: 2,
      icon: "/img/service-icon-1.png",
      title: "Revizii și verificări ANRE",
      description:
        "Verificări tehnice periodice obligatorii la 2 ani. Revizii complete și eliberare certificate de conformitate.",
      buttonText: "Programează Revizie ➔",
    },
  ];

  return (
    <section className="flex flex-col max-w-[1600px] items-center gap-[30px] px-[60px] py-0 relative w-full flex-[0_0_auto]">
      <div className="flex flex-col max-w-[1600px] w-[1284px] items-center gap-[50px] pt-0 pb-[200px] px-[60px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-wrap h-[60px] items-center justify-center gap-[10px_10px] px-5 py-2.5 relative bg-white rounded-[10px] overflow-hidden border border-solid border-[#05213c66]">
          <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-xl tracking-[0.80px] leading-[normal]">
            Montaj și service autorizat
          </div>
        </div>

        <img
          className="relative self-stretch w-full flex-[0_0_auto]"
          alt="Logos"
          src="/img/logos-1.svg"
        />
      </div>

      <h1 className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] text-center tracking-[0] leading-[83.2px]">
        Soluții complete pentru instalații gaze și centrale termice
      </h1>

      <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-3xl text-center tracking-[0] leading-[39.0px]">
        Cu o experiență de peste 27 de ani, oferim servicii complete autorizate
        ANRE și ISCIR pentru toate nevoile dvs. de încălzire și instalații gaze.
      </p>

      <div className="flex min-w-[1024px] max-w-[1400px] items-center justify-center gap-5 relative w-full flex-[0_0_auto]">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-center gap-10 relative flex-1 grow"
          >
            <article className="flex flex-col min-w-[308px] h-[508px] items-center pt-[60px] pb-[50px] px-10 relative flex-1 grow bg-white rounded-[40px]">
              <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col w-[100px] h-[100px] items-center justify-center px-0 py-[30px] relative bg-[#f2b721] rounded-[20px] overflow-hidden aspect-[1]">
                    <img
                      className={`relative ${service.id === 1 ? "w-[60px] h-[62px] mt-[-11.00px] mb-[-11.00px] aspect-[0.96]" : "w-[45.86px] h-[60.3px] mt-[-10.15px] mb-[-10.15px] aspect-[0.64]"} object-cover`}
                      alt={`${service.title} icon`}
                      src={service.icon}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                    <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px]">
                      {service.title}
                    </h2>

                    <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base text-center tracking-[0] leading-[20.8px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-end gap-2.5 relative flex-1 self-stretch w-full grow">
                <div className="flex flex-col items-center justify-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <button
                    className="all-[unset] box-border flex h-[70px] items-center justify-center px-9 py-[30px] relative self-stretch w-full bg-[#05213c] rounded-[10px] overflow-hidden hover:bg-[#0a2a4a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#05213c] focus:ring-offset-2"
                    type="button"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span className="relative flex-1 mt-[-8.00px] mb-[-6.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-base text-center tracking-[1.28px] leading-[normal]">
                      {service.buttonText}
                    </span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
