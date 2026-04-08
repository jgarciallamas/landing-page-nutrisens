'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const caseImages = [
  'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80',
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
];

const caseIcons = [
  <svg key="plant" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c0 0-4.5 5-4.5 9a4.5 4.5 0 009 0C16.5 8 12 3 12 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-9" />
  </svg>,
  <svg key="leaf" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3s10-1 15 8c0 0-3 9-15 9V3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 20c0-5 4-10 8-12" />
  </svg>,
  <svg key="drop" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2.25c-.55.63-6.25 7.44-6.25 11a6.25 6.25 0 0012.5 0c0-3.56-5.7-10.37-6.25-11z" />
  </svg>,
];

export default function UseCases() {
  const t = useTranslations('useCases');

  const cases = [
    { title: t('case1Title'), desc: t('case1Desc') },
    { title: t('case2Title'), desc: t('case2Desc') },
    { title: t('case3Title'), desc: t('case3Desc') },
  ];

  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-green-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-brand-green font-bold text-sm uppercase tracking-widest mb-3">
            Aplicaciones
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-mid max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={caseImages[i]}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-dark mb-4">
                  {caseIcons[i]}
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">{c.title}</h3>
                <p className="text-gray-mid text-sm leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
