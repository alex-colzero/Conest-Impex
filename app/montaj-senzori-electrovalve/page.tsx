import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { FAQSection } from '../../src/components/FAQSection'
import { PricingSection } from '../../src/components/PricingSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Montaj senzori gaze și electrovalve Constanța | Conest',
  description: 'Montaj senzori gaze cu electrovalve automate pentru protecție completă. Detectare scurgeri și închidere automată. Certificat ISCIR ☎️ 0722.619.097',
  keywords: 'montaj senzori gaze, electrovalve automate, detectoare gaze, sisteme siguranta gaze, protectie gaze',
  openGraph: {
    title: 'Montaj senzori gaze și electrovalve Constanța | Conest',
    description: 'Sisteme complete de protecție cu senzori gaze și închidere automată prin electrovalve.',
    url: 'https://conest.ro/montaj-senzori-electrovalve',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function MontajSenzoriElectrovalve() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Montaj senzori gaze și electrovalve",
    "description": "Instalare sisteme complete de detectare și protecție pentru gazele naturale",
    "provider": {
      "@type": "LocalBusiness", 
      "name": "CON EST IMPEX SRL",
      "telephone": "+40-722-619-097",
      "email": "contact@conest-gaze-centrale.ro"
    },
    "areaServed": {
      "@type": "City",
      "name": "Constanța"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    },
    "additionalType": "https://schema.org/ProfessionalService"
  };

  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Montaj senzori gaze și electrovalve
                <span className="block text-[#f2b721] mt-2">Protecție automată completă</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Sisteme avansate de detectare scurgeri gaze cu închidere automată prin electrovalve. 
                Protecția familiei tale cu tehnologie de ultimă generație.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Detectare instantanee</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Închidere automată</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Certificat ISCIR</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Montaj sisteme protecție
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="/img/hero-1.png" 
                alt="Montaj senzori gaze și electrovalve" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tipuri senzori și electrovalve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Tipuri senzori și electrovalve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sisteme adaptate pentru fiecare tip de proprietate și nivel de protecție dorit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Senzor basic" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Senzor basic</h3>
              <p className="text-gray-600 mb-4">
                Detectare gaze naturale cu alarmă sonoră și vizuală. Ideal pentru apartamente cu instalație simplă.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Detectare 0-100% LEL</li>
                <li>• Alarmă sonoră 85dB</li>
                <li>• Alimentare 12V sau 220V</li>
                <li>• Garanție 2 ani</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl border-2 border-[#f2b721]">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Senzor cu electrovalvă" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Senzor + electrovalvă</h3>
              <div className="bg-[#f2b721] text-[#05213c] px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Recomandat
              </div>
              <p className="text-gray-600 mb-4">
                Sistem complet cu închidere automată a gazului la detectarea scurgerilor. Protecție maximă.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Detectare automată sub 30 secunde</li>
                <li>• Închidere electrovalvă 1/2" - 2"</li>
                <li>• Reset manual după remediere</li>
                <li>• Backup baterie UPS</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Sistem avansat" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Sistem avansat</h3>
              <p className="text-gray-600 mb-4">
                Centrală de alarmă cu multiple zone, notificare mobilă și ventilare automată pentru case mari.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Până la 8 senzori conectați</li>
                <li>• Notificare SMS/apel telefonic</li>
                <li>• Ventilator evacuare automat</li>
                <li>• Monitorizare remotă</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Senzor portabil" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Detector portabil</h3>
              <p className="text-gray-600 mb-4">
                Pentru tehnicieni și verificări periodice. Detectare precise cu afișaj digital.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Precizie ±3% LEL</li>
                <li>• Baterie reîncărcabilă</li>
                <li>• Calibrare anuală</li>
                <li>• Certificat de etalonare</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Electrovalvă" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Electrovalvă stand-alone</h3>
              <p className="text-gray-600 mb-4">
                Montaj pe instalații existente cu senzori pentru închidere manuală sau automată.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Diametre 1/2" până la 4"</li>
                <li>• Presiune lucru până 6 bar</li>
                <li>• Timp închidere sub 2 secunde</li>
                <li>• Comandă 12V sau 24V</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Mentenanță" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Service și mentenanță</h3>
              <p className="text-gray-600 mb-4">
                Verificări periodice, calibrare senzori și înlocuire componente pentru funcționare optimă.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Verificare anuală</li>
                <li>• Calibrare cu gaze test</li>
                <li>• Înlocuire senzori uzați</li>
                <li>• Certificat de conformitate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cum funcționează */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Cum funcționează sistemul
            </h2>
            <p className="text-xl text-gray-600">
              Protecție automată în 4 pași simpli pentru siguranța maximă
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Detectare</h3>
              <p className="text-gray-600">
                Senzorul detectează concentrația de gaze naturale în aer și monitorizează continuu nivelul LEL.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Alarmă</h3>
              <p className="text-gray-600">
                La 20% LEL se declanșează alarma sonoră și vizuală pentru avertizarea ocupanților.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Închidere</h3>
              <p className="text-gray-600">
                La 25% LEL electrovalva închide automat alimentarea cu gaz pentru prevenirea riscurilor.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Reset</h3>
              <p className="text-gray-600">
                După remedierea problemei, sistemul se resetează manual și reia monitorizarea normală.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Informații tehnice importante</h3>
            <div className="grid md:grid-cols-2 gap-6 text-blue-700">
              <div>
                <h4 className="font-semibold mb-2">Praguri alarmă:</h4>
                <ul className="space-y-1">
                  <li>• 20% LEL - Alarmă sonoră</li>
                  <li>• 25% LEL - Închidere gaz</li>
                  <li>• 50% LEL - Alarmă critică</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Timp de răspuns:</h4>
                <ul className="space-y-1">
                  <li>• Detectare: sub 30 secunde</li>
                  <li>• Închidere: sub 2 secunde</li>
                  <li>• Reset: manual cu cheie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection 
        type="siguranta"
        title="Pachete sisteme siguranță"
        subtitle="Protecție completă adaptată pentru fiecare situație"
      />

      {/* Certificări și garanții */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Certificări și garanții
            </h2>
            <p className="text-xl text-gray-600">
              Instalații certificate conform standardelor românești și europene
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/img/icon-30.png" alt="ISCIR" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Certificat ISCIR</h3>
              <p className="text-gray-600">
                Toate instalațiile sunt certificate ISCIR conform reglementărilor în vigoare pentru siguranța gazelor.
              </p>
            </div>

            <div className="text-center bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/img/icon-30.png" alt="CE" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Marcaj CE</h3>
              <p className="text-gray-600">
                Toate echipamentele utilizate sunt marcate CE și respectă standardele europene de siguranță.
              </p>
            </div>

            <div className="text-center bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/img/icon-30.png" alt="Garanție" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Garanție 2 ani</h3>
              <p className="text-gray-600">
                Garanție completă 2 ani pentru montaj și echipamente, cu service gratuit în perioada de garanție.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection 
        title="Clienți mulțumiți - Sisteme siguranță"
        maxItems={3} 
      />

      {/* FAQ Section */}
      <FAQSection 
        type="siguranta"
        title="Întrebări frecvente - Senzori și electrovalve"
        maxItems={6}
      />

      {/* CTA Section */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Protejează-ți familia cu sisteme automate!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nu lasa la întâmplare siguranța celor dragi. Montaj profesional cu echipamente certificate și garanție completă.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Montaj sisteme: 0722.619.097
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro?subject=Montaj%20Senzori%20Electrovalve&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20trimiteți%20informații%20despre%20montaj%20senzori%20gaze%20și%20electrovalve.%0D%0A%0D%0ADetalii:%0D%0A-%20Tipul%20proprietății:%0D%0A-%20Suprafața:%0D%0A-%20Puncte%20gaz%20existente:%0D%0A-%20Adresa:%0D%0A-%20Telefon%20contact:%0D%0A%0D%0AMulțumesc!" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Solicită ofertă
              <img src="/img/vector-12.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}