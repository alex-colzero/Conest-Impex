import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centrale Termice Constanța Nord | Conest - Service ISCIR',
  description: 'Centrale termice în Constanța Nord: Inel 1, Inel 2, Zona Industrială. Service autorizat ISCIR, montaj, reparații și întreținere. Echipă specializată zona nord.',
  keywords: 'centrale termice Constanta nord, service centrale Inel 1, montaj centrale Inel 2, ISCIR Constanta nord, reparatii centrale',
  openGraph: {
    title: 'Centrale Termice Constanța Nord | Conest - Service ISCIR',
    description: 'Centrale termice în Constanța Nord: Inel 1, Inel 2, Zona Industrială. Service autorizat ISCIR, montaj, reparații și întreținere. Echipă specializată zona nord.',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary',
    title: 'Centrale Termice Constanța Nord | Conest - Service ISCIR',
    description: 'Centrale termice în Constanța Nord: Inel 1, Inel 2, Zona Industrială. Service autorizat ISCIR, montaj, reparații și întreținere.',
  },
  alternates: {
    canonical: 'https://conest-gaze-centrale.ro/centrale-termice-constanta-nord',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Centrale Termice Constanța Nord",
  "description": "Servicii profesionale pentru centrale termice în zona de nord a Constanței - montaj, service, reparații ISCIR",
  "provider": {
    "@type": "LocalBusiness",
    "name": "CON EST IMPEX SRL",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Constanța Nord",
      "addressLocality": "Constanța",
      "postalCode": "900001",
      "addressRegion": "Constanța", 
      "addressCountry": "RO"
    },
    "telephone": "+40722619097",
    "email": "contact@conest-gaze-centrale.ro"
  },
  "areaServed": [
    {
      "@type": "Place",
      "name": "Inel 1, Constanța"
    },
    {
      "@type": "Place",
      "name": "Inel 2, Constanța"
    },
    {
      "@type": "Place",
      "name": "Zona Industrială Nord, Constanța"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicii Centrale Termice Constanța Nord",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Montaj centrale termice",
          "description": "Instalare centrală termică cu certificat ISCIR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Service centrale termice",
          "description": "Reparații și întreținere autorizată ISCIR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Revizii ISCIR",
          "description": "Verificări tehnice periodice obligatorii"
        }
      }
    ]
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.1870,
    "longitude": 28.6348
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "156"
  }
};

export default function CentraleTermiceConstantaNordPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#05213c] to-[#0a3454] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Centrale Termice
                <span className="block text-[#f2b721] text-3xl md:text-4xl mt-2">
                  Constanța Nord - Inel 1, Inel 2, Zona Industrială
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Service specializat centrale termice pentru zona de nord a Constanței. 
                Certificat ISCIR, echipă locală, intervenții rapide în Inel 1, Inel 2 și Zona Industrială.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold">
                  Urgențe 24/7
                </div>
                <div className="bg-[#05213c] text-white px-6 py-3 rounded-lg font-semibold">
                  Service Autorizat ISCIR
                </div>
                <div className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold">
                  Toate Mărcile
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0744579715" 
                  className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  0744.579.715 - Urgențe 24/7
                </a>
                <a 
                  href="tel:0722619097" 
                  className="bg-[#f2b721] hover:bg-[#e6a61d] text-[#05213c] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  0722.619.097 - Programări
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Zone Acoperite Nord */}
        <section className="py-16 bg-[#f3f2ef]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4">
                  Zone Acoperite în Constanța Nord
                </h2>
                <p className="text-xl text-gray-600">
                  Echipe specializate pentru fiecare zonă din nordul Constanței
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#f2b721]">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Inel 1 - Constanța
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Blocuri din Inel 1 (zona centrală)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Apartamente și garsoniere
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Birouri și spații comerciale
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Case particulare în zonă
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-[#05213c] font-semibold">
                      Timp răspuns: 15-25 minute
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#05213c]">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Inel 2 - Constanța
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Cartiere rezidențiale Inel 2
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Ansambluuri noi de apartamente
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Vile și case moderne
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Complexe comerciale
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-[#05213c] font-semibold">
                      Timp răspuns: 20-30 minute
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gray-600">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Zona Industrială Nord
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Hale industriale și fabrici
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Depozite și spații logistice
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Clădiri administrative
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Centrale termice industriale
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-[#05213c] font-semibold">
                      Timp răspuns: 25-35 minute
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-[#05213c] text-white p-8 rounded-lg">
                  <h3 className="text-3xl font-bold mb-4">
                    Service Urgențe 24/7 în Zona Nord
                  </h3>
                  <p className="text-xl mb-6">
                    Echipă permanentă pentru urgențele din zona nord: <strong>Inel 1, Inel 2, Zona Industrială</strong>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-[#f2b721]">Intervenții Urgente:</h4>
                      <ul className="space-y-1 text-gray-200">
                        <li>• Centrala nu pornește (iarnă)</li>
                        <li>• Scurgeri de gaze la centrală</li>
                        <li>• Defecțiuni vana de gaz</li>
                        <li>• Probleme cu exhaustul</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-[#f2b721]">Contact Direct:</h4>
                      <ul className="space-y-1 text-gray-200">
                        <li>• <strong>Urgențe:</strong> 0744.579.715</li>
                        <li>• Disponibili 24/7</li>
                        <li>• Echipă specializată nord</li>
                        <li>• Piese de schimb în stoc</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicii Centrale Termice */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4">
                  Servicii Centrale Termice Zona Nord
                </h2>
                <p className="text-xl text-gray-600">
                  Gamă completă de servicii ISCIR pentru toate tipurile de centrale
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#f2b721]">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Montaj și Instalare
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Montaj centrale noi</strong> cu certificat ISCIR pentru toate mărcile
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Înlocuire centrale vechi</strong> în Inel 1 și Inel 2
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Sisteme industriale</strong> pentru zona industrială nord
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Configurare și punere în funcțiune</strong> cu teste complete
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gray-600">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Service și Reparații
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Diagnoză completă</strong> cu aparatură profesională
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Reparații rapide</strong> cu piese originale în stoc
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Service autorizat</strong> pentru toate mărcile de centrale
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Garanție pe lucrări</strong> și piese de schimb
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#05213c]">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Revizii ISCIR
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Verificări tehnice periodice</strong> obligatorii conform legii
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Certificate de conformitate</strong> eliberate la fața locului
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Teste de presiune și etanșeitate</strong> cu aparate etalonate
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Rapoarte tehnice</strong> pentru autoritățile competente
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gray-600">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Pregătire Sezon Rece
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Verificări înaintea iernii</strong> pentru centrale din zona nord
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Curățare și reglaje</strong> pentru eficiență maximă
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Înlocuire filtre și piese uzate</strong> preventiv
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      <div>
                        <strong>Consiliere și recomandări</strong> pentru economii la gaze
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#05213c] text-white p-8 rounded-lg">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">
                    De Ce Zona Nord Se Bazează pe Noi?
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-bold text-2xl mb-2 text-[#f2b721]">1200+</h4>
                    <p className="text-gray-300">centrale service în zona nord</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-2xl mb-2 text-[#f2b721]">22 min</h4>
                    <p className="text-gray-300">timp mediu de răspuns</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-2xl mb-2 text-[#f2b721]">96%</h4>
                    <p className="text-gray-300">clienți mulțumiți zona nord</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mărcile de Centrale */}
        <section className="py-16 bg-[#f3f2ef]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4">
                  Service Autorizat pentru Toate Mărcile
                </h2>
                <p className="text-xl text-gray-600">
                  Echipă specializată și piese de schimb pentru toate centralele din zona nord
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { brand: "Vaillant", specialty: "Service Premium" },
                  { brand: "Ariston", specialty: "Piese Originale" }, 
                  { brand: "Ferroli", specialty: "Reparații Rapide" },
                  { brand: "Buderus", specialty: "Service Industrial" },
                  { brand: "Bosch", specialty: "Toate Modelele" },
                  { brand: "Immergas", specialty: "Modernizări" },
                  { brand: "Baxi", specialty: "Piese în Stoc" },
                  { brand: "Beretta", specialty: "Service 24/7" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg font-bold text-[#05213c] mb-2 mt-4">{item.brand}</h3>
                    <p className="text-sm text-gray-600">{item.specialty}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-[#f2b721] p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-[#05213c] mb-4">
                  Expertiză Locală pentru Zona Nord
                </h3>
                <p className="text-[#05213c] text-lg mb-6">
                  Cunoaștem perfect centralele din Inel 1, Inel 2 și Zona Industrială. 
                  <strong> Piese de schimb în stoc</strong> pentru intervenții imediate!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:0744579715" 
                    className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Urgențe: 0744.579.715
                  </a>
                  <a 
                    href="tel:0722619097" 
                    className="bg-[#05213c] hover:bg-[#0a3454] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Programări: 0722.619.097
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Final */}
        <section className="py-16 bg-gradient-to-r from-[#05213c] to-[#0a3454]">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Service Centrale Termice Constanța Nord
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Echipa specializată pentru Inel 1, Inel 2 și Zona Industrială Nord
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <a 
                  href="tel:0744579715" 
                  className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  0744.579.715 - Urgențe 24/7
                </a>
                <a 
                  href="tel:0722619097" 
                  className="bg-[#f2b721] hover:bg-[#e6a61d] text-[#05213c] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  0722.619.097 - Programări
                </a>
              </div>

              <div className="text-blue-100">
                <p className="text-lg font-semibold">
                  Specializați în Zona Nord | Service ISCIR Autorizat
                </p>
                <p className="mt-2 text-gray-300">
                  27 ani experiență • Piese originale • Garanție pe lucrări
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}