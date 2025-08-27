"use client";

import React from "react";

export const ExpertiseBoxWrapperSection = () => {
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

      <h1 className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-4xl text-center tracking-[0] leading-[46.8px]">
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
      </h1>

      <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-3xl text-center tracking-[0] leading-[39.0px]">
        Când aveți o urgență cu gazele sau centrala termică, fiecare minut
        contează. Echipa CON EST IMPEX SRL este disponibilă NON-STOP pentru
        intervenții urgente în Constanța.
      </p>

      <div className="grid grid-cols-2 grid-rows-[fit-content(100%)_fit-content(100%)_fit-content(100%)] h-[870px] gap-5 pt-20 pb-0 px-0 absolute w-[400px] top-[720px] left-5">
        {emergencyServices.map((service, index) => (
          <article
            key={index}
            className={`${
              index === 0
                ? "row-[1_/_2] col-[1_/_2]"
                : index === 1
                  ? "row-[1_/_2] col-[2_/_3]"
                  : index === 2
                    ? "row-[2_/_3] col-[1_/_2]"
                    : index === 3
                      ? "row-[2_/_3] col-[2_/_3]"
                      : "row-[3_/_4] col-[1_/_2]"
            } w-full h-[250px] justify-center gap-10 bg-white flex flex-col items-center relative rounded-[40px]`}
          >
            <div className="inline-flex flex-col h-[250px] items-center justify-center gap-5 px-0 py-6 relative ml-[-15.50px] mr-[-15.50px]">
              <div className="w-[100px] h-[100px] bg-[#05213c1a] rounded-[20px] aspect-[1] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="relative w-[50px] h-[50px] aspect-[1]">
                  <img
                    className="absolute w-3.5 h-[58px] -top-1 left-[17px] aspect-[0.24] object-cover"
                    alt={`Icon for ${service.title}`}
                    src={service.icon}
                  />
                </div>
              </div>

              <div className="flex flex-col w-[221px] h-[37px] items-center relative">
                <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
                  {service.title}
                </h3>

                <p className="relative self-stretch h-[46px] mb-[-29.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base text-center tracking-[0] leading-[20.8px]">
                  {service.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="flex flex-col items-center justify-center gap-10 pt-[100px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-4xl text-center tracking-[0] leading-[46.8px]">
          URGENȚE 24/7: 0744-579-715
        </h2>

        <div className="flex flex-col items-center justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-3xl text-center tracking-[0] leading-[39.0px]">
            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-3xl tracking-[0] leading-[39.0px]">
              Apelați acum pentru urgențe. Timp de răspuns rapid ore în
              Constanța
              <br />
            </span>
          </p>
        </div>
      </footer>
    </section>
  );
};
