export default {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    training: "Training",
    contact: "Contact",
  },
  home: {
    hero: {
      title: "Elmas Oulobo",
      role: "Web Developer & Data Scientist",
      tagline: "Transform your ideas into web applications and your data into strategic decisions.",
      cta1: "View my projects",
      cta2: "Contact me",
    },
    about: {
      title: "About",
      description: "18-year-old developer passionate about creating web applications and data analysis. Master's student in Data Science at UFHB (Abidjan), I master modern technologies and seek to put my skills at the service of innovative projects.",
      values: [
        "Autonomy and quick adaptation",
        "Scientific rigor",
        "Results-oriented",
      ],
    },
    services: {
      title: "Services",
      subtitle: "Data solutions tailored to your needs",
      cta: "View all services",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Discover my recent work",
      cta: "View all projects",
    },
    method: {
      title: "My Work Method",
      steps: [
        {
          title: "Understanding needs",
          description: "In-depth analysis of your goals and constraints",
        },
        {
          title: "Data preparation",
          description: "Cleaning and structuring to ensure quality",
        },
        {
          title: "Analysis & Modeling",
          description: "Application of AI techniques and automation",
        },
        {
          title: "Intelligent use of AI",
          description: "Adaptation and validation, not simple generation",
        },
        {
          title: "Client validation",
          description: "Iterations until complete satisfaction",
        },
      ],
    },
    finalCta: {
      title: "Ready to start your project?",
      description: "Let's discuss your needs and find the best data solution for your business together.",
      cta: "Start a project",
    },
  },
  about: {
    hero: {
      title: "About Me",
      subtitle: "Passionate web developer and data scientist in training",
    },
    background: {
      title: "Background",
      education: "Master's 1 Data Science - UFHB",
      location: "Abidjan, Ivory Coast",
      description: "18-year-old developer, curious and self-taught. Master's 1 student in Data Science at UFR Math-Info, Université Félix Houphouët-Boigny (codiplomation with Université Rennes 2), I specialize in full-stack web development and data analysis. My goal: to put my skills at the service of innovative projects to produce operational deliverables.",
      objective: "I am looking for a mission or junior position in development (full-stack / data science) where I can implement my programming skills. Immediately available for a position in Abidjan.",
    },
    vision: {
      title: "Qualities & Method",
      items: [
        {
          title: "Autonomy",
          description: "Quick adaptation to new technologies and continuous learning",
        },
        {
          title: "Rigor",
          description: "Scientific analysis and maintainable code",
        },
        {
          title: "Communication",
          description: "Clear communication with technical and non-technical teams",
        },
      ],
    },
    timeline: {
      title: "Education",
      events: [
        {
          year: "2025-2026",
          title: "Master's 1 Data Science",
          description: "UFR Math-Info, UFHB - Codiplomation with Université Rennes 2 (France)",
        },
        {
          year: "2022-2025",
          title: "Bachelor's MSEF",
          description: "Economic & Financial Statistical Modeling - Université Jean Lorougnon Guédé",
        },
        {
          year: "2022",
          title: "Baccalauréat Series D",
          description: "Fairly Good - Lycée Moderne Toulépleu",
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          title: "Web Development",
          items: ["HTML5/CSS3", "JavaScript", "TypeScript", "React"],
        },
        {
          title: "Data Science",
          items: ["Python", "Data Analysis", "Statistical Modeling"],
        },
        {
          title: "Backend & Databases",
          items: ["Supabase", "PostgreSQL", "REST APIs"],
        },
        {
          title: "Tools",
          items: ["Git/GitHub", "Netlify", "Capacitor", "PWA"],
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          year: "April 2025",
          title: "Technical Support - FODESE",
          description: "Volunteer work: Logistical assistance and support for candidates at SODECI booth",
        },
      ],
    },
    cta: {
      downloadCv: "Download my CV",
    },
  },
  services: {
    hero: {
      title: "Services",
      subtitle: "Professional data solutions tailored to your needs",
    },
    list: {
      automation: {
        title: "Data tools & scripts creation",
        desc: "Development of custom Python scripts to automate your repetitive tasks and save time.",
        benefits: [
          "Significant time savings",
          "Reduction of manual errors",
          "Reusable and maintainable scripts",
        ],
      },
      dashboards: {
        title: "Dashboards",
        desc: "Creation of interactive dashboards with Power BI or advanced Excel to visualize your KPIs in real-time.",
        benefits: [
          "Clear and intuitive visualization",
          "Real-time monitoring",
          "Facilitated decision-making",
        ],
      },
      analysis: {
        title: "Data analysis and studies",
        desc: "In-depth statistical analysis to discover hidden insights in your data.",
        benefits: [
          "Trend discovery",
          "Actionable recommendations",
          "Detailed reports",
        ],
      },
      reporting: {
        title: "Reporting automation",
        desc: "Complete automation of your periodic reports to save time and ensure consistency.",
        benefits: [
          "Automatic reports",
          "Guaranteed consistency",
          "Free up valuable time",
        ],
      },
      database: {
        title: "Database design",
        desc: "Creation and structuring of simple and efficient databases to organize your information.",
        benefits: [
          "Organized structure",
          "Fast data access",
          "Assured scalability",
        ],
      },
    },
    cta: "Discuss my project",
  },
  projects: {
    hero: {
      title: "Projects",
      subtitle: "Discover my work in software development, data science and automation",
    },
    list: [
      {
        title: "DaloaMarket - Local E-commerce Platform",
        context: "First peer-to-peer classified ads platform in Daloa with virtual credits system and real-time messaging",
        problem: "Lack of secure local platform for peer-to-peer transactions in Daloa",
        solution: "Full-stack platform development with Supabase authentication, real-time chat, user profile management, virtual credits system, and advanced search. Production deployment with mobile optimization and real-time features",
        tools: ["TypeScript", "React", "Capacitor", "Supabase", "REST API", "PostgreSQL"],
        method: "Requirements analysis → Full-stack architecture → Feature development → Supabase integration → Testing and optimization → Production deployment",
        result: "Complete platform in production with real-time messaging, virtual credits management, advanced search, and responsive interface",
        link: "https://daloamarket.shop",
        status: "In production",
        period: "May - June 2025",
      },
      {
        title: "Capital Trading Bot - Trading Application",
        context: "Automated trading bot with technical algorithm implementation for trading strategies",
        problem: "Need to automate trading strategies based on technical indicators",
        solution: "Implementation of technical algorithms (RSI, MACD, Bollinger) for automated strategies, secure API key management, backtesting parameter interface, and robustness testing",
        tools: ["JavaScript", "Trading APIs", "Technical Indicators", "Backtesting"],
        method: "Technical indicators study → Algorithm implementation → Parameter interface → Robustness testing → Strategy optimization",
        result: "Functional bot with multiple technical indicators, backtesting system, and secure API management",
        link: "https://capitaltradingbot.netlify.app",
        status: "Completed",
        period: "Feb - March 2025",
      },
      {
        title: "MedicoDict - Medical PWA",
        context: "Medical dictionary PWA with over 450 medical entries for low connectivity areas",
        problem: "Difficulty accessing reliable medical information in low connectivity areas",
        solution: "Development of a Progressive Web App with medical dictionary (450+ entries), offline mode, advanced search by symptoms and body parts, mobile first design optimized for low connectivity areas",
        tools: ["HTML5", "CSS3", "JavaScript", "PWA", "Service Workers", "Netlify"],
        method: "Medical data collection → PWA architecture → Search interface → Offline mode → Mobile first design → Connectivity testing",
        result: "Complete PWA working offline, 450+ searchable medical sheets, multi-criteria search, mobile optimized",
        link: "https://medico-dict.netlify.app",
        status: "Online",
        period: "March 2025",
      },
      {
        title: "KlasNet - School Management Software",
        context: "Complete web application for school management designed for primary schools in Côte d'Ivoire",
        problem: "Manual management of students, teachers, grades and finances is time-consuming and error-prone",
        solution: "Complete management system with modules for students, teachers, classes, subjects, finances, grades and report cards. Advanced license system with anti-cheat protection and offline functionality",
        tools: ["React", "TypeScript", "Tailwind CSS", "Vite", "LocalStorage", "Recharts"],
        method: "Analysis of Ivorian education system → Modular design → Iterative development → User testing → Deployment",
        result: "Complete automated management, automatically generated PDF report cards, 70% time saved on school administration",
        link: "https://drive.google.com/file/d/1rj92hBaOWI9DgKegJKc76UOMW13kFDYk/view",
        status: "Completed",
      },
    ],
  },
  training: {
    hero: {
      title: "Training & Resources",
      subtitle: "Practical resources to master data science",
    },
    description: "Discover my practice-oriented guides and tutorials to learn Python, automation, and data analysis.",
    resources: [
      {
        title: "Introduction to Python for Data",
        description: "Practical guide to get started with Python applied to data analysis",
        type: "PDF",
        level: "Beginner",
      },
      {
        title: "Automation with Python",
        description: "Techniques and concrete examples to automate your tasks",
        type: "PDF",
        level: "Intermediate",
      },
      {
        title: "Power BI: The Fundamentals",
        description: "Create your first professional dashboards",
        type: "PDF",
        level: "Beginner",
      },
      {
        title: "Data Cleaning with Pandas",
        description: "Master data cleaning and transformation",
        type: "PDF",
        level: "Intermediate",
      },
    ],
    cta: "Download",
  },
  contact: {
    hero: {
      title: "Contact",
      subtitle: "Let's discuss your project",
    },
    info: {
      title: "Stay in touch",
      description: "Feel free to contact me to discuss your web development or data science needs. Immediately available in Abidjan.",
      phone: "+225 07 88 00 08 31",
      email: "oulobotresorelmas@gmail.com",
      location: "Abidjan, Ivory Coast",
      emails: {
        project: "oulobotresorelmas@gmail.com",
        job: "oulobotresorelmas@gmail.com",
      },
    },
    form: {
      title: "Send me a message",
      name: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "An error occurred. Please try again.",
    },
  },
  footer: {
    rights: "All rights reserved",
    madeWith: "Made with passion",
  },
}
