import { Metadata } from 'next'
import Link from 'next/link'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Lucrări Naționale - Instalații Gaze România | Conest',
  description: 'Proiecte naționale de instalații gaze naturale și centrale termice. Experiență în proiecte mari în toată România. Autorizat ANRE și ISCIR. ☎️ 0722.619.097',
  keywords: 'lucrari nationale, proiecte mari, instalatii gaze Romania, centrale termice, ANRE ISCIR',
}

export const dynamic = 'force-dynamic'

const navigationItems = [
  { label: "Servicii", href: "/" },
  { label: "FAQ", href: "/intrebari-frecvente" },
];

export default function LucrariNationale() {
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
              Lucrări Naționale
              <span className="block text-[#f2b721] mt-2">Proiecte Mari România</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-4xl mx-auto">
              27 ani de experiență în proiecte de amploare. Executăm lucrări complexe de instalații gaze 
              și centrale termice în toată România pentru dezvoltatori, hoteluri și proiecte comerciale.
            </p>
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Discută Proiectul Tău
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Tipuri de Proiecte Naționale
            </h2>
            <p className="text-xl text-gray-600">Experiență în diverse sectoare și tipuri de proiecte</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Complexe Rezidențiale</h3>
              <p className="text-gray-600 mb-4">Instalații pentru ansambluri rezidențiale mari</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Blocuri cu 100+ apartamente</li>
                <li>• Sisteme centralizate de distribuție</li>
                <li>• Centrale în cascade</li>
                <li>• Rețele de distribuție complexe</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Hoteluri & Resort-uri</h3>
              <p className="text-gray-600 mb-4">Soluții pentru industria turistică</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Hoteluri 4-5 stele</li>
                <li>• Resort-uri all-inclusive</li>
                <li>• Spa & wellness center</li>
                <li>• Sisteme pentru piscine încălzite</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Proiecte Industriale</h3>
              <p className="text-gray-600 mb-4">Instalații pentru industrie și comerț</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Centre comerciale</li>
                <li>• Fabrici și ateliere</li>
                <li>• Spații logistice</li>
                <li>• Centrale de cogenerare</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Clădiri Publice</h3>
              <p className="text-gray-600 mb-4">Instituții publice și spitale</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Spitale și clinici</li>
                <li>• Școli și universități</li>
                <li>• Clădiri administrative</li>
                <li>• Sisteme cu redundanță</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Sere & Agricultură</h3>
              <p className="text-gray-600 mb-4">Proiecte pentru sectorul agricol</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Sere încălzite cu gaze</li>
                <li>• Ferme de animale</li>
                <li>• Instalații pentru uscarea produselor</li>
                <li>• Sisteme de control automat</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Modernizări</h3>
              <p className="text-gray-600 mb-4">Upgrade sisteme existente</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Conversie de la cărbune la gaze</li>
                <li>• Modernizare centrale vechi</li>
                <li>• Sisteme de management energetic</li>
                <li>• Eficiență energetică</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* National Coverage */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Acoperire Națională
            </h2>
            <p className="text-xl text-gray-600">Proiecte realizate în întreaga țară</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-[#05213c] mb-3">🏛️ Regiunea Constanța</h3>
              <p className="text-gray-600 text-sm">Proiecte majore în zona metropolitană</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-[#05213c] mb-3">🌊 Litoral</h3>
              <p className="text-gray-600 text-sm">Hoteluri și complexe turistice</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-[#05213c] mb-3">⛰️ Transilvania</h3>
              <p className="text-gray-600 text-sm">Proiecte industriale și comerciale</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-[#05213c] mb-3">🏞️ Moldova & Oltenia</h3>
              <p className="text-gray-600 text-sm">Instalații pentru agricultură și industrie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Large Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              De Ce Să Ne Alegeți pentru Proiecte Mari?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">💼 Experiență Dovedită</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#f2b721] font-bold">✓</span>
                  <div>
                    <strong className="text-[#05213c]">27 ani pe piață</strong>
                    <p className="text-gray-600 text-sm">Experiență consolidată din 1996</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f2b721] font-bold">✓</span>
                  <div>
                    <strong className="text-[#05213c]">Peste 200 proiecte mari</strong>
                    <p className="text-gray-600 text-sm">Portfolio diversificat de succese</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f2b721] font-bold">✓</span>
                  <div>
                    <strong className="text-[#05213c]">Echipă de 15+ specialiști</strong>
                    <p className="text-gray-600 text-sm">Personal calificat ANRE și ISCIR</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">🛡️ Siguranță și Conformitate</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#f2b721] font-bold">✓</span>
                  <div>
                    <strong className="text-[#05213c]">Toate autorizațiile în regulă</strong>
                    <p className="text-gray-600 text-sm">ANRE, ISCIR, ISC în vigoare</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f2b721] font-bold">✓</span>
                  <div>
                    <strong className="text-[#05213c]">Asigurare RCA 500.000€</strong>
                    <p className="text-gray-600 text-sm">Acoperire pentru proiecte mari</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f2b721] font-bold">✓</span>
                  <div>
                    <strong className="text-[#05213c]">Respectarea deadlines</strong>
                    <p className="text-gray-600 text-sm">Istoric impecabil de livrare la timp</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Projects */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Hai să Discutăm Proiectul Tău
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Oferim consultanță gratuită și analiză de fezabilitate pentru proiecte mari
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Consultanță Gratuită</h3>
              <p className="text-gray-300 text-sm">Analiză și evaluare proiect</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ofertă Detaliată</h3>
              <p className="text-gray-300 text-sm">Preț fix și timeline clar</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Parteneriat</h3>
              <p className="text-gray-300 text-sm">Suport pe toată durata proiectului</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Sună pentru Proiecte Mari
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro?subject=Proiect%20Național%20-%20Ofertă&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20trimiteți%20o%20ofertă%20pentru%20un%20proiect%20național%20de%20instalații%20gaze%20și%20centrale%20termice.%0D%0A%0D%0ADetalii%20proiect:%0D%0A-%20Tip%20proiect:%0D%0A-%20Locația:%0D%0A-%20Suprafața%20aproximativă:%0D%0A-%20Numărul%20de%20apartamente/unități:%0D%0A-%20Termen%20estimat:%0D%0A%0D%0AMulțumesc!" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Trimite Detalii Proiect
              <img src="/img/vector-12.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}