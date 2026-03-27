'use client';

import { motion } from 'framer-motion';
import { team } from '../data/mock';
import { TeamCard } from './TeamCard';
import { AnimatedSection } from './AnimatedSection';

export function About() {
  return (
    <section id="about" className="relative py-28 bg-card overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, var(--color-primary))',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-6">
          {/*<p className="section-label">A nossa equipa</p>*/}
          <h2 className="section-title section-title-dark">Sobre nós</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-0.5 w-20 mx-auto mt-4"
            style={{ backgroundColor: 'var(--color-primary)', transformOrigin: 'left' }}
          />
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={0.1} className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-body text-smoke text-base leading-relaxed">
            Somos a MPS Technologies, formada por Misael, Pedro e Samuel.{' '}
            <span className="font-medium" style={{ color: 'var(--color-charcoal)' }}>
              Unimos experiência e dedicação
            </span>{' '}
            para desenvolver sites completos e de confiança, ajudando pequenas empresas a
            crescer com soluções digitais simples e eficazes.
          </p>
        </AnimatedSection>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>

        {/* Values strip */}
        <AnimatedSection delay={0.3} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '⚡', label: 'Rapidez', desc: 'Entrega no prazo acordado' },
              { icon: '🎯', label: 'Precisão', desc: 'Atenção aos detalhes' },
              { icon: '🤝', label: 'Confiança', desc: 'Comunicação transparente' },
              { icon: '🚀', label: 'Inovação', desc: 'Tecnologias modernas' },
            ].map((value) => (
              <motion.div
                key={value.label}
                whileHover={{ y: -4 }}
                className="text-center p-5 rounded-xl"
                style={{
                  background: 'rgba(21,96,189,0.05)',
                  border: '1px solid rgba(21,96,189,0.1)',
                }}
              >
                <p className="text-2xl mb-2">{value.icon}</p>
                <p className="font-heading font-bold text-sm text-charcoal mb-1">
                  {value.label}
                </p>
                <p className="font-body text-xs text-smoke leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
