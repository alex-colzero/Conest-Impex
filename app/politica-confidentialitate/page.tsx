import { Metadata } from 'next'
import Link from 'next/link'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate - Conest Instalații Gaze și Centrale',
  description: 'Politica de confidențialitate și protecția datelor personale pentru serviciile Conest - instalații gaze naturale și centrale termice în Constanța.',
  keywords: 'politica confidentialitate, protectia datelor, GDPR, Conest, instalatii gaze',
}

export const dynamic = 'force-dynamic'

const navigationItems = [
  { label: "Servicii", href: "/" },
  { label: "FAQ", href: "/intrebari-frecvente" },
];

export default function PoliticaConfidentialitate() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      {/* Navigation Header */}
      <header className="w-full flex items-center max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-[50px] py-[30px] justify-between relative bg-[#f5f4f1] min-h-[90px]">
        <Link href="/" className="flex items-center">
          <div className="relative w-[196px] h-9">
            <div className="relative h-[35px] left-px bg-[url(/img/wordmark-7.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[35px] h-[35px] top-0 left-[37px]"
                alt="Vector"
                src="/img/vector-79.svg"
              />
            </div>
          </div>
        </Link>
        
        <nav className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-[55px]">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Poppins',Helvetica] font-medium text-[#05213c] text-[22px] hover:text-[#f2b721] transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="tel:0722619097"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-[18px] bg-[#f2b721] rounded-[20px] hover:bg-[#e0a61d] transition-colors"
            >
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#05213c] text-base text-center tracking-[1.28px]">
                COMENZI
              </span>
              <img className="w-[23.75px] h-6" alt="Phone" src="/img/phoneicon-7.svg" />
            </a>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#05213c] mb-8 [font-family:'Poppins',Helvetica]">
          Politica de Confidențialitate
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">1. Informații Generale</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CON EST IMPEX SRL, cu sediul în Constanța, România, respectă confidențialitatea 
              datelor personale și se angajează să protejeze informațiile pe care ni le furnizați.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Această politică de confidențialitate explică modul în care colectăm, folosim și 
              protejăm informațiile dumneavoastră personale conform Regulamentului General privind 
              Protecția Datelor (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">2. Date Personale Colectate</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Colectăm următoarele categorii de date personale:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Date de identificare:</strong> nume, prenume, adresa</li>
              <li><strong>Date de contact:</strong> număr de telefon, adresa de email</li>
              <li><strong>Date tehnice:</strong> informații despre instalația de gaze, centrale termice</li>
              <li><strong>Date de facturare:</strong> pentru emiterea facturilor și contractelor</li>
              <li><strong>Date de navigare:</strong> adresa IP, cookies, pentru funcționarea site-ului</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">3. Scopul Prelucrării Datelor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Utilizăm datele dumneavoastră pentru:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Prestarea serviciilor de instalații gaze și centrale termice</li>
              <li>Comunicarea privind programările și intervențiile</li>
              <li>Emiterea facturilor și gestionarea plăților</li>
              <li>Respectarea obligațiilor legale (documentații ANRE, ISCIR)</li>
              <li>Service și garanția produselor/serviciilor</li>
              <li>Îmbunătățirea serviciilor noastre</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">4. Temeiurile Juridice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Prelucrăm datele pe baza:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Contractului:</strong> pentru prestarea serviciilor solicitate</li>
              <li><strong>Obligației legale:</strong> pentru respectarea normelor ANRE și ISCIR</li>
              <li><strong>Consimțământului:</strong> pentru marketing și newsletter</li>
              <li><strong>Interesului legitim:</strong> pentru îmbunătățirea serviciilor</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">5. Partajarea Datelor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nu vindem, nu închiriem și nu partajăm datele dumneavoastră cu terți, 
              cu excepția următoarelor situații:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Autorități de reglementare (ANRE, ISCIR) pentru autorizări</li>
              <li>Furnizori de servicii IT pentru mentenanța site-ului</li>
              <li>Companii de curierat pentru livrarea documentelor</li>
              <li>Autoritățile publice, dacă este cerut de lege</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">6. Perioada de Păstrare</h2>
            <p className="text-gray-700 leading-relaxed">
              Păstrăm datele dumneavoastră pe perioada necesară pentru îndeplinirea scopurilor 
              pentru care au fost colectate, respectiv minimum 5 ani pentru documentația tehnică 
              conform legislației în domeniul gazelor naturale și maximum 10 ani pentru documentația 
              contabilă.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">7. Drepturile Dumneavoastră</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Conform GDPR, aveți următoarele drepturi:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Dreptul de acces:</strong> să obțineți confirmarea prelucrării datelor</li>
              <li><strong>Dreptul de rectificare:</strong> să corectați datele inexacte</li>
              <li><strong>Dreptul de ștergere:</strong> să solicitați ștergerea datelor</li>
              <li><strong>Dreptul de restricționare:</strong> să limitați prelucrarea</li>
              <li><strong>Dreptul la portabilitate:</strong> să transferați datele</li>
              <li><strong>Dreptul de opoziție:</strong> să vă opuneți prelucrării</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Pentru exercitarea acestor drepturi, ne puteți contacta la: 
              <a href="mailto:contact@conest-gaze-centrale.ro" className="text-[#f2b721] underline">
                contact@conest-gaze-centrale.ro
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">8. Securitatea Datelor</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor 
              împotriva accesului neautorizat, modificării, divulgării sau distrugerii. 
              Toate datele sunt stocate securizat și accesul este restricționat doar personalului autorizat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">9. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Site-ul nostru utilizează cookies pentru a îmbunătăți experiența de navigare. 
              Prin continuarea utilizării site-ului, vă exprimați acordul pentru utilizarea acestora.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">10. Modificări ale Politicii</h2>
            <p className="text-gray-700 leading-relaxed">
              Ne rezervăm dreptul de a actualiza această politică de confidențialitate. 
              Orice modificări vor fi publicate pe site-ul nostru cu data actualizării.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">11. Contact</h2>
            <div className="bg-[#f9f9f9] p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Pentru orice întrebări privind această politică sau prelucrarea datelor, ne puteți contacta:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>CON EST IMPEX SRL</strong></li>
                <li>📍 Constanța, România</li>
                <li>📞 <a href="tel:0722619097" className="text-[#f2b721]">0722.619.097</a></li>
                <li>📧 <a href="mailto:contact@conest-gaze-centrale.ro" className="text-[#f2b721]">contact@conest-gaze-centrale.ro</a></li>
              </ul>
            </div>
          </section>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500 text-center">
              Ultima actualizare: August 2024
            </p>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}