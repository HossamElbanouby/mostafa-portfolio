import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  Linkedin,
  Github,
  Download,
  ChevronRight,
  Smartphone,
} from "lucide-react";

const Hero = () => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-flutter-cyan/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/5 to-flutter-cyan/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4"
            >
              <span className="text-dark-900 dark:text-white">Hi, I'm</span>
              <br />
              <span className="gradient-text">Mostafa Ahmed</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-600 dark:text-dark-300 mb-6 h-10"
            >
              <TypeAnimation
                sequence={[
                  "Flutter Developer",
                  2000,
                  "Mobile App Creator",
                  2000,
                  "Cross-Platform Expert",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-dark-500 dark:text-dark-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Passionate Flutter developer specializing in building beautiful,
              high-performance cross-platform mobile applications. Turning ideas
              into pixel-perfect mobile experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={() => handleNavClick("#projects")}
                className="btn-primary w-full sm:w-auto"
              >
                View Projects
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-secondary w-full sm:w-auto"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-dark-400 dark:text-dark-500">
                Find me on
              </span>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/mostafa-ahmed-2a71ab281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-800 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-dark-600 dark:text-dark-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/mostafacoding2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-flutter-blue to-flutter-cyan rounded-2xl flex items-center justify-center shadow-xl shadow-primary-500/20 z-10"
              >
                <span className="text-2xl">📱</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-12 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/20 z-10"
              >
                <span className="text-xl">🔥</span>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 12, -8] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 -right-10 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/20 z-10"
              >
                <span className="text-xl">⚡</span>
              </motion.div>

              {/* Phone Mockup */}
              <div className="relative w-64 h-[500px] sm:w-72 sm:h-[560px]">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-flutter-cyan/20 rounded-[3rem] blur-2xl" />
                <div className="relative w-full h-full bg-dark-900 rounded-[3rem] border-[6px] border-dark-700 shadow-2xl overflow-hidden">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark-900 rounded-b-2xl z-20" />

                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-primary-600 via-primary-500 to-flutter-cyan p-6 pt-10 flex flex-col items-center justify-center text-white">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-20 h-20 mb-6"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <linearGradient
                            id="flutterGrad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#02569B" />
                            <stop offset="50%" stopColor="#13B9FD" />
                            <stop offset="100%" stopColor="#027DFD" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 60 10 L 25 50 L 40 65 L 90 10 Z M 40 65 L 25 50 L 25 80 L 40 95 L 55 80 Z M 55 80 L 90 45 L 75 45 L 40 80 Z"
                          fill="url(#flutterGrad)"
                          opacity="0.9"
                        />
                      </svg>
                    </motion.div>

                    <div className="text-center">
                      <p className="text-sm opacity-80 mb-1">Welcome to</p>
                      <h3 className="text-xl font-bold mb-1">Mostafa's</h3>
                      <h3 className="text-xl font-bold mb-3">Portfolio</h3>
                      <div className="w-12 h-0.5 bg-white/40 rounded-full mx-auto mb-3" />
                      <p className="text-xs opacity-70">
                        Built with Flutter & ❤️
                      </p>
                    </div>

                    {/* Fake App Icons */}
                    <div className="grid grid-cols-3 gap-3 mt-8">
                      {["🌤️", "💻", "💳", "👕", "🏬", "🎬"].map((emoji, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-lg"
                        >
                          {emoji}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-dark-400 dark:text-dark-500"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
