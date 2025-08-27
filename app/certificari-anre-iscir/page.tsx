import { Metadata } from 'next'
import Link from 'next/link'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Certificări ANRE & ISCIR - Autorizații Conest Gaze și Centrale',
  description: 'Certificări și autorizații ANRE și ISCIR pentru instalații gaze naturale și centrale termice. Documentații oficiale Conest Constanța.',
  keywords: 'certificari ANRE, autorizatii ISCIR, instalatii gaze, centrale termice, Conest, documentatii',
}

export const dynamic = 'force-dynamic'

const navigationItems = [
  { label: "Servicii", href: "/" },
  { label: "FAQ", href: "/intrebari-frecvente" },
];

export default function CertificariANREISCIR() {
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
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
            Certificări ANRE & ISCIR
          </h1>
          <p className="text-xl leading-relaxed">
            Autorizații și certificări oficiale pentru instalații gaze naturale și centrale termice
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* ANRE Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-[#05213c]">ANRE</span>
            </div>
            <h2 className="text-3xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Autoritatea Națională de Reglementare în Energie
            </h2>
            <p className="text-xl text-gray-600">
              Autorizați oficial pentru instalații gaze naturale conform normelor europene
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Ce Este ANRE?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                ANRE (Autoritatea Națională de Reglementare în domeniul Energiei) este autoritatea 
                de reglementare independentă care supraveghează piața energiei din România, 
                inclusiv sectorul gazelor naturale.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Reglementează piața gazelor naturale</li>
                <li>Autorizează operatorii din sector</li>
                <li>Stabilește normele tehnice de siguranță</li>
                <li>Monitorizează respectarea legislației</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Autorizațiile Noastre ANRE</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Instalații Gaze Naturale</h4>
                  <p className="text-green-700 text-sm">
                    Autorizație pentru proiectare, execuție și punere în funcțiune instalații gaze naturale
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Verificări Tehnice</h4>
                  <p className="text-green-700 text-sm">
                    Autorizație pentru efectuarea reviziilor și verificărilor tehnice periodice
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Punere în Funcțiune</h4>
                  <p className="text-green-700 text-sm">
                    Drept de a elibera certificate de conformitate și autorizații de funcționare
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">📋 Ce Înseamnă Autorizarea ANRE?</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li><strong>Competență tehnică verificată:</strong> personal calificat și instruit</li>
              <li><strong>Echipamente certificate:</strong> aparate de măsură etalonate</li>
              <li><strong>Respectarea normelor:</strong> conformitate cu legislația în vigoare</li>
              <li><strong>Asigurare RCA:</strong> acoperire pentru eventuale daune</li>
              <li><strong>Monitorizare continuă:</strong> verificări periodice ale ANRE</li>
            </ul>
          </div>
        </div>

        {/* ISCIR Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-[#05213c]">ISCIR</span>
            </div>
            <h2 className="text-3xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Inspecția de Stat pentru Controlul Cazanelor
            </h2>
            <p className="text-xl text-gray-600">
              Certificați pentru service și montaj centrale termice și instalații de încălzire
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Ce Este ISCIR?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                ISCIR (Inspecția de Stat pentru Controlul Cazanelor, Recipientelor sub Presiune 
                și Instalațiilor de Ridicat) este autoritatea care supraveghează securitatea 
                echipamentelor sub presiune, inclusiv centralele termice.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Controlează echipamentele sub presiune</li>
                <li>Autorizează personalul de specialitate</li>
                <li>Verifică respectarea normelor de siguranță</li>
                <li>Eliberează certificate de conformitate</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Certificările Noastre ISCIR</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ RVT - Reparare și Verificare Tehnică</h4>
                  <p className="text-green-700 text-sm">
                    Autorizație pentru repararea și verificarea tehnică a centralelor termice
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ RSL - Reparare și Service Locativ</h4>
                  <p className="text-green-700 text-sm">
                    Certificare pentru service centrale termice în sectorul rezidențial
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Montaj și Demontaj</h4>
                  <p className="text-green-700 text-sm">
                    Drept de montaj și demontaj centrale termice cu eliberarea documentelor necesare
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">🔧 Avantajele Certificării ISCIR</h3>
            <ul className="list-disc list-inside text-orange-700 space-y-2">
              <li><strong>Personal calificat:</strong> tehnicienii au pregătire specializată</li>
              <li><strong>Siguranță maximă:</strong> respectarea strictă a normelor de siguranță</li>
              <li><strong>Garanție legală:</strong> service autorizat cu documente oficiale</li>
              <li><strong>Toate mărcile:</strong> competență pe toate tipurile de centrale</li>
              <li><strong>Urgențe 24/7:</strong> intervenții rapide în situații critice</li>
            </ul>
          </div>
        </div>

        {/* Certificates Display */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Documentele Noastre Oficiale
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-[#f9f9f9] p-6 rounded-lg mb-4">
                <div className="w-16 h-20 bg-[#f2b721] rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="font-semibold text-[#05213c] mb-2">Certificat ANRE</h3>
                <p className="text-sm text-gray-600">Autorizație instalații gaze naturale</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#f9f9f9] p-6 rounded-lg mb-4">
                <div className="w-16 h-20 bg-[#f2b721] rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-[#05213c] mb-2">Certificat ISCIR</h3>
                <p className="text-sm text-gray-600">RVT și RSL pentru centrale termice</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#f9f9f9] p-6 rounded-lg mb-4">
                <div className="w-16 h-20 bg-[#f2b721] rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-[#05213c] mb-2">Asigurare RCA</h3>
                <p className="text-sm text-gray-600">Acoperire 100.000 Euro pentru servicii</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Toate certificările sunt în regulă și verificabile la autoritățile competente
            </p>
            <a 
              href="tel:0722619097"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Verifică Certificările Noastre
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            De Ce Să Alegeți o Firmă Autorizată?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">⚠️ Riscurile Firmelor Neautorizate</h3>
              <ul className="list-disc list-inside text-red-700 space-y-2">
                <li>Instalații neconforme - risc de accidente</li>
                <li>Lipsă certificat de conformitate</li>
                <li>Probleme cu asigurarea de locuință</li>
                <li>Amenzi ANRE pentru proprietari</li>
                <li>Imposibilitatea contractării gazelor</li>
                <li>Fără garanție oficială pe lucrări</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">✅ Avantajele Firmei Autorizate</h3>
              <ul className="list-disc list-inside text-green-700 space-y-2">
                <li>Siguranță maximă - instalații conforme</li>
                <li>Toate documentele oficiale</li>
                <li>Garanție 2 ani pe lucrări</li>
                <li>Asigurare RCA profesională</li>
                <li>Personal calificat și instruit</li>
                <li>Service post-garanție asigurat</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f2b721] p-6 rounded-lg mt-8 text-center">
            <h3 className="text-2xl font-bold text-[#05213c] mb-4">
              🏅 27 Ani de Experiență Autorizată
            </h3>
            <p className="text-[#05213c] text-lg">
              Din 1996 oferim servicii autorizate ANRE și ISCIR cu peste <strong>5000 de instalații</strong> 
              realizate în Constanța și județ. Încrederea clienților noștri este cea mai bună dovadă 
              a calității serviciilor noastre!
            </p>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}