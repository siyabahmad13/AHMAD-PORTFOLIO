export interface Certification {
  id: string;
  issuer: string;
  title: string;
  year?: string;
  credentialId?: string;
  image: string;
}

export const certifications: Certification[] = [
  

  {
    id: "amazon-fullstack",
    issuer: "Amazon",
    title: "Full Stack Development",
    year: "2025",
    credentialId: "AWS-FSD-78491",
    image: "/images/Certificates/amazon.png"
  },
  {
    id: "cisco-cybersecurity",
    issuer: "Cisco",
    title: "Cybersecurity",
    year: "2025",
    credentialId: "CSCO-SEC-39120",
    image: "/images/Certificates/cisco-cyber security.png"
  },
  {
    id: "cisco-datascience",
    issuer: "Cisco",
    title: "Data Science",
    year: "2026",
    credentialId: "CSCO-DS-50182",
    image: "/images/Certificates/cisco-datascience.png"
  },
  {
    id: "cisco-modern-ai",
    issuer: "Cisco",
    title: "Modern AI",
    year: "2025",
    credentialId: "CSCO-AI-99214",
    image: "/images/Certificates/cisco-modern-ai.png"
  },
  {
    id: "digiskill-ai",
    issuer: "DigiSkills",
    title: "Artificial Intelligence",
    year: "2026",
    credentialId: "DGI-AI-66421",
    image: "/images/Certificates/diskill-ai.png"
  },
  {
    id: "ibm-cloud",
    issuer: "IBM",
    title: "Introduction to Cloud",
    year: "2025",
    credentialId: "IBM-CLD-11847",
    image: "/images/Certificates/ibm-cloud.png"
  },
  {
    id: "ibm-cybersecurity",
    issuer: "IBM",
    title: "Cybersecurity",
    year: "2025",
    credentialId: "IBM-CYB-XXXXX",
    image: "/images/Certificates/ibm-cyber.png"
  },
  {
    id: "meta-backend",
    issuer: "Meta",
    title: "Backend Development",
    year: "2025",
    credentialId: "META-BE-XXXXX",
    image: "/images/Certificates/meta-backend.png"
  },
  {
    id: "meta-frontend",
    issuer: "Meta",
    title: "Frontend Development",
    year: "2025",
    credentialId: "META-FE-XXXXX",
    image: "/images/Certificates/meta-frontend.png"
  },
  {
    id: "microsoft-software-engineering",
    issuer: "Microsoft",
    title: "Software Engineering",
    year: "2025",
    credentialId: "MS-SE-XXXXX",
    image: "/images/Certificates/ms-se.png"
  },
  {
    id: "rice-python",
    issuer: "Rice University",
    title: "Python Programming",
    year: "2025",
    credentialId: "RICE-PY-XXXXX",
    image: "/images/Certificates/rice-python.png"
  }
];
