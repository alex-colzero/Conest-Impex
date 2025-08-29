import { Metadata } from 'next'
import Link from 'next/link'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Instalații Gaze Năvodari și Medgidia | Conest',
  description: 'Instalații gaze naturale și centrale termice în Năvodari și Medgidia. Service autorizat ANRE și ISCIR cu deplasare gratuită. ☎️ 0722.619.097',
  keywords: 'instalatii gaze Navodari, centrale termice Medgidia, service gaze, ANRE ISCIR',
}

export const dynamic = 'force-dynamic'

const navigationItems = [
  { label: "Servicii", href: "/" },
  { label: "FAQ", href: "/intrebari-frecvente" },
];

export default function NavodariMedgidia() {
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
              <span className="block text-[#f2b721] mt-2">Năvodari & Medgidia</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Servicii complete de instalații gaze naturale și centrale termice în Năvodari și Medgidia. 
              Deplasare gratuită și experiență locală de 27 ani.
            </p>
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Solicită Ofertă pentru Zona Ta
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Services in Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Servicii Complete în Năvodari și Medgidia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Instalații Gaze Case</h3>
              <p className="text-gray-600">Proiectare și execuție completă pentru case particulare și vile în Năvodari și Medgidia</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Blocuri Apartamente</h3>
              <p className="text-gray-600">Instalații pentru blocuri noi și modernizarea celor existente cu toate autorizațiile</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Centrale Termice</h3>
              <p className="text-gray-600">Montaj, service și mentenanță centrale pentru toate mărcile cu garanție completă</p>
            </div>
          </div>
        </div>
      </section>

      {/* Area Coverage */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#05213c] mb-8 [font-family:'Poppins',Helvetica]">
            ⏱️ Timp de Răspuns Rapid
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">🌊 Năvodari</h3>
              <p className="text-gray-600 mb-4">Deplasare: 15-20 minute din Constanța</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>✓ Zone rezidențiale</li>
                <li>✓ Complexe noi</li>
                <li>✓ Zona portului</li>
                <li>✓ Cartiere centrale</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">🏭 Medgidia</h3>
              <p className="text-gray-600 mb-4">Deplasare: 25-30 minute din Constanța</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>✓ Centrul orașului</li>
                <li>✓ Cartiere periferice</li>
                <li>✓ Zone industriale</li>
                <li>✓ Case particulare</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}