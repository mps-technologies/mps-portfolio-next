// import { motion } from 'framer-motion';

interface MarqueeTickerProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export function MarqueeTicker({
  items,
  // speed = 1000,
  // direction = 'left',
  className = '',
}: MarqueeTickerProps) {

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="gap-10 will-change-transform">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-heading font-semibold text-xs uppercase tracking-[0.2em] pl-8"
            style={{ color: 'var(--color-smoke)' }}
          >
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
