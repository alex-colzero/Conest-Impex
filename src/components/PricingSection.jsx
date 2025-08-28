"use client";

import React from "react";

const gasPricing = [
  {
    title: "Apartament standard",
    subtitle: "1-2 camere",
    price: "1.200",
    originalPrice: "1.500",
    features: [
      "Branșament până la 15m",
      "Instalație interioară completă", 
      "Aparate până la 3 puncte",
      "Toate documentațiile",
      "Garanție 2 ani"
    ],
    popular: false
  },
  {
    title: "Apartament mare", 
    subtitle: "3-4 camere",
    price: "1.800",
    originalPrice: "2.200",
    features: [
      "Branșament până la 20m",
      "Instalație interioară completă",
      "Aparate până la 5 puncte",
      "Toate documentațiile",
      "Garanție 2 ani",
      "Consultanță personalizată"
    ],
    popular: true
  },
  {
    title: "Casă / vilă",
    subtitle: "Până la 200mp",
    price: "2.500",
    originalPrice: "3.000",
    features: [
      "Branșament până la 30m",
      "Instalație completă exterior/interior",
      "Aparate nelimitate",
      "Toate documentațiile și avizele", 
      "Garanție 2 ani",
      "Consultanță și proiectare",
      "Suport tehnic extins"
    ],
    popular: false
  }
];

const centralePricing = [
  {
    title: "Service de bază",
    subtitle: "Mentenanță preventivă",
    price: "150",
    originalPrice: "200",
    features: [
      "Curățare și verificare",
      "Controlul siguranței", 
      "Reglaje de bază",
      "Raport detaliat",
      "Garanție 6 luni la lucrare"
    ],
    popular: false
  },
  {
    title: "Centrală nouă + montaj",
    subtitle: "Soluția completă",
    price: "3.200", 
    originalPrice: "3.800",
    features: [
      "Centrală condensare premium",
      "Montaj profesional complet",
      "Punere în funcțiune",
      "Instruire utilizare",
      "Garanție 2-5 ani",
      "Service gratuit 1 an"
    ],
    popular: true
  },
  {
    title: "Service complet",
    subtitle: "Reparație + piese",
    price: "280",
    originalPrice: "350", 
    features: [
      "Diagnosticare completă",
      "Reparații toate tipurile",
      "Piese originale",
      "Test funcționare",
      "Garanție 1 an la lucrare",
      "Support tehnic"
    ],
    popular: false
  }
];

const reviziiPricing = [
  {
    title: "Revizie standard",
    subtitle: "Apartament până la 3 camere",
    price: "180", 
    originalPrice: "220",
    features: [
      "Verificare completă sistem",
      "Controlul tuturor aparatelor",
      "Certificat de conformitate",
      "Raport detaliat",
      "Recomandări tehnice"
    ],
    popular: false
  },
  {
    title: "Revizie casă",
    subtitle: "Proprietăți individuale",
    price: "250",
    originalPrice: "300",
    features: [
      "Verificare sistem complex",
      "Control aparate multiple",
      "Verificare instalații exterioare", 
      "Certificat de conformitate",
      "Raport detaliat",
      "Consultanță optimizare"
    ],
    popular: true
  },
  {
    title: "Revizie urgentă",
    subtitle: "În 24-48 ore",
    price: "220",
    originalPrice: "280",
    features: [
      "Programare prioritară",
      "Verificare rapidă",
      "Certificat express",
      "Disponibilitate weekend",
      "Raport imediat"
    ],
    popular: false
  }
];

const sigurantaPricing = [
  {
    title: "Pachet basic",
    subtitle: "Protecție esențială", 
    price: "890",
    originalPrice: "1.100",
    features: [
      "1 senzor gaze",
      "1 electrovalvă automată",
      "Centrală de alarmă",
      "Montaj și configurare",
      "Garanție 2 ani"
    ],
    popular: false
  },
  {
    title: "Pachet standard",
    subtitle: "Protecție completă",
    price: "1.290",
    originalPrice: "1.500", 
    features: [
      "2 senzori gaze",
      "1 electrovalvă automată", 
      "Centrală de alarmă",
      "Ventilator evacuare",
      "Montaj și configurare",
      "Garanție 2 ani"
    ],
    popular: true
  },
  {
    title: "Pachet premium",
    subtitle: "Siguranță maximă",
    price: "1.690",
    originalPrice: "2.000",
    features: [
      "3 senzori gaze",
      "1 electrovalvă automată",
      "Centrală de alarmă avansată", 
      "Ventilator evacuare",
      "Alertă mobilă SMS/apel",
      "UPS backup",
      "Garanție 2 ani"
    ],
    popular: false
  }
];

export const PricingSection = ({ 
  type = "gas",
  title = "Prețuri Transparente",
  subtitle = "Fără costuri ascunse, cu toate serviciile incluse"
}) => {
  const getPricingData = () => {
    switch(type) {
      case 'gas':
        return gasPricing;
      case 'centrale':
        return centralePricing;
      case 'revizii':
        return reviziiPricing;
      case 'siguranta':
        return sigurantaPricing;
      default:
        return gasPricing;
    }
  };

  const pricing = getPricingData();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg ${
                plan.popular ? 'ring-2 ring-[#f2b721] transform scale-105' : ''
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#f2b721] text-[#05213c] px-4 py-2 rounded-full text-sm font-semibold">
                    Cel mai popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-[#05213c] mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-[#f2b721]">
                        {plan.price}
                      </span>
                      <span className="text-gray-600">lei</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-gray-400 line-through text-lg">
                        {plan.originalPrice} lei
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#f2b721] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              Informații Importante despre Prețuri
            </h3>
            <div className="text-blue-700 text-left space-y-2">
              <p>• Toate prețurile includ TVA și sunt valabile pentru anul 2025</p>
              <p>• Consultarea și devizul sunt gratuite, fără obligații</p>
              <p>• Prețurile pot varia în funcție de specificul fiecărui proiect</p>
              <p>• Oferim reduceri speciale pentru pensionari și familii numeroase</p>
              <p>• Plata poate fi făcută în rate, fără dobânzi</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#05213c] text-white rounded-lg font-semibold hover:bg-[#0a2a4a] transition-colors"
            >
              <span>Sună acum: 0722.619.097</span>
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro?subject=Cerere%20Deviz%20Personalizat%20Constanța&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20trimiteți%20un%20deviz%20personalizat%20pentru%20serviciile%20dumneavoastră%20în%20zona%20Constanța.%0D%0A%0D%0ADetalii%20proiect:%0D%0A-%20Tip%20proprietate:%0D%0A-%20Serviciul%20necesar:%0D%0A-%20Locația:%0D%0A-%20Telefon%20contact:%0D%0A%0D%0AMulțumesc!"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#05213c] text-[#05213c] rounded-lg font-semibold hover:bg-[#05213c] hover:text-white transition-colors"
            >
              <span>Trimite email pentru deviz</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};