"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-card", {
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

  const { personal } = portfolioData;

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link as reliable client fallback
    const subjectLine = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subjectLine}&body=${bodyContent}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 bg-[#0c1211] relative border-t border-[#aeccc6]/10"
      aria-label="Contact Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          title="Get In Touch"
          subtitle="Interested in junior developer roles, collaborations, or tech discussions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="contact-card lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-[#121918] border border-[#aeccc6]/20 shadow-xl">
              <h3 className="text-xl font-bold text-[#f0f9f6] mb-2">
                Direct Contact
              </h3>
              <p className="text-sm text-[#9ba6a5] mb-6 leading-relaxed">
                Reach out directly via email or phone. I am actively looking for entry-level software opportunities.
              </p>

              <div className="flex flex-col gap-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-[#16201e] border border-[#aeccc6]/15 flex items-center justify-between group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#121918] border border-[#aeccc6]/20 flex items-center justify-center text-[#bbe9db] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-mono text-[#9ba6a5] uppercase">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-sm font-semibold text-[#f0f9f6] hover:text-[#bbe9db] transition-colors truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(personal.email, "email")}
                    aria-label="Copy email address"
                    className="p-2 rounded-lg bg-[#121918] text-[#aeccc6] hover:text-[#bbe9db] transition-colors shrink-0 ml-2 focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#bbe9db]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-[#16201e] border border-[#aeccc6]/15 flex items-center justify-between group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#121918] border border-[#aeccc6]/20 flex items-center justify-center text-[#bbe9db] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[11px] font-mono text-[#9ba6a5] uppercase">
                        Phone Number
                      </span>
                      <a
                        href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                        className="text-sm font-semibold text-[#f0f9f6] hover:text-[#bbe9db] transition-colors truncate block"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(personal.phone, "phone")}
                    aria-label="Copy phone number"
                    className="p-2 rounded-lg bg-[#121918] text-[#aeccc6] hover:text-[#bbe9db] transition-colors shrink-0 ml-2 focus-visible:ring-2 focus-visible:ring-[#bbe9db]"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-[#bbe9db]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-[#16201e] border border-[#aeccc6]/15 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#121918] border border-[#aeccc6]/20 flex items-center justify-center text-[#bbe9db] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-[#9ba6a5] uppercase">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-[#f0f9f6]">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact-card lg:col-span-7 bg-[#121918] border border-[#aeccc6]/20 rounded-3xl p-8 sm:p-10 shadow-xl">
            <h3 className="text-xl font-bold text-[#f0f9f6] mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-[#9ba6a5] mb-6">
              Fill out this form to launch your email client directly with your message pre-filled.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#16201e] border border-[#bbe9db]/40 text-center animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#121918] border border-[#bbe9db] mx-auto flex items-center justify-center text-[#bbe9db] mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#f0f9f6] mb-1">
                  Message Prepared
                </h4>
                <p className="text-sm text-[#9ba6a5]">
                  Your mail client has been opened. You can also write directly to{" "}
                  <span className="text-[#bbe9db]">{personal.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#0a100f] bg-[#bbe9db] rounded-lg hover:bg-[#aeccc6]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#aeccc6] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#16201e] border border-[#aeccc6]/20 text-[#f0f9f6] placeholder-[#757a79] text-sm focus-visible:ring-2 focus-visible:ring-[#bbe9db] focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#aeccc6] mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#16201e] border border-[#aeccc6]/20 text-[#f0f9f6] placeholder-[#757a79] text-sm focus-visible:ring-2 focus-visible:ring-[#bbe9db] focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-[#aeccc6] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Opportunity or Inquiry Subject"
                    className="w-full px-4 py-3 rounded-xl bg-[#16201e] border border-[#aeccc6]/20 text-[#f0f9f6] placeholder-[#757a79] text-sm focus-visible:ring-2 focus-visible:ring-[#bbe9db] focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#aeccc6] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#16201e] border border-[#aeccc6]/20 text-[#f0f9f6] placeholder-[#757a79] text-sm focus-visible:ring-2 focus-visible:ring-[#bbe9db] focus:border-transparent transition-all outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={`mailto:${personal.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9ba6a5] hover:text-[#bbe9db] transition-colors"
                  >
                    <span>Or direct mailto</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#bbe9db] text-[#0a100f] font-semibold text-sm hover:bg-[#aeccc6] transition-all duration-200 shadow-[0_0_20px_rgba(187,233,219,0.25)] focus-visible:ring-2 focus-visible:ring-[#bbe9db] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Opening..." : "Send Message"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
