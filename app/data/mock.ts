export interface ServiceBk {
  id: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Service {
  title: string;
  icon: string | React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  description: string;
  deliverables: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  tags: string[];
}

export interface ClientProject {
  id: string;
  clientName: string;
  projectTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  year: string;
  result: string;
}

export interface Testimonial {
  id: string;
  feedback: string;
  quote: string;
  author: string;
  logo?: string | StaticImageData;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: StaticImageData | string;
  education: string;
  strength: string;
}

// import mobileImg from '../assets/mobile.png';

// export const servicesBk: Service[] = [
//   {
//     id: 'sites',
//     title: 'Sites',
//     icon: 'Globe',
//     description:
//       'Desenvolvimento de sites full-stack customizados com base nas necessidades do seu negócio',
//     image: 'https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg',
//     imageAlt: 'Web development workspace by Jakub Zerdzicki on Pexels',
//   },
//   {
//     id: 'apps',
//     title: 'Aplicações',
//     icon: 'Smartphone',
//     description: 'Aplicações móveis que vão tornar a sua ideia numa realidade',
//     image: mobileImg,
//     imageAlt: 'Mobile app development by Mohamed_hassan on Pixabay',
//   },
//   {
//     id: 'design',
//     title: 'Design',
//     icon: 'Palette',
//     description:
//       'Tornamos o seu produto não apenas funcional mas também esteticamente apelativo',
//     image: 'https://images.pexels.com/photos/7640741/pexels-photo-7640741.jpeg',
//     imageAlt: 'Creative design team by Yan Krukau on Pexels',
//   },
// ];

export const projects: Project[] = [
  {
    id: 'barbershop',
    title: 'Barbearia',
    description:
      'Site para barbearia não funcional, apenas para demonstração de layout e design',
    image: 'https://www.mpstechnologies.eu/BarberShop.png',
    imageAlt: 'Barbearia project screenshot',
    url: 'https://barbershop-mps.netlify.app',
    tags: ['React', 'CSS', 'Design'],
  },
  {
    id: 'moviefy',
    title: 'Moviefy',
    description:
      'Site de informações sobre filmes onde o foco é o uso e manipulação de APIs',
    image: 'https://www.mpstechnologies.eu/moviefy.png',
    imageAlt: 'Moviefy project screenshot',
    url: 'https://wearemoviefy.netlify.app/',
    tags: ['React', 'API', 'JavaScript'],
  },
  {
    id: 'frota',
    title: 'Frota',
    description:
      'Site focado em administração interna de uma frota de carros com gestão e controlo total',
    image: 'https://www.mpstechnologies.eu/frota.png',
    imageAlt: 'Frota project screenshot',
    url: 'https://gestor-frota.netlify.app/',
    tags: ['React', 'Dashboard', 'Admin'],
  },
];

import sayfeLogo from '@/public/sayfe_logo.webp'

export const testimonials: Testimonial[] = [
  {
    id: 'client-1',
    feedback:
      'O resultado final superou as nossas expectativas, tanto pela qualidade da aplicação desenvolvida como pelo rigor no cumprimento dos requisitos funcionais. O trabalho foi verdadeiramente excelente, refletindo um elevado nível de profissionalismo e atenção ao detalhe.',
    quote: 'Decidi incluir o bónus porque o vosso trabalho foi espectacular.',
    author: 'Sayfe',
    logo: sayfeLogo,
  },
];

import { CheckCircle, ClipboardList, Code, Headphones, Layers, Rocket, RotateCw, type LucideProps } from 'lucide-react';
import React from 'react';
import { StaticImageData } from 'next/image';
import misaelAvatar from '@/public/misael.webp';
import pedroAvatar from '@/public/pedro.webp';
import samuelAvatar from '@/public/samuel.webp';

export const team: TeamMember[] = [
  {
    id: 'misael',
    name: 'Misael Armando',
    role: 'Desenvolvedor full-stack',
    location: 'Lisboa, Portugal',
    avatar: misaelAvatar,
    education: 'Técnico de Programação e Gestão de Sistemas Informáticos',
    strength: 'Especialista em teoria e tecnologia, sugerindo sempre as melhores soluções técnicas para cada desafio.',
  },
  {
    id: 'pedro',
    name: 'Pedro Bonfim',
    role: 'Product Manager',
    location: 'Loures, Portugal',
    avatar: pedroAvatar,
    education: 'Técnico de Programação e Gestão de Sistemas Informáticos',
    strength: 'Garante que a equipa trabalhe sem distrações, gerindo projetos com foco em eficiência e entrega.',
  },
  {
    id: 'samuel',
    name: 'Samuel Santos',
    role: 'Desenvolvedor full-stack',
    location: 'Loures, Portugal',
    avatar: samuelAvatar,
    education: 'Técnico de Programação e Gestão de Sistemas Informáticos',
    strength: 'Focado na execução e resolução de problemas; quando há uma tarefa, encontra sempre o caminho para a concluir.',
  },
];

export const steps = [
  {
    icon: ClipboardList,
    title: "Descoberta & Planeamento",
    description: "Começamos com uma reunião de descoberta para compreender os seus objetivos, utilizadores e requisitos de negócio. O nosso gestor de projeto trabalha consigo para definir o âmbito, prioridades e um roteiro de entrega claro.",
    duration: "Semana 1"
  },
  {
    icon: Layers,
    title: "Design & Desenvolvimento",
    description: "Construímos em sprints de 2 semanas com reuniões regulares. Recebe software funcional cedo e frequentemente, com a capacidade de fornecer feedback e ajustar prioridades à medida que avançamos.",
    duration: "Semanas 2-6+"
  },
  {
    icon: RotateCw,
    title: "Revisão & Iteração",
    description: "No final de cada sprint, demonstramos o progresso, recolhemos feedback e planeamos a próxima iteração. Mantém-se informado com comunicação transparente durante todo o processo.",
    duration: "Contínuo"
  },
  {
    icon: CheckCircle,
    title: "Lançamento & Suporte",
    description: "Fazemos o deployment do seu produto, entregamos documentação e fornecemos suporte pós-lançamento. Muitos clientes continuam connosco num modelo de retainer para melhorias contínuas.",
    duration: "Semana 8+"
  }
];

export const services = [
  {
    icon: Rocket,
    title: "Desenvolvimento de MVP",
    description: "Valide a sua ideia rapidamente com um MVP pronto para o mercado. Focamo-nos nas funcionalidades essenciais que importam, ajudando-o a testar hipóteses e obter feedback real de utilizadores rapidamente.",
    deliverables: [
      "Prazo de entrega de 4-8 semanas",
      "Apenas funcionalidades essenciais (sem excessos)",
      "Stack tecnológica moderna (React, Node, PostgreSQL)",
      "Deployment e documentação básica"
    ],
  },
  {
    icon: Code,
    title: "Aplicações Web & Mobile",
    description: "Aplicações web e mobile personalizadas construídas para escalar. Seja uma plataforma SaaS, ferramenta interna ou aplicação para clientes, entregamos soluções prontas para produção.",
    deliverables: [
      "Web responsivo ou mobile nativo",
      "Desenvolvimento de API e integrações",
      "Autenticação de utilizadores e segurança",
      "Painéis de administração e dashboards"
    ],
  },
  {
    icon: Headphones,
    title: "Suporte Contínuo & Retainers",
    description: "Garanta a evolução contínua do seu produto com suporte de desenvolvimento dedicado. Perfeito para implementar melhorias após o lançamento, adicionar novas funcionalidades e assegurar a manutenção da aplicação.",
    deliverables: [
      "Horas mensais dedicadas",
      "Tempos de resposta prioritários",
      "Desenvolvimento de funcionalidades e correção de bugs",
      "Monitorização de performance"
    ],
  }
];
