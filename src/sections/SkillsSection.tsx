"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Terminal, Code2, FileCode, Cpu, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const { skills } = portfolioData;

  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "python":
        return <Code2 className="w-6 h-6 text-[#bbe9db]" />;
      case "html":
        return <FileCode className="w-6 h-6 text-[#bbe9db]" />;
      case "css":
        return <LayersIcon className="w-6 h-6 text-[#bbe9db]" />;
      case "linux systems":
        return <Terminal className="w-6 h-6 text-[#bbe9db]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#bbe9db]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 md:py-32 bg-[#0a100f] relative border-t border-[#aeccc6]/10"
      aria-label="Technical Skills Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          title="Technical Skills"
          subtitle="Core programming languages, web fundamentals, and system environments."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group p-6 sm:p-7 rounded-2xl bg-[#121918] border border-[#aeccc6]/20 hover:border-[#bbe9db] hover:bg-[#16201e] transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#16201e] group-hover:bg-[#1a2523] border border-[#aeccc6]/25 group-hover:border-[#bbe9db]/40 flex items-center justify-center transition-colors">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="font-mono text-xs text-[#757a79] group-hover:text-[#aeccc6] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[#aeccc6] mb-1.5">
                  {skill.category}
                </div>

                <h3 className="text-xl font-bold text-[#f0f9f6] group-hover:text-[#bbe9db] transition-colors mb-3">
                  {skill.name}
                </h3>

                {skill.note && (
                  <p className="text-sm text-[#9ba6a5] leading-relaxed">
                    {skill.note}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#aeccc6]/15 flex items-center gap-2 text-xs font-mono text-[#aeccc6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#bbe9db]" />
                <span>Verified Foundation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
