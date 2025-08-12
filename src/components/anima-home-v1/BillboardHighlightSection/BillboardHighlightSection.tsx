import React, { useState } from "react";

export const BillboardHighlightSection = (): React.JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    serviceType: "Instaltie gaze",
    projectDescription: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceTypes = [
    "Instaltie gaze",
    "Centrale termice",
    "Reparatii gaze",
    "Mentenanta",
  ];

  const contactInfo = [
    {
      icon: "/assets/anima-home-v1/check-10.svg",
      label: "Telefon Principal",
      value: "0xxx-xxx-xxx",
      href: "tel:+40XXXXXXXXX",
      type: "phone",
    },
    {
      icon: "/assets/anima-home-v1/check-10.svg",
      label: "Email",
      value: "Contact@conest-gaze-centrale.ro",
      href: "mailto:contact@conest-gaze-centrale.ro",
      type: "email",
    },
  ];

  const additionalContactInfo = [
    {
      icon: "/assets/anima-home-v1/check-10.svg",
      label: "Urgențe 24/7",
      value: "0xxx-xxx-xxx",
      href: "tel:+40XXXXXXXXX",
      type: "phone",
    },
    {
      icon: "/assets/anima-home-v1/check-10.svg",
      label: "Adresa",
      value: "Strada [placeholder],\nconstanța, România",
      href: null,
      type: "address",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleServiceTypeSelect = (serviceType: string) => {
    handleInputChange("serviceType", serviceType);
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="absolute w-[1926px] h-[983px] top-[10783px] left-[-3px] bg-[#05213c]">
      <form
        onSubmit={handleSubmit}
        className="w-[580px] h-[800px] justify-center gap-5 pt-20 pb-[60px] px-10 absolute top-[92px] left-[1090px] bg-white flex flex-col items-center rounded-[40px] border border-solid border-[#05213c]"
      >
        <h2 className="relative w-[390px] h-20 mt-[-16.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-[38px] text-center tracking-[0] leading-[49.4px]">
          Solicitare Ofertă
        </h2>

        <div className="relative w-[502px] h-[95px] mr-[-2.00px]">
          <label className="absolute w-[500px] top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-[#05213c] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
            Nume Complet *
          </label>
          <div className="h-[60px] flex flex-col w-[500px] items-center justify-center px-5 py-10 absolute top-[35px] left-0 rounded-[10px] border border-solid border-[#05213c80]">
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Numele dvs. complet"
              required
              className="relative w-[460px] h-[59px] mt-[-40.50px] mb-[-38.50px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0] leading-[20.8px] placeholder:text-[#05213c80] bg-transparent border-none outline-none"
            />
          </div>
        </div>

        <div className="relative w-[502px] h-[95px] mr-[-2.00px]">
          <label className="absolute w-[500px] top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-[#05213c] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
            Telefon *
          </label>
          <div className="flex flex-col w-[500px] h-[60px] items-center justify-center pl-5 pr-10 py-10 absolute top-[35px] left-0 rounded-[10px] border border-solid border-[#05213c80]">
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="0xxx-xxx-xxx"
              required
              className="relative self-stretch h-[59px] mt-[-40.50px] mb-[-38.50px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0] leading-[20.8px] placeholder:text-[#05213c80] bg-transparent border-none outline-none"
            />
          </div>
        </div>

        <div className="relative w-[502px] h-[95px] mr-[-2.00px]">
          <label className="absolute w-[500px] top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-[#05213c] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
            Tipul Serviciului
          </label>
          <div className="flex flex-col w-[500px] h-[60px] items-center justify-center pl-5 pr-10 py-10 absolute top-[35px] left-0 rounded-[10px] border border-solid border-[#05213c80]">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex self-stretch w-full flex-[0_0_auto] mt-[-20.50px] mb-[-20.50px] items-start relative bg-transparent border-none outline-none cursor-pointer"
            >
              <span className="relative w-[131px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c80] text-base tracking-[0] leading-[20.8px]">
                {formData.serviceType}
              </span>
              <img
                className="relative w-[312px] h-[21px] mr-[-3.00px]"
                alt="Arrow down"
                src="/assets/anima-home-v1/arrow-down.svg"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-[60px] left-0 w-[500px] bg-white border border-solid border-[#05213c80] rounded-[10px] z-10 shadow-lg">
                {serviceTypes.map((service, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleServiceTypeSelect(service)}
                    className="w-full px-5 py-3 text-left [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0] leading-[20.8px] hover:bg-gray-50 bg-transparent border-none outline-none cursor-pointer"
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="relative w-[502px] h-[165px] mr-[-2.00px]">
          <label className="absolute w-[500px] top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-[#05213c] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
            Descrierea Proiectului
          </label>
          <div className="h-[130px] flex flex-col w-[500px] items-center justify-center px-5 py-10 absolute top-[35px] left-0 rounded-[10px] border border-solid border-[#05213c80]">
            <textarea
              value={formData.projectDescription}
              onChange={(e) =>
                handleInputChange("projectDescription", e.target.value)
              }
              placeholder="Descrieți pe scurt proiectul dvs ..."
              rows={4}
              className="relative self-stretch h-[89px] mt-[-20.50px] mb-[-18.50px] [font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-base tracking-[0] leading-[20.8px] placeholder:text-[#05213c80] bg-transparent border-none outline-none resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex items-end self-stretch w-full mb-[-15.00px] bg-[#f2b721] rounded-[10px] justify-center px-9 py-[18px] relative flex-[0_0_auto] overflow-hidden cursor-pointer hover:bg-[#e0a61d] transition-colors duration-200"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px] leading-[normal]">
            Trimite Solicitarea - Răspuns în 30 minute
          </span>
        </button>
      </form>

      <div className="top-[250px] left-[253px] inline-flex flex-col items-start gap-[61px] absolute">
        <div className="items-start gap-[34px] inline-flex flex-col relative flex-[0_0_auto]">
          <div className="items-start gap-5 inline-flex flex-col relative flex-[0_0_auto]">
            <h1 className="relative w-[741px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[56px] tracking-[0] leading-[72.8px]">
              Contactați-ne acum
            </h1>

            <p className="relative w-[703px] [font-family:'Poppins',Helvetica] font-normal text-white text-[38px] tracking-[0] leading-[49.4px]">
              Obțineți o ofertă personalizată pentru proiectul dvs. Răspundem în
              maximum 30 de minute.
            </p>
          </div>

          <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
            <div className="relative w-[712px] h-12">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center gap-2.5 absolute top-0 ${index === 0 ? "left-0" : "left-[360px]"}`}
                >
                  <img
                    className="relative w-[19px] h-[19px] aspect-[1]"
                    alt="Check"
                    src={contact.icon}
                  />

                  <p
                    className={`relative ${index === 0 ? "w-[218px]" : "w-fit"} ${index === 0 ? "h-12" : ""} mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0.80px] leading-[normal]`}
                  >
                    <span className="tracking-[0.13px]">
                      {contact.label}
                      <br />
                    </span>

                    {contact.href ? (
                      <a
                        href={contact.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="font-bold tracking-[0.13px] underline">
                          {contact.value}
                        </span>
                      </a>
                    ) : (
                      <span className="font-bold tracking-[0.13px]">
                        {contact.value}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative w-[584px] h-[72px]">
              {additionalContactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center gap-2.5 absolute top-0 ${index === 0 ? "left-0" : "left-[360px]"}`}
                >
                  <img
                    className="relative w-[19px] h-[19px] aspect-[1]"
                    alt="Check"
                    src={contact.icon}
                  />

                  <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0.80px] leading-[normal]">
                    <span className="tracking-[0.13px]">
                      {contact.label}
                      <br />
                    </span>

                    {contact.href ? (
                      <a
                        href={contact.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="font-bold tracking-[0.13px] underline">
                          {contact.value}
                        </span>
                      </a>
                    ) : (
                      <span className="font-bold tracking-[0.13px]">
                        {contact.type === "address" ? (
                          <>
                            Strada [placeholder],
                            <br />
                            constanța, România
                          </>
                        ) : (
                          contact.value
                        )}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
