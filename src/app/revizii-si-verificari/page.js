export const metadata = {
  title: 'Revizii și Verificări Gaze ANRE Constanța - Obligatorii Legal | CON EST IMPEX',
  description: 'Revizii periodice instalații gaze și verificări ANRE în Constanța. Personal autorizat, rapoarte oficiale, programări flexibile. Evitați amenzile!',
}

export default function ReviziiSiVerificari() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Revizii și Verificări ANRE</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Reviziile periodice sunt obligatorii prin lege și esențiale pentru siguranța dumneavoastră. 
          Personal autorizat ANRE și ISCIR pentru toate tipurile de verificări.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Tipuri de Verificări</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Revizie periodică instalații gaze (la 2 ani)</li>
          <li>Verificare tehnică centrale termice (anual)</li>
          <li>Probe de presiune și etanșeitate</li>
          <li>Verificare detectoare de gaz</li>
          <li>Eliberare rapoarte tehnice oficiale</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">De Ce Sunt Importante</h2>
        <p className="text-gray-700 mb-4">
          Verificările periodice previn accidentele, prelungesc durata de viață a echipamentelor și 
          sunt obligatorii legal. Neefectuarea lor poate duce la amenzi și deconectarea de la rețea.
        </p>
        <div className="bg-red-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Atenție! Termen de Revizie Aproape</h3>
          <p className="text-gray-700 mb-4">Nu riscați amenzi sau deconectarea. Programați revizia la timp!</p>
          <a href="tel:+40700000000" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Programează Revizia: 0700 000 000
          </a>
        </div>
      </div>
    </div>
  )
}