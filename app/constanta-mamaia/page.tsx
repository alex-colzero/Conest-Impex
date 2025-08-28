import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Instalații gaze Constanța și Mamaia - Centrale termice | Conest',
  description: 'Instalații gaze naturale și centrale termice în Constanța și Mamaia. Service autorizat ANRE și ISCIR. Experiență 27 ani. ☎️ 0722.619.097',
  keywords: 'instalatii gaze Constanta, centrale termice Mamaia, service gaze Constanta, ANRE ISCIR',
}

export const dynamic = 'force-dynamic'

export default function ConstantaMamaia() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Instalații Gaze
                <span className="block text-[#f2b721] mt-2">Constanța & Mamaia</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Servicii complete de instalații gaze naturale și centrale termice în Constanța și Mamaia. 
                Sediul nostru principal și 27 ani de experiență locală.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Sediul în Constanța</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>27 Ani Experiență</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Intervenție Rapidă</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Sună pentru Ofertă Locală
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="/img/hero-1.png" 
                alt="Instalații gaze Constanța și Mamaia" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              De Ce Constanța Este Zona Noastră de Expertiză?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suntem locali din 1996 și cunoaștem perfect specificul zonei
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Sediul Principal</h3>
              <p className="text-gray-600">
                Sediul nostru este în Constanța, ceea ce înseamnă timp de răspuns minim și 
                costuri reduse pentru deplasare.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌊</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Specificul Marin</h3>
              <p className="text-gray-600">
                Cunoaștem perfect provocările climatice ale zonei marine: umiditatea ridicată, 
                sarea din aer și coroziunea accelerată.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Relații Locale</h3>
              <p className="text-gray-600">
                Colaborări de lungă durată cu autoritățile locale, furnizori și distribuitorii 
                de gaze din zona Constanța.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Zone Acoperite în Constanța
            </h2>
            <p className="text-xl text-gray-600">
              Servicii complete în toate cartierele și zonele din Constanța și Mamaia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-[#05213c] mb-3">🏙️ Centrul Vechi</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Piața Ovidiu</li>
                <li>• Strada Ștefan cel Mare</li>
                <li>• Zona Portului</li>
                <li>• Cartierul Istoric</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-[#05213c] mb-3">🌊 Mamaia</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Mamaia Nord</li>
                <li>• Mamaia Centru</li>
                <li>• Mamaia Sud</li>
                <li>• Zona Hotelieră</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-[#05213c] mb-3">🏘️ Cartiere Noi</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Tomis Plus</li>
                <li>• City Park Mall</li>
                <li>• Zona Gării CFR</li>
                <li>• Coiciu</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-[#05213c] mb-3">🏭 Zone Industriale</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Zona Portului</li>
                <li>• Compozitorilor</li>
                <li>• Palazu Mare</li>
                <li>• Km 4-5</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Proiecte Realizate în Constanța
            </h2>
            <p className="text-xl text-gray-600">
              Peste 3000 de instalații realizate în zona Constanța-Mamaia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f2b721] mb-2">2500+</div>
              <h3 className="font-semibold text-[#05213c] mb-2">Apartamente</h3>
              <p className="text-gray-600 text-sm">Instalații gaze în blocuri și apartamente din Constanța</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#f2b721] mb-2">400+</div>
              <h3 className="font-semibold text-[#05213c] mb-2">Case și Vile</h3>
              <p className="text-gray-600 text-sm">Instalații complete în case particulare și vile din Mamaia</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#f2b721] mb-2">150+</div>
              <h3 className="font-semibold text-[#05213c] mb-2">Clădiri Comerciale</h3>
              <p className="text-gray-600 text-sm">Hoteluri, restaurante și spații comerciale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Specific Services */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Adaptate pentru Climatul Marin
            </h2>
            <p className="text-xl text-gray-600">
              Soluții special adaptate pentru zona de coastă
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">🛡️ Protecție Anti-Coroziune</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Materiale rezistente la sare și umiditate</li>
                <li>• Tratamente speciale pentru țevile exterioare</li>
                <li>• Verificări mai frecvente pentru conexiuni</li>
                <li>• Protecție suplimentară pentru echipamente</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">❄️ Adaptare la Vârfuri de Consum</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Dimensionare pentru sezonul estival</li>
                <li>• Sisteme eficiente pentru hoteluri</li>
                <li>• Centrale adaptate pentru folosire intermitentă</li>
                <li>• Service rapid în perioada aglomerată</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Local */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Contactați Echipa Locală
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Suntem în Constanța și putem ajunge rapid oriunde în zonă
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sediul Nostru</h3>
              <p className="text-gray-300">Constanța, România</p>
              <p className="text-gray-300">Timp deplasare: 0-15 minute în oraș</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zone Acoperite</h3>
              <p className="text-gray-300">Constanța, Mamaia</p>
              <p className="text-gray-300">Deplasare gratuită în oraș</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Sună Echipa Locală: 0722.619.097
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}