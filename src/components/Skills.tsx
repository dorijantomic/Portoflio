import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300">
            Technologies I work with daily
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-on-scroll skill-card glass rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/10">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>React/Next.js</span>
                  <span className="text-accent">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-accent h-1 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span>TypeScript</span>
                  <span className="text-accent">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-accent h-1 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div
              className="animate-on-scroll skill-card glass rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/10"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Node.js</span>
                  <span className="text-accent">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-accent h-1 rounded-full"
                    style={{ width: "88%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span>Python</span>
                  <span className="text-accent">75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-accent h-1 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div
              className="animate-on-scroll skill-card glass rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/10"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-semibold mb-3">Database</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>PostgreSQL</span>
                  <span className="text-accent">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-accent h-1 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span>MongoDB</span>
                  <span className="text-accent">70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-accent h-1 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div
              className="animate-on-scroll skill-card glass rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/10"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-3">Cloud</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>AWS</span>
                  <span className="text-accent">82%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-accent h-1 rounded-full"
                    style={{ width: "82%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span>Docker</span>
                  <span className="text-accent">78%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-accent h-1 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
