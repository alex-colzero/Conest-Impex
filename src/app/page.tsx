export const metadata = {
  title: 'CON EST IMPEX SRL - Instalații Gaze & Centrale Termice Constanța',
  description:
    'Instalații gaze naturale și centrale termice în Constanța din 1996. Autorizat ANRE & ISCIR. Urgențe 24/7.',
};

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        CON EST IMPEX SRL — Instalații Gaze & Centrale Termice (Constanța)
      </h1>
      <p className="mt-4 text-gray-700">
        Autorizat ANRE & ISCIR • Urgențe 24/7 • Din 1996. Alegeți un serviciu:
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        <li><a className="block rounded border p-4 hover:bg-gray-50" href="/revizii-si-verificari">Revizii & Verificări ANRE →</a></li>
        <li><a className="block rounded border p-4 hover:bg-gray-50" href="/modernizare-instalatii">Modernizare Instalații →</a></li>
        <li><a className="block rounded border p-4 hover:bg-gray-50" href="/montaj-senzori-si-electrovalve">Senzori & Electrovalve →</a></li>
        <li><a className="block rounded border p-4 hover:bg-gray-50" href="/reparatii-centrale">Reparații Centrale →</a></li>
        <li><a className="block rounded border p-4 hover:bg-gray-50" href="/constanta">Constanța — Acoperire →</a></li>
      </ul>

      <div className="mt-8">
        <a href="tel:+40700000000" className="inline-block rounded bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
          Urgențe 24/7: 0700 000 000
        </a>
      </div>
    </main>
  );
}