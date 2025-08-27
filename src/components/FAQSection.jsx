"use client";

import React, { useState } from "react";

const generalFAQs = [
  {
    id: 1,
    question: "Sunteți autorizați ANRE și ISCIR?",
    answer: "Da, compania CON EST IMPEX SRL este autorizată ANRE pentru instalații gaze naturale și certificată ISCIR (RVT și RSL) pentru centrale termice din 1996. Toate autorizațiile sunt valabile și actualizate conform legislației."
  },
  {
    id: 2,
    question: "Cât durează o instalație de gaze naturale?",
    answer: "Durata depinde de complexitatea proiectului. Pentru un apartament standard: 2-3 zile lucrătoare. Pentru o casă: 3-5 zile lucrătoare. Includem proiectarea, execuția și toate documentațiile necesare."
  },
  {
    id: 3,
    question: "Ce garanție oferiti pentru lucrări?",
    answer: "Oferim garanție de 2 ani pentru toate lucrările executate, inclusiv piese și manoperă. Pentru centrale termice noi, garanția producătorului este de 2-5 ani, în funcție de marca aleasă."
  },
  {
    id: 4,
    question: "Aveți service de urgență?",
    answer: "Da, avem service de urgență 24/7 pentru situații critice. Telefon urgențe: 0744-579-725. Timpul de răspuns în Constanța este de 1-2 ore, în funcție de trafic și condițiile meteo."
  },
  {
    id: 5,
    question: "Care sunt tarifele pentru servicii?",
    answer: "Tarifele variază în funcție de tipul serviciului. Oferim consultanță gratuită și deviz detaliat înainte de începerea lucrărilor. Nu percepem taxe ascunse - prețul convenit este prețul final."
  }
];

const gasFAQs = [
  {
    id: 1,
    question: "Ce documente sunt necesare pentru instalația de gaze?",
    answer: "Aveți nevoie de: copia actului de proprietate, planul locuinței, acordul vecinilor (pentru apartamente), avizul pompierilor pentru case. Noi vă ajutăm cu toate demersurile administrative."
  },
  {
    id: 2,
    question: "Cât costă branșamentul la rețeaua de gaze?",
    answer: "Costul variază între 1.500-3.000 lei pentru apartamente și 2.500-5.000 lei pentru case, în funcție de distanța până la rețeaua publică și complexitatea lucrărilor. Devizul este gratuit."
  },
  {
    id: 3,
    question: "Pot să fac singur instalația de gaze?",
    answer: "Nu, conform legislației, instalațiile de gaze pot fi executate doar de firme autorizate ANRE. Executarea neautorizată este ilegală și extrem de periculoasă pentru siguranța dumneavoastră și a vecinilor."
  }
];

const centraleFAQs = [
  {
    id: 1,
    question: "Ce tip de centrală recomandați?",
    answer: "Recomandăm centrale pe gaz condensare pentru eficiență maximă (95-108%). Pentru apartamente: 24-28 kW. Pentru case: 28-35 kW. Mărci recomandate: Vaillant, Bosch, Viessmann, în funcție de buget."
  },
  {
    id: 2,
    question: "Cât durează montajul unei centrale?",
    answer: "Montajul unei centrale termice durează 4-6 ore pentru înlocuire și 6-8 ore pentru instalare nouă (inclusiv conductele). Punerea în funcțiune și testele se fac în aceeași zi."
  },
  {
    id: 3,
    question: "Când trebuie făcută revizia centrala?",
    answer: "Revizia tehnică ISCIR este obligatorie anual pentru centrale cu puterea peste 65 kW și la 2 ani pentru cele sub 65 kW. Recomandăm mentenanță preventivă anuală pentru toate centralele."
  }
];

const reviziieFAQs = [
  {
    id: 1,
    question: "Ce se verifică la revizia ANRE?",
    answer: "Se verifică: starea conductelor, etanșeitatea sistemului, funcționarea aparatelor, ventilația spațiilor, respectarea normelor de siguranță și conformitatea cu proiectul inițial. Eliberăm certificat de conformitate."
  },
  {
    id: 2,
    question: "Cât durează o revizie ANRE?",
    answer: "O revizie standard durează 1-2 ore pentru apartament și 2-3 ore pentru casă. Dacă se găsesc neconformități minore, acestea pot fi remediate în aceeași zi. Certificatul se eliberează imediat."
  }
];

export const FAQSection = ({ 
  type = "general", 
  title = "Întrebări Frecvente",
  maxItems = 5 
}) => {
  const [openItems, setOpenItems] = useState(new Set());

  const getFAQData = () => {
    switch(type) {
      case 'gas':
        return gasFAQs;
      case 'centrale':
        return centraleFAQs;
      case 'revizii':
        return reviziieFAQs;
      default:
        return generalFAQs;
    }
  };

  const faqs = getFAQData().slice(0, maxItems);

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            Răspunsuri la cele mai frecvente întrebări despre serviciile noastre
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-[#05213c] pr-4">
                  {faq.question}
                </h3>
                <span className={`text-[#f2b721] text-2xl transition-transform duration-200 ${
                  openItems.has(faq.id) ? 'transform rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              
              {openItems.has(faq.id) && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-[#f2b721] to-[#e0a61d] rounded-xl">
          <h3 className="text-2xl font-bold text-[#05213c] mb-4">
            Nu ați găsit răspunsul la întrebarea dumneavoastră?
          </h3>
          <p className="text-[#05213c] mb-6">
            Sunați-ne acum pentru o consultare gratuită și răspunsuri personalizate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#05213c] text-white rounded-lg font-semibold hover:bg-[#0a2a4a] transition-colors"
            >
              <span>📞 Sună: 0722.619.097</span>
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#05213c] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>✉️ Email: contact@conest-gaze-centrale.ro</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};