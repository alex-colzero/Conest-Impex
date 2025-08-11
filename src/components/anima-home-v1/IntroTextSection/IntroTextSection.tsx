import React from "react";

export const IntroTextSection = (): JSX.Element => {
  return (
    <section className="absolute w-[1420px] h-[372px] top-[6083px] left-[250px] rounded-[40px]">
      <div className="flex flex-col w-[1420px] items-center justify-center gap-10 relative">
        <div className="w-[184px] flex h-[60px] items-center justify-center gap-2.5 px-[13px] py-2.5 relative rounded-[10px] overflow-hidden border border-solid border-[#05213c33]">
          <h3 className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-lg tracking-[1.80px] leading-[normal]">
            Anre &amp; Iscir
          </h3>
        </div>

        <div className="items-start gap-7 inline-flex flex-col relative flex-[0_0_auto]">
          <div className="flex w-[1420px] items-center justify-center gap-[18px] flex-[0_0_auto] flex-col relative">
            <h1 className="relative w-[1022px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] text-center tracking-[0] leading-[83.2px]">
              Servicii complete în Constanța și la nivel național
            </h1>
          </div>

          <div className="flex flex-col w-[1420px] items-center justify-center gap-5 relative flex-[0_0_auto]">
            <p className="relative w-[1180px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-3xl text-center tracking-[0] leading-[39.0px]">
              Echipa CON EST deservește Constanța și regiunea Dobrogea cu
              intervenții rapide, precum și proiecte naționale de amploare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
