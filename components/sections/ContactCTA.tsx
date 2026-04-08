'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactCTA() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green text-gray-text placeholder-gray-300 transition bg-white text-sm';
  const errorClass = 'mt-1 text-red-500 text-xs';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Copy side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-brand-green font-bold text-sm uppercase tracking-widest mb-4">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              {t('title')}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{t('subtitle')}</p>

            {/* Trust signals */}
            <div className="flex flex-col gap-3">
              {[
                'Respuesta garantizada en menos de 24h',
                'Sin compromiso — solo información técnica',
                'Demo personalizada disponible para tu cultivo',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-2">{t('formSuccess')}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-1">{t('formName')}</label>
                  <input
                    type="text"
                    placeholder={t('namePlaceholder')}
                    className={inputClass}
                    {...register('name', { required: true })}
                  />
                  {errors.name && <p className={errorClass}>Campo obligatorio</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-1">{t('formEmail')}</label>
                  <input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    className={inputClass}
                    {...register('email', {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                  />
                  {errors.email && <p className={errorClass}>Email válido requerido</p>}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-1">{t('formCompany')}</label>
                  <input
                    type="text"
                    placeholder={t('companyPlaceholder')}
                    className={inputClass}
                    {...register('company', { required: true })}
                  />
                  {errors.company && <p className={errorClass}>Campo obligatorio</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-1">{t('formMessage')}</label>
                  <textarea
                    rows={4}
                    placeholder={t('messagePlaceholder')}
                    className={`${inputClass} resize-none`}
                    {...register('message', { required: true })}
                  />
                  {errors.message && <p className={errorClass}>Campo obligatorio</p>}
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">{t('formError')}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-brand-green text-white font-bold text-base rounded-xl hover:bg-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? t('formSending') : t('formSubmit')}
                </button>

                <p className="text-xs text-gray-mid text-center">{t('privacy')}</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
