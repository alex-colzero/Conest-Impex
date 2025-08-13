"use client";

import React, { useState } from "react";

export const FigmaWorks = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Toate" },
    { id: "gaze", label: "Instalații Gaze" },
    { id: "centrale", label: "Centrale Termice" },
    { id: "modernizari", label: "Modernizări" }
  ];

  const works = [
    {
      id: 1,
      category: "gaze",
      title: "Instalație gaze bloc ANL",
      location: "Constanța, Tomis Nord",
      image: "/api/placeholder/400/300",
      description: "Instalație completă pentru 20 apartamente"
    },
    {
      id: 2,
      category: "centrale",
      title: "Centrală Vaillant ecoTEC",
      location: "Constanța, Mamaia",
      image: "/api/placeholder/400/300",
      description: "Montaj centrală condensare 35kW"
    },
    {
      id: 3,
      category: "modernizari",
      title: "Modernizare sistem încălzire",
      location: "Constanța, Centru",
      image: "/api/placeholder/400/300",
      description: "Înlocuire completă sistem vechi"
    },
    {
      id: 4,
      category: "gaze",
      title: "Branșament gaze naturale",
      location: "Constanța, Palazu Mare",
      image: "/api/placeholder/400/300",
      description: "Branșament nou pentru vilă"
    },
    {
      id: 5,
      category: "centrale",
      title: "Service centrale Ariston",
      location: "Constanța, Tomis Plus",
      image: "/api/placeholder/400/300",
      description: "Revizie și reparații majore"
    },
    {
      id: 6,
      category: "modernizari",
      title: "Upgrade sistem smart",
      location: "Constanța, Mamaia Nord",
      image: "/api/placeholder/400/300",
      description: "Termostat inteligent și control WiFi"
    }
  ];

  const filteredWorks = activeCategory === "all" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-[#05213C] mb-4">
            Lucrările noastre recente
          </h2>
          <p className="text-xl text-gray-600 font-['Poppins']">
            Proiecte finalizate cu succes în Constanța și împrejurimi
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-['Poppins'] font-semibold transition-all ${
                activeCategory === category.id
                  ? "bg-[#F2B721] text-[#05213C]"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map(work => (
            <div 
              key={work.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 font-['Poppins']">Imagine lucrare</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-['Poppins'] text-sm">{work.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-['Poppins'] text-[#05213C] mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-600 font-['Poppins'] flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {work.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-[#05213C] text-white rounded-lg hover:bg-[#0a3a63] transition-all font-['Poppins'] font-bold">
            Vezi toate proiectele →
          </button>
        </div>
      </div>
    </section>
  );
};