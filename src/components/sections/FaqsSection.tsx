import React, { useState } from 'react';

export const FaqsSection = (): React.JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Cât costă o instalație de gaze naturale pentru apartament?',
      answer: 'Costul depinde de complexitatea instalației și de suprafața locuinței. Pentru un apartament standard (2-3 camere), prețul variază între 1.500-3.000 lei, incluzând proiectul, executia și autorizarea ANRE. Oferim consultație gratuită și deviz personalizat.'
    },
    {
      question: 'Este obligatorie verificarea centrală termice la 2 ani?',
      answer: 'Da, conform legislației în vigoare, centralele termice trebuie verificate la fiecare 2 ani de către personal autorizat ISCIR. Această verificare este obligatorie și se eliberează certificat de conformitate. Amenda pentru neverificare poate ajunge la 5.000 lei.'
    },
    {
      question: 'Oferiți garanție pentru lucrări?',
      answer: 'Da, oferim garanție de 2 ani pentru toate instalațiile realizate și 1 an pentru reparațiile efectuate. Garanția acoperă atât materialele folosite, cât și manopera. Avem asigurare de răspundere civilă pentru toate lucrările executate.'
    },
    {
      question: 'În cât timp se poate face o instalație de gaze?',
      answer: 'Pentru un apartament standard, executia durează 1-2 zile. Proiectul și autorizarea ANRE se obțin în 5-10 zile lucrătoare. Pentru case individuale, durata poate fi de 3-5 zile, în funcție de complexitate. Urgențele sunt tratate prioritar.'
    },
    {
      question: 'Faceți intervenții de urgență în weekend?',
      answer: 'Da, avem serviciu de urgență 24/7, inclusiv în weekend și sărbători. Pentru urgențe (scurgeri de gaze, centrale defecte fără încălzire), intervenim în 30-60 minute. Tarifele de urgență se aplică în afara programului normal.'
    },
    {
      question: 'Ce documente sunt necesare pentru instalația de gaze?',
      answer: 'Sunt necesare: cartea funciară, autorizația de construire (pentru case), acordul asociației (pentru apartamente), buletinul proprietarului și certificatul energetic. Noi ne ocupăm de obținerea tuturor avizelor și autorizațiilor necesare.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Întrebări frecvente
          </h2>
          <p className="text-lg text-text-secondary">
            Răspunsuri la cele mai comune întrebări despre instalații gaze și centrale termice
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-5 bg-white">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Nu ai găsit răspunsul la întrebarea ta?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+40741234567" className="btn-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Sună acum
              </a>
              <a href="mailto:contact@conest-gaze.ro" className="btn-outline">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
                </svg>
                Trimite email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};