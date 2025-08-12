"use client";
import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import { projects } from "@/lib/projects";
import { usePathname } from "next/navigation";

const ProjectDetail = () => {
  const pathname = usePathname();
  const projectId = pathname.split("/").pop() as keyof typeof projects;
  const project = projects[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <AnimatedWrapper>
        <section className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold gradient-text mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <a
                href={project.liveDemoUrl}
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
                href={project.requestCodeUrl}
                target="_blank"
                className="glass rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-semibold">Request Code</span>
              </a>
            </div>
          </div>
        </section>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold gradient-text text-center mb-16">
              Tech Stack & Architecture
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.techStack.map((stack) => (
                <div className="glass rounded-2xl p-8" key={stack.category}>
                  <h3 className="text-2xl font-bold gradient-text mb-4">
                    {stack.category}
                  </h3>
                  <ul className="text-gray-300 leading-relaxed space-y-2">
                    {stack.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold gradient-text text-center mb-16">
              Developer Experience
            </h2>
            <div className="glass rounded-2xl p-8 grid md:grid-cols-2 gap-8">
              {project.developerExperience.map((exp) => (
                <div key={exp.title}>
                  <h3 className="text-xl font-bold text-accent mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold gradient-text text-center mb-16">
              Deployment & DevOps
            </h2>
            <div className="glass rounded-2xl p-8 grid md:grid-cols-2 gap-8">
              {project.deployment.map((dep) => (
                <div key={dep.title}>
                  <h3 className="text-xl font-bold text-accent mb-3">
                    {dep.title}
                  </h3>
                  <p className="text-gray-300">{dep.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedWrapper>
      <AnimatedWrapper>
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
            </div>
          </div>
        </section>
      </AnimatedWrapper>
    </>
  );
};

export default ProjectDetail;
