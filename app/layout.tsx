import './globals.css'

export const metadata = {
  title: 'Conest - Instalații gaze și centrale termice',
  description: 'Servicii complete pentru instalații gaze și centrale termice cu experiență de peste 27 de ani.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CON EST IMPEX SRL",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Constanța",
      "addressLocality": "Constanța",
      "addressRegion": "Constanța",
      "addressCountry": "RO"
    },
    "telephone": "+40-722-619-097",
    "email": "contact@conest-gaze-centrale.ro",
    "url": "https://www.conest-gaze-centrale.ro",
    "foundingDate": "1996",
    "areaServed": ["Constanța", "Dobrogea", "România"],
    "serviceType": ["Instalații gaze naturale", "Centrale termice", "Service ISCIR", "Revizii ANRE"],
    "hasCredential": [
      "Autorizație ANRE",
      "Certificare ISCIR (RVT și RSL)"
    ],
    "openingHours": "Mo-Su 00:00-23:59"
  };

  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}