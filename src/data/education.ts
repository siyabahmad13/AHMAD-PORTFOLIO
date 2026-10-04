export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: string;
  period: string;
  isLatest?: boolean;
  details?: string;
}

export const educationList: EducationItem[] = [
  {
    id: "bsit",
    degree: "Bachelor of Science in Information Technology",
    institution: "Virtual University of Pakistan",
    status: "Currently Pursuing",
    period: "Expected 2027",
    isLatest: true,
    details: "Foundations of computing, software engineering methodologies, web architectures, and database administration."
  },
  {
    id: "intermediate",
    degree: "Intermediate",
    institution: "Government Post Graduate College, Mardan",
    status: "Completed",
    period: "Completed",
    details: "Pre-engineering / science coursework building fundamental analytical, mathematical, and problem-solving skills."
  },
  {
    id: "matriculation",
    degree: "Matriculation",
    institution: "Capital School System",
    status: "Completed",
    period: "Completed in 2018",
    details: "Secondary school certificate with high distinction in core sciences and mathematics."
  }
];
