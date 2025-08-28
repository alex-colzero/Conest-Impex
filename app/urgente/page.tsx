import { Metadata } from 'next'
import { SharedHeader } from '../../src/components/SharedHeader'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Urgențe 24/7 - Intervenții Rapide Gaze și Centrale | Conest',
  description: 'Service urgent 24/7 pentru gaze și centrale termice în Constanța. Intervenții rapide pentru scurgeri, centrale oprite, presiune scăzută. ☎️ 0744-579-715',
  keywords: 'urgente gaze, service 24/7, interventii rapide, centrale termice, scurgeri gaze, Constanta',
  openGraph: {
    title: 'Urgențe 24/7 - Intervenții Rapide Gaze și Centrale',
    description: 'Service urgent non-stop pentru situații de urgență cu gazele și centralele termice.',
    url: 'https://conest.ro/urgente',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function Urgente() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-red-800 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🚨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
              Urgențe 24/7
              <span className="block text-yellow-300 mt-2">Intervenții Rapide</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-4xl mx-auto">
              Service non-stop pentru urgențe gaze și centrale termice. Timp de răspuns rapid în Constanța și împrejurimi. 
              Echipa noastră este pregătită să intervină imediat în situații critice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0744579715" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-yellow-500 text-red-800 rounded-[25px] font-bold text-xl hover:bg-yellow-400 transition-colors"
              >
                URGENȚE: 0744-579-715
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-yellow-300 text-yellow-300 rounded-[25px] font-semibold text-lg hover:bg-yellow-300 hover:text-red-800 transition-colors"
              >
                Service Standard: 0722-619-097
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              🚨 Situații de urgență
            </h2>
            <p className="text-xl text-gray-600">Intervenții imediate pentru următoarele situații critice</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">Scăpări de gaze</h3>
              <p className="text-red-700 mb-4">Miros de gaze în casă sau în curte</p>
              <ul className="text-red-600 text-sm space-y-1">
                <li>• Închideți imediat robinetul general</li>
                <li>• Nu aprindeți lumina sau chibrituri</li>
                <li>• Aerisiți spațiul</li>
                <li>• Sunați-ne urgent!</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Centrale oprite</h3>
              <p className="text-orange-700 mb-4">Centrala nu pornește sau se oprește des</p>
              <ul className="text-orange-600 text-sm space-y-1">
                <li>• Verificare presiune sistem</li>
                <li>• Diagnosticare electronica</li>
                <li>• Remediere imediată</li>
                <li>• Piese de schimb originale</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📉</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Presiune scăzută</h3>
              <p className="text-blue-700 mb-4">Presiune insuficientă în sistem</p>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Identificare cauze presiune scăzută</li>
                <li>• Verificare pierderi sistem</li>
                <li>• Reumplere cu apă</li>
                <li>• Testare funcționare</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Avarii instalații</h3>
              <p className="text-purple-700 mb-4">Defecțiuni în instalația de gaze</p>
              <ul className="text-purple-600 text-sm space-y-1">
                <li>• Robinete defecte</li>
                <li>• Conducte deteriorate</li>
                <li>• Aparate consumatoare</li>
                <li>• Regulatoare presiune</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Fără apă caldă</h3>
              <p className="text-green-700 mb-4">Centrale fără apă caldă menajeră</p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• Verificare schimbător căldură</li>
                <li>• Curățare circuite</li>
                <li>• Remediere senzori</li>
                <li>• Testare funcționare</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Alte urgențe</h3>
              <p className="text-gray-700 mb-4">Orice situație critică cu gazele</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Sunete neobișnuite</li>
                <li>• Flacără neregulată</li>
                <li>• Erori la centrală</li>
                <li>• Orice suspiciune</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Time */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8 [font-family:'Poppins',Helvetica]">
            ⏱️ Timpul nostru de răspuns
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">15 min</div>
              <h3 className="font-semibold text-red-800 mb-2">Scurgeri gaze</h3>
              <p className="text-gray-600 text-sm">Intervenție imediată pentru siguranța dumneavoastră</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">30 min</div>
              <h3 className="font-semibold text-red-800 mb-2">Centrale oprite</h3>
              <p className="text-gray-600 text-sm">Diagnosticare și remediere rapidă</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <h3 className="font-semibold text-red-800 mb-2">Disponibilitate</h3>
              <p className="text-gray-600 text-sm">Echipa noastră nu doarme niciodată</p>
            </div>
          </div>

          <div className="bg-white border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-red-800 mb-4">
              🎯 Zonele noastre de intervenție urgentă
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Constanța</strong> - 10-15 minute</li>
                <li>• <strong>Mamaia</strong> - 15-20 minute</li>
                <li>• <strong>Năvodari</strong> - 20-25 minute</li>
                <li>• <strong>Eforie Nord/Sud</strong> - 25-30 minute</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Mangalia</strong> - 30-40 minute</li>
                <li>• <strong>Medgidia</strong> - 35-45 minute</li>
                <li>• <strong>Ovidiu</strong> - 15-20 minute</li>
                <li>• <strong>Murfatlar</strong> - 20-25 minute</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            🚨 SUNAȚI ACUM PENTRU URGENȚE!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Fiecare minut contează în situațiile de urgență. Nu așteptați!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">URGENȚE CRITICE</h3>
              <p className="text-gray-300 mb-2">Scurgeri gaze, avarii majore</p>
              <a href="tel:0744579715" className="text-yellow-300 font-bold text-2xl">0744-579-715</a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">SERVICE GENERAL</h3>
              <p className="text-gray-300 mb-2">Reparații, întreținere</p>
              <a href="tel:0722619097" className="text-yellow-300 font-bold text-xl">0722-619-097</a>
            </div>
          </div>

          <div className="bg-red-900 border border-red-700 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">
              ⚠️ INSTRUCȚIUNI DE SIGURANȚĂ
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left text-white">
              <div>
                <h4 className="font-semibold mb-2">În caz de scurgere de gaze:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Închideți robinetul general de gaze</li>
                  <li>NU aprindeți lumina sau chibrituri</li>
                  <li>NU folosiți telefoanele în zonă</li>
                  <li>Deschideți ușile și ferestrele</li>
                  <li>Evacuați zona și sunați de afară</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pentru alte urgențe:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Opriți centrala de la întrerupător</li>
                  <li>Închideți gazele dacă este posibil</li>
                  <li>Notați simptomele observate</li>
                  <li>Pregătiți detaliile despre defecțiune</li>
                  <li>Sunați și descrieți situația</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0744579715" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white rounded-[25px] font-bold text-xl hover:bg-red-700 transition-colors"
            >
              URGENȚE: 0744-579-715
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6 invert" />
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}