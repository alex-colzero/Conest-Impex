"use client";

import React from "react";

export const FigmaFooterNew = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="w-full px-[250px] pt-[29px] pb-[363px] bg-white">
        <div className="w-[1420px] h-[363px] relative">
          {/* Contact & Legal */}
          <div className="h-[366px] left-[1080px] top-[29px] absolute flex flex-col gap-5">
            <h3 className="text-[#313131] text-[22px] font-semibold font-['Poppins'] capitalize leading-[28.6px]">
              Contact & Legal
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 relative overflow-hidden">
                  <div className="w-[14.58px] h-[17.92px] left-[2.71px] top-[1.04px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#05213C] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Constanța, România
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 relative overflow-hidden">
                  <div className="w-[17.92px] h-[14.58px] left-[1.04px] top-[2.71px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#313131] text-base font-medium font-['Poppins'] tracking-[0.32px]">
                  contact@conest-gaze-centrale.ro
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 relative overflow-hidden">
                  <div className="w-[16.25px] h-[16.25px] left-[1.88px] top-[1.87px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#313131] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  0xxx-xxx-xxx
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 relative overflow-hidden">
                  <div className="w-[16.25px] h-[16.25px] left-[1.88px] top-[1.87px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#313131] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Urgențe: 0xxx-xxx-xxx
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 relative overflow-hidden">
                  <div className="w-[17.92px] h-[17.92px] left-[1.04px] top-[1.04px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#313131] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  24/7
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#05213C] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Politica de Confidențialitate
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#05213C] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Termeni și Condiții
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#05213C] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Certificări ANRE & ISCIR
                </span>
              </div>
            </div>
          </div>

          {/* Zone Deservite */}
          <div className="h-[315px] left-[720px] top-[29px] absolute flex flex-col gap-5">
            <h3 className="text-[#313131] text-[22px] font-semibold font-['Poppins'] capitalize leading-[28.6px]">
              Zone Deservite
            </h3>
            <div className="w-[293px] flex flex-col gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="flex-1 text-[#313131] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Constanța și Mamaia
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="flex-1 text-[#313131] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Năvodari și Medgidia
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="flex-1 text-[#313131] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Mangalia și Eforie
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="flex-1 text-[#313131] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Lucrări Naționale
                </span>
              </div>
            </div>
          </div>

          {/* Servicii */}
          <div className="h-[315px] left-[360px] top-[29px] absolute flex flex-col gap-5">
            <h3 className="text-[#05213C] text-[22px] font-semibold font-['Poppins'] capitalize leading-[28.6px]">
              Servicii
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#05213C] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Instalații Gaze Naturale
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#05213C] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Centrale Termice
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#05213C] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Urgențe 24/7
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#05213C] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Revizii și Verificări
                </span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-[18px] h-[18px] relative overflow-hidden">
                  <div className="w-[14.62px] h-[14.62px] left-[1.69px] top-[1.69px] absolute bg-[#F2B821]" />
                </div>
                <span className="text-[#05213C] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Senzori și Electrovalve
                </span>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="h-[224px] left-0 top-[29px] absolute flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="w-[219px] h-11 bg-[#05213C]" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1.5">
                <p className="w-[340px] text-[#05213C] text-base font-medium font-['Poppins'] capitalize tracking-[0.32px]">
                  Instalații Gaze & Centrale Termice<br/>
                  Est. 1996 | Autorizat ANRE & ISCIR<br/>
                  Constanța, România
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-[634px] px-[250px] py-[30px] bg-[#F2F2F2] flex justify-center items-center">
        <div className="w-[1420px] h-[574px] text-center text-[#5A5A5A] text-base font-normal font-['Poppins'] leading-[28.8px]">
          © {currentYear} CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații Gaze & Centrale Termice Constanța din 1996<br/>
          Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform standardelor europene
        </div>
      </div>
    </footer>
  );
};