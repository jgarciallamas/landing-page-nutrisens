'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const icons = [
  // Clock
  <svg key="clock" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Money/Euro
  <svg key="money" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Water drop
  <svg key="water" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3.75c-.55.63-6.25 7.44-6.25 11a6.25 6.25 0 0012.5 0c0-3.56-5.7-10.37-6.25-11z" />
  </svg>,
  // Chart down
  <svg key="chart" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
  </svg>,
];

export default function Problem() {
  const t = useTranslations('problem');

  const points = [t('point1'), t('point2'), t('point3'), t('point4')];

  return (
    <section id="problem" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4 leading-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-mid max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl border border-red-100 bg-red-50/40 hover:border-red-200 transition-colors"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-500">
                {icons[i]}
              </div>
              <p className="text-gray-text leading-relaxed pt-1">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
