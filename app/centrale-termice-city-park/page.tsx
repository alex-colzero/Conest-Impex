import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { PricingSection } from '../../src/components/PricingSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Centrale termice City Park Mall Constanța - Service & Montaj | CONEST',
  description: 'Centrale termice zona City Park Mall. Montaj, service, urgențe pentru magazine și birouri. Vaillant, Ariston, Viessmann ☎️ 0722.619.097',
  keywords: 'centrale termice City Park Mall, service centrale magazine City Park, montaj centrală birouri Constanța',
  openGraph: {
    title: 'Centrale termice City Park Mall - Montaj & Service | CONEST',
    description: 'Specialiști centrale termice pentru zona comercială City Park Mall Constanța.',
    url: 'https://conest-gaze-centrale.ro/centrale-termice-city-park',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function CentraleTermiceCityPark() {
  const commercialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Service Centrale Termice City Park Mall",
    "description": "Montaj și service centrale termice pentru spații comerciale și birouri în zona City Park Mall",
    "provider": {
      "@type": "LocalBusiness",
      "name": "CONEST IMPEX SRL",
      "telephone": "+40-722-619-097",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Constanța",
        "streetAddress": "Zona City Park Mall"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "City Park Mall și împrejurimi",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "44.2030",
        "longitude": "28.6320"
      }
    },
    "serviceType": ["Montaj centrale termice", "Service ISCIR", "Mentenanță preventivă", "Urgențe 24/7"],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "RON",
      "availability": "https://schema.org/InStock",
      "offerCount": "15"
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialServiceSchema) }}
      />
      
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[#f2b721]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold">SPECIALIST SPAȚII COMERCIALE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Centrale termice
                <span className="block text-[#f2b721] mt-2">City Park Mall & Birouri</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Service specializat pentru magazine, restaurante și clădiri de birouri. 
                Contracte mentenanță, intervenții rapide, piese originale.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold text-[#f2b721]">500+</p>
                  <p className="text-sm">Centrale instalate în zone comerciale</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold text-[#f2b721]">10 min</p>
                  <p className="text-sm">Timp răspuns City Park Mall</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:0722619097" className="inline-flex items-center bg-[#f2b721] text-[#05213c] px-6 py-3 rounded-lg font-semibold hover:bg-[#f2b721]/90 transition">
                  <img src="/img/vector-16.svg" alt="Phone" className="w-5 h-5 mr-2" />
                  Contract Service: 0722.619.097
                </a>
                <Link href="/urgente" className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                  Urgențe 24/7 →
                </Link>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Clienți business în zonă:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-[#f2b721]">✓</span>
                  <span>Magazine City Park Mall</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f2b721]">✓</span>
                  <span>Restaurante și food court</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f2b721]">✓</span>
                  <span>Clădiri birouri Bulevardul Tomis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f2b721]">✓</span>
                  <span>Clinici medicale private</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f2b721]">✓</span>
                  <span>Săli fitness și spa</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#f2b721]/20 rounded-lg">
                <p className="font-semibold">Ofertă specială business:</p>
                <p className="text-sm mt-1">Contract mentenanță cu -20% reducere pentru 12 luni</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            Servicii specializate pentru afaceri
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#05213c] to-[#0a3a5c] text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Contracte mentenanță</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Verificări lunare programate</li>
                <li>• Piese incluse în contract</li>
                <li>• Prioritate intervenții</li>
                <li>• Rapoarte tehnice detaliate</li>
                <li>• Conformitate ISCIR/ANRE</li>
              </ul>
              <div className="mt-6 p-3 bg-white/20 rounded">
                <p className="text-sm font-semibold">Popular pentru: Magazine, restaurante</p>
              </div>
            </div>
            
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Instalări noi</h3>
              <ul className="space-y-2 text-[#303030]">
                <li>• Centrale industriale mare putere</li>
                <li>• Sisteme cascade pentru mall</li>
                <li>• Centrale condensare eficiente</li>
                <li>• Automatizări inteligente</li>
                <li>• Integrare BMS</li>
              </ul>
              <div className="mt-6 p-3 bg-[#f2b721]/10 rounded">
                <p className="text-sm font-semibold text-[#05213c]">ROI: Economie 30% gaze</p>
              </div>
            </div>
            
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Service rapid</h3>
              <ul className="space-y-2 text-[#303030]">
                <li>• Diagnosticare în 30 minute</li>
                <li>• Stoc piese comune</li>
                <li>• Înlocuire urgentă centrale</li>
                <li>• Centrale loan pe perioada reparației</li>
                <li>• Facturare corporate</li>
              </ul>
              <div className="mt-6 p-3 bg-green-50 rounded">
                <p className="text-sm font-semibold text-green-700">Garanție: 2 ani piese și manoperă</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            Centrale termice pentru spații comerciale
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#05213c] mb-6">Mărci premium service:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-bold text-[#05213c]">Vaillant</p>
                  <p className="text-sm text-gray-600">ecoTEC plus pentru eficiență maximă</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-bold text-[#05213c]">Viessmann</p>
                  <p className="text-sm text-gray-600">Vitodens pentru spații mari</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-bold text-[#05213c]">Ariston</p>
                  <p className="text-sm text-gray-600">Genus One pentru control smart</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="font-bold text-[#05213c]">Immergas</p>
                  <p className="text-sm text-gray-600">Victrix Pro comercial</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#05213c] mb-6">Avantaje business CONEST:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <strong>Facturare și decontare rapidă</strong>
                    <p className="text-sm text-gray-600">Lucram cu toate firmele, facturi detaliate</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <strong>Intervenții în afara programului</strong>
                    <p className="text-sm text-gray-600">Weekend, sărbători, noapte - fără taxe extra pentru contracte</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <strong>Consultanță eficiență energetică</strong>
                    <p className="text-sm text-gray-600">Optimizare consum, upgrade sisteme vechi</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <strong>Manager cont dedicat</strong>
                    <p className="text-sm text-gray-600">Un singur punct de contact pentru toate necesitățile</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            Proiecte realizate în zona City Park
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-[#05213c]/20 rounded-lg p-6">
              <h3 className="font-bold text-[#05213c] mb-2">Magazin Fashion 800mp</h3>
              <p className="text-sm text-gray-600 mb-4">Instalare sistem cascadă 2x35kW pentru încălzire uniformă</p>
              <div className="text-sm">
                <p><strong>Rezultat:</strong> -35% costuri încălzire</p>
                <p><strong>Timp execuție:</strong> 3 zile</p>
              </div>
            </div>
            
            <div className="border-2 border-[#05213c]/20 rounded-lg p-6">
              <h3 className="font-bold text-[#05213c] mb-2">Restaurant 300 locuri</h3>
              <p className="text-sm text-gray-600 mb-4">Centrală Viessmann 45kW cu preparare ACM instant</p>
              <div className="text-sm">
                <p><strong>Rezultat:</strong> Apă caldă constantă</p>
                <p><strong>Timp execuție:</strong> 2 zile</p>
              </div>
            </div>
            
            <div className="border-2 border-[#05213c]/20 rounded-lg p-6">
              <h3 className="font-bold text-[#05213c] mb-2">Clădire birouri 5 etaje</h3>
              <p className="text-sm text-gray-600 mb-4">Modernizare completă sistem încălzire cu BMS</p>
              <div className="text-sm">
                <p><strong>Rezultat:</strong> Control per etaj</p>
                <p><strong>Timp execuție:</strong> 5 zile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
            Ofertă specială pentru afaceri din City Park Mall
          </h2>
          <p className="text-xl mb-8">
            Contract mentenanță 12 luni = 2 luni GRATUIT + Verificare inițială gratuită
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <p className="text-lg mb-2">Linie dedicată business:</p>
            <p className="text-3xl font-bold text-[#f2b721]">0722.619.097</p>
            <p className="text-sm mt-2">Luni-Vineri: 8:00-20:00 | Weekend: urgențe</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0722619097" className="inline-flex items-center bg-[#f2b721] text-[#05213c] px-8 py-4 rounded-lg font-semibold hover:bg-[#f2b721]/90 transition text-lg">
              Solicită ofertă personalizată
            </a>
            <a href="mailto:contact@conest-gaze-centrale.ro" className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition text-lg">
              Email: contact@conest-gaze-centrale.ro
            </a>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FooterSection />
    </div>
  )
}