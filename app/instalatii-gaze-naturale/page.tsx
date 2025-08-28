import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { FAQSection } from '../../src/components/FAQSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Instalații gaze naturale Constanța - Autorizate ANRE | Conest',
  description: 'Instalații gaze naturale profesionale în Constanța și județ. Autorizați ANRE și ISCIR. Proiectare, execuție și punere în funcțiune cu garanție 2 ani. ☎️ 0722.619.097',
  keywords: 'instalații gaze naturale, instalatii gaze constanta, branșament gaze, conducte gaze, autorizare ANRE',
  openGraph: {
    title: 'Instalații gaze naturale Constanța - Autorizate ANRE',
    description: 'Servicii complete instalații gaze naturale. Autorizați ANRE și ISCIR cu experiență de peste 27 ani.',
    url: 'https://conest.ro/instalatii-gaze-naturale',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function InstallatiiGazeNaturale() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Instalații gaze naturale
                <span className="block text-[#f2b721] mt-2">Autorizate ANRE</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Servicii complete de instalații gaze naturale în Constanța și județ. 
                Proiectare, execuție și punere în funcțiune cu autorizație ANRE și garanție 2 ani.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Autorizat ANRE</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Certificat ISCIR</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Garanție 2 Ani</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Solicită Ofertă Gratuită
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="/img/hero-1.png" 
                alt="Instalații gaze naturale profesionale" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Servicii instalații gaze naturale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Execuția completă a instalațiilor de gaze naturale - de la documentațiile inițiale până la punerea în funcțiune
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Executarea instalației de utilizare" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Executarea instalației de utilizare</h3>
              <p className="text-gray-600">
                Montarea conductei între branșament și aparatele consumatoare de gaz inclusiv instalarea <Link href="/sisteme-siguranta" className="text-[#f2b721] hover:underline">dispozitivelor de detecție și siguranță</Link>.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Aparate" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Conectare aparate</h3>
              <p className="text-gray-600">
                Conectarea și punerea în funcțiune a aparatelor consumatoare: <Link href="/centrale-termice" className="text-[#f2b721] hover:underline">centrale termice</Link>, aragaze, cuptoare.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Proiectare" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Proiectare tehnică</h3>
              <p className="text-gray-600">
                Elaborarea proiectului tehnic conform normelor ANRE. Calcule de dimensionare și planuri de execuție.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Avizare" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Avizare ANRE</h3>
              <p className="text-gray-600">
                Obținerea tuturor avizelor și autorizațiilor necesare de la ANRE pentru punerea în funcțiune.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Garanție" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Garanție & service</h3>
              <p className="text-gray-600">
                Garanție completă 2 ani pentru toate lucrările executate. Service post-garanție și mentenanță periodică.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Procesul de instalare
            </h2>
            <p className="text-xl text-gray-600">
              Pași simpli pentru instalarea gazelor naturale la tine acasă
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Consultare gratuită</h3>
              <p className="text-gray-600">Evaluarea locației și stabilirea cerințelor tehnice</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Proiectare & avizare</h3>
              <p className="text-gray-600">Elaborarea proiectului și obținerea autorizațiilor ANRE</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Execuție lucrări</h3>
              <p className="text-gray-600">Instalarea conductelor și conectarea aparatelor</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Punere în funcțiune</h3>
              <p className="text-gray-600">Testarea sistemului și eliberarea certificatelor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection 
        title="Clienți mulțumiți - Instalații gaze naturale"
        maxItems={3} 
      />

      {/* FAQ Section */}
      <FAQSection 
        type="gas"
        title="Întrebări frecvente - Instalații gaze"
        maxItems={4}
      />

      {/* CTA Section */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Ai nevoie de instalație gaze naturale?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactează-ne pentru o consultare gratuită și o ofertă personalizată
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Sună Acum: 0722.619.097
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro?subject=Ofertă%20Instalații%20Gaze%20Naturale%20Constanța&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20trimiteți%20o%20ofertă%20pentru%20instalații%20gaze%20naturale%20în%20zona%20Constanța.%0D%0A%0D%0ADetalii%20proprietate:%0D%0A-%20Tip:%20apartament/casă%0D%0A-%20Suprafața:%0D%0A-%20Locația:%0D%0A-%20Observații:%0D%0A%0D%0AMulțumesc!" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Trimite Email pentru Ofertă
              <img src="/img/vector-12.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Location-Specific Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              🗺️ Servicii specializate pe zone
            </h2>
            <p className="text-xl text-gray-600">
              Echipe specializate pentru fiecare zonă din Constanța cu intervenții rapide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#f2b721]">
              <h3 className="text-2xl font-bold text-[#05213c] mb-4 flex items-center">
                <span className="text-3xl mr-3">🏠</span>
                Instalații gaze Constanța sud
              </h3>
              <p className="text-gray-600 mb-6">
                Servicii specializate pentru cartierele Tomis, CET și Campus. Echipă locală cu depozit în zonă pentru intervenții în 30 minute.
              </p>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                <li>• Tomis Mall și zona comercială</li>
                <li>• Blocuri și ansambluuri din CET</li>
                <li>• Campus Universitar Ovidius</li>
              </ul>
              <Link 
                href="/instalatii-gaze-constanta-sud"
                className="inline-flex items-center gap-2 bg-[#f2b721] text-[#05213c] px-6 py-3 rounded-lg font-semibold hover:bg-[#e0a61d] transition-colors"
              >
                Vezi Servicii Zona Sud →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-[#05213c] mb-4 flex items-center">
                <span className="text-3xl mr-3">🔥</span>
                Centrale termice Constanța nord
              </h3>
              <p className="text-gray-600 mb-6">
                Service specializat pentru zona de nord: Inel 1, Inel 2 și Zona Industrială. Certificat ISCIR cu urgențe 24/7.
              </p>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                <li>• Cartiere Inel 1 și Inel 2</li>
                <li>• Zona industrială nord</li>
                <li>• Service pentru toate mărcile</li>
              </ul>
              <Link 
                href="/centrale-termice-constanta-nord"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Vezi Service Zona Nord →
              </Link>
            </div>
          </div>

          <div className="bg-green-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              🏆 De ce să alegi o firmă autorizată ANRE?
            </h3>
            <p className="text-lg mb-6">
              Verifică toate certificările noastre și află de ce autorizarea ANRE este obligatorie pentru siguranța ta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/instalator-gaze-autorizat-anre-constanta"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📜 Vezi Autorizația ANRE
              </Link>
              <Link 
                href="/certificari-anre-iscir"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                🔍 Toate Certificările
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Help Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 [font-family:'Poppins',Helvetica]">
              🚨 Probleme cu gazele? Ajutor imediat!
            </h2>
            <p className="text-xl text-gray-700">
              Ghiduri de siguranță și soluții pentru cele mai frecvente probleme
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
              <h3 className="text-lg font-bold text-red-700 mb-3">⚠️ Gaz scurs</h3>
              <p className="text-gray-600 text-sm mb-4">
                Ce să faci imediat dacă simți miros de gaz în casă
              </p>
              <Link 
                href="/gaz-scurs-ce-fac"
                className="text-red-600 font-semibold hover:text-red-800 text-sm transition-colors"
              >
                Vezi Ghidul →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
              <h3 className="text-lg font-bold text-orange-700 mb-3">❄️ Centrala nu pornește</h3>
              <p className="text-gray-600 text-sm mb-4">
                Soluții rapide pentru când centrala nu funcționează iarna
              </p>
              <Link 
                href="/centrala-nu-porneste-iarna"
                className="text-orange-600 font-semibold hover:text-orange-800 text-sm transition-colors"
              >
                Rezolvă Acum →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-600">
              <h3 className="text-lg font-bold text-yellow-700 mb-3">🏢 Miros gaz apartament</h3>
              <p className="text-gray-600 text-sm mb-4">
                Protocol special pentru problemele de gaze în blocuri
              </p>
              <Link 
                href="/miros-gaz-apartament"
                className="text-yellow-600 font-semibold hover:text-yellow-800 text-sm transition-colors"
              >
                Vezi Protocoale →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-600">
              <h3 className="text-lg font-bold text-purple-700 mb-3">📉 Presiune scăzută</h3>
              <p className="text-gray-600 text-sm mb-4">
                Diagnosticare și soluții pentru presiunea scăzută la gaze
              </p>
              <Link 
                href="/presiune-scazuta-gaze"
                className="text-purple-600 font-semibold hover:text-purple-800 text-sm transition-colors"
              >
                Diagnostică →
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">
              <strong>Urgențe gaze 24/7:</strong> Sună imediat pentru probleme grave de siguranță
            </p>
            <a 
              href="tel:0744579715"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
            >
              🚨 0744.579.715 - Urgențe Gaze
            </a>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Servicii conexe
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Centrale termice</h3>
              <p className="text-gray-600 mb-4">
                Montaj și service centrale termice pentru instalațiile de gaze naturale.
              </p>
              <Link 
                href="/centrale-termice"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi Servicii Centrale →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Revizii ANRE</h3>
              <p className="text-gray-600 mb-4">
                Verificări tehnice obligatorii la 2 ani pentru instalațiile de gaze.
              </p>
              <Link 
                href="/revizii-anre"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Programează Revizia →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Sisteme siguranță</h3>
              <p className="text-gray-600 mb-4">
                Detectoare de gaze și sisteme de siguranță pentru protecție maximă.
              </p>
              <Link 
                href="/sisteme-siguranta"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi Sisteme →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Ai întrebări despre serviciile noastre?
            </p>
            <Link 
              href="/intrebari-frecvente"
              className="inline-flex items-center gap-2 text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
            >
              Consultă FAQ-ul nostru
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}