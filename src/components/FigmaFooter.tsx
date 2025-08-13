"use client";

import React from "react";

export const FigmaFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Instalații gaze naturale", href: "#" },
      { label: "Centrale termice", href: "#" },
      { label: "Service și reparații", href: "#" },
      { label: "Revizii tehnice", href: "#" },
      { label: "Urgențe 24/7", href: "#" }
    ],
    company: [
      { label: "Despre noi", href: "#" },
      { label: "Echipa noastră", href: "#" },
      { label: "Certificări", href: "#" },
      { label: "Portofoliu", href: "#" },
      { label: "Recenzii clienți", href: "#" }
    ],
    legal: [
      { label: "Termeni și condiții", href: "#" },
      { label: "Politica de confidențialitate", href: "#" },
      { label: "GDPR", href: "#" },
      { label: "Cookie-uri", href: "#" },
      { label: "ANPC", href: "#" }
    ]
  };

  return (
    <footer className="bg-[#05213C] text-white">
      <div className="container mx-auto px-4 lg:px-16 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#F2B721] rounded-lg flex items-center justify-center">
                <span className="text-[#05213C] font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold font-['Poppins']">CONEST</span>
            </div>
            <p className="text-gray-400 font-['Poppins'] mb-6">
              Experți în instalații gaze și centrale termice din 1996. Autorizați ANRE & ISCIR.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F2B721] transition-colors group">
                <svg className="w-5 h-5 text-white group-hover:text-[#05213C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F2B721] transition-colors group">
                <svg className="w-5 h-5 text-white group-hover:text-[#05213C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F2B721] transition-colors group">
                <svg className="w-5 h-5 text-white group-hover:text-[#05213C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold font-['Poppins'] mb-6">Servicii</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#F2B721] transition-colors font-['Poppins']"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold font-['Poppins'] mb-6">Companie</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#F2B721] transition-colors font-['Poppins']"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold font-['Poppins'] mb-6">Contact Rapid</h3>
            <div className="space-y-4">
              <a 
                href="tel:0758XXXXXX"
                className="flex items-center gap-3 text-gray-400 hover:text-[#F2B721] transition-colors font-['Poppins']"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0758 XXX XXX
              </a>
              <a 
                href="mailto:contact@conest.ro"
                className="flex items-center gap-3 text-gray-400 hover:text-[#F2B721] transition-colors font-['Poppins']"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@conest.ro
              </a>
              <div className="flex items-start gap-3 text-gray-400 font-['Poppins']">
                <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Str. Industrială Nr. 5<br />
                  Constanța, România
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-['Poppins'] text-center md:text-left">
              © {currentYear} CONEST SRL. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#F2B721] transition-colors font-['Poppins'] text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-50">
            <div className="text-gray-500 text-sm font-['Poppins']">
              Autorizat ANRE: ET-0XXX/2023
            </div>
            <div className="text-gray-500 text-sm font-['Poppins']">
              Certificat ISCIR: RSVTI-XXXX
            </div>
            <div className="text-gray-500 text-sm font-['Poppins']">
              CUI: RO12345678
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};