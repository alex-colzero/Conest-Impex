import React from "react";

export const BillboardHighlightWrapperSection = (): JSX.Element => {
  const statisticsData = [
    {
      value: "3400+",
      label: "Proiecte Realizate",
    },
    {
      value: "24/7",
      label: "Service Urgențe",
    },
    {
      value: "100%",
      label: "Conformitate ANRE / ISCIR",
    },
  ];

  const featuresData = [
    [
      {
        title: "Autorizații complete",
        description: "ANRE și ISCIR (RVT și RSL)",
      },
      {
        title: "Experiență vastă",
        description: "Peste 27 de ani pe piață",
      },
    ],
    [
      {
        title: "Siguranță garantată",
        description: "Standarde europene",
      },
      {
        title: "Reduceri speciale",
        description: "-25% pensionari",
      },
    ],
  ];

  return (
    <section className="absolute w-[1926px] h-[983px] top-[4900px] left-0 bg-[#05213c]">
      <aside className="w-[580px] h-[800px] gap-5 p-10 absolute top-[92px] left-[1090px] bg-[#f2b721] flex flex-col items-center rounded-[40px] border border-solid border-[#05213c]">
        <div className="inline-flex h-[185px] items-center gap-5 flex-col relative">
          <div className="relative w-[270px] h-[147px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#05213c] text-[150px] text-center tracking-[0] leading-[195.0px] whitespace-nowrap">
            27+
          </div>

          <div className="relative w-[372px] h-[23px] mb-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px] whitespace-nowrap">
            Ani de experiență
          </div>
        </div>

        <div className="relative w-[200px] h-[30px]" />

        {statisticsData.map((stat, index) => (
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
        ))}
      </aside>

      <main className="top-[214px] left-[250px] inline-flex flex-col items-start gap-[61px] absolute">
        <div className="items-start gap-[34px] inline-flex flex-col relative flex-[0_0_auto]">
          <header className="items-start gap-5 inline-flex flex-col relative flex-[0_0_auto]">
            <h1 className="relative w-[741px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[56px] tracking-[0] leading-[72.8px]">
              Experți în instalații
              <br />
              gaze din 1996
            </h1>

            <p className="relative w-[700px] h-[220px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[1.60px] leading-[normal]">
              SC CON EST IMPEX SRL este o companie cu tradiție în domeniul
              instalațiilor de gaze naturale și centrale termice, activând din
              1996 în Constanța și regiunea Dobrogea.
              <br />
              <br />
              Suntem autorizați ANRE pentru instalații gaze și certificați ISCIR
              (RVT și RSL) pentru centrale termice, garantând conformitatea
              completă cu reglementările naționale și europene.
            </p>
          </header>

          <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
            {featuresData.map((featureRow, rowIndex) => (
              <div
                key={rowIndex}
                className={`relative ${rowIndex === 0 ? "w-[599px]" : "w-[548px]"} h-12`}
              >
                {featureRow.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`inline-flex items-center gap-2.5 absolute top-0 ${featureIndex === 0 ? "left-0" : "left-[360px]"}`}
                  >
                    <img
                      className="relative w-[19px] h-[19px] aspect-[1]"
                      alt="Check"
                      src="/assets/anima-home-v1/check-10.svg"
                    />

                    <p
                      className={`relative ${rowIndex === 0 && featureIndex === 0 ? "w-[218px]" : "w-fit"} ${rowIndex === 0 && featureIndex === 0 ? "h-12" : ""} mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0.80px] leading-[normal]`}
                    >
                      <span className="font-bold tracking-[0.13px]">
                        {feature.title}
                        <br />
                      </span>

                      <span className="tracking-[0.13px]">
                        {feature.description}
                        {rowIndex === 0 && featureIndex === 0 && <br />}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};
