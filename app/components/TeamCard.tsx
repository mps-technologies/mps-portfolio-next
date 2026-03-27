import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { type TeamMember } from '../data/mock';
import Image from 'next/image';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="flex flex-col items-center text-center p-8 rounded-2xl bg-card transition-all duration-300 group"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
    >
      {/* Avatar */}
      <div className="relative mb-5 w-28 h-28">
        <motion.div
          className="h-full rounded-full overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{
            border: '3px solid var(--color-primary)',
            boxShadow: '0 0 0 4px rgba(34,211,238,0.12)',
            isolation: 'isolate', // Prevents visual glitches during scale
          }}
        >
          <Image
            src={member.avatar}
            alt={`${member.name} — MPS Technologies`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Online indicator */}
        <div
          className="absolute bottom-1 right-1 z-10 w-4 h-4 rounded-full border-2 border-white"
          style={{ backgroundColor: '#22c55e' }}
        />
      </div>

      {/* Info */}
      <h3 className="font-heading font-bold text-xl text-charcoal mb-1">
        {member.name}
      </h3>
      <p
        className="font-body text-sm font-medium mb-3"
        style={{ color: 'var(--color-secondary)' }}
      >
        {member.role}
      </p>

      {/* Location */}
      <div className="flex items-center gap-1.5 mb-5">
        <MapPin size={13} style={{ color: 'var(--color-muted)' }} />
        <p className="font-body text-xs text-smoke">{member.location}</p>
      </div>

      {/* Education & Strengths */}
      <div className="w-full space-y-4 pt-5 border-t border-charcoal/5">
        <div className="text-left">
          <p className="font-heading font-bold text-[10px] uppercase tracking-wider text-charcoal/30 mb-1.5">
            Formação
          </p>
          <p className="font-body text-xs text-smoke leading-relaxed">
            {member.education}
          </p>
        </div>

        <div className="text-left">
          <p className="font-heading font-bold text-[10px] uppercase tracking-wider text-charcoal/30 mb-1.5">
            Destaque
          </p>
          <p className="font-body text-xs text-charcoal/70 leading-relaxed italic">
            "{member.strength}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}
