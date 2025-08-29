"use client";

import React from "react";

export const ExpertiseBoxSection = () => {
  const emergencyServices = [
    {
      title: "Scăpări De Gaze",
      description: "Intervenție imediată",
      icon: "/img/icon-18.png",
    },
    {
      title: "Centrale Oprite",
      description: "Remediere rapidă",
      icon: "/img/icon-18.png",
    },
    {
      title: "Presiune Scăzută",
      description: "Diagnosticare sistem",
      icon: "/img/icon-18.png",
    },
    {
      title: "Detecție Probleme",
      description: "Verificări siguranță",
      icon: "/img/icon-18.png",
    },
    {
      title: "Remediere Avarii",
      description: "Piese originale",
      icon: "/img/icon-18.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-5 px-5 py-[100px] relative self-stretch w-full flex-[0_0_auto]">
      <header className="inline-flex flex-wrap h-[60px] items-center justify-center gap-[10px_10px] px-5 py-2.5 relative bg-white rounded-[10px] overflow-hidden border border-solid border-[#05213c66]">
        <h2 className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-xl tracking-[0.80px] leading-[normal]">
          URGENȚE
        </h2>
      </header>

      <h2 className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-4xl text-center tracking-[0] leading-[46.8px]">
        <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-4xl tracking-[0] leading-[46.8px]">
          Urgențe gaze și centrale termice{" "}
        </span>

        <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-4xl tracking-[0] leading-[46.8px]">
          INTERVENȚII RAPIDE
        </span>

        <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-4xl tracking-[0] leading-[46.8px]">
          {" "}
          24/7
        </span>
      </h2>

      <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-3xl text-center tracking-[0] leading-[39.0px]">
        Când aveți o urgență cu gazele sau centrala termică, fiecare minut
        contează. Echipa CON EST IMPEX SRL este disponibilă NON-STOP pentru
        intervenții urgente în Constanța.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-6xl mx-auto mt-12 px-4">
        {emergencyServices.map((service, index) => (
            <article
              key={index}
              className="w-full h-[200px] md:h-[220px] bg-white flex flex-col items-center justify-center relative rounded-[20px] md:rounded-[30px] shadow-md hover:shadow-lg transition-shadow p-4"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#f2b721] rounded-[15px] flex items-center justify-center mb-3 md:mb-4">
                <img
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  alt={`${service.title} icon`}
                  src={service.icon}
                />
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-[#05213c] text-sm md:text-base mb-2 [font-family:'Poppins',Helvetica]">
                  {service.title}
                </h3>
                <p className="text-[#05213c] text-xs md:text-sm [font-family:'Poppins',Helvetica] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
        ))}
      </div>

      <footer className="flex flex-col items-center justify-center gap-6 pt-12 md:pt-20 pb-0 px-4 w-full">
        <a 
          href="tel:0744579715"
          className="text-2xl md:text-4xl font-semibold text-[#303030] text-center [font-family:'Poppins',Helvetica] hover:text-[#f2b721] transition-colors"
        >
          URGENȚE 24/7: 0744-579-715
        </a>

        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <p className="text-lg md:text-2xl lg:text-3xl font-normal text-[#5a5a5a] text-center [font-family:'Poppins',Helvetica] leading-relaxed max-w-4xl">
            Apelați acum pentru urgențe. Timp de răspuns rapid în Constanța
          </p>
        </div>
      </footer>
    </section>
  );
};
