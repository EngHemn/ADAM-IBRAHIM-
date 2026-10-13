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
      category: "Programming Language",
      note: "Core programming and scripting foundations",
    },
    {
      name: "HTML",
      category: "Web Development",
      note: "Semantic page structure and accessibility",
    },
    {
      name: "CSS",
      category: "Web Development",
      note: "Responsive layout design and styling",
    },
    {
      name: "Linux Systems",
      category: "Operating Systems",
      note: "Introductory exposure through internship",
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
