"use client";

import React, { useState } from "react";

export const FigmaContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const services = [
    "Instalație gaze naturale",
    "Montaj centrală termică",
    "Service și reparații",
    "Revizie tehnică periodică",
    "Urgență",
    "Altele"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] text-[#05213c] mb-6">
              Solicită ofertă personalizată
            </h2>
            <p className="text-xl text-gray-600 font-['Poppins'] mb-12">
              Completează formularul și te contactăm în maximum 2 ore în timpul programului de lucru
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F2B721] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#05213c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Poppins'] text-[#05213C] mb-2">
                    Telefon
                  </h3>
                  <p className="text-gray-600 font-['Poppins']">
                    0758 XXX XXX - Urgențe 24/7<br />
                    0241 XXX XXX - Birou
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F2B721] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#05213c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Poppins'] text-[#05213C] mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 font-['Poppins']">
                    contact@conest.ro<br />
                    urgente@conest.ro
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F2B721] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#05213c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Poppins'] text-[#05213C] mb-2">
                    Adresă
                  </h3>
                  <p className="text-gray-600 font-['Poppins']">
                    Str. Industrială Nr. 5<br />
                    Constanța, România
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F2B721] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#05213c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Poppins'] text-[#05213C] mb-2">
                    Program
                  </h3>
                  <p className="text-gray-600 font-['Poppins']">
                    Luni - Vineri: 08:00 - 18:00<br />
                    Sâmbătă: 09:00 - 14:00<br />
                    Urgențe: Non-stop 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold font-['Poppins'] text-[#05213c] mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F2B721] focus:outline-none font-['Poppins']"
                    placeholder="Ion Popescu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold font-['Poppins'] text-[#05213c] mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F2B721] focus:outline-none font-['Poppins']"
                    placeholder="07XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold font-['Poppins'] text-[#05213c] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f2b721] focus:outline-none font-['Poppins']"
                  placeholder="email@exemplu.ro"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold font-['Poppins'] text-[#05213c] mb-2">
                  Serviciul dorit *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F2B721] focus:outline-none font-['Poppins'] bg-white"
                >
                  <option value="">Selectează serviciul</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold font-['Poppins'] text-[#05213c] mb-2">
                  Mesaj / Detalii suplimentare
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F2B721] focus:outline-none font-['Poppins'] resize-none"
                  placeholder="Descrie problema sau serviciul de care ai nevoie..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#F2B721] text-[#05213C] rounded-lg hover:bg-[#e6a61e] transition-all font-['Poppins'] font-bold text-lg"
              >
                Trimite solicitarea
              </button>

              <p className="text-sm text-gray-500 font-['Poppins'] text-center">
                * Câmpuri obligatorii. Datele tale sunt protejate conform GDPR.
              </p>
            </form>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="mt-16 bg-[#05213C] rounded-2xl p-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold font-['Poppins'] text-white mb-4">
            Ai o urgență? Sună-ne direct!
          </h3>
          <p className="text-lg text-gray-300 font-['Poppins'] mb-6">
            Pentru situații urgente, sunăm direct la numărul de urgențe 24/7
          </p>
          <a
            href="tel:0758XXXXXX"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#F2B721] text-[#05213C] rounded-lg hover:bg-[#e6a61e] transition-all font-['Poppins'] font-bold text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0758 XXX XXX - Urgențe
          </a>
        </div>
      </div>
    </section>
  );
};