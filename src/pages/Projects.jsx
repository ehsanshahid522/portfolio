import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaExclamationTriangle, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import projects from '../data/projects';
import ProjectCaseStudyModal from '../components/ProjectCaseStudyModal';
import FreeConsultationBanner from '../components/FreeConsultationBanner';

const categories = ['All', 'AI & Machine Learning', 'Full Stack (MERN)', 'AI & Desktop', 'Web Application'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Reveal as="span" className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
            Proven Track Record
          </Reveal>
          <Reveal as="h1" className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Projects & <span className="gradient-text">Case Studies</span>
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle text-base sm:text-lg">
            Real-world full stack applications, AI deep learning models, and SaaS solutions. Each project highlights the business problem, my solution, and key engineering metrics.
          </Reveal>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-primary border-primary/50 text-white shadow-lg shadow-primary/20 scale-105'
                  : 'bg-slate-900/60 border-white/8 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="card p-6 flex flex-col justify-between space-y-6 group border border-white/10 hover:border-primary/40 bg-slate-900/80 backdrop-blur-xl"
            >
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-xl border border-white/8">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 border border-white/10 text-primary backdrop-blur-md">
                      {proj.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {proj.tagline}
                  </p>
                </div>

                {/* Problem Statement */}
                <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/20 text-xs text-slate-300 space-y-0.5">
                  <span className="font-bold text-rose-400 flex items-center gap-1">
                    <FaExclamationTriangle size={11} /> Problem:
                  </span>
                  <p>{proj.problem}</p>
                </div>

                {/* Solution Statement */}
                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-xs text-slate-300 space-y-0.5">
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <FaLightbulb size={11} /> Solution:
                  </span>
                  <p>{proj.solution}</p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.slice(0, 5).map(tech => (
                    <span key={tech} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-950/80 border border-white/8 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/8">
                <button
                  onClick={() => setSelectedCaseStudy(proj)}
                  className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
                >
                  📸 Read Case Study
                </button>

                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline text-xs py-2 px-3"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={11} />
                  </a>
                )}

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline text-xs py-2 px-3"
                    title="View Code"
                  >
                    <FaGithub size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FREE CONSULTATION BANNER */}
      <FreeConsultationBanner />

      {/* CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <ProjectCaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </PageShell>
  );
};

export default Projects;
