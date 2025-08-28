import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Modernizare și Smart Home - Eficiență Energetică | Conest',
  description: 'Modernizarea instalațiilor de gaze și integrare cu sisteme Smart Home în Constanța. Eficiență energetică maximă și control inteligent.',
  keywords: 'modernizare instalatii gaze, smart home, eficienta energetica, automatizare, control inteligent',
}

export const dynamic = 'force-dynamic'

export default function ModernizareSmartHome() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Modernizare
                <span className="block text-[#f2b721] mt-2">& Smart Home</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Transformă-ți casa într-o casă inteligentă! Modernizează instalațiile existente și 
                integrează sisteme smart pentru confort maxim și eficiență energetică.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Economii 30-50%</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Control de la Distanță</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Automatizare Completă</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Modernizează Casa Ta
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="/img/hero-1.png" 
                alt="Modernizare și Smart Home" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modernization Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              De Ce Să Modernizezi Instalațiile?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instalațiile vechi sunt costisitoare și ineficiente. Modernizarea aduce beneficii imediate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">LEI</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Economii mari</h3>
              <p className="text-gray-600">
                Reduce consumul cu 30-50% prin optimizarea sistemului de încălzire
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">°C</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Confort maxim</h3>
              <p className="text-gray-600">
                Temperatură constantă în toată casa, controlată automat
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">CASA</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Valoare proprietate</h3>
              <p className="text-gray-600">
                Creșterea valorii casei cu 10-15% prin modernizare
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-700">APP</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Control smart</h3>
              <p className="text-gray-600">
                Controlează tot de pe telefon, de oriunde te-ai afla
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Servicii de Modernizare
            </h2>
            <p className="text-xl text-gray-600">
              De la upgrade-uri simple la transformarea completă în casă inteligentă
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">UPGRADE</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Înlocuire centrale vechi</h3>
              <p className="text-gray-600 mb-4">
                Înlocuirea centralelor vechi cu modele noi, eficiente energetic cu tehnologie condensare
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Eficiență 95-108%</li>
                <li>• Economii 30% combustibil</li>
                <li>• Funcționare silențioasă</li>
                <li>• Garanție extinsă</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">TERMO</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Termostate inteligente</h3>
              <p className="text-gray-600 mb-4">
                Montaj termostate smart care învață rutinele tale și optimizează automat temperatura
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Control pe zone</li>
                <li>• Programare avansată</li>
                <li>• Detectare prezență</li>
                <li>• Aplicație mobilă</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">SERVICE</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Optimizare rețea</h3>
              <p className="text-gray-600 mb-4">
                Reechilibrarea sistemului de încălzire pentru distribuție uniformă a căldurii
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Curățare sistem</li>
                <li>• Înlocuire robinete</li>
                <li>• Izolare țevi</li>
                <li>• Echilibrare hidraulică</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">AUTO</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Automatizare completă</h3>
              <p className="text-gray-600 mb-4">
                Sisteme complete de automatizare care controlează încălzirea, ventilatia și apa caldă
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Scenarii pre-programate</li>
                <li>• Control vocal</li>
                <li>• Integrare cu Alexa/Google</li>
                <li>• Monitorizare consumuri</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">HIBRID</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Sisteme hibride</h3>
              <p className="text-gray-600 mb-4">
                Combinarea gazelor cu surse regenerabile: pompe de căldură, panouri solare
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Gaze + pompă căldură</li>
                <li>• Panouri solare termice</li>
                <li>• Switchare automată</li>
                <li>• Economii maximale</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">MONITOR</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Monitorizare avansată</h3>
              <p className="text-gray-600 mb-4">
                Sisteme de monitorizare care urmăresc consumurile și optimizează eficiența
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Contorazare pe zone</li>
                <li>• Rapoarte detaliate</li>
                <li>• Alerte economii</li>
                <li>• Istoric consumuri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Integration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Integrare Smart Home
            </h2>
            <p className="text-xl text-gray-600">
              Conectează instalația de gaze la ecosystemul tau smart home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-700">VOCE</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Control vocal</h3>
              <p className="text-gray-600">
                "Alexa, pune 22 de grade în living" sau "Hey Google, oprește încălzirea"
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-700">MOBIL</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Aplicație mobilă</h3>
              <p className="text-gray-600">
                Controlează de oriunde temperatura, verifică consumurile și primește alerte
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-700">SISTEM</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Integrare sisteme</h3>
              <p className="text-gray-600">
                Conectare cu sisteme de securitate, iluminat smart, management energie
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#f2b721] to-[#e0a61d] rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-[#05213c] mb-4 text-center">
              Exemplu Casă Smart Completă
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-[#05213c]">
              <div>
                <h4 className="font-semibold mb-2">Dimineața (7:00):</h4>
                <ul className="text-sm space-y-1">
                  <li>• Centrala pornește automat</li>
                  <li>• Temperatura crește la 23°C</li>
                  <li>• Apa caldă se pregătește</li>
                  <li>• Primești notificare pe telefon</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Seara (22:00):</h4>
                <ul className="text-sm space-y-1">
                  <li>• Temperatura scade la 20°C</li>
                  <li>• Încălzirea se oprește în unele camere</li>
                  <li>• Sistemul trece în modul economic</li>
                  <li>• Raport zilnic de consum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 [font-family:'Poppins',Helvetica]">
            Cât de Repede îți Recuperezi Investiția?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-[#f2b721] mb-2">2-3 ani</div>
              <h3 className="font-semibold text-[#05213c] mb-2">Modernizare completă</h3>
              <p className="text-gray-600 text-sm">Înlocuirea centralei + termostate smart</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-[#f2b721] mb-2">1-2 ani</div>
              <h3 className="font-semibold text-[#05213c] mb-2">Sisteme hibride</h3>
              <p className="text-gray-600 text-sm">Gaze + pompă de căldură</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-[#f2b721] mb-2">6-12 luni</div>
              <h3 className="font-semibold text-[#05213c] mb-2">Optimizare sistem</h3>
              <p className="text-gray-600 text-sm">Termostate + echilibrare</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Calculul Rapid al Economiilor
            </h3>
            <div className="text-green-700">
              <p className="mb-2">Factură actuală încălzire: <strong>500 lei/lună</strong></p>
              <p className="mb-2">După modernizare: <strong>300 lei/lună</strong> (economie 40%)</p>
              <p className="text-lg font-semibold">Economii anuale: <strong>2.400 lei</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Gata să Modernizezi Casa?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Începe cu o consultanță gratuită și află cât poți economisi prin modernizare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Consultanță Modernizare Gratuită
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro?subject=Ofertă%20Smart%20Home%20Constanța&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20calculați%20economiile%20pentru%20modernizare%20smart%20home%20în%20Constanța.%0D%0A%0D%0ADetalii%20proprietate:%0D%0A-%20Tip:%20apartament/casă%0D%0A-%20Suprafața:%0D%0A-%20Locația:%0D%0A-%20Sistem%20actual%20încălzire:%0D%0A%0D%0AMulțumesc!" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Calculează Economiile Tale
              <img src="/img/vector-12.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}