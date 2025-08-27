import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { FAQSection } from '../../src/components/FAQSection'
import { PricingSection } from '../../src/components/PricingSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Revizii ANRE Constanța - Verificări Tehnice Obligatorii | Conest',
  description: 'Revizii ANRE și verificări tehnice periodice în Constanța. Certificat de conformitate eliberat în aceeași zi. Autorizat ANRE ☎️ 0722.619.097',
  keywords: 'revizii ANRE, verificari tehnice, certificat conformitate, revizie gaze, control ANRE constanta',
  openGraph: {
    title: 'Revizii ANRE - Verificări Tehnice Obligatorii',
    description: 'Servicii complete de revizii ANRE și verificări tehnice. Certificat de conformitate în aceeași zi.',
    url: 'https://conest.ro/revizii-anre',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function ReviziiANRE() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Revizii ANRE
                <span className="block text-[#f2b721] mt-2">Verificări Obligatorii</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Servicii complete de revizii și verificări tehnice periodice conform normelor ANRE. 
                Certificat de conformitate eliberat în aceeași zi.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Autorizat ANRE</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Certificat în Aceeași Zi</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Verificare la 2 Ani</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Programează Revizia
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="/img/hero-1.png" 
                alt="Revizii ANRE profesionale" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              De Ce Sunt Obligatorii Reviziile ANRE?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conform legislației în vigoare, instalațiile de gaze naturale trebuie verificate periodic pentru siguranța utilizatorilor
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Obligație Legală</h3>
              <p className="text-gray-600">
                Verificarea tehnică la 2 ani este obligatorie conform Ordinului ANRE nr. 22/2007
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Siguranță</h3>
              <p className="text-gray-600">
                Verificăm starea instalației pentru prevenirea accidentelor și scurgerilor de gaze
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Conformitate</h3>
              <p className="text-gray-600">
                Certificatul de conformitate este necesar pentru contractul cu furnizorul de gaze
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ ATENȚIE - Sancțiuni pentru Nerespectarea Termenelor</h3>
            <ul className="text-red-700 space-y-2">
              <li>• Amenzi de la 500 la 2.500 lei pentru persoane fizice</li>
              <li>• Amenzi de la 2.500 la 25.000 lei pentru persoane juridice</li>
              <li>• Oprirea furnizării gazelor naturale de către distribuitor</li>
              <li>• Imposibilitatea încheierii contractului de furnizare</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Ce Include Revizia ANRE
            </h2>
            <p className="text-xl text-gray-600">
              Verificare completă conform normativelor ANRE cu eliberarea certificatului de conformitate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Verificare Vizuală</h3>
              <p className="text-gray-600">
                Controlul stării conductelor, conectiunilor, aparatelor și sistemelor de ventilație
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📏</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Măsurători Tehnice</h3>
              <p className="text-gray-600">
                Verificarea presiunii de lucru și testarea etanșeității instalației cu aparate certificate
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌬️</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Control Ventilație</h3>
              <p className="text-gray-600">
                Verificarea sistemelor de ventilare și evacuare a gazelor arse conform normelor
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Verificare Electrică</h3>
              <p className="text-gray-600">
                Controlul instalației electrice a aparatelor consumatoare și sistemelor de siguranță
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Documentație</h3>
              <p className="text-gray-600">
                Verificarea documentelor instalației și întocmirea procesului verbal de revizie
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Certificat Conformitate</h3>
              <p className="text-gray-600">
                Eliberarea certificatului de conformitate valabil 2 ani de la data verificării
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Când Trebuie Făcută Revizia?
            </h2>
            <p className="text-xl text-gray-600">
              Termene obligatorii pentru verificările tehnice periodice
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 p-6 bg-[#f9f9f9] rounded-lg">
              <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center font-bold text-[#05213c]">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#05213c] mb-2">Instalații Noi</h3>
                <p className="text-gray-600">
                  Prima revizie se face la <strong>2 ani</strong> de la data punerii în funcțiune a instalației
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-[#f9f9f9] rounded-lg">
              <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center font-bold text-[#05213c]">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#05213c] mb-2">Revizii Ulterioare</h3>
                <p className="text-gray-600">
                  Următoarele revizii se fac din <strong>2 în 2 ani</strong> de la data ultimei verificări
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-[#f9f9f9] rounded-lg">
              <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center font-bold text-[#05213c]">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#05213c] mb-2">Modificări Instalație</h3>
                <p className="text-gray-600">
                  După orice modificare a instalației trebuie făcută o <strong>nouă verificare</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-red-50 border border-red-200 rounded-lg">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                ⚠️
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-2">Depășirea Termenului</h3>
                <p className="text-red-700">
                  Depășirea termenului de 2 ani poate duce la <strong>oprirea furnizării gazelor</strong> și aplicarea de amenzi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Cum Funcționează?
            </h2>
            <p className="text-xl text-gray-600">
              Proces simplu și rapid - de la programare la obținerea certificatului
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Programare</h3>
              <p className="text-gray-600">Suni și programezi revizia la o dată convenabilă</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Verificare</h3>
              <p className="text-gray-600">Tehnicienii efectuează verificarea completă (1-2 ore)</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Procesul Verbal</h3>
              <p className="text-gray-600">Se întocmește procesul verbal cu rezultatele verificării</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Certificat</h3>
              <p className="text-gray-600">Primești certificatul de conformitate în aceeași zi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 [font-family:'Poppins',Helvetica]">
            Tarife Revizii ANRE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-[#f2b721] rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-4">Apartament</h3>
              <div className="text-4xl font-bold text-[#f2b721] mb-4">250 lei</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li>✓ Verificare instalație interioară</li>
                <li>✓ Control aparate consumatoare</li>
                <li>✓ Verificare ventilație</li>
                <li>✓ Certificat de conformitate</li>
                <li>✓ Valabilitate 2 ani</li>
              </ul>
            </div>

            <div className="border-2 border-[#f2b721] rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-4">Casă/Vilă</h3>
              <div className="text-4xl font-bold text-[#f2b721] mb-4">350 lei</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li>✓ Verificare instalație completă</li>
                <li>✓ Control branșament exterior</li>
                <li>✓ Verificare toate aparatele</li>
                <li>✓ Control multiple puncte ventilație</li>
                <li>✓ Certificat de conformitate</li>
                <li>✓ Valabilitate 2 ani</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 mt-6">
            *Tarifele includ deplasarea în Constanța și județul Constanța. Pentru defecțiuni depistate se oferă ofertă separată pentru remediere.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Programează Revizia ANRE
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nu aștepta să expire termenul! Programează revizia acum și evită amenzile și oprirea gazelor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Programează Acum: 0722.619.097
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro?subject=Ofertă%20Revizii%20ANRE%20Constanța&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20trimiteți%20o%20ofertă%20pentru%20revizie%20ANRE%20în%20zona%20Constanța.%0D%0A%0D%0ADetalii:%0D%0A-%20Tip%20proprietate:%20apartament/casă%0D%0A-%20Suprafața:%0D%0A-%20Numărul%20aparatelor%20de%20gaze:%0D%0A-%20Adresa:%0D%0A-%20Telefon%20contact:%0D%0A%0D%0AMulțumesc!" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Trimite Email pentru Ofertă
              <img src="/img/vector-12.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection 
        type="revizii"
        title="Tarife Revizii ANRE"
        subtitle="Prețuri transparente cu certificat de conformitate inclus"
      />

      {/* FAQ Section */}
      <FAQSection 
        type="revizii"
        title="Întrebări Frecvente - Revizii ANRE"
        maxItems={4}
      />

      <FooterSection />
    </div>
  )
}