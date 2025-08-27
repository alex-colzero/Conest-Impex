"use client";

import React from "react";

export const FrameWrapperSection = () => {
  const certifications = [
    {
      id: 1,
      icon: "/img/check-11.svg",
      text: "Autorizat Anre",
      fontWeight: "font-medium",
    },
    {
      id: 2,
      icon: "/img/check-13.svg",
      text: "Certificat Iscir",
      fontWeight: "font-medium",
    },
    {
      id: 3,
      icon: "/img/check-13.svg",
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

        <h2 className="relative w-96 ml-[-32.00px] mr-[-32.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-3xl text-center tracking-[3.00px] leading-[normal]">
          Autorizați ANRE &amp; ISCIR din 1996
        </h2>

        <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          <ul
            className="flex flex-col items-center justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]"
            role="list"
          >
            {certifications.map((cert) => (
              <li
                key={cert.id}
                className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
              >
                <img
                  className="relative w-[19px] h-[19px] aspect-[1]"
                  alt="Check mark"
                  src={cert.icon}
                />
                <span
                  className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] ${cert.fontWeight} text-[#05213c] text-base tracking-[0.80px] leading-[normal]`}
                >
                  {cert.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="inline-flex items-start gap-10 px-0 py-10 flex-col relative flex-[0_0_auto]">
          <a
            href="tel:0722619097"
            className="inline-flex items-center gap-2.5 px-9 py-[18px] flex-[0_0_auto] bg-[#f2b721] justify-center rounded-[10px] overflow-hidden hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f2b721] focus:ring-offset-2 no-underline"
            aria-label="Sună la numărul de telefon 0722 619 097"
          >
            <img
              className="relative w-[23.75px] h-[23.79px]"
              alt="Phone icon"
              src="/img/phoneicon-3.svg"
            />
            <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px] leading-[normal]">
              0722 619 097
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
