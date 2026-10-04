export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location?: string;
  type?: string;
  responsibilities: string[];
  technologies?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "problos",
    period: "2026 — Present",
    role: "Co-Founder & Technical Lead",
    organization: "Problos",
    location: "Software Solutions",
    type: "Full-Time",
    responsibilities: [
      "Leading technical direction and software architecture for web platforms and digital systems.",
      "Building high-performance, accessible web applications tailored for real-world client needs.",
      "Overseeing end-to-end product delivery from initial architecture through to cloud deployment."
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Python", "Cloud Deployment"]
  },
  {
    id: "qac",
    period: "2024 — 2026",
    role: "Administrative & Data Systems Coordinator",
    organization: "Quaid-e-Azam College Mardan",
    location: "Academic Administration",
    type: "Institutional",
    responsibilities: [
      "Managed institutional records, student data workflows, and administrative information systems.",
      "Automated internal report generation and streamlined inter-departmental communication channels.",
      "Maintained high data accuracy, system reliability, and secure student record management."
    ],
    technologies: ["Database Management", "Automation", "Data Modeling", "Reports"]
  },
  {
    id: "new-tameer",
    period: "2021 — 2024",
    role: "Account Manager & Web Developer",
    organization: "New Tameer Islamabad",
    location: "Commercial Operations",
    type: "Professional",
    responsibilities: [
      "Managed client accounts, project coordination, and operational deliverables across active accounts.",
      "Collaborated with cross-functional teams to ensure timely completion of commitments.",
      "Maintained clear client documentation, reporting schedules, and regular status briefings."
    ],
    technologies: ["Web Development", "Client Coordination", "JavaScript", "HTML/CSS"]
  }
];
