import { Metadata } from 'next'
import Link from 'next/link'
import { SharedHeader } from '../../src/components/SharedHeader'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Întrebări frecvente - Gaze și centrale | Conest',
  description: 'Răspunsuri la întrebările frecvente despre instalații gaze naturale, centrale termice și revizii ANRE în Constanța. Informații utile și sfaturi de la experți.',
  keywords: 'intrebari frecvente, FAQ, instalatii gaze, centrale termice, ANRE, ISCIR, constanta',
  openGraph: {
    title: 'Întrebări frecvente - Instalații gaze și centrale termice',
    description: 'Răspunsuri la întrebările frecvente despre serviciile noastre de instalații gaze și centrale termice.',
    url: 'https://conest.ro/intrebari-frecvente',
    type: 'website',
  }
}

export const dynamic = 'force-dynamic'

const faqs = [
  {
    category: "Instalații Gaze Naturale",
    questions: [
      {
        q: "Cât costă o instalație de gaze naturale?",
        a: "Costul variază în funcție de complexitatea instalației, de la 2.500 lei pentru un apartament simplu la 8.000+ lei pentru case mari. Prețul include proiectarea, materialele, execuția și autorizarea ANRE. Oferim consultanță gratuită și deviz detaliat. Vezi mai multe detalii pe pagina <a href='/instalatii-gaze-naturale' class='text-[#f2b721] underline hover:text-[#e0a61d]'>Instalații Gaze Naturale</a>."
      },
      {
        q: "Cât durează montarea unei instalații de gaze?",
        a: "Pentru un apartament standard, instalația se montează în 1-2 zile. Pentru case mai mari poate dura 3-5 zile. Procesul complet (cu documentații și autorizări) durează 2-4 săptămâni. Vă ținem la curent în permanență cu stadiul lucrărilor."
      },
      {
        q: "Ce documente sunt necesare pentru instalația de gaze?",
        a: "Avem nevoie de: actul de proprietate, buletinul, o planșă cu instalația electrică și termică existentă. Ne ocupăm noi de toate celelalte documente: proiectul tehnic, autorizațiile ANRE, avizele pompieri și toate formalitatile birocratice."
      },
      {
        q: "Pot să îmi montez singur instalația de gaze?",
        a: "Nu! Instalațiile de gaze pot fi executate doar de firme autorizate ANRE cu personal certificat. Montajul neautorizat este ilegal și extrem de periculos. Riscați amenzi mari și, mai grav, accidente grave cu gaze."
      }
    ]
  },
  {
    category: "Centrale Termice",
    questions: [
      {
        q: "Ce centrală termică să aleg pentru apartamentul meu?",
        a: "Pentru apartamente recomandam centrale cu tiraj forțat (24-28 kW pentru 2-3 camere). Brandurile recomandate: Vaillant, Bosch, Viessmann. Facem consultanță gratuită și vă ajutăm să alegeți centrala potrivită pentru nevoile și bugetul dumneavoastră. Vezi gama completă pe pagina <a href='/centrale-termice' class='text-[#f2b721] underline hover:text-[#e0a61d]'>Centrale Termice</a>."
      },
      {
        q: "Cât costă montajul unei centrale termice?",
        a: "Montajul unei centrale noi costă între 800-1.500 lei, în funcție de complexitate. Prețul include: demontarea centralei vechi, montarea celei noi, conectarea la instalații, testarea și punerea în funcțiune cu garanție."
      },
      {
        q: "De ce nu pornește centrala termică?",
        a: "Cauzele frecvente: lipsa curentului, presiune scăzută, problemă la gaze, senzori defecți. Nu încercați să reparați singuri! Sunați-ne pentru diagnosticare - majoritatea problemelor se rezolvă rapid la domiciliu."
      },
      {
        q: "Cât de des trebuie făcut service-ul la centrală?",
        a: "Service-ul preventiv se face anual, înainte de sezonul rece. Include curățarea, verificarea componentelor și reglajele necesare. Service-ul regulat prelungește durata de viață și previne defecțiunile costisitoare."
      }
    ]
  },
  {
    category: "Revizii ANRE",
    questions: [
      {
        q: "Când trebuie făcută revizia ANRE?",
        a: "Prima revizie se face la 2 ani de la punerea în funcțiune, apoi din 2 în 2 ani. Este obligatorie prin lege! Fără revizie la timp riscați oprirea gazelor și amenzi de până la 25.000 lei pentru persoane juridice. Programează-ți revizia pe pagina <a href='/revizii-anre' class='text-[#f2b721] underline hover:text-[#e0a61d]'>Revizii ANRE</a>."
      },
      {
        q: "Cât costă revizia ANRE?",
        a: "Pentru apartamente: 250 lei. Pentru case/vile: 350 lei. Prețul include deplasarea, verificarea completă, procesul verbal și certificatul de conformitate valabil 2 ani. Dacă sunt defecțiuni, oferim ofertă separată pentru remediere."
      },
      {
        q: "Ce se verifică la revizia ANRE?",
        a: "Verificăm: etanșeitatea instalației, starea conductelor, funcționarea aparatelor, ventilația, documentația tehnică. Folosim aparate certificate și respectăm toate normele ANRE. Certificatul se eliberează în aceeași zi dacă instalația este conformă."
      },
      {
        q: "Ce se întâmplă dacă nu fac revizia la timp?",
        a: "Riscați: oprirea gazelor de către distribuitor, amenzi de 500-25.000 lei, imposibilitatea încheierii contractului cu furnizorul. Mai grav, o instalație neverificată poate avea scurgeri periculoase!"
      }
    ]
  },
  {
    category: "Service și Garanție",
    questions: [
      {
        q: "Ce garanție oferiti pentru lucrări?",
        a: "Oferim garanție 2 ani pentru toate instalațiile de gaze și montajele de centrale. Garanția acoperă defectele de execuție și materialele folosite. Pentru service-uri punctuale, garanția este de 6 luni pe lucrarea efectuată."
      },
      {
        q: "Faceți intervenții de urgență?",
        a: "Da! Suntem disponibili 24/7 pentru urgențe reale (scurgeri de gaze, centrale blocate iarna). Taxa de urgență se aplică după ora 18:00 și weekend-uri. Pentru siguranța dumneavoastră, nu ezitați să sunați la 0722.619.097!"
      },
      {
        q: "În ce zone lucrați?",
        a: "Acoperim Constanța și toate localitățile din județul Constanța (Mamaia, Năvodari, Eforie, Mangalia, Medgidia). Pentru anumite proiecte mari ne deplasam și în județele limitrofe. Deplasarea este gratuită în raza de 25 km de Constanța."
      },
      {
        q: "Cum pot să vă contactez?",
        a: "Cel mai rapid prin telefon: 0722.619.097. Suntem disponibili L-V 8:00-18:00, sâmbătă 9:00-14:00. Pentru urgențe, sunați oricând. Puteți să ne scrieți și prin formularul de contact de pe site sau prin email."
      }
    ]
  },
  {
    category: "Siguranță și Conformitate",
    questions: [
      {
        q: "Cum recunosc o scurgere de gaze?",
        a: "Semne de alertă: miros specific de gaze (merkaptan), sunet de șuierat, vegetație uscată lângă conducte, pământ ridicat deasupra conductelor. În caz de suspiciune: opriți gazele, nu aprindeți nimic, aerisiți și sunați urgent la 112 și la 0722.619.097!"
      },
      {
        q: "Sunteți autorizați și asigurați?",
        a: "Da! Avem toate autorizațiile: ANRE pentru instalații gaze, ISCIR pentru centrale termice, autorizație ISC pentru securitate la incendiu. Suntem asigurați RCA profesional pentru 100.000 euro. Toate certificatele sunt afișate la sediu și disponibile la cerere."
      },
      {
        q: "Ce materiale folosiți?",
        a: "Folosim doar materiale certificate conform standardelor europene: țevi CSST sau oțel zincat, fitinguri din alamă, robinete cu bilă, regulatoare de presiune certificate. Toate materialele au garanție de producător și certificat de conformitate CE."
      },
      {
        q: "Respectați normele de siguranță?",
        a: "Absolut! Respectăm toate normativele ANRE, ISCIR și de protecția muncii. Echipa noastră poartă echipamente de protecție, folosește detectoare de gaze și respectă toate procedurile de siguranță. Siguranța dumneavoastră este prioritatea noastră nr. 1!"
      }
    ]
  }
];

export default function IntrebariFrecvente() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#05213c] to-[#0a3a5c] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 [font-family:'Poppins',Helvetica]">
            Întrebări Frecvente
          </h1>
          <p className="text-xl leading-relaxed">
            Răspunsuri la întrebările cele mai frecvente despre instalații gaze naturale, 
            centrale termice și serviciile noastre în Constanța și județul Constanța
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-[#f2b721]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#05213c] text-lg font-medium mb-4">
            Nu găsiți răspunsul la întrebarea dumneavoastră?
          </p>
          <a 
            href="tel:0722619097" 
            className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#05213c] text-white rounded-lg font-semibold hover:bg-[#0a3a5c] transition-colors"
          >
            Sunați acum: 0722.619.097
            <img src="/img/phoneicon-8.svg" alt="Phone" className="w-5 h-5 invert" />
          </a>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-[#05213c] mb-8 text-center [font-family:'Poppins',Helvetica]">
                {category.category}
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-[#05213c] mb-4 flex items-start gap-3">
                      <span className="text-[#f2b721] text-xl">❓</span>
                      {faq.q}
                    </h3>
                    <p 
                      className="text-gray-600 leading-relaxed pl-8"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-8 md:py-16 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-800 mb-4 [font-family:'Poppins',Helvetica]">
              🚨 URGENȚĂ GAZE - ce să faceți?
            </h2>
            <p className="text-red-700 text-lg">
              În caz de suspiciune de scurgere de gaze sau defecțiune gravă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg md:text-xl font-semibold text-red-800 mb-4">Pași imediati:</h3>
              <ol className="text-red-700 space-y-2">
                <li>1. <strong>Opriți gazele</strong> de la robinetul general</li>
                <li>2. <strong>Nu aprindeți</strong> becuri, chibrituri, țigări</li>
                <li>3. <strong>Nu folosiți</strong> întrerupătoare electrice</li>
                <li>4. <strong>Aerisiți</strong> urgent spațiul</li>
                <li>5. <strong>Evacuați</strong> zona dacă mirosul persistă</li>
                <li>6. <strong>Sunați 112</strong> pentru urgențe</li>
              </ol>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-[#f2b721]">
              <h3 className="text-lg md:text-xl font-semibold text-[#05213c] mb-4">Contactați-ne urgent:</h3>
              <div className="space-y-4">
                <a 
                  href="tel:0722619097" 
                  className="flex items-center gap-3 p-4 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
                >
                  <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
                  <div>
                    <div className="font-semibold text-red-800">Service Urgent 24/7</div>
                    <div className="text-xl md:text-2xl font-bold text-red-600">0722.619.097</div>
                  </div>
                </a>
                <p className="text-sm text-gray-600">
                  Disponibili non-stop pentru urgențele reale. Intervenție rapidă în Constanța și județul Constanța.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#05213c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Poppins',Helvetica]">
            Aveți alte întrebări?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Echipa noastră de experți este pregătită să vă răspundă la orice întrebare
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
              <p className="text-gray-300">L-V: 8:00-18:00</p>
              <p className="text-gray-300">Sâmbătă: 9:00-14:00</p>
              <a href="tel:0722619097" className="text-[#f2b721] font-semibold">0722.619.097</a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Consultanță</h3>
              <p className="text-gray-300">La domiciliu</p>
              <p className="text-gray-300">Gratuită și fără obligații</p>
              <p className="text-[#f2b721] font-semibold">Constanța & Județ</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f2b721] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Urgențe</h3>
              <p className="text-gray-300">Disponibili 24/7</p>
              <p className="text-gray-300">Pentru situații critice</p>
              <p className="text-[#f2b721] font-semibold">Non-stop</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f2b721] text-[#05213c] rounded-[25px] font-semibold text-lg hover:bg-[#e0a61d] transition-colors"
            >
              Sună pentru Consultanță
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a 
              href="tel:0722619097" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#f2b721] text-[#f2b721] rounded-[25px] font-semibold text-lg hover:bg-[#f2b721] hover:text-[#05213c] transition-colors"
            >
              Sună pentru Răspunsuri
              <img src="/img/phoneicon-8.svg" alt="Phone" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}