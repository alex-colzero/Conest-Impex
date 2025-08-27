"use client";

import React, { useState } from "react";

export const TopBarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const menuItems = [
    { label: "Servicii", href: "#servicii" },
    { label: "Despre Noi", href: "#despre-noi" },
  ];

  const contactInfo = {
    phone: {
      number: "+40722619097",
      display: "0722 619 097",
    },
    whatsapp: {
      url: "https://wa.me/40722619097",
      label: "WhatsApp",
    },
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  if (!isMenuOpen) {
    return null;
  }

  return (
    <nav
      className="flex flex-col max-w-[1920px] w-[440px] h-[499px] items-center p-5 absolute top-0 left-0 bg-white"
      role="navigation"
      aria-label="Mobile menu"
    >
      <header className="flex flex-col h-[60px] items-start justify-center gap-2.5 relative self-stretch w-full">
        <div className="flex h-[58px] items-center gap-2.5 relative self-stretch w-full">
          <div className="flex flex-col h-[58px] items-start justify-center gap-2.5 relative flex-1 grow">
            <div className="relative w-[196px] h-9">
              <div className="bg-[url(/img/wordmark-8.svg)] relative h-[35px] left-px bg-[100%_100%]">
                <img
                  className="absolute w-[35px] h-[35px] top-0 left-[37px]"
                  alt="Company logo"
                  src="/img/vector-101.svg"
                />
              </div>
            </div>
          </div>

          <button
            className="relative w-[18.51px] h-[18.65px] cursor-pointer"
            onClick={handleMenuClose}
            aria-label="Close menu"
            type="button"
          >
            <img
              className="w-full h-full"
              alt="Close menu"
              src="/img/menu-close.svg"
            />
          </button>
        </div>
      </header>

      <main className="flex flex-col items-start justify-center gap-5 px-0 py-[60px] relative self-stretch w-full flex-[0_0_auto]">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`${index === 0 ? "mt-[-1.00px]" : ""} w-fit font-medium text-[#05213c] text-[22px] tracking-[0] relative [font-family:'Poppins',Helvetica] leading-[normal] hover:text-[#f2b721] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#f2b721] focus:ring-offset-2 rounded`}
          >
            {item.label}
          </a>
        ))}
      </main>

      <section
        className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]"
        aria-label="Contact information"
      >
        <div className="flex w-[400px] h-[60px] items-center justify-center gap-2.5 px-9 py-[18px] relative bg-[#f2b721] rounded-[20px] overflow-hidden">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px] leading-[normal]">
            COMENZI
          </span>

          <img
            className="relative w-[23.75px] h-[23.79px]"
            alt="Phone icon"
            src="/img/phoneicon-4.svg"
          />

          <a
            className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px] leading-[normal] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[#05213c] focus:ring-offset-2 rounded transition-all duration-200"
            href={`tel:${contactInfo.phone.number}`}
            aria-label={`Call ${contactInfo.phone.display}`}
          >
            {contactInfo.phone.display}
          </a>
        </div>

        <div className="relative w-[400px] h-[60px] rounded-[20.17px] bg-[linear-gradient(0deg,rgba(37,211,102,1)_0%,rgba(37,211,102,1)_100%)]">
          <div className="inline-flex items-center justify-center gap-[7.56px] px-0 py-[0.5px] relative top-[13px] left-[121px]">
            <img
              className="relative w-[31.26px] h-[31.51px] aspect-[0.99]"
              alt="WhatsApp logo"
              src="/img/vector-76.svg"
            />

            <img
              className="absolute w-3.5 h-[13px] top-2.5 left-[9px] aspect-[1.03]"
              alt=""
              src="/img/vector-77.svg"
              aria-hidden="true"
            />

            <a
              className="relative w-fit mt-[-0.18px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[22.2px] text-center tracking-[0] leading-[normal] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500 rounded transition-all duration-200"
              href={contactInfo.whatsapp.url}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`Contact us on ${contactInfo.whatsapp.label}`}
            >
              {contactInfo.whatsapp.label}
            </a>

            <a
              className="absolute w-[198px] h-[71px] top-[-18px] -left-5 [font-family:'Poppins',Helvetica] font-semibold text-transparent text-[34.3px] text-center tracking-[0] leading-[normal]"
              href={contactInfo.whatsapp.url}
              rel="noopener noreferrer"
              target="_blank"
              aria-hidden="true"
              tabIndex="-1"
            >
              {contactInfo.whatsapp.label}
            </a>
          </div>
        </div>
      </section>
    </nav>
  );
};
