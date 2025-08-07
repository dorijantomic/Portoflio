import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const About = () => {
  return (
    <AnimatedWrapper>
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
                About Me
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                I&apos;m a passionate full-stack developer who thrives on
                building scalable web applications. When I&apos;m not coding,
                you can find me hitting the gym, running, or exploring the great
                outdoors. I&apos;m a firm believer in a healthy body, healthy
                mind.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Currently At</h3>
                <p className="text-gray-300">Developer at Mono</p>
              </div>

              <div className="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Osijek, CRO</p>
              </div>

              <div className="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-gray-300">Building Digital Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default About;
