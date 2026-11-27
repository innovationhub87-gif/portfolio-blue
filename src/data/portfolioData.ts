/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Peddi Reddy Konda', // shown in navbar, footer, hero, about
  pageTitle: 'Peddi Reddy Konda – Full-Stack Web Developer & AI/ML Engineer', // browser tab title
  role: 'Full-Stack Web Developer & AI/ML Engineer', // footer subtitle
  email: 'peddireddykonda17@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '918297080694',
  whatsappMessage: 'Hi, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'FULL-STACK DEVELOPMENT • AI & MACHINE LEARNING',
  headline: 'PEDDI REDDY KONDA', // big text, use CAPS
  roles: ['FULL-STACK WEB DEVELOPER', 'AI/ML ENGINEER'] as [string, string],
  tagline:
    'I build scalable full-stack web applications and intelligent RAG-powered AI systems that solve real-world problems.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-bg.jpg', // 1920x1080, subject on the RIGHT side
  imageAlt: 'Portrait of Peddi Venkata Siva Nagi Reddy Konda',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: "Initializing Peddi Reddy Konda's workspace — engineering AI & Full-Stack solutions...",
  accentWords: ['AI', 'Full-Stack'], // words highlighted in blue
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Full-Stack · AI/ML · Cybersecurity AI',
  portrait: '/media/profile.webp', // 4:5 portrait photo
  portraitAlt: 'Portrait of Peddi Venkata Siva Nagi Reddy Konda',
  portraitCaption: 'Full-Stack Web Developer & AI/ML Engineer', // small blue text under the name on the photo
  paragraphs: [
    'I am a 2nd-year B.Tech CSE (AI & ML) student at Pydah College of Engineering in Kakinada, building scalable full-stack web applications and intelligent AI systems.',
    'Certified in MERN stack development and Cyber Smart AI, I specialize in bridging modern web architectures with Retrieval-Augmented Generation (RAG) and applied machine learning. My focus is engineering secure, high-impact software products that solve real-world operational problems.',
  ],
  technologies: [
    'Python',
    'Java',
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Express',
    'FastAPI',
    'MongoDB',
    'PostgreSQL',
    'Pinecone',
    'HTML5',
    'Tailwind CSS',
    'Docker',
    'AWS',
    'Vercel',
    'Render',
    'Git',
    'GitHub',
    'Qiskit',
    'BigQuery',
  ],
  focus: [
    'Full-Stack Web Development (MERN)',
    'Artificial Intelligence & Machine Learning (RAG & LLM Workflows)',
    'Cybersecurity AI & Secure Backend Systems',
  ],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/peddireddykonda17-pixel' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/peddi-reddy-konda-242a0440b' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'Full-Stack Web Development (MERN)', category: 'MongoDB · Express · React · Node.js', level: 'Advanced' },
  { name: 'React & Tailwind CSS', category: 'React · Tailwind CSS · HTML5', level: 'Advanced' },
  { name: 'Node.js, Express & FastAPI Backends', category: 'Node.js · Express · FastAPI', level: 'Proficient' },
  { name: 'Python, RAG Pipelines & AI/ML Integration', category: 'Python · RAG · Pinecone', level: 'Proficient' },
  { name: 'Prompt Engineering & Multi-Agent Workflows', category: 'LLM Workflows · Multi-Agent', level: 'Advanced' },
  { name: 'Cloud Deployment & DevOps', category: 'Docker · AWS · Vercel', level: 'Proficient' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = ['React', 'JavaScript', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'];

/* ───────────── 7. PROJECTS ─────────────
 * Project cards are text-only (no screenshots): each card shows the number, category, title and subtitle.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'homelyhub',
    kind: 'software',
    title: 'HomelyHub',
    subtitle: 'Full-Stack Property Rental & Booking Platform',
    category: 'Full-Stack Web',
    description:
      'Enables users to browse, list, and book properties with secure user authentication, dynamic search filtering, and real-time reservation management.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://homelyhub.vercel.app',
    repoUrl: 'https://github.com/peddireddykonda17-pixel',
  },
  {
    id: 'nexus-colab',
    kind: 'software',
    title: 'Nexus Colab',
    subtitle: 'Collaborative Student & Developer Workspace',
    category: 'Collaboration Platform',
    description:
      'A multi-platform web and mobile collaboration hub designed for project coordination, resource sharing, and streamlined team communication.',
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'REST APIs'],
    liveUrl: 'https://nexus-colab.vercel.app',
    repoUrl: 'https://github.com/peddireddykonda17-pixel',
  },
  {
    id: 'sih-rag-platform',
    kind: 'software',
    title: 'Smart India Hackathon RAG Learning Platform',
    subtitle: 'Personalized Retrieval-Augmented Generation Tutor',
    category: 'AI / RAG',
    description:
      'Ingests educational content using semantic chunking and vector search to generate context-grounded answers and adaptive quizzes.',
    tags: ['Python', 'FastAPI', 'Pinecone', 'MongoDB', 'React'],
    liveUrl: 'https://sih-rag-platform.vercel.app',
    repoUrl: 'https://github.com/peddireddykonda17-pixel',
  },
  {
    id: 'otp-student-portal',
    kind: 'software',
    title: 'OTP Verification & Student Portal Backend',
    subtitle: 'Dual-Channel Email & SMS Authentication Microservice',
    category: 'Backend & Security',
    description:
      'Provides secure identity verification, role-based access control, and academic portal endpoints with automated email and SMS OTP delivery.',
    tags: ['Node.js', 'Express', 'JavaScript', 'REST APIs', 'Docker'],
    liveUrl: 'https://student-portal-api.onrender.com',
    repoUrl: 'https://github.com/peddireddykonda17-pixel',
  },
];

/* ───────────── 8. SERVICES & PRICING ───────────── */
export const SERVICES_PRICING = [
  { id: 'service-1', title: 'Custom Full-Stack Web Application (MERN)', priceLabel: 'Price', price: '₹15,000 · $180', featured: true },
  { id: 'service-2', title: 'Responsive Portfolio or Business Landing Page', priceLabel: 'Price', price: '₹5,000 · $60', featured: false },
  { id: 'service-3', title: 'Custom AI Chatbot / RAG Knowledge Assistant', priceLabel: 'Price', price: '₹12,000 · $145', featured: false },
  { id: 'service-4', title: 'REST API & Secure OTP Authentication Backend', priceLabel: 'Price', price: '₹8,000 · $95', featured: false },
  { id: 'service-5', title: 'WhatsApp Business Automation & Workflow Integration', priceLabel: 'Price', price: '₹7,500 · $90', featured: false },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 6, suffix: '+', label: 'Projects' },
  { id: 'stat-2', value: 18, suffix: '+', label: 'Technologies' },
  { id: 'stat-3', value: 5, suffix: '', label: 'Services' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
