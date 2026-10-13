"use client";

import { ArrowUp, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal, socialPlaceholders } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0a100f] border-t border-[#aeccc6]/15 py-12 text-[#9ba6a5] relative"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#aeccc6]/10">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 text-[#f0f9f6] font-semibold mb-1">
              <div className="w-7 h-7 rounded-lg bg-[#16201e] border border-[#aeccc6]/30 flex items-center justify-center text-[#bbe9db]">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <span>{personal.name}</span>
            </div>
            <p className="text-xs font-mono text-[#9ba6a5]">
              {personal.title} • {personal.location}
            </p>
          </div>

          {/* Clean Social Links (Placeholders) with SVG icons */}
          <div className="flex items-center gap-3">
            {socialPlaceholders.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${social.label} Profile Placeholder`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121918] border border-[#aeccc6]/20 text-xs font-mono text-[#aeccc6] hover:text-[#f0f9f6] hover:border-[#bbe9db] hover:bg-[#16201e] transition-colors focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
              >
                {social.label === "GitHub" ? (
                  <GithubIcon className="w-3.5 h-3.5 text-[#bbe9db]" />
                ) : (
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#bbe9db]" />
                )}
                <span>{social.label}</span>
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121918] border border-[#aeccc6]/20 text-xs font-mono text-[#aeccc6] hover:text-[#f0f9f6] hover:border-[#bbe9db] hover:bg-[#16201e] transition-colors focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#bbe9db] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#757a79] gap-4">
          <p>
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Designed with Next.js, Three.js, GSAP & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
