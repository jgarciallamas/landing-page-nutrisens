'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const featureIcons = [
  // Dual / two arrows
  <svg key="dual" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>,
  // Real-time / lightning
  <svg key="realtime" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Patent / shield check
  <svg key="patent" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Eco / leaf
  <svg key="eco" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3s10-1 15 8c0 0-3 9-15 9V3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 20c0-5 4-10 8-12" />
  </svg>,
];

export default function Solution() {
  const t = useTranslations('solution');

  const features = [
    { title: t('feature1Title'), desc: t('feature1Desc') },
    { title: t('feature2Title'), desc: t('feature2Desc') },
    { title: t('feature3Title'), desc: t('feature3Desc') },
    { title: t('feature4Title'), desc: t('feature4Desc') },
  ];

  return (
    <section id="solution" className="py-20 lg:py-28 bg-green-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-brand-green font-bold text-sm uppercase tracking-widest mb-3">
            NUTRISENS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4 leading-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-mid max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-green-100"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-dark mb-5">
                {featureIcons[i]}
              </div>
              <h3 className="font-heading font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-mid text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
