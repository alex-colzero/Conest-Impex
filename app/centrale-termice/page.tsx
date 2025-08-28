import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { TestimonialsSection } from '../../src/components/TestimonialsSection'
import { FAQSection } from '../../src/components/FAQSection'
import { PricingSection } from '../../src/components/PricingSection'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Centrale termice Constanța - Montaj și service autorizat | Conest',
  description: 'Service centrale termice Constanța. Montaj, reparații și mentenanță pentru toate mărcile. Autorizat ISCIR cu garanție. Intervenții rapide ☎️ 0722.619.097',
  keywords: 'centrale termice, service centrale, montaj centrale, reparatii centrale constanta, service ISCIR',
  openGraph: {
    title: 'Centrale termice - Montaj și service autorizat Constanța',
    description: 'Service complet centrale termice cu tehnicienii autorizați ISCIR. Montaj, reparații și mentenanță.',
    url: 'https://conest.ro/centrale-termice',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

export default function CentraleTermice() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Centrale Termice
                <span className="block text-[#f2b721] mt-2">Service Autorizat ISCIR</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Montaj, service și reparații centrale termice în Constanța și județ. 
                Tehnicienii noștri autorizați ISCIR lucrează cu toate mărcile de centrale termice.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Service Autorizat ISCIR</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Toate Mărcile</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/img/check-27.svg" alt="Check" className="w-5 h-5" />
                  <span>Intervenții Rapide</span>
                </div>
              </div>
              <a 
                href="tel:0722619097" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Sună pentru Service Urgent
                <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="/img/hero-1.png" 
                alt="Service centrale termice profesional" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Servicii centrale termice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Service complet pentru centrale termice - montaj, reparații, mentenanță și revizie anuală
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Montaj" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Montaj centrale noi</h3>
              <p className="text-gray-600">
                Montaj profesional centrale termice cu tiraj forțat sau natural. Consultanță pentru alegerea centralei potrivite. Necesită <Link href="/instalatii-gaze-naturale" className="text-[#f2b721] hover:underline">instalație gaze naturale</Link> autorizată.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Reparații" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Reparații & diagnosticare</h3>
              <p className="text-gray-600">
                Diagnosticare completă și reparații pentru toate tipurile de defecțiuni. Piese de schimb originale.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Mentenanță" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Mentenanță preventivă</h3>
              <p className="text-gray-600">
                Servicii de mentenanță periodică pentru funcționare optimă și prelungirea duratei de viață.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Revizie" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Revizie anuală ISCIR</h3>
              <p className="text-gray-600">
                Revizie tehnică anuală obligatorie conform normelor ISCIR. Eliberarea certificatului de conformitate. Vezi <Link href="/revizii-anre" className="text-[#f2b721] hover:underline">revizii și verificări ANRE</Link>.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Autorizare" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Autorizare & avizare</h3>
              <p className="text-gray-600">
                Obținerea tuturor autorizațiilor necesare pentru punerea în funcțiune și exploatarea centralei.
              </p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mb-6">
                <img src="/img/icon-30.png" alt="Service urgency" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#05213c] mb-4">Service de urgență</h3>
              <p className="text-gray-600">
                Intervenții rapide 24/7 pentru defecțiuni urgente. Echipă de tehniciieni disponibili non-stop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-[#f3f2ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Lucrăm cu toate mărcile
            </h2>
            <p className="text-xl text-gray-600">
              Service autorizat pentru principalele mărci de centrale termice
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="font-semibold text-[#05213c]">Vaillant</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="font-semibold text-[#05213c]">Bosch</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="font-semibold text-[#05213c]">Viessmann</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="font-semibold text-[#05213c]">Buderus</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="font-semibold text-[#05213c]">Junkers</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="font-semibold text-[#05213c]">Ariston</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-4 [font-family:'Poppins',Helvetica]">
              Probleme frecvente centrale termice
            </h2>
            <p className="text-xl text-gray-600">
              Rezolvăm rapid cele mai frecvente probleme ale centralelor termice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">❌ Centrala nu pornește</h3>
              <p className="text-gray-600 mb-4">Diagnosticare sistem electric, verificare alimentare gaze, control electrovalve</p>
              <p className="text-[#f2b721] font-semibold">✓ Soluționăm în 1-2 ore</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">❌ Nu încălzește suficient</h3>
              <p className="text-gray-600 mb-4">Curățare schimbător de căldură, verificare circulație, reglaj parametri</p>
              <p className="text-[#f2b721] font-semibold">✓ Soluționăm în 2-3 ore</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">❌ Pierde presiunea</h3>
              <p className="text-gray-600 mb-4">Identificare scurgeri, înlocuire garnituri, reparare vase expansiune</p>
              <p className="text-[#f2b721] font-semibold">✓ Soluționăm în 1-4 ore</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">❌ Zgomote anormale</h3>
              <p className="text-gray-600 mb-4">Curățare sedimente, verificare pompă circulație, reglaj presiune</p>
              <p className="text-[#f2b721] font-semibold">✓ Soluționăm în 1-2 ore</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">❌ Apă caldă întreruptă</h3>
              <p className="text-gray-600 mb-4">Verificare schimbător secundar, control senzori, curățare sistem</p>
              <p className="text-[#f2b721] font-semibold">✓ Soluționăm în 1-3 ore</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#05213c] mb-3">❌ Erori pe display</h3>
              <p className="text-gray-600 mb-4">Diagnosticare coduri eroare, resetare sistem, reparare componente</p>
              <p className="text-[#f2b721] font-semibold">✓ Soluționăm în 30min-2ore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <PricingSection 
        type="centrale"
        title="Pachete service centrale termice"
        subtitle="Servicii complete pentru toate nevoile dvs."
      />

      {/* Testimonials Section */}
      <TestimonialsSection 
        title="Clienți mulțumiți - Centrale termice"
        maxItems={3} 
      />

      {/* FAQ Section */}
      <FAQSection 
        type="centrale"
        title="Întrebări frecvente - Centrale termice"
        maxItems={4}
      />

      {/* CTA Section */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Probleme cu centrala termică?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Sună acum pentru service rapid. Tehnicienii noștri sunt disponibili 24/7 pentru urgențe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Service Urgent: 0722.619.097
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@conest-gaze-centrale.ro?subject=Programare%20Service%20Centrale%20Constanța&body=Bună%20ziua,%0D%0A%0D%0AVă%20rog%20să%20îmi%20programați%20un%20service%20pentru%20centrala%20termică%20în%20zona%20Constanța.%0D%0A%0D%0ADetalii:%0D%0A-%20Marca%20centrală:%0D%0A-%20Anul%20montării:%0D%0A-%20Problema%20întâmpinată:%0D%0A-%20Adresa:%0D%0A-%20Telefon%20contact:%0D%0A%0D%0AMulțumesc!" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Programează prin Email
              <img src="/img/vector-12.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
            Servicii conexe
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Instalații gaze</h3>
              <p className="text-gray-600 mb-4">
                Instalații complete de gaze naturale pentru alimentarea centralelor termice.
              </p>
              <Link 
                href="/instalatii-gaze-naturale"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi Instalații Gaze →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Revizii ANRE</h3>
              <p className="text-gray-600 mb-4">
                Verificări tehnice periodice obligatorii pentru centrale și instalații.
              </p>
              <Link 
                href="/revizii-anre"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Programează Revizia →
              </Link>
            </div>
            
            <div className="bg-[#f3f2ef] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#05213c] mb-3">Smart home</h3>
              <p className="text-gray-600 mb-4">
                Modernizare cu termostate inteligente și control automat al centralei.
              </p>
              <Link 
                href="/modernizare-smart-home"
                className="text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
              >
                Vezi Modernizare →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Întrebări despre service-ul pentru centrale termice?
            </p>
            <Link 
              href="/intrebari-frecvente"
              className="inline-flex items-center gap-2 text-[#f2b721] font-semibold hover:text-[#e0a61d] transition-colors"
            >
              Vezi FAQ despre Centrale Termice
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}