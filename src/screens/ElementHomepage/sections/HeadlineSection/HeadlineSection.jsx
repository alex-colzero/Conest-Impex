"use client";

import React from "react";

export const HeadlineSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 pt-[100px] pb-0 px-5 relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex flex-wrap h-[60px] items-center justify-center gap-[10px_10px] px-5 py-2.5 relative bg-white rounded-[10px] overflow-hidden border border-solid border-[#05213c66]">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-xl tracking-[0.80px] leading-[normal]">
          Aria operationala
        </div>
      </div>

      <h1 className="relative self-stretch [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-4xl text-center tracking-[0] leading-[46.8px]">
        Servicii complete în Constanța și la nivel național
      </h1>

      <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base text-center tracking-[0] leading-[20.8px]">
        Echipa CON EST deservește Constanța și regiunea Dobrogea cu intervenții
        rapide, precum și proiecte naționale de amploare.
      </p>
    </section>
  );
};
