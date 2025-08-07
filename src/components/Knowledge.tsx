import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const Knowledge = () => {
  return (
    <AnimatedWrapper id="knowledge">
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
              Web Development Knowledge & Experience
            </h2>
          </div>
          <div className="max-w-6xl mx-auto text-left">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Languages & Core Technologies
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
                  <li>SQL (used with Prisma ORM)</li>
                </ul>
              </div>
              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Frontend
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    React (including functional components, hooks like useState,
                    useEffect)
                  </li>
                  <li>
                    Next.js 15 – App Router, server actions, edge functions
                  </li>
                  <li>Tailwind CSS – Utility-first styling</li>
                  <li>React Hook Form – Form handling and validation</li>
                  <li>Zod – Schema validation (often combined with forms)</li>
                </ul>
              </div>
              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Backend
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Next.js Server Actions – Handling backend logic in Next.js
                  </li>
                  <li>Prisma ORM – Database modeling and querying</li>
                  <li>
                    Supabase – Auth, Realtime DB (alternative to Firebase)
                  </li>
                  <li>
                    Vercel Realtime / Turso – Real-time capabilities and edge
                    storage
                  </li>
                </ul>
              </div>
              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Authentication & Security
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Supabase Auth – Email/password authentication</li>
                  <li>Session management with server components</li>
                  <li>Input validation using Zod (form and backend)</li>
                </ul>
              </div>
              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Databases
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>PostgreSQL (via Prisma/Supabase)</li>
                  <li>Schema design using Prisma models</li>
                </ul>
              </div>
              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Real-Time Features
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Realtime Syncing with Vercel Realtime / Supabase</li>
                  <li>
                    Notifications, messaging systems, and live comment updates
                  </li>
                </ul>
              </div>
              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  DevOps & Hosting
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Vercel – Deployment of Next.js apps</li>
                  <li>CI/CD via GitHub + Vercel</li>
                </ul>
              </div>
              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Projects (Experience-Based)
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Lost & Found / Pet Matching App (Full-stack)</li>
                  <li>Notes App (as part of a 14-day challenge)</li>
                </ul>
              </div>
              <div className="animate-on-scroll glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Additional Skills
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>API integration (e.g., with Supabase client or fetch)</li>
                  <li>Progressive build-up towards performance optimization</li>
                  <li>Familiarity with common design and UX patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default Knowledge;
