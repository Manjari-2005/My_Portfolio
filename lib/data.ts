export const profile = {
  name: "Manjari Kamley",
  role: "Software Engineer — Full-Stack · Data & AI/ML · Cloud & DevOps · Data Analytics ",
  tagline:
    "Final-year BSC CS undergraduate who builds across the stack — React/Next.js interfaces, Python-based ML models, graph analytics, and containerized deployments.",
  location: "Tarakeswar, Kolkata, West Bengal, India",
  email: "kamleymanjari@gmail.com",
  phone: "+91 93399 10615",
  linkedin: "https://www.linkedin.com/in/manjari-kamley-a66b9b297",
  github: "https://github.com/Manjari-2005",
  resumeUrl: "/resume/Manjari_Kamley_Resume.pdf",
  photo: "/images/profile.jpg",
};

export const stats = [
  { label: "Projects Shipped", value: 6, suffix: "+" },
  { label: "Hackathons", value: 3, suffix: "" },
  { label: "CGPA", value: 7.95, suffix: "/10" },
  { label: "Certifications", value: 5, suffix: "" },
];

export type Domain =
  | "Full-Stack"
  | "AI/ML"
  | "Data Analytics"
  | "DevOps & Cloud";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  domains: Domain[];
  tech: string[];
  bullets: string[];
  hackathon?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "ledgershield",
    title: "LedgerShield",
    subtitle: "AI fraud-detection platform for banking",
    description:
      "A graph-analytics fraud engine built at IIT Delhi's Devcation Hack 'N' Solve 2026 (TigerGraph Premium Track). Models accounts and transactions as a graph to surface fraud rings in real time, not just flag single suspicious transactions.",
    domains: ["AI/ML", "Data Analytics", "Full-Stack"],
    tech: ["Python", "Flask", "TigerGraph (GSQL)", "pyTigerGraph", "SQL", "JavaScript"],
    bullets: [
      "Designed a graph schema (Account & Transaction nodes) with GSQL queries to flag fraud rings in real time.",
      "Deployed a live full-stack demo integrating graph analytics with a web dashboard for transaction monitoring.",
    ],
    hackathon: "🏆 Devcation Hack 'N' Solve 2026 — IIT Delhi",
    github: "https://github.com/Manjari-2005/Ledgershield-Digital-cctv",
    featured: true,
  },
  {
    slug: "voiceiq",
    title: "VoiceIQ",
    subtitle: "Multilingual voice-AI platform for healthcare & finance",
    description:
      "A voice-driven conversational AI platform built at HackIndia Spark 6, hosted at NIT Delhi. Supports Hindi, English, and Kannada, aimed at healthcare and finance workflows where voice-first access matters.",
    domains: ["AI/ML", "Full-Stack"],
    tech: ["Python", "Flask", "TypeScript", "React", "FFmpeg"],
    bullets: [
      "Owned frontend design and ML integration as part of a 3-person team under a fixed hackathon time constraint.",
      "Engineered a Flask backend with FFmpeg-based audio processing and a TypeScript/React front end, deployed live on Vercel.",
    ],
    hackathon: "🏆 HackIndia Spark 6 — NIT Delhi",
    github: "https://github.com/Manjari-2005/VoiceAI",
    featured: true,
  },
  {
    slug: "devops-iac-simulator",
    title: "DevOps-IaC-Simulator",
    subtitle: "Multi-tier infrastructure-as-code stack",
    description:
      "My strongest DevOps project: a production-style, Docker Compose-driven multi-tier architecture (Nginx → Flask API → MongoDB) built around Zero-Trust network isolation — only the reverse proxy is ever exposed to the host.",
    domains: ["DevOps & Cloud", "Full-Stack"],
    tech: ["Docker", "Docker Compose", "Nginx", "Flask", "Gunicorn", "MongoDB"],
    bullets: [
      "Zero-Trust network isolation — only the reverse proxy is exposed to the host; internal services communicate over an isolated Docker network.",
      "Health-gated service startup, a multi-stage Dockerfile to shrink image size and attack surface, and a non-root container user.",
      "Security response headers (X-Frame-Options, CSP-related headers) enforced at the Nginx layer, with a full architecture + operational runbook.",
    ],
    github: "https://github.com/Manjari-2005/DevOps-IaC-Simulator",
    featured: true,
  },
  {
    slug: "travelbuddy",
    title: "TravelBuddy",
    subtitle: "Full-stack MERN travel-planning platform",
    description:
      "A full-stack travel planner built at Smart India Hackathon (SIH) — itinerary creation, trip management, and a REST API layer, built end-to-end on the MERN stack under hackathon time pressure.",
    domains: ["Full-Stack"],
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    bullets: [
      "Designed the MongoDB schema and Express/Node REST API for trip and itinerary management.",
      "Built the React front end end-to-end as part of a hackathon team, from wireframe to working demo.",
    ],
    hackathon: "🏆 Smart India Hackathon (SIH)",
    github: "https://github.com/Manjari-2005/TravelBuddy",
  },
  {
    slug: "revenue-optimization-engine",
    title: "Revenue Optimization Engine",
    subtitle: "E-commerce pricing analytics tool",
    description:
      "A pricing-strategy simulator for e-commerce: models demand elasticity to estimate revenue impact of different pricing scenarios, with a live interactive dashboard.",
    domains: ["Data Analytics"],
    tech: ["Python", "SQL", "Pandas", "Streamlit"],
    bullets: [
      "Modeled demand elasticity with Pandas to simulate pricing strategies and estimate revenue impact.",
      "Built dynamic SQL queries for live data retrieval and an interactive Streamlit dashboard for exploratory analysis.",
    ],
    github: "https://github.com/Manjari-2005/Revenue-Optimization-Engine",
    demo: "https://revenue-optimization-engine-kynwq2pzgb2zhvfd42qtmh.streamlit.app/",
  },
  {
    slug: "spam-classifier",
    title: "Spam Email Classifier",
    subtitle: "SVM + Naive Bayes consensus model",
    description:
      "Built during the Codec Technologies internship: a spam email classifier combining SVM and Naive Bayes as a consensus model, exposed via a Flask REST API with a React front end.",
    domains: ["AI/ML", "Data Analytics"],
    tech: ["Python", "scikit-learn", "Pandas", "Flask", "React"],
    bullets: [
      "SVM + Naive Bayes consensus model exposed via a Flask REST API and React front end.",
    ],
    github: "https://github.com/Manjari-2005/Spam-Email-Classifier",
  },
  {
    slug: "churn-prediction",
    title: "Customer Churn Prediction",
    subtitle: "Random Forest churn predictor",
    description:
      "Built during the Codec Technologies internship: a customer churn predictor using a Random Forest model, with an interactive React dashboard for business-facing insights.",
    domains: ["AI/ML", "Data Analytics"],
    tech: ["Python", "scikit-learn", "Pandas", "Flask", "React"],
    bullets: [
      "Random Forest model with an interactive React dashboard for business-facing insights.",
    ],
    github: "https://github.com/Manjari-2005/Customer-Churn-Prediction",
  },
];

export const whatIDo = [
  {
    title: "Full-Stack Development",
    description: "React, Next.js, and Node/Express APIs — from schema to shipped UI.",
  },
  {
    title: "Machine Learning",
    description: "Classification and prediction models with scikit-learn, from EDA to a deployed API.",
  },
  {
    title: "Data Analysis",
    description: "Pandas-driven analysis and interactive dashboards that make a dataset arguable.",
  },
  {
    title: "DevOps & Cloud",
    description: "Docker Compose architectures, Zero-Trust network design, and reproducible deployments.",
  },
];

export const journey = [
  { year: "2023", label: "Started Computer Science at RCCIIT" },
  { year: "2024", label: "Built first web & ML projects; first hackathons" },
  { year: "2025", label: "Went deep on DevOps, containers & cloud infrastructure" },
  { year: "2026", label: "Shipping full-stack + AI/ML products, open to internships" },
];

export const experience = [
  {
    org: "Codec Technologies Pvt. Ltd.",
    role: "Artificial Intelligence Intern",
    duration: "Mar 2026 – Apr 2026",
    note: "AICTE & ICAC Approved · National Internship Portal · Google for Education Partner",
    bullets: [
      "Built a Spam Email Classifier (SVM + Naive Bayes) exposed via a Flask REST API and React front end.",
      "Developed a Customer Churn Prediction model (Random Forest) with an interactive React dashboard.",
    ],
  },
];

export const education = [
  {
    school: "RCC Institute of Information Technology (RCCIIT), Kolkata",
    degree: "B.Sc. Computer Science — Final Year (CGPA: 7.95)",
    duration: "2023 – 2027",
    note: "Affiliated to MAKAUT · DSA, DBMS, OOP (Java), OS, Computer Networks, Software Engineering, Cryptography & Information Security, AI, Soft Computing",
  },
  {
    school: "West Bengal Council of Higher Secondary Education",
    degree: "Class XII — 76.4%",
    duration: "2023",
    note: "",
  },
];

export const certifications = [
  {
    title: "Data Analytics Job Simulation",
    org: "Deloitte / Forage",
    date: "Apr 2026",
    note: "Data Analysis & Forensic Technology tasks",
  },
  {
    title: "Software Programmer — Python",
    org: "Nasscom FutureSkills Prime (IT-ITeS SSC)",
    date: "Mar 2026",
    note: "Aligned to IT-ITeS Sector Skills Council competency standards",
  },
  {
    title: "Introduction to Generative AI",
    org: "Google Cloud / Simplilearn",
    date: "Apr 2025",
    note: "Certificate code: 8147269",
  },
  {
    title: "AI for Entrepreneurship",
    org: "Intel Technology India / Skill India Digital Hub",
    date: "Mar 2025",
    note: "",
  },
  {
    title: "AI Progression — AI for Future Workforce",
    org: "Intel Digital Readiness × RCCIIT",
    date: "Jul – Dec 2025",
    note: "",
  },
];

export const achievements = [
  {
    title: "Devcation Hack 'N' Solve 2026",
    org: "IIT Delhi · TigerGraph Premium Track",
    note: "Built LedgerShield — fraud-ring detection on a transaction graph.",
  },
  {
    title: "HackIndia Spark 6",
    org: "NIT Delhi",
    note: "Built VoiceIQ — multilingual voice AI for healthcare & finance.",
  },
  {
    title: "Smart India Hackathon (SIH)",
    org: "National-level",
    note: "Built TravelBuddy — full-stack MERN travel planner.",
  },
  {
    title: "Devcation Delhi 2026",
    org: "GDG on Campus IGDTUW × IIT Delhi",
    note: "Participant, Google Developer Groups on Campus event.",
  },
  {
    title: "AINCAT 2026",
    org: "Naukri Campus",
    note: "All-India career aptitude test participant.",
  },
];

export const skillGroups = [
  {
    group: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    group: "Web & Full-Stack",
    items: ["React", "Next.js", "Redux Toolkit", "Node.js", "Express.js", "Flask", "REST APIs", "Streamlit"],
  },
  {
    group: "Data & Machine Learning",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "TigerGraph (GSQL)"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Docker", "Docker Compose", "Nginx", "Gunicorn", "MongoDB", "Vercel", "Render", "CI/CD"],
  },
];

export const terminalLines = [
  { cmd: "whoami", out: "Manjari Kamley — final-year CS @ RCCIIT" },
  { cmd: "skills --top", out: "Python · React/Next.js · Docker · SQL · scikit-learn" },
  { cmd: "status --currently", out: "Building scalable full-stack + ML systems, open to internships" },
];