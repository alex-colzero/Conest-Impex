import React from "react";

export const ServicesSection = (): React.JSX.Element => {
  const services = [
    {
      title: "Scăpări De Gaze",
      description: "Intervenție imediată",
      icon: "/assets/anima-home-v1/flame-big-10.svg",
    },
    {
      title: "Centrale Oprite",
      description: "Remediere rapidă",
      icon: "/assets/anima-home-v1/flame-big-10.svg",
    },
    {
      title: "Presiune Scăzută",
      description: "Diagnosticare sistem",
      icon: "/assets/anima-home-v1/flame-big-10.svg",
    },
    {
      title: "Detecție Probleme",
      description: "Verificări siguranță",
      icon: "/assets/anima-home-v1/flame-big-10.svg",
    },
    {
      title: "Remediere Avarii",
      description: "Piese originale",
      icon: "/assets/anima-home-v1/flame-big-10.svg",
    },
  ];

  return (
    <section className="flex flex-col w-[1920px] h-[1118px] items-center justify-center gap-[100px] absolute top-[9491px] left-0">
      <header className="items-center justify-center gap-7 mt-[-4.50px] inline-flex flex-col relative flex-[0_0_auto]">
        <div className="w-[184px] flex h-[60px] items-center justify-center gap-2.5 px-[13px] py-2.5 relative rounded-[10px] overflow-hidden border border-solid border-[#05213c33]">
          <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#303030] text-lg tracking-[1.80px] leading-[normal]">
            Anre &amp; Iscir
          </div>
        </div>

        <div className="flex w-[1420px] items-center justify-center gap-[18px] flex-[0_0_auto] flex-col relative">
          <h1 className="w-[1181px] font-semibold text-[#303030] text-[64px] text-center tracking-[0] leading-[83.2px] relative mt-[-1.00px] [font-family:'Poppins',Helvetica]">
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] tracking-[0] leading-[83.2px]">
              Urgențe gaze și centrale termice{" "}
            </span>

            <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] tracking-[0] leading-[83.2px]">
              INTERVENȚII RAPIDE
            </span>

            <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] tracking-[0] leading-[83.2px]">
              {" "}
              24/7
            </span>
          </h1>
        </div>

        <div className="flex flex-col w-[1420px] items-center justify-center gap-5 relative flex-[0_0_auto]">
          <p className="relative w-[1175px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-[38px] text-center tracking-[0] leading-[49.4px]">
            Când aveți o urgență cu gazele sau centrala termică, fiecare minut
            contează. Echipa CON EST IMPEX SRL este disponibilă NON-STOP pentru
            intervenții urgente în Constanța.
          </p>
        </div>
      </header>

      <div
        className="inline-flex items-start gap-5 relative flex-[0_0_auto]"
        role="list"
      >
        {services.map((service, index) => (
          <article
            key={index}
            className="w-[222px] h-[250px] justify-center gap-10 relative bg-white flex flex-col items-center rounded-[40px] border border-solid border-[#05213c]"
            role="listitem"
          >
            <div className="inline-flex flex-col h-[250px] items-center justify-center gap-5 px-0 py-6 relative">
              <div className="flex flex-col w-[100px] h-[100px] items-center justify-center relative bg-[#05213c1a] rounded-[20px] overflow-hidden aspect-[1]">
                <img
                  className="relative w-[50px] h-[54px] aspect-[1]"
                  alt={`${service.title} icon`}
                  src={service.icon}
                />
              </div>

              <div className="flex flex-col w-[221px] h-[37px] items-center relative">
                <h3 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
                  {service.title}
                </h3>

                <p className="relative self-stretch h-[46px] mb-[-29.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base text-center tracking-[0] leading-[20.8px]">
                  {service.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="flex w-[1420px] items-center justify-center gap-[18px] flex-[0_0_auto] mb-[-4.50px] flex-col relative">
        <h2 className="w-[1181px] font-semibold text-[#303030] text-[64px] text-center tracking-[0] leading-[83.2px] relative mt-[-1.00px] [font-family:'Poppins',Helvetica]">
          URGENȚE 24/7: 0xxx-xxx-xxx
        </h2>

        <div className="flex flex-col w-[1420px] items-center justify-center gap-5 relative flex-[0_0_auto]">
          <p className="relative w-[1175px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-[38px] text-center tracking-[0] leading-[49.4px]">
            <a
              href="tel:+40XXXXXXXXX"
              rel="noopener noreferrer"
              target="_blank"
              className="[font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-[38px] tracking-[0] leading-[49.4px] hover:underline focus:underline"
            >
              Apelați Acum pentru Urgențe
              <br />
            </a>

            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-[38px] tracking-[0] leading-[49.4px]">
              Timp de răspuns garantat sub 2 ore în Constanța
              <br />
            </span>
          </p>
        </div>
      </footer>
    </section>
  );
};
