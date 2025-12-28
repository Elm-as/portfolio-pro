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
      role: "Data Scientist & AI Analyst",
      tagline: "Transform your data into strategic decisions.",
      cta1: "View my projects",
      cta2: "Contact me",
    },
    about: {
      title: "About",
      description: "Master's student in Data Science in Ivory Coast, passionate about artificial intelligence and data analysis. I develop concrete solutions to automate, analyze and visualize your data.",
      values: [
        "Rigor and precision",
        "Autonomy and initiative",
        "AI ethics",
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
      subtitle: "Passionate about data science and artificial intelligence",
    },
    background: {
      title: "Background",
      education: "Master's in Data Science",
      location: "Ivory Coast",
      description: "Master's student in Data Science, I specialize in data analysis, automation, and intelligent tool development. My goal is to transform complex data into actionable insights.",
    },
    vision: {
      title: "Vision & Values",
      items: [
        {
          title: "Rigor",
          description: "A methodical and precise approach in every project",
        },
        {
          title: "Autonomy",
          description: "Ability to take initiative and solve problems",
        },
        {
          title: "AI Ethics",
          description: "Responsible and transparent use of artificial intelligence",
        },
      ],
    },
    timeline: {
      title: "Progress",
      events: [
        {
          year: "2024",
          title: "Master's in Data Science",
          description: "Specialization in data analysis and AI",
        },
        {
          year: "2023",
          title: "Automation projects",
          description: "Development of tools and Python scripts",
        },
        {
          year: "2022",
          title: "Intensive training",
          description: "Power BI, Python, databases",
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
      {
        title: "DaloaMarket - P2P Marketplace",
        context: "First peer-to-peer marketplace in Daloa allowing users to buy and sell locally",
        problem: "Lack of secure local platform for peer-to-peer transactions in Daloa",
        solution: "React Native mobile app with Supabase authentication, real-time chat, listings with photos, and integrated PayDunya payments",
        tools: ["React Native", "Expo", "TypeScript", "Supabase", "NativeWind", "PayDunya"],
        method: "Local market research → Mobile UX/UI design → Feature development → Payment integration → Beta testing",
        result: "Complete app with real-time messaging, photo uploads, geolocation, and secure payments (200 FCFA/listing)",
        status: "In production",
      },
      {
        title: "Medico-Dict - Medical Dictionary",
        context: "Interactive medical dictionary with over 450 diseases for information and quick reference",
        problem: "Difficulty accessing reliable and structured medical information in French",
        solution: "Medical consultation web app with advanced search by symptoms, body parts, and detailed disease sheets with immediate actions",
        tools: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
        method: "Medical data collection → Sheet structuring → Search interface → Content validation → Deployment",
        result: "450+ searchable disease sheets, multi-criteria search, emergency information and prevention",
        link: "https://medico-dict.netlify.app",
        status: "Online",
      },
      {
        title: "DataAnalyzer - Complete Data Analysis Tool",
        context: "Advanced data analysis tool enabling ML and Deep Learning without coding",
        problem: "Technical barrier to performing advanced statistical analyses and machine learning",
        solution: "Full-stack application with React frontend and Python Flask backend offering descriptive analytics, regression, classification, clustering, time series, and neural networks with PDF report generation",
        tools: ["React", "TypeScript", "Flask", "Pandas", "Scikit-learn", "TensorFlow", "XGBoost", "Prophet"],
        method: "Architecture design → ML/DL algorithm implementation → Intuitive interface → Validation testing → Documentation",
        result: "15+ ML/DL algorithms available, automated data cleaning, professional PDF reports, built-in cross-validation",
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
      description: "Feel free to contact me to discuss your data science and automation needs.",
      emails: {
        project: "projet@elmas-oulobo.com",
        job: "job@elmas-oulobo.com",
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
