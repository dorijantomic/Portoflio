import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="animate-on-scroll">
            <h1 className="text-6xl lg:text-8xl font-bold leading-none">
              Hey, I&apos;m{" "}
              <span className="gradient-text block">Dorijan Tomić</span>
            </h1>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Creative developer based in{" "}
              <span className="text-accent font-semibold">Osijek</span>,
              crafting digital experiences at{" "}
              <span className="text-accent font-semibold">Mono</span>. I turn
              ideas into beautiful, functional realities.
            </p>
          </div>

          <div
            className="animate-on-scroll flex items-center space-x-6"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="group relative px-8 py-4 bg-accent hover:bg-accent/80 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">Let&apos;s Connect</span>
              <div className="absolute inset-0 bg-accent rounded-full animate-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          className="animate-on-scroll flex justify-center lg:justify-end"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-600 to-pink-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
            <div className="relative">
              <Image
                height={200}
                width={200}
                src="/19276806.jpg"
                alt="Dorijan Tomić"
                className="w-80 h-80 rounded-full object-cover border-4 border-white/10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-dark/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 glass rounded-full flex items-center justify-center animate-float">
              <span className="text-2xl">👋</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
