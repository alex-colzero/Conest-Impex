'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TopNavigationSection = (): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/instalatii-gaze-naturale', label: 'Instalații Gaze' },
    { href: '/centrale-termice', label: 'Centrale Termice' },
    { href: '/revizii-si-verificari', label: 'Revizii' },
    { href: '/modernizare-instalatii', label: 'Modernizare' },
    { href: '/montaj-senzori-si-electrovalve', label: 'Senzori' },
    { href: '/reparatii-centrale', label: 'Reparații' },
    { href: '/constanta', label: 'Constanța' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container" aria-label="Navigare principală">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 z-50"
            aria-label="CON EST IMPEX - Pagina principală"
          >
            <div className="text-primary font-bold text-xl md:text-2xl">
              CON EST IMPEX
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? 'text-primary' : 'text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+40741234567"
              className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Urgențe 24/7
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Închide meniu' : 'Deschide meniu'}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="container pt-24 pb-8">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-lg font-medium transition-colors ${
                    pathname === link.href ? 'text-primary' : 'text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-8 border-t border-border">
            <a
              href="tel:+40741234567"
              className="bg-secondary text-white px-6 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 w-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Urgențe 24/7: 0741 234 567
            </a>
            <div className="mt-4 text-center text-text-secondary">
              <p>Program birou:</p>
              <p className="text-sm">Luni - Vineri: 08:00 - 18:00</p>
              <p className="text-sm">Sâmbătă: 09:00 - 14:00</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};