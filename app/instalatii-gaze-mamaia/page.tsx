import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { FAQSection } from '../../src/components/FAQSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Instalații gaze naturale Mamaia - Service autorizat ANRE',
  description: 'Instalații gaze naturale în Mamaia și zona de coastă. Servicii complete pentru hoteluri, restaurante și proprietăți rezidențiale. Autorizat ANRE ☎️ 0722.619.097',
  keywords: 'instalatii gaze mamaia, gaze naturale mamaia, instalator gaze mamaia, service gaze mamaia, ANRE mamaia',
  openGraph: {
    title: 'Instalații gaze naturale Mamaia - Service autorizat ANRE',
    description: 'Servicii complete instalații gaze în zona Mamaia pentru hoteluri și proprietăți de coastă.',
    url: 'https://conest.ro/instalatii-gaze-mamaia',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function InstalationsGazeMamaia() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Instalații gaze naturale Mamaia",
    "description": "Servicii complete instalații gaze naturale în zona Mamaia și litoralul românesc",
    "provider": {
      "@type": "LocalBusiness",
      "name": "CON EST IMPEX SRL",
      "telephone": "+40-722-619-097",
      "email": "contact@conest-gaze-centrale.ro"
    },
    "areaServed": {
      "@type": "City",
      "name": "Mamaia, Constanța"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01"
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Instalații gaze naturale Mamaia
                <span className="block text-[#f2b721] mt-2">Service pentru zona de coastă</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Servicii specializate pentru instalații gaze naturale în Mamaia și zona litoralului. 
                Experiență în proprietăți de coastă, hoteluri și restaurante cu cerințe speciale.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Proprietăți de coastă</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Hoteluri & restaurante</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Autorizat ANRE</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Solicită ofertă pentru Mamaia
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="/img/hero-1.png" 
                alt="Instalații gaze naturale Mamaia" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specificații zona Mamaia */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Provocări specifice zona Mamaia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiență specializată pentru proprietățile din zona de coastă cu cerințe tehnice speciale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Coastă" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Mediu salin agresiv</h3>
              <p className="text-gray-600">
                Materiale și echipamente rezistente la coroziunea specifică mediului marin. 
                Protecții speciale pentru instalații exterioare.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Hoteluri" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Hoteluri și restaurante</h3>
              <p className="text-gray-600">
                Instalații complexe pentru bucătării profesionale, spălătorii industriale 
                și sisteme de încălzire pentru spații mari.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Sezon" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Cerințe sezoniere</h3>
              <p className="text-gray-600">
                Adaptarea capacității pentru fluxul sezonier de turiști. 
                Sisteme modulare pentru consum variabil.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Apartamente" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Apartamente de vacanță</h3>
              <p className="text-gray-600">
                Instalații pentru apartamente de închiriat pe termen scurt. 
                Sisteme sigure și ușor de întreținut.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Reglementări" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Reglementări locale</h3>
              <p className="text-gray-600">
                Cunoașterea reglementărilor specifice pentru zona de protecție a litoralului. 
                Avize și autorizații complete.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Service urgency" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Service de urgență</h3>
              <p className="text-gray-600">
                Intervenții rapide în sezonul estival. Echipă dedicată pentru zona Mamaia 
                cu timp de răspuns sub 30 de minute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone deservite în Mamaia */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Zone acoperite în Mamaia
            </h2>
            <p className="text-xl text-gray-600">
              Servicii complete în toate zonele din stațiunea Mamaia și împrejurimi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Mamaia Nord</h3>
              <p className="text-gray-600">Zona hotelurilor de lux, complexe rezidențiale premium și restaurante fine dining.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Mamaia Centru</h3>
              <p className="text-gray-600">Zona comercială centrală, hoteluri de city break și apartamente turistice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Mamaia Sud</h3>
              <p className="text-gray-600">Zone rezidențiale, pensiuni boutique și proprietăți pentru investiții.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Năvodari</h3>
              <p className="text-gray-600">Cartiere rezidențiale moderne și facilități turistice în dezvoltare.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Corbu</h3>
              <p className="text-gray-600">Zone de expansiune turistică și proprietăți de vacanță exclusiviste.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Zona Casino</h3>
              <p className="text-gray-600">Obiective culturale, restaurante de patrimoniu și hoteluri istorice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection 
        title="Clienți mulțumiți - Mamaia"
        maxItems={3} 
      />

      {/* FAQ Section */}
      <FAQSection 
        type="mamaia"
        title="Întrebări frecvente - Instalații gaze Mamaia"
        maxItems={5}
      />

      {/* CTA Section */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Instalații gaze în zona Mamaia?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Echipă specializată pentru proprietățile de coastă. Experiență în mediul salin și cerințe turistice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Instalații Mamaia: 0722.619.097
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro?subject=Instalații%20Gaze%20Mamaia&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20trimiteți%20informații%20despre%20instalații%20gaze%20naturale%20în%20zona%20Mamaia.%0D%0A%0D%0ADetalii:%0D%0A-%20Locația%20exactă:%0D%0A-%20Tipul%20proprietății:%0D%0A-%20Necesități%20speciale:%0D%0A-%20Telefon%20contact:%0D%0A%0D%0AMulțumesc!" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Email pentru ofertă
              <img src="/img/vector-12.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Servicii conexe pentru Mamaia
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Centrale termice</h3>
              <p className="text-gray-600 mb-4">
                Sisteme de încălzire pentru hoteluri și apartamente din zona de coastă.
              </p>
              <Link 
                href="/centrale-termice"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi centrale termice →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Sisteme siguranță</h3>
              <p className="text-gray-600 mb-4">
                Detectori gaze și electrovalve pentru proprietăți turistice.
              </p>
              <Link 
                href="/sisteme-siguranta"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi sisteme siguranță →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Service urgențe</h3>
              <p className="text-gray-600 mb-4">
                Intervenții rapide 24/7 în sezonul estival pentru zona Mamaia.
              </p>
              <Link 
                href="/urgente"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi urgențe →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}