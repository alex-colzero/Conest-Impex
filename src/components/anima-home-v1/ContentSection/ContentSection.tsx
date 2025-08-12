import React from "react";

export const ContentSection = (): React.JSX.Element => {
  const servicesData = [
    {
      id: 1,
      icon: "/assets/anima-home-v1/flame-big-10.svg",
      title: "Instalații gaze naturale",
      description:
        "Proiectare și execuție instalații gaze naturale conforme ANRE. Branșamente, conducte de distribuție și aparate consumatoare cu garanție completă.",
      buttonText: "Detalii Instalații Gaze ➔",
    },
    {
      id: 2,
      icon: "/assets/anima-home-v1/flame-big-10.svg",
      title: "Centrale termice & încălzire",
      description:
        "Montaj și autorizare centrale termice cu tiraj forțat sau natural. Service autorizat ISCIR pentru toate mărcile de centrale.",
      buttonText: "Servicii Centrale ➔",
    },
    {
      id: 3,
      icon: "/assets/anima-home-v1/flame-big-10.svg",
      title: "Revizii și verificări ANRE",
      description:
        "Verificări tehnice periodice obligatorii la 2 ani. Revizii complete și eliberare certificate de conformitate.",
      buttonText: "Programează Revizie ➔",
    },
  ];

  return (
    <section className="inline-flex h-[501px] items-start justify-center gap-5 px-0 py-px absolute top-[1958px] left-[250px]">
      {servicesData.map((service) => (
        <article
          key={service.id}
          className="flex flex-col w-[460px] h-[500px] items-center justify-center gap-10 p-10 relative mb-[-1.00px] bg-white rounded-[40px] border border-solid border-[#05213c]"
        >
          <div className="flex flex-col w-[100px] h-[100px] items-center justify-center relative bg-[#05213c1a] rounded-[20px] overflow-hidden aspect-[1]">
            <img
              className="relative w-[50px] h-[54px] aspect-[1]"
              alt="Service icon"
              src={service.icon}
            />
          </div>

          <div className="inline-flex h-[150px] items-center justify-center gap-5 flex-col relative">
            <h3 className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[26px] tracking-[0] leading-[33.8px] whitespace-nowrap">
              {service.title}
            </h3>

            <p className="relative w-[372px] h-[82px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base text-center tracking-[0] leading-[20.8px]">
              {service.description}
            </p>
          </div>

          <button
            className="all-[unset] box-border inline-flex items-end bg-[#05213c] rounded-[10px] justify-center px-9 py-[18px] relative flex-[0_0_auto] overflow-hidden hover:bg-[#0a2a4a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#05213c] focus:ring-offset-2"
            aria-label={`Learn more about ${service.title}`}
          >
            <span className="text-white relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-base text-center tracking-[1.28px] leading-[normal]">
              {service.buttonText}
            </span>
          </button>
        </article>
      ))}
    </section>
  );
};
