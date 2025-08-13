"use client";

import React, { useState } from "react";

export const FigmaFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Cât durează instalarea unei centrale termice?",
      answer: "Instalarea unei centrale termice durează în medie 4-6 ore, în funcție de complexitatea sistemului și de lucrările pregătitoare necesare. Includem în acest timp montajul, racordarea la gaze și apă, configurarea și testarea sistemului."
    },
    {
      question: "Ce documente sunt necesare pentru branșamentul la gaze?",
      answer: "Pentru branșamentul la gaze sunt necesare: certificatul de urbanism, autorizația de construire (dacă e cazul), actele de proprietate, proiectul tehnic realizat de un proiectant autorizat ANRE, și acordul vecinilor (în anumite situații). Vă ajutăm cu întregul proces de obținere a documentelor."
    },
    {
      question: "La ce interval se face revizia tehnică obligatorie?",
      answer: "Revizia tehnică obligatorie pentru instalațiile de gaze se face la fiecare 2 ani conform legislației în vigoare. Pentru centrale termice, recomandăm o verificare anuală pentru a menține eficiența optimă și a preveni defecțiunile."
    },
    {
      question: "Oferiți garanție pentru lucrările efectuate?",
      answer: "Da, oferim garanție 2 ani pentru toate lucrările de instalații efectuate și minimum 2 ani pentru echipamentele montate (în funcție de garanția producătorului). De asemenea, asigurăm service în perioada de garanție."
    },
    {
      question: "Interveniți în caz de urgență?",
      answer: "Da, avem serviciu de urgențe 24/7 pentru situații care necesită intervenție imediată. Timpul mediu de răspuns este de 30-60 minute în Constanța și zonele limitrofe. Sunați la 0758 XXX XXX pentru urgențe."
    },
    {
      question: "Care sunt costurile pentru o instalație de gaze?",
      answer: "Costurile variază în funcție de complexitatea lucrării, lungimea traseului, numărul de consumatori și materialele folosite. Oferim evaluare gratuită la fața locului și ofertă detaliată cu toate costurile transparente, fără taxe ascunse."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-[#05213c] mb-4">
              Întrebări frecvente
            </h2>
            <p className="text-xl text-gray-600 font-['Poppins']">
              Răspunsuri la cele mai comune întrebări ale clienților noștri
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg lg:text-xl font-semibold font-['Poppins'] text-[#05213C] pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[#F2B721] flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}>
                    <svg className="w-6 h-6 text-[#05213C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 font-['Poppins'] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 font-['Poppins'] mb-6">
              Nu ai găsit răspunsul căutat?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#F2B721] text-[#05213C] rounded-lg hover:bg-[#e6a61e] transition-all font-['Poppins'] font-bold">
                Contactează-ne direct
              </button>
              <button className="px-8 py-4 border-2 border-[#05213C] text-[#05213C] rounded-lg hover:bg-[#05213C] hover:text-white transition-all font-['Poppins'] font-bold">
                Vezi ghidul complet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};