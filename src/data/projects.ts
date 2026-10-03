export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  summary: string;
  year: string;
  technologies: string[];
  image: string;
  role: string;
  problem: string;
  solution: string;
  features: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  challenges: string;
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "verifai",
    slug: "verifai",
    title: "VerifAI",
    category: "AI / Machine Learning",
    subtitle: "AI / Machine Learning",
    description: "An AI-powered fake news detection system that analyzes news content and estimates whether information is real or fake.",
    summary: "VerifAI is a machine-learning based news verification platform designed to help users analyze written news content. The system processes submitted news text and provides a classification result with a confidence estimate.",
    year: "2025",
    technologies: ["Python", "Machine Learning", "Scikit-learn", "NLP", "Django", "React"],
    image: "/images/VarifAi.jpeg",
    role: "Full-Stack Developer & AI/ML Developer",
    problem: "The rapid circulation of unverified news and misleading headlines across digital channels makes manual fact-checking slow and challenging for everyday readers.",
    solution: "Developed an accessible news verification tool that leverages natural language processing to evaluate linguistic patterns, source structure, and textual markers to generate a clear classification and confidence score.",
    features: [
      "News text analysis",
      "Headline analysis",
      "URL-based input",
      "Real/Fake classification",
      "Confidence estimation",
      "Analysis history",
      "User feedback",
      "Machine-learning model"
    ],
    process: [
      { step: "01", title: "Research & Dataset Curation", description: "Compiled and preprocessed news corpora for semantic analysis and feature extraction." },
      { step: "02", title: "Model Training & NLP Pipeline", description: "Trained classification algorithms with TF-IDF vectorization and cross-validation." },
      { step: "03", title: "Full-Stack Integration", description: "Constructed Django REST endpoints connected to a clean, responsive React interface." },
      { step: "04", title: "Validation & Tuning", description: "Benchmarked classification confidence thresholds and tuned input tokenization." }
    ],
    challenges: "Handling nuanced sarcasm, subtle misinformation, and variable text lengths without sacrificing inference speed.",
    outcome: "Created a reliable, easy-to-use verification interface delivering instantaneous confidence estimations and transparent analysis breakdowns.",
    liveUrl: "https://siabahmad.problos.com/work/verifai",
    githubUrl: "https://github.com/siabahmad/verifai"
  },
  {
    id: "educore",
    slug: "educore",
    title: "EduCore",
    category: "Education Management System",
    subtitle: "Education Management System",
    description: "A modern student management system designed to organize academic records, admissions, attendance, examinations and institutional data.",
    summary: "EduCore is an education management platform designed for schools and colleges. It brings student records, attendance, admissions, examinations and academic administration into one organized system.",
    year: "2025",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/images/EDU-core.jpeg",
    role: "Full-Stack Developer",
    problem: "Educational institutions frequently struggle with fragmented spreadsheets, physical record-keeping, and disconnected attendance logs that hinder administrative productivity.",
    solution: "Engineered a centralized management portal providing institutional staff with structured student profiles, real-time attendance recording, and unified exam grading workflows.",
    features: [
      "Student management",
      "Student admissions",
      "Attendance management",
      "Examination management",
      "Academic records",
      "Timetable management",
      "Reports",
      "Administrative dashboard"
    ],
    process: [
      { step: "01", title: "Workflow Analysis", description: "Interviewed institutional coordinators to map daily academic and operational schedules." },
      { step: "02", title: "Database Schema Design", description: "Structured relational models in MongoDB for students, cohorts, and grading schemas." },
      { step: "03", title: "Interface Construction", description: "Built responsive administrative dashboards and attendance input tables with React." },
      { step: "04", title: "Security & Testing", description: "Enforced role-based access control and validated high-volume record queries." }
    ],
    challenges: "Designing multi-term historical grade calculations and flexible timetable conflict resolution.",
    outcome: "Delivered a clean, robust education platform that streamlines student lifecycle administration from admission to graduation.",
    liveUrl: "https://siabahmad.problos.com/work/educore",
    githubUrl: "https://github.com/siabahmad/educore"
  },
  {
    id: "careflow",
    slug: "careflow",
    title: "CareFlow",
    category: "Healthcare",
    subtitle: "Healthcare Management Application",
    description: "A modern health management application for organizing health information, appointments, medications and personal health data.",
    summary: "CareFlow is a digital healthcare application focused on making personal health information easier to manage through a clean and organized interface.",
    year: "2025",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    image: "/images/Care-Flow.jpeg",
    role: "Full-Stack Developer",
    problem: "Patients and caregivers often struggle to keep track of disparate appointment dates, recurring prescriptions, and vital medical metrics spread across scattered paper notes.",
    solution: "Designed a patient-centered wellness dashboard that centralizes medical metrics, schedules reminders, and tracks prescription adherence in an intuitive interface.",
    features: [
      "Health dashboard",
      "Health metrics",
      "Appointment management",
      "Medication tracking",
      "Health records",
      "Reports",
      "User profile"
    ],
    process: [
      { step: "01", title: "User Requirements", description: "Identified critical healthcare management touchpoints and readability constraints." },
      { step: "02", title: "Architecture & Data Privacy", description: "Outlined secure data storage patterns for personal health records." },
      { step: "03", title: "Frontend Implementation", description: "Constructed intuitive wellness tracking components and visual metric graphs." },
      { step: "04", title: "Usability Testing", description: "Refined navigation clarity, contrast levels, and reminder notifications." }
    ],
    challenges: "Balancing comprehensive health record tracking with an uncomplicated, non-intimidating user interface.",
    outcome: "Produced an accessible healthcare application that empowers patients to manage their daily medical routines with confidence.",
    liveUrl: "https://siabahmad.problos.com/work/careflow",
    githubUrl: "https://github.com/siabahmad/careflow"
  },
  {
    id: "aura-ai",
    slug: "aura-ai",
    title: "AURA AI",
    category: "Artificial Intelligence / Automation",
    subtitle: "Autonomous AI Assistant & Workflow Engine",
    description: "An autonomous AI assistant designed to understand requests, execute multi-step tasks and automate digital workflows.",
    summary: "AURA AI explores the concept of an intelligent software agent capable of handling multi-step tasks instead of simply responding to individual prompts.",
    year: "2025",
    technologies: ["Python", "AI", "APIs", "React", "Node.js", "FastAPI"],
    image: "/images/Aura-Ai.jpeg",
    role: "AI / Full-Stack Developer",
    problem: "Standard conversational bots stop at answering simple questions, leaving repetitive cross-application workflows and multi-stage tasks to be completed manually.",
    solution: "Architected an autonomous agent capable of decomposing user goals into sequential sub-tasks, calling appropriate external APIs, and reporting real-time progress.",
    features: [
      "AI assistant",
      "Task execution",
      "Workflow automation",
      "Multi-step tasks",
      "Task history",
      "Automation management",
      "AI workspace"
    ],
    process: [
      { step: "01", title: "Agent Strategy", description: "Designed task decomposition protocols and structured execution state machines." },
      { step: "02", title: "API Gateway & Tooling", description: "Created secure API connectors for web search, document parsing, and file handling." },
      { step: "03", title: "Interactive Workspace", description: "Built a real-time React UI showing task progression and intermediate agent logs." },
      { step: "04", title: "Stress & Reliability Testing", description: "Validated error recovery and fallback mechanisms when sub-tasks encounter obstacles." }
    ],
    challenges: "Ensuring deterministic state recovery and preventing infinite loops when autonomous steps encounter unexpected outputs.",
    outcome: "Engineered an intelligent workflow assistant that reliably orchestrates complex digital operations with full transparency.",
    liveUrl: "https://siabahmad.problos.com/work/aura-ai",
    githubUrl: "https://github.com/siabahmad/aura-ai"
  },
  {
    id: "learn-ai",
    slug: "learn-ai",
    title: "LearnAI",
    category: "AI / Education",
    subtitle: "AI-Powered Learning Platform",
    description: "An AI-powered learning platform designed to provide interactive courses, personalized learning and AI-assisted education.",
    summary: "LearnAI is an educational platform that combines structured learning content with artificial intelligence to create a more interactive learning experience.",
    year: "2024",
    technologies: ["React", "Python", "AI", "Node.js", "MongoDB"],
    image: "/images/learn-Ai.jpeg",
    role: "Full-Stack Developer & AI Developer",
    problem: "Traditional online learning material is often rigid and one-size-fits-all, failing to adapt when students struggle with specific concepts.",
    solution: "Built an adaptive educational platform with an integrated AI tutor that provides contextual explanations, personalized course recommendations, and dynamic quiz generation.",
    features: [
      "Online courses",
      "Learning paths",
      "AI tutor",
      "Interactive lessons",
      "Progress tracking",
      "Quizzes",
      "Personalized recommendations"
    ],
    process: [
      { step: "01", title: "Curriculum Mapping", description: "Structured modular lesson chapters, exercise schemas, and learning objectives." },
      { step: "02", title: "AI Tutor Engine", description: "Implemented prompt-engineered tutoring models with strict educational boundaries." },
      { step: "03", title: "Full-Stack Web App", description: "Developed course catalog, interactive code/text readers, and progress dashboards." },
      { step: "04", title: "Feedback Loop & Evaluation", description: "Optimized response latency and validated pedagogical accuracy across topics." }
    ],
    challenges: "Providing meaningful, accurate AI tutor assistance without generating inaccurate technical information.",
    outcome: "Built a dynamic educational hub that bridges static curriculum and personalized one-on-one mentorship.",
    liveUrl: "https://siabahmad.problos.com/work/learn-ai",
    githubUrl: "https://github.com/siabahmad/learn-ai"
  },
  {
    id: "medivault",
    slug: "medivault",
    title: "MediVault",
    category: "Healthcare / E-Medical Records",
    subtitle: "Electronic Medical Records System",
    description: "An electronic medical record system for organizing patient information, medical history, prescriptions and healthcare records.",
    summary: "MediVault is designed to organize digital medical records into a structured and accessible system for healthcare information management.",
    year: "2024",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image: "/images/Medi-Vault.jpeg",
    role: "Full-Stack Developer",
    problem: "Clinicians and clinical staff waste valuable time navigating cumbersome, outdated record systems with inefficient search capabilities.",
    solution: "Constructed an electronic medical record platform that organizes patient charts into a chronologically ordered, easily searchable health history.",
    features: [
      "Patient records",
      "Medical history",
      "Diagnoses",
      "Prescriptions",
      "Laboratory records",
      "Appointment history",
      "Patient profiles",
      "Medical timeline"
    ],
    process: [
      { step: "01", title: "Domain Research", description: "Audited standard clinical chart documentation schemas and medical timeline conventions." },
      { step: "02", title: "Secure Schema Architecture", description: "Implemented encrypted MongoDB record schemas with granular access controls." },
      { step: "03", title: "Interface Engineering", description: "Created an efficient doctor-facing interface with quick search and prescription entry." },
      { step: "04", title: "Audit Logging", description: "Implemented immutable audit logs for all medical record access and modification events." }
    ],
    challenges: "Structuring deeply nested diagnostic records and lab results while preserving sub-second search response times.",
    outcome: "Delivered a clean, compliant medical record platform that accelerates clinical information retrieval.",
    liveUrl: "https://siabahmad.problos.com/work/medivault",
    githubUrl: "https://github.com/siabahmad/medivault"
  },
  {
    id: "pharmaease",
    slug: "pharmaease",
    title: "PharmaEase",
    category: "E-Commerce / Healthcare",
    subtitle: "Digital Pharmacy & Healthcare Marketplace",
    description: "An online pharmacy platform for browsing healthcare products, searching medicines and managing orders.",
    summary: "PharmaEase is a modern e-commerce concept focused on making pharmacy products easier to discover and purchase through a clean digital experience.",
    year: "2024",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    image: "/images/Pharma-Ease.jpeg",
    role: "Full-Stack Developer",
    problem: "Ordering pharmaceutical goods online is often hindered by confusing drug categorisation, unclear dosage information, and cumbersome prescription upload processes.",
    solution: "Engineered a streamlined e-pharmacy interface featuring categorized product filters, prescription verification workflows, and seamless checkout tracking.",
    features: [
      "Medicine search",
      "Product categories",
      "Product details",
      "Shopping cart",
      "Order management",
      "Prescription upload",
      "User accounts"
    ],
    process: [
      { step: "01", title: "Catalog Architecture", description: "Structured product taxonomies, active ingredient indexes, and prescription requirement tags." },
      { step: "02", title: "Checkout & Cart Flows", description: "Engineered persistent cart state, prescription attachment hooks, and order confirmation." },
      { step: "03", title: "Search Optimization", description: "Implemented fuzzy search across brand names, generic compounds, and health categories." },
      { step: "04", title: "End-to-End Validation", description: "Tested order state transitions from checkout through pharmacist verification and dispatch." }
    ],
    challenges: "Handling prescription-required product checkpoints without interrupting the normal checkout flow for over-the-counter items.",
    outcome: "Built an intuitive, secure online pharmacy portal that simplifies medical e-commerce for everyday customers.",
    liveUrl: "https://siabahmad.problos.com/work/pharmaease",
    githubUrl: "https://github.com/siabahmad/pharmaease"
  },
  {
    id: "automarket",
    slug: "automarket",
    title: "AutoMarket",
    category: "Automotive Marketplace",
    subtitle: "Digital Vehicle Discovery Platform",
    description: "A digital marketplace for discovering, buying and selling vehicles through searchable vehicle listings.",
    summary: "AutoMarket is an automotive marketplace concept designed to simplify vehicle discovery through searchable listings, filters and detailed vehicle information.",
    year: "2024",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Cloudinary"],
    image: "/images/Auto-Market.jpeg",
    role: "Full-Stack Developer",
    problem: "Car buyers face cluttered marketplace websites inundated with misleading specifications, hidden fees, and ineffective filtering options.",
    solution: "Designed a clean automotive marketplace with multi-attribute filtering (make, model, year, mileage, price), high-resolution photo galleries, and seller direct messaging.",
    features: [
      "Vehicle listings",
      "Vehicle search",
      "Advanced filters",
      "Vehicle details",
      "Seller listings",
      "Favorites",
      "Location",
      "Sell vehicle"
    ],
    process: [
      { step: "01", title: "Market Research", description: "Analyzed automotive buyer discovery journeys and listing layout standards." },
      { step: "02", title: "Search Filter Engine", description: "Engineered faceted MongoDB aggregation pipelines for instant multi-parameter filtering." },
      { step: "03", title: "Listing Creation Flow", description: "Built an intuitive vehicle listing submission wizard with automatic photo optimization." },
      { step: "04", title: "Mobile Usability", description: "Optimized gallery swipe interactions and specifications sheet display on mobile screens." }
    ],
    challenges: "Maintaining fast search results when filtering across hundreds of multi-faceted vehicle attributes simultaneously.",
    outcome: "Delivered a modern automotive discovery platform praised for its transparent vehicle specifications and clear search ergonomics.",
    liveUrl: "https://siabahmad.problos.com/work/automarket",
    githubUrl: "https://github.com/siabahmad/automarket"
  },
  {
    id: "buyora",
    slug: "buyora",
    title: "Buyora",
    category: "Marketplace",
    subtitle: "General Online Marketplace",
    description: "A general online marketplace where users can discover products, create listings and buy or sell items.",
    summary: "Buyora is a marketplace concept focused on creating a simple and organized digital experience for people who want to buy or sell products online.",
    year: "2023",
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    image: "/images/Buyora.jpeg",
    role: "Full-Stack Developer",
    problem: "Peer-to-peer selling websites are frequently overloaded with intrusive popups, complicated listing forms, and poor category structure.",
    solution: "Created an uncluttered, modern peer-to-peer marketplace that allows users to quickly search items, publish clean listings with photos, and connect with verified sellers.",
    features: [
      "Product listings",
      "Product search",
      "Categories",
      "Sell an item",
      "Favorites",
      "Seller information",
      "Product details",
      "User accounts"
    ],
    process: [
      { step: "01", title: "User Persona Research", description: "Evaluated friction points for casual sellers and bargain-seeking buyers." },
      { step: "02", title: "Listing Architecture", description: "Built streamlined data models for categorized items, pricing, condition, and status." },
      { step: "03", title: "Product Showcase UI", description: "Engineered an editorial product grid with responsive cards and quick wishlist toggles." },
      { step: "04", title: "Performance Benchmarking", description: "Optimized image loading, caching strategies, and lazy-loading for marketplace items." }
    ],
    challenges: "Building a lightweight listing publishing flow that captures complete product details without deterring first-time sellers.",
    outcome: "Launched a streamlined marketplace interface that makes buying and selling items fast, organized, and straightforward.",
    liveUrl: "https://siabahmad.problos.com/work/buyora",
    githubUrl: "https://github.com/siabahmad/buyora"
  },
  {
    id: "hsm-boutique",
    slug: "hsm-boutique",
    title: "HSM Boutique",
    category: "Fashion / E-Commerce",
    subtitle: "Premium Fashion E-Commerce",
    description: "A modern fashion e-commerce website designed for browsing collections, viewing products and shopping online.",
    summary: "HSM Boutique is a premium fashion e-commerce concept focused on presenting clothing collections through a clean and elegant digital shopping experience.",
    year: "2023",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/images/HSM.jpeg",
    role: "Full-Stack Developer",
    problem: "Fashion brands often fail to translate in-store elegance into digital web stores due to cluttered layouts and sluggish collection browsing.",
    solution: "Constructed an editorial-grade fashion web store featuring generous whitespace, high-fidelity apparel imagery, fluid collection filters, and a seamless shopping cart.",
    features: [
      "Fashion collections",
      "Product catalogue",
      "Product details",
      "Shopping cart",
      "Categories",
      "Search",
      "Wishlist",
      "Checkout"
    ],
    process: [
      { step: "01", title: "Aesthetic Direction", description: "Formulated a minimal visual design system tailored for high-end editorial fashion." },
      { step: "02", title: "Catalogue & Variant Models", description: "Engineered size, color variant, and inventory management schemas in MongoDB." },
      { step: "03", title: "Interactive Lookbooks", description: "Built smooth collection viewports, zoom-on-hover product galleries, and slideout carts." },
      { step: "04", title: "Checkout Flow Auditing", description: "Streamlined shipping, billing, and order summary steps into a frictionless process." }
    ],
    challenges: "Optimizing high-resolution fashion photography to load instantly while preserving immaculate visual clarity.",
    outcome: "Delivered a refined digital shopping experience that showcases fashion collections with sophisticated editorial poise.",
    liveUrl: "https://siabahmad.problos.com/work/hsm-boutique",
    githubUrl: "https://github.com/siabahmad/hsm-boutique"
  }
];
