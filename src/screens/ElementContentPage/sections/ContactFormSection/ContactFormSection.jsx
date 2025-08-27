"use client";

import React from "react";

export const ContactFormSection = () => {
  const contactInfo = [
    {
      label: "Telefon principal:",
      value: "0722-619-097",
      href: "tel:+40722619097",
      type: "phone",
    },
    {
      label: "Email:",
      value: "contact@conest-gaze-centrale.ro",
      href: "mailto:contact@conest-gaze-centrale.ro",
      type: "email",
    },
    {
      label: "Urgențe 24/7",
      value: "0744-579-715",
      href: "tel:+40744579715",
      type: "phone",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[60px] px-0 py-[200px] relative self-stretch w-full flex-[0_0_auto] bg-[#05213c]">
      <div className="flex flex-col items-center justify-center gap-10 p-[60px] relative self-stretch w-full flex-[0_0_auto]">
        <header className="flex flex-col items-center justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[56px] text-center tracking-[0] leading-[72.8px]">
            Contactați-ne acum
          </h1>

          <p className="relative w-[986px] [font-family:'Poppins',Helvetica] font-normal text-white text-[38px] text-center tracking-[0] leading-[49.4px]">
            Obțineți o ofertă personalizată pentru proiectul dvs. Răspundem în
            maximum 2 ore.
          </p>
        </header>

        <div className="inline-flex flex-col items-center justify-center gap-[60px] relative flex-[0_0_auto]">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]"
            >
              <address className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-xl text-center leading-[normal] not-italic">
                <span className="tracking-[0]">
                  {contact.label}
                  <br />
                </span>

                <a
                  href={contact.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-bold text-3xl tracking-[0.45px] underline hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#05213c]"
                  aria-label={`${contact.type === "phone" ? "Call" : "Email"} ${contact.value}`}
                >
                  <span className="font-bold text-3xl tracking-[0.45px] underline">
                    {contact.value}
                  </span>
                </a>
              </address>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
