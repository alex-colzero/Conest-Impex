import React from 'react';

export const BillboardSection = (): React.JSX.Element => {
  return (
    <section className="section-padding bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room@2x.png')] bg-cover bg-center"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Specializați în instalații gaze și centrale termice
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-200">
            Peste 28 de ani de experiență în Constanța • Autorizat ANRE & ISCIR
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">1996</div>
              <p className="text-lg">Anul înființării</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">2000+</div>
              <p className="text-lg">Clienți mulțumiți</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-lg">Service urgențe</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Certificări și autorizații</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold">Autorizat ANRE</h4>
                  <p className="text-gray-200">Pentru instalații gaze naturale</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold">Certificat ISCIR</h4>
                  <p className="text-gray-200">RVT și RSL pentru centrale termice</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+40741234567" className="btn-secondary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Sună pentru consultație
            </a>
            <a href="mailto:contact@conest-gaze.ro" className="btn-outline-white">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Trimite email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};