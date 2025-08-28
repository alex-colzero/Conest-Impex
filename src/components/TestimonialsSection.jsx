"use client";

import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Maria Popescu",
    location: "Constanța, Mamaia",
    service: "Instalație gaze naturale",
    rating: 5,
    text: "Serviciu impecabil! Echipa CON EST a instalat gazele naturale la casa noastră în doar 3 zile. Foarte profesioniști, cu toate certificările în regulă. Recomand cu încredere!",
    date: "Ianuarie 2025"
  },
  {
    id: 2,
    name: "Ion Marinescu",
    location: "Constanța, Centrul Vechi",
    service: "Centrală termică nouă",
    rating: 5,
    text: "Am schimbat centrala termică veche cu una condensare. Diferența e enormă! Consumul s-a redus cu 40%. Montajul a fost rapid și curat, cu explicații pentru utilizare.",
    date: "Decembrie 2024"
  },
  {
    id: 3,
    name: "Elena Georgescu",
    location: "Năvodari",
    service: "Revizie ANRE",
    rating: 5,
    text: "Programare rapidă pentru revizie ANRE. Au venit exact când au promis, au verificat totul și au completat toate documentele. Prețuri corecte, fără surprize neplăcute.",
    date: "Noiembrie 2024"
  },
  {
    id: 4,
    name: "Andrei Dumitru",
    location: "Constanța, Km 5",
    service: "Service urgent centrală",
    rating: 5,
    text: "Centrala s-a defectat în plină iarnă. Au răspuns la telefon imediat și au venit în 2 ore. Au reparat totul profesional și au dat garanție la lucrare. Mulțumesc!",
    date: "Februarie 2025"
  },
  {
    id: 5,
    name: "Mihai Constantinescu",
    location: "Medgidia",
    service: "Instalații complete",
    rating: 5,
    text: "Pentru casa nouă am apelat la CON EST pentru toate instalațiile de gaze. De la proiect la punerea în funcțiune, totul a fost perfect organizat. Echipă de încredere!",
    date: "Octombrie 2024"
  },
  {
    id: 6,
    name: "Carmen Ionescu",
    location: "Mangalia",
    service: "Modernizare sistem",
    rating: 5,
    text: "Am modernizat instalația de gaze cu termostate inteligente. Acum pot controla încălzirea de la distanță și am economisit 30% la facturi. Investiție excelentă!",
    date: "Ianuarie 2025"
  }
];

export const TestimonialsSection = ({ title = "Ce Spun Clienții Noștri", maxItems = 6 }) => {
  const displayedTestimonials = testimonials.slice(0, maxItems);

  return (
    <section className="py-16 bg-gradient-to-br from-[#f5f4f1] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peste 3400 de clienți mulțumiți în ultimii 27 de ani. Încrederea lor este cea mai mare recompensă.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#f2b721] text-xl">★</span>
                ))}
                <span className="ml-2 text-gray-500 text-sm">({testimonial.rating}/5)</span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-[#05213c] mb-1">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{testimonial.location}</p>
                    <p className="text-[#f2b721] text-sm font-medium">{testimonial.service}</p>
                  </div>
                  <span className="text-gray-400 text-xs">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f2b721] mb-2">3400+</div>
              <div className="text-gray-600">Proiecte finalizate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f2b721] mb-2">27</div>
              <div className="text-gray-600">Ani experiență</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f2b721] mb-2">4.9</div>
              <div className="text-gray-600">Rating mediu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f2b721] mb-2">100%</div>
              <div className="text-gray-600">Conformitate ANRE</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-[#05213c] to-[#0a3a5c] rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-2">Vreti să vă alăturați clienților noștri mulțumiți?</h3>
            <p className="mb-4">Contactați-ne pentru o consultare gratuită și o ofertă personalizată!</p>
            <a 
              href="tel:0722619097"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f2b721] text-[#05213c] rounded-lg font-semibold hover:bg-[#e0a61d] transition-colors"
            >
              <span>Sună Acum: 0722.619.097</span>
              <span>📞</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};