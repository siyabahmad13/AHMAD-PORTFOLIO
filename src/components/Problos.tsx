import React from "react";
import Image from "next/image";

export function Problos() {
  return (
    <section className="py-20 md:py-28 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="rounded-[6px] border border-[#2c2c28] bg-[#141413] text-[#F5F5F2] p-8 sm:p-14 lg:p-16 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[12px] font-mono-meta tracking-[0.25em] uppercase text-[#7A9E7E] block mb-2 font-medium">
                  BUSINESS VENTURE
                </span>
                <span className="text-[14px] font-mono-meta tracking-[0.15em] uppercase text-[#A3A3A0] block">
                  PROBLOS · CO-FOUNDER
                </span>
              </div>

              <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold tracking-tight text-[#F5F5F2] leading-[1.1]">
                Building software for real-world problems.
              </h2>

              <p className="text-[16px] sm:text-[17px] text-[#A3A3A0] leading-relaxed">
                Problos is a software solutions venture focused on websites,
                software systems and digital products. We work with businesses
                to design and deploy durable technical infrastructure with
                modern standards.
              </p>

              <div className="pt-3">
                <a
                  href="https://problos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 bg-[#F5F5F2] text-[#111111] hover:bg-white hover:-translate-y-0.5 cursor-pointer shadow-xs"
                >
                  <span>VISIT PROBLOS</span>
                  <span className="text-[14px]">→</span>
                </a>
              </div>
            </div>

            {/* Right Visual Showcase */}
            <div className="lg:col-span-6">
              <div className="group/problos relative w-full overflow-hidden rounded-[4px] border border-[#2c2c28] bg-[#0d0d0c] shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#40403c] hover:-translate-y-1 hover:shadow-xl">
                <Image
                  src="/images/problos.jpg"
                  alt="Problos Software Solutions Venture"
                  width={1600}
                  height={1200}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="block w-full h-auto grayscale-[15%] contrast-[0.98] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/problos:scale-[1.02] group-hover/problos:grayscale-0 group-hover/problos:contrast-[1.02]"
                />
                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/problos:opacity-100 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
