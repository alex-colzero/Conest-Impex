import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { FAQSection } from '../../src/components/FAQSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Pregătire centrală iarna - Check-up sezonier Constanța',
  description: 'Pregătire centrală termică pentru iarna. Check-up complet, curățare, reglaje și verificări ISCIR. Evitați problemele de încălzire ☎️ 0722.619.097',
  keywords: 'pregatire centrala iarna, check-up centrala, revizie iarna, service toamna, mentenanta centrala',
  openGraph: {
    title: 'Pregătire centrală iarna - Check-up sezonier Constanța',
    description: 'Service preventiv pentru pregătirea centralei termice înaintea sezonului rece.',
    url: 'https://conest.ro/pregatire-centrala-iarna',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function PregatireCentralaIarna() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cum să îți pregătești centrala pentru iarnă",
    "description": "Ghid complet pentru pregătirea centralei termice înaintea sezonului rece",
    "totalTime": "PT2H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "RON",
      "value": "150-300"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Verificarea generală",
        "text": "Inspectează centrala pentru fisuri, coroziune sau piese uzate"
      },
      {
        "@type": "HowToStep", 
        "name": "Curățarea schimbătorului",
        "text": "Elimină depunerile calcară și sedimentele din schimbătorul de căldură"
      },
      {
        "@type": "HowToStep",
        "name": "Verificarea combustiei",
        "text": "Controlează arderea, reglează presiunea gazului și curăță arzătorul"
      },
      {
        "@type": "HowToStep",
        "name": "Testarea siguranțelor",
        "text": "Verifică funcționarea tuturor sistemelor de siguranță și protecție"
      }
    ],
    "tool": ["Multimetru", "Manometre", "Soluții curățare", "Piese originale"]
  };

  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Pregătire centrală pentru iarnă
                <span className="block text-[#f2b721] mt-2">Check-up sezonier complet</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Evitați problemele de încălzire pe timp de ger! Check-up complet al centralei termice 
                înaintea sezonului rece. Service preventiv pentru funcționare optimă.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Verificări complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Curățare profesională</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Garanție lucrare</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Programează pregătire centrală
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="/img/hero-1.png" 
                alt="Pregătire centrală pentru iarnă" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Checklist pregătire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Checklist pregătire centrală iarnă
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verificările esențiale pentru o iarnă fără probleme de încălzire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl border-l-4 border-[#f2b721]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-[#f2b721] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-xl font-semibold text-[#05213c]">Verificare generală</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Inspectare vizuală pentru fisuri</li>
                <li>• Control conexiuni și racorduri</li>
                <li>• Verificare etanșeitate circuit gaz</li>
                <li>• Control coș fum și ventilație</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl border-l-4 border-[#f2b721]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-[#f2b721] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-semibold text-[#05213c]">Curățare tehnică</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Curățare schimbător de căldură</li>
                <li>• Eliminare depuneri calcară</li>
                <li>• Curățare arzător și cameră combustie</li>
                <li>• Spălare circuit primar și secundar</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl border-l-4 border-[#f2b721]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-[#f2b721] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-xl font-semibold text-[#05213c]">Reglaje și testări</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Reglaj presiune instalație</li>
                <li>• Calibrare termostatul</li>
                <li>• Test funcționare pompe circulație</li>
                <li>• Verificare parametri combustie</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl border-l-4 border-[#f2b721]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-[#f2b721] rounded-full flex items-center justify-center text-white font-bold">4</div>
                <h3 className="text-xl font-semibold text-[#05213c]">Sisteme siguranță</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Test supapă siguranță presiune</li>
                <li>• Verificare detector gaze</li>
                <li>• Control electrovalvă</li>
                <li>• Test protecții termice</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl border-l-4 border-[#f2b721]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-[#f2b721] rounded-full flex items-center justify-center text-white font-bold">5</div>
                <h3 className="text-xl font-semibold text-[#05213c]">Consumabile</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Înlocuire filtre uzate</li>
                <li>• Completare lichid antigel</li>
                <li>• Înlocuire garnituri deteriorate</li>
                <li>• Control vas expansiune</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl border-l-4 border-[#f2b721]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-[#f2b721] rounded-full flex items-center justify-center text-white font-bold">6</div>
                <h3 className="text-xl font-semibold text-[#05213c]">Raport final</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Evaluare stare generală</li>
                <li>• Recomandări întreținere</li>
                <li>• Plan service preventiv</li>
                <li>• Certificat conformitate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Probleme frecvente iarna */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Probleme frecvente pe timp de ger
            </h2>
            <p className="text-xl text-gray-600">
              Ce poate merge prost dacă centrala nu e pregătită pentru iarnă
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Centrala nu pornește</h3>
              <p className="text-gray-600 mb-4">Electrozi uzați, filtru înfundat sau probleme presiune gaz.</p>
              <div className="text-red-600 font-semibold">Risc: Fără încălzire în plină iarnă</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Randament scăzut</h3>
              <p className="text-gray-600 mb-4">Schimbător înfundat cu calcară, arzător murdar.</p>
              <div className="text-orange-600 font-semibold">Risc: Consum crescut cu 30-50%</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Înghețare instalații</h3>
              <p className="text-gray-600 mb-4">Circulație slabă, lipsa antigelului sau izolație deficitară.</p>
              <div className="text-red-600 font-semibold">Risc: Avarii costisitoare pe ger</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Pierderi presiune</h3>
              <p className="text-gray-600 mb-4">Garnituri îmbătrânite, dilatații termice.</p>
              <div className="text-yellow-600 font-semibold">Risc: Opriri frecvente</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Scurgeri gaze</h3>
              <p className="text-gray-600 mb-4">Îmbinări slăbite, rosirea țevilor, șuruburi necalibrate.</p>
              <div className="text-red-600 font-semibold">Risc: Pericol de explozie</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">Blocaj pompe</h3>
              <p className="text-gray-600 mb-4">Pompe circulație înfundate cu murdărie.</p>
              <div className="text-orange-600 font-semibold">Risc: Încălzire neuniformă</div>
            </div>
          </div>

          <div className="mt-12 text-center bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Atenție!</h3>
            <p className="text-red-700">
              Un service preventiv toamna costă 150-250 RON, dar poate preveni avarii de mii de lei în plină iarnă. 
              Nu risca să rămâi fără încălzire când afară sunt -15°C!
            </p>
          </div>
        </div>
      </section>

      {/* Calendar optim pregătire */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Calendar optim pregătire centrală
            </h2>
            <p className="text-xl text-gray-600">
              Când să programezi service-ul pentru rezultate optime
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Perioada ideală</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="font-semibold">Septembrie - Octombrie</span>
                </div>
                <p className="text-green-700 ml-9">
                  Temperaturi moderate, disponibilitate tehniciieni, preturi normale
                </p>
                
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="font-semibold">Avantaje perioada</span>
                </div>
                <ul className="text-green-700 ml-9 space-y-1">
                  <li>• Timp suficient pentru reparații</li>
                  <li>• Piese de schimb disponibile</li>
                  <li>• Programări flexibile</li>
                  <li>• Preturi de sezon</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-xl border border-red-200">
              <h3 className="text-2xl font-semibold text-red-800 mb-6">De evitat</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✗</div>
                  <span className="font-semibold">Noiembrie - Februarie</span>
                </div>
                <p className="text-red-700 ml-9">
                  Cerere mare, disponibilitate redusă, preturi majorate
                </p>
                
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✗</div>
                  <span className="font-semibold">Dezavantaje perioada</span>
                </div>
                <ul className="text-red-700 ml-9 space-y-1">
                  <li>• Așteptare 3-7 zile</li>
                  <li>• Preturi majorate 20-40%</li>
                  <li>• Risc lipsa piese</li>
                  <li>• Condiții meteo dificile</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Recomandarea noastră</h3>
            <p className="text-blue-700">
              Programează service-ul preventiv în <strong>septembrie</strong> pentru rezultate optime și costuri reduse. 
              În perioada octombrie-noiembrie oferim <strong>reducere 15%</strong> pentru programările anticipate.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection 
        title="Clienți mulțumiți - Service preventiv"
        maxItems={3} 
      />

      {/* FAQ Section */}
      <FAQSection 
        type="pregatire"
        title="Întrebări frecvente - Pregătire centrală iarnă"
        maxItems={6}
      />

      {/* CTA Section */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Pregătește-ți centrala pentru iarnă!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Programează service preventiv acum și evită surprizele neplăcute pe timp de ger. Garanție 12 luni la lucrare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Service preventiv: 0722.619.097
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro?subject=Pregătire%20Centrală%20Iarnă&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20programați%20un%20service%20preventiv%20pentru%20pregătirea%20centralei%20pentru%20iarnă.%0D%0A%0D%0ADetalii:%0D%0A-%20Marca%20centrală:%0D%0A-%20Anul%20montării:%0D%0A-%20Ultima%20revizie:%0D%0A-%20Adresa:%0D%0A-%20Telefon%20contact:%0D%0A%0D%0AMulțumesc!" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Programează prin email
              <img src="/img/vector-12.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}