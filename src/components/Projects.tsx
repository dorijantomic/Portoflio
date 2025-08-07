import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Projects
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-on-scroll glass rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Incoming
              </h3>
              <p className="text-gray-300">
                New project is on its way, stay tuned for something amazing!
              </p>
            </div>
            <div className="animate-on-scroll glass rounded-2xl p-6">
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
            <div className="animate-on-scroll glass rounded-2xl p-6">
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
  );
};

export default Projects;
