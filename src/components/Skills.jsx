import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillCard from "./SkillCard";
import { skills } from "../data/skills";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className="section-padding relative bg-gray-50/50 dark:bg-dark-900/50"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

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
            My Skills
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Technologies & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-dark-500 dark:text-dark-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern mobile applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Tech Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 dark:from-dark-800 dark:via-dark-700 dark:to-dark-800 rounded-2xl p-8 text-white overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-flutter-cyan/10" />
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-bold mb-2">
              Always Learning, Always Growing
            </h3>
            <p className="text-dark-300 text-sm max-w-xl mx-auto">
              I continuously explore new technologies and best practices to
              deliver cutting-edge solutions. Currently diving deeper into
              advanced state management and animation techniques in Flutter.
            </p>
          </div>

          {/* Scrolling tech names */}
          <div className="mt-6 flex gap-8 animate-scroll overflow-hidden">
            <div className="flex gap-8 shrink-0 animate-marquee">
              {[
                "Flutter",
                "Dart",
                "Firebase",
                "REST API",
                "Clean Architecture",
                "BLoC",
                "Provider",
                "GetX",
                "Riverpod",
                "Hive",
                "SQLite",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-dark-400 text-sm font-mono whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
