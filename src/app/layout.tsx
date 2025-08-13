import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#05213c',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.conest-gaze-centrale.ro'),
  title: {
    default: 'CON EST IMPEX - Instalații Gaze și Centrale Termice Constanța | Service 24/7',
    template: '%s | CON EST IMPEX',
  },
  description: 'Instalații gaze naturale și centrale termice în Constanța din 1996. Autorizați ANRE & ISCIR. Service urgențe 24/7. Reduceri 25% pensionari.',
  keywords: ['instalații gaze constanța', 'centrale termice constanța', 'ANRE', 'ISCIR', 'urgențe gaze', 'service centrale', 'detectoare gaze', 'smart home'],
  authors: [{ name: 'CON EST IMPEX SRL' }],
  creator: 'CON EST IMPEX SRL',
  publisher: 'CON EST IMPEX SRL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://www.conest-gaze-centrale.ro',
    siteName: 'CON EST IMPEX',
    title: 'CON EST IMPEX - Instalații Gaze și Centrale Termice Constanța',
    description: 'Instalații gaze naturale și centrale termice în Constanța din 1996. Autorizați ANRE & ISCIR.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CON EST IMPEX - Instalații Gaze și Centrale Termice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CON EST IMPEX - Instalații Gaze și Centrale Termice Constanța',
    description: 'Instalații gaze naturale și centrale termice în Constanța din 1996.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              name: 'CON EST IMPEX SRL',
              description: 'Instalații gaze naturale și centrale termice în Constanța din 1996',
              url: 'https://www.conest-gaze-centrale.ro',
              telephone: '+40741234567',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Str. Tomis Nr. 123',
                addressLocality: 'Constanța',
                addressRegion: 'Constanța',
                postalCode: '900123',
                addressCountry: 'RO',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday'],
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              hasCredential: [
                {
                  '@type': 'EducationalOccupationalCredential',
                  credentialCategory: 'Autorizație ANRE',
                },
                {
                  '@type': 'EducationalOccupationalCredential',
                  credentialCategory: 'Certificare ISCIR (RVT și RSL)',
                },
              ],
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 44.1765,
                  longitude: 28.6348,
                },
                geoRadius: '50000',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50">
          Sari la conținut principal
        </a>
        {children}
      </body>
    </html>
  );
}
