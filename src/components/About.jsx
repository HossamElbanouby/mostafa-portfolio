import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, Zap, Layers, Palette, Code, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Dedicated to crafting seamless mobile experiences across iOS and Android platforms.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "Building scalable and maintainable apps using industry-standard architecture patterns.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Optimizing every detail for fast load times and smooth 60fps animations.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description:
      "Designing pixel-perfect interfaces that users love to interact with.",
    color: "from-green-500 to-emerald-500",
  },
];

const stats = [
  { number: "7+", label: "Projects Completed" },
  { number: "2+", label: "Years Experience" },
  { number: "5+", label: "Technologies" },
  { number: "100%", label: "Dedication" },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Passionate <span className="gradient-text">Flutter Developer</span>
          </h2>
          <p className="text-dark-500 dark:text-dark-400 max-w-2xl mx-auto text-lg">
            Crafting beautiful, high-performance mobile applications with
            Flutter
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/5 to-flutter-cyan/5 rounded-3xl blur-xl" />
              <div className="relative bg-white dark:bg-dark-900 rounded-2xl p-8 border border-gray-100 dark:border-dark-800 shadow-xl shadow-black/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-flutter-cyan flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 dark:text-white">
                      Mostafa Ahmed
                    </h3>
                    <p className="text-sm text-primary-500">
                      Flutter Developer
                    </p>
                  </div>
                </div>

                <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4">
                  I'm a passionate Flutter developer with a strong focus on
                  creating cross-platform mobile applications that are both
                  beautiful and functional. My journey in mobile development has
                  equipped me with deep expertise in the Flutter framework and
                  the Dart programming language.
                </p>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4">
                  I specialize in building scalable applications using{" "}
                  <span className="text-primary-500 font-semibold">
                    Clean Architecture
                  </span>{" "}
                  principles, integrating{" "}
                  <span className="text-primary-500 font-semibold">
                    Firebase
                  </span>{" "}
                  services for backend solutions, and consuming{" "}
                  <span className="text-primary-500 font-semibold">
                    REST APIs
                  </span>{" "}
                  for dynamic data management.
                </p>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                  I'm always eager to learn new technologies and improve my
                  skills to deliver the best possible solutions for every
                  project I work on.
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-dark-800">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Flutter",
                      "Dart",
                      "Firebase",
                      "Clean Code",
                      "Mobile Dev",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-dark-900 rounded-2xl p-6 text-center border border-gray-100 dark:border-dark-800 shadow-lg shadow-black/5 card-hover"
                >
                  <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-dark-500 dark:text-dark-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Fact */}
            <div className="bg-gradient-to-r from-primary-500 to-flutter-cyan rounded-2xl p-6 text-white shadow-xl shadow-primary-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-6 h-6" />
                <h4 className="font-bold text-lg">Quick Fact</h4>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                I believe in writing clean, maintainable code that stands the
                test of time. Every line of code I write is crafted with purpose
                and precision, ensuring optimal performance and scalability.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group bg-white dark:bg-dark-900 rounded-2xl p-6 border border-gray-100 dark:border-dark-800 shadow-lg shadow-black/5 card-hover"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-dark-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
