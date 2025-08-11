import React from "react";

interface ServiceArea {
  name: string;
  description: string;
}

interface ServiceCard {
  title: string;
  image: string;
  areas: ServiceArea[];
}

export const ServicesWrapperSection = (): JSX.Element => {
  const serviceCards: ServiceCard[] = [
    {
      title: "Constanța - Acoperire Primară",
      image:
        "https://c.animaapp.com/c2XfX1Kz/img/modern-autonomous-heating-system-boiler-room@2x.png",
      areas: [
        { name: "Mamaia", description: "Proprietăți premium" },
        { name: "Centrul Vechi", description: "Modernizări" },
        { name: "Km 4-5", description: "Zone rezidențiale" },
        { name: "Tomis", description: "Apartamente noi" },
      ],
    },
    {
      title: "Regiunea Dobrogea",
      image:
        "https://c.animaapp.com/c2XfX1Kz/img/modern-autonomous-heating-system-boiler-room-1@2x.png",
      areas: [
        { name: "Năvodari", description: "Case și vilet" },
        { name: "Medgidia", description: "Service centrale" },
        { name: "Mangalia", description: "Instalații sezonale" },
        { name: "Eforie", description: "Hoteluri" },
      ],
    },
    {
      title: "Proiecte Naționale",
      image:
        "https://c.animaapp.com/c2XfX1Kz/img/modern-autonomous-heating-system-boiler-room-2@2x.png",
      areas: [
        { name: "București", description: "Proiecte mari" },
        { name: "Cluj-Napoca", description: "Dezvoltatori" },
        { name: "Iași", description: "Modernizări" },
        { name: "Alte județe", description: "La cerere" },
      ],
    },
  ];

  return (
    <section className="inline-flex h-[501px] items-start justify-center gap-5 px-0 py-px absolute top-[6555px] left-[250px]">
      {serviceCards.map((card, index) => (
        <article
          key={index}
          className="w-[460px] h-[500px] gap-10 px-10 py-0 relative mb-[-1.00px] bg-white flex flex-col items-center rounded-[40px] border border-solid border-[#05213c]"
        >
          <header className="w-[460px] h-[212px] ml-[-40.00px] mr-[-40.00px] bg-[#05213c1a] rounded-[40px_40px_0px_0px] flex flex-col items-center justify-center relative overflow-hidden border border-solid border-[#05213c]">
            <img
              className="relative w-[460px] h-[212px] aspect-[1.5] object-cover"
              alt={`Modern autonomous heating system for ${card.title}`}
              src={card.image}
            />
          </header>

          <div className="inline-flex h-[219px] items-start gap-10 ml-[-15.00px] mr-[-15.00px] flex-col relative">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[26px] tracking-[0] leading-[33.8px] whitespace-nowrap">
              {card.title}
            </h2>

            <div className="inline-flex items-start gap-5 relative flex-[0_0_auto] mb-[-20.00px]">
              <div className="relative w-[197px] h-[165px]">
                <div className="absolute w-[195px] top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base tracking-[0] leading-[20.8px]">
                  <div className="mb-4">
                    <span className="font-bold">{card.areas[0].name}</span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base tracking-[0] leading-[20.8px]">
                      {" "}
                      - {card.areas[0].description}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold">{card.areas[1].name}</span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base tracking-[0] leading-[20.8px]">
                      {" "}
                      - {card.areas[1].description}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative w-[197px] h-[165px] mr-[-2.00px]">
                <div className="absolute w-[195px] top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base tracking-[0] leading-[20.8px]">
                  <div className="mb-4">
                    <span className="font-bold">{card.areas[2].name}</span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base tracking-[0] leading-[20.8px]">
                      {" "}
                      - {card.areas[2].description}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold">{card.areas[3].name}</span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base tracking-[0] leading-[20.8px]">
                      {" "}
                      - {card.areas[3].description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
