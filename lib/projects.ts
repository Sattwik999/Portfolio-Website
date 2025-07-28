export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  projectIcon: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "medimind",
    title: "MediMind",
    category: "AI Healthcare Platform",
    shortDescription: "AI platform for multilingual doctor consultations, breaking language barriers in healthcare.",
    description: [
      "MediMind is an innovative AI-powered platform designed to eliminate language barriers in healthcare consultations. The system enables seamless communication between doctors and patients who speak different languages.",
      "The platform uses advanced natural language processing and real-time translation capabilities to ensure accurate medical communication. It maintains context awareness to preserve the nuances of medical terminology and patient concerns.",
      "Built during the Summer Research Internship Programme at VIT Chennai, this project addresses a critical need in India's diverse linguistic landscape, making healthcare more accessible to all communities.",
    ],
    features: [
      "Real-time multilingual translation for doctor-patient conversations",
      "Medical terminology preservation and context awareness",
      "Voice-to-text and text-to-voice capabilities",
      "Secure patient data handling and HIPAA compliance",
      "Integration with existing hospital management systems",
      "Support for multiple Indian and international languages",
    ],
    technologies: ["Python", "NLP", "Machine Learning", "Flask", "React.js", "Speech Recognition", "Translation APIs"],
    coverImage: "/ai-healthcare-logo.png",
    thumbnailImage: "/ai-healthcare-logo.png",
    projectIcon: "/ai-healthcare-logo.png",
    timeline: "3 months (May - July 2025)",
    role: "AI Developer & Project Lead",
    githubUrl: "https://github.com/Sattwik999/medimind",
    relatedProjects: [
      {
        slug: "geetagpt",
        title: "GeetaGPT",
        category: "AI Chatbot",
        image: "/geeta-logo.png",
      },
      {
        slug: "cs-agent",
        title: "CS Agent",
        category: "Customer Support AI",
        image: "/computer-science-logo.png",
      },
    ],
  },
  {
    id: 2,
    slug: "geetagpt",
    title: "GeetaGPT",
    category: "AI Chatbot",
    shortDescription:
      "AI conversational agent delivering Bhagavad Gita insights in multiple languages with context awareness.",
    description: [
      "GeetaGPT is a sophisticated AI chatbot designed to provide insightful, context-aware answers about the Bhagavad Gita. The system combines deep learning with spiritual wisdom to offer meaningful guidance.",
      "The chatbot understands complex philosophical questions and provides relevant verses, explanations, and practical applications from the Bhagavad Gita. It maintains conversation context to provide coherent, flowing discussions.",
      "Supporting multiple languages, GeetaGPT makes ancient wisdom accessible to a global audience while preserving the authenticity and depth of the original teachings.",
    ],
    features: [
      "Context-aware conversational AI for spiritual guidance",
      "Multilingual support for global accessibility",
      "Verse citation and explanation capabilities",
      "Practical application suggestions for daily life",
      "Philosophical question handling with depth",
      "User session management and conversation history",
    ],
    technologies: ["Python", "NLP", "Transformers", "Flask", "React.js", "Vector Databases", "OpenAI API"],
    coverImage: "/geeta-logo.png",
    thumbnailImage: "/geeta-logo.png",
    projectIcon: "/geeta-logo.png",
    timeline: "2 months (June - July 2025)",
    role: "AI Developer",
    githubUrl: "https://github.com/Sattwik999/GeetaGPT_IBMGENAI_Project",
    relatedProjects: [
      {
        slug: "medimind",
        title: "MediMind",
        category: "AI Healthcare Platform",
        image: "/ai-healthcare-logo.png",
      },
      {
        slug: "cs-agent",
        title: "CS Agent",
        category: "Customer Support AI",
        image: "/computer-science-logo.png",
      },
    ],
  },
  {
    id: 3,
    slug: "cs-agent",
    title: "CS Agent",
    category: "Customer Support AI",
    shortDescription:
      "Intelligent customer support AI capable of accurately answering diverse customer service queries.",
    description: [
      "CS Agent is an advanced AI-powered customer support system designed to handle diverse customer service queries with high accuracy. The system reduces response time and improves customer satisfaction.",
      "The AI agent is trained on extensive customer service datasets and can handle complex queries, escalate issues when necessary, and maintain professional communication standards throughout interactions.",
      "Built with scalability in mind, CS Agent can be integrated into existing customer service workflows and adapted to different business domains and requirements.",
    ],
    features: [
      "Automated query classification and routing",
      "High-accuracy response generation for customer queries",
      "Escalation protocols for complex issues",
      "Multi-channel support (chat, email, voice)",
      "Analytics dashboard for performance monitoring",
      "Integration capabilities with existing CRM systems",
    ],
    technologies: ["Python", "Machine Learning", "NLP", "Flask", "React.js", "PostgreSQL", "Redis"],
    coverImage: "/computer-science-logo.png",
    thumbnailImage: "/computer-science-logo.png",
    projectIcon: "/computer-science-logo.png",
    timeline: "2 months (May - June 2025)",
    role: "AI Developer & Backend Engineer",
    githubUrl: "https://github.com/Sattwik999/cs-agent",
    relatedProjects: [
      {
        slug: "medimind",
        title: "MediMind",
        category: "AI Healthcare Platform",
        image: "/ai-healthcare-logo.png",
      },
      {
        slug: "isl-drone",
        title: "ISL Drone Project",
        category: "Space Technology",
        image: "/drone-logo.png",
      },
    ],
  },
  {
    id: 4,
    slug: "isl-drone",
    title: "ISL Drone Project",
    category: "Space Technology",
    shortDescription:
      "Designed and simulated drone for India Space Lab internship, focusing on aerodynamics and flight control.",
    description: [
      "The ISL Drone Project was developed during the India Space Lab Summer Internship, focusing on designing and simulating drones for space and remote sensing applications.",
      "The project involved comprehensive aerodynamic analysis, flight control system design, and simulation testing. The drone was optimized for high-altitude operations and remote sensing data collection.",
      "This project provided hands-on experience with space technology applications and contributed to understanding drone deployment in challenging environments for scientific research.",
    ],
    features: [
      "Advanced aerodynamic design for high-altitude operations",
      "Flight control system with autonomous navigation",
      "Remote sensing payload integration",
      "Real-time data transmission capabilities",
      "Weather resistance and durability optimization",
      "Simulation testing and performance validation",
    ],
    technologies: ["CAD Software", "MATLAB", "Python", "Simulation Tools", "Control Systems", "Sensors"],
    coverImage: "/drone-logo.png",
    thumbnailImage: "/drone-logo.png",
    projectIcon: "/drone-logo.png",
    timeline: "2 months (June - July 2025)",
    role: "Drone Designer & Simulation Engineer",
    githubUrl: "https://github.com/Sattwik999/isl-drone-project",
    relatedProjects: [
      {
        slug: "cs-agent",
        title: "CS Agent",
        category: "Customer Support AI",
        image: "/computer-science-logo.png",
      },
      {
        slug: "suvitta-finance",
        title: "Suvitta Financial Management",
        category: "Web Application",
        image: "/finance-dashboard-cover.png",
      },
    ],
  },
  {
    id: 5,
    slug: "suvitta-finance",
    title: "Suvitta Financial Management System",
    category: "Web Application",
    shortDescription:
      "Frontend development of a personal finance web application for comprehensive financial management.",
    description: [
      "Suvitta is a comprehensive personal finance management system designed to help users track expenses, manage budgets, and achieve financial goals. The frontend provides an intuitive and responsive user experience.",
      "The application features modern UI/UX design principles with interactive charts, real-time data visualization, and seamless navigation across different financial management modules.",
      "Built with scalability and user experience in mind, the system supports multiple financial accounts, transaction categorization, and detailed financial reporting.",
    ],
    features: [
      "Responsive and intuitive user interface design",
      "Interactive financial charts and data visualization",
      "Budget tracking and expense categorization",
      "Goal setting and progress monitoring",
      "Multi-account management capabilities",
      "Detailed financial reports and analytics",
    ],
    technologies: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Chart.js", "Tailwind CSS"],
    coverImage: "/finance-dashboard-cover.png",
    thumbnailImage: "/finance-dashboard-cover.png",
    projectIcon: "/finance-dashboard-cover.png",
    timeline: "2 months",
    role: "Frontend Developer",
    githubUrl: "https://github.com/Sattwik999/Suvitta-FinancialManagement",
    relatedProjects: [
      {
        slug: "isl-drone",
        title: "ISL Drone Project",
        category: "Space Technology",
        image: "/drone-logo.png",
      },
      {
        slug: "medimind",
        title: "MediMind",
        category: "AI Healthcare Platform",
        image: "/ai-healthcare-logo.png",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
