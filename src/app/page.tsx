import React from "react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { OtherWork } from "@/components/OtherWork";
import { Problos } from "@/components/Problos";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      {/* 2. HERO */}
      <Hero />

      {/* 3. SELECTED WORK */}
      <Projects />

      {/* 4. ABOUT */}
      <About />

      {/* 5. EXPERIENCE */}
      <Experience />

      {/* 6. OTHER WORK */}
      <OtherWork />

      {/* 7. PROBLOS */}
      <Problos />

      {/* 8. SKILLS */}
      <Skills />

      {/* 9. CERTIFICATIONS */}
      <Certifications />

      {/* 10. CONTACT */}
      <Contact />
    </main>
  );
}
