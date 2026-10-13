"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GraduationCap, Languages, Compass, Award } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const { personal, languages } = portfolioData;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-[#0c1211] relative border-t border-[#aeccc6]/10"
      aria-label="About Me Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          title="About Me"
          subtitle="Background, academic qualifications, and language proficiencies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Summary Narrative Card */}
          <div className="about-reveal lg:col-span-7 bg-[#121918] border border-[#aeccc6]/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#bbe9db]/10 to-transparent pointer-events-none rounded-bl-full" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#16201e] border border-[#aeccc6]/25 flex items-center justify-center text-[#bbe9db]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#f0f9f6]">Professional Overview</h3>
            </div>

            <p className="text-base sm:text-lg text-[#9ba6a5] leading-relaxed mb-6">
              {personal.summary}
            </p>

            <div className="p-4 rounded-2xl bg-[#16201e] border border-[#aeccc6]/15 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#121918] border border-[#aeccc6]/20 flex items-center justify-center text-[#bbe9db] shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#f0f9f6]">Core Interests</h4>
                <p className="text-xs sm:text-sm text-[#9ba6a5] mt-0.5">
                  Software development, Linux systems, and computing technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Languages Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Education Card */}
            <div className="about-reveal bg-[#121918] border border-[#aeccc6]/20 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#16201e] border border-[#aeccc6]/25 flex items-center justify-center text-[#bbe9db]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f0f9f6]">Education</h3>
                  <p className="text-xs font-mono text-[#aeccc6]">Academic Degree</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#16201e] border border-[#aeccc6]/15">
                <h4 className="text-base font-semibold text-[#f0f9f6]">
                  {personal.education.degree}
                </h4>
                <p className="text-sm text-[#aeccc6] mt-1">
                  {personal.education.institution}
                </p>
              </div>
            </div>

            {/* Languages Card */}
            <div className="about-reveal bg-[#121918] border border-[#aeccc6]/20 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#16201e] border border-[#aeccc6]/25 flex items-center justify-center text-[#bbe9db]">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f0f9f6]">Languages</h3>
                  <p className="text-xs font-mono text-[#aeccc6]">Communication</p>
                </div>
              </div>

              <div className="flex flex-col gap-3.5">
                {languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-3.5 rounded-xl bg-[#16201e] border border-[#aeccc6]/15 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-[#f0f9f6]">
                      {lang.language}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#121918] text-[#bbe9db] border border-[#aeccc6]/20">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
