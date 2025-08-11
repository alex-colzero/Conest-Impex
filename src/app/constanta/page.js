export const metadata = {
  title: 'Instalator Gaze Constanța - Acoperire Totală Municipiu și Județ | CON EST IMPEX',
  description: 'Instalații gaze și centrale termice în tot județul Constanța. Mamaia, Năvodari, Eforie, Mangalia, Medgidia. Intervenții rapide, prețuri corecte.',
}

export default function Constanta() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Instalator Autorizat Gaze în Constanța</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          CON EST IMPEX oferă servicii complete de instalații gaze și centrale termice în 
          întreg județul Constanța. Cu sediul central în municipiu, acoperim rapid toate zonele.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Zone Acoperite în Constanța</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold">Municipiul Constanța</h3>
            <ul className="text-sm text-gray-600 mt-2">
              <li>Centru</li>
              <li>Tomis Nord</li>
              <li>Tomis Plus</li>
              <li>CET</li>
              <li>Badea Cârțan</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold">Stațiuni</h3>
            <ul className="text-sm text-gray-600 mt-2">
              <li>Mamaia</li>
              <li>Eforie Nord</li>
              <li>Eforie Sud</li>
              <li>Neptun</li>
              <li>Jupiter</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold">Orașe și Comune</h3>
            <ul className="text-sm text-gray-600 mt-2">
              <li>Năvodari</li>
              <li>Ovidiu</li>
              <li>Murfatlar</li>
              <li>Valu lui Traian</li>
              <li>Agigea</li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Avantaje Firma Locală</h2>
        <p className="text-gray-700 mb-4">
          Ca firmă cu tradiție în Constanța din 1996, cunoaștem perfect specificul local: 
          de la provocările instalațiilor în zone de coastă până la cerințele blocurilor comuniste.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Timp de Intervenție</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Constanța municipiu: 30-60 minute</li>
          <li>Mamaia și stațiuni: 45-75 minute</li>
          <li>Localități limitrofe: 60-90 minute</li>
          <li>Urgențe majore: prioritate maximă</li>
        </ul>
        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Partenerul Tău Local de Încredere</h3>
          <p className="text-gray-700 mb-4">Pentru orice problemă cu gazele sau centrala termică în Constanța!</p>
          <a href="tel:+40700000000" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Contact Direct: 0700 000 000
          </a>
        </div>
      </div>
    </div>
  )
}