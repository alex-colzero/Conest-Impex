import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Gaz Scurs - Ce Fac? | Ghid Complet Siguranță Constanța | Conest',
  description: 'Miros de gaz în casă sau apartament? Urmează acești pași IMEDIAT pentru siguranță. Ghid complet + intervenții urgente 24/7 în Constanța. ☎️ 0744-579-715',
  keywords: 'gaz scurs, miros gaz apartament, scapare gaz, urgente gaze constanta, ce fac daca miroase a gaz, siguranța gazelor, detectie scapari gaze',
  openGraph: {
    title: 'Urgență: Gaz Scurs - Ce Fac? Ghid Complet Siguranță',
    description: 'Pași imediați pentru siguranța ta în caz de scăpare de gaze. Intervenții urgente 24/7 în Constanța.',
    url: 'https://conest-gaze-centrale.ro/gaz-scurs-ce-fac',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary',
    title: 'Urgență: Gaz Scurs - Ce Fac? Ghid Complet Siguranță',
    description: 'Pași imediați pentru siguranța ta în caz de scăpare de gaze. Intervenții urgente 24/7 în Constanță.',
  },
  alternates: {
    canonical: 'https://conest-gaze-centrale.ro/gaz-scurs-ce-fac',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Ce să faci în caz de scăpare de gaz natural",
  "description": "Pași de siguranță pentru situații de urgență cu scăpări de gaze naturale",
  "image": "https://conest-gaze-centrale.ro/img/hero-1.png",
  "totalTime": "PT5M",
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
      "name": "Robinet principal gaze"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Oprirea imediată a furnizării de gaze",
      "text": "Închide robinetul general de gaze de la intrarea în locuință",
      "image": "https://conest-gaze-centrale.ro/img/safety-step1.png"
    },
    {
      "@type": "HowToStep", 
      "name": "Ventilarea spațiului",
      "text": "Deschide toate ferestrele și ușile pentru aerisire",
      "image": "https://conest-gaze-centrale.ro/img/safety-step2.png"
    },
    {
      "@type": "HowToStep",
      "name": "Evacuarea zonei",
      "text": "Părăsește imediat locuința împreună cu toate persoanele",
      "image": "https://conest-gaze-centrale.ro/img/safety-step3.png"
    },
    {
      "@type": "HowToStep",
      "name": "Apelarea serviciilor de urgență",
      "text": "Sună la 112 și la specialiștii autorizați pentru intervenție",
      "image": "https://conest-gaze-centrale.ro/img/safety-step4.png"
    }
  ],
  "author": {
    "@type": "Organization",
    "name": "CON EST IMPEX SRL"
  }
};

export const dynamic = 'force-dynamic'

export default function GazScursCeFac() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#f3f2ef]">
        <SharedHeader />

        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
                Gaz Scurs - Ce Fac?
                <span className="block text-[#f2b721] mt-2 text-2xl md:text-3xl">Ghid Complet de Siguranță</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Proceduri de siguranță pentru scurgeri de gaze naturale. 
                Urmează exact acești pași pentru protecția ta și a familiei în situații de urgență.
              </p>
              <div className="bg-[#f2b721] text-[#05213c] p-4 rounded-lg mb-6 font-bold text-lg">
                În caz de URGENȚĂ, sună IMEDIAT: 
                <a href="tel:0744579715" className="text-xl ml-2 hover:underline">0744-579-715</a>
              </div>
            </div>
          </div>
        </section>

        {/* Immediate Action Steps */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-12 text-center [font-family:'Poppins',Helvetica]">
              Acțiune Imediată - Urmează exact acești pași
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#f9f9f9] p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-xl mr-4">1</div>
                  <h3 className="text-xl font-bold text-[#05213c]">Oprește Gazele Imediat</h3>
                </div>
                <ul className="text-gray-700 space-y-3">
                  <li>• Închide robinetul general de gaze (la intrarea în apartament/casă)</li>
                  <li>• Oprește toate aparatele consumatoare de gaze</li>
                  <li>• NU atinge întrerupătoarele electrice</li>
                  <li>• NU aprinde chibrituri sau brichete</li>
                </ul>
              </div>

              <div className="bg-[#f9f9f9] p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-xl mr-4">2</div>
                  <h3 className="text-xl font-bold text-[#05213c]">Ventilează Spațiul</h3>
                </div>
                <ul className="text-gray-700 space-y-3">
                  <li>• Deschide TOATE ferestrele și ușile</li>
                  <li>• Creează curent de aer pentru evacuarea gazelor</li>
                  <li>• NU folosi ventilatoare electrice</li>
                  <li>• Lasă să se aerisească minimum 15 minute</li>
                </ul>
              </div>

              <div className="bg-[#f9f9f9] p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-xl mr-4">3</div>
                  <h3 className="text-xl font-bold text-[#05213c]">Evacuează Zona</h3>
                </div>
                <ul className="text-gray-700 space-y-3">
                  <li>• Ieși IMEDIAT din casă/apartament</li>
                  <li>• Ia cu tine toate persoanele și animalele</li>
                  <li>• Nu folosi telefoanele în interior</li>
                  <li>• Alertează vecinii dacă este necesar</li>
                </ul>
              </div>

              <div className="bg-[#f9f9f9] p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#f2b721] rounded-full flex items-center justify-center text-[#05213c] font-bold text-xl mr-4">4</div>
                  <h3 className="text-xl font-bold text-[#05213c]">Sună pentru Ajutor</h3>
                </div>
                <ul className="text-gray-700 space-y-3">
                  <li>• Sună la 112 pentru serviciile de urgență</li>
                  <li>• Contactează furnizorul de gaze (E.ON/Distrigaz)</li>
                  <li>• Apelează specialiștii autorizați: <strong>0744-579-715</strong></li>
                  <li>• Nu re-intra în locuință până la verificarea completă</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What NOT to do */}
        <section className="py-16 bg-[#f3f2ef]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
              Important: Ce să NU faci niciodată
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#05213c] mb-4">NU Aprinde Nimic</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Chibrituri sau brichete</li>
                  <li>• Țigări</li>
                  <li>• Lumânări</li>
                  <li>• Orice sursă de flacără deschisă</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#05213c] mb-4">NU Folosi Electricitatea</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Întrerupătoare de lumină</li>
                  <li>• Aparate electrice</li>
                  <li>• Telefoane mobile în interior</li>
                  <li>• Ventilatoare electrice</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#05213c] mb-4">NU Încerca să Repari</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Nu atinge țevile de gaze</li>
                  <li>• Nu strânge îmbinările</li>
                  <li>• Nu folosi bandă izolatoare</li>
                  <li>• Lasă reparațiile specialiștilor</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#05213c] mb-4">NU Ignora Semnele</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Miros persistent de gaz</li>
                  <li>• Sunet de șuierat din instalații</li>
                  <li>• Vegetație uscată lângă țevi</li>
                  <li>• Bule în băltoacele de apă</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to detect gas leaks */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
              Cum detectez o scăpare de gaz?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/img/icon-29.png" alt="Miros" className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#05213c] mb-4">Prin Miros</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gazele naturale au un miros caracteristic (ca de ouă stricate) adăugat special pentru detectare. 
                  Este primul și cel mai important semnal de alarmă.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/img/icon-29.png" alt="Sunet" className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#05213c] mb-4">Prin Sunet</h3>
                <p className="text-gray-700 leading-relaxed">
                  Un sunet de șuierat sau de scurgere din zona instalațiilor de gaze poate indica o scăpare. 
                  Verifică periodic toate racordurile.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/img/icon-29.png" alt="Vizual" className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#05213c] mb-4">Prin Observație</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vegetația uscată lângă țevile de gaze, bule în băltoacele de apă sau pământ ridicat 
                  pot indica scăpări subterane de gaze.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="py-16 bg-[#f3f2ef]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
              Prevenirea scăpărilor de gaze
            </h2>
            
            <div className="bg-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-[#05213c] mb-6">Verificări periodice obligatorii</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-3">
                  <li>• Revizia ANRE la 2 ani (obligatorie legal)</li>
                  <li>• Verificarea instalațiilor la schimbarea sezonului</li>
                  <li>• Controlul racordurilor și îmbinărilor</li>
                  <li>• Testarea detectoarelor de gaze</li>
                </ul>
                <ul className="text-gray-700 space-y-3">
                  <li>• Curățarea și întreținerea centralei termice</li>
                  <li>• Verificarea prizelor de aer și evacuării</li>
                  <li>• Controlul flexibilelor de conectare</li>
                  <li>• Înlocuirea pieselor uzate la timp</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-[#05213c] mb-4">
                Programează o revizie preventivă
              </h3>
              <p className="text-gray-700 mb-6">
                Preveniția este cea mai bună protecție. Programează o verificare profesională a instalației tale.
              </p>
              <Link 
                href="/revizii-anre"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
              >
                Programează Revizia ANRE
              </Link>
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-16 bg-[#05213c]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 [font-family:'Poppins',Helvetica]">
              Contacte de Urgență - Constanța
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#f2b721] text-[#05213c] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Servicii Urgență</h3>
                <a href="tel:112" className="text-2xl font-bold hover:underline">112</a>
                <p className="text-sm mt-2">Pompieri, Ambulanță, Poliție</p>
              </div>
              
              <div className="bg-white text-[#05213c] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Specialiști Gaze 24/7</h3>
                <a href="tel:0744579715" className="text-2xl font-bold hover:underline">0744.579.715</a>
                <p className="text-sm mt-2">Intervenții urgente autorizate ANRE</p>
              </div>
              
              <div className="bg-[#f2b721] text-[#05213c] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Programări</h3>
                <a href="tel:0722619097" className="text-2xl font-bold hover:underline">0722.619.097</a>
                <p className="text-sm mt-2">Consultații și verificări preventive</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              CON EST IMPEX SRL - Autorizat ANRE și ISCIR pentru intervenții la instalațiile de gaze naturale în Constanța
            </p>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  )
}