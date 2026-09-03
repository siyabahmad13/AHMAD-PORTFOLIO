import React from 'react';
import { X, Printer, Download, Mail, Globe, MapPin, Briefcase, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { EXPERIENCE_DATA, SKILLS_DATA, CERTIFICATIONS_DATA } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const markdownContent = `# SIAB AHMAD KHAN - FULL STACK DEVELOPER
Email: msiyab10492@gmail.com | Portfolio: Siab Ahmad Khan
Location: Islamabad / Remote | Availability: Open for Full-Time & High-Impact Contracts

## PROFESSIONAL SUMMARY
Passionate Full Stack Developer with 3+ years of expertise in crafting responsive, accessible, and high-performance web systems using React 19, TypeScript, Node.js, Express, and modern Cloud infrastructure. Proven track record of accelerating load speeds by 42% and implementing scalable component architectures.

## CORE SKILLS
- Frontend: React 19, Next.js, TypeScript, JavaScript (ESNext), Tailwind CSS, Redux/Zustand, HTML5/CSS3
- Backend: Node.js, Express.js, REST & GraphQL APIs, MongoDB, PostgreSQL, Firebase
- DevOps & Tools: Git, GitHub Actions, Docker, Vite, Jest, Figma to Code, WCAG AA Accessibility

## WORK EXPERIENCE
${EXPERIENCE_DATA.map(
  exp => `
### ${exp.role} — ${exp.company} (${exp.period})
Location: ${exp.location} | Type: ${exp.type}
${exp.responsibilities.map(r => `- ${r}`).join('\n')}
Key Technologies: ${exp.technologies.join(', ')}
`
).join('\n')}

## CERTIFICATIONS
${CERTIFICATIONS_DATA.map(c => `- ${c.title} (${c.issuer}, ${c.date}) - ID: ${c.credentialId}`).join('\n')}
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Siab_Ahmad_Khan_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-sm animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#0c1220] border border-gray-200 dark:border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-[#0f172a]/80">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 ml-2">
              Curriculum Vitae • Siab Ahmad Khan
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white bg-gray-200/70 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg hover:opacity-90 transition-opacity shadow-sm"
              title="Download Resume Markdown"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save File</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8 text-gray-800 dark:text-gray-200 text-sm">
          {/* Header */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Siab Ahmad Khan
              </h1>
              <p className="text-neon-cyan font-semibold text-base mt-1">
                Full Stack Developer & Frontend Architect
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                Crafting scalable, accessible, and delight-driven web applications.
              </p>
            </div>

            <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neon-blue" />
                <span>msiyab10492@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neon-purple" />
                <span>Islamabad, Pakistan (Available Worldwide Remote)</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Available for New Positions</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-widest text-neon-blue mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Executive Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              Engineering-focused Full Stack Developer with 3+ years of comprehensive experience architecting web applications from Figma wireframes to containerized cloud deployments. Specialized in React 19, TypeScript, state machine design, RESTful microservices with Node.js, and high-performance CSS frameworks. Passionate about user-centric micro-interactions, responsive architectures, and zero-defect code quality.
            </p>
          </div>

          {/* Skills Grid */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-widest text-neon-purple mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SKILLS_DATA.map((cat, i) => (
                <div
                  key={i}
                  className="bg-gray-50 dark:bg-[#111a2e] p-3.5 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <h3 className="font-semibold text-xs text-gray-900 dark:text-white mb-2">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-white dark:bg-[#192338] text-[11px] rounded text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-widest text-neon-cyan mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Experience & Achievements
            </h2>
            <div className="space-y-6">
              {EXPERIENCE_DATA.map((item, idx) => (
                <div key={idx} className="border-l-2 border-neon-blue/40 pl-4 space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {item.role} <span className="text-neon-cyan font-medium">@ {item.company}</span>
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.location} • {item.type}
                  </p>
                  <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-300 space-y-1 mt-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                  {item.achievements && (
                    <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      Key Highlights: {item.achievements.join(' ')}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-widest text-neon-pink mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> Certifications & Verified Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS_DATA.map(c => (
                <div
                  key={c.id}
                  className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-[#111a2e] rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-gray-900 dark:text-white">{c.title}</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {c.issuer} • {c.date}
                    </p>
                    <p className="text-[10px] font-mono text-neon-cyan mt-0.5">ID: {c.credentialId}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
