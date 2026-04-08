import type { Metadata } from 'next';
import { Montserrat, Lato } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NUTRISENS — Sonda multiparamétrica nitrato y potasio en tiempo real',
  description:
    'Primera sonda del mundo que mide nitrato y potasio simultáneamente en tiempo real. Hasta 60% de ahorro en nitratos. Tecnología patentada por Verdesmart.',
  openGraph: {
    title: 'NUTRISENS — Fertilización de precisión en tiempo real',
    description:
      'Primera sonda dual del mundo: nitrato + potasio simultáneos. Hasta 60% de ahorro en nitratos. Datos continuos, decisiones precisas.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'NUTRISENS — Sonda multiparamétrica en campo',
      },
    ],
    type: 'website',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.variable} ${lato.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
