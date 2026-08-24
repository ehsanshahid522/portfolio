import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExclamationTriangle, FaLightbulb } from 'react-icons/fa';

const ProjectCard = ({ project, onSelectCaseStudy }) => {
  const isMobileApp = project.category?.toLowerCase().includes('mobile') || project.technologies?.includes('React Native');
  const liveDemoText = isMobileApp ? '📱 View App Demo' : '🌐 View Live Project';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      className="card p-6 flex flex-col justify-between space-y-6 group border border-white/10 hover:border-primary/40 bg-slate-900/80 backdrop-blur-xl rounded-3xl"
    >
      <div className="space-y-4">
        {/* Screenshot Image Preview */}
        <div className="relative overflow-hidden rounded-2xl border border-white/8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 border border-white/10 text-primary backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            {project.tagline}
          </p>
        </div>

        {/* Feature Badges */}
        {project.featureBadges && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {project.featureBadges.map(badge => (
              <span key={badge} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-slate-950/80 border border-cyan-500/20 text-cyan-300">
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Problem Statement */}
        <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-slate-300 space-y-0.5">
          <span className="font-bold text-rose-400 flex items-center gap-1">
            <FaExclamationTriangle size={11} /> Problem:
          </span>
          <p>{project.problem}</p>
        </div>

        {/* Solution Statement */}
        <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-slate-300 space-y-0.5">
          <span className="font-bold text-emerald-400 flex items-center gap-1">
            <FaLightbulb size={11} /> Solution:
          </span>
          <p>{project.solution}</p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map(tech => (
            <span key={tech} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-950/80 border border-white/8 text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons with explicit live demo label formatting */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/8">
        {onSelectCaseStudy && (
          <button
            onClick={() => onSelectCaseStudy(project)}
            className="btn-primary text-xs py-2 px-4 flex-1 justify-center font-bold"
          >
            📸 Case Study
          </button>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-xs py-2 px-3 flex items-center gap-1 font-semibold"
            title="Live Demo"
          >
            <span>{liveDemoText}</span>
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-xs py-2 px-3 flex items-center gap-1 font-semibold"
            title="View Code"
          >
            <FaGithub size={13} /> <span>Code</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
