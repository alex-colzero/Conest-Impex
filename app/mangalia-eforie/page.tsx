import { Metadata } from 'next'
import Link from 'next/link'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Instalații gaze Mangalia și Eforie | Conest',
  description: 'Instalații gaze naturale și centrale termice în Mangalia și Eforie. Service pentru zona de sud. Autorizat ANRE și ISCIR. ☎️ 0722.619.097',
  keywords: 'instalatii gaze Mangalia, centrale termice Eforie, service gaze sud, ANRE ISCIR',
}

export const dynamic = 'force-dynamic'

const navigationItems = [
  { label: "Servicii", href: "/" },
  { label: "FAQ", href: "/intrebari-frecvente" },
];

export default function MangaliaEforie() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      {/* Navigation Header */}
      <header className="w-full flex items-center max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-[50px] py-[30px] justify-between relative bg-[#f5f4f1] min-h-[90px]">
        <Link href="/" className="flex items-center">
          <div className="relative w-[196px] h-9">
            <div className="relative h-[35px] left-px bg-[url(/img/wordmark-7.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[35px] h-[35px] top-0 left-[37px]"
                alt="Vector"
                src="/img/vector-79.svg"
              />
            </div>
          </div>
        </Link>
        
        <nav className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-[55px]">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-[22px] hover:text-[#f2b721] transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="tel:0722619097"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-[18px] bg-[#f2b721] rounded-[20px] hover:bg-[#e0a61d] transition-colors"
            >
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px]">
                COMENZI
              </span>
              <img className="w-[23.75px] h-6" alt="Phone" src="/img/phoneicon-7.svg" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
              Instalații Gaze
              <span className="block text-[#f2b721] mt-2">Mangalia & Eforie</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Servicii specializate pentru zona de sud a litoralului. 
              Instalații gaze și centrale termice pentru hoteluri, pensiuni și case de vacanță.
            </p>
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Service pentru Zona de Sud
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Coastal Specific Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Servicii Specializate pentru Litoral
            </h2>
            <p className="text-xl text-gray-600">Soluții adaptate pentru specificul zonei marine</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Hoteluri & Pensiuni</h3>
              <p className="text-gray-600">Instalații pentru unități de cazare cu sisteme de încălzire centralizată și distribuție optimizată</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏖️</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Case de Vacanță</h3>
              <p className="text-gray-600">Soluții pentru folosire sezonieră cu sisteme eficiente și întreținere minimă</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Protecție Anti-Coroziune</h3>
              <p className="text-gray-600">Materiale și tratamente speciale pentru rezistența la mediul marin agresiv</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Zone Acoperite în Sud
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">🏛️ Mangalia</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Centrul istoric</li>
                <li>✓ Zone hoteliere</li>
                <li>✓ Cartiere rezidențiale</li>
                <li>✓ Complexe noi</li>
                <li>✓ Zona portului</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">🌊 Eforie Nord & Sud</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Zona lacului</li>
                <li>✓ Eforie Sud - pensiuni</li>
                <li>✓ Eforie Nord - hoteluri</li>
                <li>✓ Case particulare</li>
                <li>✓ Complexe turistice</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">⏰ Program Sezonier Extins</h3>
            <p className="text-blue-700">
              În sezonul estival (Mai-Septembrie) oferim program extins și intervenții prioritare 
              pentru unitățile turistice din Mangalia și Eforie.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}