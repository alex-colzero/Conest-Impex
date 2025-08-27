"use client";

import React from "react";

export const HeroSection = () => {
  const certifications = [
    {
      id: 1,
      icon: "/img/check-27.svg",
      text: "Autorizat Anre",
      fontWeight: "font-medium",
    },
    {
      id: 2,
      icon: "/img/check-2.svg",
      text: "Certificat Iscir",
      fontWeight: "font-medium",
    },
    {
      id: 3,
      icon: "/img/check-2.svg",
      text: "Garanție 2 Ani",
      fontWeight: "font-semibold",
    },
  ];

  return (
    <section className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto] shadow-[0px_1px_1px_#00000040] bg-[url(/img/hero-4.png)] bg-cover bg-[50%_50%]">
      <div className="flex flex-col items-center justify-center gap-10 p-[60px] relative flex-1 grow">
        <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-4xl text-center tracking-[0] leading-[46.8px]">
          Instalații gaze și centrale termice constanța
        </h1>

        <p className="relative w-96 ml-[-32.00px] mr-[-32.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-3xl text-center tracking-[3.00px] leading-[normal]">
          Autorizați ANRE &amp; ISCIR din 1996
        </p>

        <div className="flex items-start gap-[30px] self-stretch w-full flex-[0_0_auto] flex-col relative">
          <div className="flex flex-col items-center justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
              >
                <img
                  className="relative w-[19px] h-[19px] aspect-[1]"
                  alt="Check"
                  src={cert.icon}
                />

                <div
                  className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] ${cert.fontWeight} text-[#05213c] text-base tracking-[0.80px] leading-[normal]`}
                >
                  {cert.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="inline-flex items-start gap-10 px-0 py-10 flex-col relative flex-[0_0_auto]">
          <a
            href="tel:0722619097"
            className="inline-flex items-center gap-2.5 px-9 py-[18px] flex-[0_0_auto] bg-[#f2b721] justify-center relative rounded-[10px] overflow-hidden hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#f2b721] focus:ring-offset-2 transition-all duration-200 no-underline"
            aria-label="Sună la numărul 0722 619 097"
          >
            <img
              className="relative w-[23.75px] h-[23.79px]"
              alt="Phone icon"
              src="/img/phoneicon-3.svg"
            />

            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px] leading-[normal]">
              0722 619 097
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
