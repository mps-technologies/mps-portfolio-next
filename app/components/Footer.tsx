'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Mail, MessageCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const navLinks = [
  { label: 'Serviços', href: '#services' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Clientes', href: '#clients' },
  { label: 'Sobre nós', href: '#about' },
];

const year = new Date().getFullYear();
const whatsappNumber = '932146690';
const whatsappLink = `https://wa.me/351${whatsappNumber}`;

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-dark)' }}>
      {/* CTA Banner */}
      <div
        className="relative py-20 overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, var(--color-navy) 0%, var(--color-mid) 100%)',
        }}
      >
        {/* Animated glow orb */}
        <motion.div
          className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
            transform: 'translate(20%, -30%)',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label text-white/50! mb-3">Pronto para começar?</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
              Vamos transformar a sua ideia em realidade
            </h2>
            <p
              className="font-body text-sm max-w-md mx-auto mb-8 leading-relaxed"
              style={{ color: 'var(--color-muted)' }}
            >
              Entre em contacto connosco e dê o primeiro passo para o crescimento digital do seu negócio.
            </p>

            {/* Email subscription form */}
            {
              // <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto mb-6">
              //   <input
              //     type="email"
              //     value={email}
              //     onChange={(e) => setEmail(e.target.value)}
              //     placeholder="O seu email..."
              //     className="flex-1 px-6 py-3 rounded-full font-body text-sm text-dark outline-none transition-all duration-200"
              //     style={{
              //       backgroundColor: 'rgba(255,255,255,0.95)',
              //       color: 'var(--color-charcoal)',
              //     }}
              //     required
              //   />
              //   <motion.button
              //     type="submit"
              //     whileHover={{ scale: 1.05 }}
              //     whileTap={{ scale: 0.97 }}
              //     className="px-8 py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 whitespace-nowrap"
              //     style={{
              //       backgroundColor: 'var(--color-primary)',
              //       color: 'var(--color-dark)',
              //     }}
              //   >
              //     {emailSubmitted ? 'Enviado!' : 'Subscrever'}
              //   </motion.button>
              // </form>
            }

            {/* Direct contact button */}
            <motion.a
              href="mailto:samuel.santos@mpstechnologies.eu"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34,211,238,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-10 py-3.5 font-heading font-semibold text-sm text-dark rounded-full transition-all duration-300"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Contacte-nos
              <ArrowUpRight size={16} />
            </motion.a>
          </AnimatedSection>
        </div>
      </div>

      {/* Main footer */}
      <div
        className="py-12"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            {/* Logo & tagline */}
            <div className="text-center md:text-left">
              <a href="#hero" className="inline-flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity h-10 w-auto">
                { /*<MPSLogo/>*/}
              </a>
              <p
                className="font-body text-xs max-w-xs leading-relaxed"
                style={{ color: 'var(--color-muted)' }}
              >
                Transformamos ideias em soluções digitais eficazes para pequenas e médias empresas.
              </p>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: Mail,
                  href: 'mailto:samuel.santos@mpstechnologies.eu',
                  label: 'Email',
                },
                {
                  icon: MessageCircle,
                  href: whatsappLink,
                  label: 'WhatsApp',
                },
                {
                  icon: GitBranch,
                  href: 'https://github.com',
                  label: 'GitHub',
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--color-muted)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      'rgba(34,211,238,0.15)';
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--color-primary)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      'rgba(34,211,238,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--color-muted)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      'rgba(255,255,255,0.1)';
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <p
              className="font-body text-xs"
              style={{ color: 'var(--color-muted)' }}
            >
              © {year} MPS Technologies. Todos os direitos reservados.
            </p>
            <p className="font-body text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>
              Lisboa & Loures, Portugal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
