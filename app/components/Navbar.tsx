'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { use, useEffect, useState } from 'react';
// import MPSLogo from '../assets/mps_white.svg';

const navLinks = [
  { label: 'Serviços', href: '#services' },
  { label: 'Clientes', href: '#clients' },
  { label: 'Sobre nós', href: '#about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(8,14,30,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity h-7 w-auto">
            {/* <MPSLogo /> */}
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative font-body text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <a
            href="mailto:samuel.santos@mpstechnologies.eu"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 font-heading font-semibold text-sm text-dark rounded-full transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Contacte-nos
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              backgroundColor: 'rgba(8,14,30,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <ul className="flex flex-col py-6 px-6 gap-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-heading font-semibold text-lg text-white/85 hover:text-white block transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <a
                  href="mailto:samuel.santos@mpstechnologies.eu"
                  onClick={handleLinkClick}
                  className="inline-block mt-2 px-6 py-2.5 font-heading font-semibold text-sm text-dark rounded-full"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  Contacte-nos
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
