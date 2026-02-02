export const personal = {
  name: 'Tampara Venkata Santosh Anish Dora',
  title: 'Full Stack Software Engineer | Building AI Applications',
  location: 'Dublin, CA, 94568',
  phone: '+1-925-216-3699',
  email: 'anishdora05@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anish-dora',
  github: 'https://github.com/AnishDora'
};

export const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },

  { name: 'Tailwind', icon: '/logos/tailwind.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'AWS', icon: '/logos/aws.svg' },
  { name: 'Supabase', icon: '/logos/supabase.svg' },
  { name: 'LangChain', icon: '/logos/langchain.svg' },
  { name: 'LangGraph', icon: '/logos/langgraph.svg' }

];

export const experiences = [
  {
    company: 'Sunwave Health',
    role: 'Software Engineer',
    period: 'Jun 2023 – Present',
    location: 'Remote, United States',
    bullets: [
      'Designed and integrated Zoom video conferencing with the internal calendar system to support single and recurring appointments, session management, and live editing. Reduced scheduling-related support tickets by 30% and improved reliability.',
      'Orchestrated a referral and account merge module using Dart and Java to consolidate fragmented patient records across EMR and CRM systems, increasing data integrity by 40% and reducing manual reconciliation time by 50%.',
      'Automated provider payment reporting using Java, improved financial communication timeliness to 100% for 70+ providers and reduced manual workload by 5+ hours/week.',
      'Launched the Outpatient Methadone Management module to support patient intake, dosage tracking, medication scheduling, and compliance workflows, expanded platform capabilities for treatment programs, and drove 15% growth in outpatient user adoption.',
      'Collaborated with cross-functional teams (PMs, QA, clinicians) to define API contracts, write integration tests, and validate end-to-end workflows using Postman, contributing to a 20% reduction in release-cycle bugs.'
    ]
  },
  {
    company: 'Deloitte India (USI)',
    role: 'Software Engineer Intern',
    period: 'Jan 2022 – Jun 2022',
    location: 'Remote, India',
    bullets: [
      'Migrated enterprise iRPM modules from legacy .NET to React and TypeScript, modernizing SaaS platforms used by 5,000+ employees.',
      'Improved React application performance using code splitting and lazy loading, reducing bundle size by 35% and page load times by 45%.',
      'Built reusable, accessible React components following WCAG standards, reducing UI defects by 20%.',
      'Integrated Selenium-based testing into CI/CD pipelines, cutting regression testing time by 60% and improving accessibility scores from 60 to 85.',
      'Collaborated with cross-functional teams to deliver features through code reviews, sprint planning, and production deployments in an Agile environment.'
    ]
  }
];

export const education = [
  {
    school: 'Santa Clara University',
    degree: 'Master of Science in Computer Science and Engineering',
    period: 'Sep 2022 – Jun 2024',
    location: 'Santa Clara, CA, United States',
    gpa: '3.58/4.0',
    details: [
      'Coursework: Distributed Systems, Database Management Systems, Web Technologies, Algorithms, Machine Learning'
    ]
  },
  {
    school: 'GITAM University',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: 'Jun 2018 – Apr 2022',
    location: 'Visakhapatnam, India',
    gpa: '8.88/10',
    details: [
      'Coursework: Object-Oriented Programming, Operating Systems, Data Structures, Web Development'
    ]
  }
];

export const projects = [
  {
    name: 'AI Resume & Cover Letter Tailor',
    period: 'Nov 2025 – Dec 2025',
    bullets: [
      'Built a full-stack Next.js application that uses GenAI to generate job-specific resumes and cover letters.',
      'Designed structured LLM prompt workflows to extract skills and align content with job descriptions.',
      'Implemented authentication and user dashboards for managing generated documents and revision history.',
      'Designed relational data models and implemented persistence using PostgreSQL with Prisma ORM.',
      'Optimized application performance using server actions, SSR, and API routes.',
      'Implemented input validation and fallback handling to ensure reliable AI outputs and consistent user experience.',
      'Skills: Next.js · PostgreSQL · Large Language Models (LLM) · Generative AI'
    ]
  },
  {
    name: 'AI Notes Summarizer & Knowledge Manager',
    period: 'Sep 2025',
    bullets: [
      'Developed a full-stack MERN application that uses GenAI to summarize and organize user notes and documents.',
      'Integrated LLM-based summarization and key-point extraction for long-form text content.',
      'Built a React-based UI for creating, tagging, searching, and managing notes.',
      'Implemented JWT-based authentication and secure REST APIs using Express.js.',
      'Designed efficient MongoDB schemas and queries to support scalable content storage and retrieval.',
      'Added search and filtering capabilities across notes and AI-generated summaries to improve content discoverability.',
      'Skills: React.js · Express.js · Node.js · Generative AI · Large Language Models (LLM)'
    ]
  },
  {
    name: 'Chat with PDFs - Full-Stack RAG Application',
    period: 'Aug 2025 – Sept 2025',
    bullets: [
      'Developed a multitenant PDF Question and Answer application using Next.js, TypeScript, Supabase (Postgres, pgvector, Storage), Clerk, and OpenAI. Supported 75+ PDF uploads, concurrent chat sessions with a streaming UI, an embedded PDF viewer, and secure authentication with login, logout, and session management.',
      'Implemented an ingestion workflow with private storage upload, text extraction using pdf-parse/pdf.js, and text chunking (~1200 chars with 200 overlap). Generated embeddings with text-embedding-3-small and optimized retrieval via pgvector and SQL RPC, achieving 140ms median retrieval latency.',
      'Leveraged LangChain for retrieval orchestration, prompt templating, and conversation memory with rolling summaries. Indexed 75 PDFs and 2,100 pages with end-to-end answer time of 1.9s and processing cost of $0.05/100 queries.'
    ]
  },
  {
    name: 'AI Research Assistant - Chrome Extension',
    period: 'Aug 2025',
    bullets: [
      'Developed a side-panel Chrome extension for instant text operations, including summarization, paraphrasing, simplification, and bulleting using Spring AI. Reduced research time by 60% with sub-3 second response times.',
      'Implemented domain-based note organization that auto-tagged and filed notes by source website. Improved retrieval efficiency and kept research notes centralized.',
      'Created a non-intrusive user interface with selection-based triggers that worked across websites without disrupting workflow using React and TailwindCSS. Ensured consistent performance across 50+ tested web pages.',
      'Integrated an AI-powered Gmail extension into the native reply modal using JavaScript. Analyzed entire mail threads to generate context-aware replies in multiple tones and cut email drafting time by 70%.'
    ]
  }
];

export const publications = [
  {
    title: 'A Graph Invariant Based TGO Model for RailTel Optical Networks',
    venue: 'Sixth International Conference on Intelligent Computing and Applications (ICICA 2020), Springer, Singapore',
    link: 'https://link.springer.com/chapter/10.1007/978-981-16-1335-7_7'
  }
];
