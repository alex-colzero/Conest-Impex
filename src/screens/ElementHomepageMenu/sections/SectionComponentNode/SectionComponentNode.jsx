"use client";

import React from "react";

export const SectionComponentNode = () => {
  return (
    <section className="flex h-[913px] items-center justify-center gap-5 px-5 py-0 relative self-stretch w-full bg-[url(/img/service-box-3.png)] bg-cover bg-[50%_50%]">
      <div className="flex items-center justify-center gap-10 relative flex-1 grow shadow-[0px_4px_104px_#000000f2]">
        <article className="min-h-[500px] justify-center gap-10 p-10 flex-1 grow bg-white flex flex-col items-center relative rounded-[40px]">
          <header className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="w-[100px] h-[100px] px-0 py-[30px] rounded-[20px] border border-solid border-black aspect-[1] flex flex-col items-center justify-center relative overflow-hidden"
                role="img"
                aria-label="Emergency service icon"
              >
                <img
                  className="relative w-3.5 h-[58px] mt-[-9.00px] mb-[-9.00px] aspect-[0.24] object-cover"
                  alt="Emergency service icon"
                  src="/img/icon-18.png"
                />
              </div>

              <div className="flex flex-col items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-[26px] text-center tracking-[0] leading-[33.8px]">
                  Intervenții Urgente 24/7
                </h2>

                <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#05213c] text-base text-center tracking-[0] leading-[20.8px]">
                  Service non-stop pentru urgențe gaze și centrale termice. Timp
                  de răspuns rapid în Constanța și împrejurimi.
                </p>
              </div>
            </div>
          </header>

          <div className="flex items-center justify-end gap-2.5 self-stretch w-full flex-col relative flex-[0_0_auto]">
            <button
              className="all-[unset] box-border flex items-center gap-10 p-5 self-stretch w-full flex-[0_0_auto] bg-[#f2b721] justify-center relative rounded-[10px] overflow-hidden hover:bg-[#e0a61e] focus:bg-[#e0a61e] focus:outline-2 focus:outline-offset-2 focus:outline-[#f2b721] transition-colors duration-200"
              type="button"
              aria-label="Contact pentru urgențe non-stop"
            >
              <span className="relative w-[222px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px] leading-[normal]">
                Urgențe Non-Stop ➔
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
