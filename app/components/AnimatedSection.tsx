import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

type AnimVariant = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'clipReveal' | 'scale' | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  variant?: AnimVariant;
}

function getVariants(variant: AnimVariant, direction: string) {
  if (variant === 'clipReveal') {
    return {
      initial: { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
      animate: { clipPath: 'inset(0 0% 0 0)', opacity: 1 },
    };
  }

  if (variant === 'scale') {
    return {
      initial: { opacity: 0, scale: 0.88 },
      animate: { opacity: 1, scale: 1 },
    };
  }

  const dirMap: Record<string, { x: number; y: number }> = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    none: { y: 0, x: 0 },
  };
  const { x, y } = dirMap[direction] ?? dirMap.up;
  return {
    initial: { opacity: 0, x, y },
    animate: { opacity: 1, x: 0, y: 0 },
  };
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.75,
  variant = 'fadeUp',
}: AnimatedSectionProps) {
  const { initial, animate } = getVariants(variant, direction);

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
