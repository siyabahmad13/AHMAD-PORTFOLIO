export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Django", "REST APIs"]
  },
  {
    title: "DATABASE",
    skills: ["MongoDB", "MySQL", "SQLite"]
  },
  {
    title: "AI / ML",
    skills: ["Python", "Scikit-learn", "NLP", "Machine Learning"]
  },
  {
    title: "TOOLS",
    skills: ["Git", "GitHub", "VS Code", "Vercel"]
  }
];
