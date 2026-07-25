import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaStar, FaCodeBranch, FaCalendarAlt, FaBrain, FaLightbulb } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b0f19] border border-white/12 p-6 sm:p-8 shadow-2xl z-10 space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-colors cursor-pointer"
          >
            <FaTimes />
          </button>

          {/* Title Header */}
          <div className="space-y-2 pr-10">
            <span className="badge badge-premium">{project.category}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
            <p className="text-sm text-primary font-medium">{project.tagline}</p>
          </div>

          {/* Main Image Banner */}
          <div className="rounded-2xl overflow-hidden border border-white/10 h-64 sm:h-80 bg-slate-950">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* GitHub Stats Row */}
          <div className="flex flex-wrap gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><FaStar className="text-amber-400" /> {project.stars || 10} Stars</span>
            <span className="flex items-center gap-1.5"><FaCodeBranch className="text-cyan-400" /> {project.commits || 50}+ Commits</span>
            <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-emerald-400" /> Last Updated {project.lastUpdated || '2026'}</span>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-red-500/20 space-y-2">
              <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider">The Problem</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-emerald-500/20 space-y-2">
              <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">The Engineering Solution</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white">Key Features & Modules</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-white/5">
                  <FaCheckCircle className="text-primary text-sm flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 border border-white/10 text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-pink-400 uppercase tracking-wider flex items-center gap-2">
                <FaBrain /> Key Technical Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.challenges}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <FaLightbulb /> What I Learned
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.whatILearned}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex-1 justify-center text-sm py-3"
            >
              View Live Demo <FaExternalLinkAlt size={12} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline flex-1 justify-center text-sm py-3"
            >
              Source Code <FaGithub size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
