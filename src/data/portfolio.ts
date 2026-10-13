export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    summary: string;
    education: {
      degree: string;
      institution: string;
    };
  };
  skills: {
    name: string;
    category: string;
    note?: string;
    level?: string;
    percentage?: number;
    highlights?: string[];
    details?: string;
    icon?: string;
  }[];
  experiences: {
    role: string;
    organization: string;
    location?: string;
    period: string;
    type: "Internship" | "Work Experience";
    highlights: string[];
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    liveUrlPlaceholder: string;
    codeUrlPlaceholder: string;
  }[];
  languages: {
    language: string;
    proficiency: string;
    levelPercentage: number;
  }[];
  socialPlaceholders: {
    label: string;
    url: string;
    identifier: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Adam Ibrahim Ismail",
    title: "Junior Software Developer",
    location: "Erbil, Iraq",
    phone: "0750 725 8139",
    email: "adamibrahem100@gmail.com",
    summary:
      "Software Engineering graduate from Salahaddin University seeking an entry-level opportunity as a Junior Software Developer. Interested in software development, Linux systems, and technology. Gained introductory workplace and systems knowledge through an internship at Korek Telecom, along with customer communication experience from a previous customer service role.",
    education: {
      degree: "Bachelor's Degree in Software Engineering",
      institution: "Salahaddin University",
    },
  },
  skills: [
    {
      name: "Python",
      category: "Programming",
      level: "Core Foundation",
      percentage: 78,
      note: "Core programming, scripting, algorithms, and modular logic",
      highlights: [
        "Object-Oriented Programming (OOP)",
        "Scripting & Automation",
        "Algorithmic Problem Solving",
        "Clean Modular Code",
      ],
      details:
        "Applied during software engineering coursework at Salahaddin University to solve computational problems, build algorithmic solutions, and write maintainable modular scripts.",
      icon: "python",
    },
    {
      name: "HTML5",
      category: "Web & Frontend",
      level: "Proficient Foundation",
      percentage: 85,
      note: "Semantic page structure, accessibility, and modern standards",
      highlights: [
        "Semantic Structure",
        "Accessibility (WCAG/a11y)",
        "Form Validation",
        "SEO-Friendly Markup",
      ],
      details:
        "Used as the foundation for web development projects, including a dedicated Real Estate Website project, ensuring accessible hierarchy and clean document structure.",
      icon: "html",
    },
    {
      name: "CSS3 & Modern Layouts",
      category: "Web & Frontend",
      level: "Proficient Foundation",
      percentage: 82,
      note: "Responsive layout design, Flexbox, CSS Grid, and UI styling",
      highlights: [
        "Flexbox & CSS Grid",
        "Mobile-First Responsive Design",
        "Transitions & Keyframes",
        "Cross-Browser Compatibility",
      ],
      details:
        "Extensively practiced crafting adaptive responsive layouts that maintain visual fidelity across desktops, tablets, and mobile smartphones.",
      icon: "css",
    },
    {
      name: "Linux Systems",
      category: "Systems & OS",
      level: "Practical Exposure",
      percentage: 70,
      note: "Telecom system exposure and command-line navigation",
      highlights: [
        "Bash & Command Line (CLI)",
        "File System Navigation",
        "Permissions & Process Monitoring",
        "Telecom Server Environments",
      ],
      details:
        "Gained hands-on workplace exposure during internship at Korek Telecom, working with Linux command-line tools, directory management, and understanding operational server systems.",
      icon: "linux",
    },
    {
      name: "Git & Version Control",
      category: "Developer Tools",
      level: "Practical Foundation",
      percentage: 75,
      note: "Source code tracking, GitHub workflows, and repository management",
      highlights: [
        "Repository Management",
        "Branching & Merging",
        "Commit Conventions",
        "GitHub Collaboration",
      ],
      details:
        "Utilized throughout university engineering assignments and personal projects to track code changes, manage version branches, and maintain project archives.",
      icon: "git",
    },
    {
      name: "Software Engineering & SDLC",
      category: "Core Fundamentals",
      level: "Academic Degree",
      percentage: 88,
      note: "Salahaddin University 4-year degree foundations in engineering",
      highlights: [
        "Software Development Life Cycle",
        "Requirements & Specification",
        "System Design Principles",
        "Debugging & Unit Testing",
      ],
      details:
        "Formally educated through the 4-year Software Engineering program at Salahaddin University, studying software architecture, development lifecycles, and verification methodologies.",
      icon: "engineering",
    },
    {
      name: "Relational Databases & SQL",
      category: "Core Fundamentals",
      level: "Academic Foundation",
      percentage: 68,
      note: "Database concepts, relational modeling, and SQL queries",
      highlights: [
        "Relational Schema Design",
        "SQL CRUD Operations",
        "Primary & Foreign Keys",
        "Basic Joins & Filtering",
      ],
      details:
        "Studied database management systems at university, practicing relational entity relationships, table schemas, and writing structured SQL queries.",
      icon: "database",
    },
    {
      name: "Client Communication & Teamwork",
      category: "Professional Skills",
      level: "Workplace Experience",
      percentage: 85,
      note: "Customer support at Homely & telecom team collaboration",
      highlights: [
        "Professional Communication",
        "Active Listening",
        "Conflict Resolution",
        "Cross-functional Teamwork",
      ],
      details:
        "Demonstrated through hands-on role as Customer Service Representative at Homely and team immersion at Korek Telecom, collaborating with peers and communicating clearly.",
      icon: "communication",
    },
  ],
  experiences: [
    {
      role: "Software Engineering Intern",
      organization: "Korek Telecom",
      location: "Erbil, Iraq",
      period: "August 2025 – September 2025",
      type: "Internship",
      highlights: [
        "Gained an understanding of employees' roles and responsibilities across the company.",
        "Learned about the company's systems and gained exposure to Linux systems.",
      ],
    },
    {
      role: "Customer Service Representative",
      organization: "Homely",
      period: "Prior Role",
      type: "Work Experience",
      highlights: [
        "Assisted customers with inquiries and service-related needs.",
        "Communicated professionally with customers and helped address their concerns.",
        "Developed interpersonal and customer service skills.",
      ],
    },
  ],
  projects: [
    {
      title: "Real Estate Website",
      description:
        "A real estate website built with HTML and CSS, applying web development knowledge.",
      technologies: ["HTML", "CSS"],
      liveUrlPlaceholder: "#live-demo-placeholder",
      codeUrlPlaceholder: "#source-code-placeholder",
    },
  ],
  languages: [
    {
      language: "Kurdish",
      proficiency: "Native",
      levelPercentage: 100,
    },
    {
      language: "Arabic",
      proficiency: "Intermediate",
      levelPercentage: 65,
    },
    {
      language: "English",
      proficiency: "Intermediate",
      levelPercentage: 65,
    },
  ],
  socialPlaceholders: [
    {
      label: "GitHub",
      url: "https://github.com/username-placeholder",
      identifier: "github.com/placeholder",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/username-placeholder",
      identifier: "linkedin.com/in/placeholder",
    },
  ],
};
