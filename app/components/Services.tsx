'use client';

import { motion } from 'framer-motion';
import { services } from '../data/mock';
import { AnimatedSection } from './AnimatedSection';
import { MarqueeTicker } from './MarqueeTicker';
import { ServiceCard } from './ServiceCard';

const techItems = [
  'UI / UX Design',
  'API Integration',
  'Mobile Apps',
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(21,96,189,0.07) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-10">
          {/*<p className="section-label">O que fazemos</p>*/}
          <h2 className="section-title section-title-dark">Nossos Serviços</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-0.5 w-20 mx-auto mt-4"
            style={{ backgroundColor: 'var(--color-primary)', transformOrigin: 'left' }}
          />
        </AnimatedSection>
      </div>

      {/* Marquee ticker — full width */}
      <div
        className="py-4 m-10 justify-center flex"
        style={{ borderColor: 'rgba(0,0,0,0.08)' }}
      >
        <MarqueeTicker items={techItems} speed={40} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
