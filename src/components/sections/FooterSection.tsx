import React from 'react';
import Link from 'next/link';

export const FooterSection = (): React.JSX.Element => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CON EST IMPEX SRL</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Instalații gaze naturale și centrale termice în Constanța din 1996. 
              Autorizați ANRE și ISCIR.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicii Rapide</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/instalatii-gaze-naturale" className="text-gray-300 hover:text-white transition-colors">
                  Instalații Gaze
                </Link>
              </li>
              <li>
                <Link href="/centrale-termice" className="text-gray-300 hover:text-white transition-colors">
                  Centrale Termice
                </Link>
              </li>
              <li>
                <Link href="/revizii-si-verificari" className="text-gray-300 hover:text-white transition-colors">
                  Revizii ANRE
                </Link>
              </li>
              <li>
                <Link href="/reparatii-centrale" className="text-gray-300 hover:text-white transition-colors">
                  Reparații Urgente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-secondary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+40741234567" className="text-gray-300 hover:text-white transition-colors">
                    0741 234 567
                  </a>
                  <p className="text-xs text-gray-400">Urgențe 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-secondary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@conest-gaze.ro" className="text-gray-300 hover:text-white transition-colors">
                  contact@conest-gaze.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-secondary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic text-gray-300">
                  Str. Tomis Nr. 123<br />
                  Constanța, România
                </address>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Program</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Urgențe: 24/7</span>
              </li>
              <li className="pl-7">Luni - Vineri: 08:00 - 18:00</li>
              <li className="pl-7">Sâmbătă: 09:00 - 14:00</li>
              <li className="pl-7">Duminică: Doar urgențe</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>
              © 2024 CON EST IMPEX SRL. Toate drepturile rezervate. | Instalații Gaze & Centrale Termice Constanța din 1996
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/politica-confidentialitate" className="hover:text-white transition-colors">
                Confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="hover:text-white transition-colors">
                Termeni
              </Link>
              <Link href="/anpc" className="hover:text-white transition-colors">
                ANPC
              </Link>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-400">
            Autorizat ANRE • Certificat ISCIR (RVT și RSL) • Conform standardelor europene
          </div>
        </div>
      </div>
    </footer>
  );
};