import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { type Project } from '../data/mock';
import { useTilt } from '../hooks/useTilt';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(5);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    onMouseLeave();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
        boxShadow: hovered
          ? '0 28px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(21,96,189,0.15)'
          : '0 4px 30px rgba(0,0,0,0.10)',
      }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-card flex flex-col transition-shadow duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={onMouseMove}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.09 : 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          loading="lazy"
        />
        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(8,14,30,0.75)' }}
            >
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0.82, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.82, opacity: 0, y: 10 }}
                transition={{ duration: 0.28 }}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-6 py-2.5 font-heading font-semibold text-sm text-white border border-white/40 rounded-full hover:bg-white hover:text-dark transition-colors duration-200"
              >
                <ExternalLink size={15} />
                Ver Projeto
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="tag-pill"
              style={{
                backgroundColor: 'rgba(21,96,189,0.1)',
                color: 'var(--color-secondary)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
          {project.title}
        </h3>
        <p className="font-body text-sm text-smoke leading-relaxed flex-1">
          {project.description}
        </p>

        {/* CTA */}
        <motion.a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2 font-heading font-semibold text-sm text-white rounded-full w-fit transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: 'var(--color-charcoal)' }}
        >
          Saber mais
        </motion.a>
      </div>
    </motion.div>
  );
}
