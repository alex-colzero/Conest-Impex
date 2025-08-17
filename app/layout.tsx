import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CON EST IMPEX - Instalații Gaze & Centrale Termice Constanța',
  description: 'Servicii profesionale de instalații gaze naturale și centrale termice în Constanța. Autorizați ANRE & ISCIR din 1996. Urgențe 24/7.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.3, user-scalable=yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}