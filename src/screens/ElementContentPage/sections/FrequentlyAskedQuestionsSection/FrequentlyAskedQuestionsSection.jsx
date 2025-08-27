"use client";

import React, { useState } from "react";

export const FrequentlyAskedQuestionsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question:
        "De ce este importantă întreținerea regulată a sistemului de încălzire?",
      answer:
        "Întreținerea regulată a sistemului de încălzire este esențială pentru a menține funcționarea eficientă a echipamentului și pentru a-i prelungi durata de viață. Aceasta ajută la prevenirea defectelor, asigură performanțe optime, îmbunătățește eficiența energetică și menține calitatea aerului din interior.",
      isOpen: true,
    },
    {
      question:
        "Care sunt semnele că sistemul meu de încălzire are nevoie de reparații?",
      answer: "",
      isOpen: false,
    },
    {
      question:
        "Cum pot îmbunătăți eficiența energetică a sistemului meu de încălzire?",
      answer: "",
      isOpen: false,
    },
    {
      question: "Pot instala singur un sistem de încălzire?",
      answer: "",
      isOpen: false,
    },
    {
      question: "Care este durata medie de viață a unui sistem de încălzire?",
      answer: "",
      isOpen: false,
    },
    {
      question:
        "Cum pot îmbunătăți calitatea aerului din interiorul casei mele?",
      answer: "",
      isOpen: false,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="flex flex-col items-center gap-10 px-[60px] py-[200px] relative self-stretch w-full flex-[0_0_auto] rounded-[40px]">
      <div className="w-[275px] flex h-[60px] items-center justify-center gap-2.5 px-[13px] py-2.5 relative rounded-[10px] overflow-hidden border border-solid border-[#05213c33]">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-lg tracking-[1.80px] leading-[normal]">
          Întrebări frecvente
        </div>
      </div>

      <div className="flex flex-col items-center gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-[1419px] mt-[-1.00px] ml-[-49.50px] mr-[-49.50px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] text-center tracking-[0] leading-[83.2px]">
          Avem Răspunsuri
        </h2>
      </div>

      <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] rounded-[40px]">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`flex flex-col items-start ${index === 0 ? "gap-2.5 p-[26px]" : "p-[26px]"} relative self-stretch w-full flex-[0_0_auto] ${index === 0 ? "border" : "bg-[#05213b0d] border"} border-solid border-[#c1c1c1]`}
          >
            <button
              className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] cursor-pointer"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {index === 5 ? (
                <img
                  className="grow h-[23.61px] relative flex-1"
                  alt="Cum pot îmbunătăți calitatea aerului din interiorul casei mele?"
                  src="/img/cum-pot-mbun-t-i-calitatea-aerului-din-interiorul-casei-mele.png"
                />
              ) : (
                <p className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[22px] tracking-[0] leading-[28.6px]">
                  {faq.question}
                </p>
              )}

              <div className="relative w-[22px] h-[22px]">
                <img
                  className="absolute w-3.5 h-[9px] top-1.5 left-1"
                  alt={openIndex === index ? "Collapse" : "Expand"}
                  src={
                    index === 0 && openIndex === 0
                      ? "/img/vector-24.svg"
                      : "/img/vector-29.svg"
                  }
                />
              </div>
            </button>

            {openIndex === index && faq.answer && (
              <div id={`faq-answer-${index}`} className="relative self-stretch">
                <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[28.8px]">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
