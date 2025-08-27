"use client";

import React from "react";

export const ExperienceSection = () => {
  // Data for the feature items
  const features = [
    {
      title: "Autorizații complete",
      description: "ANRE și ISCIR (RVT și RSL)",
    },
    {
      title: "Experiență vastă",
      description: "Peste 27 de ani pe piață",
    },
    {
      title: "Siguranță garantată",
      description: "Standarde europene",
    },
    {
      title: "Reduceri speciale",
      description: "-25% pensionari",
    },
  ];

  // Data for the statistics
  const statistics = [
    {
      value: "27+",
      label: "Ani de experiență",
      isMainStat: true,
    },
    {
      value: "3400+",
      label: "Proiecte Realizate",
      isMainStat: false,
    },
    {
      value: "24/7",
      label: "Service Urgențe",
      isMainStat: false,
    },
    {
      value: "100%",
      label: "Conformitate ANRE / ISCIR",
      isMainStat: false,
    },
  ];

  return (
    <section className="flex h-[1056px] items-center justify-center gap-20 px-[100px] py-[200px] relative self-stretch w-full bg-[#05213c]">
      <div className="flex flex-col items-start gap-10 relative flex-1 grow">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[56px] tracking-[0] leading-[72.8px]">
          Experți în instalații
          <br />
          gaze din 1996
        </h2>

        <p className="relative self-stretch h-[167px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[1.60px] leading-[normal]">
          SC CON EST IMPEX SRL este o companie cu tradiție în domeniul
          instalațiilor de gaze naturale și centrale termice, activând din 1996
          în Constanța și regiunea Dobrogea.
          <br />
          <br />
          Suntem autorizați ANRE pentru instalații gaze și certificați ISCIR
          (RVT și RSL) pentru centrale termice, garantând conformitatea completă
          cu reglementările naționale și europene.
        </p>

        <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-start gap-[70px] relative flex-[0_0_auto]">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
              >
                <img
                  className="relative w-[19px] h-[19px] aspect-[1]"
                  alt="Check"
                  src="/img/check-31.svg"
                />

                <p
                  className={`relative ${index === 0 ? "w-[218px] h-12" : "w-fit"} mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0.80px] leading-[normal]`}
                >
                  <span className="font-bold tracking-[0.13px]">
                    {feature.title}
                    <br />
                  </span>

                  <span className="tracking-[0.13px]">
                    {feature.description}
                    {index === 1 && <br />}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="inline-flex items-start gap-[70px] relative flex-[0_0_auto]">
            {features.slice(2, 4).map((feature, index) => (
              <div
                key={index + 2}
                className={`${index === 0 ? "flex w-[247px]" : "inline-flex"} items-center gap-2.5 relative ${index === 1 ? "flex-[0_0_auto]" : ""}`}
              >
                <img
                  className="relative w-[19px] h-[19px] aspect-[1]"
                  alt="Check"
                  src="/img/check-31.svg"
                />

                <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0.80px] leading-[normal]">
                  <span className="font-bold tracking-[0.13px]">
                    {feature.title}
                    <br />
                  </span>

                  <span className="tracking-[0.13px]">
                    {feature.description}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="flex-col h-[800px] items-center gap-5 p-10 mt-[-72.00px] mb-[-72.00px] bg-[#f2b721] flex relative flex-1 grow rounded-[40px]">
        {statistics.map((stat, index) => {
          if (stat.isMainStat) {
            return (
              <div
                key={index}
                className="inline-flex flex-col h-[185px] items-center gap-5 relative"
              >
                <div className="relative w-[270px] h-[147px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#05213c] text-[150px] text-center tracking-[0] leading-[195.0px] whitespace-nowrap">
                  {stat.value}
                </div>

                <div className="relative w-[372px] h-[23px] mb-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px] whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            );
          }

          if (index === 1) {
            return (
              <React.Fragment key={index}>
                <div className="relative w-[200px] h-[30px]" />

                <div className="flex flex-col h-[140px] items-center justify-center gap-2.5 p-10 relative self-stretch w-full rounded-[40px] border-2 border-dashed border-[#05213c]">
                  <div className="relative w-[270px] h-[55px] mt-[-18.00px] [font-family:'Poppins',Helvetica] font-bold text-[#05213c] text-[56px] text-center tracking-[0] leading-[72.8px] whitespace-nowrap">
                    {stat.value}
                  </div>

                  <div className="relative w-[372px] h-[27px] mb-[-14.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px] whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              </React.Fragment>
            );
          }

          return (
            <div
              key={index}
              className="flex flex-col h-[140px] items-center justify-center gap-2.5 p-10 relative self-stretch w-full rounded-[40px] border-2 border-dashed border-[#05213c]"
            >
              <div className="relative w-[270px] h-[55px] mt-[-16.00px] [font-family:'Poppins',Helvetica] font-bold text-[#05213c] text-[56px] text-center tracking-[0] leading-[72.8px] whitespace-nowrap">
                {stat.value}
              </div>

              <div className="relative w-[372px] h-[23px] mb-[-12.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base text-center tracking-[0] leading-[20.8px] whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          );
        })}
      </aside>
    </section>
  );
};
