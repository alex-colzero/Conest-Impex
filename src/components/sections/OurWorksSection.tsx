import React from 'react';
import Image from 'next/image';

export const OurWorksSection = (): React.JSX.Element => {
  const works = [
    {
      title: 'Instalație gaze naturale apartament',
      description: 'Instalație completă gaze naturale pentru apartament 3 camere, inclusiv branșament și certificare ANRE.',
      image: '/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room@2x.png',
      category: 'Instalații Gaze'
    },
    {
      title: 'Montaj centrală termică Vaillant',
      description: 'Montaj și autorizare centrală termică cu condensare Vaillant pentru casă individuală.',
      image: '/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room-1@2x.png',
      category: 'Centrale Termice'
    },
    {
      title: 'Modernizare instalație existentă',
      description: 'Modernizare sistem de încălzire cu montaj electrovalve și termostate programabile.',
      image: '/assets/anima-home-v1/modern-autonomous-heating-system-boiler-room-2@2x.png',
      category: 'Modernizări'
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Proiectele noastre recente
          </h2>
          <p className="text-lg text-text-secondary">
            Exemple de lucrări realizate pentru clienții noștri din Constanța și împrejurimi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 md:h-56">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {work.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {work.title}
                </h3>
                <p className="text-text-secondary">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            Vezi toate proiectele
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};