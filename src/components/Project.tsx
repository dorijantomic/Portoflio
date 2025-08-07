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
                Lost & Found / Pet Matching App
              </h3>
              <p className="text-gray-300">
                A full-stack application built with Next.js, Prisma, and
                Supabase. Features include animal listings, comments,
                notifications, messaging, and reporting.
              </p>
            </div>
            <div className="animate-on-scroll glass rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Notes App
              </h3>
              <p className="text-gray-300">
                A notes application created as part of a 14-day challenge, using
                Next.js, Supabase, Prisma, and React Hook Form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
