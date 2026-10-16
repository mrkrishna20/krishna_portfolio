export const profile = {
  name: "Krishna",
  title: "Full Stack Software Engineer",
  specialization: "Node.js • React.js • Ruby on Rails",
  status: "Available for Full-time Roles and Immediate Joiner",
  location: "Noida, India / Chandigarh (Ready to relocate)",
  phone: "+91 8427579444",
  email: "mrkrishnawork@gmail.com",
  altEmail: "mrkrishnakumar20@gmail.com",
  github: "https://github.com/mrkrishna20",
  linkedin: "https://www.linkedin.com/in/mr-krishna-thakur/",
  summary: "Full Stack Engineer with 3+ years of experience designing scalable backend architectures and building responsive, high-performance web and mobile applications. Specialized in Node.js, React.js, and Ruby on Rails, with deep expertise in relational database design, background task queues, and REST/GraphQL APIs.",

  about: [
    "I am a software engineer dedicated to building resilient, production-ready web and mobile platforms. My core strength lies in bridging backend and frontend engineering: developing high-concurrency microservices in Node.js, crafting fluid user interfaces with React and Next.js, and architecting transactional domain models in Ruby on Rails.",
    "Over my career, I have delivered multi-tenant SaaS platforms, integrated complex payment and notification systems (Slack, Gmail), optimized PostgreSQL database queries, and led teams in shipping scalable features. I care deeply about clean code architecture, automated testing (RSpec, Jest), and developer ergonomics."
  ],

  responsibilities: [
    "Orchestrated a complete redesign of existing applications to improve performance, scalability, and user experience.",
    "Mentored junior developers through code reviews and shared expertise in React.js and Ruby on Rails.",
    "Applied strong expertise in JavaScript (3+ years), Azure (1 year), and SQL (3+ years) to optimize application performance and backend integrations."
  ],

  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "React Native",
      "Expo",
      "Redux & Redux Toolkit",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "jQuery",
      "Angular"
    ],
    backend: [
      "Node.js",
      "Ruby on Rails",
      "Express.js",
      "ActiveRecord",
      "Sidekiq & Redis",
      "Python",
      "Java",
      "RESTful APIs",
      "RSpec & TDD"
    ],
    databases: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Database Indexing & Query Tuning",
      "Data Modeling & Schema Migrations"
    ],
    devops: [
      "Git & GitHub",
      "Azure",
      "Render",
      "Docker",
      "CORS & Puma Setup",
      "CI/CD Workflows"
    ]
  },

  experience: [
    {
      role: "Software Engineer",
      company: "Stelling Technologies (Railyatri)",
      period: "Aug 2025 — Present",
      location: "Noida, India",
      points: [
        "Developed scalable, high-performance web applications with a focus on maintainability, security, and user experience.",
        "Improved application performance through efficient API design, database optimization, reusable architecture, and seamless third-party integrations.",
        "Collaborated with cross-functional teams to design modular backend endpoints and maintainable frontend user flows."
      ],
      technologies: ["Node.js", "React.js", "Ruby on Rails", "PostgreSQL", "REST APIs", "System Architecture"]
    },
    {
      role: "Team Lead & Software Engineer",
      company: "Expandimo Technologies",
      period: "Nov 2023 — Nov 2024",
      location: "Mohali, India",
      points: [
        "Led a team of 4 engineers in developing Kinetzine, a secure document management platform that enabled users to upload, organize, and share PDF documents.",
        "Delivered scalable features, reusable components, secure authentication, REST APIs, database optimizations, and performance improvements to ensure a reliable user experience.",
        "Conducted thorough code reviews, guided architectural decisions, and established testing best practices for the team."
      ],
      technologies: ["React.js", "Node.js", "JavaScript", "REST APIs", "Database Optimization", "Team Leadership"]
    },
    {
      role: "Software Engineer",
      company: "Visions",
      period: "Dec 2021 — Aug 2023",
      location: "Chandigarh, India",
      points: [
        "Developed Squadsy, a scalable multi-tenant Employee Management System, implementing dynamic subdomains, role-based access control, and notification services.",
        "Engineered background job processing pipelines and third-party integrations (Slack, Gmail, etc.) to automate employee workflows.",
        "Optimized database queries and API response times to deliver a secure, reliable, and high-performance enterprise user experience."
      ],
      technologies: ["Ruby on Rails", "PostgreSQL", "ActiveRecord", "Background Jobs", "Multi-Tenancy", "Slack API"]
    }
  ],

  projects: [
    {
      title: "Zuno — Location-Based Social Networking Platform",
      tagline: "Full stack social platform with real-time location discovery",
      description: "Developed Zuno, a location-based social networking platform using Next.js, TypeScript, React, React Native, Expo, Ruby on Rails, and PostgreSQL. Built web and mobile experiences for location-based posts, stories, profiles, likes, comments, bookmarks, follows, notifications, conversations, and messaging.",
      highlights: [
        "Implemented geolocation-based content discovery using browser/device location permissions, reverse geocoding, latitude/longitude storage, Haversine distance calculations, and progressive 1–5 km search-radius fallback.",
        "Implemented JWT authentication with HTTP-only cookie sessions for web and secure token storage with bearer authentication for mobile.",
        "Designed PostgreSQL-backed ActiveRecord models with relational associations, validations, database migrations, callbacks, and self-referential many-to-many follow relationships.",
        "Configured CORS, Puma application serving, environment variables, PostgreSQL deployment, and production hosting through Render."
      ],
      tech: ["Ruby on Rails", "Next.js", "React.js", "React Native", "Expo", "PostgreSQL", "TypeScript", "Render"],
      github: "https://github.com/mrkrishna20",
      live: "https://zuno-frontend-omega.vercel.app"
    },
    {
      title: "IntrCity (RailYatri) — Hierarchical Analytics & Admin Platform",
      tagline: "Multi-level organizational reporting, REST APIs, & administrative interfaces",
      description: "Full-stack development on the IntrCity project at RailYatri. Developed end-to-end features spanning Ruby on Rails backend APIs, React user interfaces, admin panel functionality, and a multi-tiered hierarchical reporting module.",
      highlights: [
        "Architected a hierarchical analytics and reporting module presenting data across multiple organizational tiers (National, State, City, and nested levels).",
        "Designed and developed REST APIs in Ruby on Rails, implementing business logic, dynamic aggregations, and data processing for hierarchical reporting.",
        "Created models, controllers, associations, validations, and optimized database queries using ActiveRecord and SQL.",
        "Built interactive React user interfaces with dynamic tables (rows and columns based on organizational hierarchy) and seamless level-to-level navigation.",
        "Developed administrative panel functionality enabling operators to monitor and navigate reporting data across organizational hierarchies."
      ],
      tech: ["Ruby on Rails", "React.js", "ActiveRecord", "PostgreSQL", "SQL", "REST APIs", "JavaScript"],
      github: "https://github.com/mrkrishna20",
      live: "https://www.railyatri.in"
    },
    {
      title: "Kinetzine — Secure Document Management Platform",
      tagline: "Enterprise PDF upload, organization, and sharing system",
      description: "Led the development of a secure document platform that allows users to upload, organize, and share PDF documents. Designed scalable REST APIs, role-based access controls, and performant UI components ensuring seamless team document handling.",
      highlights: [
        "Delivered reusable React component architecture and optimized backend data pipelines.",
        "Integrated secure token authentication and granular access controls for document privacy.",
        "Streamlined PDF processing workflows and storage optimizations."
      ],
      tech: ["React.js", "Node.js", "REST APIs", "Database Optimization", "Security"],
      github: "https://github.com/mrkrishna20",
      live: "https://github.com/mrkrishna20"
    },
    {
      title: "Squadsy — Multi-Tenant Employee Management System",
      tagline: "Multi-tenant SaaS with dynamic subdomains & background workflows",
      description: "Built a multi-tenant enterprise employee management system featuring dynamic tenant subdomains, role-based permission tiers, background job queueing, and automated Slack and Gmail notification services.",
      highlights: [
        "Implemented dynamic subdomains for seamless multi-tenant database isolation.",
        "Engineered background task processing for asynchronous report generation and bulk notifications.",
        "Integrated Slack and Gmail APIs for real-time employee event webhooks."
      ],
      tech: ["Ruby on Rails", "PostgreSQL", "ActiveRecord", "Background Jobs", "Slack & Gmail APIs"],
      github: "https://github.com/mrkrishna20",
      live: "https://github.com/mrkrishna20"
    }
  ],

  education: [
    {
      degree: "Bachelor's of Computer Applications (BCA)",
      institution: "Punjab University, Chandigarh",
      period: "Sept 2017 — Jul 2020"
    }
  ]
};
