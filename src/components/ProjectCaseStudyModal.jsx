import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaExclamationTriangle, FaLightbulb, FaLayerGroup, FaTrophy } from 'react-icons/fa';

const ProjectCaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  const caseStudy = project.caseStudy || {};

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/12 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-8 text-slate-200 custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-white/10 z-10"
            aria-label="Close Modal"
          >
            <FaTimes size={16} />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 border-b border-white/10 pb-6">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
              Project Case Study — {project.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              {project.tagline}
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs px-4 py-2"
                >
                  🌐 Live Demo <FaExternalLinkAlt size={10} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-xs px-4 py-2"
                >
                  <FaGithub size={13} /> View Code
                </a>
              )}
            </div>
          </div>

          {/* Case Study Sections */}
          <div className="space-y-8">
            {/* 01 — THE PROBLEM */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-lg">
                <FaExclamationTriangle className="text-rose-400" />
                <span>01 — The Problem</span>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 text-slate-300 text-sm sm:text-base leading-relaxed">
                {caseStudy.problem || project.problem}
              </div>
            </div>

            {/* 02 — MY SOLUTION */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
                <FaLightbulb className="text-emerald-400" />
                <span>02 — My Solution</span>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-slate-300 text-sm sm:text-base leading-relaxed">
                {caseStudy.solution || project.solution}
              </div>
            </div>

            {/* 03 — KEY FEATURES */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
                <FaCheckCircle className="text-cyan-400" />
                <span>03 — Key Features Delivered</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-white/8 flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 04 — SYSTEM ARCHITECTURE & TECH STACK */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-lg">
                <FaLayerGroup className="text-purple-400" />
                <span>04 — Tech Stack & Architecture</span>
              </div>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Architecture Breakdown if available */}
              {caseStudy.architecture && caseStudy.architecture.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {caseStudy.architecture.map((arch, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-white/10 space-y-1">
                      <div className="flex items-center justify-between text-xs text-purple-400 font-mono font-bold">
                        <span>{arch.stage}</span>
                        <span className="text-slate-400">{arch.tech}</span>
                      </div>
                      <p className="text-xs text-slate-300">{arch.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 05 — TECHNICAL CHALLENGES */}
            {caseStudy.challenges && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                  <FaExclamationTriangle className="text-amber-400" />
                  <span>05 — Technical Challenges Overcome</span>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-slate-300 text-sm leading-relaxed">
                  {caseStudy.challenges}
                </div>
              </div>
            )}

            {/* 06 — BUSINESS RESULTS */}
            {caseStudy.results && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-lg">
                  <FaTrophy className="text-primary" />
                  <span>06 — Results & Impact</span>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-white font-medium text-sm leading-relaxed">
                  {caseStudy.results}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need a similar solution for your business?
            </div>
            <a
              href="https://wa.me/923000000000?text=Hi%20Ehsan,%20I%20saw%20your%20project%20case%20study%20and%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs px-5 py-2.5"
            >
              💬 Discuss Your Project on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectCaseStudyModal;
