import React from "react";

const ProjectDetail = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold gradient-text mb-6">
              Notes App
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A modern, full-stack notes application built with Next.js 15,
              featuring real-time updates, secure authentication, and a
              beautiful responsive design.
            </p>
          </div>

          {/* Project Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#"
              target="_blank"
              className="glass rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
              <span className="font-semibold">Live Demo</span>
            </a>
            <a
              href="#"
              target="_blank"
              className="glass rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="font-semibold">View Code</span>
            </a>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Challenge
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Build a modern notes application with user authentication,
                real-time updates, and a seamless mobile experience within a
                14-day development timeline.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Solution
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Leveraged Next.js 15 with server actions, Prisma ORM for
                database management, and Supabase for authentication and
                real-time capabilities.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                Created a production-ready application with seamless user
                experience, mobile responsiveness, and scalable architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold gradient-text text-center mb-16">
            Application Screenshots
          </h2>

          {/* Desktop Screenshots */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Desktop Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔐</div>
                    <p className="text-white font-semibold">Login Screen</p>
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  Secure Authentication
                </h4>
                <p className="text-gray-300 text-sm">
                  Clean, modern login interface with email/password
                  authentication powered by Supabase.
                </p>
              </div>

              <div className="glass rounded-2xl p-4">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📋</div>
                    <p className="text-white font-semibold">Notes Dashboard</p>
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">Organized Dashboard</h4>
                <p className="text-gray-300 text-sm">
                  Three-panel layout with notes list, search functionality, and
                  detailed note view.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Screenshots */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Mobile Experience
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl h-96 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <p className="text-white font-semibold">Mobile Login</p>
                  </div>
                </div>
                <h4 className="font-bold mb-2">Touch-Optimized</h4>
                <p className="text-gray-300 text-sm">
                  Large touch targets and smooth animations.
                </p>
              </div>

              <div className="glass rounded-2xl p-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl h-96 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-white font-semibold">Note List</p>
                  </div>
                </div>
                <h4 className="font-bold mb-2">Card Layout</h4>
                <p className="text-gray-300 text-sm">
                  Easy-to-scan note cards with categories.
                </p>
              </div>

              <div className="glass rounded-2xl p-4">
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl h-96 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✏️</div>
                    <p className="text-white font-semibold">Note Editor</p>
                  </div>
                </div>
                <h4 className="font-bold mb-2">Full-Screen Editor</h4>
                <p className="text-gray-300 text-sm">
                  Distraction-free writing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold gradient-text text-center mb-16">
            Tech Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="font-bold text-lg mb-2">Frontend</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Next.js 15</li>
                <li>React Hooks</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-lg mb-2">Backend</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Server Actions</li>
                <li>Prisma ORM</li>
                <li>PostgreSQL</li>
                <li>Edge Functions</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="font-bold text-lg mb-2">Authentication</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Supabase Auth</li>
                <li>Session Management</li>
                <li>Zod Validation</li>
                <li>React Hook Form</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="font-bold text-lg mb-2">Deployment</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Vercel</li>
                <li>GitHub CI/CD</li>
                <li>Supabase</li>
                <li>Edge Runtime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold gradient-text text-center mb-16">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">✨</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Real-time Updates</h3>
                  <p className="text-gray-300">
                    Instant synchronization across devices with Supabase
                    real-time capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Mobile-First Design
                  </h3>
                  <p className="text-gray-300">
                    Responsive design optimized for mobile with touch-friendly
                    interactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🔍</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Smart Search</h3>
                  <p className="text-gray-300">
                    Instant search through note titles and content with
                    real-time filtering.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🏷️</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Category System</h3>
                  <p className="text-gray-300">
                    Organize notes with color-coded categories (Work, Personal,
                    Creative).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold gradient-text text-center mb-16">
            What I Learned
          </h2>

          <div className="glass rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-accent mb-3">
                  Next.js 15 Server Actions
                </h3>
                <p className="text-gray-300">
                  Mastered the new server actions pattern for handling backend
                  logic directly in Next.js components, reducing API complexity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-accent mb-3">
                  Real-time Architecture
                </h3>
                <p className="text-gray-300">
                  Implemented real-time features using Supabase's subscription
                  system for live updates across multiple users.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-accent mb-3">
                  Mobile UX Design
                </h3>
                <p className="text-gray-300">
                  Learned to design mobile-first interfaces with proper touch
                  targets, navigation patterns, and responsive layouts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-accent mb-3">
                  Performance Optimization
                </h3>
                <p className="text-gray-300">
                  Optimized database queries with Prisma and implemented
                  efficient caching strategies for better performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Interested in seeing more?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Check out my other projects or get in touch to discuss your next
              idea.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="../index.html#projects"
                className="glass rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                View All Projects
              </a>
              <a
                href="../index.html#contact"
                className="bg-accent hover:bg-accent/80 rounded-full px-8 py-4 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
