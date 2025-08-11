import React from "react";

export const ContentWrapperSection = (): JSX.Element => {
  const services = [
    {
      id: 1,
      icon: "https://c.animaapp.com/c2XfX1Kz/img/flame-big-6.svg",
      title: "Senzori gaze și electrovalve",
      description:
        "Montaj detectoare gaze naturale cu electrovalvă automată. Siguranță completă pentru familia dvs.",
      buttonText: "Sisteme Siguranță ➔",
    },
    {
      id: 2,
      icon: "https://c.animaapp.com/c2XfX1Kz/img/flame-big-6.svg",
      title: "Modernizare și Smart-Home",
      description:
        "Modernizarea instalațiilor existente și integrarea cu sisteme smart home. Eficiență energetică maximă.",
      buttonText: "Modernizare ➔",
    },
  ];

  return (
    <section className="flex flex-col w-[2065px] h-[978px] items-center justify-center gap-[100px] absolute top-[1123px] left-0">
      <header className="items-center justify-center gap-7 inline-flex flex-col relative flex-[0_0_auto]">
        <div className="flex flex-col w-[1420px] items-center justify-center gap-5 relative flex-[0_0_auto]">
          <div className="flex w-[1420px] items-center justify-center gap-[18px] flex-[0_0_auto] flex-col relative">
            <h1 className="relative w-[1290px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#303030] text-[64px] text-center tracking-[0] leading-[83.2px]">
              Siguranță și eficiență pentru casa ta
            </h1>
          </div>

          <p className="relative w-[1372px] [font-family:'Poppins',Helvetica] font-normal text-[#5a5a5a] text-[38px] text-center tracking-[0] leading-[49.4px]">
            Integram cele mai noi tehnologii pentru a vă transforma locuința
            într-un spațiu mai sigur și mai eficient energetic, cu sisteme smart
            home și protecție automată împotriva gazelor.
          </p>
        </div>
      </header>

      <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
        {services.map((service) => (
          <article
            key={service.id}
            className="w-[700px] h-[305px] justify-center gap-10 p-10 relative bg-white flex flex-col items-center rounded-[40px] border border-solid border-[#05213c]"
          >
            <div className="inline-flex h-[181px] justify-center gap-10 items-start relative">
              <div className="flex flex-col w-[100px] h-[100px] items-center justify-center relative bg-[#05213c1a] rounded-[20px] overflow-hidden aspect-[1]">
                <img
                  className="relative w-[50px] h-[54px] aspect-[1]"
                  alt="Service icon"
                  src={service.icon}
                />
              </div>

              <div className="flex w-[436px] h-[98px] items-start gap-5 flex-col relative">
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[26px] tracking-[0] leading-[33.8px] whitespace-nowrap">
                  {service.title}
                </h2>

                <p className="relative self-stretch h-[46px] mb-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base tracking-[0] leading-[20.8px]">
                  {service.description}
                </p>

                <button
                  className="all-[unset] box-border inline-flex items-end mb-[-82.00px] bg-[#05213c] rounded-[10px] justify-center px-9 py-[18px] relative flex-[0_0_auto] overflow-hidden hover:bg-[#041a2e] focus:outline-2 focus:outline-offset-2 focus:outline-[#05213c] transition-colors duration-200"
                  type="button"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span className="font-semibold text-white text-base text-center tracking-[1.28px] leading-[normal] relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica]">
                    {service.buttonText}
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
