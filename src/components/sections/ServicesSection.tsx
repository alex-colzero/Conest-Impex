import React from 'react';
import ServiceCard from '../ui/ServiceCard';

export const ServicesSection = (): React.JSX.Element => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Instalații gaze naturale',
      description: 'Proiectare și execuție instalații gaze naturale conforme ANRE. Branșamente, conducte de distribuție și aparate consumatoare cu garanție completă.',
      link: '/instalatii-gaze-naturale',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Centrale termice',
      description: 'Montaj și autorizare centrale termice cu tiraj forțat sau natural. Service autorizat ISCIR pentru toate mărcile de centrale.',
      link: '/centrale-termice',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Revizii și verificări',
      description: 'Verificări tehnice periodice obligatorii la 2 ani. Revizii complete și eliberare certificate de conformitate.',
      link: '/revizii-si-verificari',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Servicii profesionale pentru casa ta
          </h2>
          <p className="text-lg text-text-secondary">
            Oferim soluții complete pentru instalații gaze și centrale termice, de la proiectare până la mentenanță.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};