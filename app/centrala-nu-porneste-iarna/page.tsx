import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Centrala Nu Pornește Iarna - Soluții Rapide Constanța | Conest',
  description: 'Centrala termică nu pornește iarna? Soluții immediate + service urgent 24/7 în Constanța. Diagnosticare gratuită și intervenție rapidă. 0744-579-715',
  keywords: 'centrala nu porneste, centrala oprita iarna, service centrale urgenta, reparatii centrale constanta, centrala defecta, frig iarna',
  openGraph: {
    title: 'Urgență: Centrala Nu Pornește Iarna - Service Rapid Constanța',
    description: 'Soluții rapide pentru centrale termice oprite iarna. Service urgent 24/7 cu tehnicienii autorizați ISCIR.',
    url: 'https://conest-gaze-centrale.ro/centrala-nu-porneste-iarna',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary',
    title: 'Urgență: Centrala Nu Pornește Iarna - Service Rapid Constanța',
    description: 'Soluții rapide pentru centrale termice oprite iarna. Service urgent 24/7 cu tehnicienii autorizați ISCIR.',
  },
  alternates: {
    canonical: 'https://conest-gaze-centrale.ro/centrala-nu-porneste-iarna',
  },
}

export const dynamic = 'force-dynamic'

export default function CentralaNuPornesteIarna() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
              Centrala Nu Pornește Iarna?
              <span className="block text-[#f2b721] mt-2 text-2xl md:text-3xl">Soluții Rapide + Service 24/7</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Frig în casă și centrala refuză să pornească? Nu răma în frig!
              Urmează aceste verificări simple sau sună pentru intervenție urgentă.
            </p>
            <div className="bg-[#f2b721] text-[#05213c] p-4 rounded-lg mb-6 font-bold text-lg">
              Service Urgent Centrale: 
              <a href="tel:0744579715" className="text-xl ml-2 hover:underline">0744-579-715</a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Troubleshooting */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            Verificări Rapide - Încearcă primul acestea
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-xl mr-4">1</div>
                <h3 className="text-xl font-bold text-[#05213c]">Verifică energia electrică</h3>
              </div>
              <ul className="text-gray-700 space-y-3">
                <li>• Centrala este conectată la priză?</li>
                <li>• Siguranța/întrerupătorul central este pe ON?</li>
                <li>• Display-ul afișează ceva sau este negru?</li>
                <li>• Încearcă să resetezi din întrerupător (OFF-ON)</li>
              </ul>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Sfat:</strong> Multe probleme se rezolvă cu un simplu reset!</p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-xl mr-4">2</div>
                <h3 className="text-xl font-bold text-[#05213c]">Verifică gazele naturale</h3>
              </div>
              <ul className="text-gray-700 space-y-3">
                <li>• Robinetul de gaze este deschis?</li>
                <li>• Contorul de gaze funcționează?</li>
                <li>• Aragazu sau alte aparate pornesc?</li>
                <li>• Nu auzi miros de gaze nearse?</li>
              </ul>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Atenție:</strong> Dacă simți miros de gaz, <Link href="/gaz-scurs-ce-fac" className="underline font-semibold">urmează procedura de urgență!</Link></p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-xl mr-4">3</div>
                <h3 className="text-xl font-bold text-[#05213c]">Verifică presiunea sistemului</h3>
              </div>
              <ul className="text-gray-700 space-y-3">
                <li>• Presiunea sistemului: între 1-2 bari?</li>
                <li>• Manometrul afișează "zona verde"?</li>
                <li>• Dacă sub 1 bar: adaugă apă din robinet umplere</li>
                <li>• Dacă peste 2,5 bari: evacuează puțină apă</li>
              </ul>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Important:</strong> Presiunea greșită = centrală blocată!</p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-xl mr-4">4</div>
                <h3 className="text-xl font-bold text-[#05213c]">Verifică termostatul</h3>
              </div>
              <ul className="text-gray-700 space-y-3">
                <li>• Termostatul este setat corect (18-22°C)?</li>
                <li>• Bateriile sunt OK (dacă wireless)?</li>
                <li>• Afișează temperatura de încălzire?</li>
                <li>• Încearcă să crești temperatura cu 2-3 grade</li>
              </ul>
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700"><strong>Truc:</strong> Centrala pornește doar dacă temperatura setată este mai mare decât temperatura actuală!</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f3f2ef] border-2 border-[#f2b721] rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#05213c] mb-4">Încă nu merge după aceste verificări?</h3>
            <p className="text-gray-700 mb-6">
              Este posibil să fie o problemă tehnică care necesită un specialist autorizat ISCIR.
              Nu risca să rămâi în frig - apelează la experți!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0744579715" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#05213c] text-white rounded-[25px] font-bold text-lg hover:bg-[#0a3a5c] transition-colors"
              >
                SERVICE URGENT: 0744-579-715
              </a>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#05213c] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#05213c] hover:text-white transition-colors"
              >
                Service Standard: 0722-619-097
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Winter Problems */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
            Probleme tipice de iarnă cu centralele
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Îngheț în conductele exterioare</h3>
              <div className="space-y-3">
                <p className="text-gray-600"><strong>Simptome:</strong> Centrala încearcă să pornească dar se oprește repede, cod eroare presiune.</p>
                <p className="text-gray-600"><strong>Cauză:</strong> Temperaturi sub -10°C îngheață apa din conductele de evacuare/intrare.</p>
                <p className="text-gray-700"><strong>Soluție:</strong> Dezgheț cu apă caldă sau uscător de păr (NICIODATĂ cu flacără!)</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>Prevenție:</strong> Izolează conductele expuse cu spumă poliuretanică</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Coșul de fum blocat</h3>
              <div className="space-y-3">
                <p className="text-gray-600"><strong>Simptome:</strong> Centrala pornește apoi se oprește, miros de gaze arse în casă.</p>
                <p className="text-gray-600"><strong>Cauză:</strong> Zăpadă, gheață sau obiecte blochează evacuarea gazelor.</p>
                <p className="text-gray-700"><strong>Soluție:</strong> Verifică și curăță capătul coșului de fum din exterior.</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>Pericol:</strong> Gazele arse toxice pot intoxica! Ventilează imediat!</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Defecțiuni electronice</h3>
              <div className="space-y-3">
                <p className="text-gray-600"><strong>Simptome:</strong> Display mort, nu răspunde la comenzi, coduri de eroare ciudate.</p>
                <p className="text-gray-600"><strong>Cauză:</strong> Frigul afectează componentele electronice, în special senzorii.</p>
                <p className="text-gray-700"><strong>Soluție:</strong> Reset complet + verificare de specialist pentru înlocuiri.</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>Info:</strong> Centralele peste 10 ani sunt mai vulnerabile la frig</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Probleme cu termostatul</h3>
              <div className="space-y-3">
                <p className="text-gray-600"><strong>Simptome:</strong> Centrala nu primește comandă de pornire, termostat nu comunică.</p>
                <p className="text-gray-600"><strong>Cauză:</strong> Bateriile slabe, senzor defect sau pierdere semnal wireless.</p>
                <p className="text-gray-700"><strong>Soluție:</strong> Schimbă bateriile, resetează termostatul, verifică conexiunile.</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>Sfat:</strong> Ține bateriile de rezervă în casă, nu în garaj rece</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Codes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Coduri de eroare frecvente iarna
          </h2>
          
          <div className="space-y-4">
            <div className="bg-[#f9f9f9] p-4 rounded-lg border-l-4 border-[#f2b721]">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#05213c]">F28 / F29 - Probleme aprindere</h3>
                <span className="bg-[#05213c] text-white px-3 py-1 rounded-full text-sm font-bold">URGENT</span>
              </div>
              <p className="text-gray-700 mt-2">
                <strong>Cauză:</strong> Lipsă gaze, electrozi murdari, ventilator blocat de gheață.
                <br /><strong>Acțiune:</strong> Verifică gazele, curăță exterior centrală, chiamă specialist dacă persistă.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-4 rounded-lg border-l-4 border-[#f2b721]">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#05213c]">F22 - Presiune scăzută</h3>
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold">MEDIU</span>
              </div>
              <p className="text-gray-700 mt-2">
                <strong>Cauză:</strong> Pierderi în sistem, vase expansiune defecte, aerisiri necompletate.
                <br /><strong>Acțiune:</strong> Completează apă până la 1.5 bari, caută pierderi vizibile.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-4 rounded-lg border-l-4 border-[#f2b721]">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#05213c]">F54 / F61 - Probleme pompă</h3>
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold">MEDIU</span>
              </div>
              <p className="text-gray-700 mt-2">
                <strong>Cauză:</strong> Pompă blocată de depozite, aer în sistem, probleme electrice.
                <br /><strong>Acțiune:</strong> Aerisire sistem, verificare conexiuni pompă - necesită specialist.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-4 rounded-lg border-l-4 border-[#f2b721]">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#05213c]">F75 - Senzor presiune</h3>
                <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-sm font-bold">UȘOR</span>
              </div>
              <p className="text-gray-700 mt-2">
                <strong>Cauză:</strong> Senzor de presiune defect sau conexiuni slăbite de frig.
                <br /><strong>Acțiune:</strong> Reset centrală, verifică conexiuni - poate necesita înlocuire senzor.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-[#05213c] p-6 rounded-xl text-white text-center">
            <h3 className="text-xl font-bold mb-4">Nu găsești codul tău de eroare aici?</h3>
            <p className="mb-4">
              Fiecare marcă de centrală are codurile sale specifice. Tehnicienii noștri cunosc 
              toate mărcile și au instrumentele de diagnosticare profesională.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0744579715" 
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#f2b721] text-[#05213c] rounded-lg font-bold hover:bg-[#e0a61d] transition-colors"
              >
                Diagnosticare urgentă
              </a>
              <a 
                href="mailto:contact@conest-gaze-centrale.ro?subject=Cod%20Eroare%20Centrală&body=Bună%20ziua,%0D%0A%0D%0ACentrala%20mea%20afișează%20codul:%20[INTRODU%20CODUL]%0D%0AMarca%20centrală:%20[MARCA]%0D%0AModel:%20[MODEL]%0D%0ATelefon%20contact:%20[TELEFON]%0D%0A%0D%0AVă%20rog%20să%20mă%20contactați%20pentru%20service.%0D%0A%0D%0AMulțumesc!" 
                className="inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-[#f2b721] text-[#f2b721] rounded-lg font-semibold hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
              >
                Trimite codul pe email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Cum previi problemele de iarnă?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#05213c] mb-4">Service pre-sezon (toamna)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#f2b721] mr-2 font-bold">•</span>
                  <span><strong>Curățare completă</strong> - schimbător, arzător, electrozi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f2b721] mr-2 font-bold">•</span>
                  <span><strong>Verificare presiune</strong> - sistem și vase expansiune</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f2b721] mr-2 font-bold">•</span>
                  <span><strong>Test funcționare</strong> - toate modurile și siguranțele</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f2b721] mr-2 font-bold">•</span>
                  <span><strong>Izolare conducte</strong> - protecție împotriva înghețului</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#05213c] mb-4">Măsuri de protecție iarnă</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#05213c] mr-2 font-bold">•</span>
                  <span><strong>Temperatură minimă</strong> - nu lăsa sub 15°C niciodată</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#05213c] mr-2 font-bold">•</span>
                  <span><strong>Funcționare săptămânală</strong> - chiar și când pleci</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#05213c] mr-2 font-bold">•</span>
                  <span><strong>Verificare periodică</strong> - presiune și funcționare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#05213c] mr-2 font-bold">•</span>
                  <span><strong>Acces liber</strong> - nu bloca aerisirea centralei</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-8 rounded-xl border-2 border-[#f2b721]">
            <h3 className="text-xl font-bold text-[#05213c] mb-6 text-center">
              Pachet service pre-iarnă - reducere 25%
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="font-semibold text-[#05213c]">Service complet</h4>
                <p className="text-2xl font-bold text-[#f2b721]">299 RON</p>
                <p className="text-sm text-gray-600">în loc de 399 RON</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#05213c]">+ Izolare conducte</h4>
                <p className="text-2xl font-bold text-[#f2b721]">399 RON</p>
                <p className="text-sm text-gray-600">în loc de 550 RON</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#05213c]">+ Termostat smart</h4>
                <p className="text-2xl font-bold text-[#f2b721]">699 RON</p>
                <p className="text-sm text-gray-600">în loc de 899 RON</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 mb-3">*Ofertă valabilă septembrie-noiembrie pentru pensionari</p>
              <Link 
                href="/centrale-termice"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Rezervă service pre-iarnă
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 [font-family:'Poppins',Helvetica]">
            Service urgent iarnă 24/7
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nu rămâne în frig! Echipa noastră de intervenții urgente lucrează non-stop,
            chiar și în weekenduri și sărbători. <strong className="text-[#f2b721]">Garanție de intervenție în maxim 2 ore!</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#f2b721] text-[#05213c] p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">30 min</div>
              <h3 className="font-semibold mb-2">Diagnostic la telefon</h3>
              <p className="text-sm">Identificăm problema și îți dăm soluții imediate</p>
            </div>

            <div className="bg-white text-[#05213c] p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">2 ore</div>
              <h3 className="font-semibold mb-2">Intervenție la fața locului</h3>
              <p className="text-sm text-gray-600">Ajungem cu toate piesele necesare</p>
            </div>

            <div className="bg-[#f2b721] text-[#05213c] p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <h3 className="font-semibold mb-2">Disponibilitate</h3>
              <p className="text-sm">Inclusiv în zile de sărbătoare și weekenduri</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:0744579715" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-bold text-xl hover:bg-[#e0a61d] transition-colors"
            >
              URGENȚE: 0744-579-715
            </a>
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Service standard: 0722-619-097
            </a>
          </div>

          <p className="text-gray-300">
            CON EST IMPEX SRL - Autorizat ANRE și ISCIR pentru intervenții la instalațiile de gaze naturale în Constanța
            <br /><strong className="text-[#f2b721]">Zonele cu intervenție garantată sub 2 ore:</strong>
            Constanța, Mamaia, Năvodari, Ovidiu, Eforie Nord/Sud
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Servicii conexe pentru centrale termice
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Service preventiv</h3>
              <p className="text-gray-600 mb-4">
                Mentenanță regulată pentru evitarea problemelor de iarnă.
              </p>
              <Link 
                href="/centrale-termice"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#f2b721] text-[#05213c] rounded-lg font-semibold hover:bg-[#e0a61d] transition-colors"
              >
                Programează service
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Termostate smart</h3>
              <p className="text-gray-600 mb-4">
                Control inteligent pentru eficiență și confort maxim.
              </p>
              <Link 
                href="/modernizare-smart-home"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#f2b721] text-[#05213c] rounded-lg font-semibold hover:bg-[#e0a61d] transition-colors"
              >
                Vezi modernizări
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Instalații gaze</h3>
              <p className="text-gray-600 mb-4">
                Verificare și modernizare instalații de alimentare cu gaze.
              </p>
              <Link 
                href="/instalatii-gaze-naturale"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#f2b721] text-[#05213c] rounded-lg font-semibold hover:bg-[#e0a61d] transition-colors"
              >
                Vezi instalații
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Centrala nu pornește iarna - Ghid de rezolvare rapidă",
            "description": "Soluții complete pentru problemele de pornire ale centralelor termice în perioada de iarnă",
            "image": "https://conest-gaze-centrale.ro/img/hero-1.png",
            "totalTime": "PT30M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "RON",
              "value": "0"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Telefon pentru apeluri de urgență"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Manometru centrală termică"
              },
              {
                "@type": "HowToTool",
                "name": "Termostat"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Verifică energia electrică",
                "text": "Controlează alimentarea electrică și resetează centrala",
                "image": "https://conest-gaze-centrale.ro/img/safety-step1.png"
              },
              {
                "@type": "HowToStep",
                "name": "Verifică alimentarea cu gaze",
                "text": "Asigură-te că gazele sunt deschise și funcționale",
                "image": "https://conest-gaze-centrale.ro/img/safety-step2.png"
              },
              {
                "@type": "HowToStep",
                "name": "Controlează presiunea sistemului",
                "text": "Presiunea trebuie să fie între 1-2 bari",
                "image": "https://conest-gaze-centrale.ro/img/safety-step3.png"
              },
              {
                "@type": "HowToStep",
                "name": "Verifică termostatul",
                "text": "Setări corecte și funcționare normală",
                "image": "https://conest-gaze-centrale.ro/img/safety-step4.png"
              }
            ],
            "author": {
              "@type": "Organization",
              "name": "CON EST IMPEX SRL"
            }
          })
        }}
      />
    </div>
  )
}