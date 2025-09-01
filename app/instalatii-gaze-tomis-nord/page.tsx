import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { FAQSection } from '../../src/components/FAQSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Instalații gaze Tomis Nord Constanța - Intervenții rapide | CONEST',
  description: 'Instalații gaze naturale în Tomis Nord. Branșamente, extinderi, revizii ANRE. Aproape de City Park Mall și Spitalul Județean. Urgențe 24/7 ☎️ 0722.619.097',
  keywords: 'instalații gaze Tomis Nord, branșament gaz City Park Mall, instalator autorizat Tomis Nord, urgențe gaze Spitalul Județean',
  openGraph: {
    title: 'Instalații gaze Tomis Nord - Autorizat ANRE | CONEST',
    description: 'Servicii complete instalații gaze în cartierul Tomis Nord. Intervenții rapide în zona City Park Mall.',
    url: 'https://conest-gaze-centrale.ro/instalatii-gaze-tomis-nord',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function InstallatiiGazeTomisNord() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CONEST - Instalații Gaze Tomis Nord",
    "description": "Servicii instalații gaze naturale în cartierul Tomis Nord Constanța",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tomis Nord",
      "addressLocality": "Constanța",
      "addressRegion": "Constanța",
      "postalCode": "900xxx",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.1965",
      "longitude": "28.6310"
    },
    "url": "https://conest-gaze-centrale.ro/instalatii-gaze-tomis-nord",
    "telephone": "+40-722-619-097",
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "44.1965",
        "longitude": "28.6310"
      },
      "geoRadius": "2000"
    },
    "priceRange": "$$",
    "serviceArea": ["Tomis Nord", "City Park Mall", "Spitalul Județean", "Campus"]
  };

  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Instalații gaze naturale
                <span className="block text-[#f2b721] mt-2">Tomis Nord Constanța</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Servicii complete de instalații gaze în cartierul Tomis Nord. 
                Intervenții rapide în zona City Park Mall, Spitalul Județean și Campus universitar.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <p className="text-sm mb-2">🚨 Timp mediu de intervenție în Tomis Nord:</p>
                <p className="text-2xl font-bold text-[#f2b721]">15-25 minute</p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href="tel:0722619097" className="inline-flex items-center bg-[#f2b721] text-[#05213c] px-6 py-3 rounded-lg font-semibold hover:bg-[#f2b721]/90 transition">
                  <img src="/img/vector-16.svg" alt="Phone" className="w-5 h-5 mr-2" />
                  Sună Acum: 0722.619.097
                </a>
                <a href="tel:0744579715" className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                  Urgențe 24/7: 0744.579.715
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Zone deservite în Tomis Nord:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                    <span>City Park Mall și împrejurimi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                    <span>Spitalul Județean Constanța</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                    <span>Campus Universitar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                    <span>Bulevardul Tomis (integral)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                    <span>Strada Ștefăniță Vodă</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            Servicii instalații gaze în Tomis Nord
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Branșamente noi</h3>
              <ul className="space-y-2 text-[#303030]">
                <li>• Apartamente în blocurile din Tomis Nord</li>
                <li>• Case și vile zona Campus</li>
                <li>• Spații comerciale City Park Mall</li>
                <li>• Proiectare și avizare ANRE</li>
              </ul>
            </div>
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Revizii și verificări</h3>
              <ul className="space-y-2 text-[#303030]">
                <li>• Revizii periodice ANRE</li>
                <li>• Verificări ISCIR centrale</li>
                <li>• Detectare scurgeri gaze</li>
                <li>• Certificate conformitate</li>
              </ul>
            </div>
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Urgențe 24/7</h3>
              <ul className="space-y-2 text-[#303030]">
                <li>• Miros de gaz în apartament</li>
                <li>• Centrale defecte</li>
                <li>• Presiune scăzută gaze</li>
                <li>• Intervenție rapidă 15-25 min</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            De ce locuitorii din Tomis Nord aleg CONEST?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Cunoaștem zona perfect</h3>
              <p className="text-[#303030] mb-4">
                Cu peste 27 ani de experiență în Constanța, am realizat sute de instalații în Tomis Nord.
                Cunoaștem specificul blocurilor din zonă, presiunea gazelor în fiecare stradă și toate 
                cerințele tehnice locale.
              </p>
              <ul className="space-y-2 text-[#303030]">
                <li>✓ Lucrări în blocurile ANL din zonă</li>
                <li>✓ Instalații în clădirile de birouri de pe Tomis</li>
                <li>✓ Service pentru magazinele din City Park Mall</li>
                <li>✓ Întreținere sisteme gaze Spitalul Județean</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Intervenție rapidă garantată</h3>
              <p className="text-[#303030] mb-4">
                Echipa noastră mobilă acoperă permanent zona Tomis Nord. În caz de urgență, 
                ajungem la dumneavoastră în maximum 25 minute, 24/7.
              </p>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-[#05213c] mb-3">Timpii noștri de răspuns:</h4>
                <ul className="space-y-2 text-[#303030]">
                  <li>🏢 City Park Mall: 10-15 minute</li>
                  <li>🏥 Spitalul Județean: 15-20 minute</li>
                  <li>🎓 Campus Universitar: 15-20 minute</li>
                  <li>🏘️ Blocuri Tomis Nord: 15-25 minute</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
            Ai nevoie de un instalator de gaze în Tomis Nord?
          </h2>
          <p className="text-xl mb-8">
            Suntem la doar un telefon distanță. Oferim consultanță gratuită și deviz la fața locului.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0722619097" className="inline-flex items-center bg-[#f2b721] text-[#05213c] px-8 py-4 rounded-lg font-semibold hover:bg-[#f2b721]/90 transition text-lg">
              <img src="/img/vector-16.svg" alt="Phone" className="w-6 h-6 mr-2" />
              Programare: 0722.619.097
            </a>
            <Link href="/instalatii-gaze-naturale" className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition text-lg">
              Vezi toate serviciile →
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}