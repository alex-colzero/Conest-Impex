import React from "react";

export const BillboardSection = (): React.JSX.Element => {
  const certifications = [
    {
      id: 1,
      text: "Autorizat Anre",
      icon: "/assets/anima-home-v1/check-10.svg",
    },
    {
      id: 2,
      text: "Certificat Iscir",
      icon: "/assets/anima-home-v1/check-10.svg",
    },
    {
      id: 3,
      text: "Garanție 2 Ani",
      icon: "/assets/anima-home-v1/check-10.svg",
    },
  ];

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[766px] bg-[url(/assets/anima-home-v1/left.svg)] bg-cover bg-center px-4 md:px-8 lg:px-[250px] py-8 md:py-16">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[61px] relative pt-8 lg:pt-[314px]">
          <header className="items-start gap-[34px] inline-flex flex-col relative flex-[0_0_auto]">
            <div className="items-start gap-5 inline-flex flex-col relative flex-[0_0_auto]">
              <h1 className="relative w-full max-w-3xl mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-3xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight md:leading-[72.8px]">
                Instalații gaze și centrale
                <br />
                termice constanța
              </h1>

              <p className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-white text-3xl tracking-[3.00px] leading-[normal]">
                Autorizați ANRE &amp; ISCIR din 1996
              </p>
            </div>

            <ul
              className="items-start gap-10 inline-flex relative flex-[0_0_auto]"
              role="list"
            >
              {certifications.map((cert) => (
                <li
                  key={cert.id}
                  className="items-center gap-2.5 inline-flex relative flex-[0_0_auto]"
                >
                  <img
                    className="relative w-[19px] h-[19px] aspect-[1]"
                    alt=""
                    src={cert.icon}
                    role="presentation"
                  />
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0.80px] leading-[normal]">
                    {cert.text}
                  </span>
                </li>
              ))}
            </ul>
          </header>

          <div className="inline-flex items-start gap-10 relative flex-[0_0_auto]">
            <button
              className="all-[unset] box-border inline-flex items-center gap-2.5 rounded-[10px] border border-solid border-[#f2b721] justify-center px-9 py-[18px] relative flex-[0_0_auto] overflow-hidden hover:bg-[#f2b721] hover:text-[#05213c] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#f2b721] focus:ring-offset-2"
              type="button"
              aria-label="Solicită o ofertă personalizată"
            >
              <div className="relative w-6 h-6 overflow-hidden">
                <div className="h-[25px]">
                  <div className="relative w-6 h-[25px]">
                    <img
                      className="absolute w-6 h-6 top-0 left-0"
                      alt=""
                      src="/assets/anima-home-v1/icon@2x.png"
                      role="presentation"
                    />
                  </div>
                </div>
              </div>
              <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#f2b721] text-base text-center tracking-[1.28px] leading-[normal]">
                Cere Ofertă
              </span>
            </button>

            <button
              className="all-[unset] box-border inline-flex items-center gap-2.5 bg-[#f2b721] rounded-[10px] justify-center px-9 py-[18px] relative flex-[0_0_auto] overflow-hidden hover:bg-[#e6a61e] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#f2b721] focus:ring-offset-2"
              type="button"
              aria-label="Sună acum la numărul de telefon 0758 XXX XXX"
            >
              <div className="relative w-[23.98px] h-[23.99px] bg-[url(/assets/anima-home-v1/phoneicon.svg)] bg-[100%_100%]" />
              <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px] leading-[normal]">
                0758 XXX XXX
              </span>
            </button>
          </div>
        </div>

        <img
          className="absolute w-[1262px] h-[1411px] top-0 left-[408px] aspect-[1] object-cover"
          alt="Mockup cu instalații de gaze și centrale termice"
          src="/assets/anima-home-v1/gazelle-next-mockup.png"
        />
      </div>
    </section>
  );
};
