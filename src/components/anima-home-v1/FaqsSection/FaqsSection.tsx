import React, { useState } from "react";

export const FaqsSection = (): JSX.Element => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqData = [
    {
      question: "De ce este importantă întreținerea regulată a Conest?",
      answer:
        "Întreținerea regulată a sistemului CONEST este esențială pentru a menține funcționarea eficientă a echipamentului și pentru a-i prelungi durata de viață. Aceasta ajută la prevenirea defectelor, asigură performanțe optime, îmbunătățește eficiența energetică și menține calitatea aerului din interior.",
    },
    {
      question:
        "Care sunt semnele că sistemul meu Conest are nevoie de reparații?",
      answer: "",
    },
    {
      question:
        "Cum pot îmbunătăți eficiența energetică a sistemului meu Conest?",
      answer: "",
    },
    {
      question: "Pot instala singur un sistem Conest?",
      answer: "",
    },
    {
      question: "Care este durata medie de viață a unui sistem Conest?",
      answer: "",
    },
    {
      question:
        "Cum pot îmbunătăți calitatea aerului din interiorul casei mele?",
      answer: "",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="flex flex-col w-[1420px] items-center gap-10 absolute top-[11916px] left-[250px] rounded-[40px]">
      <header className="w-[275px] flex h-[60px] items-center justify-center gap-2.5 px-[13px] py-2.5 relative rounded-[10px] overflow-hidden border border-solid border-[#05213c33]">
        <h3 className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-lg tracking-[1.80px] leading-[normal]">
          Întrebări frecvente
        </h3>
      </header>

      <div className="inline-flex items-start gap-[18px] flex-[0_0_auto] flex-col relative">
        <h2 className="relative w-[1419px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] text-center tracking-[0] leading-[83.2px]">
          Avem Răspunsuri
        </h2>
      </div>

      <div
        className="flex-col items-start rounded-[40px] flex relative self-stretch w-full flex-[0_0_auto]"
        role="list"
      >
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] ${index > 0 ? "-mt-px" : ""} border border-solid border-[#c1c1c1] ${openFaq === index ? "" : "bg-[#05213b0d]"}`}
            role="listitem"
          >
            <button
              className="flex items-center justify-between p-[26px] relative self-stretch w-full flex-[0_0_auto] cursor-pointer hover:bg-[#05213b1a] transition-colors duration-200"
              onClick={() => toggleFaq(index)}
              aria-expanded={openFaq === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h4 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[22px] tracking-[0] leading-[28.6px] whitespace-nowrap">
                {faq.question}
              </h4>

              <img
                className={`relative w-[22px] h-[22px] transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}
                alt={openFaq === index ? "Collapse answer" : "Expand answer"}
                src="/assets/anima-home-v1/ion-caret-down.svg"
              />
            </button>

            {openFaq === index && faq.answer && (
              <div
                id={`faq-answer-${index}`}
                className="px-[26px] pb-[26px] relative self-stretch w-full"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p className="relative w-[1310px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-base tracking-[0] leading-[28.8px]">
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
