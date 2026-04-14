'use client';

import { motion } from 'framer-motion';
import { Quote, Users } from 'lucide-react';
import { testimonials } from '../data/mock';
import { AnimatedSection } from './AnimatedSection';
import Image from 'next/image';

export function ClientWork() {
  const testimonial = testimonials[0];

  return (
    <section
      id="clients"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: 'var(--color-mid)' }}
    >
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 right-0 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(21,96,189,0.08) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users size={16} style={{ color: 'var(--color-primary)' }} />
            <p className="section-label mb-0!">Colaborações</p>
          </div>
          <h2 className="section-title section-title-light">
            Clientes que Confiaram em Nós
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-0.5 w-20 mx-auto mt-4"
            style={{ backgroundColor: 'var(--color-primary)', transformOrigin: 'left' }}
          />
          <p
            className="font-body text-sm mt-5 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            Projetos reais desenvolvidos em parceria com os nossos clientes, ajudando-os a crescer digitalmente.
          </p>
        </AnimatedSection>

        {/* Testimonial card */}
        <AnimatedSection delay={0.15} className="max-w-2xl mx-auto mb-16">
          <motion.div
            whileHover={{ y: -4, boxShadow: '0 30px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(34,211,238,0.18)' }}
            className="relative rounded-2xl p-8 md:p-10 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Large decorative quote icon */}
            <div className="mb-6">
              <Quote
                size={36}
                style={{ color: 'var(--color-primary)', opacity: 0.7 }}
              />
            </div>

            {/* Feedback text */}
            <p className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-6">
              {testimonial.feedback}
            </p>

            {/* Highlighted quote */}
            <div
              className="rounded-xl px-6 py-4 mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(21,96,189,0.12) 100%)',
                border: '1px solid rgba(34,211,238,0.18)',
              }}
            >
              <p
                className="font-heading font-semibold text-sm md:text-base italic"
                style={{ color: 'var(--color-primary)' }}
              >
                "{testimonial.quote}"
              </p>
            </div>

            {/* Author & Logo */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: 'var(--color-primary)', opacity: 0.5 }}
                />
                <p className="font-heading text-xs tracking-widest uppercase text-white/40">
                  {testimonial.author}
                </p>
              </div>

              {testimonial.logo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1, filter: "grayscale(0%)" }}
                  style={{ filter: "grayscale(100%)" }}>
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.author} Logo`}
                    className="h-6 md:h-8 w-auto object-contain"
                    loading="lazy"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* CTA banner */}
        <AnimatedSection delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-2xl p-8 md:p-10 text-center overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(21,96,189,0.15) 100%)',
              border: '1px solid rgba(34,211,238,0.2)',
            }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 60px rgba(34,211,238,0.05)',
              }}
            />

            <p className="section-label text-white/60! mb-3">Próximo projeto</p>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
              Vamos trabalhar juntos?
            </h3>
            <p className="font-body text-sm text-white/55 mb-6 max-w-md mx-auto">
              Conte-nos a sua ideia e encontramos a melhor solução digital para o seu negócio.
            </p>
            <motion.a
              href="mailto:samuel.santos@mpstechnologies.eu"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3 font-heading font-semibold text-sm text-dark rounded-full transition-all duration-300"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Falar connosco
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
