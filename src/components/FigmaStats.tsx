"use client";

import React from "react";

export const FigmaStats = () => {
  const stats = [
    {
      number: "27+",
      label: "Ani experiență",
      description: "În domeniul instalațiilor"
    },
    {
      number: "5000+",
      label: "Clienți mulțumiți",
      description: "În Constanța și împrejurimi"
    },
    {
      number: "24/7",
      label: "Service urgențe",
      description: "Intervenții rapide"
    },
    {
      number: "100%",
      label: "Garanție lucrări",
      description: "Certificate și autorizate"
    }
  ];

  return (
    <section className="py-20 bg-[#05213C] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-white mb-4">
            Experți în instalații gaze din 1996
          </h2>
          <p className="text-xl text-gray-300 font-['Poppins']">
            Profesionalism și calitate garantate de experiența noastră
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl lg:text-7xl font-bold text-[#F2B721] mb-4 font-['Poppins']">
                {stat.number}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2 font-['Poppins']">
                {stat.label}
              </h3>
              <p className="text-gray-400 font-['Poppins']">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#F2B721] text-[#05213C] rounded-lg hover:bg-[#e6a61e] transition-all font-['Poppins'] font-bold text-lg">
              Vezi portofoliul nostru
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#05213C] transition-all font-['Poppins'] font-bold text-lg">
              Citește recenziile
            </button>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#F2B721] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};