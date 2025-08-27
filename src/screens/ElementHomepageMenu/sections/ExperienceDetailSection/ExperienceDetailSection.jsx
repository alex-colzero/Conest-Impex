"use client";

import React from "react";

export const ExperienceDetailSection = () => {
  const features = [
    {
      title: "Autorizații complete",
      description: "ANRE și ISCIR (RVT și RSL)",
      width: "w-[218px]",
    },
    {
      title: "Experiență vastă",
      description: "Peste 27 de ani pe piață",
      width: "w-fit",
    },
    {
      title: "Siguranță garantată",
      description: "Standarde europene",
      width: "w-fit",
    },
    {
      title: "Reduceri speciale",
      description: "-25% pensionari",
      width: "w-fit",
    },
  ];

  const statistics = [
    {
      number: "3400+",
      label: "Proiecte Realizate",
      hasBorder: true,
    },
    {
      number: "24/7",
      label: "Service Urgențe",
      hasBorder: true,
    },
    {
      number: "100%",
      label: "Conformitate ANRE / ISCIR",
      hasBorder: true,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-5 px-5 py-[100px] relative self-stretch w-full flex-[0_0_auto] bg-[#05213c]">
      <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[46.8px]">
          Experți în instalații
          <br />
          gaze din 1996
        </h1>

        <p className="relative self-stretch h-60 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[1.60px] leading-[normal]">
          SC CON EST IMPEX SRL este o companie cu tradiție în domeniul
          instalațiilor de gaze naturale și centrale termice, activând din 1996
          în Constanța și regiunea Dobrogea.
          <br />
          <br />
          Suntem autorizați ANRE pentru instalații gaze și certificați ISCIR
          (RVT și RSL) pentru centrale termice, garantând conformitatea completă
          cu reglementările naționale și europene.
        </p>

        <div className="flex flex-col h-[488px] items-center justify-center relative self-stretch w-full">
          <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
              >
                <img
                  className="relative w-[19px] h-[19px] aspect-[1]"
                  alt="Check"
                  src="/img/check-17.svg"
                />

                <p
                  className={`relative ${feature.width} h-12 [font-family:'Poppins',Helvetica] font-normal text-white text-base text-center tracking-[0.80px] leading-[normal]`}
                >
                  <span className="font-bold tracking-[0.13px]">
                    {feature.title}
                    <br />
                  </span>

                  <span className="tracking-[0.13px]">
                    {feature.description}
                    {index === 0 && <br />}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gap-5 p-10 self-stretch w-full flex-[0_0_auto] bg-[#f2b721] flex flex-col items-center relative rounded-[40px]">
        <div className="inline-flex flex-col h-[185px] items-center gap-5 relative ml-[-26.00px] mr-[-26.00px]">
          <div className="relative w-[270px] h-[147px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#05213c] text-[150px] text-center tracking-[0] leading-[195.0px] whitespace-nowrap">
            27+
          </div>

          <div className="relative w-[372px] h-[23px] mb-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px] whitespace-nowrap">
            Ani de experiență
          </div>
        </div>

        <div className="relative w-[200px] h-[30px]" />

        {statistics.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col h-[140px] items-center justify-center gap-2.5 p-10 relative self-stretch w-full rounded-[40px] border-2 border-dashed border-[#05213c]"
          >
            <div className="relative w-[270px] h-[55px] mt-[-18.00px] ml-[-15.00px] mr-[-15.00px] [font-family:'Poppins',Helvetica] font-bold text-[#05213c] text-[56px] text-center tracking-[0] leading-[72.8px] whitespace-nowrap">
              {stat.number}
            </div>

            <div className="relative w-[372px] h-[27px] mb-[-14.00px] ml-[-66.00px] mr-[-66.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px] whitespace-nowrap">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
