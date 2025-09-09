import React, { useState, useEffect } from "react";

export const personal = {
  name: "Tampara Venkata Santosh Anish Dora",
  title: "Full Stack Software Engineer | Building AI Applications",
  location: "Dublin, CA, 94568",
  phone: "+1-925-216-3699",
  email: "anishdora2755@gmail.com",
  linkedin: "https://www.linkedin.com/in/anish-dora",
  github: "https://github.com/AnishDora",
};

export const skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/38B2AC" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", icon: "/logos/aws.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/00A67E" },
  { name: "LangGraph", icon: "data:image/svg+xml;utf8,<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%237C3AED'/><stop offset='100%' stop-color='%236EE7B7'/></linearGradient></defs><rect width='64' height='64' rx='12' fill='url(%23g)'/><path d='M14 42c10-12 26-12 36 0' stroke='white' stroke-width='4' fill='none' stroke-linecap='round'/><circle cx='14' cy='42' r='3' fill='white'/><circle cx='32' cy='26' r='3' fill='white'/><circle cx='50' cy='42' r='3' fill='white'/></svg>" },
];

export const experiences = [
  {
    company: "Sunwave Health",
    role: "Software Engineer",
    period: "Jun 2023 – Present",
    location: "Remote, United States",
    bullets: [
      "Designed and integrated Zoom video conferencing with the internal calendar system to support single and recurring appointments, session management, and live editing. Reduced scheduling-related support tickets by 30% and improved reliability.",
      "Orchestrated a referral and account merge module using Dart and Java to consolidate fragmented patient records across EMR and CRM systems, increasing data integrity by 40% and reducing manual reconciliation time by 50%.",
      "Automated provider payment reporting using Java, improved financial communication timeliness to 100% for 70+ providers and reduced manual workload by 5+ hours/week.",
      "Launched the Outpatient Methadone Management module to support patient intake, dosage tracking, medication scheduling, and compliance workflows, expanded platform capabilities for treatment programs, and drove 15% growth in outpatient user adoption.",
      "Collaborated with cross-functional teams (PMs, QA, clinicians) to define API contracts, write integration tests, and validate end-to-end workflows using Postman, contributing to a 20% reduction in release-cycle bugs.",
    ],
  },
  {
    company: "Deloitte India (USI)",
    role: "Software Engineer Intern",
    period: "Jan 2022 – Jun 2022",
    location: "Remote, India",
    bullets: [
      "Led migration of core modules from legacy .NET to Angular, TypeScript, and SaaS, modernizing Deloitte's internal iRpm platform used by 5,000+ employees.",
      "Engineered reusable UI components using Angular to boost responsiveness and accessibility in high-traffic modules, leading to a 20% reduction in UI-related issues.",
      "Spearheaded the integration of automated testing within UI workflows, resulting in a 60% reduction in testing time and improving the accessibility score from 60 to 85 WCAG standards.",
    ],
  },
];

export const education = [
  {
    school: "Santa Clara University",
    degree: "Master of Science in Computer Science and Engineering",
    period: "Sep 2022 – Jun 2024",
    location: "Santa Clara, CA, United States",
    gpa: "3.58/4.0",
    details: [
      "Coursework: Distributed Systems, Database Management Systems, Web Technologies, Algorithms, Machine Learning",
    ],
  },
  {
    school: "GITAM University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Jun 2018 – Apr 2022",
    location: "Visakhapatnam, India",
    gpa: "8.88/10",
    details: [
      "Coursework: Object-Oriented Programming, Operating Systems, Data Structures, Web Development",
    ],
  },
];

export const projects = [
  {
    name: "Chat with PDFs - Full-Stack RAG Application",
    period: "Aug 2025 – Sept 2025",
    bullets: [
      "Developed a multitenant PDF Question and Answer application using Next.js, TypeScript, Supabase (Postgres, pgvector, Storage), Clerk, and OpenAI. Supported 75+ PDF uploads, concurrent chat sessions with a streaming UI, an embedded PDF viewer, and secure authentication with login, logout, and session management.",
      "Implemented an ingestion workflow with private storage upload, text extraction using pdf-parse/pdf.js, and text chunking (~1200 chars with 200 overlap). Generated embeddings with text-embedding-3-small and optimized retrieval via pgvector and SQL RPC, achieving 140ms median retrieval latency.",
      "Leveraged LangChain for retrieval orchestration, prompt templating, and conversation memory with rolling summaries. Indexed 75 PDFs and 2,100 pages with end-to-end answer time of 1.9s and processing cost of $0.05/100 queries.",
    ],
  },
  {
    name: "AI Research Assistant - Chrome Extension",
    period: "Aug 2025",
    bullets: [
      "Developed a side-panel Chrome extension for instant text operations, including summarization, paraphrasing, simplification, and bulleting using Spring AI. Reduced research time by 60% with sub-3 second response times.",
      "Implemented domain-based note organization that auto-tagged and filed notes by source website. Improved retrieval efficiency and kept research notes centralized.",
      "Created a non-intrusive user interface with selection-based triggers that worked across websites without disrupting workflow using React and TailwindCSS. Ensured consistent performance across 50+ tested web pages.",
      "Integrated an AI-powered Gmail extension into the native reply modal using JavaScript. Analyzed entire mail threads to generate context-aware replies in multiple tones and cut email drafting time by 70%.",
    ],
  },
];

export const publications = [
  {
    title: "A Graph Invariant Based TGO Model for RailTel Optical Networks",
    venue:
      "Sixth International Conference on Intelligent Computing and Applications (ICICA 2020), Springer, Singapore",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-1335-7_7",
  },
];

// ---------- Enhanced Icons ----------
const Icon = {
  Mail: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2"/>
      <path d="m22 7-10 5L2 7" strokeWidth="2"/>
    </svg>
  ),
  Phone: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.45 3a2 2 0 0 1-.57 1.86L9.91 11a16 16 0 0 0 3.18 3.18l1.42-1.05a2 2 0 0 1 1.86-.57l3 .45A2 2 0 0 1 20 16.92z" strokeWidth="2"/>
    </svg>
  ),
  MapPin: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M12 22s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11z" strokeWidth="2"/>
      <circle cx="12" cy="11" r="3" strokeWidth="2"/>
    </svg>
  ),
  Github: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.76.09-.74.09-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.25-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.78.84 1.25 1.91 1.25 3.22 0 4.6-2.81 5.61-5.49 5.91.43.38.82 1.12.82 2.26v3.35c0 .32.22.69.83.57A12 12 0 0 0 12 .5z"/>
    </svg>
  ),
  Linkedin: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.33 6 7.66V24h-5v-7.6c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.9 1.95-2.9 3.98V24H8z"/>
    </svg>
  ),
  ArrowDown: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  External: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M14 3h7v7" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 14 21 3" strokeWidth="2" strokeLinecap="round"/>
      <path d="M21 14v7H3V3h7" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Menu: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2"/>
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2"/>
      <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2"/>
    </svg>
  ),
  X: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"/>
      <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"/>
    </svg>
  ),
  Sparkles: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M12 3l1.545 4.635L18.18 9.18l-4.635 1.545L12 15.36l-1.545-4.635L5.82 9.18l4.635-1.545L12 3z" strokeWidth="1.5"/>
      <path d="M19.5 4.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5L17.5 6l1.5-.5.5-1.5z" strokeWidth="1.5"/>
      <path d="M5 16l.5 1.5L7 18l-1.5.5L5 20l-.5-1.5L3 18l1.5-.5L5 16z" strokeWidth="1.5"/>
    </svg>
  ),
};

// ---------- Enhanced UI Components ----------
const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
const glass = "bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] shadow-2xl";
const glassHover = "hover:bg-white/[0.05] hover:border-white/[0.15]";

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          <div className="w-1 h-1 bg-gradient-to-r from-teal-400/30 to-indigo-400/30 rounded-full blur-[0.5px]" />
        </div>
      ))}
    </div>
  );
};

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-28">
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        {subtitle && <p className="text-base text-gray-400 mt-2">{subtitle}</p>}
      </div>
      <div className="h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
    {children}
  </section>
);

const Card = ({ children, className = "", hover = true }) => (
  <div className={`${glass} ${hover ? glassHover : ''} ${className} p-6 sm:p-8 rounded-3xl transition-all duration-300 group`}>
    {children}
  </div>
);

const SkillBadge = ({ name, icon }) => (
  <div className={`${glass} group flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${glassHover} hover:scale-105 hover:shadow-2xl`}>
    <div className="h-10 w-10 shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <img src={icon} alt={name} className="h-7 w-7 object-contain" />
    </div>
    <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{name}</span>
  </div>
);

const TimelineItem = ({ left, right, isLast = false }) => (
  <div className="relative">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-12">
      <div className="lg:text-left">{left}</div>
      <div className="hidden lg:block relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-teal-300/30 to-indigo-300/30" />
        <div className="relative z-10 mx-auto h-4 w-4 rounded-full bg-gradient-to-br from-teal-300 to-indigo-300 shadow-lg shadow-teal-500/25" />
        {!isLast && <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-0 w-px bg-gradient-to-b from-teal-300/30 to-transparent" />}
      </div>
      <div>{right}</div>
    </div>
  </div>
);

// Mobile menu component
const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-64 bg-slate-950/95 backdrop-blur-xl border-l border-white/10 p-6">
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
            <Icon.X className="h-6 w-6" />
          </button>
        </div>
        <nav className="space-y-4">
          {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Publications', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

// ---------- Main App Component ----------
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">
      {/* Enhanced Sticky Nav */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/80">
        <nav className={`${container} flex items-center justify-between py-4`}>
          <a href="#hero" className="font-bold tracking-tight">
            <span className="text-lg sm:text-xl bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent">
              Anish Dora
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 text-sm">
            {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Publications', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-xl hover:text-white hover:bg-white/10 transition-all duration-200 text-gray-300/90"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
          >
            <Icon.Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />

      {/* Enhanced Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <FloatingParticles />
        
        {/* Enhanced Background Gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-teal-500/[0.15] blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 right-1/2 translate-x-1/2 h-[35rem] w-[35rem] rounded-full bg-indigo-500/[0.12] blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 h-[25rem] w-[25rem] rounded-full bg-cyan-500/[0.08] blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className={`${container} relative flex min-h-[95vh] flex-col items-center justify-center text-center py-32`}>
          <div 
            className="transform transition-transform duration-1000 ease-out"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Icon.Sparkles className="h-6 w-6 text-teal-300 animate-pulse" />
              <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">Welcome to my portfolio</span>
              <Icon.Sparkles className="h-6 w-6 text-indigo-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent animate-pulse">
                Anish Dora
              </span>
            </h1>
            
            <div className="mt-6 max-w-3xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300 leading-relaxed">
                {personal.title}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" 
                 className={`${glass} ${glassHover} inline-flex items-center gap-3 rounded-2xl px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                <Icon.Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" 
                 className={`${glass} ${glassHover} inline-flex items-center gap-3 rounded-2xl px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                <Icon.Github className="h-5 w-5" /> GitHub
              </a>
              <a href={`mailto:${personal.email}`} 
                 className={`${glass} ${glassHover} inline-flex items-center gap-3 rounded-2xl px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                <Icon.Mail className="h-5 w-5" /> Email
              </a>
            </div>

            <a href="#about" className="mt-16 inline-flex items-center gap-3 text-teal-300/90 hover:text-teal-200 transition-colors group">
              <span className="text-lg">Explore my work</span>
              <Icon.ArrowDown className="h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <main className={`${container} space-y-32 py-24`}>
        {/* Enhanced About Section */}
        <Section id="about" title="About Me">
          <Card className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a passionate Full Stack Software Engineer specializing in building AI-powered applications that solve real-world problems. 
                With expertise spanning from healthcare technology to enterprise solutions, I enjoy creating scalable, efficient systems that make a difference.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Currently working at Sunwave Health, I've helped reduce manual workloads, improve system reliability, and drive user adoption 
                through innovative features and seamless integrations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-base">
                <Icon.MapPin className="h-5 w-5 text-teal-300 shrink-0" />
                <span>{personal.location}</span>
              </div>
              <a href={`tel:${personal.phone}`} className="flex items-center gap-4 text-base hover:text-teal-300 transition-colors group">
                <Icon.Phone className="h-5 w-5 text-teal-300 shrink-0 group-hover:scale-110 transition-transform" />
                <span>{personal.phone}</span>
              </a>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-4 text-base hover:text-teal-300 transition-colors group">
                <Icon.Mail className="h-5 w-5 text-teal-300 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">{personal.email}</span>
              </a>
            </div>
          </Card>
        </Section>

        {/* Enhanced Skills Section */}
        <Section id="skills" title="Technical Skills" subtitle="Technologies I work with daily">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={skill.name} {...skill} />
            ))}
          </div>
        </Section>

        {/* Enhanced Experience Section */}
        <Section id="experience" title="Professional Journey">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.company}
                isLast={index === experiences.length - 1}
                left={
                  <Card>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <Icon.MapPin className="h-4 w-4" />
                        {exp.location}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-medium border border-teal-500/20">
                        Current
                      </div>
                    </div>
                  </Card>
                }
                right={
                  <Card>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                        <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                      </div>
                      <ul className="space-y-3 text-sm text-gray-300">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-teal-300 mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                }
              />
            ))}
          </div>
        </Section>

        {/* Enhanced Education Section */}
        <Section id="education" title="Education">
          <div className="grid gap-8 lg:grid-cols-2">
            {education.map((edu, index) => (
              <Card key={edu.school} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/5 to-indigo-500/5 rounded-full -mr-16 -mt-16" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                      <p className="text-sm text-gray-400 flex items-center gap-2 mt-1">
                        <Icon.MapPin className="h-4 w-4" />
                        {edu.location}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap bg-white/5 px-2 py-1 rounded-lg">
                      {edu.period}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-base font-medium text-gray-200">{edu.degree}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-300">GPA: {edu.gpa}</span>
                      <div className="h-1 w-1 bg-gray-500 rounded-full" />
                      <span className="text-sm text-teal-300 font-medium">
                        {index === 0 ? "Master's" : "Bachelor's"}
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-indigo-300 mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Enhanced Projects Section */}
        <Section id="projects" title="Featured Projects" subtitle="Recent work and personal projects">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={project.name} className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 bg-white/5 px-2 py-1 rounded-lg inline-block">
                        {project.period}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-4 text-sm text-gray-300">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-300 mt-2 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Enhanced Publications Section */}
        <Section id="publications" title="Publications" subtitle="Research contributions">
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <Card key={pub.title} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full -ml-12 -mt-12" />
                <div className="relative">
                  <h3 className="text-lg font-bold text-white mb-3">{pub.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{pub.venue}</p>
                  {pub.link && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors group"
                    >
                      <span>View Publication</span>
                      <Icon.External className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Enhanced Contact Section */}
        <Section id="contact" title="Let's Connect" subtitle="Ready to work together">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-indigo-500/5" />
            <div className="relative grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{personal.name}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Always open to discussing new opportunities, collaborations, or just having a chat about technology!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-base">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-500/10 flex items-center justify-center">
                      <Icon.MapPin className="h-6 w-6 text-teal-300" />
                    </div>
                    <span>{personal.location}</span>
                  </div>
                  <a href={`tel:${personal.phone}`} className="flex items-center gap-4 text-base hover:text-teal-300 transition-colors group">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon.Phone className="h-6 w-6 text-indigo-300" />
                    </div>
                    <span>{personal.phone}</span>
                  </a>
                  <a href={`mailto:${personal.email}`} className="flex items-center gap-4 text-base hover:text-teal-300 transition-colors group">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon.Mail className="h-6 w-6 text-cyan-300" />
                    </div>
                    <span className="break-all">{personal.email}</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a href={personal.linkedin} target="_blank" rel="noreferrer" 
                   className={`${glass} ${glassHover} inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg`}>
                  <Icon.Linkedin className="h-6 w-6" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a href={personal.github} target="_blank" rel="noreferrer" 
                   className={`${glass} ${glassHover} inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg`}>
                  <Icon.Github className="h-6 w-6" />
                  <span>View GitHub</span>
                </a>
                <a href={`mailto:${personal.email}`} 
                   className={`${glass} ${glassHover} inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg bg-gradient-to-r from-teal-500/10 to-indigo-500/10 border-teal-500/20`}>
                  <Icon.Mail className="h-6 w-6" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </Card>
        </Section>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative mt-32">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
        <div className={`${container} relative py-12 border-t border-white/10`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-400 flex items-center justify-center">
                <span className="text-sm font-bold text-white">AD</span>
              </div>
              <span className="text-sm text-gray-400">
                © {new Date().getFullYear()} {personal.name}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Icon.Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Icon.Github className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
              <a href={`mailto:${personal.email}`} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Icon.Mail className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
