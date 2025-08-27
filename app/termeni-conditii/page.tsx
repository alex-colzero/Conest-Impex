import { Metadata } from 'next'
import Link from 'next/link'
import { FooterSection } from '../../src/screens/ElementHomepage/sections/FooterSection/FooterSection'

export const metadata: Metadata = {
  title: 'Termeni și Condiții - Conest Instalații Gaze și Centrale',
  description: 'Termenii și condițiile de utilizare a serviciilor Conest pentru instalații gaze naturale și centrale termice în Constanța.',
  keywords: 'termeni conditii, instalatii gaze, centrale termice, Conest, contract',
}

export const dynamic = 'force-dynamic'

const navigationItems = [
  { label: "Servicii", href: "/" },
  { label: "FAQ", href: "/intrebari-frecvente" },
];

export default function TermeniConditii() {
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
          Termeni și Condiții
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">1. Informații Generale</h2>
            <p className="text-gray-700 leading-relaxed">
              Acești termeni și condiții reglementează utilizarea serviciilor oferite de 
              <strong> CON EST IMPEX SRL</strong>, cu sediul în Constanța, România, 
              specializată în instalații gaze naturale și centrale termice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">2. Definiții</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Furnizorul:</strong> CON EST IMPEX SRL</li>
              <li><strong>Clientul:</strong> persoana fizică sau juridică care comandă serviciile</li>
              <li><strong>Serviciile:</strong> instalații gaze naturale, centrale termice, revizii ANRE</li>
              <li><strong>Contractul:</strong> acordul dintre Furnizor și Client pentru prestarea serviciilor</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">3. Servicii Oferite</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-[#05213c] mb-2">Instalații Gaze Naturale:</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                  <li><strong>Executarea instalației de utilizare:</strong> Montarea conductei între branșament și aparatele consumatoare de gaz inclusiv instalarea <a href="/sisteme-siguranta" className="text-[#f2b721] hover:underline">dispozitivelor de detecție și siguranță</a></li>
                  <li>Conectare aparate consumatoare</li>
                  <li>Autorizări ANRE</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#05213c] mb-2">Centrale Termice:</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                  <li>Montaj și demontaj</li>
                  <li>Service și reparații</li>
                  <li>Mentenanță preventivă</li>
                  <li>Urgențe 24/7</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">4. Comandarea Serviciilor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Serviciile pot fi comandate prin:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Telefon:</strong> <a href="tel:0722619097" className="text-[#f2b721]">0722.619.097</a></li>
              <li><strong>Email:</strong> <a href="mailto:contact@conest-gaze-centrale.ro" className="text-[#f2b721]">contact@conest-gaze-centrale.ro</a></li>
              <li><strong>Site web:</strong> prin formularul de contact</li>
              <li><strong>La sediul social</strong> în Constanța</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Comanda devine fermă după confirmarea noastră telefonică sau prin email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">5. Prețuri și Plata</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Prețurile sunt exprimate în LEI și includ TVA</li>
              <li>Consultanța și deplasarea în raza de 25km sunt gratuite</li>
              <li>Plata se poate face: numerar, transfer bancar sau card</li>
              <li>Pentru lucrările mari, se poate acorda plata în rate</li>
              <li>Factura se emite conform legislației fiscale în vigoare</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibent text-[#05213c] mb-4">6. Executarea Serviciilor</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#05213c] mb-2">Termene de Execuție:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Instalații gaze: 1-5 zile lucrătoare + documentații</li>
                  <li>Montaj centrale: 1-2 zile lucrătoare</li>
                  <li>Service/reparații: în aceeași zi sau următoarea</li>
                  <li>Revizii ANRE: programare în 1-3 zile</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#05213c] mb-2">Condiții de Lucru:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Clientul asigură accesul la locația de lucru</li>
                  <li>Se respectă normele de protecția muncii</li>
                  <li>Materialele folosite sunt certificate CE</li>
                  <li>Toate lucrările respectă normativele în vigoare</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">7. Garanții</h2>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">🛡️ Garanții Oferite:</h3>
              <ul className="list-disc list-inside text-green-700 space-y-2 ml-4">
                <li><strong>Instalații gaze:</strong> 2 ani garanție completă</li>
                <li><strong>Centrale termice:</strong> garanția producătorului + 1 an montaj</li>
                <li><strong>Service/reparații:</strong> 6 luni pe lucrarea efectuată</li>
                <li><strong>Piese schimbate:</strong> garanția producătorului</li>
              </ul>
              <p className="text-green-700 mt-4">
                <strong>Important:</strong> Garanția nu acoperă defecțiunile cauzate de:
                folosire necorespunzătoare, modificări neautorizate, uzură normală.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">8. Responsabilități</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#05213c] mb-3">👥 Responsabilitățile Furnizorului:</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                  <li>Execuția serviciilor conform normelor</li>
                  <li>Folosirea materialelor certificate</li>
                  <li>Respectarea termenelor convenite</li>
                  <li>Asigurarea RCA profesională</li>
                  <li>Service în perioada de garanție</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#05213c] mb-3">👤 Responsabilitățile Clientului:</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                  <li>Plata serviciilor în termenele convenite</li>
                  <li>Asigurarea accesului la locația de lucru</li>
                  <li>Respectarea instrucțiunilor de funcționare</li>
                  <li>Anunțarea defecțiunilor în timp util</li>
                  <li>Mentenanța periodică conform recomandărilor</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">9. Anularea și Modificarea</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Clientul poate anula comanda cu minimum 24h înainte</li>
              <li>Pentru anulări tardive se poate percepe taxa de deplasare</li>
              <li>Modificările se acceptă dacă nu au început lucrările</li>
              <li>Furnizorul poate anula doar în caz de forță majoră</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">10. Forța Majoră</h2>
            <p className="text-gray-700 leading-relaxed">
              Niciuna dintre părți nu va fi răspunzătoare pentru neexecutarea obligațiilor 
              din cauza unor evenimente de forță majoră (calamități naturale, greve, 
              măsuri ale autorităților, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">11. Litigii</h2>
            <p className="text-gray-700 leading-relaxed">
              Orice litigiu se va rezolva pe cale amiabilă. În cazul în care nu se ajunge 
              la un acord, litigiile vor fi soluționate de către instanțele judecătorești 
              competente de la Constanța, România.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">12. Protecția Consumatorilor</h2>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">📋 Drepturile Consumatorilor:</h3>
              <ul className="list-disc list-inside text-blue-700 space-y-2 ml-4">
                <li>Drept de retragere pentru serviciile neîncepute (14 zile)</li>
                <li>Drept la informații corecte și complete</li>
                <li>Drept la garanție conform legislației</li>
                <li>Drept de reclamație la ANPC pentru nerespectarea drepturilor</li>
              </ul>
              <p className="text-blue-700 mt-4">
                <strong>ANPC:</strong> Autoritatea Națională pentru Protecția Consumatorilor - 
                <a href="https://anpc.ro" className="underline"> www.anpc.ro</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#05213c] mb-4">13. Contact și Reclamații</h2>
            <div className="bg-[#f9f9f9] p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Pentru orice întrebări, reclamații sau sesizări, ne puteți contacta:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>CON EST IMPEX SRL</strong></li>
                <li>📍 Constanța, România</li>
                <li>📞 <a href="tel:0722619097" className="text-[#f2b721]">0722.619.097</a></li>
                <li>🚨 Urgențe: <a href="tel:0744579715" className="text-[#f2b721]">0744.579.715</a></li>
                <li>📧 <a href="mailto:contact@conest-gaze-centrale.ro" className="text-[#f2b721]">contact@conest-gaze-centrale.ro</a></li>
                <li>🕒 Program: L-V 8:00-18:00, Sâmbătă 9:00-14:00</li>
              </ul>
            </div>
          </section>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500 text-center">
              Acești termeni și condiții intră în vigoare din data de August 2024 și 
              se aplică tuturor contractelor încheiate ulterior acestei date.
            </p>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}