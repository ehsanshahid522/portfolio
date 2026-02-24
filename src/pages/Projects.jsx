import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-subtitle"
      >
        Some of the things I've built
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="card overflow-hidden group"
          >
            <div className="h-40 sm:h-48 overflow-hidden">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              ) : (
                <div className="w-full h-full bg-[#1e293b] flex items-center justify-center text-[#475569] text-4xl">📦</div>
              )}
            </div>
            <div className="p-4 sm:p-6 space-y-3">
              <span className="badge">{project.category}</span>
              <h3 className="text-base sm:text-lg font-bold text-[#e2e8f0]">{project.title}</h3>
              <p className="text-sm text-[#94a3b8] line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="text-[10px] sm:text-xs bg-[#1e293b] text-[#94a3b8] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md">{tech}</span>
                ))}
              </div>
              <div className="flex gap-3 pt-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary flex-1 justify-center text-xs sm:text-sm py-2.5 px-3 sm:px-4"
                >
                  Live <FaExternalLinkAlt size={10} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline flex-1 justify-center text-xs sm:text-sm py-2.5 px-3 sm:px-4"
                >
                  Code <FaGithub size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
