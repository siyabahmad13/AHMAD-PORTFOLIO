import React from "react";
import { Hero } from "@/components/Hero";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { Initiatives } from "@/components/Initiatives";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Interests } from "@/components/Interests";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      {/* 2. HERO */}
      <Hero />

      {/* 3. SELECTED WORK / PROJECT CAROUSEL */}
      <ProjectCarousel />

      {/* 4. ABOUT */}
      <About />

      {/* 5. EXPERIENCE */}
      <Experience />

      {/* 6. SKILLS */}
      <Skills />

      {/* 7. EDUCATION */}
      <Education />

      {/* 8. CERTIFICATIONS */}
      <Certifications />

      {/* 9. INITIATIVES */}
      <Initiatives />

      {/* 10. INTERESTS */}
      <Interests />

      {/* 10. CONTACT */}
      <Contact />
    </main>
  );
}
