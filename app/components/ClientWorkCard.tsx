'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Calendar } from 'lucide-react';
import { type ClientProject } from '../data/mock';

interface ClientWorkCardProps {
  project: ClientProject;
  index: number;
}

export function ClientWorkCard({ project, index }: ClientWorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      whileHover={{
        y: -6,
        boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,211,238,0.15)',
      }}
      className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 40%, rgba(13,27,62,0.85) 100%)',
          }}
        />
        {/* Year badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold text-white"
          style={{ backgroundColor: 'rgba(8,14,30,0.7)', backdropFilter: 'blur(8px)' }}>
          <Calendar size={11} />
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Client name */}
        <p
          className="font-heading font-semibold text-xs tracking-widest uppercase mb-1"
          style={{ color: 'var(--color-primary)' }}
        >
          {project.clientName}
        </p>

        {/* Project title */}
        <h3 className="font-heading font-bold text-lg text-white mb-3 leading-snug">
          {project.projectTitle}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-white/55 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="tag-pill"
              style={{
                backgroundColor: 'rgba(34,211,238,0.1)',
                color: 'var(--color-primary)',
                border: '1px solid rgba(34,211,238,0.2)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Result metric */}
        <div
          className="flex items-center gap-2 pt-4 mt-auto"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <TrendingUp
            size={16}
            style={{ color: 'var(--color-primary)', flexShrink: 0 }}
          />
          <p
            className="font-heading font-semibold text-sm"
            style={{ color: 'var(--color-primary)' }}
          >
            {project.result}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
