/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION TEMPLATE
 * ==============================================================================
 * 
 * Customize this single file to personalize your entire portfolio website!
 * Simply update the fields below with your own details, projects, skills, and links.
 */

export const portfolioData = {
  // ----------------------------------------------------------------------------
  // Personal & Brand Information
  // ----------------------------------------------------------------------------
  personal: {
    name: "Alex Morgan",
    firstName: "Alex",
    lastName: "Morgan",
    title: "Full-Stack Software Engineer & UI/UX Craftsman",
    tagline: "Building high-performance web applications with delightful user experiences.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    location: "San Francisco, CA (Open to Remote)",
    timezone: "PST (UTC-8)",
    status: {
      available: true,
      text: "Available for new opportunities",
      badgeType: "success" // 'success' | 'busy' | 'exploring'
    },
    bio: [
      "I'm a passionate full-stack engineer with 5+ years of experience designing scalable backends and fluid, accessible user interfaces. I bridge the gap between engineering rigor and design polish.",
      "When I'm not writing code, you can find me contributing to open-source software, tinkering with creative dev tools, or capturing street photography."
    ],
    resumeUrl: "#", // Link to your PDF resume or Google Drive link
    email: "alex.morgan.dev@example.com",
    phone: "+1 (555) 234-5678"
  },

  // ----------------------------------------------------------------------------
  // Social Profiles
  // ----------------------------------------------------------------------------
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "Github",
      username: "@alexmorgan-dev"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
      username: "in/alexmorgan"
    },
    {
      name: "Twitter / X",
      url: "https://x.com",
      icon: "Twitter",
      username: "@alex_codes"
    },
    {
      name: "Email",
      url: "mailto:alex.morgan.dev@example.com",
      icon: "Mail",
      username: "alex.morgan.dev@example.com"
    }
  ],

  // ----------------------------------------------------------------------------
  // Key Stats / Highlights
  // ----------------------------------------------------------------------------
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "35+" },
    { label: "Open Source Stars", value: "1.2k" },
    { label: "Client Satisfaction", value: "99%" }
  ],

  // ----------------------------------------------------------------------------
  // Terminal / Interactive Card Bio
  // ----------------------------------------------------------------------------
  terminalData: {
    command: "cat profile.json",
    output: {
      currentRole: "Senior Frontend Engineer @ TechScale",
      coreStack: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "PostgreSQL"],
      interests: ["System Architecture", "Interaction Design", "DevTools", "AI Tooling"],
      hobbies: ["Specialty Coffee Brewing", "Bouldering", "Film Photography"],
      quote: "Make it work, make it right, make it fast."
    }
  },

  // ----------------------------------------------------------------------------
  // Skills by Category
  // ----------------------------------------------------------------------------
  skillsCategories: [
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Crafting fast, accessible, responsive interfaces",
      skills: [
        { name: "React / Next.js", level: "Expert", percentage: 95 },
        { name: "TypeScript / JavaScript", level: "Expert", percentage: 92 },
        { name: "Tailwind CSS", level: "Expert", percentage: 95 },
        { name: "HTML5 / Semantic Web", level: "Expert", percentage: 98 },
        { name: "State Management (Zustand/Redux)", level: "Advanced", percentage: 88 },
        { name: "Framer Motion / CSS Animations", level: "Advanced", percentage: 85 }
      ]
    },
    {
      id: "backend",
      name: "Backend & Systems",
      description: "Architecting resilient APIs and microservices",
      skills: [
        { name: "Node.js / Express", level: "Expert", percentage: 90 },
        { name: "Python / FastAPI", level: "Advanced", percentage: 82 },
        { name: "REST & GraphQL APIs", level: "Expert", percentage: 92 },
        { name: "PostgreSQL & Prisma", level: "Advanced", percentage: 86 },
        { name: "Redis Caching", level: "Proficient", percentage: 80 },
        { name: "Authentication & OAuth", level: "Advanced", percentage: 88 }
      ]
    },
    {
      id: "devops",
      name: "Cloud & DevOps",
      description: "Automating workflows and robust deployments",
      skills: [
        { name: "Docker & Containerization", level: "Advanced", percentage: 84 },
        { name: "AWS (S3, Lambda, ECS)", level: "Proficient", percentage: 78 },
        { name: "CI / CD (GitHub Actions)", level: "Advanced", percentage: 86 },
        { name: "Vercel / Cloudflare Workers", level: "Expert", percentage: 92 },
        { name: "Linux & Shell Scripting", level: "Advanced", percentage: 82 }
      ]
    },
    {
      id: "tools",
      name: "Design & Workflow",
      description: "Tools for team collaboration and precision design",
      skills: [
        { name: "Figma & Design Systems", level: "Advanced", percentage: 88 },
        { name: "Git & GitHub Workflows", level: "Expert", percentage: 96 },
        { name: "Testing (Vitest, Playwright)", level: "Advanced", percentage: 85 },
        { name: "Performance Optimization & SEO", level: "Advanced", percentage: 90 }
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // Featured & Showcase Projects
  // ----------------------------------------------------------------------------
  projects: [
    {
      id: "hyperflow",
      title: "HyperFlow - AI Workflow Orchestrator",
      category: "Full Stack",
      featured: true,
      description: "A node-based visual pipeline editor for chaining generative AI models with automated task runners.",
      longDescription: "HyperFlow enables engineering teams to construct, test, and deploy complex AI execution graphs without writing glue code. Features interactive canvas node editing, real-time token streaming, and distributed job queues.",
      tags: ["React", "TypeScript", "FastAPI", "Tailwind CSS", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://hyperflow.example.com",
      githubUrl: "https://github.com/example/hyperflow",
      metrics: "Over 15,000 workflows executed monthly",
      highlights: [
        "Interactive drag-and-drop workflow canvas",
        "Sub-100ms pipeline execution telemetry",
        "Enterprise RBAC and encrypted secret manager"
      ]
    },
    {
      id: "devdash",
      title: "DevDash - Realtime Engineering Analytics",
      category: "Full Stack",
      featured: true,
      description: "Unified analytics dashboard syncing Git repositories, CI test suites, and cloud infrastructure costs.",
      longDescription: "Built for tech leads to monitor deployment frequencies, cycle time, and pull request turnaround. Integrates with GitHub, GitLab, Jira, and AWS CloudWatch into customizable widget dashboards.",
      tags: ["Next.js", "PostgreSQL", "Prisma", "Chart.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://devdash.example.com",
      githubUrl: "https://github.com/example/devdash",
      metrics: "Used by 40+ engineering squads",
      highlights: [
        "Live WebSocket metric streams",
        "Automated DORA metrics calculation",
        "Granular team permission levels"
      ]
    },
    {
      id: "prism-ui",
      title: "Prism UI - Accessible Design System",
      category: "Frontend",
      featured: true,
      description: "An open-source accessible React component system adhering to WAI-ARIA standards with dynamic theme tokens.",
      longDescription: "A comprehensive library of 45+ enterprise-grade UI components with zero third-party dependencies, built-in keyboard navigation, high-contrast support, and full TypeScript types.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Vitest"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://prism-ui.example.com",
      githubUrl: "https://github.com/example/prism-ui",
      metrics: "1,200+ GitHub Stars & 10k npm downloads",
      highlights: [
        "100% WCAG 2.1 AA accessibility compliant",
        "Lightweight (<18kb gzip core bundle)",
        "Automated visual regression tests"
      ]
    },
    {
      id: "cryptoview",
      title: "CryptoView - High-Frequency Market Terminal",
      category: "Frontend",
      featured: false,
      description: "Low-latency market terminal visualizer consuming WebSockets for order book changes and depth charts.",
      longDescription: "Features live candles, volume delta analysis, order book visualizer, and customizable alert triggers with sound effects.",
      tags: ["React", "WebSockets", "Canvas API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://cryptoview.example.com",
      githubUrl: "https://github.com/example/cryptoview",
      metrics: "Handles 10k ticks/sec with 60fps rendering",
      highlights: [
        "Custom Canvas-rendered interactive chart engine",
        "Real-time WebSocket reconnection fallbacks",
        "Client-side encrypted API key storage"
      ]
    },
    {
      id: "docuhive",
      title: "DocuHive - Collaborative Knowledge Base",
      category: "Full Stack",
      featured: false,
      description: "Markdown documentation workspace with multiplayer live editing and vector-powered semantic search.",
      longDescription: "Modern Notion alternative for technical teams with offline-first CRDT synchronization, Mermaid diagrams, and instant AI summarization.",
      tags: ["React", "Node.js", "SQLite", "Yjs", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://docuhive.example.com",
      githubUrl: "https://github.com/example/docuhive",
      metrics: "Multiplayer editing latency < 35ms",
      highlights: [
        "Peer-to-peer conflict-free document replication",
        "Code syntax highlighting with live preview",
        "Full vector search across markdown docs"
      ]
    },
    {
      id: "focusflow",
      title: "FocusFlow - Minimalist Productivity Companion",
      category: "Mobile & Tools",
      featured: false,
      description: "Cross-platform Pomodoro and habit companion designed with soothing soundscapes and minimal distractions.",
      longDescription: "Built to combat task paralysis with soundscapes, ambient nature loops, smart micro-breaks, and local-first data storage.",
      tags: ["React", "PWA", "Web Audio API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://focusflow.example.com",
      githubUrl: "https://github.com/example/focusflow",
      metrics: "50,000+ session hours recorded",
      highlights: [
        "Offline-capable Progressive Web App",
        "Synthesized white noise and nature audio engines",
        "Zero tracking or telemetry data collection"
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // Work Experience & Education Timeline
  // ----------------------------------------------------------------------------
  timeline: [
    {
      id: "exp-1",
      type: "work",
      role: "Senior Full-Stack Engineer",
      organization: "TechScale Systems",
      period: "2023 - Present",
      location: "San Francisco, CA",
      description: "Leading frontend architecture and microservice integration for core enterprise SaaS products.",
      achievements: [
        "Spearheaded redesign that decreased bundle size by 42% and elevated Core Web Vitals to 98+",
        "Mentored a team of 6 engineers and introduced end-to-end testing with Vitest and Playwright",
        "Architected an event-driven notification hub supporting 250k concurrent connected clients"
      ],
      skills: ["React", "TypeScript", "Node.js", "Docker", "AWS", "Tailwind CSS"]
    },
    {
      id: "exp-2",
      type: "work",
      role: "Software Engineer",
      organization: "CloudPulse Technologies",
      period: "2021 - 2023",
      location: "Remote",
      description: "Developed real-time monitoring interfaces and integrated multi-cloud telemetry pipelines.",
      achievements: [
        "Implemented real-time charting dashboard handling high-frequency telemetry streams at 60fps",
        "Designed and published reusable UI component library adopted across 4 different internal tools",
        "Optimized database queries in PostgreSQL, reducing average API response latency by 35%"
      ],
      skills: ["React", "FastAPI", "PostgreSQL", "Redis", "TypeScript"]
    },
    {
      id: "exp-3",
      type: "work",
      role: "Frontend Developer",
      organization: "Nova Creative Agency",
      period: "2019 - 2021",
      location: "Austin, TX",
      description: "Crafted interactive web experiences, marketing platforms, and ecommerce solutions for client brands.",
      achievements: [
        "Shipped 20+ responsive web platforms with custom animations and CMS integrations",
        "Collaborated closely with UX designers to convert Figma prototypes into production code"
      ],
      skills: ["JavaScript", "React", "CSS3 / Sass", "REST APIs", "Webpack"]
    },
    {
      id: "edu-1",
      type: "education",
      role: "B.S. in Computer Science",
      organization: "University of California, Berkeley",
      period: "2015 - 2019",
      location: "Berkeley, CA",
      description: "Focused on Software Systems, Distributed Computing, and Human-Computer Interaction.",
      achievements: [
        "Dean's Honor List for 6 consecutive semesters",
        "Vice President of Open Source & Web Development Club",
        "Senior Capstone: Collaborative Distributed Code Canvas"
      ],
      skills: ["Data Structures", "Algorithms", "Operating Systems", "Networking"]
    }
  ],

  // ----------------------------------------------------------------------------
  // Testimonials & Recommendations
  // ----------------------------------------------------------------------------
  testimonials: [
    {
      quote: "Alex is an extraordinary developer who strikes the rare balance between aesthetic intuition and clean, performant architecture. He took our project from a wireframe concept to an award-winning web app in weeks.",
      author: "Sarah Jenkins",
      role: "VP of Product",
      company: "TechScale",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "Working with Alex was a breath of fresh air. His attention to detail, deep TypeScript knowledge, and dedication to user accessibility elevated our engineering standards across the board.",
      author: "Marcus Chen",
      role: "Staff Infrastructure Engineer",
      company: "CloudPulse",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "Not only does Alex deliver impeccably tested code on schedule, but his communication and creative problem-solving make him someone you immediately want on your critical initiatives.",
      author: "Elena Rostova",
      role: "Design Director",
      company: "Studio Craft",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
  ],

  // ----------------------------------------------------------------------------
  // Contact Section & FAQs
  // ----------------------------------------------------------------------------
  contact: {
    heading: "Let's build something remarkable together.",
    subheading: "Whether you have an upcoming project, a full-time role, or just want to chat about web technology, my inbox is always open.",
    responseTime: "Usually responds within 24 hours",
    location: "San Francisco, CA (PST / UTC-8)",
    email: "alex.morgan.dev@example.com",
    availabilityNote: "Currently booking freelance & open to full-time engineering roles."
  }
};
