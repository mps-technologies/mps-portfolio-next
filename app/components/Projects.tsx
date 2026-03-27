import { motion } from 'framer-motion';
import { projects, steps } from '../data/mock';
import { ProjectCard } from './ProjectCard';
import { AnimatedSection } from './AnimatedSection';

export function Projects() {
  return (
    <section id="how-we-work" className="py-20 px-6"
      style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-10">
        {/*<p className="section-label">O que fazemos</p>*/}
          <h2 className="section-title section-title-dark">
            O nosso processo</h2>
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

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-lg text-gray-600 text-center">
            Uma abordagem direta e colaborativa que o mantém informado e no controlo. Sem surpresas, sem atrasos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-linear-to-r from-blue-200 to-transparent" />
              )}
              
              <div className="relative">
                <div className="size-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <step.icon className="size-6 text-white" />
                </div>
                
                <div className="text-xs font-semibold mb-2 uppercase tracking-wide" 
                style={{ color: 'var(--color-secondary)' }}>
                  {step.duration}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-lg">
          <div className="max-w-3xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Trabalhará diretamente com o nosso gestor de projeto
            </h3>
            <p className="text-gray-700 leading-relaxed">
              O seu gestor de projeto dedicado trata do planeamento, comunicação e coordenação de entregas. 
              Tem acesso direto ao projeto, reuniões semanais e acompanhamento transparente do progresso. 
              Sem intermediários, sem gestores de conta — apenas comunicação clara e eficiente com as pessoas que estão a construir o seu produto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Project() {
  return (
    <section id="projects" className="relative py-28 bg-card overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="section-label">O nosso trabalho</p>
          <h2 className="section-title section-title-dark">Nossos Projetos</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-0.5 w-20 mx-auto mt-4"
            style={{ backgroundColor: 'var(--color-primary)', transformOrigin: 'left' }}
          />
          <p className="font-body text-smoke mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            Projetos que desenvolvemos para demonstrar as nossas capacidades
            técnicas e criativas.
          </p>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
