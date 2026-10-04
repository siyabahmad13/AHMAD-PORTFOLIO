export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive UI"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "System Architecture", "Authentication & JWT"]
  },
  {
    title: "AI / Machine Learning",
    skills: ["Python", "Scikit-Learn", "Machine Learning", "NLP Fundamentals", "LLM Integration", "Prompt Engineering"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Firebase / Firestore", "Database Schema Design"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "Docker", "Postman", "Vercel", "VS Code", "Linux / CLI", "npm / yarn"]
  }
];
