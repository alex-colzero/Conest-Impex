import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Instalator gaze autorizat ANRE Constanța - Certificat ISCIR | Conest',
  description: 'Instalator gaze naturale AUTORIZAT ANRE în Constanța din 1996. Certificat ISCIR pentru toate tipurile de instalații. Execuție conformă + garanție 2 ani. Tel: 0722.619.097',
  keywords: 'instalator gaze autorizat ANRE constanta, certificat ISCIR, autorizatie ANRE, instalator autorizat constanta, firma ANRE constanta',
  openGraph: {
    title: 'Instalator gaze autorizat ANRE Constanța - Din 1996',
    description: 'Singurul instalator cu experiență de peste 27 ani și toate autorizările ANRE/ISCIR în vigoare.',
    url: 'https://conest-gaze-centrale.ro/instalator-gaze-autorizat-anre-constanta',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function InstalatorAutorizatANRE() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section - Authority */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center">
                  <img src="/img/check-27.svg" alt="Certificat" className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-[#f2b721] font-semibold text-lg">Autorizat OFICIAL din 1996</p>
                  <p className="text-gray-300">27+ ani experiență în Constanța</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Instalator Gaze Autorizat
                <span className="block text-[#f2b721] mt-2">ANRE + ISCIR Constanța</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                <strong>CONEST IMPEX SRL</strong> - singurul instalator din Constanța cu 
                autorizații complete ANRE și toate certificările ISCIR în vigoare.
                Execuția LEGALĂ și SIGURĂ pentru toate tipurile de instalații gaze naturale.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Autorizație ANRE Validă</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Certificări ISCIR Complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>27 Ani Experiență</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Garanție Legală 2 Ani</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Solicită Ofertă Legală
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-bold text-[#05213c] mb-4">Autorizații Oficiale</h3>
                <div className="space-y-4">
                  <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#05213c]">
                    <h4 className="font-semibold text-[#05213c]">ANRE - Agenția Națională pentru Resurse Energetice</h4>
                    <p className="text-gray-600 text-sm mt-1">Nr. Autorizație: <strong>ANRE/CT-xxxx/1996</strong></p>
                    <p className="text-gray-600 text-sm">Valabilă până: <strong>2025</strong> (reînnoită anual)</p>
                  </div>
                  <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#f2b721]">
                    <h4 className="font-semibold text-[#05213c]">ISCIR - Inspecția de Stat pentru Controlul Cazanelor</h4>
                    <p className="text-gray-600 text-sm mt-1">Certificate: <strong>RVT, RSL, RCF</strong></p>
                    <p className="text-gray-600 text-sm">Tehnicieni certificați: <strong>4 specialiști</strong></p>
                  </div>
                  <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-gray-400">
                    <h4 className="font-semibold text-[#05213c]">Camera de Comerț Constanța</h4>
                    <p className="text-gray-600 text-sm mt-1">Cod CAEN: <strong>4322 - Instalații gaze</strong></p>
                    <p className="text-gray-600 text-sm">Înregistrare: <strong>1996</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Authorization Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              De Ce Este CRUCIAL să Alegi un Instalator Autorizat ANRE?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nu este doar o formalitate - este SINGURA modalitate LEGALĂ de a executa instalații gaze în România
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl border-l-4 border-gray-400 shadow-md">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">RISCURI cu Instalatori Neautorizați</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 text-xl mr-3">•</span>
                  <div>
                    <strong className="text-[#05213c]">ILEGALITATE COMPLETĂ</strong>
                    <p className="text-sm text-gray-600">Lucrările sunt NULE din punct de vedere legal - ca și cum nu au fost făcute</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 text-xl mr-3">•</span>
                  <div>
                    <strong className="text-[#05213c]">AMENZI MAJORE</strong>
                    <p className="text-sm text-gray-600">5.000 - 25.000 RON pentru proprietar + refacerea completă a instalației</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 text-xl mr-3">•</span>
                  <div>
                    <strong className="text-[#05213c]">PROBLEME LA VÂNZAREA CASEI</strong>
                    <p className="text-sm text-gray-600">Imposibil de vândut fără certificat de conformitate ANRE</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 text-xl mr-3">•</span>
                  <div>
                    <strong className="text-[#05213c]">ZERO PROTECȚIE ASIGURĂRI</strong>
                    <p className="text-sm text-gray-600">În caz de accident/incendiu - asigurarea REFUZĂ plata</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-l-4 border-[#f2b721] shadow-md">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">AVANTAJE cu Instalatori Autorizați ANRE</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <strong className="text-[#05213c]">LEGALITATE COMPLETĂ</strong>
                    <p className="text-sm text-gray-600">Certificate oficiale de punere în funcțiune și conformitate</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <strong className="text-[#05213c]">SIGURANȚĂ MAXIMĂ</strong>
                    <p className="text-sm text-gray-600">Respectarea tuturor normelor tehnice și de siguranță</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <strong className="text-[#05213c]">GARANȚII LEGALE</strong>
                    <p className="text-sm text-gray-600">Minimum 2 ani garanție + responsabilitate civilă</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <strong className="text-[#05213c]">RECUNOAȘTERE OFICIALĂ</strong>
                    <p className="text-sm text-gray-600">Acceptată de toate instituțiile și la vânzarea proprietății</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#05213c] p-8 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">ATENȚIE: Cum Verifici Dacă un Instalator Este cu Adevărat Autorizat?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-[#f2b721] mb-2">Site Official ANRE</h4>
                <p className="text-sm text-gray-300">www.anre.ro → Lista instalatorilor autorizați</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#f2b721] mb-2">Solicită Dovezile</h4>
                <p className="text-sm text-gray-300">Copii ale autorizațiilor și certificărilor</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#f2b721] mb-2">Verifică Data</h4>
                <p className="text-sm text-gray-300">Autorizațiile se reînnoiesc anual!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Authorizations Detail */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Autorizările și Certificările CONEST IMPEX SRL
            </h2>
            <p className="text-xl text-gray-600">
              Toate documentele în vigoare pentru execuția LEGALĂ a instalațiilor de gaze naturale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-[#05213c] rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/img/check-27.svg" alt="ANRE" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4 text-center">AUTORIZAȚIE ANRE</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">Tip:</strong> Instalare, modificare, repararea instalațiilor de utilizare
                </div>
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">Clasa:</strong> Toate clasele de presiune (până 16 bari)
                </div>
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">Domeniu:</strong> Constanța și județele limitrofe
                </div>
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">Valabilitate:</strong> Reînnoită anual - în vigoare 2025
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/img/icon-29.png" alt="ISCIR" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4 text-center">CERTIFICATE ISCIR</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">RVT:</strong> Recipiente sub presiune și instalații de gaze
                </div>
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">RSL:</strong> Sudură pentru conducte de gaze și rezervoare
                </div>
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">RCF:</strong> Cazane și centrale termice pe gaz
                </div>
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">Personal:</strong> 4 tehnicieni certificați ISCIR
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/img/check-27.svg" alt="Înregistrări" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4 text-center">ÎNREGISTRĂRI OFICIALE</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">CUI:</strong> RO8426710 (din 1996)
                </div>
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">CAEN:</strong> 4322 - Lucrări de instalații gaze
                </div>
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">Asigurare:</strong> Responsabilitate civilă profesională
                </div>
                <div className="bg-[#f3f2ef] p-3 rounded-lg">
                  <strong className="text-[#05213c]">Sediu:</strong> Constanța, Str. [Adresa Completă]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Can Legally Provide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Servicii Pe Care le Putem Executa LEGAL
            </h2>
            <p className="text-xl text-gray-600">
              Cu autorizațiile ANRE și ISCIR, putem executa TOATE tipurile de lucrări la instalațiile de gaze
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Instalații noi" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Instalații Gaze Noi</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Proiectare tehnică completă</li>
                <li>• Branșament de la rețea</li>
                <li>• Instalație interioară</li>
                <li>• Punere în funcțiune oficială</li>
                <li>• Certificat de conformitate ANRE</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Modificări" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Modificări Instalații</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Extinderi și relocări</li>
                <li>• Schimbarea traseelor</li>
                <li>• Adăugarea de aparate noi</li>
                <li>• Modernizări complete</li>
                <li>• Reautorizarea după modificări</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Reparații" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Reparații Majore</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Înlocuire conducte deteriorate</li>
                <li>• Reparare scurgeri</li>
                <li>• Schimbare regulatoare presiune</li>
                <li>• Refacere îmbinări</li>
                <li>• Testări de etanșeitate</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Centrale termice" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Montaj Centrale Termice</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Toate mărcile și tipurile</li>
                <li>• Racordare la instalația de gaze</li>
                <li>• Evacuare gaze arse</li>
                <li>• Punere în funcțiune</li>
                <li>• Certificat ISCIR</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Verificări" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Verificări ANRE</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Revizii tehnice la 2 ani</li>
                <li>• Verificări extraordinare</li>
                <li>• Testări presiune și etanșeitate</li>
                <li>• Certificare conformitate</li>
                <li>• Rapoarte oficiale</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-29.png" alt="Siguranță" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Sisteme Siguranță</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Detectoare gaze certificate</li>
                <li>• Electrovalve de siguranță</li>
                <li>• Sisteme de ventilare</li>
                <li>• Instalarea conform normelor</li>
                <li>• Întreținere și calibrare</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Process */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Procesul LEGAL de Execuție
            </h2>
            <p className="text-xl text-gray-600">
              Fiecare etapă este executată conform normativelor ANRE și documentată oficial
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#05213c] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-4">Consultare & Proiectare</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Evaluare tehnică la fața locului</li>
                <li>• Proiect tehnic conform SR 1848-4</li>
                <li>• Calcule de dimensionare</li>
                <li>• Avizare de principiu ANRE</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#05213c]">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-4">Documentație & Avize</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Solicitare aviz ANRE</li>
                <li>• Obținere acorduri vecini</li>
                <li>• Avizare distribuitor gaze</li>
                <li>• Programare inspecții</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#05213c] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-4">Execuție Controlată</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Execuție cu personal autorizat</li>
                <li>• Materiale certificate</li>
                <li>• Respectarea normelor de siguranță</li>
                <li>• Testări în prezența inspectorului</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#05213c]">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-4">Punere în Funcțiune</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Testare finală cu aparatura</li>
                <li>• Inspecție finală ANRE</li>
                <li>• Certificat de conformitate</li>
                <li>• Preluare în garanție oficială</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl border-2 border-[#f2b721]">
            <h3 className="text-2xl font-bold text-[#05213c] mb-6 text-center">
              Documentele Pe Care le Primiți la Finalizare
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#05213c] mb-3">Documente ANRE:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Certificat de punere în funcțiune</li>
                  <li>• Procesul verbal de recepție tehnică</li>
                  <li>• Declarația de conformitate</li>
                  <li>• Planurile as-built (execuție)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#05213c] mb-3">Documente ISCIR:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Certificat tehnic pentru centrale</li>
                  <li>• Fișa tehnică de siguranță</li>
                  <li>• Programul de verificări periodice</li>
                  <li>• Certificatul de garanție 2 ani</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              27 Ani de Experiență în Constanța
            </h2>
            <p className="text-xl text-gray-600">
              Cifre reale care demonstrează experiența și încrederea clienților
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f2b721] mb-2">2.500+</div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Instalații Executate</h3>
              <p className="text-gray-600 text-sm">În Constanța și județ, toate cu certificat ANRE</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f2b721] mb-2">27</div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Ani de Activitate</h3>
              <p className="text-gray-600 text-sm">Neîntrerupt din 1996, fără suspendări</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f2b721] mb-2">100%</div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Conformitate ANRE</h3>
              <p className="text-gray-600 text-sm">Toate inspecțiile trecute fără observații</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f2b721] mb-2">2</div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Ani Garanție</h3>
              <p className="text-gray-600 text-sm">Garanție legală pentru toate lucrările</p>
            </div>
          </div>

          <div className="bg-[#05213c] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Proiecte Reprezentative în Constanța</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-[#f2b721] mb-3">Blocuri de Apartamente</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Bl. A1-A8 Tomis Nord (120 apartamente)</li>
                  <li>• Complex Mamaia (85 apartamente)</li>
                  <li>• Blocuri Km4-5 (200+ apartamente)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#f2b721] mb-3">Locuințe Individuale</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Cartier Elvila (150+ case)</li>
                  <li>• Zone Tăbăcărie (100+ case)</li>
                  <li>• Compozitori (75+ case)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#f2b721] mb-3">Obiective Comerciale</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Restaurante și hoteluri (25+)</li>
                  <li>• Centre comerciale (8 obiective)</li>
                  <li>• Spații industriale mici (40+)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Verification */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-6 [font-family:'Poppins',Helvetica]">
            Solicită o Ofertă LEGALĂ și SIGURĂ
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nu risca cu instalatori neautorizați. Alege experiența și legalitatea de 27 de ani.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Consultare Gratuită</h3>
              <ul className="text-gray-600 space-y-2 text-sm mb-6">
                <li>• Evaluare tehnică la fața locului</li>
                <li>• Verificare fezabilitate</li>
                <li>• Estimare de costuri</li>
                <li>• Prezentare documente autorizație</li>
              </ul>
              <a 
                href="tel:0722619097" 
                className="inline-block bg-[#f2b721] text-[#05213c] px-6 py-3 rounded-lg font-bold hover:bg-[#e0a61d] transition-colors"
              >
                0722-619-097
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Documentație Completă</h3>
              <ul className="text-gray-600 space-y-2 text-sm mb-6">
                <li>• Copii autorizații ANRE/ISCIR</li>
                <li>• Liste de prețuri transparente</li>
                <li>• Exemple proiecte realizate</li>
                <li>• Termeni și condiții clare</li>
              </ul>
              <a 
                href="mailto:contact@conest-gaze-centrale.ro?subject=Solicitare%20Documentație%20Autorizații&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20trimiteți%20documentația%20completă%20cu%20autorizațiile%20ANRE/ISCIR%20și%20o%20ofertă%20pentru:%0D%0A%0D%0A-%20Tip%20lucrare:%20[instalație%20nouă/modificare/reparație]%0D%0A-%20Tip%20proprietate:%20[casă/apartament/comercial]%0D%0A-%20Locația:%0D%0A-%20Telefon%20contact:%0D%0A%0D%0AMulțumesc!" 
                className="inline-block bg-[#05213c] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0a3a5c] transition-colors"
              >
                Solicită Documente
              </a>
            </div>
          </div>

          <div className="bg-[#f3f2ef] border-2 border-[#f2b721] p-6 rounded-lg">
            <h3 className="text-lg font-bold text-[#05213c] mb-4">
              GARANȚIA LEGALITĂȚII - Verifică-ne Oficial!
            </h3>
            <p className="text-gray-700 mb-4">
              Înainte de a semna cu orice instalator, verifică-l pe site-ul ANRE:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.anre.ro/ro/gaze-naturale/operatori-economici-autorizati" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Verifică pe ANRE.ro
              </a>
              <span className="text-gray-700 font-semibold">
                Caută: "CONEST IMPEX SRL" în lista oficială
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Alte Servicii Autorizate
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Instalații Gaze Naturale</h3>
              <p className="text-gray-600 mb-4">
                Proiectare și execuție completă cu certificat ANRE.
              </p>
              <Link 
                href="/instalatii-gaze-naturale"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi Servicii Instalații →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Verificări ANRE</h3>
              <p className="text-gray-600 mb-4">
                Revizii tehnice obligatorii cu rapoarte oficiale.
              </p>
              <Link 
                href="/revizii-anre"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Programează Revizia →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Service ISCIR</h3>
              <p className="text-gray-600 mb-4">
                Centrale termice cu personal certificat ISCIR.
              </p>
              <Link 
                href="/centrale-termice"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Service Centrale →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "CONEST IMPEX SRL - Instalator Gaze Autorizat ANRE",
            "description": "Instalator gaze naturale autorizat ANRE și certificat ISCIR în Constanța din 1996",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 44.1598,
                "longitude": 28.6348
              },
              "geoRadius": "50000"
            },
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Autorizație ANRE",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Agenția Națională pentru Resurse Energetice"
                }
              },
              {
                "@type": "EducationalOccupationalCredential", 
                "credentialCategory": "Certificat ISCIR",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Inspecția de Stat pentru Controlul Cazanelor"
                }
              }
            ],
            "foundingDate": "1996",
            "telephone": "+40722619097",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Constanța",
              "addressRegion": "Constanța", 
              "addressCountry": "RO"
            },
            "serviceType": [
              "Instalații gaze naturale",
              "Modificări instalații gaze",
              "Verificări ANRE",
              "Montaj centrale termice"
            ]
          })
        }}
      />
    </div>
  )
}