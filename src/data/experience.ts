export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location?: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "problos",
    period: "2026 — Present",
    role: "Co-Founder",
    organization: "Problos",
    location: "Software Solutions",
    responsibilities: [
      "Leading technical direction and software architecture for web platforms and digital systems.",
      "Building high-performance, accessible web applications tailored for real-world client needs.",
      "Overseeing end-to-end product delivery from initial design through to cloud deployment."
    ]
  },
  {
    id: "qac",
    period: "2024 - 2026",
    role: "Administrative & Data Systems Coordinator",
    organization: "Quaid-e-Azam College Mardan",
    location: "Academic Administration",
    responsibilities: [
      "Managing institutional records, student data workflows, and administrative information systems.",
      "Automating internal report generation and streamlining inter-departmental communication channels.",
      "Maintaining high data accuracy, system reliability, and secure student record management."
    ]
  },
  {
    id: "new-tameer",
    period: "2021 — 2024",
    role: "Account Manager & Web Developer",
    organization: "New Tameer Islamabad",
    location: "Commercial Operations",
    responsibilities: [
      "Managed client accounts, project coordination, and operational deliverables across active accounts.",
      "Collaborated with cross-functional teams to ensure timely completion of commitments.",
      "Maintained clear client documentation, reporting schedules, and regular status briefings."
    ]
  }
];
