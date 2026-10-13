"use client";

import { useState, useMemo } from "react";
import {
  Code2,
  FileCode,
  Layers,
  Terminal,
  GitBranch,
  Cpu,
  Database,
  Users,
  Search,
  X,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Filter,
  GraduationCap,
  Building2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalSkill, setActiveModalSkill] = useState<(typeof skills)[0] | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(skills.map((s) => s.category)));
    return ["All", ...cats];
  }, [skills]);

  // Filter skills based on category and search query
  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory =
        selectedCategory === "All" || skill.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.note && skill.note.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (skill.highlights &&
          skill.highlights.some((h) =>
            h.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedCategory, searchQuery]);

  const getSkillIcon = (iconName?: string) => {
    const iconClass = "w-6 h-6 text-[#bbe9db]";
    switch (iconName?.toLowerCase()) {
      case "python":
        return <Code2 className={iconClass} />;
      case "html":
        return <FileCode className={iconClass} />;
      case "css":
        return <Layers className={iconClass} />;
      case "linux":
        return <Terminal className={iconClass} />;
      case "git":
        return <GitBranch className={iconClass} />;
      case "engineering":
        return <Cpu className={iconClass} />;
      case "database":
        return <Database className={iconClass} />;
      case "communication":
        return <Users className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#0a100f] relative border-t border-[#aeccc6]/10"
      aria-label="Technical Skills Section"
    >
      {/* Background subtle radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#bbe9db]/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="02"
          title="Technical Skills"
          subtitle="Core programming foundations, modern web engineering, and system environments."
        />

        {/* Quick Highlights Stats Strip */}
        <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-[#121918]/80 border border-[#aeccc6]/15 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16201e] border border-[#aeccc6]/25 flex items-center justify-center text-[#bbe9db] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#f0f9f6]">{skills.length} Competencies</div>
              <div className="text-xs text-[#9ba6a5] font-mono">Curated & Verified</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#121918]/80 border border-[#aeccc6]/15 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16201e] border border-[#aeccc6]/25 flex items-center justify-center text-[#bbe9db] shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#f0f9f6]">B.Sc. Degree</div>
              <div className="text-xs text-[#9ba6a5] font-mono">Salahaddin Univ.</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#121918]/80 border border-[#aeccc6]/15 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16201e] border border-[#aeccc6]/25 flex items-center justify-center text-[#bbe9db] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#f0f9f6]">Telecom Intern</div>
              <div className="text-xs text-[#9ba6a5] font-mono">Korek Telecom</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#121918]/80 border border-[#aeccc6]/15 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16201e] border border-[#aeccc6]/25 flex items-center justify-center text-[#bbe9db] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#f0f9f6]">Junior Developer</div>
              <div className="text-xs text-[#9ba6a5] font-mono">Ready to Contribute</div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-xs font-mono text-[#757a79] flex items-center gap-1.5 mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? skills.length
                  : skills.filter((s) => s.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 shrink-0 flex items-center gap-2 border ${
                    isActive
                      ? "bg-[#bbe9db] text-[#0a100f] border-[#bbe9db] font-semibold shadow-[0_0_15px_rgba(187,233,219,0.3)]"
                      : "bg-[#121918] text-[#aeccc6] border-[#aeccc6]/20 hover:border-[#bbe9db]/40 hover:bg-[#16201e] hover:text-[#f0f9f6]"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-md text-[10px] ${
                      isActive
                        ? "bg-[#0a100f]/20 text-[#0a100f]"
                        : "bg-[#16201e] text-[#9ba6a5]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#757a79] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              aria-label="Search skills"
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#121918] border border-[#aeccc6]/20 text-xs font-mono text-[#f0f9f6] placeholder-[#757a79] focus:outline-none focus:border-[#bbe9db] focus:ring-1 focus:ring-[#bbe9db] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#757a79] hover:text-[#f0f9f6] p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid - Guaranteed Visible & Interactive */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#121918]/50 border border-[#aeccc6]/15">
            <p className="text-sm font-mono text-[#9ba6a5] mb-3">
              No technical skills matched &quot;{searchQuery}&quot; in category &quot;{selectedCategory}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-[#16201e] border border-[#aeccc6]/30 text-xs font-mono text-[#bbe9db] hover:bg-[#1a2523]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                onClick={() => setActiveModalSkill(skill)}
                className="group p-6 sm:p-7 rounded-2xl bg-[#121918] border border-[#aeccc6]/20 hover:border-[#bbe9db] hover:bg-[#16201e] transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveModalSkill(skill);
                  }
                }}
                aria-label={`View details for ${skill.name}`}
              >
                <div>
                  {/* Card Header: Icon & Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#16201e] group-hover:bg-[#1a2523] border border-[#aeccc6]/25 group-hover:border-[#bbe9db]/50 flex items-center justify-center transition-colors shadow-inner">
                      {getSkillIcon(skill.icon)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#757a79] group-hover:text-[#aeccc6] transition-colors">
                        0{index + 1}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#757a79] group-hover:text-[#bbe9db] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#aeccc6] mb-1">
                    {skill.category}
                  </div>

                  <h3 className="text-xl font-bold text-[#f0f9f6] group-hover:text-[#bbe9db] transition-colors mb-2">
                    {skill.name}
                  </h3>

                  {skill.note && (
                    <p className="text-xs text-[#9ba6a5] leading-relaxed mb-4">
                      {skill.note}
                    </p>
                  )}

                  {/* Proficiency Bar */}
                  {skill.percentage && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#9ba6a5] mb-1.5">
                        <span className="text-[#aeccc6]">{skill.level || "Proficiency"}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#16201e] rounded-full overflow-hidden border border-[#aeccc6]/10">
                        <div
                          className="h-full bg-gradient-to-r from-[#81c7b5] to-[#bbe9db] rounded-full transition-all duration-500 group-hover:brightness-110"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Highlights Chips */}
                  {skill.highlights && skill.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {skill.highlights.slice(0, 3).map((hl) => (
                        <span
                          key={hl}
                          className="px-2 py-0.5 rounded-md bg-[#16201e] border border-[#aeccc6]/15 text-[10px] font-mono text-[#aeccc6]"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-[#aeccc6]/15 flex items-center justify-between text-xs font-mono text-[#aeccc6]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#bbe9db]" />
                    <span>Verified Foundation</span>
                  </div>
                  <span className="text-[11px] text-[#757a79] group-hover:text-[#bbe9db] underline decoration-[#aeccc6]/30 underline-offset-2">
                    Details
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skill Detail Modal */}
        {activeModalSkill && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveModalSkill(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-skill-title"
          >
            <div
              className="relative w-full max-w-lg rounded-3xl bg-[#121918] border border-[#bbe9db]/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalSkill(null)}
                aria-label="Close skill details"
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#16201e] text-[#9ba6a5] hover:text-[#f0f9f6] hover:bg-[#1a2523] border border-[#aeccc6]/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#16201e] border border-[#bbe9db]/40 flex items-center justify-center">
                  {getSkillIcon(activeModalSkill.icon)}
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#aeccc6]">
                    {activeModalSkill.category}
                  </div>
                  <h3
                    id="modal-skill-title"
                    className="text-2xl font-bold text-[#f0f9f6]"
                  >
                    {activeModalSkill.name}
                  </h3>
                </div>
              </div>

              {/* Proficiency Level Banner */}
              {activeModalSkill.level && (
                <div className="mb-6 p-4 rounded-xl bg-[#16201e] border border-[#aeccc6]/20 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#9ba6a5] block">Proficiency Status</span>
                    <span className="text-sm font-semibold text-[#bbe9db]">
                      {activeModalSkill.level}
                    </span>
                  </div>
                  {activeModalSkill.percentage && (
                    <span className="text-lg font-mono font-bold text-[#f0f9f6]">
                      {activeModalSkill.percentage}%
                    </span>
                  )}
                </div>
              )}

              {/* Detailed Description */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#757a79] mb-2">
                  Academic & Practical Context
                </h4>
                <p className="text-sm text-[#f0f9f6]/90 leading-relaxed">
                  {activeModalSkill.details || activeModalSkill.note}
                </p>
              </div>

              {/* Highlights & Competencies */}
              {activeModalSkill.highlights && activeModalSkill.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#757a79] mb-3">
                    Key Topics & Competencies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalSkill.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-[#16201e]/60 border border-[#aeccc6]/15 text-xs text-[#aeccc6]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#bbe9db] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action / Dismiss */}
              <div className="pt-4 border-t border-[#aeccc6]/15 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModalSkill(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#bbe9db] text-[#0a100f] font-semibold text-xs font-mono hover:bg-[#81c7b5] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
