import React from "react";

export const ImportantServicesSection = (): JSX.Element => {
  return (
    <section className="inline-flex flex-col h-[2101px] items-start absolute top-0 left-[73px]">
      <div className="relative w-[1920px] h-[1158px]">
        <div className="relative h-[1244px] top-[-121px]">
          <img
            className="absolute w-[1920px] h-[1241px] top-0 left-0"
            alt="Background image showing emergency services"
            src="https://c.animaapp.com/c2XfX1Kz/img/mask-group.png"
          />

          <div className="absolute w-[1589px] h-[1244px] top-0 left-[331px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.78)_100%)]">
            <article className="w-[576px] h-[632px] justify-center gap-10 p-10 relative top-[305px] left-[763px] bg-white flex flex-col items-center rounded-[40px] border border-solid border-[#05213c]">
              <div
                className="w-[100px] h-[100px] bg-white rounded-[20px] aspect-[1] flex flex-col items-center justify-center relative overflow-hidden border border-solid border-[#05213c]"
                role="img"
                aria-label="Emergency services icon"
              >
                <img
                  className="relative w-[50px] h-[54px] aspect-[1]"
                  alt="Emergency flame icon"
                  src="https://c.animaapp.com/c2XfX1Kz/img/flame-big-10.svg"
                />
              </div>

              <header className="inline-flex h-[150px] items-center justify-center gap-5 flex-col relative">
                <h2 className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[26px] tracking-[0] leading-[33.8px] whitespace-nowrap">
                  Intervenții Urgente 24/7
                </h2>

                <p className="relative w-[372px] h-[82px] [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base text-center tracking-[0] leading-[20.8px]">
                  Service non-stop pentru urgențe gaze și centrale termice. Timp
                  de răspuns sub 2 ore în Constanța și împrejurimi.
                </p>
              </header>

              <button
                className="all-[unset] box-border inline-flex items-end bg-[#f2b721] rounded-[10px] justify-center px-9 py-[18px] relative flex-[0_0_auto] overflow-hidden hover:bg-[#e0a61e] focus:outline-2 focus:outline-[#05213c] focus:outline-offset-2 transition-colors duration-200"
                type="button"
                aria-label="Contactează serviciul de urgențe non-stop"
              >
                <span className="text-[#05213c] relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-base text-center tracking-[1.28px] leading-[normal]">
                  Urgențe Non-Stop ➔
                </span>
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
