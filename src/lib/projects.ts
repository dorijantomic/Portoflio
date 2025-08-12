export const projects = {
  "note-app": {
    title: "Modern Notes App",
    description: "A modern, full-stack notes application built with the latest technologies, featuring a robust backend, a sleek frontend, and secure authentication.",
    liveDemoUrl: "https://notes-sage-omega.vercel.app/auth/login",
    requestCodeUrl: "mailto:doriantomic@gmail.com?subject=Request for code: Modern Notes App",
    techStack: [
      {
        category: "Core Framework",
        items: ["Next.js 15: App Router, Server Actions, Edge Runtime"],
      },
      {
        category: "Frontend",
        items: [
          "React 19: UI Library",
          "shadcn/ui: Radix UI & Tailwind CSS",
          "Styling: Tailwind CSS",
          "Icons: Lucide React",
        ],
      },
      {
        category: "Backend",
        items: ["ORM: Prisma", "Database: PostgreSQL"],
      },
      {
        category: "Authentication & Security",
        items: [
          "Auth: Custom JWT-based sessions",
          "JWT Library: @oslojs/jwt",
          "Crypto: @oslojs/crypto (HMAC)",
          "Password Hashing: oslo/password (Argon2id)",
        ],
      },
      {
        category: "Forms & Validation",
        items: ["Form Management: React Hook Form", "Schema Validation: Zod"],
      },
      {
        category: "API & Services",
        items: ["Email Service: Resend"],
      },
    ],
    developerExperience: [
      {
        title: "TypeScript",
        description: "Static typing for improved code quality and maintainability.",
      },
      {
        title: "ESLint",
        description: "Enforces consistent code style and catches errors early.",
      },
      {
        title: "Database Seeding",
        description: "Scripts run with `tsx` to populate the database with initial data.",
      },
    ],
    deployment: [
        {
            title: "Hosting",
            description: "Deployed on Vercel, optimized for Next.js applications."
        },
        {
            title: "CI/CD",
            description: "Continuous integration and deployment managed through GitHub."
        }
    ]
  },
  "habbit-app": {
    title: "Habbit - Habit Tracker",
    description: "A full-stack habit tracking application with features like user authentication, analytics, and a calendar view. Built with Next.js, Prisma, and more.",
    liveDemoUrl: "https://habbit-iota.vercel.app/",
    requestCodeUrl: "mailto:doriantomic@gmail.com?subject=Request for code: Habbit - Habit Tracker",
    techStack: [
        {
            category: "Core Framework",
            items: ["Next.js 15: App Router, Server Actions"]
        },
        {
            category: "Frontend",
            items: ["React 19: UI Library", "Tailwind CSS", "shadcn/ui"]
        },
        {
            category: "Backend",
            items: ["ORM: Prisma", "Database: PostgreSQL"]
        },
        {
            category: "Authentication & Security",
            items: ["NextAuth.js", "Password Hashing: bcrypt"]
        }
    ],
    developerExperience: [
        {
            title: "TypeScript",
            description: "Static typing for improved code quality and maintainability."
        },
        {
            title: "ESLint",
            description: "Enforces consistent code style and catches errors early."
        }
    ],
    deployment: [
        {
            title: "Hosting",
            description: "Deployed on Vercel, optimized for Next.js applications."
        },
        {
            title: "CI/CD",
            description: "Continuous integration and deployment managed through GitHub."
        }
    ]
  },
};
