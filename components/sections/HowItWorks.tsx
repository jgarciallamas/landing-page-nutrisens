'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    { number: t('step1Number'), title: t('step1Title'), desc: t('step1Desc') },
    { number: t('step2Number'), title: t('step2Title'), desc: t('step2Desc') },
    { number: t('step3Number'), title: t('step3Title'), desc: t('step3Desc') },
    { number: t('step4Number'), title: t('step4Title'), desc: t('step4Desc') },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-green font-bold text-sm uppercase tracking-widest mb-3">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-mid max-w-xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-brand-green/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-20 h-20 rounded-full border-2 border-brand-green bg-white flex items-center justify-center mb-5 shadow-sm">
                  <span className="text-2xl font-heading font-bold text-brand-green">{step.number}</span>
                </div>

                <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-mid text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
