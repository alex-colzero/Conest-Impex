import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { FAQSection } from '../../src/components/FAQSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Instalații Gaze Naturale Constanța - Autorizate ANRE | Conest',
  description: 'Instalații gaze naturale profesionale în Constanța și județ. Autorizați ANRE și ISCIR. Proiectare, execuție și punere în funcțiune cu garanție 2 ani. ☎️ 0722.619.097',
  keywords: 'instalații gaze naturale, instalatii gaze constanta, branșament gaze, conducte gaze, autorizare ANRE',
  openGraph: {
    title: 'Instalații Gaze Naturale Constanța - Autorizate ANRE',
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
                Instalații Gaze Naturale
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
              Servicii Instalații Gaze Naturale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Execuția completă a instalațiilor de gaze naturale - de la documentațiile inițiale până la punerea în funcțiune
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-[#f9f9f9] p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src="/img/icon-29.png" alt="Executarea instalației de utilizare" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Executarea instalației de utilizare</h3>
              <p className="text-gray-600">
                Montarea conductei între branșament și aparatele consumatoare de gaz inclusiv instalarea <Link href="/sisteme-siguranta" className="text-[#f2b721] hover:underline">dispozitivelor de detecție și siguranță</Link>.
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
              Procesul de Instalare
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
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Consultare Gratuită</h3>
              <p className="text-gray-600">Evaluarea locației și stabilirea cerințelor tehnice</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Proiectare & Avizare</h3>
              <p className="text-gray-600">Elaborarea proiectului și obținerea autorizațiilor ANRE</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Execuție Lucrări</h3>
              <p className="text-gray-600">Instalarea conductelor și conectarea aparatelor</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Punere în Funcțiune</h3>
              <p className="text-gray-600">Testarea sistemului și eliberarea certificatelor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection 
        title="Clienți Mulțumiți - Instalații Gaze Naturale"
        maxItems={3} 
      />

      {/* FAQ Section */}
      <FAQSection 
        type="gas"
        title="Întrebări Frecvente - Instalații Gaze"
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

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Servicii Conexe
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Centrale Termice</h3>
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
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Sisteme Siguranță</h3>
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