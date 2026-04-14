'use client';

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import Image from 'next/image';
import heroBg from '@/public/hero-backgroun.webp'

const heroLines = [
  'Transformamos a sua',
  'ideia numa ferramenta',
  'capaz de fazer o seu',
  'negócio progredir',
];

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 80, skewY: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.3 + i * 0.15,
    },
  }),
};

interface StatProps {
  end: number;
  suffix: string;
  label: string;
}

function AnimatedStat({ end, suffix, label }: StatProps) {
  const { value, ref } = useCountUp(end, 1600);
  return (
    <div className="text-center">
      <p className="font-heading font-bold text-2xl" style={{ color: 'var(--color-primary)' }}>
        <span ref={ref}>{value}</span>{suffix}
      </p>
      <p className="font-body text-xs text-white/50 mt-0.5 tracking-wide">{label}</p>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax: bg image drifts up at 40% of scroll speed
  const bgY = useTransform(scrollY, [0, 800], ['0%', '30%']);
  // Content fades + rises as user scrolls
  const contentY = useTransform(scrollY, [0, 400], ['0%', '-8%']);
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 scale-110 pointer-events-none"
        style={{ y: bgY }}
      >
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          priority
          quality={95}
          style={{
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,14,30,0.50) 0%, rgba(8,14,30,0.68) 50%, rgba(8,14,30,0.97) 100%)',
        }}
      />

      {/* Scrolling grid lines for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <motion.span
            className="h-px w-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ backgroundColor: 'var(--color-primary)', transformOrigin: 'left' }}
          />
          <p className="section-label mb-0!">MPS Technologies</p>
          <motion.span
            className="h-px w-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ backgroundColor: 'var(--color-primary)', transformOrigin: 'right' }}
          />
        </motion.div>

        {/* Headline — line-by-line reveal */}
        <div className="overflow-hidden mb-10">
          {heroLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white uppercase leading-none tracking-tight block"
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:samuel.santos@mpstechnologies.eu"
            whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(34,211,238,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-3.5 font-heading font-semibold text-sm tracking-widest uppercase border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-charcoal"
          >
            Contacte-nos
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.06, x: 4 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-3.5 font-heading font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80"
            style={{ color: 'var(--color-primary)' }}
          >
            Ver Serviços →
          </motion.a>
        </motion.div>

        {/* Stats — count-up on enter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center justify-center mt-16"
        >
          <AnimatedStat end={3} suffix="+" label="Anos de experiência" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.p
          className="font-heading text-[10px] tracking-[0.3em] uppercase text-white/30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Scroll
        </motion.p>
        <motion.div
          className="w-px h-10 rounded-full overflow-hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <motion.div
            className="w-full rounded-full"
            style={{ backgroundColor: 'var(--color-primary)' }}
            animate={{ height: ['0%', '100%', '0%'], y: ['0%', '0%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
