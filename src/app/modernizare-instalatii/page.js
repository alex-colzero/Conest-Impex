export const metadata = {
  title: 'Modernizare Instalații Gaze Constanța - Eficiență și Siguranță | CON EST IMPEX',
  description: 'Modernizare instalații gaze vechi în Constanța. Înlocuire țevi, upgrade sisteme, montaj senzori inteligenți. Reduceri pentru pensionari.',
}

export default function ModernizareInstalatii() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Modernizare Instalații Gaze</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Instalațiile vechi reprezintă un risc major. Modernizăm sistemele existente pentru 
          eficiență maximă și siguranță sporită, conform ultimelor norme tehnice.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Ce Presupune Modernizarea</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Înlocuire conducte și racorduri uzate</li>
          <li>Upgrade la sisteme moderne de siguranță</li>
          <li>Montaj detectoare de gaz inteligente</li>
          <li>Instalare electrovalve automate</li>
          <li>Optimizare trasee pentru eficiență</li>
          <li>Integrare cu sisteme smart home</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Beneficii Modernizare</h2>
        <p className="text-gray-700 mb-4">
          Siguranță sporită, consum redus, eliminare pierderi, conformitate cu normele actuale, 
          creșterea valorii proprietății. Investiție recuperată prin economii la facturi.
        </p>
        <div className="bg-green-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Ofertă Specială Pensionari</h3>
          <p className="text-gray-700 mb-4">Reducere 25% pentru toate lucrările de modernizare!</p>
          <a href="tel:+40700000000" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Solicită Evaluare Gratuită: 0700 000 000
          </a>
        </div>
      </div>
    </div>
  )
}