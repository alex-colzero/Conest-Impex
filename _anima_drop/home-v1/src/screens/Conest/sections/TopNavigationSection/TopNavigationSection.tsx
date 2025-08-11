import React from "react";

export const TopNavigationSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Servicii", href: "#servicii" },
    { label: "Despre Noi", href: "#despre-noi" },
    { label: "Zone Deservite", href: "#zone-deservite" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex flex-col w-[1920px] h-[155px] items-start gap-2.5 px-[250px] py-0 absolute top-0 left-0 bg-white">
      <nav
        className="flex w-[1420px] h-[155px] items-center justify-between relative"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="relative w-[220px] h-[93px]">
          <div className="inline-flex items-center justify-center gap-2.5 relative">
            <img
              className="relative w-[220px] h-[93px]"
              src="https://c.animaapp.com/c2XfX1Kz/img/frame-3488.svg"
              alt="Company Logo"
              width="220"
              height="93"
            />
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-20 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[73px] relative flex-[0_0_auto]">
            <ul className="gap-[30px] inline-flex items-center relative flex-[0_0_auto] list-none m-0 p-0">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className="gap-1.5 inline-flex items-center relative flex-[0_0_auto]"
                >
                  <a
                    href={item.href}
                    className="font-medium text-[#05213c] text-[22px] tracking-[0] leading-[normal] relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] hover:text-[#f2b721] transition-colors duration-200 no-underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="all-[unset] box-border inline-flex items-center justify-end gap-[19px] relative flex-[0_0_auto]">
                <a
                  href="tel:0758XXXXXX"
                  className="all-[unset] box-border inline-flex items-center gap-2.5 bg-[#f2b721] rounded-[20px] justify-center px-9 py-[18px] relative flex-[0_0_auto] overflow-hidden hover:bg-[#e0a61d] transition-colors duration-200 cursor-pointer"
                  aria-label="Call us at 0758 XXX XXX"
                >
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="https://c.animaapp.com/c2XfX1Kz/img/streamline-travel-hotel-air-conditioner-heating-ac-air-hvac-cool.svg"
                    width="24"
                    height="24"
                  />

                  <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px] leading-[normal]">
                    0758 XXX XXX
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
