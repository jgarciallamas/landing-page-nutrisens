'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { useTranslations } from 'next-intl';

function AnimatedCounter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return () => controls.stop();
  }, [isInView, to]);

  return <span ref={ref}>{count}</span>;
}

export default function Metrics() {
  const t = useTranslations('metrics');

  const stats = [
    {
      value: parseInt(t('stat1Value')),
      prefix: t('stat1Prefix'),
      suffix: t('stat1Suffix'),
      label: t('stat1Label'),
    },
    {
      value: parseInt(t('stat2Value')),
      prefix: t('stat2Prefix'),
      suffix: t('stat2Suffix'),
      label: t('stat2Label'),
    },
    {
      value: parseInt(t('stat3Value')),
      prefix: t('stat3Prefix'),
      suffix: t('stat3Suffix'),
      label: t('stat3Label'),
    },
  ];

  return (
    <section id="metrics" className="py-20 lg:py-28 bg-brand-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-3xl px-8 py-10 border border-white/20"
            >
              <div className="text-6xl sm:text-7xl font-heading font-bold text-white leading-none mb-2">
                <span className="text-3xl sm:text-4xl font-bold opacity-80 mr-1">{stat.prefix}</span>
                <AnimatedCounter to={stat.value} />
                <span className="text-4xl sm:text-5xl">{stat.suffix}</span>
              </div>
              <p className="text-white/80 text-base font-medium mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
