import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { PricingSection } from '../../src/components/PricingSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Senzori Gaze și Electrovalve - Sisteme Siguranță | Conest',
  description: 'Detectoare gaze naturale cu electrovalvă automată în Constanța. Sisteme de siguranță pentru protecția familiei. Montaj profesional cu garanție 2 ani.',
  keywords: 'senzori gaze, detectoare gaze, electrovalve, sisteme siguranta, detectoare gaze naturale',
}

export const dynamic = 'force-dynamic'

export default function SistemeSiguranta() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Senzori Gaze
                <span className="block text-[#f2b721] mt-2">& Sisteme Siguranță</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Protejați-vă familia cu detectoare profesionale de gaze naturale și electrovalve automate. 
                Montaj și configurare completă cu garanție 2 ani.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Detectoare Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Electrovalve Automate</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Alertă Sonoră & Vizuală</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Protejează-ți Casa Acum
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="/img/hero-1.png" 
                alt="Sisteme de siguranță gaze" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Safety Systems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              De ce ai nevoie de sisteme de siguranță?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gazele naturale sunt sigure când sunt controlate, dar pot deveni periculoase în caz de scurgeri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-red-600 font-bold">!</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Risc de explozie</h3>
              <p className="text-gray-600">
                Gazele naturale acumulate în spații închise pot forma amestecuri explozive
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600 font-bold">O₂</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Risc de asfixiere</h3>
              <p className="text-gray-600">
                Concentrații mari de gaze pot deplasa oxigenul și cauza asfixiere
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600 font-bold">△</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Risc de incendiu</h3>
              <p className="text-gray-600">
                O scânteie poate declanșa un incendiu major în prezența gazelor
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Soluția: sisteme automate de detecție
            </h3>
            <p className="text-green-700 text-lg">
              Sistemele noastre detectează gazele înainte să devină periculoase și opresc automat alimentarea!
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Componentele sistemului de siguranță
            </h2>
            <p className="text-xl text-gray-600">
              Sistem complet de detecție și oprire automată
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">DETECTOR</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Detector gaze</h3>
              <p className="text-gray-600 mb-4">
                Senzor electrochimic de înaltă precizie care detectează concentrații mici de gaze naturale
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Sensibilitate: 10% din LIE</li>
                <li>• Alarmă la 20% din LIE</li>
                <li>• Certificat CE și EN</li>
                <li>• Durată de viață: 5 ani</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">VALVĂ</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Electrovalvă</h3>
              <p className="text-gray-600 mb-4">
                Valvă electromagnetică care oprește automat fluxul de gaze la detectarea unei scurgeri
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Timp de răspuns: &lt;1 secundă</li>
                <li>• Închidere automată</li>
                <li>• Deschidere manuală</li>
                <li>• Rezistentă la presiune</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">ALARMĂ</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Centrală Alarmă</h3>
              <p className="text-gray-600 mb-4">
                Unitate centrală care coordonează senzorii și activează măsurile de siguranță
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Alarmă sonoră puternică</li>
                <li>• LED-uri de stare</li>
                <li>• Backup baterie</li>
                <li>• Conectare la telefon</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">VENTILATOR</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Ventilator Evacuare</h3>
              <p className="text-gray-600 mb-4">
                Ventilator automat care evacuează gazele acumulate din încăpere
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Pornire automată</li>
                <li>• Debit mare de aer</li>
                <li>• Funcționare silențioasă</li>
                <li>• Montaj în perete/tavan</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">ALERTĂ</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Alertă Mobilă</h3>
              <p className="text-gray-600 mb-4">
                Notificare instant pe telefon în caz de detecție gaze (opțional)
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• SMS automat</li>
                <li>• Apel de urgență</li>
                <li>• Aplicație mobilă</li>
                <li>• Monitorizare 24/7</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-[#05213c]">UPS</span>
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">UPS Backup</h3>
              <p className="text-gray-600 mb-4">
                Sursă de alimentare neîntreruptibilă pentru funcționare și la căderea curentului
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Autonomie 24 ore</li>
                <li>• Încărcare automată</li>
                <li>• Baterii înlocuibile</li>
                <li>• LED stare baterie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Cum funcționează sistemul?
            </h2>
            <p className="text-xl text-gray-600">
              Protecție automată în 4 pași simpli
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Detecție</h3>
              <p className="text-gray-600">Senzorul detectează prezența gazelor în aer</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Alarmă</h3>
              <p className="text-gray-600">Se activează alarma sonoră și vizuală</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Oprire gaze</h3>
              <p className="text-gray-600">Electrovalva oprește automat fluxul de gaze</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#05213c]">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#05213c] mb-2">Evacuare</h3>
              <p className="text-gray-600">Ventilatorul evacuează gazele din încăpere</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              Toate aceste acțiuni se întâmplă AUTOMAT în mai puțin de 5 secunde!
            </h3>
            <p className="text-blue-700">
              Nu trebuie să faceți nimic - sistemul vă protejează familia chiar și când nu sunteți acasă.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection 
        type="siguranta"
        title="Pachete Sisteme Siguranță"
        subtitle="Protecție completă cu montaj profesional inclus"
      />

      {/* Testimonials Section */}
      <TestimonialsSection 
        title="Clienți Mulțumiți - Sisteme Siguranță"
        maxItems={3} 
      />

      {/* CTA Section */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Protejează-ți Familia Astăzi
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nu lăsa la întâmplare siguranța celor dragi. Montează un sistem profesional de detecție gaze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Solicită Consultanță Gratuită
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro?subject=Ofertă%20Sisteme%20Siguranță%20Constanța&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20trimiteți%20o%20ofertă%20pentru%20sisteme%20de%20siguranță%20gaze%20naturale%20în%20zona%20Constanța.%0D%0A%0D%0ADetalii%20proprietate:%0D%0A-%20Tip:%20apartament/casă%0D%0A-%20Suprafața:%0D%0A-%20Locația:%0D%0A%0D%0AMulțumesc!" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Cere Ofertă Detaliată
              <img src="/img/vector-12.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}