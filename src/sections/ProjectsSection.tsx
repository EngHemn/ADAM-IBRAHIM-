"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, ExternalLink, Code2, Home, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const { projects } = portfolioData;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-32 bg-[#0a100f] relative border-t border-[#aeccc6]/10"
      aria-label="Projects Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          title="Featured Projects"
          subtitle="Front-end development and practical application of web technologies."
        />

        <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card rounded-3xl bg-[#121918] border border-[#aeccc6]/20 overflow-hidden shadow-2xl hover:border-[#bbe9db]/60 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Visual Preview Side */}
                <div className="md:col-span-6 bg-gradient-to-br from-[#16201e] via-[#121918] to-[#0a100f] p-8 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#aeccc6]/15 relative overflow-hidden">
                  {/* Decorative ambient glow */}
                  <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#bbe9db]/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Browser-like window header */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#aeccc6]/15">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#757a79]/50" />
                      <span className="w-3 h-3 rounded-full bg-[#aeccc6]/50" />
                      <span className="w-3 h-3 rounded-full bg-[#bbe9db]/50" />
                    </div>
                    <span className="text-[11px] font-mono text-[#9ba6a5]">
                      real-estate-project.local
                    </span>
                  </div>

                  {/* Mockup Graphics */}
                  <div className="my-8 p-6 rounded-2xl bg-[#0a100f]/80 border border-[#aeccc6]/20 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#16201e] border border-[#aeccc6]/30 flex items-center justify-center text-[#bbe9db]">
                        <Home className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="h-3 w-28 bg-[#aeccc6]/40 rounded-full" />
                        <div className="h-2 w-16 bg-[#757a79]/40 rounded-full mt-1.5" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="h-20 rounded-xl bg-[#16201e] border border-[#aeccc6]/15 flex items-center justify-center">
                        <Layout className="w-6 h-6 text-[#9ba6a5]" />
                      </div>
                      <div className="h-20 rounded-xl bg-[#16201e] border border-[#aeccc6]/15 flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-[#9ba6a5]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#aeccc6]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#bbe9db]" />
                    <span>Responsive Layout & Semantic Structure</span>
                  </div>
                </div>

                {/* Content & Metadata Side */}
                <div className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#bbe9db] uppercase tracking-wider mb-2">
                      <span>Web Project</span>
                      <span>•</span>
                      <span>Front-End</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#f0f9f6] mb-4">
                      {project.title}
                    </h3>

                    <p className="text-base text-[#9ba6a5] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#16201e] text-[#aeccc6] border border-[#aeccc6]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Clean Placeholders for Links */}
                  <div className="pt-6 border-t border-[#aeccc6]/15 flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveUrlPlaceholder}
                      title="Live Demo Placeholder"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#bbe9db] text-[#0a100f] font-semibold text-xs uppercase tracking-wider hover:bg-[#aeccc6] transition-colors focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                    </a>

                    <a
                      href={project.codeUrlPlaceholder}
                      title="Source Code Placeholder"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#16201e] text-[#aeccc6] border border-[#aeccc6]/25 font-semibold text-xs uppercase tracking-wider hover:text-[#f0f9f6] hover:border-[#bbe9db] transition-colors focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
                    >
                      <Code2 className="w-3.5 h-3.5 text-[#bbe9db]" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
