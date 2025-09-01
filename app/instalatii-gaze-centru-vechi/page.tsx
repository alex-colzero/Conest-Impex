import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { FAQSection } from '../../src/components/FAQSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Instalații gaze Centru Vechi Constanța - Clădiri istorice | CONEST',
  description: 'Specialist instalații gaze pentru clădiri istorice din Centrul Vechi. Experiență cu imobile monument istoric. Autorizat ANRE ☎️ 0722.619.097',
  keywords: 'instalații gaze centru vechi, gaze clădiri istorice Constanța, branșament gaz Ovidiu, instalator Peninsula',
  openGraph: {
    title: 'Instalații gaze Centru Vechi - Specialist clădiri istorice',
    description: 'Instalații gaze pentru imobile vechi și monumente istorice din Centrul Constanței.',
    url: 'https://conest-gaze-centrale.ro/instalatii-gaze-centru-vechi',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function InstallatiiGazeCentruVechi() {
  const historicServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Instalații gaze pentru clădiri istorice",
    "description": "Servicii specializate instalații gaze pentru imobile monument istoric și clădiri vechi",
    "provider": {
      "@type": "LocalBusiness",
      "name": "CONEST IMPEX SRL",
      "telephone": "+40-722-619-097",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Centrul Vechi",
        "addressLocality": "Constanța",
        "addressCountry": "RO"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Peninsula - Centrul Istoric Constanța",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "44.1728",
        "longitude": "28.6580"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicii pentru clădiri istorice",
      "itemListElement": [
        "Instalații gaze discrete pentru monumente",
        "Trasee speciale pentru pereți groși",
        "Centrale termice silențioase",
        "Restaurare instalații vechi"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(historicServiceSchema) }}
      />
      
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[#f2b721]/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-6">
                <span className="text-sm font-semibold">SPECIALIST CLĂDIRI ISTORICE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Instalații gaze
                <span className="block text-[#f2b721] mt-2">Centrul Vechi Constanța</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Experiență unică în instalații pentru clădiri istorice și monumente. 
                Soluții discrete care păstrează arhitectura originală.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <p className="text-sm mb-2">Acoperim toată Peninsula istorică:</p>
                <p className="text-lg">Piața Ovidiu • Str. Marc Aureliu • Muzeul de Artă • Moscheea Carol</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:0722619097" className="inline-flex items-center bg-[#f2b721] text-[#05213c] px-6 py-3 rounded-lg font-semibold hover:bg-[#f2b721]/90 transition">
                  <img src="/img/vector-16.svg" alt="Phone" className="w-5 h-5 mr-2" />
                  Consultanță: 0722.619.097
                </a>
                <Link href="/certificari-anre-iscir" className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition">
                  Vezi certificări →
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Experiență dovedită:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f2b721] mt-1">✓</span>
                    <div>
                      <strong>200+ clădiri vechi modernizate</strong>
                      <p className="text-sm opacity-90">Case interbelice, vile istorice</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f2b721] mt-1">✓</span>
                    <div>
                      <strong>Pereți de 80cm+ grosime</strong>
                      <p className="text-sm opacity-90">Tehnologii speciale de forare</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f2b721] mt-1">✓</span>
                    <div>
                      <strong>Avize monumente istorice</strong>
                      <p className="text-sm opacity-90">Colaborare cu Direcția Monumentelor</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f2b721] mt-1">✓</span>
                    <div>
                      <strong>Zero deteriorări arhitecturale</strong>
                      <p className="text-sm opacity-90">Instalații complet reversibile</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            Provocări specifice Centrului Vechi - Soluții CONEST
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Pereți groși de piatră</h3>
              <p className="text-[#303030] mb-4">
                Clădirile din Centrul Vechi au pereți de 60-100cm grosime.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold text-green-700">Soluția noastră:</p>
                <p className="text-sm">Foreze diamantate + trasee optimizate minimal invazive</p>
              </div>
            </div>
            
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Păstrarea aspectului</h3>
              <p className="text-[#303030] mb-4">
                Fațadele și interioarele trebuie păstrate intact.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold text-green-700">Soluția noastră:</p>
                <p className="text-sm">Conducte mascate, centrale ascunse, finisaje restaurate</p>
              </div>
            </div>
            
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Avize speciale</h3>
              <p className="text-[#303030] mb-4">
                Monumentele necesită aprobări suplimentare.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold text-green-700">Soluția noastră:</p>
                <p className="text-sm">Asistență completă documentație și avizare rapidă</p>
              </div>
            </div>
            
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Zgomot minim</h3>
              <p className="text-[#303030] mb-4">
                Vecinătate densă, pereți subțiri între apartamente.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold text-green-700">Soluția noastră:</p>
                <p className="text-sm">Centrale ultra-silențioase + izolare fonică suplimentară</p>
              </div>
            </div>
            
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Infrastructură veche</h3>
              <p className="text-[#303030] mb-4">
                Instalații electrice și conducte învechite.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold text-green-700">Soluția noastră:</p>
                <p className="text-sm">Modernizare integrată cu protecții suplimentare</p>
              </div>
            </div>
            
            <div className="bg-[#f3f2ef] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Acces dificil</h3>
              <p className="text-[#303030] mb-4">
                Străzi înguste, curți interioare complexe.
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold text-green-700">Soluția noastră:</p>
                <p className="text-sm">Echipamente compacte + logistică specializată</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            Proiecte realizate în Centrul Istoric
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#05213c] mb-6">Clădiri rezidențiale istorice:</h3>
              <ul className="space-y-4">
                <li className="bg-white rounded-lg p-4">
                  <strong>Vila 1920 - Strada Marc Aureliu</strong>
                  <p className="text-sm text-gray-600">Instalație completă gaze cu păstrarea stucaturilor originale</p>
                </li>
                <li className="bg-white rounded-lg p-4">
                  <strong>Bloc interbelic - Piața Ovidiu</strong>
                  <p className="text-sm text-gray-600">12 apartamente, centrale individuale mascate</p>
                </li>
                <li className="bg-white rounded-lg p-4">
                  <strong>Casă monument - Strada Traian</strong>
                  <p className="text-sm text-gray-600">Trasee invizibile, centrală în pivniță voûtată</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#05213c] mb-6">Spații comerciale & culturale:</h3>
              <ul className="space-y-4">
                <li className="bg-white rounded-lg p-4">
                  <strong>Restaurant traditional - Peninsula</strong>
                  <p className="text-sm text-gray-600">Sistem încălzire discret pentru 150 locuri</p>
                </li>
                <li className="bg-white rounded-lg p-4">
                  <strong>Galerie de artă - Centrul Vechi</strong>
                  <p className="text-sm text-gray-600">Climat controlat pentru conservare opere</p>
                </li>
                <li className="bg-white rounded-lg p-4">
                  <strong>Hotel boutique - Port istoric</strong>
                  <p className="text-sm text-gray-600">20 camere, sistem centralizat invizibil</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            De ce proprietarii din Centrul Vechi aleg CONEST
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                27+
              </div>
              <h3 className="font-bold text-[#05213c] mb-2">Ani experiență</h3>
              <p className="text-sm text-gray-600">Cunoaștem fiecare tip de clădire veche din Constanța</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                0
              </div>
              <h3 className="font-bold text-[#05213c] mb-2">Deteriorări cauzate</h3>
              <p className="text-sm text-gray-600">Tehnici non-invazive pentru păstrarea patrimoniului</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                100%
              </div>
              <h3 className="font-bold text-[#05213c] mb-2">Avize obținute</h3>
              <p className="text-sm text-gray-600">Toate proiectele aprobate de autoritățile competente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
            Aveți o clădire istorică în Centrul Vechi?
          </h2>
          <p className="text-xl mb-8">
            Oferim consultanță gratuită și soluții personalizate care respectă 
            caracterul istoric al imobilului dumneavoastră.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <p className="text-lg mb-2">Specialist clădiri istorice:</p>
            <p className="text-3xl font-bold text-[#f2b721]">0722.619.097</p>
            <p className="text-sm mt-2">Evaluare gratuită la fața locului</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0722619097" className="inline-flex items-center bg-[#f2b721] text-[#05213c] px-8 py-4 rounded-lg font-semibold hover:bg-[#f2b721]/90 transition text-lg">
              <img src="/img/vector-16.svg" alt="Phone" className="w-6 h-6 mr-2" />
              Programează evaluare gratuită
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