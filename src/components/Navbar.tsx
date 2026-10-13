"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a100f]/85 backdrop-blur-md border-b border-[#aeccc6]/15 py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-base sm:text-lg font-semibold tracking-tight text-[#f0f9f6] transition-colors focus-visible:ring-2 focus-visible:ring-[#bbe9db] rounded-md px-1"
          >
            <div className="w-8 h-8 rounded-lg bg-[#16201e] border border-[#aeccc6]/30 flex items-center justify-center text-[#bbe9db] group-hover:border-[#bbe9db] transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight group-hover:text-[#bbe9db] transition-colors">
                Adam Ibrahim
              </span>
              <span className="text-[11px] font-mono text-[#9ba6a5] tracking-wide">
                Junior Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121918]/60 border border-[#aeccc6]/20 px-3 py-1.5 rounded-full backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-sm text-[#aeccc6] hover:text-[#f0f9f6] hover:bg-[#16201e] rounded-full transition-all focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA / Quick Contact (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#0a100f] bg-[#bbe9db] hover:bg-[#aeccc6] rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(187,233,219,0.25)] focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            className="md:hidden p-2 rounded-lg bg-[#16201e] border border-[#aeccc6]/20 text-[#bbe9db] hover:border-[#bbe9db] transition-colors focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[61px] bg-[#0a100f]/95 backdrop-blur-xl z-50 md:hidden flex flex-col justify-between p-6 border-t border-[#aeccc6]/15 animate-in fade-in duration-200"
        >
          <nav className="flex flex-col gap-2 pt-4">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-4 py-3.5 text-lg font-medium text-[#f0f9f6] hover:text-[#bbe9db] hover:bg-[#16201e] rounded-xl transition-colors border border-transparent hover:border-[#aeccc6]/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#9ba6a5]">0{index + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#aeccc6]/15 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold uppercase tracking-wider text-[#0a100f] bg-[#bbe9db] hover:bg-[#aeccc6] rounded-xl transition-colors"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-xs font-mono text-[#9ba6a5] pt-2">
              Erbil, Iraq
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
