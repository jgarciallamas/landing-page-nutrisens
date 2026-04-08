import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  const legalLinks = [
    { label: t('legal'), href: '#' },
    { label: t('privacy'), href: '#' },
    { label: t('cookies'), href: '#' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <footer className="bg-footer-bg text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Image
              src="https://verdtech.es/wp-content/uploads/2017/04/logo1.png"
              alt="Verdesmart"
              width={120}
              height={36}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-white/50 max-w-xs">{t('tagline')}</p>
          </div>

          {/* Legal links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm text-white/50 hover:text-white/90 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} NUTRISENS — {t('rights')}
          </span>
          <span>
            {t('madeBy')}{' '}
            <a href="https://verdtech.es" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-brand-green/80">
              Verdesmart (Verdtech)
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
