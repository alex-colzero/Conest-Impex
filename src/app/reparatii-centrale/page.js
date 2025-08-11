export const metadata = {
  title: 'Reparații Centrale Termice Constanța - Service Rapid 24/7 | CON EST IMPEX',
  description: 'Reparații centrale termice în Constanța. Intervenții urgente, piese originale, tehnicienii ISCIR. Toate mărcile. Garanție lucrări.',
}

export default function ReparatiiCentrale() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Reparații Centrale Termice</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Centrala termică nu funcționează? Echipa noastră de tehnicieni certificați ISCIR 
          intervine rapid pentru diagnosticare și reparații, folosind doar piese originale.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Probleme Frecvente Rezolvate</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Centrala nu pornește sau se oprește des</li>
          <li>Lipsă apă caldă sau încălzire</li>
          <li>Zgomote anormale în funcționare</li>
          <li>Pierderi de presiune</li>
          <li>Erori pe display</li>
          <li>Consum excesiv de gaz</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Service Pentru Toate Mărcile</h2>
        <p className="text-gray-700 mb-4">
          Reparăm centrale de toate mărcile: Ariston, Vaillant, Viessmann, Ferroli, Immergas, 
          Beretta, Baxi, Bosch, Junkers și multe altele. Stoc permanent de piese uzuale.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Garanție și Transparență</h2>
        <p className="text-gray-700 mb-4">
          Oferim garanție pentru toate reparațiile. Prețuri transparente comunicate înainte 
          de începerea lucrărilor. Fără surprize neplăcute!
        </p>
        <div className="bg-red-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Urgențe Reparații 24/7</h3>
          <p className="text-gray-700 mb-4">Fără căldură sau apă caldă? Intervenim în maxim 2 ore!</p>
          <a href="tel:+40700000000" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Apel Urgență: 0700 000 000
          </a>
        </div>
      </div>
    </div>
  )
}