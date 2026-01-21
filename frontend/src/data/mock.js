// Mock data for Vicky Poojari's Portfolio
// This will be replaced with backend data later

export const profileData = {
  name: "Vicky Manju Poojari",
  role: "Senior Android Engineer",
  location: "Mumbai, India",
  email: "vickypoojari681@gmail.com",
  phone: "+91 8454852392",
  linkedin: "https://linkedin.com/in/vickypoojari",
  github: "https://github.com/vickypoojari",
  website: "https://simplicated.in",
  yearsOfExperience: 5.7,
  tagline: "Building Android experiences that users love — from onCreate() to production, architecting scalable solutions with Kotlin, Jetpack Compose, and Clean Architecture.",
  resumeUrl: "https://customer-assets.emergentagent.com/job_senior-dev-journey/artifacts/ifrpnrg7_Vicky_Poojari_CV.pdf"
};

export const careerSummary = {
  narrative: "I started my Android journey with onCreate() and XML layouts, survived the AsyncTask era, and caught memory leaks before they became production ghosts. Over 5.7 years, I've evolved from verbose Java to expressive Kotlin, from XML to Jetpack Compose, and from monolithic apps to well-structured modular architectures. My work spans the entire development lifecycle — from crafting pixel-perfect UIs to optimizing CI/CD pipelines for smooth, timely releases. I focus on three things: performance, code quality, and shipping features that users actually love.",
  stats: [
    { label: "Years Experience", value: "5.7" },
    { label: "Apps Launched", value: "15+" },
    { label: "Team Leadership", value: "Cross-functional" },
    { label: "Bug Reduction", value: "70%" }
  ]
};

export const skills = {
  languages: ["Kotlin", "Java", "Dart", "XML"],
  androidCore: ["Jetpack Compose", "Material Design", "AndroidX", "Android SDK", "Lifecycle Components"],
  architecture: ["MVVM", "Clean Architecture", "MVI", "Modular Design", "Atomic Design Principles"],
  ui: ["Jetpack Compose", "XML Layouts", "Material Design 3", "Custom Views", "Animation APIs"],
  networkingData: ["Retrofit", "OkHttp", "REST APIs", "Room Database", "SQLite", "Firebase Firestore"],
  tooling: ["Git", "CI/CD Pipelines", "Gradle", "Android Studio", "Firebase", "Flutter"]
};

export const projects = [
  {
    id: 1,
    name: "Android Kiosk",
    company: "SmartQ",
    problem: "Customers needed a fast, intuitive self-service solution for food ordering that could reduce wait times and improve order accuracy in high-traffic environments.",
    role: "Led end-to-end development and optimization of the kiosk application, driving architecture decisions and technical implementation.",
    techStack: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Retrofit", "Room"],
    solutions: [
      "Migrated legacy Java codebase to Kotlin, improving code maintainability and developer productivity",
      "Led complete UI migration from XML to Jetpack Compose using Atomic Design Principles",
      "Implemented modular architecture for enhanced UI reusability across different kiosk configurations",
      "Optimized order processing flow with efficient state management and background sync"
    ],
    impact: [
      { metric: "30%", label: "Development Time Reduced" },
      { metric: "60%", label: "Production Issues Reduced" },
      { metric: "100%", label: "UI Reusability" }
    ]
  },
  {
    id: 2,
    name: "Menu Themes SDK",
    company: "SmartQ",
    problem: "Businesses needed the ability to customize kiosk UI/UX to match their branding without requiring separate app builds for each client.",
    role: "Designed and architected an SDK that integrates with the Kiosk app, enabling dynamic theme customization and custom UI components.",
    techStack: ["Flutter", "Dart", "Custom SDK Design", "Dynamic Theming", "Plugin Architecture"],
    solutions: [
      "Created a flexible SDK architecture supporting runtime theme injection",
      "Implemented dynamic color schemes, typography, and component styling",
      "Built plugin system for custom UI component integration",
      "Enabled businesses to update branding without app redeployment"
    ],
    impact: [
      { metric: "100%", label: "Client Customization" },
      { metric: "5x", label: "Faster Brand Updates" },
      { metric: "Zero", label: "Rebuild Required" }
    ]
  },
  {
    id: 3,
    name: "Teamnest HR Suite",
    company: "Dreamscape Media",
    problem: "Organizations needed a comprehensive mobile solution to automate employee services, from attendance tracking to leave management, accessible on-the-go.",
    role: "Android developer responsible for building core HR modules and ensuring seamless integration with cloud backend services.",
    techStack: ["Java", "Kotlin", "MVVM", "Retrofit", "Firebase", "Material Design"],
    solutions: [
      "Developed employee attendance tracking with location verification",
      "Built leave management system with approval workflows",
      "Implemented real-time notifications for HR updates",
      "Created offline-first architecture for reliable data access"
    ],
    impact: [
      { metric: "Cloud", label: "Based Platform" },
      { metric: "Multi", label: "Organization Support" },
      { metric: "Real-time", label: "Sync" }
    ]
  },
  {
    id: 4,
    name: "Proclaim Trip Tracker",
    company: "Dreamscape Media",
    problem: "Insurance adjusters needed automated trip tracking to accurately log mileage and locations for client visits without manual entry.",
    role: "Sole Android developer for the project, handling architecture, implementation, and deployment.",
    techStack: ["Kotlin", "Location Services", "Background Services", "Firebase Firestore", "Google Maps API"],
    solutions: [
      "Implemented intelligent trip detection using activity recognition APIs",
      "Built battery-efficient background location tracking",
      "Created automatic trip logging with cloud synchronization",
      "Developed trip history visualization with maps integration"
    ],
    impact: [
      { metric: "Auto", label: "Trip Detection" },
      { metric: "Cloud", label: "Data Backup" },
      { metric: "Low", label: "Battery Usage" }
    ]
  },
  {
    id: 5,
    name: "myItReturn Tax App",
    company: "Dreamscape Media",
    problem: "Individual taxpayers needed a simplified mobile solution for income tax filing, calculations, and refund tracking without desktop dependency.",
    role: "Lead Android developer for the tax filing module, working closely with finance experts to ensure compliance.",
    techStack: ["Kotlin", "MVVM", "Room Database", "PDF Generation", "Retrofit"],
    solutions: [
      "Built step-by-step tax filing wizard with input validation",
      "Implemented complex tax calculation engine for Indian tax rules",
      "Created rent receipt generation with PDF export",
      "Developed refund tracking dashboard with status updates"
    ],
    impact: [
      { metric: "Simple", label: "Tax Filing" },
      { metric: "Auto", label: "Calculations" },
      { metric: "PDF", label: "Receipt Export" }
    ]
  }
];

export const architecture = {
  title: "Architecture & Engineering Philosophy",
  description: "Building scalable, maintainable Android applications through proven architectural patterns and engineering best practices.",
  layers: [
    {
      name: "UI Layer",
      description: "Jetpack Compose for declarative UI, ViewModels for state management, and navigation components for seamless user flows.",
      technologies: ["Jetpack Compose", "XML Views", "ViewModel", "Navigation Component"],
      depth: 0
    },
    {
      name: "Domain Layer",
      description: "Business logic isolated in use cases, ensuring testability and separation of concerns. Pure Kotlin with no Android dependencies.",
      technologies: ["Use Cases", "Business Logic", "Domain Models", "Repository Interfaces"],
      depth: 40
    },
    {
      name: "Data Layer",
      description: "Repository pattern for data abstraction, combining local (Room) and remote (Retrofit) data sources with proper caching strategies.",
      technologies: ["Repository", "Room Database", "Retrofit", "Data Sources"],
      depth: 80
    }
  ],
  principles: [
    "Clean Architecture for long-term maintainability",
    "SOLID principles in daily code",
    "Dependency injection for testability",
    "Modular design for scalability"
  ]
};

export const achievements = [
  { metric: "70%", label: "Reduction in Recurring Bugs" },
  { metric: "60%", label: "Fewer Production Issues" },
  { metric: "30%", label: "Faster Development Time" },
  { metric: "15+", label: "Apps Published" }
];

export const awards = [
  { title: "UK Hackathon 2024 Winner", company: "SmartQ", date: "2024" },
  { title: "Above & Beyond Award", company: "SmartQ", date: "Sep 2024" },
  { title: "Exceptional Performance Award", company: "SmartQ", date: "Feb 2023" }
];

export const timeline = [
  {
    company: "SmartQ",
    role: "Senior Software Engineer",
    duration: "Feb 2022 – Present",
    location: "Bangalore, India",
    highlights: [
      "Led migration from Java to Kotlin and XML to Jetpack Compose",
      "Reduced development time by 30% through scalable architecture",
      "Achieved 60% reduction in production issues via code quality improvements",
      "Won UK Hackathon 2024 and received Above & Beyond Award"
    ]
  },
  {
    company: "Dreamscape Media Pvt Ltd",
    role: "Android Developer",
    duration: "Oct 2019 – Feb 2022",
    location: "Mumbai, India",
    highlights: [
      "Successfully launched 15+ Android applications on Play Store",
      "Led project planning for Android, iOS, and React Native apps",
      "Designed high-performance apps using Java, Kotlin, and MVVM",
      "Collaborated with cross-functional teams on native and hybrid apps"
    ]
  }
];

export const certifications = [
  { title: "Flutter & Dart - Complete Guide", issuer: "Udemy", date: "Aug 2023" },
  { title: "Android Development Masterclass", issuer: "Udemy", date: "Dec 2019" },
  { title: "Microsoft Technology Associate: Security Fundamentals", issuer: "Microsoft", date: "Apr 2017" }
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  university: "University of Mumbai",
  college: "Jaihind College",
  duration: "Aug 2016 - Apr 2019",
  grade: "9.30/10 (A+)",
  coursework: ["Operating Systems", "Data Structures & Algorithms", "Software Development Life Cycle"]
};
