import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Miros gaz în apartament - Ce fac URGENT? Ghid Constanța | Conest',
  description: 'Simți miros de gaz în apartament? Pași imediați de siguranță + intervenție urgentă 24/7 în Constanța. Nu risca - sună acum! 0744-579-715',
  keywords: 'miros gaz apartament, scapare gaze apartament, miros gaz bucatarie, gaz metan miros, urgente gaze constanta, siguranța gazelor',
  openGraph: {
    title: 'URGENT: Miros gaz în apartament - Pași imediați siguranță',
    description: 'Ghid complet de siguranță pentru miros de gaz în apartament. Intervenții urgente 24/7 în Constanța.',
    url: 'https://conest-gaze-centrale.ro/miros-gaz-apartament',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function MirosGazApartament() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section - Critical Alert */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
              Miros Gaz în Apartament?
              <span className="block text-[#f2b721] mt-2 text-2xl md:text-3xl">ACȚIONEAZĂ IMEDIAT!</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Mirosul de gaz în apartament este o situație <strong className="text-[#f2b721]">CRITICĂ!</strong> 
              Nu ignora - urmează exact acești pași pentru siguranța ta și a vecinilor.
            </p>
            <div className="bg-[#f2b721] text-[#05213c] p-6 rounded-lg mb-6 font-bold text-lg">
              PERICOL IMINENT - SUNĂ ACUM:<br />
              <a href="tel:0744579715" className="text-3xl hover:underline">0744-579-715</a>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Danger Response */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-[#05213c] mb-4 text-center">
              ACȚIUNE IMEDIATĂ - FĂRĂ ÎNTÂRZIERE!
            </h2>
            <p className="text-gray-700 text-center text-lg font-semibold mb-6">
              Concentrația de gaze poate deveni explozivă în 5-15 minute! Fiecare secundă contează!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
                <h3 className="text-xl font-bold text-[#05213c]">NU ATINGE NIMIC ELECTRIC!</h3>
              </div>
              <ul className="text-gray-700 space-y-2 font-semibold">
                <li>• NU aprinde/stinge lumina</li>
                <li>• NU folosi întrerupătoarele</li>
                <li>• NU scoate din prize</li>
                <li>• NU aprinde chibrituri/brichete</li>
                <li>• NU folosi telefoane în apartament</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">2</div>
                <h3 className="text-xl font-bold text-[#05213c]">OPREȘTE GAZELE IMEDIAT!</h3>
              </div>
              <ul className="text-gray-700 space-y-2 font-semibold">
                <li>• Închide robinetul general de gaze</li>
                <li>• Oprește aragazul/centrala</li>
                <li>• Închide toate aparatele de gaze</li>
                <li>• Nu încerca să găsești scurgerea</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">3</div>
                <h3 className="text-xl font-bold text-[#05213c]">VENTILEAZĂ URGENT!</h3>
              </div>
              <ul className="text-gray-700 space-y-2 font-semibold">
                <li>• Deschide TOATE ferestrele</li>
                <li>• Deschide ușile spre balcon</li>
                <li>• Creează curent de aer puternic</li>
                <li>• NU folosi ventilatoare electrice!</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">4</div>
                <h3 className="text-xl font-bold text-[#05213c]">EVACUEAZĂ & SUNĂ!</h3>
              </div>
              <ul className="text-gray-700 space-y-2 font-semibold">
                <li>• Ieși DIN APARTAMENT imediat</li>
                <li>• Alertează vecinii</li>
                <li>• Sună de AFARA: <strong>0744-579-715</strong></li>
                <li>• Pentru pericol extrem: <strong>112</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-[#05213c] text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">DE CE ESTE ATÂT DE PERICULOS?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-[#f2b721]">EXPLOZIE</h4>
                <p className="text-sm">Concentrația 5-15% în aer poate exploda de la cea mai mică scânteie</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#f2b721]">APARTAMENTE</h4>
                <p className="text-sm">Gazele se acumulează rapid în spații închise - pericol pentru tot blocul</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#f2b721]">ELECTRICITATE</h4>
                <p className="text-sm">Orice scânteie electrică poate declansa explozia - inclusiv telefoanele</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identifying Gas Leaks in Apartments */}
      <section className="py-12 bg-[#f3f2ef]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Cum Identific Sursa Mirosului în Apartament?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Locuri Comune de Scăpare în Apartamente</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-red-500 text-xl mr-3">•</span>
                  <div>
                    <strong className="text-[#05213c]">Bucătăria - 70% din cazuri</strong>
                    <p className="text-gray-600 text-sm">Aragazul, racorduri, robinet de gaze</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 text-xl mr-3">•</span>
                  <div>
                    <strong className="text-[#05213c]">Balconul închis</strong>
                    <p className="text-gray-600 text-sm">Centrala termică, conducte exterioare</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 text-xl mr-3">•</span>
                  <div>
                    <strong className="text-[#05213c]">Debara/Cămara</strong>
                    <p className="text-gray-600 text-sm">Contorul de gaze, racorduri principale</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 text-xl mr-3">•</span>
                  <div>
                    <strong className="text-[#05213c]">Peretii cu instalații</strong>
                    <p className="text-gray-600 text-sm">Conducte în perete, îmbinări ascunse</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Intensitatea Mirosului Indică Gravitatea</h3>
              <div className="space-y-4">
                <div className="bg-red-100 p-3 rounded-lg border-l-4 border-red-500">
                  <strong className="text-red-800">MIROS PUTERNIC</strong>
                  <p className="text-red-700 text-sm">Scăpare majoră - EVACUEAZĂ IMEDIAT!</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg border-l-4 border-orange-500">
                  <strong className="text-orange-800">MIROS PERSISTENT</strong>
                  <p className="text-orange-700 text-sm">Scăpare constantă - Sună specialistul urgent</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-yellow-500">
                  <strong className="text-yellow-800">MIROS INTERMITENT</strong>
                  <p className="text-yellow-700 text-sm">Posibilă problemă la aparate - Verificare necesară</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
                  <strong className="text-blue-800">MIROS SLAB</strong>
                  <p className="text-blue-700 text-sm">Începutul unei probleme - Nu ignora!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f2b721] bg-opacity-10 border-2 border-[#f2b721] rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#05213c] mb-4 text-center">
              ATENȚIE: Specificul Apartamentelor
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-[#05213c] mb-2">Probleme Comune în Blocuri:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Gazele de la vecini pot pătrunde prin ventilație</li>
                  <li>• Instalații vechi comune (peste 20 ani)</li>
                  <li>• Lucrări de renovare neautorizate</li>
                  <li>• Contoare de gaze plasate în spații comune</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#05213c] mb-2">Căi de Propagare:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Guri de ventilație comune</li>
                  <li>• Fisuri în pereți și tavane</li>
                  <li>• Spatii tehnice comuni (lift, canalizare)</li>
                  <li>• Balcoane și logii adiacente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment-Specific Safety */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Siguranță Specifică pentru Apartamente
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-16 h-16 bg-[#05213c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-3 text-center">Alertează Vecinii</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Bate la ușile vecine IMEDIAT</li>
                <li>• Informează administrația blocului</li>
                <li>• Nu folosi soneriile electrice</li>
                <li>• Evacuează etajul dacă este necesar</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-16 h-16 bg-[#05213c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-3 text-center">Oprește la Sursă</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Contorul din apartament PRIMUL</li>
                <li>• Robinet general din debara/balcon</li>
                <li>• Dacă știi - contorul de la parter</li>
                <li>• Nu încerca în spații comune dubioase</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-16 h-16 bg-[#05213c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-3 text-center">Ventilație Maximă</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Toate ferestrele - COMPLET deschise</li>
                <li>• Uși spre balcon/terasă</li>
                <li>• Ușa de la intrare - pentru curent</li>
                <li>• Gura de ventilație din bucătărie</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#05213c] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold text-center mb-6">ORDINEA APELURILOR DE URGENȚĂ</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                <h4 className="font-semibold mb-2">SPECIALIST GAZE</h4>
                <a href="tel:0744579715" className="text-[#f2b721] text-lg font-bold hover:underline">0744-579-715</a>
                <p className="text-sm text-gray-300 mt-1">Pentru identificare și oprire</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                <h4 className="font-semibold mb-2">POMPIERI (dacă necesar)</h4>
                <a href="tel:112" className="text-[#f2b721] text-lg font-bold hover:underline">112</a>
                <p className="text-sm text-gray-300 mt-1">Pentru evacuarea blocului</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                <h4 className="font-semibold mb-2">FURNIZOR GAZE</h4>
                <p className="text-[#f2b721] text-lg font-bold">021.9969</p>
                <p className="text-sm text-gray-300 mt-1">Pentru oprire de la rețea</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes in Apartments */}
      <section className="py-12 bg-[#f3f2ef]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            De Ce Miros Gaz în Apartamente? Cauze Frecvente
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Probleme la Aragaz (60% din cazuri)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Cauze commune:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Racordul flexibil crăpat sau slăbit</li>
                    <li>• Robinet de gaze uzat (garnituri)</li>
                    <li>• Arzătoare murdare - flacără galbenă</li>
                    <li>• Aragaz vechi - îmbinări degradate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Semnale de alertă:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Flacăra se stinge des</li>
                    <li>• Aprindere dificilă</li>
                    <li>• Colorare galbenă a flăcării</li>
                    <li>• Mirosul se intensifică lângă aragaz</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Probleme la Centrală (25% din cazuri)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">În balcoane închise:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Racorduri expuse la variații termice</li>
                    <li>• Condensul afectează îmbinările</li>
                    <li>• Ventilația insuficientă</li>
                    <li>• Instalare neconformă</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Simptome specifice:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Miros când pornesște centrala</li>
                    <li>• Codul de eroare la pornire</li>
                    <li>• Presiune în scădere constantă</li>
                    <li>• Zgomote neobișnuite</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Probleme în Instalația Blocului (15% din cazuri)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Spații comune:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Contoare de gaze din pivot</li>
                    <li>• Conducte principale în perete</li>
                    <li>• Branșament de la stradă</li>
                    <li>• Instalații din subsol</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Indicii:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Mai mulți vecini raportează probleme</li>
                    <li>• Miros în scara blocului</li>
                    <li>• Presiune scăzută generalizată</li>
                    <li>• Probleme după lucrări în bloc</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention for Apartments */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Cum Previi Problemele cu Gazele în Apartament?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#05213c] mb-4">Verificări Lunare Obligatorii</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-[#05213c] mb-2">Aragaz & Racorduri</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Spumă de săpun pe toate îmbinările</li>
                    <li>• Verificare racord flexibil (max 5 ani)</li>
                    <li>• Test funcționare toate arzătoarele</li>
                    <li>• Culoarea flăcării (trebuie albastră)</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-[#05213c] mb-2">Centrală (Dacă Aplicabil)</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Presiune în manometru (1-2 bari)</li>
                    <li>• Racorduri vizibile</li>
                    <li>• Ventilația în balconul închis</li>
                    <li>• Funcționarea fără erori</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#05213c] mb-4">Echipament de Siguranță</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-[#05213c] mb-2">Detector de Gaze (OBLIGATORIU)</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Montaj în bucătărie la 30cm de tavan</li>
                    <li>• Test lunar funcționare</li>
                    <li>• Schimbare baterie anual</li>
                    <li>• Înlocuire detector la 5 ani</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-[#05213c] mb-2">Electrovalvă Automatică</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Oprire automată la detectare</li>
                    <li>• Montaj pe conducta principală</li>
                    <li>• Test semestrial</li>
                    <li>• Service anual</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#f2b721] p-6 rounded-xl text-[#05213c]">
            <h3 className="text-xl font-bold mb-4 text-center">
              Pachet Siguranță Apartament - Reducere Specială
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="font-semibold">Detector Profesional</h4>
                <p className="text-2xl font-bold">249 RON</p>
                <p className="text-sm">+ montaj inclus</p>
              </div>
              <div>
                <h4 className="font-semibold">+ Electrovalvă</h4>
                <p className="text-2xl font-bold">599 RON</p>
                <p className="text-sm">sistem complet</p>
              </div>
              <div>
                <h4 className="font-semibold">+ Verificare Completă</h4>
                <p className="text-2xl font-bold">699 RON</p>
                <p className="text-sm">garanție 2 ani</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <Link 
                href="/sisteme-siguranta"
                className="inline-flex items-center gap-2 bg-[#05213c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0a3a5c] transition-colors"
              >
                Comandă Sistem Siguranță →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-12 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            URGENȚE GAZE APARTAMENTE 24/7
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Specializați în <strong className="text-[#f2b721]">urgențe gaze pentru apartamente</strong> în Constanța.
            <br />Cunoaștem perfect instalațiile din blocuri și timpul de răspuns este <strong className="text-[#f2b721]">GARANTAT!</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-600 p-6 rounded-xl">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-[#05213c] font-bold">!</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">MIROS PUTERNIC DE GAZ</h3>
              <p className="text-red-200 mb-4">Scăpare majoră, risc de explozie</p>
              <a 
                href="tel:0744579715" 
                className="inline-block bg-[#f2b721] text-[#05213c] px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                0744-579-715
              </a>
              <p className="text-red-200 text-sm mt-2">Răspuns în 10-15 minute în Constanța</p>
            </div>

            <div className="bg-[#f2b721] p-6 rounded-xl text-[#05213c]">
              <div className="w-20 h-20 bg-[#05213c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">?</span>
              </div>
              <h3 className="text-xl font-bold mb-3">VERIFICARE & IDENTIFICARE</h3>
              <p className="mb-4">Miros slab, intermitent, suspiciuni</p>
              <a 
                href="tel:0722619097" 
                className="inline-block bg-[#05213c] text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-[#0a3a5c] transition-colors"
              >
                0722-619-097
              </a>
              <p className="text-sm mt-2">Service programat în maximum 2 ore</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl text-[#05213c]">
            <h3 className="text-xl font-bold mb-4">Experiența Noastră cu Apartamentele din Constanța</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Zone cu Intervenție Rapidă:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Centru Vechi:</strong> 10-12 minute</li>
                  <li>• <strong>Tomis Nord/Sud:</strong> 12-15 minute</li>
                  <li>• <strong>Km 4-5:</strong> 15-18 minute</li>
                  <li>• <strong>Mamaia:</strong> 18-20 minute</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tipuri de Blocuri Cunoscute:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Blocuri comuniste (instalații tip)</li>
                  <li>• Apartamente noi (sisteme moderne)</li>
                  <li>• Case transformate în apartamente</li>
                  <li>• Blocuri cu renovări/modernizări</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Emergency Guides */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Alte Situații de Urgență cu Gazele
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">!</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Gaz Scurs General</h3>
              <p className="text-gray-600 mb-4">
                Ghid complet pentru toate tipurile de scăpări de gaze.
              </p>
              <Link 
                href="/gaz-scurs-ce-fac"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi Ghidul Complet →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Centrală Nu Pornește</h3>
              <p className="text-gray-600 mb-4">
                Soluții rapide când centrala refuză să pornească.
              </p>
              <Link 
                href="/centrala-nu-porneste-iarna"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Soluții Centrale →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Sisteme Siguranță</h3>
              <p className="text-gray-600 mb-4">
                Detectoare și sisteme automate de protecție.
              </p>
              <Link 
                href="/sisteme-siguranta"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi Sisteme →
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
            "@type": "Article",
            "headline": "Miros gaz în apartament - Ce să faci urgent",
            "description": "Ghid complet de siguranță pentru situații cu miros de gaz în apartamente",
            "author": {
              "@type": "Organization",
              "name": "Conest Impex SRL"
            },
            "about": {
              "@type": "Thing",
              "name": "Siguranța gazelor în apartamente"
            },
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Ce fac dacă simt miros de gaz în apartament?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "1. Nu atinge nimic electric, 2. Oprește gazele imediat, 3. Ventilează urgent, 4. Evacuează și sună specialistul"
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Cât de periculos este mirosul de gaz în apartament?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Extrem de periculos - concentrația 5-15% poate exploda de la cea mai mică scânteie electrică"
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
  )
}