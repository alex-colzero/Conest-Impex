import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Presiune Scăzută Gaze - Cauze și Soluții Rapide Constanța | Conest',
  description: 'Presiune scăzută la gazele naturale? Centrala nu pornește? Soluții imediate + service urgent în Constanța. Diagnosticare gratuită. Contact: 0744-579-715',
  keywords: 'presiune scazuta gaze, centrala nu porneste presiune, probleme presiune gaz, manometru rosu, service gaze constanta',
  openGraph: {
    title: 'Presiune Scăzută Gaze - Soluții Rapide și Service Urgent',
    description: 'Cauze și soluții pentru presiunea scăzută la gazele naturale. Service specializat în Constanța.',
    url: 'https://conest-gaze-centrale.ro/presiune-scazuta-gaze',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function PresiuineScazutaGaze() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Presiune Scăzută la Gaze?
                <span className="block text-[#f2b721] mt-2 text-2xl md:text-3xl">Soluții Rapide + Diagnosticare</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Centrala nu pornește din cauza presiunii scăzute? Manometrul arată în zona roșie? 
                <strong>Rezolvă rapid</strong> cu aceste soluții verificate sau contactează-ne pentru ajutor specializat.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Diagnosticare Gratuită</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Intervenție Rapidă</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Autorizat ANRE</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Diagnosticare Gratuită
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="/img/hero-1.png" 
                alt="Diagnosticare presiune gaze naturale" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Soluții Imediate - Încearcă Primul
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Urmează acești pași de diagnosticare pentru a identifica rapid cauza presiunii scăzute
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-2xl mr-4">1</div>
                <h3 className="text-xl font-semibold text-[#05213c]">Verifică Manometrul</h3>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li><strong>Normal:</strong> 1.0 - 2.0 bari (zona verde)</li>
                <li><strong>Scăzut:</strong> sub 1.0 bar (zona roșie)</li>
                <li><strong>Prea mare:</strong> peste 2.5 bari</li>
                <li><strong>Localizare:</strong> lângă centrală sau contorul de gaze</li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-[#f2b721]">
                <p className="text-sm text-[#05213c]"><strong>Important:</strong> Presiunea optimă = 1.5 bari pentru majoritatea sistemelor</p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-2xl mr-4">2</div>
                <h3 className="text-xl font-semibold text-[#05213c]">Verifică Contorul</h3>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li>Se mișcă cadranul când consumi gaz?</li>
                <li>Robinetul general este complet deschis?</li>
                <li>Nu sunt erori pe display (dacă digital)?</li>
                <li>Aragazul sau alte aparate funcționează?</li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-red-500">
                <p className="text-sm text-[#05213c]"><strong>Atenție:</strong> Dacă contorul nu se mișcă deloc, problemă la furnizor!</p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-2xl mr-4">3</div>
                <h3 className="text-xl font-semibold text-[#05213c]">Caută Pierderi Vizibile</h3>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li>Testează cu spumă de săpun îmbinările</li>
                <li>Simți miros de gaz pe undeva?</li>
                <li>Vezi pete de umiditate suspect de persistente?</li>
                <li>Racorduri slăbite sau corodate vizibil?</li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-red-500">
                <p className="text-sm text-[#05213c]"><strong>Urgent:</strong> Dacă găsești scurgeri, <Link href="/gaz-scurs-ce-fac" className="text-[#f2b721] hover:underline font-semibold">urmează procedura de urgență!</Link></p>
              </div>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-2xl mr-4">4</div>
                <h3 className="text-xl font-semibold text-[#05213c]">Verifică Regulatorul</h3>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li>Regulatorul de presiune (alb/galben) la contorul tău</li>
                <li>Sună/vibrează sau face zgomote?</li>
                <li>Are gheață pe el (iarna)?</li>
                <li>Conexiunile sunt bine fixate?</li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-red-500">
                <p className="text-sm text-[#05213c]"><strong>Nu atinge:</strong> Regulatorul se reglează DOAR de specialiști autorizați!</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#f2b721] p-8 rounded-xl text-[#05213c] text-center">
            <h3 className="text-2xl font-bold mb-4">
              Nu ai găsit cauza?
            </h3>
            <p className="mb-6">
              Presiunea scăzută poate avea cauze complexe care necesită echipament de diagnosticare profesional.
              <br />Nu lăsa centrala să nu funcționeze - un specialist poate identifica problema în 30 de minute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#05213c] text-white rounded-[25px] font-semibold text-lg hover:bg-[#0a3a5c] transition-colors"
              >
                Diagnosticare Gratuită: 0722-619-097
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
              <a 
                href="tel:0744579715" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white rounded-[25px] font-semibold text-lg hover:bg-red-700 transition-colors"
              >
                Service Urgent: 0744-579-715
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Cauze Frecvente ale Presiunii Scăzute
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Înțelege principalele motive pentru care presiunea gazelor poate scădea
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white font-bold">40%</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Probleme la Furnizor</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Cauze principale:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Presiune scăzută în rețeaua locală</li>
                    <li>• Lucrări de mentenanță la distribuitor</li>
                    <li>• Suprasolicitare în perioadele reci</li>
                    <li>• Avarii la stațiile de reglare</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Cum să verifici:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Întreabă vecinii dacă au aceeași problemă</li>
                    <li>• Sună la furnizor pentru informații</li>
                    <li>• Verifică site-ul pentru anunțuri întreruperi</li>
                  </ul>
                </div>
                <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#f2b721]">
                  <p className="text-sm text-[#05213c]"><strong>Distrigaz Sud:</strong> 0800.800.928 (apel gratuit)</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white font-bold">25%</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Regulator de Presiune Defect</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Simptome specifice:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Presiune variabilă (sare sus-jos)</li>
                    <li>• Zgomote de vibrație la regulator</li>
                    <li>• Flacără instabilă la aparate</li>
                    <li>• Presiune ok dimineața, scade ziua</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Cauze posibile:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Membrană ruptă în regulator</li>
                    <li>• Reglare incorectă</li>
                    <li>• Uzură după 10+ ani</li>
                    <li>• Îngheț iarna (conductele de impuls)</li>
                  </ul>
                </div>
                <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#f2b721]">
                  <p className="text-sm text-[#05213c]"><strong>Important:</strong> Înlocuirea - doar de tehnicienii autorizați!</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white font-bold">20%</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Pierderi în Instalație</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Locuri frecvente:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Îmbinări la racorduri (filetate)</li>
                    <li>• Robinete vechi cu garnituri uzate</li>
                    <li>• Conducte în pereți (micro-fisuri)</li>
                    <li>• Aparate consumatoare defecte</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Detectare:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Test cu spumă de săpun (baloane = scurgere)</li>
                    <li>• Detector de gaze portabil</li>
                    <li>• Miros caracteristic</li>
                    <li>• Presiune scade treptat zilnic</li>
                  </ul>
                </div>
                <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#f2b721]">
                  <p className="text-sm text-[#05213c]"><strong>Sfat:</strong> Chiar și o scurgere mică poate cauza presiune scăzută!</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-white font-bold">15%</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Probleme la Instalația Interioară</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Cauze tehnice:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Conducte subdimensionate (prea mici)</li>
                    <li>• Lungimi prea mari fără compensare</li>
                    <li>• Prea multe aparate pe o conductă</li>
                    <li>• Îmbinări cu pierderi de sarcină mari</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-2">Când suspectezi:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Presiune scade când pornesc mai multe aparate</li>
                    <li>• Instalație foarte veche (20+ ani)</li>
                    <li>• Renovări/extinderi neautorizate</li>
                    <li>• Nu a fost niciodată verificată de specialist</li>
                  </ul>
                </div>
                <div className="bg-[#f3f2ef] p-4 rounded-lg border-l-4 border-[#f2b721]">
                  <p className="text-sm text-[#05213c]"><strong>Soluție:</strong> Redesign instalație de specialist ANRE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pressure Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Ghid Presiuni Gaze Naturale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Înțelege parametrii optimi de presiune pentru funcționarea sigură a instalației
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#f9f9f9] p-8 rounded-xl text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">!</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">PRESIUNE SCĂZUTĂ</h3>
              <div className="text-3xl font-bold text-red-600 mb-4">0.5 - 1.0 bari</div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>Centrala nu pornește</li>
                <li>Flacără slabă la aragaz</li>
                <li>Aparate se opresc des</li>
                <li>Randament scăzut</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">PRESIUNE OPTIMĂ</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">1.0 - 2.0 bari</div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>Funcționare perfectă</li>
                <li>Flacără stabilă albastră</li>
                <li>Toate aparatele OK</li>
                <li>Consum eficient</li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">⚠</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">PRESIUNE MARE</h3>
              <div className="text-3xl font-bold text-yellow-600 mb-4">2.5+ bari</div>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>Risc de deteriorări</li>
                <li>Consum mărit</li>
                <li>Zgomote la aparate</li>
                <li>Uzură prematură</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#05213c] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Presiuni Standard în România</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4 text-[#f2b721]">La Consumatori Casnici:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><strong>Intrare în casă/apartament:</strong> 1.5 - 2.0 bari</li>
                  <li><strong>La aparatele de consum:</strong> 1.0 - 1.8 bari</li>
                  <li><strong>Centrală termică standard:</strong> 1.2 - 2.0 bari</li>
                  <li><strong>Aragaz cu cuptor:</strong> 1.0 - 1.5 bari</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-[#f2b721]">În Rețeaua de Distribuție:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><strong>Rețea stradală:</strong> 4 - 16 bari</li>
                  <li><strong>După regulator de cartier:</strong> 2 - 4 bari</li>
                  <li><strong>Branșament individual:</strong> 1.5 - 2.5 bari</li>
                  <li><strong>Fluctuații admisibile:</strong> ±10% din nominal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Cause */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Soluții Specifice după Cauză
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metode de rezolvare adaptăte specific fiecărei cauze identificate
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">Problemă la Furnizor → Ce să faci:</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-4">Acțiuni imediate:</h4>
                  <ul className="text-gray-600 space-y-3">
                    <li>Sună la Distrigaz Sud: <strong>0800.800.928</strong></li>
                    <li>Raportează adresa exactă și problema</li>
                    <li>Întreabă vecinii pentru confirmare</li>
                    <li>Așteaptă rezolvarea (de obicei 2-4 ore)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-4">Timp de rezolvare:</h4>
                  <ul className="text-gray-600 space-y-3">
                    <li>Avarie simplă: <strong>2-6 ore</strong></li>
                    <li>Lucrări programate: <strong>anunțate în avans</strong></li>
                    <li>Suprasolicitare (iarna): <strong>24-48 ore</strong></li>
                    <li>Înlocuire regulator zonă: <strong>1-3 zile</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">Regulator Defect → Înlocuire Urgentă:</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-4">Semnale că trebuie înlocuit:</h4>
                  <ul className="text-gray-600 space-y-3">
                    <li>Presiune instabilă (oscilează)</li>
                    <li>Zgomote puternice de vibrație</li>
                    <li>Presiune constantă sub 1 bar</li>
                    <li>Vechime peste 15 ani</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-4">Costuri înlocuire:</h4>
                  <ul className="text-gray-600 space-y-3">
                    <li>Regulator standard: <strong>350-500 RON</strong></li>
                    <li>+ montaj autorizat: <strong>200-300 RON</strong></li>
                    <li>Total cu garanție 2 ani: <strong>550-800 RON</strong></li>
                    <li>Diagnosticare: <strong>GRATUITĂ</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">Pierderi în Sistem → Detectare și Reparare:</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-4">Metode de detectare:</h4>
                  <ul className="text-gray-600 space-y-3">
                    <li>Test cu spumă săpun (DIY)</li>
                    <li>Detector electronic profesional</li>
                    <li>Test de presiune cu manometru</li>
                    <li>Inspecție termoviziune (îmbinări reci)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#05213c] mb-4">Reparații tipice:</h4>
                  <ul className="text-gray-600 space-y-3">
                    <li>Strângere îmbinări: <strong>50-150 RON</strong></li>
                    <li>Schimbare garnituri: <strong>100-200 RON</strong></li>
                    <li>Înlocuire racord flexibil: <strong>150-250 RON</strong></li>
                    <li>Refacere porțiune conductă: <strong>300-600 RON</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#f2b721] p-8 rounded-xl text-[#05213c]">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Servicii Complete Presiune Scăzută
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold mb-3">Diagnosticare Completă</h4>
                <p className="text-3xl font-bold mb-2">GRATUITĂ</p>
                <p className="text-sm">inclusiv măsurători presiune</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Detectare Scurgeri</h4>
                <p className="text-3xl font-bold mb-2">199 RON</p>
                <p className="text-sm">cu echipament profesional</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Înlocuire Regulator</h4>
                <p className="text-3xl font-bold mb-2">599 RON</p>
                <p className="text-sm">montaj + garanție 2 ani</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center gap-3 bg-[#05213c] text-white px-8 py-4 rounded-[25px] font-semibold text-lg hover:bg-[#0a3a5c] transition-colors"
              >
                Programează Diagnosticare
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention & Maintenance */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Cum Previi Problemele de Presiune?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategii de menținere preventivă pentru evitarea problemelor de presiune
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#05213c] mb-6">Verificări Regulate</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2">📊 Monitorizare Presiune (Săptămânal)</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Citește manometrul din același moment al zilei</li>
                    <li>• Notează variații majore (+/-0.3 bari)</li>
                    <li>• Observă comportamentul la pornirea aparatelor</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-2">🔍 Inspecție Vizuală (Lunar)</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Verifică starea racordurilor vizibile</li>
                    <li>• Caută semne de coroziune sau uzură</li>
                    <li>• Ascultă zgomote neobișnuite la regulator</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#05213c] mb-4">🔧 Mentenanță Profesională</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-800 mb-2">🔄 Service Anual Regulator</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Calibrare presiune de ieșire</li>
                    <li>• Curățare filtru de intrare</li>
                    <li>• Verificare membrană și arcuri</li>
                    <li>• Test presiune cu aparatura specializată</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-800 mb-2">🛠️ Verificare ANRE (La 2 Ani)</h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Măsurători presiune în multiple puncte</li>
                    <li>• Test etanșeitate întregul sistem</li>
                    <li>• Verificare conformitate instalație</li>
                    <li>• Certificat de siguranță în exploatare</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#05213c] p-6 rounded-xl text-white text-center">
            <h3 className="text-xl font-bold mb-4">💡 Sfaturi de la Specialiști</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">❄️ Iarna</h4>
                <p className="text-sm">Protejează regulatorul de îngheț cu izolatie termică non-inflamabilă</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">🌡️ Vara</h4>
                <p className="text-sm">Verifică mai des - căldura dilată materialele și poate slăbi îmbinările</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">🔧 Instalații</h4>
                <p className="text-sm">Nu face modificări fără avizul unui specialist ANRE - pot afecta presiunea</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            📞 Probleme cu Presiunea Gazelor?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nu lăsa centrala să stea oprită din cauza presiunii scăzute! 
            <br />Echipa noastră are experiență în <strong className="text-yellow-300">diagnosticarea rapidă</strong> a problemelor de presiune.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-orange-600 p-6 rounded-xl">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DIAGNOSTICARE GRATUITĂ</h3>
              <p className="text-orange-200 mb-4">Identificăm cauza în maximum 30 minute</p>
              <a 
                href="tel:0722619097" 
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
              >
                📞 0722-619-097
              </a>
            </div>

            <div className="bg-red-600 p-6 rounded-xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">INTERVENȚIE URGENTĂ</h3>
              <p className="text-red-200 mb-4">Pentru reparații imediate și situații critice</p>
              <a 
                href="tel:0744579715" 
                className="inline-block bg-yellow-400 text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 0744-579-715
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl text-[#05213c]">
            <h3 className="text-2xl font-bold mb-8 text-center">De Ce Ne Alegi Pentru Probleme de Presiune?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/img/icon-29.png" alt="Diagnostic" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-3">Diagnosticare Precisă</h4>
                <p className="text-gray-600">Manometre digitale profesionale și echipament de măsurat presiuni</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/img/icon-29.png" alt="Parts" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-3">Piese Originale</h4>
                <p className="text-gray-600">Regulatoare și componente certificate pentru siguranță maximă</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/img/check-27.svg" alt="Certificates" className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-3">Autorizări Complete</h4>
                <p className="text-gray-600">ANRE și ISCIR - toate lucrările sunt conforme și garantate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            🔗 Servicii Conexe pentru Instalații Gaze
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Verificări ANRE</h3>
              <p className="text-gray-600 mb-4">
                Revizii tehnice obligatorii pentru detectarea timpurie a problemelor.
              </p>
              <Link 
                href="/revizii-anre"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Programează Revizia →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Service Centrale</h3>
              <p className="text-gray-600 mb-4">
                Reparații pentru centrale care nu pornesc din cauza presiunii.
              </p>
              <Link 
                href="/centrale-termice"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi Service Centrale →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Modernizare Instalații</h3>
              <p className="text-gray-600 mb-4">
                Upgrade la sisteme moderne cu presiune stabilă.
              </p>
              <Link 
                href="/instalatii-gaze-naturale"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi Modernizări →
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
            "@type": "HowTo",
            "name": "Cum să rezolvi presiunea scăzută la gazele naturale",
            "description": "Ghid complet pentru diagnosticarea și rezolvarea problemelor de presiune scăzută la instalațiile de gaze naturale",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Manometru pentru măsurarea presiunii"
              },
              {
                "@type": "HowToSupply", 
                "name": "Spumă de săpun pentru detectarea scurgerilor"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Verifică manometrul",
                "text": "Controlează presiunea pe manometru - normal între 1.0-2.0 bari"
              },
              {
                "@type": "HowToStep",
                "name": "Verifică contorul de gaze",
                "text": "Asigură-te că robinetul general este deschis și contorul funcționează"
              },
              {
                "@type": "HowToStep",
                "name": "Detectează pierderile",
                "text": "Caută scurgeri vizibile cu spumă de săpun pe îmbinări"
              },
              {
                "@type": "HowToStep",
                "name": "Verifică regulatorul",
                "text": "Inspectează regulatorul de presiune pentru defecțiuni"
              }
            ]
          })
        }}
      />
    </div>
  )
}