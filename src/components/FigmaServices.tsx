"use client";

import React from "react";

export const FigmaServices = () => {
  const services = [
    {
      icon: "🔥",
      title: "Instalații gaze naturale",
      description: "Proiectare și execuție instalații gaze naturale conforme ANRE. Branșamente și conducte de distribuție.",
      features: ["Proiectare autorizată", "Execuție certificată", "Avize și autorizări"]
    },
    {
      icon: "🏠",
      title: "Centrale termice",
      description: "Montaj și autorizare centrale termice. Service autorizat ISCIR pentru toate mărcile.",
      features: ["Montaj profesional", "Service autorizat", "Garanție extinsă"]
    },
    {
      icon: "✅",
      title: "Revizii și verificări",
      description: "Verificări tehnice periodice obligatorii la 2 ani. Certificate de conformitate.",
      features: ["Verificări ISCIR", "Certificate valabile", "Rapoarte detaliate"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-[#05213C] mb-4">
            Servicii profesionale pentru casa ta
          </h2>
          <p className="text-xl text-gray-600 font-['Poppins']">
            Soluții complete pentru instalații gaze și centrale termice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              
              <h3 className="text-2xl font-bold font-['Poppins'] text-[#05213C] mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 font-['Poppins'] mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#F2B721] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#05213C]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-['Poppins']">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 border-2 border-[#F2B721] text-[#F2B721] rounded-lg hover:bg-[#F2B721] hover:text-[#05213C] transition-all font-['Poppins'] font-semibold">
                Află mai multe →
              </button>
            </div>
          ))}
        </div>

        {/* Brand Logos Section */}
        <div className="mt-20 text-center">
          <p className="text-xl text-[#05213C] font-['Poppins'] mb-8">
            Montaj și service autorizat pentru brandurile de top din domeniu
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {["Vaillant", "Ariston", "Viessmann", "Ferroli", "Baxi", "Immergas"].map((brand) => (
              <div key={brand} className="text-2xl font-bold text-gray-400">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};