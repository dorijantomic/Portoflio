import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const Projects = () => {
  return (
    <AnimatedWrapper id="projects">
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
              Projects
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Habbit - Habit Tracker
                </h3>
                <p className="text-gray-300">
                  A full-stack habit tracking application with features like user authentication, analytics, and a calendar view. Built with Next.js, Prisma, and more.
                </p>
                <a
                  href="/projects/habbit-app"
                  className="text-accent font-semibold mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Modern Notes App
                </h3>
                <p className="text-gray-300">
                  A full-stack notes application built as part of a 1-day
                  challenge. Tech stack includes Next.js 15, React 19, Prisma,
                  PostgreSQL, and custom JWT authentication.
                </p>
                <a
                  href="/projects/note-app"
                  className="text-accent font-semibold mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Incoming
                </h3>
                <p className="text-gray-300">
                  New project is on its way, stay tuned for something amazing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default Projects;
