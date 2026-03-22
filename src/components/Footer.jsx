import React from "react";
import { motion } from "framer-motion";
import { Code2, Heart, Linkedin, Github, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-900 dark:bg-dark-950 text-white overflow-hidden">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-flutter-cyan to-primary-500" />

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-flutter-cyan flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg">Mostafa</span>
              <span className="font-bold text-lg text-primary-400 ml-1">
                Ahmed
              </span>
              <p className="text-xs text-dark-400">Flutter Developer</p>
            </div>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-dark-400 text-sm flex items-center justify-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 inline" /> using
              React & Tailwind CSS
            </p>
            <p className="text-dark-500 text-xs mt-1">
              © {currentYear} Mostafa Ahmed. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-end gap-3">
            <a
              href="https://linkedin.com/in/mostafa-ahmed-2a71ab281"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-800 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/mostafacoding2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-800 hover:bg-dark-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:mostafa.ahmed.dev@gmail.com"
              className="w-10 h-10 rounded-xl bg-dark-800 hover:bg-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
