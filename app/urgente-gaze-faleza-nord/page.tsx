import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Urgențe gaze Faleza Nord Constanța - Intervenție 24/7 | CONEST',
  description: 'Urgențe instalații gaze Faleza Nord. Miros de gaz, scurgeri, centrale defecte. Intervenție rapidă zona Cazino, Rex, Pescărie ☎️ URGENȚE: 0744.579.715',
  keywords: 'urgențe gaze Faleza Nord, miros gaz Cazino Constanța, scurgere gaz Rex, instalator urgență Pescărie',
  openGraph: {
    title: 'Urgențe gaze Faleza Nord - Non-Stop 24/7 | CONEST',
    description: 'Intervenții urgente instalații gaze în Faleza Nord. Acoperim zona Cazino, Rex, Pescărie.',
    url: 'https://conest-gaze-centrale.ro/urgente-gaze-faleza-nord',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function UrgenteGazeFalezaNord() {
  const emergencySchema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": "CONEST - Urgențe Gaze Faleza Nord",
    "description": "Servicii urgențe instalații gaze 24/7 în zona Faleza Nord Constanța",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Faleza Nord",
      "addressLocality": "Constanța",
      "addressRegion": "Constanța",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.1789",
      "longitude": "28.6595"
    },
    "telephone": "+40-744-579-715",
    "openingHours": "Mo-Su 00:00-23:59",
    "availableService": [
      "Detectare scurgeri gaze",
      "Reparații urgente centrale termice",
      "Închidere urgentă alimentare gaz",
      "Verificare instalații după cutremur"
    ],
    "areaServed": ["Faleza Nord", "Cazino", "Rex", "Pescărie", "Port Tomis"]
  };

  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }}
      />
      
      <SharedHeader />

      {/* Emergency Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-red-700 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="animate-pulse w-3 h-3 bg-white rounded-full mr-2"></span>
              <span className="text-sm font-semibold">SERVICIU URGENȚE 24/7</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
              Urgențe gaze Faleza Nord
              <span className="block text-[#f2b721] mt-2">Intervenție imediată</span>
            </h1>
            <p className="text-2xl mb-8">
              Miros de gaz? Centrală defectă? Sunați ACUM!
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-xl mb-4 font-bold">Timp mediu intervenție Faleza Nord:</p>
              <p className="text-4xl font-bold text-[#f2b721]">10-20 minute</p>
              <p className="text-sm mt-2">Cazino: 10 min | Rex: 12 min | Pescărie: 15 min</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0744579715" className="inline-flex items-center bg-[#f2b721] text-[#05213c] px-8 py-4 rounded-lg font-bold hover:bg-[#f2b721]/90 transition text-xl animate-pulse">
                URGENȚE: 0744.579.715
              </a>
              <a href="tel:0722619097" className="inline-flex items-center bg-white text-red-700 px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition text-xl">
                Programări: 0722.619.097
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-700 mb-12 text-center [font-family:'Poppins',Helvetica]">
            Situații de urgență pe care le rezolvăm în Faleza Nord
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4">Miros de gaz</h3>
              <ul className="space-y-2 text-[#303030]">
                <li>• Detectare rapidă cu echipamente profesionale</li>
                <li>• Identificare și izolare scurgere</li>
                <li>• Reparație imediată</li>
                <li>• Verificare completă instalație</li>
              </ul>
              <p className="mt-4 font-bold text-red-700">CE SĂ FACI:</p>
              <p className="text-sm">1. Închide gazul 2. Deschide geamurile 3. Nu folosi electricitate 4. Sună-ne!</p>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Centrală nu pornește</h3>
              <ul className="space-y-2 text-[#303030]">
                <li>• Diagnosticare rapidă</li>
                <li>• Reparație la fața locului</li>
                <li>• Piese de schimb disponibile</li>
                <li>• Repornire și testare</li>
              </ul>
              <p className="mt-4 font-bold text-orange-700">Probleme frecvente iarna:</p>
              <p className="text-sm">Senzori înghețați, presiune scăzută, aprindere defectă</p>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-700 mb-4">Presiune scăzută</h3>
              <ul className="space-y-2 text-[#303030]">
                <li>• Verificare întreaga instalație</li>
                <li>• Detectare pierderi</li>
                <li>• Reglare presiune optimă</li>
                <li>• Prevenție probleme viitoare</li>
              </ul>
              <p className="mt-4 font-bold text-yellow-700">Zone afectate des:</p>
              <p className="text-sm">Blocurile vechi de pe faleză, clădiri istorice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Coverage */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            Acoperire completă Faleza Nord - Timp garantat
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#05213c] mb-6">Zone acoperite non-stop:</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                  <span className="font-semibold">Zona Cazino</span>
                  <span className="text-green-600 font-bold">10 minute</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                  <span className="font-semibold">Hotel Rex & Împrejurimi</span>
                  <span className="text-green-600 font-bold">12 minute</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                  <span className="font-semibold">Zona Pescărie</span>
                  <span className="text-green-600 font-bold">15 minute</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                  <span className="font-semibold">Port Tomis Marina</span>
                  <span className="text-green-600 font-bold">15 minute</span>
                </div>
                <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                  <span className="font-semibold">Plaja Modern</span>
                  <span className="text-green-600 font-bold">18 minute</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#05213c] mb-6">De ce suntem cei mai rapizi:</h3>
              <div className="bg-white rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-2xl">✓</span>
                    <div>
                      <strong>Echipă dedicată Faleza Nord</strong>
                      <p className="text-sm text-gray-600">Tehnician de gardă permanent în zonă</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-2xl">✓</span>
                    <div>
                      <strong>Mașină service echipată complet</strong>
                      <p className="text-sm text-gray-600">Piese și unelte pentru orice urgență</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-2xl">✓</span>
                    <div>
                      <strong>Cunoaștem perfect zona</strong>
                      <p className="text-sm text-gray-600">27 ani experiență în cartier</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-2xl">✓</span>
                    <div>
                      <strong>Prioritate clienți existenți</strong>
                      <p className="text-sm text-gray-600">Istoric complet instalații pentru intervenții rapide</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            Cum funcționează serviciul de urgență
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Sunați non-stop</h3>
              <p className="text-sm">0744.579.715 disponibil 24/7, inclusiv sărbători</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Diagnostic telefonic</h3>
              <p className="text-sm">Vă ghidăm pentru siguranță imediată</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Deplasare rapidă</h3>
              <p className="text-sm">10-20 minute în Faleza Nord</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Rezolvare completă</h3>
              <p className="text-sm">Reparație definitivă, nu provizorii</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
            Nu riscați! La prima suspiciune, sunați!
          </h2>
          <p className="text-xl mb-8">
            Siguranța familiei dumneavoastră este prioritatea noastră. 
            Intervenție garantată în maxim 20 minute în Faleza Nord.
          </p>
          <a href="tel:0744579715" className="inline-flex items-center bg-[#f2b721] text-[#05213c] px-10 py-5 rounded-lg font-bold hover:bg-[#f2b721]/90 transition text-2xl animate-pulse">
            URGENȚE NON-STOP: 0744.579.715
          </a>
          <p className="mt-6 text-sm">
            Salvați acest număr în telefon! Poate fi vital în caz de urgență.
          </p>
        </div>
      </section>

      <TestimonialsSection />
      <FooterSection />
    </div>
  )
}