'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { label: t('problem'), href: '#problem' },
    { label: t('solution'), href: '#solution' },
    { label: t('metrics'), href: '#metrics' },
    { label: t('howItWorks'), href: '#how-it-works' },
    { label: t('useCases'), href: '#use-cases' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Image
              src="https://verdtech.es/wp-content/uploads/2017/04/logo1.png"
              alt="Verdesmart"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-green ${
                  isScrolled ? 'text-gray-text' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Locale switcher */}
            <div className="flex items-center gap-1 text-sm font-medium">
              <button
                onClick={() => switchLocale('es')}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'es'
                    ? 'text-brand-green font-bold'
                    : isScrolled
                    ? 'text-gray-mid hover:text-brand-green'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                ES
              </button>
              <span className={isScrolled ? 'text-gray-mid' : 'text-white/40'}>|</span>
              <button
                onClick={() => switchLocale('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === 'en'
                    ? 'text-brand-green font-bold'
                    : isScrolled
                    ? 'text-gray-mid hover:text-brand-green'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-brand-green text-white text-sm font-bold rounded-lg hover:bg-brand-dark transition-colors"
            >
              {t('cta')}
            </a>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 ${isScrolled ? 'text-gray-text' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-text hover:text-brand-green font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center px-4 py-2 bg-brand-green text-white font-bold rounded-lg hover:bg-brand-dark transition-colors"
            >
              {t('cta')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
