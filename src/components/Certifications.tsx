"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { certifications, Certification } from "@/data/certifications";

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    }
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section className="py-20 md:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[12px] font-mono-meta tracking-[0.2em] uppercase text-[var(--accent)] block mb-3">
            CREDENTIALS
          </span>
          <h2 className="text-[36px] sm:text-[46px] md:text-[52px] font-bold tracking-tight text-[var(--text)] leading-tight">
            CERTIFICATIONS
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[var(--text-secondary)] mt-3">
            Verified course completions and technical specializations. Click to view credential.
          </p>
        </div>

        {/* Clean Minimal List/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <button
              type="button"
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="text-left p-6 rounded-[4px] border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-md transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono-meta text-[var(--accent)] tracking-wider uppercase block mb-1">
                  {cert.issuer}
                </span>
                <h3 className="text-[17px] font-bold text-[var(--text)] tracking-tight group-hover:text-[var(--text)]">
                  {cert.title}
                </h3>
              </div>
              <div className="pt-4 mt-4 border-t border-[var(--border)] flex items-center justify-between text-[12px] font-mono-meta text-[var(--text-secondary)]">
                <span>{cert.year || "VERIFIED"}</span>
                <span className="uppercase text-[var(--text)] group-hover:text-[var(--accent)] font-sans font-medium flex items-center gap-1.5 transition-colors">
                  <span>VIEW PREVIEW</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-[6px] border border-[var(--border)] bg-[var(--bg)] p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[var(--border)] pb-3">
              <div>
                <span className="text-[11px] font-mono-meta text-[var(--accent)] tracking-wider uppercase">
                  {selectedCert.issuer}
                </span>
                <h4 className="text-[20px] font-bold text-[var(--text)]">
                  {selectedCert.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="text-[13px] font-mono-meta uppercase tracking-wider px-3 py-1 border border-[var(--border)] rounded hover:bg-[var(--bg-secondary)] text-[var(--text)] cursor-pointer"
              >
                CLOSE [ESC]
              </button>
            </div>

            {/* Certificate Image Canvas */}
            <div className="relative aspect-[10/7] w-full overflow-hidden rounded border border-[var(--border)] bg-[#141413]">
              <Image
                src={selectedCert.image}
                alt={`${selectedCert.issuer} - ${selectedCert.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                className="object-contain"
              />
            </div>

            {/* Modal Footer Meta */}
            <div className="flex items-center justify-between text-[12px] font-mono-meta text-[var(--text-secondary)] pt-2">
              <span>CREDENTIAL ID: {selectedCert.credentialId}</span>
              <span>ISSUED: {selectedCert.year}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
