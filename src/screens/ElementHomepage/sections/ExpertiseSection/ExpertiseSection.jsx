"use client";

import React from "react";

export const ExpertiseSection = () => {
  const expertiseData = [
    {
      id: 1,
      title: "Constanța",
      subtitle: "Acoperire Primară",
      image: "/img/acoperire-primara-constanta-1.png",
      imageAlt: "Acoperire primara",
      areas: [
        { name: "Mamaia", description: "Proprietăți premium" },
        { name: "Centrul Vechi", description: "Modernizări" },
        { name: "Km 4-5", description: "Zone rezidențiale" },
        { name: "Tomis", description: "Apartamente noi" },
      ],
    },
    {
      id: 2,
      title: "Proiecte Naționale",
      subtitle: "",
      image: "/img/proiecte-nationale-1.png",
      imageAlt: "Proiecte nationale",
      areas: [
        { name: "Constanța", description: "Proiecte mari" },
        { name: "Județul Constanța", description: "Zone rurale" },
        { name: "Portul Constanța", description: "Zone industriale" },
        { name: "Alte județe", description: "La cerere" },
      ],
    },
    {
      id: 3,
      title: "Regiunea Dobrogea",
      subtitle: "",
      image: "/img/regiunea-dobrogea-1.png",
      imageAlt: "Regiunea dobrogea",
      areas: [
        { name: "Năvodari", description: "Case și vilet" },
        { name: "Medgidia", description: "Service centrale" },
        { name: "Mangalia", description: "Instalații sezonale" },
        { name: "Eforie", description: "Hoteluri" },
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 px-5 py-[100px] relative self-stretch w-full flex-[0_0_auto]">
      {expertiseData.map((expertise) => (
        <article
          key={expertise.id}
          className="h-[953px] gap-10 self-stretch w-full bg-white flex flex-col items-center relative rounded-[40px]"
        >
          <div className="h-[300px] self-stretch w-full bg-[#05213c1a] rounded-[40px_40px_0px_0px] flex flex-col items-center justify-center relative overflow-hidden">
            <img
              className="relative flex-1 self-stretch w-full grow object-cover"
              alt={expertise.imageAlt}
              src={expertise.image}
            />
          </div>

          <div className="flex flex-col h-[179px] items-start gap-10 relative self-stretch w-full">
            {expertise.subtitle ? (
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-4xl text-center tracking-[0] leading-[46.8px]">
                <span className="font-semibold">
                  {expertise.title}
                  <br />
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-4xl tracking-[0] leading-[46.8px]">
                  {expertise.subtitle}
                </span>
              </p>
            ) : (
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-4xl text-center tracking-[0] leading-[46.8px]">
                {expertise.title}
              </h2>
            )}

            <div className="relative self-stretch w-full h-px bg-[#05213c66]" />

            <div
              className={`flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto] ${expertise.id === 1 || expertise.id === 3 ? "mb-[-394.00px]" : ""}`}
            >
              <div
                className={`relative flex-1 ${expertise.id === 2 ? "h-1" : "h-[398px]"} mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px] ${expertise.id === 2 ? "whitespace-nowrap" : ""}`}
              >
                {expertise.areas.map((area, index) => (
                  <React.Fragment key={index}>
                    <span className="font-bold">
                      {area.name}
                      <br />
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] tracking-[0] leading-[33.8px]">
                      {area.description}
                      <br />
                      {index < expertise.areas.length - 1 && <br />}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
