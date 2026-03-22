import React from "react";
import { motion } from "framer-motion";

const iconPaths = {
  flutter: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm0 11.066L7.014 18.38l3.7 3.7 3.7-3.7L21.714 11h-7.4z" />
    </svg>
  ),
  dart: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948V14.1l-4.263 4.263-9.684-9.684L4.105 4.105zM12 12l-8 8h8l4-4-4-4z" />
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z" />
    </svg>
  ),
  api: (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
    </svg>
  ),
  architecture: (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  state: (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.66 2.66a1.838 1.838 0 1 1-1.103 1.033l-2.48-2.48v6.53a1.838 1.838 0 1 1-1.514-.098V8.73a1.838 1.838 0 0 1-.998-2.41L7.629 3.59.452 10.767c-.603.604-.603 1.582 0 2.188l10.48 10.477c.604.604 1.582.604 2.186 0l10.428-10.43c.604-.603.604-1.582 0-2.186z" />
    </svg>
  ),
  design: (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
};

const SkillCard = ({ skill, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="relative bg-white dark:bg-dark-900 rounded-2xl p-6 border border-gray-100 dark:border-dark-800 shadow-lg shadow-black/5 card-hover overflow-hidden">
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{
            background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
            color: skill.color,
          }}
        >
          {iconPaths[skill.icon]}
        </div>

        {/* Name & Category */}
        <h3 className="font-bold text-dark-900 dark:text-white mb-1">
          {skill.name}
        </h3>
        <p className="text-xs text-dark-400 dark:text-dark-500 mb-4 font-medium">
          {skill.category}
        </p>

        {/* Progress Bar */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-dark-400 dark:text-dark-500">
              Proficiency
            </span>
            <span className="text-xs font-bold" style={{ color: skill.color }}>
              {skill.level}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-dark-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{
                duration: 1,
                delay: 0.5 + index * 0.1,
                ease: "easeOut",
              }}
              className="h-full rounded-full relative"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
