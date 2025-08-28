import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Service ISCIR Constanța - Tehnicienii Certificați Centrale Termice | Conest',
  description: 'Service ISCIR autorizat în Constanța cu tehnicienii certificați RVT și RSL. Verificări anuale centrale termice, reparații și mentenanță conformă. ☎️ 0722.619.097',
  keywords: 'service ISCIR constanta, tehnician certificat ISCIR, verificari anuale centrale, RVT RSL constanta, service centrale ISCIR',
  openGraph: {
    title: 'Service ISCIR Constanța - Tehnicienii Certificați din 1996',
    description: 'Echipa de tehnicienii ISCIR cu toate certificările necesare pentru service-ul legal al centralelor termice.',
    url: 'https://conest-gaze-centrale.ro/service-iscir-constanta',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function ServiceISCIRConstanta() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section - ISCIR Authority */}
      <section className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#05213c]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <p className="text-[#f2b721] font-semibold text-lg">Certificați ISCIR din 1996</p>
                  <p className="text-gray-300">4 tehnicieni cu toate autorizările</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Service ISCIR Constanța
                <span className="block text-[#f2b721] mt-2">Tehnicienii Certificați</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                <strong>Echipa CONEST IMPEX</strong> - singurul service din Constanța cu 
                tehnicienii certificați ISCIR pentru <strong>TOATE</strong> tipurile de centrale termice 
                și aparate consumatoare de gaze naturale.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Certificare RVT (Recipiente)</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Certificare RSL (Sudură)</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Certificare RCF (Cazane)</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>4 Tehnicieni Autorizați</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Service Certificat ISCIR
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-bold text-[#05213c] mb-4">Certificări ISCIR Active</h3>
                <div className="space-y-4">
                  <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#05213c]">
                    <h4 className="font-semibold text-[#05213c] mb-2">RVT - Recipiente sub Presiune</h4>
                    <p className="text-gray-700 text-sm">Pentru centrale termice, boilere și vase de expansiune</p>
                    <p className="text-gray-700 text-sm font-semibold mt-1">2 tehnicieni certificați</p>
                  </div>
                  <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#05213c]">
                    <h4 className="font-semibold text-[#05213c] mb-2">RSL - Sudură și Lipire</h4>
                    <p className="text-gray-700 text-sm">Pentru reparații conducte și îmbinări presiune</p>
                    <p className="text-gray-700 text-sm font-semibold mt-1">2 tehnicieni certificați</p>
                  </div>
                  <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#f2b721]">
                    <h4 className="font-semibold text-[#05213c] mb-2">RCF - Cazane și Centrale</h4>
                    <p className="text-gray-700 text-sm">Pentru montaj, service și verificări anuale</p>
                    <p className="text-gray-700 text-sm font-semibold mt-1">3 tehnicieni certificați</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ISCIR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Ce Este ISCIR și De Ce Este Obligatoriu?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ISCIR = Inspecția de Stat pentru Controlul Cazanelor, Recipientelor sub Presiune și Instalațiilor de Ridicat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f3f2ef] p-8 rounded-xl border-l-4 border-[#05213c]">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">Rolul ISCIR în România</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#05213c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Autoritate de Stat</strong>
                    <p className="text-sm text-gray-600">Organ de control în subordinea Ministerului Economiei</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#05213c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Siguranța Publică</strong>
                    <p className="text-sm text-gray-600">Previne accidentele cu echipamente sub presiune</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#05213c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Certificare Personal</strong>
                    <p className="text-sm text-gray-600">Doar tehnicienii ISCIR pot lucra legal la centrale termice</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-[#05213c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Verificări Periodice</strong>
                    <p className="text-sm text-gray-600">Inspecții anuale obligatorii pentru centrale termice</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-l-4 border-gray-500">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">Riscuri fără Service ISCIR</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>ILEGALITATE</strong>
                    <p className="text-sm text-gray-600">Amendă 2.000-10.000 RON + oprirea instalației</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>PERICOL DE EXPLOZIE</strong>
                    <p className="text-sm text-gray-600">Centrale nerevizuite pot avea presiune necontrolată</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>PROBLEME LA VÂNZARE</strong>
                    <p className="text-sm text-gray-600">Fără certificat ISCIR nu se poate vinde proprietatea</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>ANULAREA ASIGURĂRII</strong>
                    <p className="text-sm text-gray-600">În caz de accident, asigurarea refuză plata</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#05213c] p-8 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-6">ATENȚIE: Cum Recunoști un Tehnician Certificat ISCIR?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-[#f2b721] mb-3">Certificatul Personal</h4>
                <p className="text-sm text-gray-300">Fiecare tehnician are certificat individual cu poză și ștampilă ISCIR</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#f2b721] mb-3">Carnet de Lucru</h4>
                <p className="text-sm text-gray-300">Carnet oficial ISCIR cu ștampile pentru fiecare intervenție</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#f2b721] mb-3">Verificare Online</h4>
                <p className="text-sm text-gray-300">Pe site-ul iscir.ro poți verifica dacă certificatul este valabil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our ISCIR Team */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Echipa Noastră de Tehnicienii ISCIR
            </h2>
            <p className="text-xl text-gray-600">
              4 tehnicieni cu experiența combinată de peste 80 de ani în domeniul centralelor termice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">Certificări și Specializări</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-3">RVT - Recipiente sub Presiune</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• <strong>Gheorghe M.</strong> - 25 ani experiență, specialist Vaillant/Bosch</li>
                    <li>• <strong>Adrian P.</strong> - 18 ani experiență, specialist Viessmann/Buderus</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-3">RSL - Sudură și Lipire</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• <strong>Marian T.</strong> - 22 ani experiență, reparații conducte presiune</li>
                    <li>• <strong>Constantin R.</strong> - 20 ani experiență, îmbinări gaze naturale</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-3">RCF - Cazane și Centrale</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Toți 4 tehnicienii au și certificarea RCF</li>
                    <li>• Specializați pe toate mărcile europene</li>
                    <li>• Instruiți continuu pentru tehnologiile noi</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">Statistici Echipă (2024)</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#05213c] mb-2">1.200+</div>
                  <p className="text-gray-600">Verificări anuale ISCIR efectuate</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#05213c] mb-2">2.800+</div>
                  <p className="text-gray-600">Service-uri și reparații centrale</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#f2b721] mb-2">100%</div>
                  <p className="text-gray-600">Promovabilitate la inspecțiile ISCIR</p>
                </div>
                <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#f2b721]">
                  <h4 className="font-semibold text-[#05213c] mb-2">Recunoaștere ISCIR</h4>
                  <p className="text-gray-700 text-sm">
                    Echipa noastră a primit în 2023 diploma de excelență de la ISCIR Constanța 
                    pentru numărul zero de neconformități la verificări.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISCIR Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Servicii ISCIR Complete
            </h2>
            <p className="text-xl text-gray-600">
              Tot ce necesită centrala ta pentru a fi conformă cu legislația română
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#05213c] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Verificare Anuală ISCIR</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Inspecție tehnică completă</li>
                <li>• Măsurători presiune și temperaturi</li>
                <li>• Verificare sisteme siguranță</li>
                <li>• Certificat valabil 1 an</li>
                <li>• Programare în maximum 48h</li>
              </ul>
              <div className="mt-4 p-3 bg-[#f3f2ef] rounded-lg">
                <p className="text-sm text-[#05213c]"><strong>Preț:</strong> 180-250 RON (în funcție de tip centrală)</p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#05213c] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Service și Reparații</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Diagnosticare cu aparatură profesională</li>
                <li>• Reparații conform standardelor ISCIR</li>
                <li>• Piese de schimb originale</li>
                <li>• Testare și punere în funcțiune</li>
                <li>• Garanție 2 ani pentru lucrări</li>
              </ul>
              <div className="mt-4 p-3 bg-[#f3f2ef] rounded-lg">
                <p className="text-sm text-[#05213c]"><strong>Diagnosticare:</strong> GRATUITĂ</p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#05213c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h1a1 1 0 010 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 010 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 010 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 010 2H4a1 1 0 01-1-1zm6-16a1 1 0 000 2h7a1 1 0 100-2H9zm0 4a1 1 0 000 2h7a1 1 0 100-2H9zm0 4a1 1 0 000 2h7a1 1 0 100-2H9zm0 4a1 1 0 000 2h7a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Montaj Centrale Noi</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Consultanță pentru alegerea centralei</li>
                <li>• Montaj conform normelor ISCIR</li>
                <li>• Conectare la <Link href="/instalatii-gaze-naturale" className="text-blue-600 hover:underline">instalația de gaze</Link></li>
                <li>• Prima verificare ISCIR inclusă</li>
                <li>• Instruirea utilizatorului</li>
              </ul>
              <div className="mt-4 p-3 bg-[#f3f2ef] rounded-lg">
                <p className="text-sm text-[#05213c]"><strong>De la:</strong> 800 RON (fără centrala)</p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Intervenții de Urgență</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Service urgent 24/7</li>
                <li>• Blocare siguranță centrala</li>
                <li>• Presiune anormală în sistem</li>
                <li>• Scăpări la îmbinări</li>
                <li>• Certificare după reparații urgente</li>
              </ul>
              <div className="mt-4 p-3 bg-[#f3f2ef] rounded-lg">
                <p className="text-sm text-[#05213c]"><strong>Disponibil:</strong> 24/7 inclusiv sărbători</p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#05213c] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Consultanță Tehnică</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Evaluare stare tehnică centrală</li>
                <li>• Recomandări pentru eficiență</li>
                <li>• Planificare verificări și mentenanță</li>
                <li>• Instruirea proprietarilor</li>
                <li>• Rapoarte tehnice pentru asigurări</li>
              </ul>
              <div className="mt-4 p-3 bg-[#f3f2ef] rounded-lg">
                <p className="text-sm text-[#05213c]"><strong>Consultare:</strong> GRATUITĂ la client</p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#05213c]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Service La Domiciliu</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Toate serviciile la tine acasă</li>
                <li>• Transport echipament specializat</li>
                <li>• Fără costuri deplasare în Constanța</li>
                <li>• Programare flexibilă</li>
                <li>• Plată după finalizarea lucrărilor</li>
              </ul>
              <div className="mt-4 p-3 bg-[#f3f2ef] rounded-lg">
                <p className="text-sm text-[#05213c]"><strong>Zone:</strong> Constanța + 30km fără taxe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Requirements */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Obligații Legale ISCIR pentru Proprietari
            </h2>
            <p className="text-xl text-gray-600">
              Ce spune legea română despre verificările ISCIR - să nu fii luat prin surprindere
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">Verificări Obligatorii</h3>
              <div className="space-y-6">
                <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#05213c]">
                  <h4 className="font-semibold text-[#05213c] mb-2">Verificare Anuală</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Obligatorie prin lege</strong> - NU este opțională!</li>
                    <li>• Termenul: <strong>exact la 1 an</strong> de la ultima verificare</li>
                    <li>• Întârziere: <strong>amendă 2.000-10.000 RON</strong></li>
                    <li>• Fără certificat: <strong>oprirea centralei</strong></li>
                  </ul>
                </div>
                
                <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#05213c]">
                  <h4 className="font-semibold text-[#05213c] mb-2">Verificare după Reparații</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• La orice reparație majoră a centralei</li>
                    <li>• Înlocuire componente sub presiune</li>
                    <li>• Modificări la sistemul de siguranță</li>
                    <li>• Relocarea centralei în altă încăpere</li>
                  </ul>
                </div>

                <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#f2b721]">
                  <h4 className="font-semibold text-[#05213c] mb-2">La Schimbarea Proprietarului</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Verificare obligatorie la vânzare</li>
                    <li>• Noul proprietar preia responsabilitățile</li>
                    <li>• Fără certificat = contract de vânzare invalid</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">Sancțiuni și Consecințe</h3>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border-l-4 border-gray-500">
                  <h4 className="font-semibold text-[#05213c] mb-2">Amenzi Proprietari</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>2.000-5.000 RON</strong> - prima abatere</li>
                    <li>• <strong>5.000-10.000 RON</strong> - recidivă</li>
                    <li>• <strong>Oprirea imediată</strong> a centralei</li>
                    <li>• <strong>Sigilarea</strong> până la conformare</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-gray-500">
                  <h4 className="font-semibold text-[#05213c] mb-2">Implicații Comerciale</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Imposibil de vândut fără certificat</li>
                    <li>• Probleme la refinanțarea creditelor</li>
                    <li>• Asigurarea poate refuza plata</li>
                    <li>• Dificultăți la închiriere</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-[#05213c]">
                  <h4 className="font-semibold text-[#05213c] mb-2">Controale ISCIR</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Controale nepreavizate la domiciliu</li>
                    <li>• Verificare documentelor și certificatelor</li>
                    <li>• Raportare automată către autoritați</li>
                    <li>• Colaborare cu DSP și ISU</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#05213c] p-8 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Planifică-ți Verificarea ISCIR</h3>
            <p className="text-xl text-gray-300 mb-8">
              Nu aștepta să expire certificatul! Tehnicienii noștri îți amintesc cu o lună înainte 
              și programează verificarea în cel mult 48 de ore.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-[#f2b721] mb-2">24h</div>
                <p className="text-sm">Răspuns la programare</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#f2b721] mb-2">48h</div>
                <p className="text-sm">Maximum până la verificare</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#f2b721] mb-2">1 an</div>
                <p className="text-sm">Valabilitate certificat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-6 [font-family:'Poppins',Helvetica]">
            Service ISCIR Constanța - Programare Rapidă
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Tehnicienii certificați ISCIR cu disponibilitate maximă în Constanța și împrejurimi
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f3f2ef] p-8 rounded-xl border-l-4 border-[#05213c]">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Service și Verificări</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Verificare anuală ISCIR</span>
                  <strong>180-250 RON</strong>
                </div>
                <div className="flex justify-between">
                  <span>Service complet cu piese</span>
                  <strong>300-800 RON</strong>
                </div>
                <div className="flex justify-between">
                  <span>Diagnosticare problemă</span>
                  <strong>GRATUITĂ</strong>
                </div>
                <div className="flex justify-between">
                  <span>Montaj centrală nouă</span>
                  <strong>de la 800 RON</strong>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-block mt-6 bg-[#05213c] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#041829] transition-colors"
              >
                0722-619-097
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl border-l-4 border-gray-500">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">Urgențe 24/7</h3>
              <ul className="text-gray-700 space-y-2 text-sm mb-6">
                <li>• Blocare de siguranță centrală</li>
                <li>• Presiune anormală în sistem</li>
                <li>• Zgomote suspecte în centrală</li>
                <li>• Scăpări la îmbinări presiune</li>
                <li>• Orice situație cu risc de explozie</li>
              </ul>
              <a 
                href="tel:0744579715" 
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors"
              >
                0744-579-715
              </a>
            </div>
          </div>

          <div className="bg-[#f3f2ef] border-2 border-[#f2b721] p-6 rounded-lg">
            <h3 className="text-lg font-bold text-[#05213c] mb-4">
              Zonele cu Service ISCIR Rapid (sub 2 ore)
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li><strong>Constanța Centru:</strong> 30-45 minute</li>
                <li><strong>Mamaia:</strong> 45-60 minute</li>
                <li><strong>Tomis Nord/Sud:</strong> 30-50 minute</li>
                <li><strong>Năvodari:</strong> 60-90 minute</li>
              </ul>
              <ul className="space-y-2">
                <li><strong>Ovidiu:</strong> 45-60 minute</li>
                <li><strong>Eforie Nord/Sud:</strong> 90-120 minute</li>
                <li><strong>Medgidia:</strong> 90-120 minute</li>
                <li><strong>Mangalia:</strong> 120-150 minute</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Servicii Conexe Autorizate
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Instalații Gaze ANRE</h3>
              <p className="text-gray-600 mb-4">
                Execuție instalații gaze pentru alimentarea centralelor termice.
              </p>
              <Link 
                href="/instalatii-gaze-naturale"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi Instalații ANRE →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Instalator Autorizat</h3>
              <p className="text-gray-600 mb-4">
                Toate certificările ANRE și ISCIR pentru lucrări legale.
              </p>
              <Link 
                href="/instalator-gaze-autorizat-anre-constanta"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Verifică Autorizările →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Service Centrale</h3>
              <p className="text-gray-600 mb-4">
                Reparații și mentenanță cu tehnicienii certificați.
              </p>
              <Link 
                href="/centrale-termice"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Service Complete →
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
            "name": "Service ISCIR Constanța - Tehnicienii Certificați",
            "description": "Service ISCIR autorizat cu tehnicienii certificați RVT, RSL și RCF pentru centrale termice în Constanța",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 44.1598,
                "longitude": 28.6348
              },
              "geoRadius": "40000"
            },
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "RVT - Recipiente sub Presiune",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "ISCIR - Inspecția de Stat pentru Controlul Cazanelor"
                }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "RSL - Sudură și Lipire", 
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "ISCIR - Inspecția de Stat pentru Controlul Cazanelor"
                }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "RCF - Cazane și Centrale",
                "recognizedBy": {
                  "@type": "Organization", 
                  "name": "ISCIR - Inspecția de Stat pentru Controlul Cazanelor"
                }
              }
            ],
            "telephone": "+40722619097",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Constanța",
              "addressRegion": "Constanța",
              "addressCountry": "RO"
            },
            "serviceType": [
              "Verificări anuale ISCIR",
              "Service centrale termice", 
              "Montaj centrale certificate",
              "Reparații conforme ISCIR"
            ]
          })
        }}
      />
    </div>
  )
}