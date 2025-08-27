"use client";

import React from "react";
import Link from "next/link";

export const NavigationBarSection = () => {
  const navigationItems = [
    { label: "Servicii", href: "#servicii" },
    { label: "Despre Noi", href: "#despre-noi" },
  ];

  return (
    <nav
      className="flex max-w-[1920px] items-center justify-center px-[50px] py-[30px] relative w-full flex-[0_0_auto]"
      role="navigation"
      aria-label="Main navigation"
    >
      <Link
        className="flex flex-col items-start gap-2.5 relative flex-1 grow"
        href="/"
        aria-label="Go to homepage"
      >
        <div className="relative w-[196px] h-9">
          <div className="bg-[url(/img/wordmark-8.svg)] relative h-[35px] left-px bg-[100%_100%]">
            <img
              className="absolute w-[35px] h-[35px] top-0 left-[37px]"
              alt="Company logo"
              src="/img/vector-101.svg"
            />
          </div>
        </div>
      </Link>

      <div className="inline-flex items-center gap-[55px] relative flex-[0_0_auto]">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-[22px] tracking-[0] leading-[normal] hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[#f2b721] focus:ring-offset-2 rounded-sm"
          >
            {item.label}
          </a>
        ))}

        <a
          href="tel:0722619097"
          className="inline-flex items-center justify-center gap-2.5 px-9 py-[18px] relative flex-[0_0_auto] bg-[#f2b721] rounded-[20px] overflow-hidden hover:bg-[#e0a61d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#05213c] focus:ring-offset-2"
          aria-label="Call us at 0722 619 097"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px] leading-[normal]">
            COMENZI
          </span>

          <img
            className="relative w-[23.75px] h-[23.79px]"
            alt="Phone icon"
            src="/img/phoneicon-7.svg"
          />

          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px] leading-[normal]">
            0722 619 097
          </span>
        </a>
      </div>
    </nav>
  );
};
