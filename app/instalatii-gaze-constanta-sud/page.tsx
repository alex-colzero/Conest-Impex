import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instalații gaze naturale Constanța Sud | Conest - Autorizat ANRE',
  description: 'Instalații gaze naturale în Constanța Sud: Tomis, CET, Campus. Autorizat ANRE, echipă locală, intervenții rapide. Experiență 27 ani în zona de sud.',
  keywords: 'instalatii gaze naturale Constanta sud, Tomis gaze, CET Constanta, Campus instalatii gaze, autorizat ANRE, instalator local',
  openGraph: {
    title: 'Instalații gaze naturale Constanța Sud | Conest - Autorizat ANRE',
    description: 'Instalații gaze naturale în Constanța Sud: Tomis, CET, Campus. Autorizat ANRE, echipă locală, intervenții rapide. Experiență 27 ani în zona de sud.',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary',
    title: 'Instalații gaze naturale Constanța Sud | Conest - Autorizat ANRE',
    description: 'Instalații gaze naturale în Constanța Sud: Tomis, CET, Campus. Autorizat ANRE, echipă locală, intervenții rapide.',
  },
  alternates: {
    canonical: 'https://conest-gaze-centrale.ro/instalatii-gaze-constanta-sud',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Instalații Gaze Naturale Constanța Sud",
  "description": "Servicii profesionale de instalații gaze naturale în zona de sud a Constanței - Tomis, CET, Campus",
  "provider": {
    "@type": "LocalBusiness",
    "name": "CON EST IMPEX SRL",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Constanța Sud",
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
      "name": "Cartierul Tomis, Constanța"
    },
    {
      "@type": "Place", 
      "name": "CET, Constanța"
    },
    {
      "@type": "Place",
      "name": "Campus Universitar, Constanța"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicii Instalații Gaze Constanța Sud",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branșament gaze naturale",
          "description": "Execuție branșament de la rețeaua publică"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Instalație interioară gaze",
          "description": "Instalații gaze pentru apartamente și case"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Montaj centrale termice",
          "description": "Instalare și configurare centrale pe gaz"
        }
      }
    ]
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.1435,
    "longitude": 28.6380
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "89"
  }
};

export default function InstalaiiGazeConstantaSudPage() {
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
                Instalații Gaze Naturale
                <span className="block text-[#f2b721] text-3xl md:text-4xl mt-2">
                  Constanța Sud - Tomis, CET, Campus
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Echipă locală specializată în instalații gaze naturale pentru zona de sud a Constanței. 
                Autorizat ANRE, 27 ani experiență în cartierele Tomis, CET și Campus Universitar.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-[#05213c] text-white px-6 py-3 rounded-lg font-semibold">
                  Echipă Locală Sud
                </div>
                <div className="bg-[#05213c] text-white px-6 py-3 rounded-lg font-semibold">
                  Intervenții în 30 min
                </div>
                <div className="bg-[#05213c] text-white px-6 py-3 rounded-lg font-semibold">
                  Autorizat ANRE
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0722619097" 
                  className="bg-[#f2b721] hover:bg-[#e6a61d] text-[#05213c] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  0722.619.097 - Echipa Sud
                </a>
                <a 
                  href="#zone-acoperite" 
                  className="border-2 border-[#f2b721] hover:bg-[#f2b721] hover:text-[#05213c] text-[#f2b721] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Vezi Zonele Acoperite
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Zone Acoperite */}
        <section id="zone-acoperite" className="py-16 bg-[#f3f2ef]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4">
                  Zone acoperite în Constanța sud
                </h2>
                <p className="text-xl text-gray-600">
                  Acoperim complet zona de sud cu echipe specializate pentru fiecare cartier
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#f2b721]">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Cartierul Tomis
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Tomis Mall și zona comercială
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Blocurile din Tomis Nord
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Villele din zona Tomis
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Ansambluurile rezidențiale noi
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#05213c]">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Zona CET
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Cartierul CET și împrejurimi
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Blocuri în zona industrială
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Case particulare CET
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Sedii firme și depozite
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gray-500">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Campus universitar
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Campus universitar Ovidius
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Cămine studențești
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Apartamente pentru studenți
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#05213c] mr-2 mt-1">•</span>
                      Clădiri administrative
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-[#f2b721] p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-4">
                    Timp de răspuns record în sud
                  </h3>
                  <p className="text-[#05213c] text-lg">
                    Echipa noastră specializată pentru zona de sud garantează <strong>intervenții în maxim 30 de minute</strong> 
                    în cartierele Tomis, CET și Campus. Cunoaștem perfect zona și avem depozitul în proximitate!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicii Specifice */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4">
                  Servicii instalații gaze Constanța sud
                </h2>
                <p className="text-xl text-gray-600">
                  Soluții complete adaptate specificului fiecărui cartier din zona de sud
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Blocuri și apartamente
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#f2b721] mr-2 mt-1">•</span>
                      <div>
                        <strong>Branșamente colective</strong> pentru blocuri în Tomis și CET
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f2b721] mr-2 mt-1">•</span>
                      <div>
                        <strong>Instalații interioare apartamente</strong> cu certificat de conformitate
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f2b721] mr-2 mt-1">•</span>
                      <div>
                        <strong>Centrale termice individuale</strong> pentru apartamente
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f2b721] mr-2 mt-1">•</span>
                      <div>
                        <strong>Modernizări instalații existente</strong> în blocurile vechi
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#05213c] mb-6">
                    Case și vile
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#f2b721] mr-2 mt-1">•</span>
                      <div>
                        <strong>Branșamente individuale</strong> pentru case în Tomis și Campus
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f2b721] mr-2 mt-1">•</span>
                      <div>
                        <strong>Instalații complete case noi</strong> cu proiectare inclusă
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f2b721] mr-2 mt-1">•</span>
                      <div>
                        <strong>Sisteme de încălzire pe gaz</strong> pentru vile mari
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f2b721] mr-2 mt-1">•</span>
                      <div>
                        <strong>Instalații pentru grădini</strong> și spații exterioare
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#05213c] text-white p-8 rounded-lg">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">
                    De ce Constanța sud ne-a ales pe noi?
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-xl mb-4 text-[#f2b721]">Statistici Zone Sud:</h4>
                    <ul className="space-y-2 text-gray-200">
                      <li>• Peste 800 instalații realizate în Tomis</li>
                      <li>• 300+ branșamente în CET și Campus</li>
                      <li>• 95% clienți recomandă serviciile</li>
                      <li>• Timp mediu intervenție: 25 minute</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-4 text-[#f2b721]">Avantaje Locale:</h4>
                    <ul className="space-y-2 text-gray-200">
                      <li>• Cunoaștem perfect infrastructura locală</li>
                      <li>• Relații strânse cu E.ON și Distrigaz</li>
                      <li>• Depozit de materiale în zona sud</li>
                      <li>• Echipă dedicată pentru fiecare cartier</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proces Optimizat pentru Sud */}
        <section className="py-16 bg-[#f3f2ef]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4">
                  Proces optimizat pentru zona sud
                </h2>
                <p className="text-xl text-gray-600">
                  Am adaptat procesul nostru pentru specificul cartierelor din sudul Constanței
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#f2b721]">
                  <div className="flex items-start">
                    <div className="bg-[#f2b721] text-[#05213c] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#05213c] mb-2">
                        Programare online sau telefonic
                      </h3>
                      <p className="text-gray-700">
                        Sistem de programare optimizat pentru fiecare cartier. Specificați zona (Tomis/CET/Campus) 
                        pentru a fi direcționați către echipa locală dedicată.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#05213c] mb-2">
                        Deplasare rapidă în zonă
                      </h3>
                      <p className="text-gray-700">
                        Echipa se deplasează din depozitul din zona sud în maxim 30 minute. 
                        Cunoașterea perfectă a străzilor și traficului local ne ajută să fim foarte rapizi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600">
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#05213c] mb-2">
                        Evaluare și proiectare locală
                      </h3>
                      <p className="text-gray-700">
                        Evaluarea ține cont de specificul fiecărui cartier: presiunea rețelei în Tomis, 
                        particularitățile blocurilor din CET, sau cerințele speciale din Campus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-500">
                  <div className="flex items-start">
                    <div className="bg-gray-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#05213c] mb-2">
                        Execuție cu materiale din depozit local
                      </h3>
                      <p className="text-gray-700">
                        Materialele sunt aduse rapid din depozitul nostru din zona sud. 
                        Nu trebuie să așteptați comenzi - avem în stoc tot ce este necesar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Specializat Sud */}
        <section className="py-16 bg-gradient-to-r from-[#f2b721] to-[#e6a61d]">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-6">
                Echipa specializată Constanța sud
              </h2>
              <p className="text-xl text-[#05213c] mb-8 opacity-90">
                Contactează direct echipa noastră specializată pentru zona de sud a Constanței
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0722619097" 
                  className="bg-[#05213c] hover:bg-[#0a3454] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  0722.619.097 - Echipa Sud
                </a>
                <a 
                  href="mailto:contact@conest-gaze-centrale.ro?subject=Instalații%20Gaze%20Constanța%20Sud" 
                  className="bg-white hover:bg-gray-100 text-[#05213c] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Email Zona Sud
                </a>
              </div>

              <div className="mt-8 text-[#05213c] opacity-80">
                <p className="text-lg font-semibold">
                  Specializați în Tomis, CET și Campus | Intervenții în 30 min
                </p>
                <p className="mt-2">
                  Autorizat ANRE • Certificat ISCIR • 27 ani experiență în Constanța Sud
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}