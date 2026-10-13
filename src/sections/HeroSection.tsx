"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { MapPin, Mail, ArrowRight, Terminal, Sparkles } from "lucide-react";
import ThreeHeroSceneWrapper from "@/components/ThreeHeroSceneWrapper";
import { portfolioData } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Staggered intro animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 30,
            duration: 0.9,
            stagger: 0.15,
          },
          "-=0.4"
        )
        .from(
          ".hero-intro",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.5"
        )
        .from(
          ".hero-image-box",
          {
            opacity: 0,
            scale: 0.92,
            duration: 1.1,
            ease: "back.out(1.2)",
          },
          "-=0.8"
        );

      // Parallax scroll on the hero image
      if (imageWrapperRef.current) {
        gsap.to(imageWrapperRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const { personal } = portfolioData;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#0a100f]"
      aria-label="Hero Section"
    >
      {/* Three.js 3D Background Scene */}
      <ThreeHeroSceneWrapper />

      {/* Subtle ambient gradient overlay to maintain high text contrast */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(187,233,219,0.08),rgba(10,16,15,0.95))]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div ref={textGroupRef} className="lg:col-span-7 flex flex-col items-start">
            {/* Status / Location Badge */}
            <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121918]/90 border border-[#aeccc6]/25 backdrop-blur-md mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bbe9db] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bbe9db]" />
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#aeccc6]">
                Available for Junior Roles
              </span>
              <span className="text-[#757a79]">|</span>
              <span className="inline-flex items-center gap-1 text-xs text-[#9ba6a5]">
                <MapPin className="w-3 h-3 text-[#bbe9db]" />
                {personal.location}
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#f0f9f6] leading-[1.08] mb-6">
              <span className="hero-title-line block text-[#aeccc6] font-mono text-lg sm:text-xl font-normal mb-2 tracking-normal">
                Hello, I am
              </span>
              <span className="hero-title-line block text-[#f0f9f6]">
                {personal.name}
              </span>
              <span className="hero-title-line block text-transparent bg-clip-text bg-gradient-to-r from-[#bbe9db] via-[#aeccc6] to-[#9ba6a5]">
                {personal.title}
              </span>
            </h1>

            {/* Introduction summary */}
            <p className="hero-intro text-base sm:text-lg text-[#9ba6a5] leading-relaxed max-w-2xl mb-8">
              {personal.summary}
            </p>

            {/* Call to Action Buttons */}
            <div className="hero-cta flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#bbe9db] text-[#0a100f] font-semibold text-sm hover:bg-[#aeccc6] transition-all duration-200 shadow-[0_0_20px_rgba(187,233,219,0.25)] focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
              >
                View Experience
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#121918] text-[#aeccc6] border border-[#aeccc6]/25 font-semibold text-sm hover:text-[#f0f9f6] hover:border-[#bbe9db] hover:bg-[#16201e] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
              >
                <Mail className="w-4 h-4 text-[#bbe9db]" />
                Contact Me
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono text-[#9ba6a5] hover:text-[#bbe9db] transition-colors"
              >
                <Terminal className="w-4 h-4" />
                <span>Explore Projects</span>
              </a>
            </div>
          </div>

          {/* Right Column: Themed Portrait Photo with 3D Aura Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={imageWrapperRef}
              className="hero-image-box relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-[#16201e] to-[#101716] border border-[#aeccc6]/20 shadow-2xl shadow-black/60 group"
            >
              {/* Decorative corner markers */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#bbe9db]/60 rounded-tl" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#bbe9db]/60 rounded-tr" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#bbe9db]/60 rounded-bl" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-[#bbe9db]/60 rounded-br" />

              {/* Glowing backing shape */}
              <div
                className="absolute inset-8 rounded-2xl bg-gradient-to-tr from-[#757a79]/20 via-[#aeccc6]/15 to-[#bbe9db]/20 blur-xl -z-10 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />

              {/* Themed photo frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0c1211] border border-[#aeccc6]/10 flex items-end justify-center">
                <Image
                  src="/person-themed.png"
                  alt="Portrait photo of Adam Ibrahim Ismail, Junior Software Developer"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtitle tag overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0a100f]/85 backdrop-blur-md border border-[#aeccc6]/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#f0f9f6]">
                      {personal.name}
                    </div>
                    <div className="text-[11px] font-mono text-[#aeccc6]">
                      {personal.education.institution}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#16201e] border border-[#aeccc6]/25 flex items-center justify-center text-[#bbe9db]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
