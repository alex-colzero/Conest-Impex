import React from 'react';

export const IntroTextSection = (): React.JSX.Element => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-8">
            Servicii complete pentru instalații gaze și centrale termice
          </h2>
          <div className="prose prose-lg mx-auto text-text-secondary">
            <p className="text-lg mb-6">
              <strong>CON EST IMPEX SRL</strong> este o companie cu experiență de peste 28 de ani în domeniul 
              instalațiilor de gaze naturale și centrale termice din Constanța. Din 1996, oferim servicii 
              profesionale pentru clienți rezidențiali și comerciali.
            </p>
            <p className="text-lg mb-6">
              Suntem autorizați ANRE pentru instalații gaze naturale și certificați ISCIR pentru montaj 
              și service centrale termice. Toate lucrările sunt executate conform normelor în vigoare, 
              cu personal calificat și echipamente profesionale.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-lg font-semibold text-primary mb-2">
                🎯 Reduceri speciale pentru pensionari: 25%
              </p>
              <p className="text-base">
                Oferim condiții preferențiale pentru persoanele vârstnice din comunitatea noastră.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};