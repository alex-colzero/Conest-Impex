"use client";

import React from "react";

export const FigmaAbout = () => {
  return (
    <section className="w-full bg-[#05213C] px-[250px] py-[91px]">
      <div className="flex justify-start items-center gap-[99px]">
        {/* Left Content */}
        <div className="flex flex-col gap-[61px]">
          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-col gap-5">
              <h2 className="w-[741px] text-white text-[56px] font-semibold font-['Poppins'] leading-[72.8px]">
                Experți în instalații<br/>gaze din 1996
              </h2>
              <p className="w-[700px] h-[220px] text-white text-base font-normal font-['Poppins'] tracking-[1.6px]">
                SC CON EST IMPEX SRL este o companie cu tradiție în domeniul instalațiilor de gaze naturale și centrale termice, activând din 1996 în Constanța și regiunea Dobrogea.<br/><br/>
                Suntem autorizați ANRE pentru instalații gaze și certificați ISCIR (RVT și RSL) pentru centrale termice, garantând conformitatea completă cu reglementările naționale și europene.
              </p>
            </div>
            
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-2.5">
                <div className="w-[19px] h-[19px] bg-[#F2B821]" />
                <div className="w-[218px] h-12">
                  <span className="text-white text-base font-bold font-['Poppins'] tracking-[0.8px]">Autorizații complete<br/></span>
                  <span className="text-white text-base font-normal font-['Poppins'] tracking-[0.8px]">ANRE și ISCIR (RVT și RSL)</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="w-[19px] h-[19px] bg-[#F2B821]" />
                <div>
                  <span className="text-white text-base font-bold font-['Poppins'] tracking-[0.8px]">Experiență vastă<br/></span>
                  <span className="text-white text-base font-normal font-['Poppins'] tracking-[0.8px]">Peste 27 de ani pe piață</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="w-[19px] h-[19px] bg-[#F2B821]" />
                <div>
                  <span className="text-white text-base font-bold font-['Poppins'] tracking-[0.8px]">Siguranță garantată<br/></span>
                  <span className="text-white text-base font-normal font-['Poppins'] tracking-[0.8px]">Standarde europene</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="w-[19px] h-[19px] bg-[#F2B821]" />
                <div>
                  <span className="text-white text-base font-bold font-['Poppins'] tracking-[0.8px]">Reduceri speciale<br/></span>
                  <span className="text-white text-base font-normal font-['Poppins'] tracking-[0.8px]">-25% pensionari</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Stats Card */}
        <div className="w-[580px] h-[800px] p-10 bg-[#F2B821] rounded-[40px] border border-[#05213C] flex flex-col gap-5">
          {/* Main Stat */}
          <div className="h-[185px] flex flex-col items-center gap-5">
            <div className="w-[270px] h-[147px] text-center text-[#05213C] text-[150px] font-bold font-['Poppins'] capitalize leading-[195px]">
              27+
            </div>
            <div className="w-[372px] h-[23px] text-center text-[#05213C] text-[26px] font-normal font-['Poppins'] leading-[33.8px]">
              Ani de experiență
            </div>
          </div>
          
          <div className="w-[200px] h-[30px]" />
          
          {/* Secondary Stats */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="h-[140px] p-10 rounded-[40px] border-2 border-[#05213C] flex flex-col justify-center items-center gap-2.5">
              <div className="w-[270px] h-[55px] text-center text-[#05213C] text-[56px] font-bold font-['Poppins'] capitalize leading-[72.8px]">
                3400+
              </div>
              <div className="w-[372px] h-[27px] text-center text-[#05213C] text-[26px] font-normal font-['Poppins'] leading-[33.8px]">
                Proiecte Realizate
              </div>
            </div>
            
            <div className="h-[140px] p-10 rounded-[40px] border-2 border-[#05213C] flex flex-col justify-center items-center gap-2.5">
              <div className="w-[270px] h-[55px] text-center text-[#05213C] text-[56px] font-bold font-['Poppins'] capitalize leading-[72.8px]">
                24/7
              </div>
              <div className="w-[372px] h-[23px] text-center text-[#05213C] text-base font-medium font-['Poppins'] leading-[20.8px]">
                Service Urgențe
              </div>
            </div>
            
            <div className="h-[140px] p-10 rounded-[40px] border-2 border-[#05213C] flex flex-col justify-center items-center gap-2.5">
              <div className="w-[270px] h-[55px] text-center text-[#05213C] text-[56px] font-bold font-['Poppins'] capitalize leading-[72.8px]">
                100%
              </div>
              <div className="w-[372px] h-[23px] text-center text-[#05213C] text-base font-medium font-['Poppins'] leading-[20.8px]">
                Conformitate ANRE / ISCIR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};