"use client";

import React from "react";

export const FigmaServicesNew = () => {
  const services = [
    {
      icon: "/assets/anima-home-v1/flame-big-10.svg",
      title: "Instalații gaze naturale",
      description: "Proiectare și execuție instalații gaze naturale conforme ANRE. Branșamente, conducte de distribuție și aparate consumatoare cu garanție completă.",
      buttonText: "Detalii Instalații Gaze"
    },
    {
      icon: "/assets/anima-home-v1/streamline-travel-hotel-air-conditioner-heating-ac-air-hvac-cool.svg",
      title: "Centrale termice & încălzire",
      description: "Montaj și autorizare centrale termice cu tiraj forțat sau natural. Service autorizat ISCIR pentru toate mărcile de centrale.",
      buttonText: "Servicii Centrale"
    },
    {
      icon: "/assets/anima-home-v1/check-10.svg",
      title: "Revizii și verificări ANRE",
      description: "Verificări tehnice periodice obligatorii la 2 ani. Revizii complete și eliberare certificate de conformitate.",
      buttonText: "Programează Revizie"
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1420px] mx-auto px-[250px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-10 mb-20">
          <div className="w-[172px] h-[60px] px-[13px] py-2.5 border border-[#05213C]/20 rounded-[10px] flex justify-center items-center">
            <span className="text-[#313131] text-[18px] font-medium font-['Poppins'] tracking-[1.8px]">
              ANRE și ISCIR
            </span>
          </div>
          
          <div className="flex flex-col items-center gap-7">
            <h2 className="w-[1290px] text-center text-[#313131] text-[64px] font-semibold font-['Poppins'] leading-[83.2px]">
              Soluții complete pentru instalații <br/>gaze și centrale termice
            </h2>
            <p className="w-[1180px] text-center text-[#5A5A5A] text-[30px] font-normal font-['Poppins'] leading-[39px]">
              Cu o experiență de peste 27 de ani, oferim servicii complete autorizate ANRE și ISCIR pentru toate nevoile dvs. de încălzire și instalații gaze.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="flex justify-center gap-5 pt-1 pb-1">
          {services.map((service, index) => (
            <div key={index} className="w-[460px] h-[500px] p-10 bg-white rounded-[40px] border border-[#05213C] flex flex-col justify-center items-center gap-10">
              <div className="w-[100px] h-[100px] bg-[#05213C]/10 rounded-[20px] flex justify-center items-center overflow-hidden">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-[51px] h-[68px] object-contain"
                />
              </div>
              
              <div className="h-[150px] flex flex-col justify-center items-center gap-5">
                <h3 className="text-[#05213C] text-[26px] font-semibold font-['Poppins'] leading-[33.8px]">
                  {service.title}
                </h3>
                <p className="w-[372px] h-[82px] text-center text-[#05213C] text-base font-normal font-['Poppins'] leading-[20.8px]">
                  {service.description}
                </p>
              </div>
              
              <button className="px-9 py-[18px] bg-[#05213C] rounded-[10px] hover:bg-[#0a3a63] transition-all">
                <span className="text-white text-base font-semibold font-['Poppins'] tracking-[1.28px]">
                  {service.buttonText} ➔
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};