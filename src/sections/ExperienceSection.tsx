"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, Building2, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".timeline-card", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".timeline-spine", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const { experiences } = portfolioData;

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 md:py-32 bg-[#0c1211] relative border-t border-[#aeccc6]/10"
      aria-label="Experience & Internship Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          title="Experience & Internship"
          subtitle="Practical industry immersion, technical learning, and customer communication roles."
        />

        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
          {/* Timeline Vertical Spine */}
          <div className="timeline-spine absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#bbe9db] via-[#aeccc6]/40 to-[#757a79]/20" />

          <div className="flex flex-col gap-10 sm:gap-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.organization}-${exp.role}`}
                className="timeline-card relative group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[30px] sm:-left-[43px] top-6 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#121918] border-2 border-[#bbe9db] flex items-center justify-center text-[#bbe9db] shadow-[0_0_12px_rgba(187,233,219,0.3)] z-10 transition-transform group-hover:scale-110">
                  <div className="w-2 h-2 rounded-full bg-[#bbe9db]" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#121918] border border-[#aeccc6]/20 group-hover:border-[#bbe9db] group-hover:bg-[#16201e] transition-all duration-300 shadow-xl">
                  {/* Top Bar: Badge, Period, Location */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#16201e] border border-[#aeccc6]/25 text-[#bbe9db]">
                      {exp.type}
                    </span>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#9ba6a5]">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#aeccc6]" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#aeccc6]" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Role & Organization */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f0f9f6] mb-1">
                    {exp.role}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#aeccc6] mb-6">
                    <Building2 className="w-4 h-4 text-[#bbe9db]" />
                    <span>{exp.organization}</span>
                  </div>

                  {/* Responsibilities / Highlights List */}
                  <ul className="flex flex-col gap-2.5">
                    {exp.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#9ba6a5] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#bbe9db] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
