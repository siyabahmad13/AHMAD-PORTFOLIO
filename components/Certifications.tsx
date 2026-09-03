
import React, { useState } from 'react';
import Section from './Section';
import { CERTIFICATIONS_DATA } from '../constants';
import { Certification } from '../types';
import { Award, CheckCircle, ExternalLink, ShieldCheck, X } from 'lucide-react';

const CertificationModal: React.FC<{ cert: Certification; onClose: () => void }> = ({ cert, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#0b1220] border border-slate-300 dark:border-gray-800 rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close certification modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-[#070b14] p-2 mb-4">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-auto max-h-[55vh] object-cover rounded-lg"
          />
        </div>

        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Industry Credential</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{cert.title}</h3>
          <p className="text-xs text-slate-600 dark:text-gray-400">
            Issued by <span className="text-neon-blue dark:text-neon-cyan font-semibold">{cert.issuer}</span> • {cert.date}
          </p>
          <p className="text-xs font-mono text-slate-500 dark:text-gray-500">
            Credential ID: <span className="text-slate-700 dark:text-gray-300">{cert.credentialId}</span>
          </p>

          <div className="pt-3">
            <a
              href={cert.verificationUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>Verify on Issuer Registry</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <Section id="certifications" title="Verified Accreditations" className="bg-slate-100/70 dark:bg-[#080d19] relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map(cert => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer bg-white dark:bg-[#0c1322]/90 border border-slate-200 dark:border-gray-800 hover:border-slate-300 dark:hover:border-gray-700 p-5 rounded-2xl shadow-sm dark:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden rounded-xl mb-4 h-36 bg-slate-50 dark:bg-[#070b14] border border-slate-200 dark:border-gray-800">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0c1322] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-2 right-2 p-1 rounded-full bg-black/60 backdrop-blur-md text-neon-cyan border border-neon-cyan/30">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-neon-blue dark:group-hover:text-neon-cyan transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-neon-blue dark:text-neon-cyan font-semibold mt-1">{cert.issuer}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-gray-400">
                <span>{cert.date}</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-sans font-medium text-[10px]">
                  <CheckCircle className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </Section>
  );
};

export default Certifications;

