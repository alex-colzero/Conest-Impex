import { Metadata } from 'next'
import { ElementContentPage } from "../../src/screens/ElementContentPage";

export const metadata: Metadata = {
  title: 'Servicii complete instalații gaze și centrale - Conest Constanța',
  description: 'Servicii complete pentru instalații gaze naturale, centrale termice, revizii ANRE, sisteme siguranță în Constanța. Echipă autorizată cu experiență de 28 ani.',
  keywords: 'servicii complete gaze, centrale termice, instalatii profesionale, Constanta, ANRE, ISCIR',
  openGraph: {
    title: 'Servicii complete instalații gaze și centrale - Conest Constanța',
    description: 'Servicii complete pentru instalații gaze naturale, centrale termice, revizii ANRE, sisteme siguranță în Constanța.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://conest-gaze-centrale.ro/content',
    siteName: 'Conest - Instalații gaze și centrale termice',
  },
  alternates: {
    canonical: 'https://conest-gaze-centrale.ro/content',
  },
}

export const dynamic = 'force-dynamic';

export default function ContentPage() {
  return <ElementContentPage />;
}