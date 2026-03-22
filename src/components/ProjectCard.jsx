import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute -top-3 right-4 z-10">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-flutter-cyan text-white text-xs font-bold shadow-lg">
            ⭐ Featured
          </span>
        </div>
      )}

      <div className="relative bg-white dark:bg-dark-900 rounded-2xl border border-gray-100 dark:border-dark-800 shadow-lg shadow-black/5 overflow-hidden card-hover h-full flex flex-col">
        {/* Card Header - Gradient */}
        <div
          className={`relative h-48 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center overflow-hidden`}
        >
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />

          {/* Project Icon */}
          <motion.div
            className="relative text-6xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.icon}
          </motion.div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-dark-800 hover:bg-white transition-colors transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-dark-800 hover:bg-white transition-colors transform hover:scale-110"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category */}
          <span className="text-xs font-semibold text-primary-500 dark:text-primary-400 mb-2 uppercase tracking-wider">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-100 dark:border-dark-800">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors group/link"
            >
              View on GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
