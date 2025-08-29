import { Metadata } from 'next'
import { ElementHomepage } from "../src/screens/ElementHomepage/ElementHomepage";

export const metadata: Metadata = {
  title: 'Conest - Instalații gaze și centrale termice Constanța',
  description: 'Servicii profesionale de instalații gaze naturale, centrale termice, revizii ANRE în Constanța. Autorizați ANRE și ISCIR. Urgențe 24/7. ☎️ 0722.619.097',
  keywords: 'instalatii gaze naturale, centrale termice, revizii ANRE, Constanta, urgente 24/7, autorizat ANRE, certificat ISCIR',
  openGraph: {
    title: 'Conest - Instalații gaze și centrale termice Constanța',
    description: 'Servicii profesionale de instalații gaze naturale, centrale termice, revizii ANRE în Constanța. Autorizați ANRE și ISCIR. Urgențe 24/7.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://conest-gaze-centrale.ro',
    siteName: 'Conest - Instalații Gaze și Centrale Termice',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conest - Instalații gaze și centrale termice Constanța',
    description: 'Servicii profesionale de instalații gaze naturale, centrale termice, revizii ANRE în Constanța. Autorizați ANRE și ISCIR.',
  },
  alternates: {
    canonical: 'https://conest-gaze-centrale.ro',
  },
}

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return <ElementHomepage />;
}