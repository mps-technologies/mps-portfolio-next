import { motion } from 'framer-motion';
import { type Service } from '../data/mock';
import { useTilt } from '../hooks/useTilt';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(6);

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
      }}
      whileHover={{
        y: -10,
        boxShadow: '0 24px 64px rgba(34,211,238,0.18), 0 0 0 1px rgba(34,211,238,0.22)',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="bg-card rounded-2xl overflow-hidden group flex flex-col"
    >

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
          <service.icon className="size-6" style={{color: 'var(--color-secondary)'}} />
        </div>
        <h3 className="font-heading font-bold text-xl text-charcoal uppercase tracking-wide mb-3">
          {service.title}
        </h3>
        <p className="font-body text-sm text-smoke leading-relaxed mt-2 mb-8">
          {service.description}
        </p>
        <div className="space-y-2 mb-6">
          {service.deliverables.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1" style={{color: 'var(--color-secondary)'}}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
