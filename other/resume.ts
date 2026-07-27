/**
 * Single source of truth for resume + portfolio content.
 * Edit this file — the site serves a PDF on demand from /api/resume.
 * Keep content concise so the PDF stays ONE page.
 */

export type ResumeLink = {
  label: string;
  url: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ExperienceRole = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  notes?: string[];
};

export type Project = {
  title: string;
  description: string;
  href: string;
  code?: string;
};

export type ResumeData = {
  name: string;
  title: string;
  email: string;
  location: string;
  links: ResumeLink[];
  summary: string;
  skills: SkillGroup[];
  experience: ExperienceRole[];
  education: Education[];
  extracurricular: string[];
};

export const resume: ResumeData = {
  name: "Ather Qureshi",
  title: "Senior Software Engineer",
  email: "atherqureshi07@gmail.com",
  location: "Greater Toronto Area",
  links: [
    { label: "GitHub", url: "https://github.com/qureshiather" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/atherqureshi" },
    { label: "Website", url: "https://atherqureshi.com" },
    { label: "Writing", url: "https://atherqureshi.substack.com/" },
  ],
  summary:
    "Full-stack engineer with experience building services and tooling for developers and customers. Strong in design patterns, system architecture, and end-to-end delivery. Comfortable leading technical work, collaborating with PMs and stakeholders, and picking up new stacks quickly.",
  skills: [
    {
      label: "Languages",
      items: ["Python", "Java", "JavaScript/TypeScript", "SQL"],
    },
    {
      label: "Platform",
      items: [
        "Linux",
        "Docker",
        "Kubernetes",
        "Kafka",
        "Helm",
        "Django",
        "React",
        "CircleCI",
        "GitHub Actions",
        "ArgoCD",
      ],
    },
    {
      label: "Data",
      items: ["RDBMS", "HDFS", "NoSQL", "Dagster"],
    },
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Senpilot",
      location: "Greater Toronto Area",
      start: "Aug 2025",
      end: "Present",
      highlights: [
        "2nd engineer at Senpilot, helping take the product and engineering organization from 0->1 and 1->n.",
        "Created the ingestion pipeline and introduced Dagster to bring utility data from GIS, AMI, SCADA, and OMS into one unified data model.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Carta",
      location: "Waterloo, ON",
      start: "Jan 2022",
      end: "Aug 2025",
      highlights: [
        "Frontend Platform: framework and tooling for micro-frontends across Carta; accelerate React/TypeScript convergence.",
        "Modularizing legacy frontends out of the monolith; tools for maintainability, security, and scalability.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Carta",
      location: "Waterloo, ON",
      start: "Feb 2020",
      end: "Jan 2022",
      highlights: [
        "Promoted E2->E3 after 8 months. Finance-Automation: subscriptions, payments, and contracts.",
        "Built billing/subscription reconciliation as Carta's first Kafka use case, using Faust.",
        "Migrated Django monolith domains to gRPC microservices; owned CI/CD and monitoring. Lead on a real-time Kafka microservice (Python).",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "Bell",
      location: "Toronto, ON",
      start: "Oct 2018",
      end: "Feb 2020",
      highlights: [
        "Led architecture for real-time call-routing ML; REST and Kafka endpoints; CI/CD with Redis/Kafka tests deploying to Kubernetes.",
      ],
    },
    {
      title: "Data Engineer",
      company: "Bell",
      location: "Toronto, ON",
      start: "Sept 2017",
      end: "Oct 2018",
      highlights: [
        "6PB+ customer data. Lead for campaign tooling (~80M offers/year) and Connected Car (AT&T); Tableau/SAS for 8000+ ETL jobs.",
      ],
    },
  ],
  education: [
    {
      school: "Western University",
      degree: "BSc Honours Specialization in Computer Science, Minor in Psychology",
      start: "Sept 2012",
      end: "Aug 2017",
      notes: ["Western Scholarship of Distinction", "Dean's List"],
    },
  ],
  extracurricular: [
    "President, Western Pakistani Students Association - $2k budget, 150 members",
    "Speaker, Toronto Machine Learning Series Micro Summit (Insurance & Telco, 2018)",
  ],
};

/** Portfolio-only extras (not printed on the one-page PDF). */
export const portfolio = {
  tagline: "Building platforms, services, and tools that scale.",
  about:
    "I am a full-stack software engineer based in the GTA. Currently at Senpilot as the 2nd engineer, helping take the product and engineering from 0->1 and 1->n. Previously shipped microservices, ML systems, data platforms, and frontend infrastructure at Carta and Bell. I care about clear architecture, developer experience, and work that ships.",
  interests: [
    {
      title: "Engineering",
      description: "Platforms, microservices, and frontend systems.",
      href: "https://github.com/qureshiather",
    },
    {
      title: "Writing",
      description: "Notes on software and building in public.",
      href: "https://atherqureshi.substack.com/",
    },
    {
      title: "Music",
      description: "Electronic production and sound design.",
      href: "https://soundcloud.com/atherrrr",
    },
  ],
  projects: [
    {
      title: "Solstice",
      description: "Interactive math generator built with p5.js - playful visual explorations of math.",
      href: "https://solstice-p5js.vercel.app/",
      code: "https://github.com/qureshiather/Solstice",
    },
  ] satisfies Project[],
};
