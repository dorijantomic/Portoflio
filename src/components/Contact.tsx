import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const Contact = () => {
  return (
    <AnimatedWrapper id="contact">
      <section className="py-24 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting
              projects. Drop me a line and let&apos;s create something amazing
              together.
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-6">
            <a
              href="mailto:dorijantomic@outlook.com"
              className="group flex items-center justify-center space-x-3 glass rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">📧</span>
              <span className="font-semibold">dorijantomic@outlook.com</span>
            </a>

            <a
              href="tel:0923795663"
              className="group flex items-center justify-center space-x-3 glass rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">📱</span>
              <span className="font-semibold">0923795663</span>
            </a>

            <div className="flex items-center justify-center space-x-3 glass rounded-full px-8 py-4">
              <span className="text-xl">📍</span>
              <span className="font-semibold">Osijek, CRO</span>
            </div>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default Contact;
